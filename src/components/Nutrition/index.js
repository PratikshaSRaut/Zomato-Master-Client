import React from "react";

//components
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

function Nutrition() {
  return (
    <div>
      <NutritionHeroCarousel />
      <div className="my-6">
        <NutritionCarousel />
      </div>
      <div className="flex justify-between flex-wrap">
        <NutritionCard
          bg="red"
          image="https://m.media-amazon.com/images/I/71zYb3q5HeL._SX522_.jpg"
        />
        <NutritionCard
          bg="red"
          image="https://m.media-amazon.com/images/I/61TwBfVhndL._AC_UL320_.jpg"
        />
        <NutritionCard
          bg="red"
          image="https://m.media-amazon.com/images/I/71RUB5C-NnL._AC_UL320_.jpg"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
      </div>
    </div>
  );
}

export default Nutrition;
