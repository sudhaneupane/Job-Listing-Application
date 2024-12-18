"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, password, phone };

      const response = await axios.post(
        `http://localhost:8000/api/signup`,
        formData
      );

      // console.log(response.data.message);

      if (response.status === 201) {
        toast.success(response.data.message);
      }

      setEmail("");
      setPassword("");
      setPhone("");
      setTimeout(()=>router.push("/login"),2000)
    } catch (error) {
      console.log("err", error);
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2"
          >
            Sign Up
          </button>
          <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2">
            Login
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
