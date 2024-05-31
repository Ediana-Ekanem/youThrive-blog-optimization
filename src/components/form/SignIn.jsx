import React, { useState, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLockOutline, MdEmail } from "react-icons/md";

const Schema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const InputField = ({
  name,
  type,
  placeholder,
  icon: Icon,
  toggleVisibility,
  showPassword,
  error,
  touched,
}) => (
  <fieldset className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    <div className="relative flex items-center">
      <Icon
        className="absolute left-3 text-gray-400"
        onClick={toggleVisibility}
      />
      <Field
        name={name}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={`block w-full pl-12 pr-3 py-2 border ${
          touched && error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </fieldset>
);

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-20">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <InputField
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  icon={FaUserCircle}
                  error={errors.username}
                  touched={touched.username}
                />
                <InputField
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  icon={MdEmail}
                  error={errors.email}
                  touched={touched.email}
                />
                <InputField
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  icon={RiLockPasswordFill}
                  toggleVisibility={togglePasswordVisibility}
                  showPassword={showPassword}
                  error={errors.password}
                  touched={touched.password}
                />
                <InputField
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  icon={MdLockOutline}
                  toggleVisibility={toggleConfirmPasswordVisibility}
                  showPassword={showConfirmPassword}
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignIn;
