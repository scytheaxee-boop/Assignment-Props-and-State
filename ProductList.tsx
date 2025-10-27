import React from 'react';

// Impor tipe dari file types.ts (path disesuaikan)
import type { Product } from '../types';

// Tipe Props menggunakan tipe yang diimpor
interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <div className="product-list">
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>
              {product.name} (Rp {product.price.toLocaleString('id-ID')})
            </span>
            <button onClick={() => onAddToCart(product)}>
              + Tambah
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;