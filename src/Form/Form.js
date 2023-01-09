import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

const Form = () => {

    const schema=yup.object().shape({
        name:yup.string().required("Name is required"),
        email: yup.string().email().required("Invalid email"),
        age: yup.number().integer().positive().required('Age must be a number'),
        password:yup.string().min(4).max(20).required("Minimal 4 characters"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "password doesnt match" ).required()
    })

    const {register, handleSubmit, formState: {errors}}=useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <form style={{display:"flex", flexDirection:"column", alignItems:"center", gap:10}} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Enter name" {...register("name")}/>
            <p className="error">{errors.name?.message}</p>
          <input type="text" placeholder="Enter email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
          <input type="number" placeholder="Enter age" {...register("age")}/>
            <p className="error">{errors.age?.message}</p>
          <input type="password" placeholder="Enter password" {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
          <input type="password" placeholder="Confirm password" {...register("confirmPassword" )}/>
            <p className="error">{errors.confirmPassword?.message}</p>
          <input type="submit"/>
        </form>
    );
};

export default Form;