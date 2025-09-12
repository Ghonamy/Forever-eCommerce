import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import StarActive from "../Assets/star_icon.png";
import StarDull from "../Assets/star_dull_icon.png";
import axios from "axios";
import Modal from "../Components/Modal";
import { toast } from "react-toastify";
import SpinnerLoading from "../Components/SpinnerLoading";
import { CartContext } from "../Components/Context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        console.log(data);
        setProduct(() => data);
      } catch (error) {
        console.error("Fetching Data Error:", error);
      }
    };
    getProductDetails();
  }, [id]);
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    toast.success("Product is Deleted Successfully");
    setTimeout(() => {
      navigate("/products");
    }, 2000);
  };
  if (!product) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <SpinnerLoading />
      </div>
    );
  }
  return (
    <div className="container px-4">
      <div
        className="d-flex flex-column flex-md-row justify-content-center my-5"
        style={{ gap: "60px" }}
      >
        <img
          style={{ maxWidth: "100%", objectFit: "cover" }}
          className="rounded-1 shadow-sm"
          src={product.image}
          alt="Product Image"
        />
        <div className="w-100">
          <h4>{product.name}</h4>
          <div className="d-flex align-items-center gap-2 my-3">
            <img style={{ width: "15px" }} src={StarActive} alt="Star Active" />
            <img style={{ width: "15px" }} src={StarActive} alt="Star Active" />
            <img style={{ width: "15px" }} src={StarActive} alt="Star Active" />
            <img style={{ width: "15px" }} src={StarActive} alt="Star Active" />
            <img style={{ width: "15px" }} src={StarDull} alt="Star Dull" />
          </div>
          <h4 className="fw-bold">${product.price}</h4>
          <p className="w-75 my-4" style={{ color: "#6b7280" }}>
            {product.description}
          </p>
          <div>
            <h4>Select Size</h4>
            <div className="d-flex gap-2">
              <button
                onClick={() => setSize("S")}
                className={
                  size === "S" ? "btn border border-danger" : "btn border-dark"
                }
                style={{ borderColor: "#6b7280", backgroundColor: "#eaeaeaff" }}
              >
                S
              </button>
              <button
                onClick={() => setSize("M")}
                className={
                  size === "M" ? "btn border border-danger" : "btn border-dark"
                }
                style={{ borderColor: "#6b7280", backgroundColor: "#eaeaeaff" }}
              >
                M
              </button>
              <button
                onClick={() => setSize("L")}
                className={
                  size === "L" ? "btn border border-danger" : "btn border-dark"
                }
                style={{ borderColor: "#6b7280", backgroundColor: "#eaeaeaff" }}
              >
                L
              </button>
              <button
                onClick={() => setSize("XL")}
                className={
                  size === "XL" ? "btn border border-danger" : "btn border-dark"
                }
                style={{ borderColor: "#6b7280", backgroundColor: "#eaeaeaff" }}
              >
                XL
              </button>
              <button
                onClick={() => setSize("XXL")}
                className={
                  size === "XXL"
                    ? "btn border border-danger"
                    : "btn border-dark"
                }
                style={{
                  borderColor: "#6b7280",
                  backgroundColor: "#eaeaeaff",
                }}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="mt-4 d-flex align-items-center">
            <button
              onClick={() => addToCart(product)}
              className="bg-dark text-light py-2 px-3 rounded-1"
            >
              ADD TO CART
            </button>
            {localStorage.getItem("token") && (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-warning py-2 ms-2 border border-2 border-warning"
                >
                  Edit Product
                </button>
                <button
                  onClick={handleDelete}
                  className="btn btn-danger py-2 ms-2 border border-2 border-danger"
                >
                  Delete Product
                </button>
              </>
            )}
          </div>
          <hr />
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default ProductDetails;
