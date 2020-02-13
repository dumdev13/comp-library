import React, { useState } from "react";
import "./Toggle.css";

interface Props {
  checked: boolean;
  ariaLabel: string;
  label?: string;
  dataName: string;
  class: string;
  offOnNames: string[];
  onToggleChange: any;
}

export type Toggle = {
  checked: boolean;
  ariaLabel: string;
  label?: string;
  dataName: string;
  class: string;
  offOnNames: string[];
  onToggleChange: any;
};

export const Toggle = (props: Props) => {
  const [checked, setChecked] = useState(props.checked);
  const [toggleState, setToggleState] = useState(
    props.checked ? props.offOnNames[1] : props.offOnNames[0]
  );

  function handleChange(e) {
    setChecked(e.target.value);
    if (e.target.checked === true) {
      setToggleState(props.offOnNames[1]);
    } else {
      setToggleState(props.offOnNames[0]);
    }
    if (props.onToggleChange) props.onToggleChange(checked);
  }

  return (
    <>
      <div className={"a2-form-item"}>
        <input
          className={`a2-toggle-input ${props.class}`}
          id={props.dataName}
          type={"checkbox"}
          defaultChecked={props.checked}
          onChange={handleChange}
        />
        <label
          className={"a2-toggle-label"}
          htmlFor={props.dataName}
          aria-label={props.ariaLabel}
        >
          {props.label ? props.label : ""}
          <span className={"a2-toggle-switch"}>
            <span className="a2-toggle-text" aria-hidden="true">
              {toggleState}
            </span>
          </span>
        </label>
      </div>
    </>
  );
};
