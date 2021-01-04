import React from "react";

import { MenuWrapper, TitleMenu, LogoWrapper } from "./styles";

import Logo from "@images/logo.png";

const Menu = () => {
  return (
    <MenuWrapper>
      <LogoWrapper src={Logo} alt="logo" />
      <TitleMenu>SUPERGIANTGAMES</TitleMenu>
    </MenuWrapper>
  );
};

export default Menu;
