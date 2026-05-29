import * as ENV from '$env/static/public';

export default {
  paypalClientId: ENV.PUBLIC_PAYPAL_CLIENT_ID || '',
  shopApiKey: ENV.PUBLIC_SHOP_API_KEY || '',
  shopModuleId: ENV.PUBLIC_SHOP_MODULE_ID || 0
};
