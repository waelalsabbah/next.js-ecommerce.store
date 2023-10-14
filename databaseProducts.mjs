import postgres from 'postgres';

const sql = postgres(
  'postgres://next_js_ecommerce_store:Wo19832015@@host:localhost:5432/next_js_ecommerce_store-',
);
console.log(await sql`SELECT * FROM products`);
