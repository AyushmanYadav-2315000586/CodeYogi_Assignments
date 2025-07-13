import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  function callLoginApi(values) {
    console.log("Login values:", values);
  }

  const schema=Yup.object().shape({
    email:Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string().min(8,"Password must be at least 8 characters").required("Password is required"),
  })
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: callLoginApi,
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
            <h1 className="text-2xl font-bold mb-4">Login Page</h1>

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
              {touched.email&&errors.email&&(
                <p className="text-red-800 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="pswd" className="block sr-only">
                Password
              </label>
              <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
                type="password"
                id="pswd"
                name="password"
                className=" py-2 px-2 border-none bg-pink-100 rounded-md w-3/4  focus:outline-none "
                placeholder="Enter your password"
                required
              />
              {touched.password&&errors.password&&(
                <p className="text-red-800 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="mt-4 flex w-3/4 items-center mx-auto justify-end">
              <Link
                to="/forgot-password"
                className="text-black hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <Button>Login</Button>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-yellow-300 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
