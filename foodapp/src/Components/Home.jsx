import "./Home.css";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import biryani from "../images/biryani.png";
import dosa from "../images/dosa.png";
import pizza from "../images/pizza.png";
import idli from "../images/idli.png";
import cake from "../images/cake.png";
import burger from "../images/burger.png";
import chinese from "../images/chinese.png";
import North from "../images/North.png";
import juice from "../images/juice.png";
import pastry from "../images/pastry.png";
import Rolls from "../images/rolls.png";
import pasta from "../images/pasta.png";
import IceCream from "../images/icecream.png";
import salad from "../images/salad.png";
import Shawarma from "../images/shawarma.png";
import parotta from "../images/parotta.png";
import ad from "../videos/ad.mp4";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";


const foodItems = [
  { img: biryani},
  { img: dosa},
  { img: pizza},
  { img: idli},
  { img: cake},
  { img: burger},
  { img: chinese},
  { img: North},
  { img: juice},
  { img: pastry},
  { img: Rolls},
  { img: pasta},
  { img: IceCream },
  { img:salad },
  { img: Shawarma},
  { img: parotta}
];

const Home = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ------------------ NAVBAR ------------------ */}
      <div className="nav">
      <div className="logo-text">CrazyCravings</div>
      <div className="nav-buttons">
      <button className="partner" onClick={() => navigate("/partner")}>Partner with us</button>
      <button className="login" onClick={() => setShowDrawer(true)}>Login</button>
      <button className="signin" onClick={() => setShowSignup(true)}>Sign in</button>
      </div>
      </div>


      {/* ------------------ SEARCH SECTION ------------------ */}
      <div className="placeholder-container">
      <input type="text" placeholder="Enter your delivery location" className="search-bar"/>
      <button className="search-button">Submit</button>

      <input type="text" placeholder="Search for restaurants" className="search-bar"
        onClick={() => navigate("/Food")}/>
      <button className="search-button">Search</button>
      </div>


      {/* ------------------ VIDEO BANNER ------------------ */}
      <div className="container">
      <video className="home-video" autoPlay loop muted playsInline disablePictureInPicture>
      <source src={ad} type="video/mp4" />
      </video>

      <div className="overlay">
      <h2>CrazyCravings</h2>
      <h6>Experience fast & easy online ordering <br />on the CrazyCravings</h6>
      <div className="btn-group">
      <button onClick={() => navigate("/Food")}>order for later</button>
      <button onClick={() => navigate("/Food")}>order now</button>
      </div>
      </div>
      </div>


      {/* ------------------DRAWERS ------------------ */}
      {showDrawer && <Login closeDrawer={() => setShowDrawer(false)} />}
      {showSignup && <Signup closeDrawer={() => setShowSignup(false)} />}
    

      {/* ------------------ FOOD SECTION ------------------ */}
      <div className="food-section">
      <h2 className="food-title">Order our popular food</h2>
      <div className="food-scroll">
      <div className="food-row">
      {foodItems.map((item, index) => (
        <button className="food-btn" key={index}>
        <img src={item.img} alt="" className="food-photo" onClick={()=> navigate("/food")}/>
        </button>
      ))}
      </div>
      </div>
      </div>

      {/* ------------------ FEATURE CARDS (YOUR SAMPLE STYLE) ------------------ */}
      <div className="category-section">
      <div className="category-card" onClick={() => navigate("/Food")}>
      <div className="cat-text">
      <h2>FOOD DELIVERY</h2>
      <p>FROM RESTAURANTS</p>
      <span className="discount">UPTO 60% OFF</span>
      </div>
      <img src={biryani} className="cat-img" alt="food" />
      <div className="arrow-btn"><FaArrowRight /></div>
      </div>

      <div className="category-card" onClick={() => navigate("/Food")}>
      <div className="cat-text">
      <h2>DISCOVER</h2>
      <p>BEST RESTAURANT</p>
      <span className="discount">UPTO 60% OFF</span>
      </div>
      <img src={chinese} className="cat-img" alt="grocery" />
      <div className="arrow-btn"><FaArrowRight /></div>
      </div>

      <div className="category-card" onClick={() => navigate("/Food")}>
      <div className="cat-text">
      <h2>ORDER FOOD</h2>
      <p>FOR A FRIEND</p>
      <span className="discount">UPTO 50% OFF</span>
      </div>
      <img src={pizza} className="cat-img" alt="dineout" />
      <div className="arrow-btn"><FaArrowRight /></div>
      </div>
      </div>


      {/* ----------------------About Section---------------------- */}
      <div className="about-section">
      <h2 className="about-title">About CrazyCravings</h2>
      <p className="about-text">
      CrazyCravings is your go-to food delivery app, bringing a world of
      flavors right to your doorstep. With a vast selection of restaurants
      and cuisines, we make it easy to satisfy your cravings anytime,
      anywhere. Our user-friendly interface, real-time order tracking, and
      secure payment options ensure a seamless experience from start to
      finish. Whether you're in the mood for a quick snack or a gourmet meal,
      CrazyCravings has got you covered. Join us today and discover the joy
      of effortless food ordering!
     </p>
     </div>


     {/*------------------ footer Section ------------------*/}
     <div className="footer">
     <div className="footer-content">
     <div className="footer-brand">
     <h2>CrazyCravings</h2>
     <p>Your delicious meals delivered fast & fresh.</p>
     </div>

     <div className="footer-links">
     <h4>Quick Links</h4>
     <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Cart</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>

      <div className="footer-links">
      <h4>Support</h4>
      <ul>
        <li>Help Center</li>
        <li>Order Tracking</li>
        <li>Returns</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
      </div>

      <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <i className="fa-brands fa-facebook"><FaFacebook /></i>
        <i className="fa-brands fa-instagram"><FaInstagram /></i>
        <i className="fa-brands fa-twitter"><FaTwitter /></i>
        <i className="fa-brands fa-youtube"><FaYoutube /></i>
      </div>
      </div>
      </div>
      <div className="footer-bottom">
      <LiaCopyrightSolid size={12}/> {new Date().getFullYear()} CrazyCravings. All Rights Reserved.
      </div>
      </div>

    </>
  );
};

export default Home;
