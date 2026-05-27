import { useField } from "formik"
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

const Education = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input className="text-blacks mt-2 " {...props} {...field} />
            {
                meta.touched && meta.error ?
                    (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                    : null
            }
        </>
    )
}
export default Education;