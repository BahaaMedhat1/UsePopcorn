import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./App-v1";
import StarRating from "./StarRating";
// import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Test = function () {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} color="blue" />
      <p>The movie Rating {movieRating}</p>
    </div>
  );
};
root.render(
  <React.StrictMode>
    {/* <StarRating />
    <StarRating
      maxRating={10}
      size={"bbbb"}
      color="red"
      messages={["Terrible", "Medium", "Okay", "Good", "Amazing"]}
      defaultRating={10}
    />
    <Test /> */}
    <App />
  </React.StrictMode>,
);
