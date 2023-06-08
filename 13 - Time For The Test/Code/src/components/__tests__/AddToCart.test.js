import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_MENU } from "../../mocks/DummyData";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

test("Add To Cart", async () => {
  const MenuCart = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(MenuCart.getAllByTestId("menu-list")));

  const btnAddItem = MenuCart.getAllByTestId("btn-add-item");
  const cart = MenuCart.getByTestId("cart");

  fireEvent.click(btnAddItem[0]);

  expect(cart.innerHTML).toBe("1");
});
