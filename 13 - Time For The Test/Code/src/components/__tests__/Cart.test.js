import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import store from "../../utils/store";

test("Cart should have 0 items rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartItems = header.getByTestId("cart");
  expect(cartItems.innerHTML).toBe("0");
});
