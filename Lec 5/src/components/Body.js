
import Card from "../components/Card";
import { useState } from "react";
import { restaurantsList } from "../constants";
// import Search from "./Search";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantsList);
  return (
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

