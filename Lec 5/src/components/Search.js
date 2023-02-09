
const value = "Ayush";
const Search = () => {
    return(
        <div className="search-component">
        <input className="search-input" type="text" placeholder="Search..." value={value}/>
        <button className="search-btn">Search</button>
        </div>
    )
}

export default Search;