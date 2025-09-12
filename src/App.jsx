import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Default from "./Layouts/Default";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import UserProfile from "./Pages/UserProfile";
import AddProducts from "./Pages/AddProducts";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/new" element={<AddProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
