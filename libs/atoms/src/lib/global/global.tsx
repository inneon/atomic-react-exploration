import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/600.css";
import React, { FC, Fragment, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import { palette } from "../palette";

const StyledGlobal = createGlobalStyle`
  html,
  body {
    color: ${palette.foreground};
    background-color: ${palette.background};
    font-family: "Quicksand", sans-serif;
  }
`;

export const Global: FC<{ children: ReactNode }> = ({ children }) => (
  <Fragment>
    <StyledGlobal />
    {children}
  </Fragment>
);
