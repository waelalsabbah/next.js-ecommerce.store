'use client';
import Link from 'next/link'; //new add
import { useState } from 'react';
import { updateQuantity } from './action';

export default function increaseQuantity(props) {
  const [quantity, setQuantity] = useState('');

  return (
    <div>
      <form>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.currentTarget.value)}
        />
        <button
          formAction={async () =>
            await updateQuantity(props.productId, quantity)
          }
        >
          Add to cart
        </button>
        {/*<Link href="/cart">View Cart</Link>*/}
      </form>
    </div>
  );
}
