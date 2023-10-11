import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProduct } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import IncreaseQuantity from './IncreaseQuantity';

export function generateMetaData({ params }) {
  const oneProduct = getProduct(Number(params.productId));

  return {
    Title: oneProduct ? oneProduct.title : '',
  };
}

export default function Product(props) {
  const oneProduct = getProduct(Number(props.params.productId));
  const productQuantity = getCookie('productsQuantities');

  const parsedIncreaseQuantity = JSON.parse(productQuantity);

  if (!oneProduct) {
    return notFound();
  }

  return (
    <div>
      My Product
      <h1>{oneProduct.title}</h1>
      <Image
        src={`/images/${oneProduct.title}.jpg`}
        alt={oneProduct.title}
        width={200}
        height={200}
      />
      {oneProduct.description}
      <br />
      price:{oneProduct.price}
      <div>{parsedIncreaseQuantity[0].quantity}</div>
      <IncreaseQuantity />
    </div>
  );
}
