import React from "react";

import theme from '@utils/styles/theme';
import Layout from "@components/Layout";
import Header from "@views/Header";
import About from "@views/About";
import Form from "@views/Form";
import BottonUp from "@components/BottonUp";

import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <About/> 
        <Form />
        <BottonUp />
      </Layout>
    </ThemeProvider>
  )
};

export default App;
