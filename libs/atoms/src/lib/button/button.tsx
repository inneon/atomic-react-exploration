import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";
import { palette } from "../palette";

const StyledButton = styled.button<{ disabled?: boolean }>`
  width: 375px;
  height: 50px;

  background: linear-gradient(
    90deg,
    ${(props) =>
        props.disabled ? palette.highlight1Disabled : palette.highlight1}
      0%,
    ${(props) =>
        props.disabled ? palette.highlight2Disabled : palette.highlight2}
      100%
  );
  border-radius: 10px;
  border: none;
  :hover {
    filter: ${(props) =>
      props.disabled
        ? "none"
        : `drop-shadow(0px 0px 10px ${palette.highlight2Shadow})`};
    outline: 0;
  }

  font-weight: 600;
  color: ${(props) =>
    props.disabled ? palette.foregroundDisabled : palette.foreground};
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
