import { Card } from "./Card";
import { useState, useEffect } from "react";
import { configData } from "../Config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/Helper";
import useOnline from "../hooks/useOnline";

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

  // Online/Offline condition wise rendering using custom hook
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="rest-count-info ms-5 ps-4" style={{ color: "#4F249B" }}>
        You are offline. Please check your internet connecton!
      </div>
    );
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
              data-testid="input-search"
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
            data-testid="btn-search"
          />
        </div>
      </div>
      {/* Search Container Ends */}
      {/* Conditional rendering with shimmer Effect UI and API data */}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card-wrapper mt-4" data-testid="restaurant-list">
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
