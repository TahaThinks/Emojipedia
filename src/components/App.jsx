import React from "react";

//Import Card, Heading Component
import Card from "./Card";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading />

      <dl className="dictionary">
        <Card />
      </dl>
    </div>
  );
}

export default App;
