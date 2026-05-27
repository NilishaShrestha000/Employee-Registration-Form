import { useField } from "formik";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const FormInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props, type);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    return (
        <>
            <div className="mb-3 mt-2">
                <Label htmlFor={props.id || props.name}>{label}</Label>
                <div className="relative">
                    <Input className=" text-black mt-2"  {...field} {...props}
                        type={isPassword ? (showPassword ? "text" : "password") : props.type} />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-4 hover:text-gray-700">
                            {showPassword
                                ? <IoIosEyeOff className="text-lg" />
                                : <IoIosEye className="text-lg" />}
                        </button>
                    )}
                </div>

                {meta.touched && meta.error ?
                    (<div className="error text-red-500 text-sm mt-1">{meta.error}</div>)
                    : null}
            </div>
        </>

    );
}
export default FormInput;