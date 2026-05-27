import { State } from 'country-state-city';
import * as Yup from 'yup';

const EmployeeValidation = Yup.object({

    firstName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(20, 'Cannot be more than 20 characters')
        .matches(/^[a-zA-Z\s]+$/, 'Name cannot contain numbers or special characters.')
        .required('Required'),

    lastName: Yup.string()
        .min(3, 'Must be 3 characters')
        .max(20, 'Cannot be more than 20 characters')
        .matches(/^[a-zA-Z\s]+$/, 'Name cannot contain numbers or special characters.')
        .required('Required'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),

    number: Yup.string()
        .matches(/^9[0-9]{9}$/, "Numbers must start from 9 and have 10 digits. ")
        .required('Required'),

    password: Yup.string()
        .min(8, 'Must have atleast 8 characters')
        .matches(/[A-Z]/, 'Must contain atleast 1 capital letter.')
        .matches(/[a-z]/, 'Must contain atleast 1 small letter.')
        .matches(/[0-9]/, 'Must contain atleast 1 number.')
        .required('Required'),

    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match.')
        .required('Required'),

    gender: Yup.string()
        .required('Required'),

    skills: Yup.array()
        .of(Yup.string().oneOf(['javascript', 'tailwind', 'react', 'typescript', 'formik', 'yup', 'shadcn']))
        .min(1, 'Pick at least one Skill.'),

    country: Yup.string()
        .required('Required'),

    province: Yup.string()
        .when('country', {
            is: country => country && State.getStatesOfCountry(country).length > 0,
            then: (schema) => schema.required('Required'),
            otherwise: (schema) => schema.notRequired()
        }),

    dob: Yup.string()
        .required('Required'),

    profilepicture: Yup.mixed()
        .test('file type', 'Only JPG and PNG files are allowed.', (value) => {
            if (!value) return true;
            return ['image/jpg', 'image/png'].includes(value.type);
        })
        .required('Required'),

    education: Yup.array()
        .of(
            Yup.object({
                collegeName: Yup.string()
                    .min(3, 'Collge Name sgould be mininum 3 charecters long.')
                    .required('Required'),

                degree: Yup.string()
                    .min(2, "Degree must be minimum 2 charecters.")
                    .required('Required'),

                passedYear: Yup.string()
                    .matches(/[0-9]/, 'Passed Year must be in number format.')
                    .required('Required')
            })
        ),

    additionalInfo: Yup.boolean(),

    yourself: Yup.string()
        .when('additionalInfo', {
            is: true,
            then: (schema) => schema
                .min(20, 'Must be at least 20 charecters...')
                .required('Required'),
            otherwise: (schema) => schema.notRequired()
        }),

    termsconditions: Yup.boolean()
        .oneOf([true], 'You must Accept the terms and conditions to continue.')
})

export default EmployeeValidation;



