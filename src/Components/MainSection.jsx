import MainImage from "../Assets/hero_img.png";
const MainSection = () => {
  return (
    <div className="container">
      <div
        className="border border-1 border-dark "
        style={{ color: "#414141", marginTop: "40px" }}
      >
        <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">
          <div className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0">
            <p className="fs-6 fs-md-5">OUR BEST SELLERS </p>
            <h1
              style={{ fontFamily: "Prata", fontSize: "38px" }}
              className="fw-semibold"
            >
              Latest Arrivals
            </h1>
            <p className="fs-6 fs-md-5 mt-2">SHOP NOW</p>
          </div>
          <div className="w-100 w-md-50">
            <img
              style={{ maxWidth: "100%" }}
              src={MainImage}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
