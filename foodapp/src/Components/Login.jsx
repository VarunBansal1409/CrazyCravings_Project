import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ closeDrawer }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [closing, setClosing] = useState(false);

  const navigate = useNavigate();

  // Smooth close animation
  const closeDrawerSmooth = () => {
    setClosing(true);
    setTimeout(() => closeDrawer(), 300);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const user = { email, password };
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/login`,
        user
      );

      const msg = result.data.toLowerCase();

      if (msg.includes("doesnt") || msg.includes("invalid")) {
        toast.error("Invalid Email or Password!");
        return;
      }

      toast.success("Login Successful!");

      // Smooth drawer closing + navigation
      setClosing(true);
      setTimeout(() => {
        closeDrawer();
        navigate("/");
      }, 300);
    } catch (err) {
      console.error(err);
      toast.error("Server error! Try again.");
    }
  };

  return (
    <div className="drawer-overlay" onClick={closeDrawerSmooth}>
      <div
        className={`drawer ${closing ? "hide" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
