import { useField } from "formik"
import { Label } from "@/components/ui/label"

const UploadFile = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const handleChange = (e) => {
        const file = e.target.files[0]
        helpers.setValue(file)
        helpers.setTouched(true)
    };

    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}  </Label>

            <label htmlFor={props.id || props.name}>
                <div className="mt-2">
                    <span className="px-4 py-2 bg-white border border-gray-400 rounded-md text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Choose File
                    </span>
                    <span className="text-sm text-gray-500">
                        {field.value ? field.value.name : "No file chosen"}
                    </span>
                </div>
            </label>
            <input
                id={props.id || props.name}
                type="file"
                accept="image/jpg, image/png"
                onChange={handleChange}
                className="hidden"
            />

            {/*Preview*/}
            {field.value && (
                <img
                    src={URL.createObjectURL(field.value)}
                    alt="preview"
                    className="mt-2 w-24 h-24 object-cover rounded-md border border-gray-300"
                />
            )}

            {meta.touched && meta.error ?
                (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                : null}
        </>
    )
}
export default UploadFile;