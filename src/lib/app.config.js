import { env } from '$env/dynamic/public'

export default {
	shopApiBaseUrl: env.PUBLIC_SHOP_API_BASE_URL || '',
	shopApiKey: env.PUBLIC_SHOP_API_KEY || '',
	shopModuleId: env.PUBLIC_SHOP_MODULE_ID || 0,
	paypalClientId: env.PUBLIC_PAYPAL_CLIENT_ID || ''
}
