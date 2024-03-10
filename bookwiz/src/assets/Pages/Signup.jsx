import { useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";

import axios from "axios";
import { SuccessPopup } from "../Components";
import { Reading, Polygon1, Polygon2 } from "../Images";
import RandomQuotes from "../Components/RandomQuotes";

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be 3 characters or more")
        .required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(/\d/, "Password must contain a number")
        .matches(/[A-Z]/, "Password must contain an Uppercase letter"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      agreeToTerms: Yup.boolean().required(
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8000/api/auth/signup", values);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          formik.setErrors({ form: error.response.data.message });
        } else {
          formik.setErrors({
            form: "Something went wrong. Please try again later.",
          });
        }
      }
    },
  });

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex items-center p-10 ">
        <div className="bg-white flex flex-col items-begin mx-auto w-[60%]">
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <div className="text-[30px] font-[MuseoModerno] font-semibold  text-[#3F51B5] pb-[30px]">
              <a href="/home">BookWiz</a>
            </div>
            <div className="text-[20px] font-[Montserrat] font-semibold ">
              Create Your Account
            </div>
            <div className="text-[12px] max-w-lg font-[Montserrat] font-semibold pb-5 text-[#818181]">
              Welcome, Please sign up to continue.
            </div>
            <form onSubmit={formik.handleSubmit} method="POST">
              <div className="mb-4 max-w-lg mx-auto">
                <label
                  htmlFor="name"
                  className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                >
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-red-500 ml-3 text-[13px]">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="mb-4 max-w-lg mx-auto">
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-red-500 ml-3 text-[13px]">
                    {formik.errors.email}
                  </div>
                ) : null}{" "}
              </div>
              <div className="mb-4 max-w-lg mx-auto">
                <label
                  htmlFor="password"
                  className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-red-500 ml-3 text-[13px]">
                    {formik.errors.password}
                  </div>
                ) : null}{" "}
              </div>
              <div className="mb-4 max-w-lg mx-auto">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                >
                  Confirm Password:
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  className="border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500"
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div className="text-red-500 ml-3 text-[13px]">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="mb-4 max-w-lg mx-auto flex flex-row gap-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.agreeToTerms}
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-[15px] font-[Montserrat] font-medium"
                >
                  I Agree to the Terms and Conditions
                </label>
                {formik.errors.agreeToTerms && formik.touched.agreeToTerms ? (
                  <div className="text-red-500 ml-3 text-[13px]">
                    {formik.errors.agreeToTerms}
                  </div>
                ) : null}
              </div>
              <div className="mb-4 max-w-lg mx-auto">
                <button
                  type="submit"
                  className={`bg-[#3F51B5] w-full font-[Montserrat] font-bold tex-[20px] text-white py-2 px-4 rounded hover:bg-[#003F8F] ${
                    isSubmitted ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Submit
                </button>
                <div className="text-center mt-2 mb-2">Or</div>
                <button
                  type="button"
                  disabled={isSubmitted}
                  className={`bg-[#ffffff] w-full font-[Montserrat] font-bold tex-[20px] text-black border-solid border-black border-[2px] py-2 px-4 rounded hover:bg-black hover:text-white ${
                    isSubmitted ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Sign up with Google
                </button>
                <div className="font-[Montserrat] mt-3">
                  Already have an account?{" "}
                  <a href="/login" className="font-bold text-[#3F51B5]">
                    Login
                  </a>
                </div>
              </div>
            </form>
            {formik.errors.form && (
              <Popup
                message={formik.errors.form}
                statusCode={400}
                position="center"
              />
            )}

            {formik.status === "success" && (
              <Popup
                message="Form submitted successfully!"
                statusCode={200}
                position="center"
              />
            )}
          </motion.div>
        </div>
      </div>
      <div className="w-1/2 bg-[#3F51B5] overflow-hidden">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
        >
          <img
            className=" absolute  translate-x-[270px] opacity-60 translate-y-[330px]"
            src={Polygon1}
          />
          <img
            className=" absolute  translate-x-[5px] scale-75 opacity-60 translate-y-[100px]"
            src={Polygon2}
          />
          <img
            className=" absolute  translate-x-[280px] scale-50 opacity-60 translate-y-[-30px]"
            src={Polygon2}
          />
          <img
            className="  translate-x-[310px] translate-y-[420px]"
            src={Reading}
          />
          <div className="absolute scale-90 translate-x-[200px] translate-y-[-340px]">
            <RandomQuotes />
          </div>
        </motion.div>
      </div>
      <div className="absolute font-[poppins] font-semibold text-[12px] translate-y-[890px] translate-x-[890px]">
        <span className="text-[#3F51B5]">Created by</span>{" "}
        <span className="text-white">BookWiz Team</span>
      </div>
    </div>
  );
};

export default SignupForm;
