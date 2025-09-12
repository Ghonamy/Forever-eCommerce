import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="box mb-3"
      style={{ cursor: "pointer" }}
    >
      <img
        className="mb-3 shadow-sm"
        style={{ maxWidth: "100%", borderRadius: "5px" }}
        src={product.image}
        alt="Product Image"
      />
      <h3 style={{ fontSize: "14px", margin: "8px 0", color: "#6b7280" }}>
        {product.name}
      </h3>
      <h4
        style={{ fontSize: "14px", color: "#6b7280" }}
        className="fw-semibold"
      >
        ${product.price}
      </h4>
    </div>
  );
};

export default Product;
