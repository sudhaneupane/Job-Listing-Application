"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const page = () => {
  const [job, setJob] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const allJobs = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://job-listing-application-m36c.onrender.com/api/jobs`,
        {
          params: { page, limit: 5 },
        }
      );
      setJob(response.data.viewJobs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allJobs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-12 w-[80%] mx-auto mb-12">
      <div className="mb-[2rem]">
        <h1 className="font-semibold">Show Results ({job.length})</h1>
      </div>
      <div className="space-y-8">
        {job.map((job, index) => {
          return (
            <Link
              href={`job/${job._id.toString()}`}
              key={job._id.toString() || index}
            >
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

      <div className="flex justify-center mt-6 space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default page;
