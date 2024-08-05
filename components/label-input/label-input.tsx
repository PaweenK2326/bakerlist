import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import _ from "lodash";
import { InputBaseStyle } from "./label-input-style";
import Select from "@mui/material/Select";

interface InputProps {
  label: string;
  value?: string;
  isRequired?: boolean;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  textAlign?: string;
  isSelect?: boolean;
  children?: React.ReactNode;
}

export default function LabelInput(props: InputProps) {
  const {
    label,
    value,
    isRequired,
    placeholder,
    type,
    textAlign,
    isSelect,
    children,
  } = props;

  const slug: string = _.kebabCase(label);

  return (
    <FormControl
      className="mb-3"
      fullWidth
      variant="standard"
      required={isRequired}
    >
      <InputLabel shrink htmlFor={slug}>
        {label}
      </InputLabel>
      {isSelect ? (
        <Select
          input={<InputBaseStyle />}
          sx={{
            textAlign: textAlign ?? "left",
          }}
          MenuProps={{
            sx: {
              "& .MuiMenuItem-root": {
                justifyContent: "center",
              },
            },
          }}
          inputProps={{
            id: slug,
          }}
        >
          {children}
        </Select>
      ) : (
        <InputBaseStyle
          id={slug}
          value={value}
          type={type ?? "text"}
          placeholder={placeholder}
          sx={{
            textAlign: textAlign ?? "left",
          }}
        />
      )}
    </FormControl>
  );
}
