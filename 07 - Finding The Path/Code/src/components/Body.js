import { Card } from "./Card";
import { useState, useEffect } from "react";
import { configData } from "../Config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function filterRestaurants(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
    setSearchText("");
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(configData.RESTAURANT_API);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      return null;
    }
  }

  // Early Return
  if (!allRestaurants) return null;

  return (
    <>
      {/* Search Container */}
      <div className="search-count-wrapper">
        <div className="rest-count-info text-left">15 restaurants</div>
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input mr-2"
              maxLength={200}
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const data = filterRestaurants(
                    e.target.value,
                    allRestaurants
                  );
                  setFilteredRestaurants(data);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="xs"
              className="fa-search-input"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-search btn-lg"
            onClick={() => {
              const data = filterRestaurants(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          />
        </div>
      </div>
      {/* Search Container Ends */}
      {/* Conditional rendering with shimmer Effect UI and API data */}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card-wrapper mt-4">
          {filteredRestaurants.length == 0 ? (
            <h4 className="ms-3"> No restaurant found! </h4>
          ) : (
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  className="card-link"
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <Card {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      )}
      {/* Conditional Rendering Ends */}
    </>
  );
};

export default Body;
