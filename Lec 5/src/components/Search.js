import { useState } from "react";
import { restaurantsList } from "../constants";

// const value = "Ayush"; cannot use hard coded data.
// function filterData(searchText,restaurants){
//     return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
// }
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Search = () => {
    //need to use Hook useState
    const [restaurants,setRestaurants] = useState(restaurantsList);
    const [searchInput,setSearchInput] = useState("");
    /*
    const [searchInput,setSearchInput] = useState("");
    # It is a useState Hook used to declare a local state variable.
    # Hooks are nothing but just a JS function
    # Here useState return an Array
    # And in returned Array index[0] is Variable name
    # And index[1] is function which is used to change the value of state variable.
    # const [searchInput,setSearchInput] = useState("");
    # const [     0     ,     1        ] = useState(defaultvalue);
    */
  return (
    <div className="search-component">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        /*
        value={searchInput} //default "" --> empty String
        onChange={(e)=>setSearchInput(e.target.value)}
        # Here setSearchInput() function is taking e.target.value
        as Argument. 
        # setSearhInput() changes the state to whatever
        there is in e.target.value
        # setSearchInput() is used to change the local state variable.
        */
      />
      <button className="search-btn"
        onClick={() => {
          //need to filter the data
          const data = filterData(searchInput, restaurants);
          // update the state - restaurants
          setRestaurants(data);
        }}     
      >Search</button>
    </div>
  );
};

export default Search;
