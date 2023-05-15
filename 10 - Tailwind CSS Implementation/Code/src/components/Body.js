import { Card } from "./Card";
import { useState, useEffect } from "react";
import { configData } from "../Config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
      <div className="px-12 flex justify-between border border-b-[1px] border-slate-300">
        <div className="rest-count-info text-left">15 restaurants</div>
        <div className="py-8 flex w-[48%]">
          <div className="relative w-[85%]">
            <input
              type="text"
              className="mr-3 h-[100%] text-ellipsis text-inherit bg-inherit align-middle border border-solid border-slate-300 rounded outline-0 px-4 text-base overflow-hidden w-[97%]"
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
