"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const router = useRouter();

  const validateForm = () => {
    let formErrors = {};
    const allowedDomains = [
      "gmail.com",
      "outlook.com",
      "hotmail.com",
      "yahoo.com",
      "icloud.com",
      "me.com",
      "mac.com",
    ];

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
    } else {
      const emailDomain = email.split("@")[1]?.toLowerCase();
      if (!allowedDomains.includes(emailDomain)) {
        formErrors.email =
          "Email must be from Gmail, Outlook, Hotmail, Yahoo, iCloud, or Apple domains.";
      }
    }
    if (!password) {
      formErrors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      formErrors.password =
        "Password must contain at least 6 characters, including upper and lower case letters, and at least one number.";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^(97|98)\d{8}$/.test(phone)) {
      formErrors.phone =
        "Phone number must be exactly 10 digits and start with 97 or 98";
    }
    setFormErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const formData = { email, password, phone };

      const response = await axios.post(
        `https://job-listing-application-m36c.onrender.com/api/signup`,
        formData
      );

      // console.log(response.data.message);

      if (response.status === 201) {
        toast.success(response.data.message);

        setEmail("");
        setPassword("");
        setPhone("");
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" mt-20 flex justify-center items-center">
      <form
        onSubmit={handleSignUpForm}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-4 py-2 border ${
              formErrors.email
                ? "border-red-500 rounded-lg"
                : "border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            }`}
          />
          {formErrors.email && (
            <span className="text-sm text-red-500">{formErrors.email}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`px-4 py-2 border ${
              formErrors.password
                ? "border-red-500 rounded-lg"
                : "border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            }`}
          />
          {formErrors.password && (
            <span className="text-sm text-red-500">{formErrors.password}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`px-4 py-2 border ${
              formErrors.phone
                ? "border-red-500 rounded-lg"
                : " border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            }`}
          />
          {formErrors.phone && (
            <span className="text-sm text-red-500">{formErrors.phone}</span>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2"
          >
            Sign Up
          </button>{" "}
          <Link href="/login">
            <button className="w-full px-12 flex bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2">
              Login
            </button>
          </Link>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
