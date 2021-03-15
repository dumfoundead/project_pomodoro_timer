import React from "react";
import { minutesToDuration, secondsToDuration } from "../../utils/duration";

export default function SetTimer(props) {
  //// Handling props
  const decreaseTitle = `decrease-${props.id}`;
  const increaseTitle = `increase-${props.id}`;
  const durationTitle = `duration-${props.id}`;

  //// Build the structure and return!
  return (
    <div className="input-group input-group-lg my-4">
      <span className="input-group-text" data-testid={durationTitle}>
        {props.title}: {minutesToDuration(props.count)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          data-testid={decreaseTitle}
          onClick={props.handleDecrease}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          data-testid={increaseTitle}
          onClick={props.handleIncrease}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}