<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
=======
import React from "react";
import ReactDOM from "react-dom";
>>>>>>> 345c2af... [Add] 헤더, 필터 nav ui 제작
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
<<<<<<< HEAD
  document.getElementById('root')
);
=======
  document.getElementById("root")
);
>>>>>>> 345c2af... [Add] 헤더, 필터 nav ui 제작
