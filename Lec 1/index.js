import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement( //creating element take 3 Arguments
//   "h1", //what element you want to create
//   { //object where you pass Attributes or props
//     id: "title",
//     key:"1"
//   },
//   "Namaste Everyone!!" //content/element
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key:"2"
//   },
//   "I am Ayush Shrivastav"
// );

// const heading3 = React.createElement(
//     "h3",
//     {
//       id: "title",
//       key:"3",
//       style:{
//         color:"cyan"
//       }
//     },
//     "List of Fruits"
//   );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key:"4",
//     style:{
//         backgroundColor:"black",
//         color:"white",
//         border :"2px solid red",
//         border:"5px solid cyan",
//         display:"flex",
//         flexDirection:"column",
//         padding:"20px"
//     }
//   },
//   [heading, heading2]
// ); //passing Array of element, Wraping them in one container


// const container2 = React.createElement(
//     "div",
//     {
//         id:"container-2",
//         key:"5",
//         style:{
//             backgroundColor:"black",
//             color:"white",
//             border :"2px solid red",
//             border:"5px solid cyan",
//             display:"flex",
//             flexDirection:"column",
//             padding:"20px"
//         }
//     },
//     [
//         heading,
//         heading2,
//         heading3,
//         React.createElement(
//             "ul",
//             {
//               id: "ul-1",
//               key:"6",
//               style:{
//                 color:"yellow"
//               }
//             },
//             [
//             React.createElement(
//                 "li",
//                 {
//                   id: "li-1",
//                   key:"7",
//                   style:{
//                   }
//                 },
//                 "Mango"
//               ),
//               React.createElement(
//                 "li",
//                 {
//                   id: "li-2",
//                   key:"8",
//                   style:{
//                   }
//                 },
//                 "grape"
//               ),
//               React.createElement(
//                 "li",
//                 {
//                   id: "li-3",
//                   key:"9",
//                   style:{
//                   }
//                 },
//                 "papaya"
//               ), 
//               React.createElement(
//                 "li",
//                 {
//                   id: "li-4",
//                   key:"10",
//                   style:{
//                   }
//                 },
//                 "Apple"
//               ),              
//             ]
//           )
//     ]
// );
//its very hard to maintain our code like this, hard to debug, modify, understand...
//so Here comes the JSX so make developer Experience better
const heading4 = <h1 key="jsx-1">Learning JSX</h1>
const container3 = (
    <div
    style={{
        backgroundColor:"black",
        color:"white",
        border :"2px solid red",
        border:"5px solid cyan",
        display:"flex",
        flexDirection:"column",
        padding:"20px"   
    }}
    >
        <h1>Namaste React</h1>
        <h2>I am Ayush Shrivastav</h2>
        <h3>List of Fruits</h3>
        <ul
        style={{
            color:"yellow"
        }}
        >
            <li>Mango</li>
            <li>Grapes</li>
            <li>Papaya</li>
            <li>Apple</li>
            <li>Guava</li>
        </ul>
    </div>
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container3);
