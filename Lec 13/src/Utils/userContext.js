import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"dummyName",
        email:"dummy@gmail.com"
    }
});

export default userContext;