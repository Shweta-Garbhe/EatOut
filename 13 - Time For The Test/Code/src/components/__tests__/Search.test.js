import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/DummyData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Restaurant list should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("restaurant-list")));

  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(15);
});

test("Search results on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("btn-search"));
  const inputSearch = body.getByTestId("input-search");
  const btnSearch = body.getByTestId("btn-search");
  fireEvent.change(inputSearch, {
    target: {
      value: "ice",
    },
  });

  fireEvent.click(btnSearch);
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(4);
});
