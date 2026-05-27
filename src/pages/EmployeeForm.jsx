import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import FormInput from "../components/FormInput";
import CheckBox from "../components/CheckBox";
import ArrayCheckBox from "@/components/ArrayCheckBox";
import SelectInput from "../components/SelectInput";
import RadioGroup from "../components/RadioGroup";
import DatePickerField from "../components/DatePicker";
import UploadFile from "../components/UploadFile";
import EmployeeValidation from "../validation/EmployeeValidation";
import Education from "@/components/Education";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Country, State } from 'country-state-city';
import { RxReset } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { SiFormik, SiShadcnui } from "react-icons/si";
import { GrValidate } from "react-icons/gr";



const EmployeeForm = () => {

    const skills = [
        { name: "javascript", icon: IoLogoJavascript },
        { name: "tailwind", icon: RiTailwindCssFill },
        { name: "typescript", icon: BsTypescript },
        { name: "react", icon: FaReact },
        { name: "formik", icon: SiFormik },
        { name: "yup", icon: GrValidate },
        { name: "shadcn", icon: SiShadcnui }
    ];

    const gender = ["Male", "Female", "Other"];


    return (
        <>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    number: "",
                    gender: "",
                    skills: [],
                    country: "",
                    province: "",
                    dob: "",
                    profilepicture: "",
                    education: [{ collegeName: '', degree: '', passedYear: '' }],
                    additionalInfo: "",
                    yourself: "",
                    termsconditions: (false)
                }}
                validationSchema={EmployeeValidation}
                onSubmit={(values) => {
                    console.log(values)
                    alert("Form Submitted!", values)
                }}
            >
                {({ values, setFieldValue, resetForm, isValid, dirty }) => (

                    <Form>
                        <div className="p-20 ">
                            <div className="border-2 border-gray-400 rounded-lg bg-gray-100 ">
                                <div className="p-9">
                                    <h1 className="font-bold text-3xl text-center mt-3">Employee Registration Form</h1>

                                    <div className="border-2 border-gray-300 mt-2 mb-5" />
                                    <div>
                                        <Label>PERSONAL INFORMATION</Label>
                                        <div className="grid grid-cols-2 px-5 py-2 gap-x-10 gap-y-5" >

                                            {/* Full Name*/}
                                            <div>
                                                {/* First Name */}
                                                <FormInput
                                                    label="First Name"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Enter First Name..." />
                                            </div>


                                            {/* Last Name*/}
                                            <div >
                                                <FormInput
                                                    label="Last Name"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Enter Last Name..." />
                                            </div>


                                            {/*Email Address*/}
                                            <div>
                                                <FormInput
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="new-email"
                                                    placeholder="text@gmail.com" />
                                            </div>

                                            {/* Phone Number */}
                                            <div >
                                                <FormInput
                                                    label="Phone Number"
                                                    name="number"
                                                    type="number"
                                                    placeholder="Enter Phone Number..."
                                                />
                                            </div>

                                            {/* Password */}
                                            <div >
                                                <FormInput
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    placeholder="Enter Password..." />
                                            </div>

                                            {/*Confirm Password */}
                                            <div >
                                                <FormInput
                                                    label="Confirm Password"
                                                    name="confirmpassword"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    placeholder="Enter Confirm Password..." />
                                            </div>

                                            {/*Date of Birth*/}
                                            <div>
                                                <DatePickerField
                                                    label="Date of Birth"
                                                    name="dob"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="DD/MM/YYYY"
                                                    showYearDropdown
                                                    scrollableYearDropdown
                                                    yearDropdownItemNumber={100}
                                                />
                                            </div>

                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        {/*Gender*/}
                                        <div>
                                            <Label>GENDER</Label>
                                            <div className="flex gap-10 mt-2 px-5 py-2">
                                                {gender.map((genders) =>
                                                    <RadioGroup key={genders} name="gender" value={genders} >
                                                        {genders}
                                                    </RadioGroup>
                                                )}
                                            </div>
                                            <ErrorMessage name="gender" component="div" className="error text-red-500 text-sm" />
                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        {/* Skills */}
                                        <div>
                                            <Label>SKILLS</Label>
                                            <div className="grid grid-cols-7 gap-5 mt-2 mb-5 px-5 py-2">
                                                {skills.map((skill, index) =>
                                                    <ArrayCheckBox
                                                        key={skill.name}
                                                        name="skills"
                                                        value={skill.name}
                                                        icon={skill.icon}
                                                        showError={index === skills.length - 1}>
                                                        {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                                                    </ArrayCheckBox>)}
                                            </div>

                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        {/*Location*/}
                                        <div >
                                            <Label>LOCATION</Label>
                                            {/*Country */}
                                            <div className="px-5  py-2 grid grid-cols-2 gap-x-10">
                                                <SelectInput
                                                    label="Country"
                                                    name="country"
                                                    onChange={(e) => {
                                                        setFieldValue("country", e.target.value)
                                                        setFieldValue("province", "")
                                                    }}
                                                >
                                                    <option value="">Select Country</option>
                                                    {Country.getAllCountries().map((country) => (
                                                        <option key={country.isoCode} value={country.isoCode}> {country.name} </option>
                                                    ))}
                                                </SelectInput>

                                                {values.country && State.getStatesOfCountry(values.country).length > 0 &&
                                                    (
                                                        <div>
                                                            <SelectInput label="Province" name="province">
                                                                <option value="">Select Province</option>
                                                                {
                                                                    State.getStatesOfCountry(values.country).map((state) => (
                                                                        <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                                                                    ))
                                                                }
                                                            </SelectInput>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        {/*Upload File */}
                                        <div >
                                            <Label>PROFILE PICTURE</Label>
                                            <div className="px-5 py-2">
                                                <UploadFile
                                                    name="profilepicture"
                                                />
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />


                                        {/* Education*/}
                                        <div >
                                            <Label>EDUCATION</Label>
                                            <FieldArray name="education">
                                                {({ push, remove, form }) => {
                                                    const { values } = form;
                                                    return (
                                                        <div className="px-5 py-2">
                                                            {values.education.map((edu, index) => (
                                                                <div key={index}>
                                                                    <div className="flex items-end mt-2 mb-2 gap-3 px-5 py-2 bg-white rounded-lg border border-gray-200">
                                                                        <div className="m-2 w-full">
                                                                            <Education
                                                                                type="text"
                                                                                label="College Name"
                                                                                name={`education[${index}].collegeName`}
                                                                                placeholder="eg: IIMS" />
                                                                        </div>

                                                                        <div className="m-2 w-full ">
                                                                            <Education
                                                                                type="text"
                                                                                label="Degree"
                                                                                name={`education[${index}].degree`}
                                                                                placeholder="e.g: BCS" />
                                                                        </div>

                                                                        <div className="m-2 w-full">
                                                                            <Education
                                                                                type="number"
                                                                                label="Passed Year"
                                                                                name={`education[${index}].passedYear`}
                                                                                placeholder="eg: 2024" />
                                                                        </div>

                                                                        {values.education.length > 1 && (
                                                                            <Button type="button" onClick={() => remove(index)}> Remove </Button>
                                                                        )}
                                                                    </div>

                                                                    <Button type="button" className="mb-3" onClick={() => push({ collegeName: "", degree: "", passedYear: "" })}> Add </Button>
                                                                </div>

                                                            ))}

                                                        </div>
                                                    )
                                                }
                                                }
                                            </FieldArray>
                                        </div>
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        {/* Additional info */}
                                        <div >
                                            <Label>ADDITIONAL INFORMATION</Label>
                                            <div className="mt-2 mb-5 px-5 py-2">
                                                <CheckBox
                                                    name="additionalInfo"
                                                    className="px-5 py-2">
                                                    Add Additional Information
                                                </CheckBox>
                                            </div>
                                        </div>

                                        {/*About Yourself*/}
                                        {values.additionalInfo &&
                                            (<div className="mb-3 mt-2">
                                                <FormInput
                                                    label="About Yourself"
                                                    name="yourself"
                                                    type="text"
                                                    placeholder="Write about Yourself..."
                                                />

                                            </div>
                                            )}
                                        <div className="border border-gray-300 mt-2 mb-5" />

                                        <div>
                                            <CheckBox name="termsconditions" >
                                                I accept all the terms and conditions.
                                            </CheckBox>
                                        </div>

                                        <div className="flex gap-5 mt-5 items-center justify-center" >

                                            {/* Submit */}
                                            <Button type="submit" disabled={!isValid || !dirty}> Submit</Button>

                                            <Button type="submmit" onClick={resetForm}> <RxReset /> Reset</Button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Form >

                )}
            </Formik >
        </>

    )
}
export default EmployeeForm;