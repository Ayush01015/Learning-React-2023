import { useState } from "react";
const Footer = () => {
  const [name, setName] = useState(`Copy Right 2023 swiGker`);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "10vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid green",
      }}
    >
      <div
        style={{
          fontSize: "1.3rem",
          padding: "10px",
          border: "1px solid red",
        }}
      >
        {name}
      </div>
      <button
        style={{
          marginLeft: "40px",
          cursor: "pointer",
          width: "90px",
          padding: "3px",
          border: "none",
          backgroundColor: "#8BF5FA",
          borderRadius: "4px",
        }}
        onClick={() => {
          name === "Copy Right 2023 swiGker"
            ? setName("Namaste It's Ayush  Shrivastav")
            : setName("Copy Right 2023 swiGker");
        }}
      >
        Click me!!
      </button>
    </div>
  );
};

export default Footer;
