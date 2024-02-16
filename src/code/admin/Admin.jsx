import React from "react";
import Header from "./Header.jsx";
import Slider from "./Slider";
import Product from "./Product.jsx";
import Blog from "./Blog.jsx";
import News from "./News.jsx";
import Cider from "./Cider.jsx";
import { createGlobalStyle } from "styled-components";

import { AdminClass } from "./AdminClass.jsx";

const GlobalAdminStyle = createGlobalStyle`
  ${AdminClass}
`;

const listHeder = [
  { link: "#home", title: "Home" },
  { link: "#product", title: "Product" },
  { link: "#fearured", title: "Fearured" },
  { link: "#blog", title: "Blog" },
  { link: "#news", title: "News" },
];

function Admin() {
  return (
    <>
      <GlobalAdminStyle></GlobalAdminStyle>
      <div>
        {/* <Header list={listHeder} /> */}
        <Slider />
        {/* <Product />
        <Blog />
        <News />
        <Cider /> */}
      </div>
    </>
  );
}

export default Admin;
