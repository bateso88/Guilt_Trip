import React, { Component } from "react";

import BigBallsTom from "../assets/svgs/segments/regular/BigBallsTom";
import Sarah from "../assets/svgs/segments/regular/Sarah";
import YPatrick from "../assets/svgs/segments/regular/YPatrick";
import HiddenSteve from "../assets/svgs/segments/regular/HiddenSteve";
import Patrick from "../assets/svgs/segments/regular/Patrick";
import Steve from "../assets/svgs/segments/regular/Steve";

export const arrayOfClassics = [
  <YPatrick />,
  <BigBallsTom style={[{ transform: [{ scaleX: -1 }] }]} />,
  <Sarah />,
  <HiddenSteve style={[{ transform: [{ scaleX: -1 }] }]} />,
  "Placeholder",
  <Steve style={[{ transform: [{ scaleX: -1 }] }]} />,
  <YPatrick />,
  <Sarah style={[{ transform: [{ scaleX: -1 }] }]} />,
  <Patrick />,
  "Placeholder",
];

export const arrayOfRares = [<HiddenSteve />];
