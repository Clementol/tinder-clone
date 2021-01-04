import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";

import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lighting">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
