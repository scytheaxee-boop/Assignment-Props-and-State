// src/types.ts

/**
 * Mendefinisikan struktur data untuk sebuah produk.
 */
export interface Product {
  id: number;
  name: string;
  price: number;
}

/**
 * Mendefinisikan struktur data untuk item di keranjang.
 * Mewarisi semua properti dari Product dan menambahkan 'quantity'.
 */
export interface CartItem extends Product {
  quantity: number;
}