import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement( //creating element take 3 Arguments
  "h1", //what elemenr you want to create
  { //object where you pass Attribures or props
    id: "title",
  },
  "Namaste Everyone!!" //content/element
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "I am Ayush Shrivastav"
);

const heading3 = React.createElement(
    "h3",
    {
      id: "title",
      style:{
        color:"cyan"
      }
    },
    "List of Fruits"
  );
const container = React.createElement(
  "div",
  {
    id: "container",
    style:{

    }
  },
  [heading, heading2]
); //passing Array of element, Wraping them in one container


const container2 = React.createElement(
    "div",
    {
        id:"container-2",
        style:{
            backgroundColor:"black",
            color:"white",
            border :"2px solid red",
            border:"5px solid cyan",
            display:"flex",
            flexDirection:"column",
            padding:"20px"
        }
    },
    [
        heading,
        heading2,
        heading3,
        React.createElement(
            "ul",
            {
              id: "ul-1",
              style:{
                color:"yellow"
              }
            },
            [
            React.createElement(
                "li",
                {
                  id: "li-1",
                  style:{
                  }
                },
                "Mango"
              ),
              React.createElement(
                "li",
                {
                  id: "li-2",
                  style:{
                  }
                },
                "grape"
              ),
              React.createElement(
                "li",
                {
                  id: "li-3",
                  style:{
                  }
                },
                "papaya"
              ), 
              React.createElement(
                "li",
                {
                  id: "li-4",
                  style:{
                  }
                },
                "Apple"
              ),              
            ]
          )
    ]
);


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container2);
