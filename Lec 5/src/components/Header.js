const Header = () => {
    return (
      <div
        className="font"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          margin: "auto auto",
          fontSize: "1.3rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <span style={{ cursor: "pointer" }}>swiGker</span>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            listStyle: "none",
            marginLeft: "50rem",
          }}
        >
          <li className="li-item">Home</li>
          <li className="li-item">About</li>
          <li className="li-item">Contact Us</li>
          <li className="li-item">Shop</li>
        </ul>
      </div>
    );
  };

  export default Header;