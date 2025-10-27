import React from 'react';

// Impor tipe dari file types.ts (path disesuaikan)
import type { CartItem } from '../types';

// Tipe Props menggunakan tipe yang diimpor
interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  
  // Fungsi ini tidak butuh parameter, karena 'cartItems' sudah didapat dari props
  const calculateTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const total = calculateTotal();

  return (
    <div className="cart">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>
                  Rp {item.price.toLocaleString('id-ID')} x {item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <hr />
          <h3 className="cart-total">
            Total: Rp {total.toLocaleString('id-ID')}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;