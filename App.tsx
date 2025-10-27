import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Impor tipe dari file types.ts
import type { Product, CartItem } from './types';

// Data produk statis (tipe berasal dari impor)
const initialProducts: Product[] = [
  { id: 1, name: 'Apel', price: 5000 },
  { id: 2, name: 'Jeruk', price: 4000 },
  { id: 3, name: 'Mangga', price: 7000 },
  { id: 4, name: 'Pisang', price: 3000 },
];

const App = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fungsi untuk menangani penambahan produk ke keranjang
  const handleAddToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      // 1. Cek apakah item sudah ada
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      // 2. KONDISI IF: Jika item sudah ada, update quantity-nya
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // 3. KONDISI ELSE: Jika item belum ada, tambahkan sebagai item baru
      else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Kalkulator Belanja Sederhana (TSX)</h1>
      </header>
      <main className="app-main">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;