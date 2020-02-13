import React from "react";
import "./HeaderAction.css";

interface Props {
  icon: string;
  class: string;
  alt: string;
  tooltip: string;
  onClick: any;
}

export type HeaderAction = {
  icon: string;
  class: string;
  alt: string;
  tooltip: string;
  onClick: any;
};

export const HeaderAction = (props: Props) => {
  return (
    <>
      <button
        className={`${props.class} headerAction`}
        onClick={props.onClick}
        title={props.tooltip}
      >
        <img src={props.icon} alt={props.alt} />
      </button>
    </>
  );
};
