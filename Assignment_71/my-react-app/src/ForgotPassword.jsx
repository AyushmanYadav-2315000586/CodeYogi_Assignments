import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import * as Yup from "yup";
import Input from "./Input";
import { withFormik } from "formik";

function callForgotPasswordApi(values) {
  console.log("Forgot Password values:", values);
}

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
  email: "",
};
export function ForgotPassword({values,errors,touched,handleSubmit,handleBlur,handleChange}) {

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
            <Input
              values={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              label="Email"
              type="email"
              id="email"
              required
              autoComplete="email"
              placeholder="Enter your Email"
              className="w-3/4"
            />
            <div className="mt-2">
              <Button type={"submit"}>Confirm</Button>
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

const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callForgotPasswordApi,
});

const EasyForgotPassword = myHOC(ForgotPassword);
export default EasyForgotPassword;