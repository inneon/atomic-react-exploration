import { FC, ReactNode, HTMLAttributes } from "react";
import styled from "styled-components";
import { palette } from "../palette";

export interface CardProps {
  children: ReactNode;
  size: "S" | "M";
}

const borderRadius = 2;
const padding = 30;
const widthS = 300;
const widthM = 450;

const StyledCard = styled.div<
  HTMLAttributes<HTMLDivElement> & { size: "S" | "M" }
>`
  border-radius: 10px;
  background: ${palette.background};
  margin: ${borderRadius}px;
  padding: ${padding}px;

  width: ${(props) => (props.size === "S" ? widthS : widthM) - 2 * padding}px;
`;
const Border = styled.div<HTMLAttributes<HTMLDivElement> & { size: "S" | "M" }>`
  border-radius: ${10 + 2 * borderRadius}px;
  padding: ${2 * borderRadius}px;
  width: ${(props) =>
    (props.size === "S" ? widthS : widthM) + 2 * borderRadius}px;

  background: linear-gradient(
    var(--angle),
    ${palette.background},
    ${palette.highlight2},
    ${palette.highlight1},
    ${palette.background}
  );

  animation: none;
  :hover {
    --angle: 135deg;
    animation: spin 20s linear infinite;
  }

  --angle: 135deg;
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes spin {
    from {
      --angle: 135deg;
    }
    to {
      --angle: calc(135deg + 360deg);
    }
  }
`;

export const Card: FC<CardProps> = ({ children, size }) => {
  return (
    <Border size={size}>
      <StyledCard size={size}>{children}</StyledCard>
    </Border>
  );
};
