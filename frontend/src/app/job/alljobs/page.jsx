"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pics } from "../../../../public/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import Image from "next/image";

const page = () => {
  const [job, setJob] = useState([]);

  const allJobs = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/jobs`);
      setJob(response.data.viewJobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allJobs();
  }, []);

  return (
    <div className="mt-12 w-[80%] mx-auto mb-12">
      <div className="mb-[2rem]">
        <h1 className="font-semibold">Show Results ({job.length})</h1>
      </div>
      <div className="space-y-8">
        {job.map((job, index) => {
          return (
            <Link href={`/job/jobdetails/${job.id}`} key={job.id || index}>
              <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-300 border-blue-700 rounded-lg border-opacity-10">
                <div className="flex items-center space-x-6">
                  <Image
                    src={pics.jobimg}
                    alt={job.title}
                    width={50}
                    height={50}
                  />
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
  );
};

export default page;
