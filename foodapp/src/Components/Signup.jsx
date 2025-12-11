import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Signup = ({ closeDrawer }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // Open animation
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
  }, []);

  // Close drawer smoothly
  const handleClose = () => {
    setIsClosing(true);
    setIsOpen(false);

    setTimeout(() => closeDrawer(), 300);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const user = { username, email, password };

      const res = await axios.post("http://localhost:8080/api/register", user);

      // Show toast
      if (res.data.toLowerCase().includes("already")) {
        toast.error("User already exists!");
        return;
      }

      toast.success("Registered Successfully!");

      // Close animation + redirect
      setIsClosing(true);
      setIsOpen(false);

      setTimeout(() => {
        closeDrawer();
        navigate("/");
      }, 300);

    } catch (err) {
      console.log(err);
      toast.error("Server Error! Try again.");
    }
  };

  return (
    <div className="drawer-overlay" onClick={handleClose}>
      <div
        className={`drawer ${isOpen ? "open" : ""} ${isClosing ? "close" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Sign Up</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
