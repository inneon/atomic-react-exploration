import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import styled from "styled-components";
import { palette } from "../palette";

type TextInputType = "text" | "email" | "password" | "search" | "tel" | "url";

export interface TextInputProps {
  label: string;
  type?: TextInputType;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  autoComplete?: string;
  onChange?: (value: string) => void;
}

const width = 345;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
  margin-bottom: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledBorder = styled.div`
  box-sizing: border-box;

  width: ${width + 2}px;

  border-radius: 11px;
  background: ${palette.foregroundMuted};
  :focus-within {
    background: linear-gradient(
      to right,
      ${palette.highlight1},
      ${palette.highlight2}
    );
  }

  padding: 1px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  background: ${(props) =>
    props.disabled ? palette.backgroundHighlight : palette.background};
  color: ${palette.foreground};

  box-sizing: border-box;

  width: ${width}px;
  padding: 20px;

  :focus-visible {
    filter: drop-shadow(0px 0px 10px ${palette.highlight2Shadow});
    outline: 0;
  }
  border: 0;
  border-radius: 10px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const TextInput: FC<TextInputProps> = ({
  autoComplete,
  defaultValue,
  disabled,
  id,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledBorder>
        <StyledInput
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </StyledBorder>
    </InputContainer>
  );
};
