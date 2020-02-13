import React from "react";

interface Props {
  class: string;
  href: string;
  children: any;
}

export type Link = {
  class: string;
  href: string;
  children: any;
};

export const Link = (props: Props) => {
  return (
    <>
      <a className={props.class} href={props.href}>
        {props.children}
      </a>
    </>
  );
};
