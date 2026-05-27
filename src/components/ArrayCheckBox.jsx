import { useField } from "formik"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";


const ArrayCheckBox = ({ children, icon: Icon, showError, ...props }) => {
    const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <div className=" flex flex-col justify-center">

                <div onClick={() => {
                    field.onChange({
                        target: {
                            name: field.name,
                            value: props.value,
                            type: 'checkbox',
                            checked: !field.checked
                        }
                    });
                    setTimeout(() => helpers.setTouched(true), 0);
                }}
                    onBlur={field.onBlur}
                    name={field.name}
                    className={`flex flex-col p-2 cursor-pointer items-center border rounded-lg border-amber-950 
                            ${field.checked ?
                            "bg-gray-400"
                            : "bg-gray-300"}`}
                >
                    {Icon && <Icon className="text-2xl mb-1" />}
                    <span className="text-xs font-medium">{children}</span>
                </div>

                <div className="justify-center">

                    {
                        showError && meta.touched && meta.error ?
                            (<div className="error text-sm items-center justify-center text-red-500">{meta.error}</div>)
                            : null
                    }
                </div>

            </div>
        </>
    );
}
export default ArrayCheckBox;