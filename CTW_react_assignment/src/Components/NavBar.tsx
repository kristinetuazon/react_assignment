import { type ReactElement } from "react";
import cutlery from "../assets/cutlery1.svg";

const NavBar = (): ReactElement => {
  return (
    <a href="/" className="absolute z-50 flex p-10 bg-transparent">
      <img
        src={cutlery}
        alt="logo"
        className="w-10 filter invert rounded-full mr-5"
      />
      <p className="font-title text-4xl text-charcoal">EAT</p>
      <span className="text-4xl text-mustard font-title">ERY</span>
    </a>
  );
};

export default NavBar;
