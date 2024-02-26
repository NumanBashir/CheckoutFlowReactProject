export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  rebateQuantity: number;
  rebatePercent: number;
  upsellProductId: string;
}
