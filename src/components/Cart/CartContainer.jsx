import React, { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

// component
import FoodItem from "./FoodItem";

function CartSM({ toggle }) {
  const reduxState = useSelector((globalState) => globalState.cart.cart);
  const navigate = useNavigate();
  const continueToCheckout = () => {
    navigate("/checkout/orders");
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex justify-evenly items-start">
          <small className="flex items-center gap-1" onClick={toggle}>
            {reduxState.length} Item
            <span className="border-2 border-text-50 rounded-md p-1">
              <IoMdArrowDropup />
            </span>
          </small>
          <h4>Rs.{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}</h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartLG({ toggle }) {
  const reduxState = useSelector((globalState) => globalState.cart.cart);
  const navigate = useNavigate();
  const continueToCheckout = () => {
    navigate("/checkout/orders");
  };
  return (
    <>
      <div className="hidden md:flex  items-center justify-between text-lg font-semibold">
        <div className="flex justify-between w-full items-start  ">
          <h4 className="flex items-center gap-1" onClick={toggle}>
            Your Orders({reduxState.length})
            <button className="border-2 border-text-50 rounded-md p-1 ">
              <IoMdArrowDropup />
            </button>
          </h4>
        </div>
        <div className="flex w-3/12 justify-between items-center p-1">
          <h4>
            Subtotal: Rs.{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const reduxState = useSelector((globalState) => globalState.cart.cart);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {reduxState.length && (
        <>
          <>
            {isOpen && (
              <div className="fixed w-full overflow-y-scroll h-52 bg-white z-10 p-2 bottom-14 px-3">
                <div className="flex items-center justify-between md:px-20 ">
                  <h3 className="text-xl font-semibold">Your Orders</h3>
                  <IoCloseSharp onClick={closeCart} />
                </div>

                <hr className="my-2" />

                <div className="flex flex-col gap-2 md:px-20">
                  {reduxState.map((food) => (
                    <FoodItem key={food._id} {...food} />
                  ))}
                </div>
              </div>
            )}

            <div className="fixed w-full bg-text-150 z-10 p-3 shadow-xl bottom-0  mx-auto md:px-20">
              <CartSM toggle={toggleCart} />
              <CartLG toggle={toggleCart} />
            </div>
          </>
        </>
      )}
    </>
  );
}

export default CartContainer;
