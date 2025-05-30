export interface Product {
  product_id: number;
  name: string;
  sku: string | null;
  category_id: number;
  current_price: number;
  unit_of_measurement: string | null;
  low_stock_threshold: number;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
}

export interface ProductWithStock extends Product {
  quantity_on_hand: number;
}

export interface ProductCategory {
  category_id: number;
  category_name: string;
  description: string | null;
}