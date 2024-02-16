import React from "react";
import ProductCard from "./Card/ProductCard";
import * as Class from "./AdminClass";
import ProductOne from "../admin/img/product4/1.jpg";
import ProductTwo from "../admin/img/product4/2.jpg";
import ProductThree from "../admin/img/product4/3.jpg";
import ProductFour from "../admin/img/product4/4.jpg";
import ProductFive from "../admin/img/product4/5.jpg";
import ProductSix from "../admin/img/product4/6.jpg";

function ProductManager(name, price, discount, image) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.image = image;
}
const productOne = new ProductManager("", "", "", ProductOne);
const productTwo = new ProductManager("", "", "", ProductTwo);
const productThree = new ProductManager("", "", "", ProductThree);
const productFour = new ProductManager("", "", "", ProductFour);
const productFive = new ProductManager("", "", "", ProductFive);
const productSix = new ProductManager("", "", "", ProductSix);

const list = [
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
];

const product = list.map(item => <ProductCard product={item} />);
function Product() {
  return (
    <section>
      <Class.HeadingProduct>
        latest <span>Products</span>
      </Class.HeadingProduct>
      <Class.BoxContainerProduct>
        {product}
      </Class.BoxContainerProduct>
    </section>
  );
}

export default Product;
