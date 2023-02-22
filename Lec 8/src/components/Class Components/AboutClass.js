import React from "react";
import { Outlet } from "react-router-dom";

class AboutClass extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent - Constructor");
    }
    componentDidMount(){
        // best place to make an API call
        console.log("Parent - Component did mount");
    }
    render(){
        console.log("Parent - Render");
        return(
            <>
                <h1>About</h1>
                <p><Outlet/></p>    
            </>
        )
    }
}
export default AboutClass;