import React from "react";

const SignUpPage = () => {
  return (
    <div className=" mt-20 flex justify-center items-center">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="text-sm font-medium text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2">
            Sign Up
          </button>
          <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 gap-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
