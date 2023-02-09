const Card = ({ name, cloudinaryImageId ,address, totalRatingsString, deliveryTime, area, cuisines }) => {
    return (
      <div className="card-component">
        <div className="card">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId
            }
            alt="img"
          />
          <div className="card-items">
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                color: "gray",
              }}
            >
              {name}
            </span>
            <p>{address}</p>
            <span id="cuisines">{cuisines.join(", ")}</span>
            <p>{area}</p>
            <div id="card-rating">
              <h5>{totalRatingsString}</h5>
              <h5>{deliveryTime} MINS</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Card;