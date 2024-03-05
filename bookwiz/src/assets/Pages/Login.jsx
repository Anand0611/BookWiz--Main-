import { Formik, Field } from "formik";
import { motion } from "framer-motion";
import { useTogglePassword } from "../Components/useTogglePassword";
import * as Yup from "yup";
import { Reading, Polygon1, Polygon2 } from "../Images";
import RandomQuotes from "../Components/RandomQuotes";

import axios from "axios";

const Login = () => {
  useTogglePassword();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    const data = JSON.stringify(values);

    axios({
      method: "post",
      url: "https://your-backend-api-url.com/signup",
      data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const initialSignup = {
    email: "",
    password: "",
  };
  const formvalidation = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex items-center p-10">
        <div className="bg-white flex flex-col items-begin ml-[130px] w-[60%]">
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
              BookWiz
            </div>
            <div className="text-[20px] font-[Montserrat] font-semibold ">
              Login Your Account
            </div>
            <div className="text-[12px] font-[Montserrat] font-semibold pb-5 text-[#818181]">
              Welcome back, Please Login to continue.
            </div>
            <Formik
              initialValues={{ initialSignup }}
              validationSchema={formvalidation}
              validateOnChange={true}
              onSubmit={(values, { setSubmitting }) => {
                const data = JSON.stringify(values);

                axios({
                  method: "post",
                  url: "http://localhost:8000/api/v1/registration",
                  data,
                  headers: { "Content-Type": "application/json" },
                })
                  .then((response) => {
                    console.log(response);
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.log(error);
                    setSubmitting(false);
                  });
              }}
            >
              {({ errors, touched, isSubmitting, values }) => {
                return (
                  <form method="post">
                    <div className="mb-4 input-block">
                      <label
                        htmlFor="email"
                        className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                      >
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        autoComplete="off"
                        type="email"
                        placeholder="john@doe.com"
                        value={values.email}
                        className={`border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500 `}
                      />{" "}
                      {errors.email && touched.email ? (
                        <p className="text-red-500 ml-3 text-[13px] ">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-gray-800 text-[Montserrat] font-semibold mb-1"
                      >
                        Password
                      </label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        useTogglePassword="visible"
                        className="border w-full border-gray-300 px-3 py-2 text-gray-900 rounded-xl focus:outline-none focus:border-[#003F8F] transition duration-500"
                      />

                      {errors.password && touched.password ? (
                        <p className="text-red-500 ml-3 text-[13px]">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`bg-[#3F51B5] w-full font-[Montserrat] font-bold tex-[20px] text-white py-2 px-4 rounded hover:bg-[#003F8F] ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Login
                      </button>
                      <div className="text-center mt-2 mb-2">Or</div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`bg-[#ffffff] w-full font-[Montserrat] font-bold tex-[20px] text-black border-solid border-black border-[2px] py-2 px-4 rounded hover:bg-black hover:text-white ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Login with Google
                      </button>
                      <div className="font-[Montserrat] mt-3">
                        Don&apos;t have an account?{" "}
                        <a href="/signup" className="font-bold text-[#3F51B5]">
                          Create one now
                        </a>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
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

export default Login;
