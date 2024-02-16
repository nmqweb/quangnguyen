import React, { useState } from "react";

import SliderCard from "./Card/SliderCard.jsx";
import { SliderClass, Change, Button } from "./AdminClass.jsx";

import imageOne from "./img/slide/1.png";
import imageTwo from "./img/slide/2.png";
import imageThree from "./img/slide/3.png";
import imageFour from "./img/slide/4.png";

function Product(title, name, image) {
  this.title = title;
  this.name = name;
  this.image = image;
}
const productOne = new Product(
  "Nike Sport Shoes",
  "Nike Metcon Shoes",
  imageOne
);
const productTwo = new Product(
  "Nike Sport Shoes",
  "Nike Metcon Shoes",
  imageTwo
);
const productThree = new Product(
  "Nike Sport Shoes",
  "Nike Metcon Shoes",
  imageThree
);
const productFour = new Product(
  "Nike Sport Shoes",
  "Nike Metcon Shoes",
  imageFour
);

const listProduct = [productOne, productTwo, productThree, productFour];

function Slider(props) {
  const [index, setIndex] = useState(0);
  const list = listProduct.map((item) => <SliderCard list={item} />);
  let slider = list[index];
  
  const prev = (e) => {
    setIndex((index - 1 + list.length) % list.length);
  };
  const next = (e) => {
    setIndex((index + 1) % list.length);
  };
  return (
    <SliderClass>
      {(slider = list[index])}
      <Change
        style={{ left: "3rem" }}
        id="prev"
        className="fa fa-angle-left"
        onClick={(e) => prev(e)}
      ></Change>
      <Change
        style={{ right: "3rem" }}
        id="next"
        className="fa fa-angle-right"
        onClick={(e) => next(e)}
      ></Change>
    </SliderClass>
  );
}

export default Slider;
