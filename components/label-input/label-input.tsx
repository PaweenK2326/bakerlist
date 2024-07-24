import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import _ from "lodash";
import { InputBaseStyle } from "./label-input-style";

interface InputProps {
  label: string;
  isRequired: boolean;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
}

export default function LabelInput(props: InputProps) {
  const { label, isRequired, placeholder, type } = props;

  const slug: string = _.kebabCase(label);

  return (
    <FormControl className="mb-3" fullWidth variant="standard" required={isRequired}>
      <InputLabel shrink htmlFor={slug}>
        {label}
      </InputLabel>
      <InputBaseStyle
        fullWidth
        id={slug}
        type={type ?? "text"}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
