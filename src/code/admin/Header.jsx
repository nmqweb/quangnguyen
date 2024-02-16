import React, { useState } from "react";
import { HeaderClass, UserHeader, MenuBar } from "./AdminClass";

function Header(props) {
  function logout(e) {
    localStorage.removeItem("userSignUp");
    window.location.href = "register";
  }
  const [display, setDisplay] = useState("-120%");
  function activeMenuBar(e) {
    e.preventDefault();
    if (display == "-120%") {
      return setDisplay("0");
    }
    if (display == "0") {
      return setDisplay("-120%");
    }
  }
  return (
    <>
      <title>Document</title>
      <HeaderClass display={display}>
        <MenuBar
          onClick={(e) => activeMenuBar(e)}
          className="fa fa-bars"
        ></MenuBar>
        <a href="#" className="logo">
          CIT EDU SHOP
        </a>
        <nav>
          {props.list.map((item) => {
            return <a href={item.link}>{item.title}</a>;
          })}
        </nav>
        <UserHeader>
          <p></p>
          <button onClick={(e) => logout(e)}>Logout</button>
        </UserHeader>
      </HeaderClass>
    </>
  );
}

export default Header;
