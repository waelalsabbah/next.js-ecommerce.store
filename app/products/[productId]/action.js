'use server';
import { cookies } from 'next/headers';

export async function updateQuantity(quantity) {
  await cookies().set(
    'productsQuantities',
    JSON.stringify([{ type: Number, input: quantity }]),
  );
}
