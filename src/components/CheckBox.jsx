import { useField } from "formik"

// Aimport { Checkbox } from "@/components/ui/checkbox";
const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>

            <label className="flex gap-2">
                <input
                    type="checkbox"
                    {...field}
                    {...props}
                    className="w-4 h-4 mt-2 flex accent-primary cursor-pointer"
                />

                {children}
            </label>

        </>
    );
}
export default CheckBox;