import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Components/Product";
import SearchIcon from "../Assets/search_icon.png";
import { useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("default");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSorting = (e) => {
    setSorting(e.target.value);
  };
  const filteredProducts = products
    .filter((product) => {
      if (search === "") {
        return true;
      }
      return product.name.includes(search);
    })
    .sort((a, b) => {
      if (sorting === "low") {
        return a.price - b.price;
      } else if (sorting === "high") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
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
    <div className="container px-4">
      <h2 className="text-center text-uppercase fw-meduim mt-5">
        <span style={{ color: "#6b7280" }}>All</span> Products
      </h2>
      <hr
        style={{
          width: "200px",
          height: "2px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="mt-4">
        <div className="">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div
              className="search d-flex justify-content-center align-items-center my-3"
              style={{ width: "700px" }}
            >
              <input
                className="w-100 rounded-5 ps-3 py-2 fs-5"
                style={{
                  backgroundColor: "#eaeaea65",
                  border: "2px solid #c0bdbdff",
                }}
                name="search"
                type="text"
                id="search"
                value={search}
                placeholder="Search Products"
                onChange={handleChange}
              />
              <img
                className="position-relative"
                width={"20px"}
                src={SearchIcon}
                alt="Search Icon"
                style={{ right: "40px" }}
              />
            </div>
            <div className="d-flex gap-3">
              {localStorage.getItem("token") && (
                <button
                  onClick={() => navigate("/products/new")}
                  className="d-block px-4 py-1 rounded-1 text-bg-dark"
                >
                  Add Product
                </button>
              )}
              <div>
                <select
                  onChange={handleSorting}
                  className="py-2 px-1 rounded-1"
                  style={{
                    backgroundColor: "#eaeaea65",
                    border: "2px solid #c0bdbdff",
                    outline: "0",
                  }}
                  name="sorting"
                  id="sorting"
                  value={sorting}
                >
                  <option value="default">Sort by: Price</option>
                  <option value="high">Sort by: High to Low</option>
                  <option value="low">Sort by: Low to High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-3">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
