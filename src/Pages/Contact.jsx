import ContactImage from "../Assets/contact_img.png";
import Subscribe from "../Components/Subscribe";

const Contact = () => {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase fw-meduim mt-2">
        <span style={{ color: "#6b7280" }}>CONTACT</span> US
      </h3>
      <hr
        style={{
          width: "120px",
          height: "2px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 my-5">
        <div>
          <img
            className="container"
            style={{ maxWidth: "450px" }}
            src={ContactImage}
            alt="Contact Image"
          />
        </div>
        <div className="d-flex flex-column gap-3">
          <h4>Our Store</h4>
          <div style={{ color: "#6b7280" }}>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div style={{ color: "#6b7280" }}>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <h4>Careers at Forever</h4>
          <p style={{ color: "#6b7280" }}>
            Learn more about our teams and job openings.
          </p>
          <button
            className="bg-dark text-light py-3 px-5 mt-4"
            style={{ width: "fit-content" }}
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
