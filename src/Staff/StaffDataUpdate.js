import React from 'react';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { BASE_URL, FETCH } from '../Config';

const inputClass = "h-[30%] w-[80%] p-6 border border-blue-300 rounded-md m-1";
const divClassRight = "flex flex-col w-full h-full ml-10";
const divClassLeft = "flex flex-col w-full h-full ml-10";
const INPUT =(name, placeholder, handleChange, handleBlur, values, touched, errors)=>
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
    Name: Yup.string()
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
        .min(11, 'Configuration must be at least 11 characters')
        .max(11, 'Too Long!')
        .required('Required'),
    e_mail: Yup.string().email('Invalid email')
        .required('Required'),
    room_no: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(10, 'Too Long!')
        .required('Required'),
    nationality: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    brith: Yup.string()
        .min(5, 'Must be Date Format : Month/Date/Year')
        .max(50, 'Too Long!')
        .required('Required'),
    nid: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .max(50, 'Too Long!')
        .required('Required'),
});
const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>{
const INPUT2=(name, placeholder)=>
INPUT(name, placeholder, handleChange, handleBlur, values, touched, errors)

return (
    <div className="w-full h-full flex mt-20 mb-56">
        <div className="w-[20%] h-full"></div>

        <div className="w-[60%] h-full bg-green-100 ">
            <p className="mt-5 mb-5 text-3xl text-red-700 font-bold font-serif text-center">Update Staff Data</p>
            <div className="flex w-full h-full justify-center">

                <form onSubmit={handleSubmit} className='flex divide-x-2 divide-slate-500'>
                    <div className="mt-1 flex flex-col w-full h-full ">
                        {INPUT2('name', 'Enter Name')}
                        {INPUT2('father', 'Enter Father Name')}
                        {INPUT2('mother', 'Enter Mother Name')}
                        {INPUT2('present_address', 'Present address')}
                        {INPUT2('permanent_address', 'Permanent Address')}
                        {INPUT2('academic_achievement', 'Academic Achievement')}
                        {INPUT2('languages_skills', 'Languages Skills')}
                        {INPUT2('designation', 'Designation')}
                    </div>
                    <div className="mt-1 flex flex-col w-full h-full ml-40">
                        <div className={divClassRight}>
                            <input
                                type="number"
                                name='contact_no'
                                placeholder='Contact Number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contact_no}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.contact_no && errors.contact_no}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <input
                                type="text"
                                name='e_mail'
                                placeholder='Enter E-mail'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.e_mail}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.e_mail && errors.e_mail}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <input
                                type="text"
                                name='room_no'
                                placeholder='Room No'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.room_no}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.room_no && errors.room_no}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <input
                                type="text"
                                name='nationality'
                                placeholder='Nationality'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nationality}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.nationality && errors.nationality}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <input
                                type="text"
                                name='brith'
                                placeholder='Enter Date of Brith'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.brith}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.brith && errors.brith}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <input
                                type="text"
                                name='nid'
                                placeholder='Enter NID Number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nid}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.nid && errors.nid}
                            </span>
                        </div>
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

)}
const StaffInfoUpdate = () => {
    const { id } = useParams();
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const onSubmit = (values, { setSubmitting }) => {
        FETCH('PUT', values, id, navigate);

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