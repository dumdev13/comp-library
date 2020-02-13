import React from "react";
import { action } from "@storybook/addon-actions";
import { HeaderAction } from "./HeaderAction";
import userSvg from "./user.svg";

export default {
  title: "Header Actions",
  component: HeaderAction
};

export const Test = () => (
  <HeaderAction
    icon={userSvg}
    alt={"Login"}
    tooltip={"Login here!"}
    onClick={() => {
      alert("Login action called");
    }}
    class={"login"}
  />
);
