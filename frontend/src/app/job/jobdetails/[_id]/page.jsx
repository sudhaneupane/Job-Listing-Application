"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const JobDetails = ({ params }) => {
  const [job, setJob] = useState(null);
  const { _id } = React.use(params);
  const specificJob = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/jobs/${_id}`);
      setJob(response.data.viewSpecific);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    if (_id) {
      specificJob();
    }
  }, [_id]);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7] ">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[30px] font-extrabold text-blue-600">
              {job ? job.title : "Loading..."}
            </h1>
            <Link href="/form">
              <button className="bg-blue-500 mx-[-80] text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Apply Now
              </button>
            </Link>
          </div>
          <div className="mt-12 w-[80%] mx-auto">
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p className="mt-4 text-black text-opacity-70">
              {job ? job.description : "Loading.."}
            </p>
            <h1 className="text-[20px] mt-8 font-semibold">
              Key Responsibilities
            </h1>
            <p className="mt-4 text-black text-opacity-70">
              {job ? job.description : "Loading.."}
            </p>
            {/* <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
            <ul className=" list-disc mt-4">
              {job ? (
                job.skills.map((skills, index) => (
                  <li className="mt-4 text-black text-opacity-70" key={index}>
                    {skills}
                  </li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul> */}
            <h1 className="text-[20px] mt-8 font-semibold">Requirements</h1>
            <ul className=" list-disc mt-4">
              {job ? (
                job.requirement.map((requirement, index) => (
                  <li className="mt-4 text-black text-opacity-70" key={index}>
                    {requirement}
                  </li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul>
            <h1 className="text-[20px] mt-8 font-semibold">Salary</h1>
            <p className="mt-4 text-black text-opacity-70">
              Rs.{job ? job.salary : "Loading.."}
            </p>
            <h1 className="text-[20px] mt-8 font-semibold mr-4">Job Type</h1>
            <p className="text-black text-opacity-70">
              {job ? job.jobType : "Loading.."}
            </p>
            <h1 className="text-[20px] mt-8 font-semibold mr-4">Location</h1>
            <p className="text-black text-opacity-70">
              {job ? job.location : "Loading.."}
            </p>
            <h1 className="text-[20px] mt-8 font-semibold mr-4">Posted Date</h1>
            <p className="text-black text-opacity-70">
              {job
                ? new Date(job.postedDate).toLocaleDateString()
                : "Loading..."}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
