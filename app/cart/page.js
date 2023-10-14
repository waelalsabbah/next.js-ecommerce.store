import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import SetCookieForm from '../cookie-products/SetCookieForm';

export default function Cart() {
  const productCookies = getCookie('productsQuantities');
  const parsedProductCookies = JSON.parse(productCookies);
  const products = getProducts();
  //console.log('products', products);
  //console.log('productCookies', JSON.parse(productCookies));
  const foundProducts = products
    .map((product) => {
      const productMatchCookie = parsedProductCookies.find(
        (parsedProduct) => parsedProduct.id === product.id,
      );
      return { ...product, quantity: productMatchCookie?.quantity };
    })
    .filter((filterUndefined) => filterUndefined.quantity !== undefined);
  console.log(foundProducts);

  // Calculate the total price of items in the cart
  const totalPrice = foundProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Handle quantity updates
  const updateQuantity = (productId, newQuantity) => {
    const updatedProducts = foundProducts.map((product) => {
      if (product.id === productId) {
        product.quantity = newQuantity;
      }
      return product;
    });
    SetCookieForm('productsQuantities', JSON.stringify(updatedProducts)); //SetCookieForm
  };
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {foundProducts.map((product) => {
          return (
            <li key={product.id}>
              {product.title} - ${product.price}
              <br />
              Quantity:
              <input
                type="number"
                value={product.quantity}
                onChange={(e) =>
                  updateQuantity(product.id, parseInt(e.target.value))
                }
              />
            </li>
          );
        })}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
