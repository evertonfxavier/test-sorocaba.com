import React from "react";

import GlobalStyle from "../../utils/styles/global"

const Layout = ({ children }) => {
 return (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
 )
}

export default Layout;