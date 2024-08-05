import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import _ from "lodash";
import { DatePickerStyle } from "./label-datepicker-style";

interface LabelDatepickerProps {
  label: string;
  isRequired?: boolean;
}

export default function LabelDatepicker(props: LabelDatepickerProps) {
  const { label, isRequired } = props;

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
      <DatePickerStyle
        format="DD/MM/YYYY"
        openTo="year"
        views={["year", "month", "day"]}
        slotProps={{
          field: {
            id: slug,
          },
        }}
      ></DatePickerStyle>
    </FormControl>
  );
}
