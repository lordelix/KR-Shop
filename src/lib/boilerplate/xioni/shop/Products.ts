import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse';
import { ApiPaths } from '../api/api.d';
import createClient from '../api/client';
import appConfig from '../../../app.config.js';

const moduleId = Number(appConfig.shopModuleId);

export function useProducts() {
  const client = createClient();

  /**
   * Get all products
   *
   * @param limit Max amount of products returned
   * @returns List of Products
   */

  function getProducts(params?: { limit?: number; frontpage?: boolean }) {
    return fetchWithErrorHandling(() =>
      client.GET(ApiPaths.getProducts, {
        params: {
          path: { moduleId },
          query: {
            limit: params?.limit,
            frontpage: params?.frontpage
          }
        }
      })
    );
  }

  /**
   * Get a single product
   *
   * @param id product id
   * @returns Product
   */

  function getProduct(id: number) {
    return fetchWithErrorHandling(() =>
      client.GET(ApiPaths.getProduct, {
        params: {
          path: { moduleId, productId: id }
        }
      })
    );
  }
  /**
   * Get produtcs corresponding to a given Category
   *
   * @param category Category id
   * @param limit Limit of products
   * @returns List of Products
   */

  function getProductsByGroup(
    category: number,
    params?: {
      limit?: number;
      recursive?: boolean;
    }
  ) {
    return fetchWithErrorHandling(() =>
      client.GET(ApiPaths.getGroupProducts, {
        params: {
          path: { moduleId, groupId: category },
          query: {
            limit: params?.limit,
            recursive: params?.recursive
          }
        }
      })
    );
  }

  return {
    getProduct,
    getProducts,
    getProductsByGroup
  };
}
