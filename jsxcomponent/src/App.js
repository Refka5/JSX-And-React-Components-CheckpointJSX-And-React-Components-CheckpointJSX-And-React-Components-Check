import React from "react";
import "./App.css";
import Photo from "./Component/Profile/Photo";
import { FullName } from "./Component/Profile/FullName";
import { Address } from "./Component/Profile/Address";

function App() {
  return (
    <div>
      <Photo />
      <FullName />
      <Address />
    </div>
  );
}
export default App;
