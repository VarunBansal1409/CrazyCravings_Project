import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";
import { useCart } from "./CartContext";
import { IoMdCart } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/foods/all`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    let list = [...foods];
    if (value.trim() !== "") {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    list = applySort(list, sort);
    setFiltered(list);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    const list = applySort([...filtered], value);
    setFiltered(list);
  };

  const applySort = (list, sortValue) => {
    if (sortValue === "priceLow") {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortValue === "priceHigh") {
      return list.sort((a, b) => b.price - a.price);
    }
    return list;
  };

  return (
    <>
      <div className="nav">
        <div className="logo-text" onClick={() => navigate("/")}>
          CrazyCravings
        </div>
        <div className="nav-placeholder">
          <input
            type="text"
            placeholder="search for restaurant and food"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <IoMdCart size={30} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>

      <div className="food-container">
        <div className="food-header">
          <h2>Restaurants with online food delivery</h2>
          <select
            value={sort}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="none">Sort</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

        <div className="food-cards">
          {loading ? (
            <div
              className="loading-container"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p className="loading-text">Loading delicious items...</p>
            </div>
          ) : (
            <>
              {filtered.map((item) => (
                <div className="food-card" key={item.id}>
                  <div className="food-img-container">
                    <img
                      src={
                        item.image?.startsWith("http")
                          ? item.image
                          : `/images/${item.image}`
                      }
                      alt={item.name}
                      className="food-img"
                    />
                    <span className="item-offer">ITEMS AT ₹{item.price}</span>
                  </div>
                  <div className="food-info">
                    <h3 className="food-title">{item.name}</h3>

                    <p className="food-meta">
                      <FcRating
                        className="rating-icon"
                        color="green"
                        size={20}
                      />{" "}
                      4.3 • 30–40 mins
                    </p>
                    <p className="food-location">Hyderabad</p>
                    <button
                      className="order-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                        navigate("/cart");
                      }}
                    >
                      {" "}
                      Add to Cart{" "}
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <p style={{ marginTop: "20px" }}>No items found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Food;
