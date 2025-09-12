import { Link } from "react-router";
import ErrorImage from "../Assets/Error.avif";
const Error = () => {
  return (
    <div>
      <img
        src={ErrorImage}
        alt="404 not Found"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "bottom",
          position: "relative",
        }}
      />
      <div
        className="position-absolute start-0 top-0 w-100 h-100"
        style={{ backgroundColor: "#0000005f" }}
      ></div>
      <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
        <h3 className="fs-1">404</h3>
        <h1 className="fs-1" style={{ fontSize: "70px" }}>
          Page not found
        </h1>
        <p className="fs-4 my-3 w-100" style={{ color: "#939393ff" }}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          to={"/"}
          className="text-decoration-none text-light fs-5 border px-4 py-2 mt-4 d-block mx-auto"
          style={{ width: "fit-content", backgroundColor: "#4e4e4eff" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
