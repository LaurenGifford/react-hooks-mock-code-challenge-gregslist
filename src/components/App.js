import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const baseURL = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  const filtered = listings.filter(listing => 
    listing.description.includes(search))

  const sortedListings = sorted ? listings.sort((list1, list2) => {
    return list1.location.localeCompare(list2.location)
    }) : listings

  useEffect(() => {
    fetch(baseURL)
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  function handleRemoveListing(listingId){
    console.log(listingId)
    const notDeleted = listings.filter(listing => listing.id !== listingId)
    setListings([...notDeleted])
  }

  function handleSearch(listingName) {
    console.log(listingName)
    setSearch(listingName)
  }

  function handleSort(location) {
    console.log("sort!", location)
    setSorted(sorted => !sorted)
    // if (sorted) {
    //   const sortedListings = listings.sort((list1, list2) => {
    //     return list1.location.localeCompare(list2.location)
    //   })
    //   setListings([...sortedListings])
    // }
    // else {setListings([...listings])}
  }

  function handleNewSubmit(newListing) {
    console.log(newListing)
    setListings([...listings, newListing])
  }


  return (
    <div className="app">
      <Header 
        onSearch={handleSearch}
        onSort={handleSort}
        sorted={sorted}
        baseURL={baseURL}
      />
      <ListingsContainer 
        listings={search.length > 0 ? filtered : listings}
        onDeleteClick={handleRemoveListing}
        baseURL={baseURL}
        onNewSubmit={handleNewSubmit}
      />
    </div>
  );
}

export default App;
