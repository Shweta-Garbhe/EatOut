import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  getTotalAmount,
  removeItem,
} from "../utils/cartSlice";

const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };
  const handelDecrease = (item) => {
    dispatch(decreaseQuantity(item));
    dispatch(getTotalAmount());
  };
  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
    dispatch(getTotalAmount());
  };

  return (
    <ul>
      {cartItems.map((item, index) => (
        <div className="ml-2" key={index}>
          <div className="p-2 m-1 rounded">
            <div className="d-flex">
              <div className="ml-2 menu-name">
                {item?.card?.info?.name}
                {item?.card?.info?.isVeg == 0 ? (
                  <img
                    src={require("../../public/nonveg.jpg")}
                    alt="veg"
                    height={15}
                    width={15}
                    className="float-start me-2"
                  />
                ) : (
                  <img
                    src={require("../../public/veg.png")}
                    alt="veg"
                    height={18}
                    width={18}
                    className="float-start me-2"
                  />
                )}
              </div>
              <div className="ml-4 d-flex justify-content-around">
                <button
                  onClick={() => {
                    handelDecrease(item);
                  }}
                  className="p-1 text-gray-400 font-bold"
                >
                  -
                </button>
                <span>{item?.quantity}</span>
                <button
                  onClick={() => {
                    handelAddItem(item);
                  }}
                  className="p-1 text-green-600 font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="ml-2">
              {item?.card?.info?.price / 100 == 0 ? (
                <span className="text-sm mr-1 ">
                  ₹{item?.card?.info?.price / 100}
                </span>
              ) : (
                <span className="text-sm mr-1 ">
                  ₹{item?.card?.info?.price / 100}
                </span>
              )}
              <p>{item.category}</p>
              <p className="text-[12px]">{item?.card?.info?.description}</p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  handelRemoveItem(item);
                }}
                className="p-1 rounded-lg bg-red-400  text-[11px] hover:bg-red-500 text-white "
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};
export default CartItems;
