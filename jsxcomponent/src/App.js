import React from "react";
import "./App.css";
import Photo from "./Component/Profile/Photo";
import { FullName } from "./Component/Profile/FullName";
import { Address } from "./Component/Profile/Address";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <Photo />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">Technology</span>
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}
export default App;
