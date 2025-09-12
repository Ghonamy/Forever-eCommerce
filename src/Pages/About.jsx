import AboutImage from "../Assets/about_img.png";
import Subscribe from "../Components/Subscribe";
const About = () => {
  return (
    <div className="container">
      <h2 className="text-center text-uppercase fw-meduim mt-5">
        <span style={{ color: "#6b7280" }}>ABOUT</span> US
      </h2>
      <hr
        style={{
          width: "120px",
          height: "2px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="d-flex flex-column flex-md-row align-items-center gap-5 my-5">
        <div className="w-100 d-flex justify-content-center">
          <img
            className="container"
            style={{ maxWidth: "400px" }}
            src={AboutImage}
            alt="About Image"
          />
        </div>
        <div
          className="d-flex flex-column gap-3 px-3"
          style={{ color: "#4b5563", fontSize: "18px" }}
        >
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h4>Our Mission</h4>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <h3 className="text-center text-uppercase fw-meduim mt-5">
        <span style={{ color: "#6b7280" }}>WHY</span> CHOOSE US
      </h3>
      <hr
        style={{
          width: "160px",
          height: "3px",
          backgroundColor: "#374151",
          margin: "0 auto",
        }}
      />
      <div className="d-flex flex-column flex-md-row align-items-center my-5">
        <div className="about border border-dark p-5 fs-6">
          <h4 className="fs-6 fw-bold mb-3">Quality Assurance:</h4>
          <p style={{ color: "#7b8088ff" }}>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="about border border-dark p-5 fs-6">
          <h4 className="fs-6 fw-bold mb-3">Convenience:</h4>
          <p style={{ color: "#7b8088ff" }}>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="about border border-dark p-5 fs-6">
          <h4 className="fs-6 fw-bold mb-3">Exceptional Customer Service:</h4>
          <p style={{ color: "#7b8088ff" }}>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default About;
