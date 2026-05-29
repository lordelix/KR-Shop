import * as ENV from '$env/static/public';

export default {
  paypalClientId: ENV.PUBLIC_PAYPAL_CLIENT_ID || '',
  shopApiBaseUrl:
    ENV.PUBLIC_SHOP_API_BASE_URL || 'https://api.klickrhein.de/v6',
  shopApiKey: ENV.PUBLIC_SHOP_API_KEY || '',
  shopModuleId: ENV.PUBLIC_SHOP_MODULE_ID || 0
};
