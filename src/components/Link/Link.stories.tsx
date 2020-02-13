import React from "react";
import { action } from "@storybook/addon-actions";
import { Link } from "./Link";

export default {
  title: "Link",
  component: Link
};

export const Test = () => (
  <Link class={"nav-link"} href={"/home"} children={"Home"} />
);

export const Menu = () => (
  <>
    <Link class={"nav-link"} href={"/home"} children={"Home"} />
    <Link class={"nav-link"} href={"/products"} children={"Products"} />
    <Link class={"nav-link"} href={"/about-us"} children={"About Us"} />
  </>
);

export const CopyLink = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
    consectetur nibh nec finibus. In eu lorem sapien. Cras porta lectus at
    turpis malesuada luctus. Vestibulum vitae posuere ligula. Vivamus iaculis
    porta libero, vitae{" "}
    <Link class={"link"} href={"/rutrum"} children={"rutrum"} /> est dictum a.
    Integer nec ullamcorper nisi. Pellentesque lacus turpis, faucibus id
    eleifend eget, iaculis ut odio. Maecenas dapibus sem dolor, vitae faucibus
    odio rhoncus non. Morbi ut dolor rutrum, facilisis urna non, pretium dui.
    Quisque vulputate vulputate felis, quis congue enim tempor vel. Nunc
    bibendum fermentum auctor. Sed placerat facilisis neque ut dignissim.
    Suspendisse posuere pulvinar magna, in lobortis lorem vulputate id. Etiam
    condimentum eu nisl vel egestas.
  </p>
);
