"use client"
import { useRouter } from "next/navigation";
import React, {useContext} from "react";
import { useFormik } from "formik";
import { AuthContext } from "@/context/authProvider";
import * as yup from "yup";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button
} from "@chakra-ui/react";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "enter email")
    .required("enter email")
    .email("email is not required"),
  password: yup
    .string()
    .required("enter password")
    .min(6, "min 6 lenght")
});
 const Home = () => {
	const Router = useRouter();
  const {user,login} = useContext(AuthContext);
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
 
  
  const {errors,values,handleChange,handleSubmit} = useFormik({
    onSubmit: async ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
      login(email, password);
      closeForm(); 
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema
  });
  console.log("formik",values)

	return (

		<div className="flex justify-center items-center w-full h-screen relative" >
      <img src="/assets/campfire.jpg" className="w-full h-full absolute"/>
      <div className="flex flex-col gap-4 w-1/4 justify-center items-center relative">
        <img className="w-42 h-42 rounded-full mt-12" src="/assets/nomad.png"/>
        <h1 className="text-3xl mt-4"></h1>
        <div>
          <div className="bg-black opacity-60 rounded-xl">
        <Input
        textColor={"white"}
        pr='4.5rem'
        name="email"
        placeholder='Enter email'
        value={values.email}
        onChange={handleChange}
        className={errors.email ? "input-error" : ""}
        />
          </div>
         {errors["email"] && <p className="text-red-500">{errors["email"]}</p>}
         </div>
         <div>
         <div className="bg-black opacity-60 rounded-xl">
        <InputGroup size='md'>
         <Input
           textColor={"white"}
           name="password"
           onChange={handleChange}
           pr='4.5rem'
           type={show ? 'text' : 'password'}
           placeholder='Enter password'
           value={values.password}
           className={errors.password ? "input-error" : ""}
           />
           <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
             </Button>
            </InputRightElement>
        </InputGroup>
        </div>
        {errors["password"] && <p className="text-red-500">{errors["password"]}</p>}
        </div>
        <button
          className="btn btn-success w-1/4 text-white text-xl mb-12"
          type="button"
          
          onClick={() => {
            handleSubmit()
          }}
        >
          Login
        </button>
    </div>
	</div>
	);
}

function closeForm() {
    throw new Error("Function not implemented.");
}

export default Home;