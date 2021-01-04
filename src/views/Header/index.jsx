import React from "react";

import Menu from "@components/Menu";
import CentralCard from "./CentralCard";

import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Menu />
      <CentralCard />
    </HeaderWrapper>
  );
};

export default Header;