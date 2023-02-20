import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props)
        
    }


    render(){
        return(
            <div
            style={{
                border:"1px solid red",
            }}
            >
            <h3>Data from Class Based Components</h3>
            <p>Name: {this.props.name}</p>
            <p>Front End Developer</p>
            <p>Namaste React</p>
            </div>
        )
    }
}

export default ProfileClass;