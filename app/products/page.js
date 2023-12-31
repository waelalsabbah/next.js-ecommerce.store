import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: { default: ' Products|My Media Shop', Template: '%s | My Media Shop' },
  description: 'Generated by create next app',
};

export default function Products() {
  const products = getProducts();
  const productsQuantitiesCookie = getCookie('productsQuantities');
  const productQuantities = !productsQuantitiesCookie
    ? []
    : parseJson(productsQuantitiesCookie);
  const productsWithQuantities = products.map((product) => {
    const matchingWithProductFromCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });
  return (
    <div>
      <h1>My Products</h1>
      {productsWithQuantities.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
            <Image
              src={`/images/${product.title}.jpg`}
              alt={product.title}
              width={200}
              height={200}

            />
            {product.quantity}
          </div>
        );
      })}
    </div>
  );
}
