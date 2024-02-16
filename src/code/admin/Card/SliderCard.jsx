import React from "react";
import * as Class from "../AdminClass.jsx";


function SliderCard(props) {
  return (
    <div style={{display: `${props}`}}>
      <Class.Slide>
        <Class.SlideContent>
          <span>{props.list.title}</span>
          <h3>{props.list.name}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit Sunt nam
            adipisci ipsa officiis Amet pariatur eaque soluta sit iure neque
            voluptate.
          </p>
          <a href="#" >
            add to card
          </a>
        </Class.SlideContent>
        <Class.Image>
          <img src={props.list.image} />
        </Class.Image>
      </Class.Slide>
    </div>
  );
}

export default SliderCard;
