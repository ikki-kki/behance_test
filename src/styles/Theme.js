import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBlue: #0057FF;
    mainBlack: #191919;
    mainGray: #696969;
    iconGray: #959595;
    tagGray: #CCCCCC;
    borderGray: #E8E8E8;
    background: #F9F9F9;
    loginBlack: #323232;
    loginDarkGray: #505050;
    loginMidGray: #747474;
    loginLightGray: #BCBCBC;
    loginBlue: #1473E6;
  },
  fonts: [ "Noto Sans KR", "sans-serif", "Roboto"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
