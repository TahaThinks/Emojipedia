// Import the React Module to allow JSX manipulation
import React from "react";
import emojipedia from "../emojipedia";

function Card() {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emojipedia[0].emoji}
          </span>
          <span>{emojipedia[0].name}</span>
        </dt>
        <dd>{emojipedia[0].meaning}</dd>
      </div>

      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emojipedia[1].emoji}
          </span>
          <span>{emojipedia[1].name}</span>
        </dt>
        <dd>{emojipedia[1].meaning}</dd>
      </div>

      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emojipedia[2].emoji}
          </span>
          <span>{emojipedia[2].name}</span>
        </dt>
        <dd>{emojipedia[2].meaning}</dd>
      </div>
    </dl>
  );
}

//Export the Card Component to be used by the App Component
export default Card;
