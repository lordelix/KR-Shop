import { writable, type Writable } from 'svelte/store';
import type { XioniShop } from '$lib/boilerplate/xioni/types';

type ResettableStore<T> = Writable<T> & {
  $reset: () => void;
};

function createResettableStore<T>(initialValue: T): ResettableStore<T> {
  const store = writable(initialValue);

  return {
    ...store,
    $reset: () => store.set(initialValue)
  };
}

export const ORDER = createResettableStore({
  address: {},
  total: {},
  shippingCost: {}
} as XioniShop.Order);

export const CART = createResettableStore({
  gross: {
    value: 0,
    formatted: '0,00 €'
  },
  total: {
    value: 0,
    formatted: '0,00 €'
  },
  weight: 0,
  products: [],
  shipping: {
    price: {
      value: 0,
      formatted: 'kostenlos'
    },
    unit: 'kg.'
  }
} satisfies XioniShop.Cart);
