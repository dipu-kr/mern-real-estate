import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="w-full h-[calc(100vh-65px)] flex items-center justify-center flex-col">
      <div className="w-[400px] mx-auto border px-4 py-10 rounded-md shadow-md shadow-gray-300">
        <h1 className="text-center mb-4 -mt-4 text-xl uppercase font-medium">
          Login
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto border"
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  placeholder="Your@email.com"
                  name="email"
                  className="w-full border border-gray-300 py-2 pl-2 rounded-md outline-none mb-2"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error text-[13px] text-red-500 -mt-2 mb-1"
                />
              </div>

              <div>
                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full border border-gray-300 py-2 pl-2 rounded-md outline-none mb-2"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="error text-[13px] text-red-500 -mt-2 mb-1"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 border-none outline-none bg-red-500 text-white rounded-md"
                >
                  Login
                </button>
              </div>
              <div className="text-center text-[15px] mt-2 text-gray-500">
                Don't have an account yet?{" "}
                <Link to="/register" className="text-blue-500 underline">
                  Register Now
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
