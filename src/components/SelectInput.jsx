import { useField } from "formik"
import { Label } from "@/components/ui/label";
// import { Select } from "@/components/ui/select";

const SelectInput = ({ children, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}> {label} </Label>
            <select className=" mt-2 h-9 w-full min-w-0 rounded-md border border-input 
            bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] 
            outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent
             file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
             focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 
             disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
             aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 
             md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50
              dark:aria-invalid:ring-destructive/40"
                {...field} {...props}> {children} </select>
            {meta.touched && meta.error ?
                (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                : null}
        </>
    )
}
export default SelectInput;