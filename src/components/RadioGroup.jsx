import { useField } from "formik"


const RadioGroup = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'radio' });
    return (
        <>
            <label className="radio-label">
                <input type="radio" className="radio-input w-4 h-4 mt-2 accent-primary cursor-pointer"
                    {...props} {...field} />{children}
            </label>

        </>
    )
}
export default RadioGroup;