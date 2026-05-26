import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import FormInput from "../components/FormInput";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
import RadioGroup from "../components/RadioGroup";
import DatePickerField from "../components/DatePicker";
import UploadFile from "../components/UploadFile";
import EmployeeValidation from "../validation/EmployeeValidation";
import Education from "@/components/Education";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Country, State } from 'country-state-city';



const EmployeeForm = () => {

    const skills = ["javascript", "tailwind", "react", "typescript", "formik", "yup", "shadcn"];

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
                {({ values, setFieldValue }) => (

                    <Form>
                        <div className="p-20">
                            <div className="border-2 border-gray-400 flex flex-col rounded-lg bg-gray-100">
                                <div className="p-9">
                                    <h1 className="font-bold text-3xl text-center mt-3 mb-5">Employee Registration Form</h1>

                                    <div >
                                        {/* Full Name*/}
                                        <div className="mb-3 mt-2">
                                            {/* First Name */}
                                            <FormInput
                                                label="First Name"
                                                name="firstName"
                                                type="text"
                                                placeholder="Enter First Name..." />
                                        </div>

                                        {/* Last Name*/}
                                        <div className="mb-3 mt-2">
                                            <FormInput
                                                label="Last Name"
                                                name="lastName"
                                                type="text"
                                                placeholder="Enter Last Name..." />
                                        </div>

                                        {/*Email Address*/}
                                        <div className="mb-3 mt-2">
                                            <FormInput
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                placeholder="text@gmail.com" />
                                        </div>

                                        {/* Phone Number */}
                                        <div className="mb-3 mt-2">
                                            <FormInput
                                                label="Phone Number"
                                                name="number"
                                                type="number"
                                                placeholder="Enter Phone Number..."
                                            />
                                        </div>

                                        {/* Password */}
                                        <div className="mb-3 mt-2">
                                            <FormInput
                                                label="Password"
                                                name="password"
                                                type="text"
                                                placeholder="Enter Password..." />
                                        </div>

                                        {/*Confirm Password */}
                                        <div className="mb-3 mt-2">
                                            <FormInput
                                                label="Confirm Password"
                                                name="confirmpassword"
                                                type="text"
                                                placeholder="Enter Confirm Password..." />
                                        </div>

                                        {/*Gender*/}
                                        <div className="mb-3 mt-2">
                                            <Label>Gender</Label>
                                            {gender.map((genders) =>
                                                <RadioGroup key={genders} name="gender" value={genders}>
                                                    {genders}
                                                </RadioGroup>
                                            )}
                                            <ErrorMessage name="gender" component="div" className="error text-red-500 text-sm" />

                                        </div>

                                        {/* Skills */}
                                        <div className="mb-3 mt-2">
                                            <Label>Skills</Label>
                                            {skills.map((skill) =>
                                                <CheckBox key={skill} name="skills" value={skill}>
                                                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                                                </CheckBox>)}
                                            <ErrorMessage name="skills" component="div" className="error text-red-500 text-sm mt-1" />
                                        </div>

                                        {/*Country */}
                                        <div className="mb-3 mt-2">
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

                                        <div>
                                            {/* <SelectInput label="Country" name="country">
                                                <option value="">Select a Country</option>
                                                <option value="Afghanistan"> Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Antiguabarbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="BosniaHerzzegovina">Bosnia and Herzzegovina</option>
                                                <option value="botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cabo Verde">Cabo Verde</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote d’Ivoire">Cote d’Ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czechia">Czechia</option>
                                                <option value="Democratic Republic of the Congo<">Democratic Republic of the Congo</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Eswatini">Eswatini</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia, The</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Holy See">Holy See</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordon">Jordon</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Kuwait">	Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">	Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar ">Myanmar </option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="North Korea">North Korea</option>
                                                <option value="North Macedonia">North Macedonia</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Palestine State">Palestine State</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Korea">South Korea</option>
                                                <option value="South Sudan">South Sudan</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-Leste">Timor-Leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="	Zimbabwe">	Zimbabwe</option>
                                            </SelectInput> */}
                                        </div>

                                        {/*Date of Birth*/}
                                        <div className="mb-3 mt-2">
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

                                        {/*Upload File */}
                                        <div className="mb-3 mt-2">
                                            <UploadFile
                                                label="Profile Picture"
                                                name="profilepicture"
                                            />
                                        </div>


                                        {/* Education*/}
                                        <div className="mb-3 mt-2">
                                            <Label>Education</Label>
                                            <FieldArray name="education">
                                                {({ push, remove, form }) => {
                                                    const { values } = form;
                                                    return (
                                                        <div >
                                                            {values.education.map((edu, index) => (
                                                                <div key={index} className="flex items-center">

                                                                    <div className="m-2">
                                                                        <FormInput
                                                                            type="text"
                                                                            label="College Name"
                                                                            name={`education[${index}].collegeName`}
                                                                            placeholder="College Name" />
                                                                    </div>

                                                                    <div className="m-2 ">
                                                                        <FormInput
                                                                            type="text"
                                                                            label="Degree"
                                                                            name={`education[${index}].degree`}
                                                                            placeholder="Degree" />
                                                                    </div>

                                                                    <div className="m-2">
                                                                        <FormInput
                                                                            type="number"
                                                                            label="Passed Year"
                                                                            name={`education[${index}].passedYear`}
                                                                            placeholder="Passed Year" />
                                                                    </div>

                                                                    <div>
                                                                        {values.education.length > 1 && (

                                                                            <Button type="button" onClick={() => remove(index)}> Remove </Button>

                                                                        )}

                                                                        <Button type="button" onClick={() => push({ collegeName: "", degree: "", passedYear: "" })}> Add </Button>
                                                                    </div>
                                                                </div>
                                                            ))}

                                                        </div>
                                                    )
                                                }
                                                }
                                            </FieldArray>
                                        </div>

                                        {/* Additional info */}
                                        <div className="mt-3">
                                            <CheckBox
                                                name="additionalInfo">
                                                Add Additional Information
                                            </CheckBox>
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
                                                <ErrorMessage className="error " component="div" name="yourself" />
                                            </div>
                                            )}

                                        <div className="mb-3 mt-2">
                                            <CheckBox name="termsconditions" >
                                                I accept all the terms and conditions.
                                            </CheckBox>
                                            <ErrorMessage name="termsconditions" component="div" className="error text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className="mb-3 mt-2">
                                            {/* Submit */}
                                            <Button type="submit"> Submit</Button>

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