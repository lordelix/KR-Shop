import { PUBLIC_PAYPAL_CLIENT_ID, PUBLIC_SHOP_API_KEY, PUBLIC_SHOP_MODULE_ID } from '$env/static/public';

export default {
  paypalClientId: PUBLIC_PAYPAL_CLIENT_ID || '',
  shopApiKey: PUBLIC_SHOP_API_KEY || '',
  shopModuleId: PUBLIC_SHOP_MODULE_ID || 0
};
