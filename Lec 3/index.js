import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
    return(
        <div
        className="font"
        style={{
            

        }}
        >
            <span style={{cursor:"pointer"}}>LOGO</span>
            <ul style={{
                

                
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
