import { Card } from "./Card";
import { useState, useEffect } from "react";
import { configData } from "../Config";
import Shimmer from "./Shimmer";
import { totalOpenRestaurants } from "./Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      console.log(data);
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
        <div className="rest-count-info col-6 text-left">
          {totalOpenRestaurants} restaurants
        </div>
        <div className="search-container col-6">
          <input
            type="text"
            className="search-input mr-2"
            maxLength={200}
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const data = filterRestaurants(e.target.value, allRestaurants);
                setFilteredRestaurants(data);
              }
            }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="xs"
            className="fa-search-input"
          />
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

      {/* Conditional rendering with shimmer Effect UI and API data */}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card-wrapper mt-4">
          {filteredRestaurants.length == 0 ? (
            <h4 className="ms-3"> No restaurant found! </h4>
          ) : (
            filteredRestaurants.map((restaurant) => {
              return <Card key={restaurant.data.id} {...restaurant.data} />;
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
