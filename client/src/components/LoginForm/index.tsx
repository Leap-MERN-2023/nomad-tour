import { UserContext } from "../../context/UserProvider";
import React, { useState } from "react";
import { useContext } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Pass from "@/app/(pages)/forgot-pass/page";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээc хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой"),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой."),
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
  phoneNumber: yup.string().required("Утасны дугаар оруулна уу"),
  name: yup.string().required("Нэр заавал оруулна уу"),
});

export const LoginForm = ({ open, closeForm }: any) => {
  const [isSignup, setIsSignup] = useState("login");
  // const [isLogin, setIsLogin]=useState(false)

  const handleForm = (e: any) => {
    console.log("FORMMM: ", e.target.name);
    setIsSignup(e.target.name);
  };

  return (
    <dialog
      open={open}
      className="modal flex justify-center items-center w-[100] h-screen rounded-xl absolute z-50 bg-black bg-opacity-40"
      onClose={closeForm}
    >
      <div className="modal-box flex flex-col gap-4  bg-white  h-[400px] md:w-[420px] absolute z-50 w-[100] items-center">
        <div className="flex gap-36 fle-col">
          <div className="">
            <button
              className="text-blue-900 font-bold"
              name="login"
              onClick={handleForm}
            >
              Login
            </button>
            <button
              className="text-blue-900 font-bold"
              name="signup"
              onClick={handleForm}
            >
              / Signup{" "}
            </button>
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
          {isSignup === "login" && <Login closeForm={closeForm} />}
          {isSignup === "signup" && <Signup closeForm={closeForm} />}
        </div>
      </div>
    </dialog>
  );
};

const Login = ({ closeForm }: any) => {
  const { login, user, token, handleChangeUser } = useContext(UserContext);
  const formik = useFormik({
    onSubmit: async ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
      login(email, password);
      closeForm();
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
        />
        {formik.errors["email"] && (
          <p className="text-red-400 text-xs">{formik.errors["email"]}</p>
        )}
        <div className="flex items-center bg-slate-300 relative text-black">
          <input
            type={isShowPassword ? "password" : "text"}
            placeholder="password"
            className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
            name="password"
            onChange={formik.handleChange}
          />
          {isShowPassword == false ? (
            <IoIosEye
              size={20}
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              className="absolute right-2"
            />
          ) : (
            <IoIosEyeOff
              size={20}
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              className="absolute right-2"
            />
          )}
        </div>
        {formik.errors["password"] && (
          <p className="text-red-400 text-xs">{formik.errors["password"]}</p>
        )}
        <div className="flex justify-end">
          <button
            className="btn btn-outline btn-success "
            onClick={() => router.push("/forgot-pass")}
          >
            Forget password
          </button>
        </div>
        <button
          className="btn btn-neutral w-[320px]"
          //  onClick={login}
          type="button"
          onClick={() => {
            console.log("clicked");
            formik.handleSubmit();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Signup = ({ closeForm }: any) => {
  const { signup } = useContext(UserContext);
  const formik = useFormik({
    onSubmit: async ({ email, password, name, phoneNumber }) => {
      console.log("name", name);
      console.log("EMAIL", email);
      console.log("PASS", password);
      signup(email, password, name, phoneNumber); // Pass individual values to signup function
      closeForm();
    },
    initialValues: { email: "", password: "", name: "", phoneNumber: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignupvalidationSchema,
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
        {formik.errors["name"] && (
          <p className="text-red-400 text-xs">{formik.errors["name"]}</p>
        )}
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
        />
        {formik.errors["email"] && (
          <p className="text-red-400 text-xs">{formik.errors["email"]}</p>
        )}

        <input
          type="text"
          placeholder="password"
          className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
          name="password"
          onChange={formik.handleChange}
        />

        {formik.errors["password"] && (
          <p className="text-red-400 text-xs">{formik.errors["password"]}</p>
        )}

        <input
          type="text"
          placeholder="phoneNumber"
          className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black w-[400px]"
          name="phoneNumber"
          onChange={formik.handleChange}
        />
        {formik.errors["phoneNumber"] && (
          <p className="text-red-400 text-xs">{formik.errors["phoneNumber"]}</p>
        )}
        <button
          className="btn btn-neutral w-[320px]"
          //  onClick={login}
          type="button"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
};
