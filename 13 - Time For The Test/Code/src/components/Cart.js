import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import { clearCart, getTotalAmount } from "../utils/cartSlice";
import CheckOut from "./CheckOut";
import { useEffect } from "react";

const Cart = () => {
  const itemLength = useSelector((store) => store.cart.items.length);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return itemLength == 0 ? (
    <div className="mt-2">
      <div
        data-testid="complete-cart"
        className="d-flex p-2 justify-content-center"
      >
        <img
          alt="empty-cart-img"
          src={require("../../public/emptycart.jpg")}
          className="img-empty-cart"
        />
      </div>
      <div className="d-flex p-2 justify-content-center">
        <Link to="/">
          <button className="btn btn-sm bg-success text-white mt-1">
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-between">
      <div>
        <h2 className="m-5">Cart - {itemLength} food item/'s</h2>

        <div>
          <CartItems />
          {itemLength > 0 && (
            <button
              className="btn btn-sm bg-warning"
              onClick={() => {
                handleCartClear();
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
      {itemLength > 0 && <CheckOut />}
    </div>
  );
};
export default Cart;
