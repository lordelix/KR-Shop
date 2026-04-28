import type { KyResponse } from 'ky';
import appConfig from '$lib/app.config';
import { createClient, createShopUrl } from '../api/client';

// --- Factory -------------------------------------------------------------------------------------

export function usePayment() {
  const client = createClient();

  async function createPayPalTransaction(
    transactionId: string
  ): Promise<string> {
    try {
      const { orderId } = await client
        .post<{ orderId: string }>(createShopUrl('payment/paypal/create'), {
          headers: {
            'api-key': appConfig.shopApiKey,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ transactionId })
        })
        .json();

      return orderId;
    } catch (error) {
      const errorData = await ((error as any).response as KyResponse).json();

      throw errorData;
    }
  }

  async function capturePayPalTransaction(orderId: string): Promise<boolean> {
    try {
      await client.post(createShopUrl('payment/paypal/capture'), {
        headers: {
          'api-key': appConfig.shopApiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ orderId })
      });

      return true;
    } catch (error) {
      const errorData = await ((error as any).response as KyResponse).json();

      throw errorData;
    }
  }

  return {
    createPayPalTransaction,
    capturePayPalTransaction
  };
}
