import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faIndianRupeeSign,
  faInfoCircle,
  faLocationArrow,
  faLocationCrosshairs,
  faLocationDot,
  faLocationPin,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { configData } from "../Config";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurant from "../hooks/useRestaurant";
import { addItem, getTotalAmount } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, restaurantMenu } = useRestaurant(id);
  const dispatch = useDispatch();

  const handleAddItem = (menuItem) => {
    dispatch(addItem(menuItem));
    dispatch(getTotalAmount());
  };

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className="menu-page-container">
        <div className="menu-wrapper">
          <div>
            <img
              src={configData.IMG_CDN_URL + restaurant.cloudinaryImageId}
              alt="restaurant-menu"
              className="card-image"
              style={{ boxShadow: "0px 1px 2px 0px #bca8a8" }}
            />
          </div>
          <div style={{ marginLeft: "6%", width: "30%" }}>
            <h4 style={{ color: "#5421a1" }}> {restaurant.name} </h4>
            <p className="restaurant-basic-info mt-3 m-0">
              <FontAwesomeIcon
                icon={faCutlery}
                size="xs"
                style={{ color: "#f37229" }}
              />
              &nbsp; &nbsp;
              {restaurant.cuisines.join(", ")}
            </p>
            <p className="restaurant-basic-info mt-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xs"
                style={{ color: "#f37229" }}
              />
              &nbsp; &nbsp;
              {restaurant.areaName + ", " + restaurant.city}
            </p>
            <p className="restaurant-basic-info mt-3">
              <FontAwesomeIcon
                icon={faInfoCircle}
                size="xs"
                style={{ color: "#f37229" }}
              />
              &nbsp; &nbsp;
              {restaurant.feeDetails.message}
            </p>
          </div>
          <div style={{ marginLeft: "38%" }}>
            {restaurant.avgRatingString == "--" ? (
              ""
            ) : (
              <div
                className="icon-star-menu p-0"
                style={{ backgroundColor: "rgb(0 167 1)" }}
              >
                <FontAwesomeIcon icon={faStar} size="2xs" />
                &nbsp;{restaurant.avgRatingString}
              </div>
            )}
            <div className="rating-count">{restaurant.totalRatingsString}</div>
            <div className="price">{restaurant.costForTwoMessage}</div>
          </div>
        </div>
        <div className="menu-items-wrapper">
          {restaurantMenu ? (
            <h4
              className="explore pt-4"
              style={{
                color: "#3e4152",
                fontWeight: "700",
                fontSize: "1.3rem",
              }}
            >
              Explore the menu....
            </h4>
          ) : (
            ""
          )}

          {/* Restaurant Menu Info */}
          {!restaurantMenu ? (
            <h5 className="mt-5">
              Sorry, we are not serving at the moment. Please try again later!!
            </h5>
          ) : (
            Object.values(restaurantMenu).map((menu, index) => {
              return (
                <>
                  <div className="menu-list-container mt-5" key={index}>
                    <div className="menu-name">
                      {menu.card?.info?.isVeg ? (
                        <img
                          src={require("../../public/veg.png")}
                          alt="veg"
                          height={18}
                          width={18}
                          className="float-start me-2"
                        />
                      ) : (
                        <img
                          src={require("../../public/nonveg.jpg")}
                          alt="veg"
                          height={18}
                          width={18}
                          className="float-start me-2"
                        />
                      )}

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
                      {menu.card?.info?.imageId && (
                        <img
                          src={
                            configData.IMG_CDN_URL + menu.card?.info?.imageId
                          }
                          alt="restaurant-menu"
                          className="menu-item-image"
                        />
                      )}
                      <br />
                      <button
                        className="mt-1 btn btn-primary btn-sm btn-add-menu"
                        onClick={() => handleAddItem(menu)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
