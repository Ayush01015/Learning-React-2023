import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"Ayush shrivastav",
        email:"ayushshrivastav575@gmail.com"
    }
});

export default userContext;