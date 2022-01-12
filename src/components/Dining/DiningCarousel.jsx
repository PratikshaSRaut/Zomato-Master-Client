import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/pictures/7/20055407/c944634c60102d3b94d84036ce079fe0.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Newly Opened",
      places: "43 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/3/20054353/f5c50d3db35b2241bcea43e07462cc72.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Trending This Week",
      places: "60 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/19977066/fd37d18dcceef34be4022c74b40f88dc.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Out Door Seating",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/20039838/c686ae689b598cc71dab54bce84d5a4c.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Best of NCR",
      places: "210 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/18678400/3c5c65c7253d42f47a620cb302d9e5f4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title: "Sunday Brunches",
      places: "85 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/18678400/faf9266280b3624dc030d9b5d0951fe1.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      title: "For Family",
      places: "177 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default DiningCarousel;
