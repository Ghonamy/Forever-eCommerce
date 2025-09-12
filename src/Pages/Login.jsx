import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod";

let userSchema = z.object({
  username: z
    .string("Username Must be String")
    .min(3, "Username Must be 3 Letters at Least")
    .max(15, "Username Must be 15 Letters at Most")
    .nonempty("Username is Required"),
  password: z
    .string("Password Must be String")
    .min(6, "Password Too Short")
    .nonempty("Password is Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = userSchema.safeParse(user);
    if (!result.success) {
      let newErrors = {};
      result.error.issues.forEach(
        (err) => (newErrors[err.path[0]] = err.message)
      );
      setErrors(newErrors);
      return;
    }
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        user,
        { credentials: "include" }
      );
      localStorage.setItem("token", response.data.accessToken);
      toast.success("Logged in Successfully");
      setErrors({});
      setUser({ username: "", password: "" });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      setErrors({});
      toast.error("Login Failed");
    }
  };
  return (
    <div className="container">
      <div className="mt-5">
        <h2
          style={{ fontFamily: "prata" }}
          className="text-center fw-semibold mt-2"
        >
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-3 mx-auto mt-4"
          style={{ width: "350px", marginBottom: "40px" }}
          action=""
        >
          <input
            style={{
              borderColor: errors.username ? "red" : "",
              maxWidth: "100%",
            }}
            onChange={handleChange}
            name="username"
            className="px-3 py-2"
            type="text"
            placeholder="Username"
            value={user.username}
          />
          {errors && errors.username && (
            <p className="p-0">
              <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
              <small className="text-danger">{errors.username}</small>
            </p>
          )}
          <input
            style={{
              borderColor: errors.password ? "red" : "",
              maxWidth: "100%",
            }}
            onChange={handleChange}
            name="password"
            className="px-3 py-2"
            type="password"
            placeholder="Password"
            value={user.password}
          />
          {errors && errors.password && (
            <p>
              <i className="fa-solid fa-circle-exclamation text-danger me-2"></i>
              <small className="text-danger">{errors.password}</small>
            </p>
          )}
          <button
            className="bg-dark text-light py-2 px-4 mt-3 border border-dark mx-auto"
            style={{ width: "fit-content" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
