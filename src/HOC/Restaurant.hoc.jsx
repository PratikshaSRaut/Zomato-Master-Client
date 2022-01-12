import React from "react";
import { Routes, Route } from "react-router-dom";

// layout
import RestaurantLayout from "../layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      {/* <Routes>
        <Route {...rest} element={<RestaurantLayout {...props} />} />
      </Routes> */}
      <Routes>
        <Route
          {...rest}
          element={
            <RestaurantLayout>
              <Component />
            </RestaurantLayout>
          }
        />
      </Routes>
    </>
  );
}

export default RestaurantLayoutHoc;
