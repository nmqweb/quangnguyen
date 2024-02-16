import React from "react";
import BlogCard from "./Card/BlogCard";
import { BlogBoxContainer, HeadingProduct } from "./AdminClass";
import actor1 from "./img/team/1.png";
import actor2 from "./img/team/2.png";
import actor3 from "./img/team/3.png";

function Actors(name, image) {
  this.name = name;
  this.image = image;
}

const actorOne = new Actors("", actor1);
const actorTwo = new Actors("", actor2);
const actorThree = new Actors("", actor3);
const actorList = [actorOne, actorTwo, actorThree];

const blogCard = actorList.map((item) => <BlogCard actor={item} />);

function Blog() {
  return (
    <section className="blog" id="blog">
      <HeadingProduct>
        Team <span>Weblog</span>
      </HeadingProduct>
      <BlogBoxContainer>{blogCard}</BlogBoxContainer>
    </section>
  );
}

export default Blog;
