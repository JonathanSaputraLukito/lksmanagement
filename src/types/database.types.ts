export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      aluminium_coloring_orders: {
        Row: {
          approval_status: Database["public"]["Enums"]["approval_status_option"] | null
          approved_by_user_id: number | null
          approval_timestamp: string | null
          color_to_apply: string
          coloring_order_id: number
          created_at: string | null
          expected_completion_date: string | null
          factory_id: number
          notes: string | null
          order_date: string | null
          product_id: number
          quantity: number
          status: Database["public"]["Enums"]["order_status_option"] | null
          total_price: number | null
          unit_price: number
          updated_at: string | null
          user_id: number
        }
        Insert: {
          approval_status?: Database["public"]["Enums"]["approval_status_option"] | null
          approved_by_user_id?: number | null
          approval_timestamp?: string | null
          color_to_apply: string
          coloring_order_id?: number
          created_at?: string | null
          expected_completion_date?: string | null
          factory_id: number
          notes?: string | null
          order_date?: string | null
          product_id: number
          quantity: number
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_price?: number | null
          unit_price: number
          updated_at?: string | null
          user_id: number
        }
        Update: {
          approval_status?: Database["public"]["Enums"]["approval_status_option"] | null
          approved_by_user_id?: number | null
          approval_timestamp?: string | null
          color_to_apply?: string
          coloring_order_id?: number
          created_at?: string | null
          expected_completion_date?: string | null
          factory_id?: number
          notes?: string | null
          order_date?: string | null
          product_id?: number
          quantity?: number
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_price?: number | null
          unit_price?: number
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "aluminium_coloring_orders_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["factory_id"]
          },
          {
            foreignKeyName: "aluminium_coloring_orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "aluminium_coloring_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      audit_logs: {
        Row: {
          action_timestamp: string | null
          action_type: string
          description: string | null
          ip_address: string | null
          log_id: number
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string | null
          user_id: number | null
        }
        Insert: {
          action_timestamp?: string | null
          action_type: string
          description?: string | null
          ip_address?: string | null
          log_id?: number
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
          user_id?: number | null
        }
        Update: {
          action_timestamp?: string | null
          action_type?: string
          description?: string | null
          ip_address?: string | null
          log_id?: number
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      current_stock: {
        Row: {
          last_updated: string | null
          product_id: number
          quantity_on_hand: number
        }
        Insert: {
          last_updated?: string | null
          product_id: number
          quantity_on_hand?: number
        }
        Update: {
          last_updated?: string | null
          product_id?: number
          quantity_on_hand?: number
        }
        Relationships: [
          {
            foreignKeyName: "current_stock_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      customers: {
        Row: {
          address: string | null
          company_name: string | null
          created_at: string | null
          customer_id: number
          email: string | null
          name: string
          npwp: string | null
          phone_number: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          company_name?: string | null
          created_at?: string | null
          customer_id?: number
          email?: string | null
          name: string
          npwp?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          company_name?: string | null
          created_at?: string | null
          customer_id?: number
          email?: string | null
          name?: string
          npwp?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      debt_payments: {
        Row: {
          amount: number
          created_at: string | null
          debt_id: number
          debt_payment_id: number
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          reference_number: string | null
          user_id: number
        }
        Insert: {
          amount: number
          created_at?: string | null
          debt_id: number
          debt_payment_id?: number
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          reference_number?: string | null
          user_id: number
        }
        Update: {
          amount?: number
          created_at?: string | null
          debt_id?: number
          debt_payment_id?: number
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          reference_number?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "debt_payments_debt_id_fkey"
            columns: ["debt_id"]
            isOneToOne: false
            referencedRelation: "debts"
            referencedColumns: ["debt_id"]
          },
          {
            foreignKeyName: "debt_payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      debts: {
        Row: {
          amount_paid: number | null
          created_at: string | null
          debt_id: number
          due_date: string | null
          factory_id: number
          notes: string | null
          purchase_order_id: number | null
          remaining_debt: number | null
          status: Database["public"]["Enums"]["order_status_option"] | null
          total_debt_amount: number
          updated_at: string | null
        }
        Insert: {
          amount_paid?: number | null
          created_at?: string | null
          debt_id?: number
          due_date?: string | null
          factory_id: number
          notes?: string | null
          purchase_order_id?: number | null
          remaining_debt?: number | null
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_debt_amount: number
          updated_at?: string | null
        }
        Update: {
          amount_paid?: number | null
          created_at?: string | null
          debt_id?: number
          due_date?: string | null
          factory_id?: number
          notes?: string | null
          purchase_order_id?: number | null
          remaining_debt?: number | null
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_debt_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "debts_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["factory_id"]
          },
          {
            foreignKeyName: "debts_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: true
            referencedRelation: "purchase_orders"
            referencedColumns: ["purchase_order_id"]
          }
        ]
      }
      factories: {
        Row: {
          address: string | null
          contact_person_phone: string | null
          created_at: string | null
          email: string | null
          factory_id: number
          is_coloring_factory: boolean | null
          name: string
          npwp: string | null
          phone_number: string | null
          sales_contact_name: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          contact_person_phone?: string | null
          created_at?: string | null
          email?: string | null
          factory_id?: number
          is_coloring_factory?: boolean | null
          name: string
          npwp?: string | null
          phone_number?: string | null
          sales_contact_name?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          contact_person_phone?: string | null
          created_at?: string | null
          email?: string | null
          factory_id?: number
          is_coloring_factory?: boolean | null
          name?: string
          npwp?: string | null
          phone_number?: string | null
          sales_contact_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      price_change_logs: {
        Row: {
          change_date: string | null
          created_at: string | null
          new_price: number
          old_price: number
          price_change_log_id: number
          product_id: number
          reason: string | null
          user_id: number
        }
        Insert: {
          change_date?: string | null
          created_at?: string | null
          new_price: number
          old_price: number
          price_change_log_id?: number
          product_id: number
          reason?: string | null
          user_id: number
        }
        Update: {
          change_date?: string | null
          created_at?: string | null
          new_price?: number
          old_price?: number
          price_change_log_id?: number
          product_id?: number
          reason?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "price_change_logs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "price_change_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      product_accessories_details: {
        Row: {
          brand: string | null
          product_id: number
        }
        Insert: {
          brand?: string | null
          product_id: number
        }
        Update: {
          brand?: string | null
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_accessories_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      product_aluminium_details: {
        Row: {
          color: string | null
          length_m: number
          product_id: number
          weight_kg_per_unit: number | null
        }
        Insert: {
          color?: string | null
          length_m: number
          product_id: number
          weight_kg_per_unit?: number | null
        }
        Update: {
          color?: string | null
          length_m?: number
          product_id?: number
          weight_kg_per_unit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_aluminium_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      product_categories: {
        Row: {
          category_id: number
          category_name: Database["public"]["Enums"]["product_category"]
          description: string | null
        }
        Insert: {
          category_id?: number
          category_name: Database["public"]["Enums"]["product_category"]
          description?: string | null
        }
        Update: {
          category_id?: number
          category_name?: Database["public"]["Enums"]["product_category"]
          description?: string | null
        }
        Relationships: []
      }
      product_finished_goods_details: {
        Row: {
          brand: string | null
          product_id: number
        }
        Insert: {
          brand?: string | null
          product_id: number
        }
        Update: {
          brand?: string | null
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_finished_goods_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      product_glass_details: {
        Row: {
          glass_type: string | null
          product_id: number
          thickness_mm: number | null
        }
        Insert: {
          glass_type?: string | null
          product_id: number
          thickness_mm?: number | null
        }
        Update: {
          glass_type?: string | null
          product_id?: number
          thickness_mm?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_glass_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      product_light_steel_details: {
        Row: {
          length_m: number
          product_id: number
          weight_kg_per_unit: number | null
        }
        Insert: {
          length_m: number
          product_id: number
          weight_kg_per_unit?: number | null
        }
        Update: {
          length_m?: number
          product_id?: number
          weight_kg_per_unit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_light_steel_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      products: {
        Row: {
          category_id: number
          created_at: string | null
          current_price: number
          is_deleted: boolean | null
          low_stock_threshold: number | null
          name: string
          product_id: number
          sku: string | null
          unit_of_measurement: string | null
          updated_at: string | null
        }
        Insert: {
          category_id: number
          created_at?: string | null
          current_price: number
          is_deleted?: boolean | null
          low_stock_threshold?: number | null
          name: string
          product_id?: number
          sku?: string | null
          unit_of_measurement?: string | null
          updated_at?: string | null
        }
        Update: {
          category_id?: number
          created_at?: string | null
          current_price?: number
          is_deleted?: boolean | null
          low_stock_threshold?: number | null
          name?: string
          product_id?: number
          sku?: string | null
          unit_of_measurement?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["category_id"]
          }
        ]
      }
      purchase_order_items: {
        Row: {
          created_at: string | null
          item_subtotal: number | null
          product_id: number
          purchase_order_id: number
          purchase_order_item_id: number
          quantity: number
          received_quantity: number | null
          unit_cost: number
        }
        Insert: {
          created_at?: string | null
          item_subtotal?: number | null
          product_id: number
          purchase_order_id: number
          purchase_order_item_id?: number
          quantity: number
          received_quantity?: number | null
          unit_cost: number
        }
        Update: {
          created_at?: string | null
          item_subtotal?: number | null
          product_id?: number
          purchase_order_id?: number
          purchase_order_item_id?: number
          quantity?: number
          received_quantity?: number | null
          unit_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "purchase_order_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["purchase_order_id"]
          }
        ]
      }
      purchase_orders: {
        Row: {
          created_at: string | null
          expected_delivery_date: string | null
          factory_id: number
          grand_total: number | null
          nota_number: string
          notes: string | null
          order_date: string | null
          payment_type: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount: number | null
          ppn_rate: number | null
          purchase_order_id: number
          status: Database["public"]["Enums"]["order_status_option"] | null
          subtotal: number
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          expected_delivery_date?: string | null
          factory_id: number
          grand_total?: number | null
          nota_number: string
          notes?: string | null
          order_date?: string | null
          payment_type: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount?: number | null
          ppn_rate?: number | null
          purchase_order_id?: number
          status?: Database["public"]["Enums"]["order_status_option"] | null
          subtotal?: number
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          expected_delivery_date?: string | null
          factory_id?: number
          grand_total?: number | null
          nota_number?: string
          notes?: string | null
          order_date?: string | null
          payment_type?: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount?: number | null
          ppn_rate?: number | null
          purchase_order_id?: number
          status?: Database["public"]["Enums"]["order_status_option"] | null
          subtotal?: number
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["factory_id"]
          },
          {
            foreignKeyName: "purchase_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      receivable_payments: {
        Row: {
          amount: number
          created_at: string | null
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          receivable_id: number
          receivable_payment_id: number
          reference_number: string | null
          user_id: number
        }
        Insert: {
          amount: number
          created_at?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          receivable_id: number
          receivable_payment_id?: number
          reference_number?: string | null
          user_id: number
        }
        Update: {
          amount?: number
          created_at?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          receivable_id?: number
          receivable_payment_id?: number
          reference_number?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "receivable_payments_receivable_id_fkey"
            columns: ["receivable_id"]
            isOneToOne: false
            referencedRelation: "receivables"
            referencedColumns: ["receivable_id"]
          },
          {
            foreignKeyName: "receivable_payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      receivables: {
        Row: {
          amount_paid: number | null
          created_at: string | null
          customer_id: number
          due_date: string | null
          notes: string | null
          receivable_id: number
          remaining_receivable: number | null
          sales_order_id: number | null
          status: Database["public"]["Enums"]["order_status_option"] | null
          total_receivable_amount: number
          updated_at: string | null
        }
        Insert: {
          amount_paid?: number | null
          created_at?: string | null
          customer_id: number
          due_date?: string | null
          notes?: string | null
          receivable_id?: number
          remaining_receivable?: number | null
          sales_order_id?: number | null
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_receivable_amount: number
          updated_at?: string | null
        }
        Update: {
          amount_paid?: number | null
          created_at?: string | null
          customer_id?: number
          due_date?: string | null
          notes?: string | null
          receivable_id?: number
          remaining_receivable?: number | null
          sales_order_id?: number | null
          status?: Database["public"]["Enums"]["order_status_option"] | null
          total_receivable_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "receivables_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "receivables_sales_order_id_fkey"
            columns: ["sales_order_id"]
            isOneToOne: true
            referencedRelation: "sales_orders"
            referencedColumns: ["sales_order_id"]
          }
        ]
      }
      return_items: {
        Row: {
          notes: string | null
          product_id: number
          quantity: number
          return_id: number
          return_item_id: number
        }
        Insert: {
          notes?: string | null
          product_id: number
          quantity: number
          return_id: number
          return_item_id?: number
        }
        Update: {
          notes?: string | null
          product_id?: number
          quantity?: number
          return_id?: number
          return_item_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "return_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "return_items_return_id_fkey"
            columns: ["return_id"]
            isOneToOne: false
            referencedRelation: "returns"
            referencedColumns: ["return_id"]
          }
        ]
      }
      returns: {
        Row: {
          approval_timestamp: string | null
          approved_by_user_id: number | null
          created_at: string | null
          customer_id: number | null
          factory_id: number | null
          reason: string | null
          reference_purchase_order_id: number | null
          reference_sales_order_id: number | null
          return_date: string | null
          return_id: number
          return_type: Database["public"]["Enums"]["return_type_option"]
          status: Database["public"]["Enums"]["approval_status_option"] | null
          updated_at: string | null
          user_id: number
        }
        Insert: {
          approval_timestamp?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          customer_id?: number | null
          factory_id?: number | null
          reason?: string | null
          reference_purchase_order_id?: number | null
          reference_sales_order_id?: number | null
          return_date?: string | null
          return_id?: number
          return_type: Database["public"]["Enums"]["return_type_option"]
          status?: Database["public"]["Enums"]["approval_status_option"] | null
          updated_at?: string | null
          user_id: number
        }
        Update: {
          approval_timestamp?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          customer_id?: number | null
          factory_id?: number | null
          reason?: string | null
          reference_purchase_order_id?: number | null
          reference_sales_order_id?: number | null
          return_date?: string | null
          return_id?: number
          return_type?: Database["public"]["Enums"]["return_type_option"]
          status?: Database["public"]["Enums"]["approval_status_option"] | null
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "returns_approved_by_user_id_fkey"
            columns: ["approved_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "returns_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "returns_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["factory_id"]
          },
          {
            foreignKeyName: "returns_reference_purchase_order_id_fkey"
            columns: ["reference_purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "returns_reference_sales_order_id_fkey"
            columns: ["reference_sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["sales_order_id"]
          },
          {
            foreignKeyName: "returns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      roles: {
        Row: {
          description: string | null
          role_id: number
          role_name: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          description?: string | null
          role_id?: number
          role_name: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          description?: string | null
          role_id?: number
          role_name?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: []
      }
      sales_order_items: {
        Row: {
          created_at: string | null
          discount_percentage: number | null
          item_subtotal: number | null
          product_id: number
          quantity: number
          sales_order_id: number
          sales_order_item_id: number
          unit_price_at_sale: number
        }
        Insert: {
          created_at?: string | null
          discount_percentage?: number | null
          item_subtotal?: number | null
          product_id: number
          quantity: number
          sales_order_id: number
          sales_order_item_id?: number
          unit_price_at_sale: number
        }
        Update: {
          created_at?: string | null
          discount_percentage?: number | null
          item_subtotal?: number | null
          product_id?: number
          quantity?: number
          sales_order_id?: number
          sales_order_item_id?: number
          unit_price_at_sale?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "sales_order_items_sales_order_id_fkey"
            columns: ["sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["sales_order_id"]
          }
        ]
      }
      sales_orders: {
        Row: {
          amount_paid: number | null
          bon_number: string
          created_at: string | null
          customer_id: number | null
          grand_total: number | null
          is_editable: boolean | null
          notes: string | null
          order_date: string | null
          payment_status: Database["public"]["Enums"]["order_status_option"] | null
          payment_type: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount: number | null
          ppn_rate: number | null
          private_payment_method: Database["public"]["Enums"]["private_payment_method_option"] | null
          sales_order_id: number
          subtotal: number
          total_discount_amount: number
          updated_at: string | null
          user_id: number
        }
        Insert: {
          amount_paid?: number | null
          bon_number: string
          created_at?: string | null
          customer_id?: number | null
          grand_total?: number | null
          is_editable?: boolean | null
          notes?: string | null
          order_date?: string | null
          payment_status?: Database["public"]["Enums"]["order_status_option"] | null
          payment_type: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount?: number | null
          ppn_rate?: number | null
          private_payment_method?: Database["public"]["Enums"]["private_payment_method_option"] | null
          sales_order_id?: number
          subtotal?: number
          total_discount_amount?: number
          updated_at?: string | null
          user_id: number
        }
        Update: {
          amount_paid?: number | null
          bon_number?: string
          created_at?: string | null
          customer_id?: number | null
          grand_total?: number | null
          is_editable?: boolean | null
          notes?: string | null
          order_date?: string | null
          payment_status?: Database["public"]["Enums"]["order_status_option"] | null
          payment_type?: Database["public"]["Enums"]["payment_type_option"]
          ppn_amount?: number | null
          ppn_rate?: number | null
          private_payment_method?: Database["public"]["Enums"]["private_payment_method_option"] | null
          sales_order_id?: number
          subtotal?: number
          total_discount_amount?: number
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "sales_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      stock_movements: {
        Row: {
          approval_status: Database["public"]["Enums"]["approval_status_option"] | null
          approval_timestamp: string | null
          approved_by_user_id: number | null
          created_at: string | null
          movement_date: string | null
          movement_type: Database["public"]["Enums"]["stock_movement_type_option"]
          notes: string | null
          product_id: number
          quantity_changed: number
          reference_coloring_order_id: number | null
          reference_purchase_order_id: number | null
          reference_return_id: number | null
          reference_sales_order_id: number | null
          stock_movement_id: number
          user_id: number
        }
        Insert: {
          approval_status?: Database["public"]["Enums"]["approval_status_option"] | null
          approval_timestamp?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          movement_date?: string | null
          movement_type: Database["public"]["Enums"]["stock_movement_type_option"]
          notes?: string | null
          product_id: number
          quantity_changed: number
          reference_coloring_order_id?: number | null
          reference_purchase_order_id?: number | null
          reference_return_id?: number | null
          reference_sales_order_id?: number | null
          stock_movement_id?: number
          user_id: number
        }
        Update: {
          approval_status?: Database["public"]["Enums"]["approval_status_option"] | null
          approval_timestamp?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          movement_date?: string | null
          movement_type?: Database["public"]["Enums"]["stock_movement_type_option"]
          notes?: string | null
          product_id?: number
          quantity_changed?: number
          reference_coloring_order_id?: number | null
          reference_purchase_order_id?: number | null
          reference_return_id?: number | null
          reference_sales_order_id?: number | null
          stock_movement_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_reference_return"
            columns: ["reference_return_id"]
            isOneToOne: false
            referencedRelation: "returns"
            referencedColumns: ["return_id"]
          },
          {
            foreignKeyName: "stock_movements_approved_by_user_id_fkey"
            columns: ["approved_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "stock_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "stock_movements_reference_coloring_order_id_fkey"
            columns: ["reference_coloring_order_id"]
            isOneToOne: false
            referencedRelation: "aluminium_coloring_orders"
            referencedColumns: ["coloring_order_id"]
          },
          {
            foreignKeyName: "stock_movements_reference_purchase_order_id_fkey"
            columns: ["reference_purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "stock_movements_reference_sales_order_id_fkey"
            columns: ["reference_sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["sales_order_id"]
          },
          {
            foreignKeyName: "stock_movements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          ip_address_last_login: string | null
          is_active: boolean | null
          last_login: string | null
          password_hash: string
          phone_number: string | null
          role_id: number
          updated_at: string | null
          user_id: number
          username: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          ip_address_last_login?: string | null
          is_active?: boolean | null
          last_login?: string | null
          password_hash: string
          phone_number?: string | null
          role_id: number
          updated_at?: string | null
          user_id?: number
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          ip_address_last_login?: string | null
          is_active?: boolean | null
          last_login?: string | null
          password_hash?: string
          phone_number?: string | null
          role_id?: number
          updated_at?: string | null
          user_id?: number
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      approval_status_option: "pending" | "approved" | "rejected"
      order_status_option:
        | "pending"
        | "processing"
        | "completed"
        | "cancelled"
        | "paid"
        | "unpaid"
        | "partially_paid"
      payment_type_option: "faktur_pajak" | "pribadi"
      private_payment_method_option: "debit" | "cash" | "qr" | "transfer"
      product_category:
        | "aluminium"
        | "accessories"
        | "kaca"
        | "finished_goods"
        | "baja_ringan"
      return_type_option: "customer_return" | "supplier_return"
      stock_movement_type_option:
        | "purchase_receipt"
        | "sale_dispatch"
        | "customer_return_receipt"
        | "supplier_return_dispatch"
        | "adjustment_in"
        | "adjustment_out"
        | "coloring_dispatch"
        | "coloring_receipt"
      user_role: "admin" | "kasir" | "gudang"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}