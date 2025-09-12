import axios from "axios";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <div className="container px-4">
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ backgroundColor: "#3c3c3cff", width: "550px" }}
          className="rounded-2 p-4 my-5 shadow-lg"
        >
          <div className="profile d-flex flex-column flex-md-row gap-2 gap-md-5 align-items-center">
            <img
              style={{
                width: "200px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
              alt="Avatar Image"
            />
            <div>
              <h3 className="text-white mt-3">
                {user.firstName} {user.lastName}
              </h3>
              <p style={{ color: "#a0a0a0ff" }}>{user.email}</p>
              <p style={{ color: "#a0a0a0ff" }}>
                <span className="text-light">Age:</span> {user.age}
              </p>
              <p style={{ color: "#a0a0a0ff" }}>
                <span className="text-light">Phone:</span> {user.phone}
              </p>
              <p style={{ color: "#a0a0a0ff" }}>
                <span className="text-light">Address City:</span>{" "}
                {user.address?.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
