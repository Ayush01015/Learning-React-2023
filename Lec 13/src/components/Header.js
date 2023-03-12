import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";

import { useSelector } from "react-redux";

const Header = () => {
  const [log, setLog] = useState(true);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div
      className="font sticky top-0"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "22px",
        fontSize: "1.3rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontWeight: "bold",
        zIndex: "1",
      }}
    >
      <span style={{ cursor: "pointer", fontSize: "2rem" }}>
        <Link to="/">
          {" "}
          swi<span style={{ color: "#F99417" }}>G</span>ker
        </Link>
      </span>

      {!isOnline ? (
        <span
          style={{
            position: "absolute",
            right: "4.5rem",
          }}
        >{`🚫`}</span>
      ) : (
        <span
          style={{
            position: "absolute",
            right: "4.5rem",
          }}
        >{`🟢`}</span>
      )}

      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          listStyle: "none",
          marginLeft: "19rem",
        }}
      >
        {/* have to add pseudo class active for 1st item* */}
        <li className="li-item" style={{ color: "#F99417" }}>
          <Link to="/">Home</Link>
        </li>
        <li className="li-item">
          <Link to="/about">About</Link>
        </li>
        <li className="li-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="li-item">
          <Link to="/deals">Deals</Link>
        </li>
        <li className="li-item">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="li-item">
          <Link to="/cart">Cart-{cartItems.length}</Link>
        </li>
      </ul>
      {log === true ? (
        <button className="log-btn" onClick={() => setLog(false)}>
          Log in
        </button>
      ) : (
        <button className="log-btn" onClick={() => setLog(true)}>
          Log out
        </button>
      )}
    </div>
  );
};
export default Header;
