import { UserContext } from "../../context/UserProvider";
import React, { useState } from "react";
import { useContext } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";


const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээc хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой"),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой.")
});


const SignupvalidationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээc хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой"),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой."),
  phoneNumber: yup
    .string()
    .required("Utasnii dugaar oruulna uu"),
  name: yup 
    .string()
    .required("ner zaaval oruulna uu")
});

export const LoginForm = ({ open, closeForm }: any) => {

  const [isSignup, setIsSignup] = useState("login")
  // const [isLogin, setIsLogin]=useState(false)

  const handleForm = (e) => {
    console.log("FORMMM: ", e.target.name)
    setIsSignup(e.target.name)
  }


  return (
    <dialog
      open={open}
      className="modal flex justify-center items-center w-[100] h-screen rounded-xl absolute z-50 bg-black bg-opacity-40"
    >
      <div className="modal-box flex flex-col gap-4  bg-white  h-[480px] md:w-[420px] absolute z-50 w-[100] items-center">
        <div className="flex gap-36 fle-col">
          <div className="">
            <button className="text-blue-900 font-bold" name="login" onClick={handleForm}>Нэвтрэх </button>
            <button className="text-blue-900 font-bold" name="signup" onClick={handleForm}>/ Бүртгүүлэх </button>

          </div>
          <button
            onClick={closeForm}
            className="hover:text-black  text-gray-700"
          >
            X
          </button>
        </div>
{/* <Login/> */}

        <div className=" text-black">
          {isSignup === "login" && <Login /> }
          {isSignup === "signup" && <Signup />}
        </div>
      </div>
    </dialog>
  );
};

const Login = () => {
const {login, user, token, handleChangeUser,}=useContext(UserContext)
  const formik = useFormik({
    onSubmit: async ({ email, password}) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
      login(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });


  return (
    <div>
          <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
          />
          {formik.errors["email"] && <p className="text-red-400">{formik.errors["email"]}</p>}

          <input
            type="text"
            placeholder="password"
            className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
            name="password"
            onChange={formik.handleChange}
          />

          {formik.errors["password"] && <p className="text-red-400">{formik.errors["password"]}</p>}
          <div className="flex justify-end">
            <button className="btn btn-outline btn-success ">
              Нууц үг мартсан
            </button>
          </div>
          <button
            className="btn btn-neutral w-[320px]"
            //  onClick={login}
            type="button"
            onClick={() => { 
              console.log("clicked")
              formik.handleSubmit()
            }}
          >
            Үргэлжлүүлэх
          </button>
        </div>

        <div className="divider divider-neutral text-black  sm:mx-6">OR</div>
        <div className="flex sm:gap-5  gap-8">
          <button className="border-[1px] sm:w-24 w-20 p-3 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
              className="w-6 rounded-full "
            />
          </button>
          <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://www.cabriniclinic.org/wp-content/uploads/2014/02/facebook-icon.png"
              className="w-6 rounded-full"
            />
          </button>
          <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/695/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
              className="w-8 rounded-full"
            />
          </button>
        </div>
    </div>
  )
}

const Signup = () => {
  const { signup } = useContext(UserContext);
  const formik = useFormik({
    onSubmit: async ({ email, password, name, phoneNumber }) => {
      signup(email, password, name, phoneNumber); // Pass individual values to signup function
    },
    initialValues: { email: "", password: "", name: "", phoneNumber: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignupvalidationSchema
  });

  return (
    <div>
    <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="name"
      className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
      name="name"
      onChange={formik.handleChange}
    />
    <input
      type="text"
      placeholder="email"
      name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
    />
    {formik.errors["email"] && <p className="text-red-400">{formik.errors["email"]}</p>}

    <input
      type="text"
      placeholder="password"
      className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
      name="password"
      onChange={formik.handleChange}
    />

    {formik.errors["password"] && <p className="text-red-400">{formik.errors["password"]}</p>}
    
    <input
      type="text"
      placeholder="phoneNumber"
      className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
      name="phoneNumber"
      onChange={formik.handleChange}
    />
   
     
    
    <button
      className="btn btn-neutral w-[320px]"
      //  onClick={login}
      type="button"
      onClick={() => { formik.handleSubmit() }}
    >
      Бүртгүүлэх
    </button>
  </div>

  <div className="divider divider-neutral text-black  sm:mx-6">OR</div>
  <div className="flex sm:gap-5  gap-8">
    <button className="border-[1px] sm:w-24 w-20 p-3 hover:bg-gray-200 rounded-md flex justify-center">
      <img
        src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
        className="w-6 rounded-full "
      />
    </button>
    <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
      <img
        src="https://www.cabriniclinic.org/wp-content/uploads/2014/02/facebook-icon.png"
        className="w-6 rounded-full"
      />
    </button>
    <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/695/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
        className="w-8 rounded-full"
      />
    </button>
  </div>
</div>
  )
}