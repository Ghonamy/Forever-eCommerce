import axios from "axios";
import { use, useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router";

const LatestCollections = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div style={{ padding: "70px 0", color: "#374151" }} className="container">
      <h2 className="text-center text-uppercase">
        <span style={{ color: "#6b7280" }}>Latest</span> Collections
      </h2>
      <hr
        style={{
          width: "220px",
          height: "3px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 my-5 container pe-0">
        {products.slice(0, 10).map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <button
        onClick={() => navigate("/products")}
        className="btn btn-dark rounded-5 d-block px-4 py-2 mx-auto"
      >
        Discover More
      </button>
    </div>
  );
};

export default LatestCollections;
