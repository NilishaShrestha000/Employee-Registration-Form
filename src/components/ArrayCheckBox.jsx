import { useField } from "formik"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";


const ArrayCheckBox = ({ children, icon: Icon, showError, ...props }) => {
    const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <div className="grid p-5 w-40">

                <div
                    checked={field.checked}
                    onCheckedChange={(checked) => {
                        field.onChange({
                            target: {
                                name: field.name,
                                value: props.value,
                                type: 'checkbox',
                                checked: checked
                            }
                        });
                        setTimeout(() => helpers.setTouched(true), 0);
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    className={`flex flex-col cursor-pointer items-center border rounded-lg border-amber-950 
                            ${field.checked ?
                            "bg - amber - 200"
                            : "bg - amber - 500"}`}
                >
                    {Icon && <Icon className="text-2xl mb-1" />}
                    <span className="text-xs font-medium">{children}</span>
                </div>
                {
                    showError && meta.touched && meta.error ?
                        (<div className="error text-sm text-red-500">{meta.error}</div>)
                        : null
                }

            </div>
        </>
    );
}
export default ArrayCheckBox;