import { useState,useEffect } from "react";
import { SWIGGY_MENU_API } from "../constants"

const useRestaurants = (id) => {

    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
      getRestaurantsMenu();
    },[]);

    async function getRestaurantsMenu() {
      const data = await fetch(SWIGGY_MENU_API+id);
      const json = await data.json();
      setRestaurant(json.data);
      console.log(json.data);
      
    }

    return restaurant;
}

export default useRestaurants;