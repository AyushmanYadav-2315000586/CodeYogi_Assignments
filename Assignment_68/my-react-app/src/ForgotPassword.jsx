import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  function callForgotPasswordApi(values) {
    console.log("Forgot Password values:", values);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: callForgotPasswordApi,
      validationSchema: schema,
    });

  return (
    <>
      <div className="relative">
        {" "}
        <Link to="/">
          <IoMdArrowBack className="absolute top-1 left-1 text-2xl" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg py-8 w-full max-w-md text-center">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

            <div className="mt-4">
              <label htmlFor="email" className="block sr-only">
                Email
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                className=" py-2 px-2 border-none bg-pink-100 rounded-md w-3/4 focus:outline-none "
                required
              />
              {touched.email && errors.email&&(
                <p className="text-red-800 text-sm">{errors.email}</p>)}
            </div>

            <div className="mt-2">
              <Button>Confirm</Button>
            </div>
            <div className="mt-4 flex w-3/4 items-center mx-auto justify-center gap-2">
              <p className="text-black">{"<--"} Back to</p>
              <Link to="/login" className="text-yellow-300 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
