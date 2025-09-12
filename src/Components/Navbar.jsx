import { NavLink, useNavigate } from "react-router";
import Logo from "../Assets/logo.png";
import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="container px-4 d-flex justify-content-between align-items-center py-4">
        <img
          style={{ width: "150px" }}
          onClick={() => navigate("/")}
          src={Logo}
          alt="Logo"
        />
        <ul className="d-none d-md-flex gap-5 fs-6 align-items-center list-unstyled">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-bottom border-2 border-dark text-decoration-none text-dark fw-meduim pb-1"
                  : "text-decoration-none text-dark fw-meduim"
              }
              style={{ textTransform: "uppercase" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "border-bottom border-2 border-dark text-decoration-none text-dark fw-meduim pb-1"
                  : "text-decoration-none text-dark fw-meduim"
              }
              style={{ textTransform: "uppercase" }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-bottom border-2 border-dark text-decoration-none text-dark fw-meduim pb-1"
                  : "text-decoration-none text-dark fw-meduim"
              }
              style={{ textTransform: "uppercase" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "border-bottom border-2 border-dark text-decoration-none text-dark fw-meduim pb-1"
                  : "text-decoration-none text-dark fw-meduim"
              }
              style={{ textTransform: "uppercase" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="d-none d-md-flex gap-4 align-items-center">
          {localStorage.getItem("token") ? (
            <i
              onClick={() => navigate("/profile")}
              className="fa-regular fa-user fs-3"
              style={{ cursor: "pointer" }}
            ></i>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              className="border-2 px-3 py-1 fs-6 bg-dark rounded-5 text-light"
            >
              Login
            </button>
          )}
          <i
            onClick={() => navigate("/cart")}
            className="fa-solid fa-cart-shopping fs-3 position-relative"
            style={{ cursor: "pointer" }}
          >
            <span
              className="text-light bg-dark rounded-circle d-flex justify-content-center align-items-center position-absolute"
              style={{
                width: "20px",
                height: "20px",
                top: "-5px",
                right: "-5px",
                fontSize: "14px",
              }}
            >
              {cartCount}
            </span>
          </i>
        </div>
        {menuOpen ? (
          <i
            onClick={() => setMenuOpen(!menuOpen)}
            className="fa-solid fa-xmark d-block d-md-none fs-2"
            style={{ cursor: "pointer" }}
          ></i>
        ) : (
          <i
            onClick={() => setMenuOpen(!menuOpen)}
            className="fa-solid fa-bars d-block d-md-none fs-2"
            style={{ cursor: "pointer" }}
          ></i>
        )}
      </div>
      {menuOpen && (
        <div
          className="d-md-none bg-light text-center rounded-2 shadow mx-auto h-50"
          style={{
            position: "absolute",
            top: "70px",
            left: "0",
            width: "100%",
            zIndex: 3,
            padding: "40px 0",
            fontSize: "20px",
          }}
        >
          <ul className="list-unstyled d-flex flex-column gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-dark text-decoration-none text-light d-block py-2 fw-semibold"
                    : "text-decoration-none text-dark fw-semibold"
                }
                style={{ textTransform: "uppercase" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-dark text-decoration-none text-light d-block py-2 fw-semibold"
                    : "text-decoration-none text-dark fw-semibold"
                }
                style={{ textTransform: "uppercase" }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-dark text-decoration-none text-light d-block py-2 fw-semibold"
                    : "text-decoration-none text-dark fw-semibold"
                }
                style={{ textTransform: "uppercase" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-dark text-decoration-none text-light d-block py-2 fw-semibold"
                    : "text-decoration-none text-dark fw-semibold"
                }
                style={{ textTransform: "uppercase" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {localStorage.getItem("token") ? (
            <i
              onClick={() => navigate("/profile")}
              className="fa-regular fa-user fs-3"
              style={{ cursor: "pointer" }}
            ></i>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              className="border-2 px-3 py-1 fs-6 bg-dark rounded-5 text-light mt-3"
            >
              Login
            </button>
          )}
          <i
            onClick={() => navigate("/cart")}
            className="fa-solid fa-cart-shopping fs-1 position-relative ms-3"
            style={{ cursor: "pointer" }}
          >
            <span
              className="text-light bg-dark rounded-circle d-flex justify-content-center align-items-center position-absolute"
              style={{
                width: "20px",
                height: "20px",
                top: "-5px",
                right: "-5px",
                fontSize: "14px",
              }}
            >
              {cartCount}
            </span>
          </i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
