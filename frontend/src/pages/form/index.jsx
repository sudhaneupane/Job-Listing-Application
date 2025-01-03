"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ApplyForm = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCV] = useState("");
  const [exp, setExp] = useState("");
  const [education, setEducation] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("cv", cv);
      formData.append("exp", exp);
      formData.append("education", education);
      formData.append("coverLetter", coverLetter);
      formData.append("jobTitle", jobTitle);

      const response = await axios.post(
        `https://job-listing-application-m36c.onrender.com/api/form`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        setCV("")
        setCoverLetter("")
        setEducation("")
        setEmail("")
        setExp("")
        setFullname("")
        setJobTitle("")
        setPhone("")
      }
      
    } catch (error) {
      console.log("err", error);
      toast.error(error.response.data.message)
    }
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
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
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
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
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
            accept=".pdf"
            onChange={(e) => {
              setCV(e.target.files[0]);
            }}
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
            value={coverLetter}
            onChange={(e) => {
              setCoverLetter(e.target.value);
            }}
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
          <input
            id="education"
            name="education"
            value={education}
            onChange={(e) => {
              setEducation(e.target.value);
            }}
            required
            className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm"
          ></input>
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
            value={exp}
            onChange={(e) => {
              setExp(e.target.value);
            }}
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default ApplyForm;
