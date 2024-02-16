import React from "react";
import { IconRegister } from "./RegisterClass.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegisterIcon(props) {
  return (
    <IconRegister>
      {props.icon.map(item => 
        <a href="#">{item}</a>
      )}
    </IconRegister>
  );
}

export default RegisterIcon;
