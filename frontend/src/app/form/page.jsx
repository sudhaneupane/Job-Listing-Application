"use client";
import React, { useState } from "react";

const ApplyForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div className="mt-10 mb-10 max-w-xl mx-auto p-6 border rounded-lg shadow-lg shadow-red-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm    "
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            type="text"
            id="position"
            name="position"
            disabled
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume/CV
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="education"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Level of Education
          </label>
          <select
            id="education"
            name="education"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          >
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            min="0"
            max="40"
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
