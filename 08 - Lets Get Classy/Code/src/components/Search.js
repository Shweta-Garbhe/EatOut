import { totalOpenRestaurants } from "./Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function filterRestaurants(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Search = ({ filteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
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
            const data = filterRestaurants(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
