import { css, styled } from "styled-components";

export const AdminClass = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  * {
    font-family: "Roboto", sans-serif;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s linear;
  }
  html {
    font-size: 60%;
    scroll-padding-top: 6rem;
    scroll-behavior: smooth;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  section {
    padding: 2rem 9%;
  }
`;
// Header Style
export const HeaderClass = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  & a {
    font-size: 2rem;
    color: #000;
    font-weight: 500;
  }
  & nav {
    @media (max-width: 920px) {
      position: absolute;
      top: 100%;
      left: ${props => props.display};
      width: 100%;
      background: #eee;
      border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
  }
  & nav a {
    font-size: 1.5rem;
    color: #000;
    margin: 0 2rem;
    &:hover {
      color: #1f409a;
    }
    @media (max-width: 920px) {
      font-size: 2rem;
      background: #fff;
      border: 0.1rem solid #000;
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 1rem;
      display: block;
      text-align: center;
    }
  }
`;
export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  & p {
    font-size: 1.5rem;
    color: #000;
    margin: 0 2rem;
    @media (max-width: 920px) {
      display: none;
    }
  }
  & button {
    border-radius: 20px;
    border: 1px solid #1f409a;
    background-color: #1f409a;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:hover {
      background-color: transparent;
      border-color: #1f409a;
      color: #000;
    }
    @media (max-width: 920px) {
      padding: 8px 30px;
    }
  }
`;
export const MenuBar = styled.div`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: 0.1rem solid #000;
  color: #000;
  border-radius: 0.3rem;
  cursor: pointer;
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;
// Slider Style
export const SliderClass = styled.section`
  padding: 0;
  position: relative;
`;
export const Slide = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 9%;
  padding-top: 9rem;
`;
export const SlideContent = styled.div`
  flex: 1 1 40rem;
  animation: slideContent 0.3s linear 1s backwards;
  @keyframes slideContent {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  }
  & span,
  h3,
  p,
  a {
    margin: 0;
  }
  & span {
    font-size: 2rem;
    color: #1f409a;
  }
  & h3 {
    font-size: 4rem;
    color: #000;
  }
  & p {
    font-size: 1.7rem;
    color: #666;
    padding: 0.5rem 0;
  }
  & a {
    display: inline-block;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 0.2rem solid #000;
    font-weight: bolder;
    font-size: 1.7rem;
    color: #000;
    cursor: pointer;
    background: #fff;
    padding: 0.8rem 3rem;
  }
`;
export const Button = styled.a``;
export const Image = styled.div`
  flex: 1 1 50rem;
  padding-bottom: 15rem;
  position: relative;
  z-index: 0;
  & img {
    width: 100%;
    transform: rotate(-10deg);
    animation: shoe 0.3s linear;
    @keyframes shoe {
      0% {
        transform: rotate(0deg) scale(0.5);
      }
    }
  }
`;
export const Change = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  height: 5rem;
  width: 5rem;
  line-height: 5.5rem;
  font-size: 2rem;
  color: #000;
  border: 0.2rem solid #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: orangered;
  }
`;
// Product Style

export const HeadingProduct = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 10px;
  font-weight: bolder;
  text-transform: uppercase;
  & span {
    color: #1f409a;
  }
`;
export const BoxContainerProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
export const BoxProduct = styled.div`
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  flex: 1 1 30rem;
  &:hover div {
    left: 1rem;
  }
`;
export const BoxContent = styled.div`
  padding: 1.5rem;
  & img {
    height: 20rem;
    transform: rotate(-35deg);
    margin: 8rem 2rem;
    &:hover {
      transform: rotate(-35deg) scale(1.2);
    }
  }
  & h3 {
    color: #000;
    font-size: 2.5rem;
  }
`;
export const BoxIcon = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0.5rem;
  left: -10rem;
  & a {
    height: 4.5rem;
    width: 5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    color: #000;
    border: 0.1rem solid #000;
    border-radius: 0.5rem;
    background: #fff;
    margin-top: 0.5rem;
    &:hover {
      color: orangered;
      color: #fff;
    }
  }
`;
export const ProductPrice = styled.div`
  color: #000;
  font-size: 2.5rem;
  font-weight: bolder;
  padding: 1rem 0;
  & span {
    color: #000;
    font-size: 1.5rem;
    text-decoration: line-through;
  }
`;
export const Start = styled.div`
  padding-bottom: 1rem;
  & i {
    font-size: 1.7rem;
    color: #1f409a;
  }
`;

// Blog Style

export const BlogBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
export const BlogBox = styled.div`
  flex: 1 1 30rem;
  text-align: center;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background: #f9f9f9;
  padding: 2rem;
  & img {
    border-radius: 50%;
    object-fit: cover;
    height: 15rem;
    width: 15rem;
    margin: 1rem 0;
    border: 4px solid #ddd;
    &:hover {
      transform: scale(1.2);
    }
  }
  & h3 {
    font-size: 2.5rem;
    color: #000;
  }
  & p {
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
  }
`;
export const BlogStart = styled.div`
  & i {
    color: #1f409a;
    font-size: 2rem;
  }
`;
// News Style

export const New = styled.section`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const NewContent = styled.div`
  text-align: center;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background: #f9f9f9;
  padding: 2rem;
  & h3 {
    font-size: 2.5rem;
    color: #000;
  }
  & p {
    font-size: 1.5rem;
    color: #666;
    margin: 1rem auto;
    max-width: 60rem;
  }
  & form {
    margin: 1rem auto;
    max-width: 50rem;
    display: flex;
  }
`;
export const EmailNews = styled.input`
  width: 100%;
  font-size: 1.7rem;
  text-transform: none;
  color: #333;
  padding: 1rem;
  border: 0.2rem solid #000;
  border-right: none;
  margin-top: 1rem;
`;
export const EmailButton = styled.input`
  display: inline-block;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #000;
  font-weight: bolder;
  font-size: 1.7rem;
  color: #000;
  cursor: pointer;
  background: #fff;
  padding: 0.8rem 3rem;
`;
