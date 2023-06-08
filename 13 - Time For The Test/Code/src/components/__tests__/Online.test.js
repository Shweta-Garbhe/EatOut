import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import store from "../../utils/store";

test("Online status shuld be verify on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const btnLogin = header.getByTestId("btn-login");
  fireEvent.click(btnLogin);
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("online");
});
