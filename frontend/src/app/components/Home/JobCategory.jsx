"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import axios from "axios";

const JobCategory = () => {
  const [job, setJob] = useState([]);

  const handleJobs = async () => {
    try {
      const response = await axios.get(
        `https://job-listing-application-m36c.onrender.com/api/jobs`
      );
      setJob(response.data.viewJobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleJobs();
  }, []);

  return (
    <div className="pt-18  pb-12 ">
      <div className="text-center p-3">
        <h1 className="text-black text-[27px] text-opacity-90 font-bold">
          Featured Jobs
        </h1>
        <p className="mt-[1rem] text-[15px] text-gray-800 text-opacity-80 font-medium">
          Explore featured job listings, highlighting top opportunities from
          leading companies. Find your ideal job and take the next step in your
          career!
        </p>
        <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {job.slice(0, 4).map((job, index) => {
            return (
              <Link
                href={`/job/jobdetails/${job._id.toString()}`}
                key={job._id.toString() || index}
              >
                {/* jobcard */}
                <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-300 border-blue-700 rounded-lg border-opacity-10">
                  <div className="flex items-center space-x-6">
                    <img src={job.image} height={50} width={50} alt="" />
                    <div className="ml-4">
                      <h1 className="text-[17px] font-semibold mb-[0.4rem]">
                        {job.title}
                      </h1>
                      <div className="flex items-center md:space-x-10 space-x-4">
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt className="w-[0.8rem] h-[0.8rem] text-pink-700" />
                          <p className="text-[14px] text-black font-semibold text-opacity-60">
                            {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center md:space-x-10 space-x-4">
                        <div className="flex items-center space-x-2">
                          <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
                          <p className="text-[14px] text-black font-semibold text-opacity-60">
                            Rs.{job.salary}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem] flex-wrap">
                        <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">
                          Full Time
                        </div>
                        <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">
                          Private
                        </div>
                        <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
                          Urgent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link href="/job/alljobs">
        <div className="text-center mt-[3rem]">
          <button className=" px-8 py-4 font-semibold hover:bg-blue-700 transition-all duration-300 bg-blue-500 rounded-lg text-white">
            View All Jobs
          </button>
        </div>
      </Link>
    </div>
  );
};

export default JobCategory;
