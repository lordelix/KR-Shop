export type XioniShopProductProps = {
  product: XioniShop.Product;
  basePath?: string;
  onAddToCart?: (product: XioniShop.Product) => void;
} & HTMLAttributes<HTMLElement>;
