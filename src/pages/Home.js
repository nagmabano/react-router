import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("products");
  }
  
  return (
    <>
      <h1>My home page</h1>
      <p>Go to <Link to={"products"}>List of products</Link>
      </p>
      <button onClick={navigateHandler}>Products</button>
    </>
  );
}

export default HomePage;
