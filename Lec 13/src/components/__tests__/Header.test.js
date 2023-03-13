import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering Header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  //check if logo is loaded
  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);
  // expect(logo[0].elementType).toBe("span");
});

test("Online status shuold be green when header is getting render", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const online = header.getByTestId("online");
  console.log(online);
        expect(online.innerHTML).toBe("🟢");
});

test("Cart items should be zero when header is rendering", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const Cart = header.getByTestId("cart");
  console.log(Cart);
  expect(Cart.innerHTML).toBe("Cart-0");
});


/**
 * Wrap the header in Provider
 * Wrap everything as jsdom don't understand react-router's (createBrowserRouter()) so using StaticRouter And 
 * wrapinng everything in it.
 * 
 */