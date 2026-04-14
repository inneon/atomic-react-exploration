import { FC } from "react";
import styled from "styled-components";

export interface H1Props {
  children: string;
  size: "M" | "L";
}

const StyledH1 = styled.h1``;

export const H1: FC<H1Props> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};
