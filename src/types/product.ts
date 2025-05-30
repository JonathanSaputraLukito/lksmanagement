import { Database } from './database.types';

// Base product type from database
export type Product = Database['public']['Tables']['products']['Row'];

// Extended product type including stock information
export interface ProductWithStock extends Product {
  quantity_on_hand: number;
  category_name: string;
}

// Product category type
export type ProductCategory = Database['public']['Enums']['product_category'];