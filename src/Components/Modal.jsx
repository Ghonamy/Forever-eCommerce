import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod";

const productSchema = z.object({
  name: z
    .string("Product Name Must be String")
    .min(3, "Product Name Must be 3 Letters at Least")
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
    .nonempty("Product Description is Required"),
  image: z
    .string("Product Image Must be String")
    .nonempty("Product Image is Required"),
});

const Modal = () => {
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
  const { id } = useParams();
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProducts(() => data);
      } catch (error) {
        console.error("Fetching Data Error:", error);
      }
    };
    getProductDetails();
  }, [id]);
  const handleChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = productSchema.safeParse(product);
    if (!result.success) {
      let newError = {};
      result.error.issues.forEach(
        (error) => (newError[error.path[0]] = error.message)
      );
      setErrors(newError);
      return;
    }
    try {
      await axios.put(`http://localhost:3000/products/${id}`, product);
      toast.success("Product is Edited Successfully");
      const modalElement = document.getElementById("exampleModal");
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
      setTimeout(() => {
        navigate("/products");
      }, 2000);
      setErrors({});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#e4e2e2ff" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="exampleModalLabel">
              Edit Product
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="px-4 py-3 rounded-2 d-flex flex-column justify-content-center gap-3 text-light  mx-auto"
              style={{ width: "450px", backgroundColor: "#e4e2e2ff" }}
              action=""
            >
              <div className="d-flex flex-column fw-medium">
                <label style={{ color: "#000000ff" }} htmlFor="name">
                  Product Name:
                </label>
                <input
                  className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold shadow-sm"
                  style={{ backgroundColor: "#f5f5f5ff" }}
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
              <div className="d-flex flex-column fw-medium">
                <label style={{ color: "#000000ff" }} htmlFor="description">
                  Product Description:
                </label>
                <input
                  className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold shadow-sm"
                  style={{ backgroundColor: "#f5f5f5ff" }}
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
              <div className="d-flex flex-column fw-medium">
                <label style={{ color: "#000000ff" }} htmlFor="price">
                  Product Price:
                </label>
                <input
                  className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold shadow-sm"
                  style={{ backgroundColor: "#f5f5f5ff" }}
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
              <div className="d-flex flex-column fw-medium">
                <label style={{ color: "#000000ff" }} htmlFor="image">
                  Product Image:
                </label>
                <input
                  className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold shadow-sm"
                  style={{ backgroundColor: "#f5f5f5ff" }}
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
              <div className="d-flex flex-column fw-medium">
                <label style={{ color: "#000000ff" }} htmlFor="category">
                  Product Category:
                </label>
                <input
                  className="p-2 rounded-1 mt-2 border-0 fs-6 text-secondary fw-semibold shadow-sm"
                  style={{ backgroundColor: "#f5f5f5ff" }}
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
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              // data-bs-dismiss="modal"
            >
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
