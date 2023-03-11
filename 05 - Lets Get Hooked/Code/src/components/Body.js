import { Card } from "./Card";
import { restaurantList, totalOpenRestaurants } from "./Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function filterRestaurants(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
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
              setRestaurants(data);
            }}
          />
        </div>
      </div>
      <div className="card-wrapper mt-4">
        {restaurants.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        })}

        {/* <Card {...restaurantList[0].data} />
        <Card {...restaurantList[1].data} />
        <Card {...restaurantList[2].data} />
        <Card {...restaurantList[3].data} />
        <Card {...restaurantList[4].data} />
        <Card {...restaurantList[5].data} />
        <Card {...restaurantList[6].data} />
        <Card {...restaurantList[7].data} />
        <Card {...restaurantList[8].data} />
        <Card {...restaurantList[9].data} /> */}
      </div>
    </>
  );
};

export default Body;
