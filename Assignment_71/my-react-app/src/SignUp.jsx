import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import * as Yup from "yup";
import Input from "./Input";
import { withFormik } from "formik";

function callSignUpApi(values) {
  console.log("Sign Up values:", values);
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};
export function SignUp({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
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
          <h1 className="text-2xl font-bold mb-4">SignUp Page</h1>
          <div className="space-y-4">
            <Input
              values={values.name}
              error={errors.name}
              touched={touched.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Full Name"
              name="name"
              id="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Full Name"
              className="w-3/4"
            />
            <Input
              values={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              name="email"
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              className="w-3/4"
            />
            <Input
              values={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              name="password"
              id="password"
              type="password"
              required
              autoComplete="password"
              placeholder="Password"
              className="w-3/4"
            />
          </div>
          <div className="mt-4 flex items-center w-3/4 mx-auto">
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
            <Button type="submit">Sign Up</Button>
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

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callSignUpApi,
});

const EasySignUp = myHOC(SignUp);

export default EasySignUp;
