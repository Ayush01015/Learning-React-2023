import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [log, setLog] = useState(true);
  return (
    <div
      className="font"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "22px",
        fontSize: "1.3rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontWeight: "bold",
        // justifyContent:"space-around"
      }}
    >
      <span style={{ cursor: "pointer", fontSize: "2rem" }}>
        swi<span style={{ color: "#F99417" }}>G</span>ker
      </span>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          listStyle: "none",
          marginLeft: "40rem",
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
