import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod";

const productSchema = z.object({
  name: z
    .string("Product Name Must be String")
    .min(3, "Product Name Must be 3 Letters at Least")
    .max(20, "Product Name Must be 10 Letters at Most")
    .nonempty("Product Name is Required"),
  price: z
    .string("Product Price Must be Number")
    .min(2, "Product Price Must be 2 Letters at Least")
    .max(4, "Product Price Must be 4 Letters at Most")
    .nonempty("Product Price is Required"),
  category: z
    .string("Product Category Must be String")
    .min(2, "Product Category Must be 2 Letters at Least")
    .max(8, "Product Category Must be 8 Letters at Most")
    .nonempty("Product Category is Required"),
  description: z
    .string("Product Description Must be String")
    .min(5, "Product Description Must be 5 Letters at Least")
    .max(80, "Product Description Must be 50 Letters at Most")
    .nonempty("Product Description is Required"),
  image: z
    .string("Product Image Must be String")
    .nonempty("Product Image is Required"),
});

const AddProducts = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [product, setProducts] = useState({
    id: new Date(),
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = productSchema.safeParse(product);
    console.log(result.data);
    if (!result.success) {
      let newError = {};
      result.error.issues.forEach(
        (error) => (newError[error.path[0]] = error.message)
      );
      setErrors(newError);
      return;
    }
    try {
      await axios.post("http://localhost:3000/products", product);
      toast.success("Product is Added Successfully");
      setTimeout(() => {
        navigate("/products");
      }, 1000);
      setErrors({});
      setProducts({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 className="text-center fs-1 fw-meduim mt-2">
        <span style={{ color: "#6b7280" }}>Add</span> Product
      </h2>
      <hr
        style={{
          width: "180px",
          height: "2px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <form
          className="px-4 py-3 rounded-2 d-flex flex-column justify-content-center gap-3 text-light my-4"
          style={{ width: "500px", backgroundColor: "#0e0e0ec7" }}
          onSubmit={handleSubmit}
          action=""
        >
          <div className="d-flex flex-column">
            <label style={{ color: "#c7c5c5ff" }} htmlFor="name">
              Product Name:
            </label>
            <input
              className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold"
              type="text"
              name="name"
              value={product.name}
              id="name"
              onChange={handleChange}
            />
            {errors && errors.name && (
              <p className="mt-2 mb-0">
                <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
                <small className="text-danger">{errors.name}</small>
              </p>
            )}
          </div>
          <div className="d-flex flex-column">
            <label style={{ color: "#c7c5c5ff" }} htmlFor="description">
              Product Description:
            </label>
            <input
              className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold"
              type="text"
              name="description"
              value={product.description}
              id="description"
              onChange={handleChange}
            />
            {errors && errors.description && (
              <p className="mt-2 mb-0">
                <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
                <small className="text-danger">{errors.description}</small>
              </p>
            )}
          </div>
          <div className="d-flex flex-column">
            <label style={{ color: "#c7c5c5ff" }} htmlFor="price">
              Product Price:
            </label>
            <input
              className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold"
              type="text"
              name="price"
              value={product.price}
              id="price"
              onChange={handleChange}
            />
            {errors && errors.price && (
              <p className="mt-2 mb-0">
                <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
                <small className="text-danger">{errors.price}</small>
              </p>
            )}
          </div>
          <div className="d-flex flex-column">
            <label style={{ color: "#c7c5c5ff" }} htmlFor="image">
              Product Image:
            </label>
            <input
              className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold"
              type="text"
              name="image"
              value={product.image}
              id="image"
              onChange={handleChange}
            />
            {errors && errors.image && (
              <p className="mt-2 mb-0">
                <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
                <small className="text-danger">{errors.image}</small>
              </p>
            )}
          </div>
          <div className="d-flex flex-column">
            <label style={{ color: "#c7c5c5ff" }} htmlFor="category">
              Product Category:
            </label>
            <input
              className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold"
              type="text"
              name="category"
              value={product.category}
              id="category"
              onChange={handleChange}
            />
            {errors && errors.category && (
              <p className="mt-2 mb-0">
                <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
                <small className="text-danger">{errors.category}</small>
              </p>
            )}
          </div>
          <button
            className="add border border-2 border-primary py-2 rounded-2 mt-1 bg-primary text-light fw-semibold"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
