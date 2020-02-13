import React from "react";
import { action } from "@storybook/addon-actions";
import { Toggle } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle
};

export const Test = () => (
  <Toggle
    class={"regular"}
    ariaLabel={"Example toggle switch"}
    label={"Simple toggle"}
    dataName={"example-toggle"}
    checked={false}
    offOnNames={["off", "on"]}
    onToggleChange={() => {
      console.log("switch");
    }}
  />
);

export const NoLabel = () => (
  <Toggle
    class={"regular"}
    ariaLabel={"Example toggle switch"}
    dataName={"example-toggle"}
    checked={true}
    offOnNames={["worse", "better"]}
    onToggleChange={() => {}}
  />
);
