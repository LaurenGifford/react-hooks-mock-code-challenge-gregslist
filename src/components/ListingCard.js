import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {
  const [liked, setLiked] = useState(false)

  const {id, description, image, location} = listing

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    onDeleteClick(id)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={() => setLiked(!liked)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLiked(!liked)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
