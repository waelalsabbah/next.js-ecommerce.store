'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function updateQuantity(productId, quantity) {
  const productsQuantitiesCookie = getCookie('productsQuantities');
  const productQuantities = !productsQuantitiesCookie
    ? []
    : parseJson(productsQuantitiesCookie);
  const productToUpdate = productQuantities.find((productQuantity) => {
    return;
    productQuantity.id === productId;
  });
  if (productToUpdate) {
    productToUpdate.input = quantity;
  } else {
    productQuantities.push({ id: productId, input: quantity });
  }
  await cookies().set('productsQuantities', JSON.stringify(productQuantities));
}
