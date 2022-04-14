//Import React Module for JSX Manipulation
import React from "react";

//Import Card, Heading Component
import Entry from "./Entry";
import Heading from "./Heading";

//Import Emojipedia Objects
import emojipedia from "../emojipedia";

function CreateEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
