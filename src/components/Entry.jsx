// Import the React Module to allow JSX manipulation
import React from "react";

function Entry(emojiterm) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emojiterm.emoji}
        </span>
        <span>{emojiterm.name}</span>
      </dt>
      <dd>{emojiterm.description}</dd>
    </div>
  );
}

//Export the Card Component to be used by the App Component
export default Entry;
