import createOpenApiClient, { type ClientOptions } from 'openapi-fetch';
import appConfig from '$lib/app.config';
import type { paths } from './api';

export default function createClient(clientOptions?: ClientOptions) {
  return createOpenApiClient<paths>({
    baseUrl: appConfig.shopApiBaseUrl,
    ...clientOptions,
    headers: {
      accept: 'application/json',
      'api-key': appConfig.shopApiKey,
      ...clientOptions?.headers
    }
  });
}
