import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { palette } from "../palette";

const StyledGlobal = styled.div`
  color: ${palette.foreground};
  background-color: ${palette.background};
  font-family: "Quicksand", sans-serif;
`;

export const Global: FC<{ children: ReactNode }> = ({ children }) => (
  <StyledGlobal>{children}</StyledGlobal>
);
