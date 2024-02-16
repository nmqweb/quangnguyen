import React, { useState } from "react";
import RegisterIcon from "./RegisterIcon";
import { FormContainer } from "./RegisterClass.jsx";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const icon = [
    <i class="fa-brands fa-google-plus-g"></i>,
    <i class="fa-brands fa-facebook-f"></i>,
    <i class="fa-brands fa-linkedin-in"></i>,
  ];

  const handle = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      alert("Please complete your registration");
    } else {
      const userSignUp = {
        name: name,
        email: email,
        password: password,
      };
      async function postData(url = "", data = "") {
        const option = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
        const request = await fetch(url, option);
        return request.json();
      }
      const rest = postData(
        "https://65bcaa3bb51f9b29e931fc70.mockapi.io/api/user/user",
        userSignUp
      );
      rest.then((data) => {
        localStorage.setItem("userSignUp", JSON.stringify(data));
      });
      alert("Register successful");
      window.location.href = "login";
    }
  };
  return (
    <FormContainer>
      <form>
        <h1>Create Account</h1>
        <RegisterIcon icon = {icon} />
        <span>or use your email for registration</span>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <p>
          ALREADY HAVE AN ACCOUNT ? <a href="./login">lOGIN NOW</a>
        </p>
        <button onClick={(e) => handle(e)}>Register</button>
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
