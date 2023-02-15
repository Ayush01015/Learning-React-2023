import { useState } from "react";


const Header = () => {
  const [log,setLog] = useState(true);
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
        <li className="li-item" style={{color:"#F99417",}} >Home</li> //have to add pseudo class active for this item
        <li className="li-item">About</li>
        <li className="li-item">Contact Us</li>
        <li className="li-item">Shop</li>
      </ul>
        {log===true ? (
          <button className="log-btn" onClick={()=>setLog(false)} >Log in</button>
        ) : (
          <button className="log-btn" onClick={()=>setLog(true)} >Log out</button>
        )}
    </div>
  );
};
export default Header;
