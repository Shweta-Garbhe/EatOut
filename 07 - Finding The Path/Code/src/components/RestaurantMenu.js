import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { configData } from "../Config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(configData.RESTAURANT_MENU_API + id);
    const response = await data.json();
    const restInfo = response?.data?.cards[0]?.card?.card?.info;
    const restMenuInfo =
      response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setRestaurant(restInfo);
    setRestaurantMenu(restMenuInfo);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-page-container">
        <div className="menu-wrapper">
          <div>
            <h4 style={{ color: "#5421a1" }}> {restaurant.name} </h4>
            <p className="restaurant-basic-info mt-3 m-0">
              {restaurant.cuisines.join(", ")}
            </p>
            <p className="restaurant-basic-info">
              {restaurant.areaName + ", " + restaurant.city}
            </p>
            <p className="restaurant-basic-info mt-2">
              {restaurant.feeDetails.message}
            </p>
          </div>
          <div>
            {restaurant.avgRatingString == "--" ? (
              ""
            ) : (
              <div className="icon-star-menu p-0">
                <FontAwesomeIcon icon={faStar} size="2xs" />
                &nbsp;{restaurant.avgRatingString}
              </div>
            )}
            <div className="rating-count">{restaurant.totalRatingsString}</div>
            <div className="price">{restaurant.costForTwoMessage}</div>
          </div>
        </div>
        <h5 className="explore pt-4" style={{ color: "#ffa222" }}>
          Explore The Menu....
        </h5>
        {/* Restaurant Menu Info */}

        {!restaurantMenu ? (
          <h6 className="mt-3">
            Sorry, we are not serving at the moment. Please try again later!!
          </h6>
        ) : (
          Object.values(restaurantMenu).map((menu) => {
            return (
              <>
                <div className="menu-list-container mt-5" key={menu.id}>
                  <div>
                    <h6>{menu.card?.info?.name}</h6>
                    <div>
                      <FontAwesomeIcon icon={faIndianRupeeSign} size="2xs" />
                      &nbsp;{menu.card?.info?.price / 100}
                    </div>
                    <div className="menu-items-list">
                      {menu.card?.info?.description}
                    </div>
                  </div>
                  <div className="menu-item-img-wrapper text-center">
                    <img
                      src={configData.IMG_CDN_URL + menu.card?.info?.imageId}
                      alt="restaurant-menu"
                      className="menu-item-image"
                    />
                    <br />
                    <button className="mt-1 btn btn-primary btn-sm btn-add-menu">
                      Add
                    </button>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
