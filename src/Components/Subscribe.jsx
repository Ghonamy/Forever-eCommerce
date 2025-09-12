import ExchangeIcon from "../Assets/exchange_icon.png";
import QualityIcon from "../Assets/quality_icon.png";
import SupportIcon from "../Assets/support_img.png";

const Subscribe = () => {
  return (
    <div className="subscribe container px-4">
      <div className="text-center d-flex flex-column flex-lg-row justify-content-center align-items-center py-2 py-lg-4">
        <div className="mb-3" style={{ margin: "0 40px" }}>
          <img
            style={{ width: "45px" }}
            className="mb-2"
            src={ExchangeIcon}
            alt="Exchange Icon"
          />
          <h4 className="fs-6 fw-medium">Easy Exchange Policy</h4>
          <p style={{ color: "#9ca3af" }}>
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="mb-3" style={{ margin: "0 40px" }}>
          <img
            style={{ width: "45px" }}
            className="mb-2"
            src={QualityIcon}
            alt="Exchange Icon"
          />
          <h4 className="fs-6 fw-medium">7 Days Return Policy</h4>
          <p style={{ color: "#9ca3af" }}>
            We provide 7 days free return policy
          </p>
        </div>
        <div className="mb-3" style={{ margin: "0 40px" }}>
          <img
            style={{ width: "40px" }}
            className="mb-2"
            src={SupportIcon}
            alt="Exchange Icon"
          />
          <h4 className="fs-6 fw-medium">Best customer support</h4>
          <p style={{ color: "#9ca3af" }}>we provide 24/7 customer support</p>
        </div>
      </div>
      <h2 className="text-center my-3">Subscribe now & get 20% off</h2>
      <div className="my-4 text-center d-flex justify-content-center">
        <input
          // style={{ width: "35%" }}
          className="ps-3 py-2 border border-light-subtle"
          type="email"
          placeholder="Enter Your Email"
        />
        <button className="btn btn-dark rounded-0 py-2">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
