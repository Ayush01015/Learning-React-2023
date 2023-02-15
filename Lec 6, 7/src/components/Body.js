import Card from "../components/Card";
import { useState, useEffect } from "react";
// import { restaurantsList } from "../constants";
import { SWIGGY_PUBLIC_API } from "../constants";
import ShimmerUI from "./ShimmerUI";
function filterData(searchText, allRestaurants) {
   //filtering data from allRestaurants
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData; //returning searched data
}
const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //for searching input in seach input box
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); // for searched data on search button
  const [allRestaurants, setAllRestaurants] = useState([]); // for rendering all data from API. 


  async function getRestaurants() { //fetching data fromm API
    const data = await fetch(SWIGGY_PUBLIC_API);
    const json = await data.json();
    // console.log("Json: ", json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in restaurants
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Setting data in filtered restaurants for search.
  }


  useEffect(() => {
    getRestaurants();
  }, []);

  if(!allRestaurants) return <h1>Please Reload Something Went Wrong</h1>; //early return

  // if(filteredRestaurants.length === 0) return <h1>Not Found</h1>
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
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
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurants
            setfilteredRestaurants(data);
            // setSearchInput("Clicked");
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {filteredRestaurants.map((restaurant) => {
          return <Card {...restaurant.data} key={restaurant.data.uuid} />;
        })}
      </div>
    </>
  );
};

export default Body;
