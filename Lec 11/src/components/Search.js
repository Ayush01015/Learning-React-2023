import { filterData } from "../Utils/Utils";
import { useContext } from "react";
import userContext from "../Utils/userContext";
const Search = ({searchInput,setSearchInput,setfilteredRestaurants,allRestaurants}) =>{
  const {user,setUser} = useContext(userContext);
    return(
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
        <input
          className="search-input ml-12"
          type="text"
          placeholder="context api example"
          value={user.name}
          onChange={(e) => setUser({
            name:e.target.value,
            email:"newEmail@gmail.com"
          })}
        />
      </div>
    )
}
export default Search;


