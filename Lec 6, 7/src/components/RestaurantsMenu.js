import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../constants";
import { IMG_CDN_URL } from "../constants";
import ShimmerMenu from "./ShimmerMenu";
const RestaurantsMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const data = await fetch(SWIGGY_MENU_API+id);
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json.data);
  }

  return (!restaurant) ? (
    <ShimmerMenu />
  ) : (
    <div className="restraunt-menu">
      <div className="menu-header">
        <div className="menu-header-img menu-header-mg">
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="resImg" />
        </div>
        <div className="header-info menu-header-mg2">
          <span
            style={{
              fontSize: "1.7rem",
              fontWeight: "bold",
            }}
          >
            {restaurant?.name}
          </span>
          <span style={{ fontSize: "0.8rem" }}>
            {restaurant?.cuisines?.join(", ")}
          </span>
          <span style={{ fontSize: "1rem" }}>{restaurant?.area}</span>
          <span style={{ fontSize: "1rem" }}>{restaurant?.areaSlug}</span>
          <div
            style={{
              // border:"1px solid grey",
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              padding: "5px",
            }}
          >
            <span className="sub-menu-item">{restaurant?.avgRating} Stars</span>
            <span className="sub-menu-item">
              {restaurant?.sla?.deliveryTime} Mins
            </span>
            <span className="sub-menu-item">{restaurant?.costForTwoMsg}</span>
          </div>
        </div>
      </div>
      <div className="menu">
        <span className="menu-span">Menu</span>
        <div className="menu-sub">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <div className="menu-sub-2" key={item.id}>
                <div className="menu-item-con">
                  <div className="menu-item-con-data">
                    <p
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </p>
                    <p style={{ fontSize: "1rem" }}>{item.category}</p>
                    <p>₹{restaurant?.menu?.items[item.id].price / 100}</p>
                  </div>
                  <div className="menu-item-con-img">
                    <img src={IMG_CDN_URL + item.cloudinaryImageId} alt="img" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
