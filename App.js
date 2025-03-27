import React from "react";
import ReactDOM from "react-dom/client"; 

const Heading = () => (
    <div>
      <h1>heading 1 functional component</h1>
      <h2>heading 2 functional component</h2>
    </div>
  ); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);