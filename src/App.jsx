import React from "react";
import Register from "./code/register/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./code/login/Login.jsx";
import Admin from "./code/admin/Admin.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
