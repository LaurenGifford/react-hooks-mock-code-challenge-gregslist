import React from "react";
import ListingCard from "./ListingCard";
import Form from "./Form.js"

function ListingsContainer({listings, onDeleteClick, baseURL, onNewSubmit}) {

  const renderListings = listings.map(listing => (
    <ListingCard 
      key={listing.id}
      listing={listing}
      onDeleteClick={onDeleteClick}
    />
  ))
  return (
    <main>
      <Form 
        baseURL={baseURL}
        onNewSubmit={onNewSubmit}
      />
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
