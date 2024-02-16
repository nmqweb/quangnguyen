import React from "react";
import { BlogBox, BlogStart } from "../AdminClass";

function BlogCard(props) {
  return (
    <BlogBox>
      <img src={props.actor.image} alt="" />
      <h3>{props.actor.name}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sequi
        temporibus impedit corporis vero ab exercitationem dolore voluptatibus,
        nisi non.
      </p>
      <BlogStart>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa fa-star"></i>
      </BlogStart>
    </BlogBox>
  );
}

export default BlogCard;
