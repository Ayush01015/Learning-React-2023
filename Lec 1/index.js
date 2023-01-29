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

const container = React.createElement(
  "div",
  {
    id: "container",
    style:{
        border:"5px solid cyan",
        display:"flex",
        flexDirection:"column",
        padding:"20px"
    }
  },
  [heading, heading2]
); //passing Array of element, Wraping them in one container

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root


root.render(container);
