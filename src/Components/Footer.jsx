import Logo from "../Assets/logo.png";
import SpinnerLoading from "./SpinnerLoading";

const Footer = () => {
  return (
    <div className="footer container px-4">
      <div className="d-flex flex-column flex-md-row justify-content-between pt-5">
        <div className="main w-50">
          <img
            style={{ width: "130px" }}
            className="mb-2"
            src={Logo}
            alt="Logo"
          />
          <p className="mp w-75" style={{ color: "#4b5563" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3 className="fw-semibold fs-4">COMPANY</h3>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>Home</p>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>About us</p>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>Delivery</p>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>Privacy policy</p>
        </div>
        <div>
          <h3 className="fw-semibold fs-4">GET IN TOUCH</h3>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>+1-000-000-0000</p>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>
            ghonamyebrahim@gmail.com
          </p>
          <p style={{ color: "#4b5563", cursor: "pointer" }}>Instagram</p>
        </div>
      </div>
      <hr />
      <p className="text-center">Copyright 2025 - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
