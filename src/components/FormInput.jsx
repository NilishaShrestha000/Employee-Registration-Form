import { useField } from "formik";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-3 mt-2">
                <Label htmlFor={props.id || props.name}>{label}</Label>
                <Input className=" text-black mt-2"  {...field} {...props} />
                {meta.touched && meta.error ?
                    (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                    : null}
            </div>
        </>

    );
}
export default FormInput;