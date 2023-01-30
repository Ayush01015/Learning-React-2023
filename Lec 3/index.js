import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
    return(
        <div
        className="font"
        style={{
            backgroundColor:"black",
            color:"white",
            padding:"20px",
            margin:"auto auto",
            fontSize:"1.3rem",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            fontWeight:"bold"

        }}
        >
            <span style={{cursor:"pointer"}}>LOGO</span>
            <ul style={{
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",
                listStyle:"none",
                // border:"2px solid red",
                marginLeft:"50rem"

                
            }}>
                <li
                className="li-item"
                >Home</li>
                <li
                className="li-item"
                >About</li>
                <li
                className="li-item"
                >Contact Us</li>
                <li
                className="li-item"
                >Shop</li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);
