import { useField } from "formik"


const RadioGroup = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'radio' });
    return (
        <>
            <div>
                <label className="flex  gap-2 cursor-pointer">
                    <input type="radio" className="radio-input w-4 h-4 mt-2  cursor-pointer"
                        {...props} {...field} />{children}
                </label>
            </div>        </>
    )
}
export default RadioGroup;