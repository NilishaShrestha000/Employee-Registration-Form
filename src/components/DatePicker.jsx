import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "@/components/ui/label";

const DatePickerField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const maxAllowedDate = new Date();
    maxAllowedDate.setFullYear(maxAllowedDate.getFullYear() - 18);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <DatePicker selected={field.value ? new Date(field.value) : null}
                maxDate={maxAllowedDate}
                className="mt-2 h-9 w-full min-w-0 rounded-md border border-input bg-transparent
                 px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none
                  file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm 
                  file:font-medium file:text-foreground placeholder:text-muted-foreground 
                  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 
                  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
                  aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 
                  md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 
                  dark:aria-invalid:ring-destructive/40"
                onChange={(date) => {
                    helpers.setValue(date ? date.toISOString().split("T")[0] : "")
                    helpers.setTouched(true);
                }}
                onCalendarClose={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ?
                (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                : null}
        </>
    )
}

export default DatePickerField;