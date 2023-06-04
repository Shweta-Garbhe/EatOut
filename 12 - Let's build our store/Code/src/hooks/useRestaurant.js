import { useEffect, useState } from "react";
import { configData } from "../Config";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(configData.RESTAURANT_MENU_API + restaurantId);
    const response = await data.json();
    const restInfo = response?.data?.cards[0]?.card?.card?.info;
    const restMenuInfo =
      response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setRestaurant(restInfo);
    setRestaurantMenu(restMenuInfo);
  }

  return { restaurant: restaurant, restaurantMenu: restaurantMenu };
};

export default useRestaurant;
