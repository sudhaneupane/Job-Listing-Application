"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    setFormErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8000/api/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className=" mt-20 flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-4 py-2 border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
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
              formErrors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {formErrors.password && (
            <span className="text-sm text-red-500">{formErrors.password}</span>
          )}
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className="w-1/2  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>

          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default page;
