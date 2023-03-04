import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../Utils/useContext";
import useOnline from "../Utils/useOnline";
const Header = () => {
  const [log, setLog] = useState(true);
  const isOnline = useOnline();
  const {user} = useContext(userContext);
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
      <Link to="/" > swi<span style={{ color: "#F99417" }}>G</span>ker</Link>
      </span>

      {
        (!isOnline)?(
          <span
        style={{
          position: "absolute",
          right: "4.5rem",
        }}
      >{`🚫`}</span>
        ):(
          <span
        style={{
          position: "absolute",
          right: "4.5rem",
        }}
      >{`🟢`}</span>
        )

      }
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          listStyle: "none",
          marginLeft: "30rem",
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
      </ul>
      {/* {log === true ? (
        <button className="log-btn" onClick={() => setLog(false)}>
          Log in
        </button>
      ) : (
        <button className="log-btn" onClick={() => setLog(true)}>
          Log out
        </button>
      )} */}
      <span className="flex flex-row text-[0.5rem]">
        {user.name} {user.email}
      </span>
    </div>
  );
};
export default Header;
