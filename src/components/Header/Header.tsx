import React from "react";
import { Link } from "../Link/Link";
import { HeaderAction } from "../HeaderAction/HeaderAction";
import "./Header.css";

interface Props {
  logo: string;
  homeUrl: string;
  navLinks: Link[];
  actions: HeaderAction[];
}

export const Header = (props: Props) => {
  const navItems = props.navLinks.map(navItem => {
    return (
      <Link
        class={navItem.class}
        href={navItem.href}
        children={navItem.children}
      />
    );
  });

  const actionItems = props.actions.map(actionItem => {
    return (
      <HeaderAction
        icon={actionItem.icon}
        class={actionItem.class}
        alt={actionItem.alt}
        tooltip={actionItem.tooltip}
        onClick={actionItem.onClick}
      />
    );
  });
  return (
    <>
      <div className={"header"}>
        <div className={"link-block"}>
          <a href={props.homeUrl}>
            <img src={props.logo} alt={""} className={"logo"} />
          </a>
          {navItems}
        </div>
        <div className={"action-block"}>{actionItems}</div>
      </div>
    </>
  );
};
