import React, {useState} from "react";

function Search({onSearch, onSort, sorted}) {
  const [searchTerm, setSearchTerm] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm)
  }

  function handleSortClick(e) {
    onSort(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
      <label htmlFor={"location"}>
        <input 
          onClick={(e) => handleSortClick(e)}
          type="radio"
          value="location"
          name="location"
          checked={sorted}
        />
      Sort By Location</label>
    </form>
  );
}

export default Search;
