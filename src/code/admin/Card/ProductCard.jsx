import React from "react";

import * as Class from "../AdminClass";

function ProductCard(props) {
  return (
    <Class.BoxProduct>
      <Class.BoxIcon>
        <a href="#" className="fa fa-heart"></a>
        <a href="#" className="fa fa-share"></a>
        <a href="#" className="fa fa-eye"></a>
      </Class.BoxIcon>
      <Class.BoxContent>
        <img src={props.product.image} alt="" />
        <h3>{props.product.name}</h3>
        <Class.ProductPrice>
        {props.product.price} <span>{props.product.discount}</span>
        </Class.ProductPrice>
        <Class.Start>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </Class.Start>
      </Class.BoxContent>
    </Class.BoxProduct>
  );
}

export default ProductCard;
