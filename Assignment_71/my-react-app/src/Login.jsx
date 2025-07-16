import React from "react";
import Button from "./Button";
import { Form, withFormik } from "formik";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import * as Yup from "yup";
import Input from "./Input";

function callLoginApi(values) {
  console.log("Login values:", values);
}

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};
export function Login({ values, errors, touched, handleChange, handleBlur,handleSubmit }) {
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
          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg py-8 w-full max-w-md text-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Login Page</h1>
          <div className="space-y-4">
            <Input
              values={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              label="Email"
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              className="w-3/4"
            />
            <Input
              values={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              id="password"
              label="Password"
              type="password"
              required
              autoComplete="password"
              placeholder="Password"
              className="w-3/4"
            />
          </div>
          <div className="mt-4 flex w-3/4 items-center mx-auto justify-end">
            <Link to="/forgot-password" className="text-black hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div>
            <Button type="submit">Login</Button>
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
    </>
  );
}

const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
});

const EasyLogin = myHOC(Login);
export default EasyLogin;
