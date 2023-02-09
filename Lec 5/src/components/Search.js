import { useState } from "react";


// const value = "Ayush"; cannot use hard coded data.

const Search = () => {
    const [searchInput,setSearchInput] = useState("");
  return (
    <div className="search-component">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;
