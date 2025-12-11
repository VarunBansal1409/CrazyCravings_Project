import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Partner_Info.css";
import axios from "axios";

const Partner_Info = () => {
  let location = useLocation();
  let [value, setValue] = useState("");
  let [state, setState] = useState([]);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [restaurantName, setRname] = useState("");

  useEffect(() => {
    const phoneOrId =
      location && location.state && location.state.phoneOrId
        ? location.state.phoneOrId
        : "";
    const normalized = phoneOrId ? phoneOrId.replace(/\s+/g, "") : "";
    setValue(normalized);
  }, [location]);

  useEffect(() => {
    if (!value) {
      setState([]);
      return;
    }

    let normalized = String(value).replace(/\s+/g, "");
    let url = `${
      import.meta.env.VITE_API_URL || "http://localhost:8080"
    }/api/partners/byNumber/${encodeURIComponent(normalized)}`;

    console.log("Partner_Info: Fetching from URL:", url);

    axios
      .get(url)
      .then((res) => {
        console.log("Partner_Info: API Response:", res.data);
        let data = Array.isArray(res.data) ? res.data : [];
        setState(data);
        let apiName = "";
        if (data.length > 0) {
          apiName = data[0].restaurantName || data[0].restaurant_name || "";
        }

        if (apiName) {
          setRname(apiName);
        } else {
          try {
            const saved = localStorage.getItem(`restaurantName_${normalized}`);
            if (saved) setRname(saved);
          } catch (e) {}
        }
      })
      .catch((err) => {
        console.error("Partner_Info: API Error:", err);
        setState([]);
      });
  }, [value]);

  let submit = (e) => {
    e.preventDefault();
    if (!value) return;
    let payload = {
      image,
      name,
      partnerNo: value,
      price,
      restaurantName,
    };
    axios
      .post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:8080"
        }/api/partners`,
        payload
      )
      .then((res) => {
        if (value && restaurantName) {
          localStorage.setItem(`restaurantName_${value}`, restaurantName);
        }
        // Update state locally
        setState([...state, res.data]);

        // Clear form
        setImage("");
        setName("");
        setPrice("");
        // Do NOT reload the page
        // window.location.reload();
      })
      .catch((err) => {
        console.error("Partner_Info: Error adding item", err);
        alert("Failed to add item. Please try again.");
      });
  };

  let deletedata = (id) => {
    console.log("Deleting item:", id);
    axios
      .delete(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:8080"
        }/api/partners/${id}`
      )
      .then(() => {
        // Update state locally
        setState(state.filter((item) => item.id !== id));
        // window.location.reload();
      })
      .catch((err) => {
        console.error("Partner_Info: Error deleting item", err);
        alert("Failed to delete item. Please try again.");
      });
  };

  return (
    <div className="partner-info-container">
      <div className="restaurant-container">
        <div className="restaurant-header">
          <input
            className="restaurant-name"
            type="text"
            placeholder="Restaurant Name"
            value={restaurantName}
            onChange={(e) => {
              setRname(e.target.value);
            }}
            required
          />
          <p className="restaurant-phone">{value}</p>
        </div>

        <form className="restaurant-form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Food Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Price (₹)"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <table className="restaurant-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {state.map((x) => {
              return (
                <tr key={x.id}>
                  <td>
                    <img src={x.image} alt="" />
                  </td>
                  <td>{x.name}</td>
                  <td>₹{x.price}</td>
                  <td>
                    <button
                      className="restaurant-delete"
                      onClick={() => {
                        deletedata(x.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Partner_Info;
