import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"NULL",
        login:"NULL",
        avatar_url:"NULL",
        bio:"",
      }
    };
    console.log("Child - Constructor");
  }
  async componentDidMount(){
    //API CALL
    const data = await fetch("https://api.github.com/users/Ayush01015");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json,
    })
    console.log("Child - componentDidMount")
  }
  componentDidUpdate(){
    console.log("Child - componentDidUpdate")
  }
  render() {
    console.log("Child - Render");
    return (
      <div
        style={{
          border: "1px solid red",
        }}
      > 
        <p>Namaste React</p>
        <h3>Data from Class Based Components</h3>
        <p>Name: {this.state.userInfo.name}</p>
        <p>Front End Developer</p>
        <img 
        style={{
            width:"15%",
            borderRadius:"100%"
        }}
        src={this?.state?.userInfo?.avatar_url} alt="img" /> 
        {/* Use optional chaining for all and Destructuring*/}
        <p>UserName: {this.state.userInfo.login}</p>
        <p>UserName: {this.state.userInfo.bio}</p>
        {console.log("--------",this.state.userInfo.bio)}
      </div>
    );
  }
}

export default ProfileClass;

/*
    Order Of call
__________Render________Phase__________
parent - Constructor
parent - render
child - constructor
child - render
__________Commit________Phase__________
parent - componentDidMount
child - componentDidMount (async)
Child - Render (Change in State)
Child - componentDidUpdate (After Every Render)

*/


