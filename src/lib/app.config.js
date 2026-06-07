import { env } from '$env/dynamic/public';

export default {
  paypalClientId: env.PUBLIC_PAYPAL_CLIENT_ID || '',
  shopApiKey: env.PUBLIC_SHOP_API_KEY || '',
  shopModuleId: env.PUBLIC_SHOP_MODULE_ID || 0
};
