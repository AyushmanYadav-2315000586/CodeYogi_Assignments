import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  function callSignUpApi(values) {
    console.log("Sign Up values:", values);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: callSignUpApi,
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
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg py-8 w-full max-w-md text-center"
        >
          <h1 className="text-2xl font-bold mb-4">SignUp Page</h1>

          <div className="mt-4 space-y-2">
            <label htmlFor="name" className="block sr-only">
              Full Name
            </label>
            <input
              value={values.name}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              className=" py-2 px-2 border-none bg-pink-100 rounded-md w-3/4 focus:outline-none "
              placeholder="Name"
              id="name"
              name="name"
              required
            ></input>
            {touched.name && errors.name && (
              <div className="text-red-800 text-sm">{errors.name}</div>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block sr-only">
              Email
            </label>
            <input
            value={values.email}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              id="email"
              name="email"
              className=" py-2 px-2 border-none bg-pink-100 rounded-md w-3/4 focus:outline-none "
              required
            />
            {touched.email && errors.email && (
              <div className="text-red-800 text-sm">{errors.email}</div>
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
            {touched.password && errors.password&&(
              <div className="text-red-508 text-sm">{errors.password}</div>)}
          </div>
          <div className="mt-4">
            <label htmlFor="cfpswd" className="block sr-only">
              Confirm Password
            </label>
            <input
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
              type="password"
              id="cfpswd"
              name="confirmPassword"
              className=" py-2 px-2 border-none bg-pink-100 rounded-md w-3/4  focus:outline-none "
              placeholder="Confirm password"
              required
            />
            {touched.confirmPassword&&errors.confirmPassword&&(
              <div className="text-red-508 text-sm">{errors.confirmPassword}</div>)}
          </div>
          <div className="mt-4">
            <Button>Sign Up</Button>
          </div>
          <div className="mt-3 flex items-center w-3/4 mx-auto">
            <input
              type="checkbox"
              className="size-4 mr-2"
              id="remember"
              name="remember"
            />
            <label htmlFor="remember" className="text-gray-800">
              Remember Me
            </label>
          </div>
          <div className="mt-4">
            <p className="text-gray-800">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-300 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
