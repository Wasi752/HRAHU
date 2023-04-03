import React from 'react';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { BASE_URL, FETCH } from '../Config';
import useAuthentication from '../util';

const inputClass = "h-[30%] w-[80%] p-6 border border-blue-300 rounded-md";
const divClassRight = "flex flex-col w-full h-full ml-10";
const divClassLeft = "flex flex-col w-full h-full ml-10";
const INPUT = (name, placeholder, handleChange, handleBlur, values, touched, errors) =>
    <div className={divClassLeft}>
        <input
            type='text'
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            className={inputClass}
        />
        <span className='text-red-500'>
            {touched[name] && errors[name]}
        </span>
    </div>

const StaffSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Name must be at least 4 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    father: Yup.string()
        .min(4, 'Father name must be at least 4 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    mother: Yup.string()
        .min(4, 'Mother name must be at least 4 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    present_address: Yup.string()
        .min(20, 'Present address be at least 20 characters')
        .max(100, 'Too Long!')
        .required('Required'),
    permanent_address: Yup.string()
        .min(20, 'Must be at least 20 characters')
        .max(150, 'Too Long!')
        .required('Required'),
    academic_achievement: Yup.string()
        .min(20, 'Must be at least 20 characters')
        .max(150, 'Too Long!')
        .required('Required'),
    languages_skills: Yup.string()
        .min(20, 'Must be at least 20 characters')
        .max(150, 'Too Long!')
        .required('Required'),
    designation: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    contact_no: Yup.string()
        .min(11, 'Must be at least 11 degits')
        .max(11, 'Too Long!')
        .required('Required'),
    e_mail: Yup.string().email('Invalid email')
        .required('Required'),
    room_no: Yup.string()
        .min(3, 'Must be at least 3 degits')
        .max(5, 'Too Long!')
        .required('Required'),
    nationality: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    brith: Yup.string()
        .min(5, 'Must be Date Format : Date/Month/Year')
        .max(50, 'Too Long!')
        .required('Required'),
    nid: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .max(50, 'Too Long!')
        .required('Required'),
});
const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
    const INPUT_ = (name, placeholder) =>
        INPUT(name, placeholder, handleChange, handleBlur, values, touched, errors);
    return (
        <div className="w-full h-full flex mt-20 mb-56">
            <div className="w-[20%] h-full"></div>

            <div className="w-[60%] h-full bg-green-100 ">
                <p className="mt-5 mb-5 text-3xl text-red-700 font-bold font-serif text-center">Update Staff Data</p>
                <div className="flex w-full h-full justify-center">

                    <form onSubmit={handleSubmit} className='flex divide-x-2 divide-slate-500'>
                        <div className="mt-1 flex flex-col w-full h-full ">
                            {INPUT_('name', 'Enter Name')}
                            {INPUT_('father', 'Enter Father Name')}
                            {INPUT_('mother', 'Enter Mother Name')}
                            {INPUT_('present_address', 'Present address')}
                            {INPUT_('permanent_address', 'Permanent Address')}
                            {INPUT_('academic_achievement', 'Academic Achievement')}
                            {INPUT_('languages_skills', 'Languages Skills')}
                            {INPUT_('designation', 'Designation')}
                        </div>
                        <div className="mt-1 flex flex-col w-full h-full ml-40">
                            {INPUT_('contact_no', 'Enter Contact Number')}
                            {INPUT_('e_mail', 'Enter E-mail')}
                            {INPUT_('room_no', 'Enter Room No')}
                            {INPUT_('nationality', 'Enter Nationality')}
                            {INPUT_('brith', 'Enter Date of Brith')}
                            {INPUT_('brith', 'Enter Date of Brith')}
                            {INPUT_('nid', 'Enter NID Number')}
                            <div className={divClassRight}>
                                <input
                                    type="file"
                                    name='image'
                                    placeholder='Upload Image'
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                            <div className=''>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="text-center text-2xl text-white font-bold h-[30%] w-[80%] py-6 border border-blue-300 rounded-md ml-11 mr-3 bg-blue-600 hover:text-blue-300">Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-[20%] h-full"></div>
        </div>

    )
}
const StaffInfoUpdate = () => {
    const { id } = useParams();
    const [value, setValue] = useState();
    const navigate = useNavigate();
    useAuthentication();

    const onSubmit = (values, { setSubmitting }) => {
        FETCH('PUT', values, navigate, id);

    }
    useEffect(() => {
        fetch(BASE_URL + id)
            .then((response) => response.json())
            .then((a) => {
                setValue(a);
            });
    }, [id]);
    return value && (
        <div>
            <Formik
                initialValues={value}
                validationSchema={StaffSchema}
                component={Form}
                onSubmit={onSubmit}
            >
            </Formik>
        </div>
    );
};
export default StaffInfoUpdate;