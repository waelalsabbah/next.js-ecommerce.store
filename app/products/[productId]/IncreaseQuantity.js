'use client';
import { useState } from 'react';
import { updateQuantity } from './action';

export default function increaseQuantity() {
  const [quantity, setQuantity] = useState('');

  return (
    <div>
      <form>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.currentTarget.value)}
        />
        <button formAction={async () => await updateQuantity(quantity)}>
          Add to cart
        </button>
      </form>
    </div>
  );
}
