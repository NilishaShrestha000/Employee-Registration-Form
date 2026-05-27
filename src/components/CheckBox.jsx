
import { useField } from "formik"
import { Checkbox } from "@/components/ui/checkbox";

const CheckBox = ({ children, ...props }) => {
    const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });

    return (
        <div>
            <label className="flex gap-2">
                <Checkbox
                    checked={field.checked}
                    onCheckedChange={(checked) => {
                        if (props.value !== undefined) {
                            field.onChange({
                                target: {
                                    name: field.name,
                                    value: props.value,
                                    checked: checked,
                                    type: "checkbox"
                                }
                            });
                        } else { helpers.setValue(checked); }
                        setTimeout(() => helpers.setTouched(true), 0);
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    className="w-4 h-4 mt-2 flex accent-primary cursor-pointer"
                />
                {children}
            </label>
            {meta.touched && meta.error ?
                (<div className="error text-sm text-red-500">{meta.error}</div>)
                : null}
        </div>
    );
}

export default CheckBox;