import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <>
      <h1>My Products</h1>
      <ul>
        <li><Link to="/product/product-1">Product 1</Link></li>
        <li><Link to="/product/product-2">Product 2</Link></li>
        <li><Link to="/product/product-3">Product 3</Link></li>
      </ul>
    </>
  );
}

export default ProductsPage;