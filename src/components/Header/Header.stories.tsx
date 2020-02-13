import React from "react";
import { action } from "@storybook/addon-actions";
import { Header } from "./Header";
import { Link } from "../Link/Link";
import { HeaderAction } from "../HeaderAction/HeaderAction";
import logoSvg from "./logo.svg";
import userSvg from "./user.svg";
import hamburgerSvg from "./hamburger.svg";
import searchSvg from "./search.svg";

export default {
  title: "Header",
  component: Header
};

const LinksObject: Link[] = [
  { class: "nav-link", href: "/home", children: "Home" },
  { class: "nav-link", href: "/products", children: "Products" },
  { class: "nav-link", href: "/about", children: "About Us" }
];

const ActionsObject: HeaderAction[] = [
  {
    class: "search",
    alt: "search",
    tooltip: "Search",
    onClick: "",
    icon: searchSvg
  },
  {
    icon: userSvg,
    class: "user",
    alt: "user",
    tooltip: "User",
    onClick: ""
  },
  {
    icon: hamburgerSvg,
    class: "hamburger",
    alt: "More",
    tooltip: "More Actions",
    onClick: ""
  }
];

export const Test = () => (
  <Header
    logo={logoSvg}
    homeUrl={"/home"}
    navLinks={LinksObject}
    actions={ActionsObject}
  />
);
