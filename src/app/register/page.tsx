"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      user: "",
      email: "",
      pass: "",
    },

    validationSchema: Yup.object({
      user: Yup.string().required("Username is required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      pass: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      console.log("Form Values:");

      // FUTURE:
      // Connect WordPress register endpoint here

      router.push("/register");
    },
  });

  return (
    <main className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md border border-slate-200 rounded-2xl p-8 shadow-sm bg-white">

        <h1 className="text-3xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-slate-500 mb-8">
          Sign up to get started
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5"
        >

          {/* Username */}
          <div>
            <input
              type="text"
              name="user"
              placeholder="Username"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              value={formik.values.user}
              onChange={formik.handleChange}
            />

            {formik.errors.user && formik.touched.user && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.user}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              value={formik.values.pass}
              onChange={formik.handleChange}
            />

            {formik.errors.pass && formik.touched.pass && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.pass}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 font-medium hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}