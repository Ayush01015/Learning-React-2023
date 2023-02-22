import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Child - Constructor");
  }
  componentDidMount(){
    console.log("Child - componentDidMount")
  }
  render() {
    console.log("Child - Render");
    return (
      <div
        style={{
          border: "1px solid red",
        }}
      > 
        <h3>Data from Class Based Components</h3>
        <p>Name: {this.props.name}</p>
        <p>Front End Developer</p>
        <p>Namaste React</p>
        <p>count: {this.state.count}</p>
        <p>count2: {this.state.count2}</p>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 999,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default ProfileClass;

/*
    order Of call
    
    parent - Constructor
    parent - render
    child - constructor
    child - render
    child - componentDidMount
    parent - componentDidMount

*/