import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProduct } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import IncreaseQuantity from './IncreaseQuantity';

export function generateMetaData({ params }) {
  const oneProduct = getProduct(Number(params.productId));

  return {
    Title: oneProduct ? oneProduct.title : '',
  };
}

export default function Product(props) {
  const product = getProduct(Number(props.params.productId));
  const productsQuantitiesCookie = getCookie('productsQuantities');

  const productQuantities = !productsQuantitiesCookie
    ? []
    : parseJson(productsQuantitiesCookie);

  const productQuantityToDisplay = productQuantities.find((productQuantity) => {
    return productQuantity.id === product.id;
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      My Product
      <h1>{product.title}</h1>
      <Image
        src={`/images/${product.title}.jpg`}
        alt={product.title}
        width={200}
        height={200}
      />
      {product.description}
      <br />
      price:{product.price}
      <div>{productQuantityToDisplay?.quantity}</div>
      <IncreaseQuantity productId={product.id} />
    </div>
  );
}
