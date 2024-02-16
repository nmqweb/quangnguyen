import React, { useState } from "react";
import * as Class from "./AdminClass";

function News() {
  const [newEmail, setNewEmail] = useState("");

  return (
    <Class.New>
      <Class.NewContent>
        <h3>monthly news letter</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed
          itaque ducimus maxime facere nihil expedita non sunt? Nostrum,
          voluptatem?
        </p>
        <form action="">
          <Class.EmailNews
            type="email"
            placeholder="please enter your email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <Class.EmailButton
            type="submit"
            value="save"
            style={{ borderRadius: "none" }}
          />
        </form>
      </Class.NewContent>
    </Class.New>
  );
}

export default News;
