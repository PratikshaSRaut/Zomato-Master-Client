import "./App.css";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Navigate } from "react-router-dom";

//HOC
import HomeLayoutHoc from "./HOC/Home.hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import CheckoutLayoutHoc from "./HOC/Checkout.hoc";

//Pages
import HomePage from "./pages/HomePage";
// import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/CheckoutPage";
import GoogleAuth from "./pages/GoogleAuth";
import RedirectRestaurant from "./pages/Restaurant/Redirect";

//Components
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu/Menu";
import Photos from "./components/Restaurant/Photos/Photos";

//redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/delivery" />} />
      </Routes>
      {/* <RestaurantLayoutHoc path="/restaurant/:id" component={RestaurantPage} /> */}
      <RestaurantLayoutHoc path="/restaurant/:id" component={RedirectRestaurant} />

      <HomeLayoutHoc component={HomePage} path="/:type" />
      <HomeLayoutHoc path="/google/:token" component={GoogleAuth} />

      <RestaurantLayoutHoc component={Overview} path="/restaurant/:id/overview" />
      <RestaurantLayoutHoc component={OrderOnline} path="/restaurant/:id/order-online" />
      <RestaurantLayoutHoc component={Reviews} path="/restaurant/:id/reviews" />
      <RestaurantLayoutHoc component={Menu} path="/restaurant/:id/menu" />
      <RestaurantLayoutHoc component={Photos} path="/restaurant/:id/photos" />

      <CheckoutLayoutHoc component={Checkout} path="/checkout/orders" />
    </>
  );
}

export default App;
