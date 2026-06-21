import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse';
import { ApiPaths } from '../api/api.d';
import createClient from '../api/client';
import appConfig from '../../../app.config.js';
import type { XioniShop } from '../types';

const moduleId = Number(appConfig.shopModuleId);

type UpdateOrderParams = {
  address?: XioniShop.Order['address'];
  deliveryAddress?: XioniShop.Order['deliveryAddress'] | null;
  paymentType?: XioniShop.Order['paymentType'];
  message?: XioniShop.Order['message'] | null;
};

// --- Factory -------------------------------------------------------------------------------------

export function useOrder() {
  const client = createClient();

  async function createOrder(): Promise<string> {
    const data = await fetchWithErrorHandling(() =>
      client.POST(ApiPaths.postOrder, {
        params: {
          path: { moduleId }
        }
      })
    );

    return data.transactionId;
  }

  async function updateOrder(
    update: UpdateOrderParams
  ): Promise<XioniShop.Order> {
    const data = await fetchWithErrorHandling(() =>
      client.PATCH(ApiPaths.updateOrder, {
        params: {
          path: { moduleId }
        },
        body: update
      })
    );

    return orderAdapter(data) as XioniShop.Order;
  }

  async function getOrder(id?: string): Promise<XioniShop.Order | null> {
    const data = await fetchWithErrorHandling(
      () =>
        id
          ? client.GET(ApiPaths.getOrderByTransactionId, {
              params: {
                path: { moduleId, transactionId: id }
              }
            })
          : client.GET(ApiPaths.getOrder, {
              params: {
                path: { moduleId }
              }
            }),
      { noContent: true }
    );

    return data ? (orderAdapter(data) as XioniShop.Order) : null;
  }

  return {
    createOrder,
    updateOrder,
    getOrder
  };
}

// --- Helper --------------------------------------------------------------------------------------

function orderAdapter(order: any): XioniShop.Order {
  return {
    ...order,
    date: new Date(order.date),
    paymentType: mapPaymenType(order.paymentType)
  };
}

function mapPaymenType(paymentType: string) {
  switch (paymentType) {
    case 'paypal':
      return 'Paypal';
    case 'prepayment':
      return 'Vorkasse';
    default:
      return paymentType;
  }
}
