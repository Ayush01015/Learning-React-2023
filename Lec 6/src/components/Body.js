import Card from "../components/Card";
import { useState, useEffect } from "react";
import { restaurantsList } from "../constants";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
// import Search from "./Search";
/*
const [searchInput,setSearchInput] = useState("");
# It is a useState Hook used to declare a local state variable.
# Hooks are nothing but just a JS function
# Here useState return an Array
# And in returned Array index[0] is Variable name
# And index[1] is function which is used to change the value of     state variable.
# const [searchInput,setSearchInput] = useState("");
# const [     0     ,     1        ] = useState(defaultvalue);
*/
/*
value={searchInput} //default "" --> empty String
onChange={(e)=>setSearchInput(e.target.value)}
# Here setSearchInput() function is taking e.target.value
as Argument. 
# setSearhInput() changes the state to whatever
there is in e.target.value
# setSearchInput() is used to change the local state variable.
*/
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  // console.log(restaurants);
  async function getRestaurants() {
    const data = await fetch(SWIGGY_PUBLIC_API);
    const json = await data.json();
    // console.log("Data: ", data);
    console.log("Json: ", json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurants();
  }, []);
  return restaurants?.length === 0 ? (
    <div
      style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
      }}
    >
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
      <ShimmerUI />
    </div>
  ) : (
    <>
      <div className="search-component">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, restaurants);
            // update the state - restaurants
            setRestaurants(data);
            // setSearchInput("Clicked");
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return <Card {...restaurant.data} key={restaurant.data.uuid} />;
        })}
      </div>
    </>
  );
};

export default Body;
