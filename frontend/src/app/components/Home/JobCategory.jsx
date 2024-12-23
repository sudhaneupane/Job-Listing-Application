"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { pics } from "../../../../public/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const JobCategory = () => {
  const dummyjob = [
    {
      jobId: "1",
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      salary: "$100,000 - $120,000",
      description:
        "Join our innovative team to develop cutting-edge software solutions.",
      requirements: [
        "Bachelor's in Computer Science",
        "3+ years of software development experience",
        "Proficiency in JavaScript and Python",
      ],
      postedDate: "2024-12-15",
      jobType: "Full-time",
      category: "Engineering",
    },
    {
      jobId: "2",
      title: "Product Manager",
      company: "Innovate Corp.",
      location: "New York, NY",
      salary: "$90,000 - $110,000",
      description:
        "Lead product development from concept to execution, ensuring customer satisfaction and business growth.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in product management",
        "Strong communication skills",
      ],
      postedDate: "2024-12-10",
      jobType: "Full-time",
      category: "Product",
    },
    {
      jobId: "3",
      title: "Digital Marketing Specialist",
      company: "Brandify",
      location: "Remote",
      salary: "$50,000 - $70,000",
      description:
        "Help craft and execute digital marketing strategies that drive engagement and increase brand awareness.",
      requirements: [
        "Experience with Google Analytics, SEO, and SEM",
        "Strong writing and analytical skills",
        "Ability to work independently",
      ],
      postedDate: "2024-12-12",
      jobType: "Full-time",
      category: "Marketing",
    },
    {
      jobId: "4",
      title: "Data Analyst",
      company: "Data Insights LLC",
      location: "Chicago, IL",
      salary: "$70,000 - $85,000",
      description:
        "Analyze complex datasets to support data-driven decision-making and business strategies.",
      requirements: [
        "Bachelor's degree in Data Science, Statistics, or related field",
        "Experience in data analysis and visualization tools",
        "Proficient in SQL and Python",
      ],
      postedDate: "2024-12-18",
      jobType: "Full-time",
      category: "Data Science",
    },
  ];

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
          {dummyjob.slice(0, 4).map((job) => {
            return (
              <Link href={`/job/jobdetails/${job.jobId}`} key={job.jobId}>
                {/* jobcard */}
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
                          {job.jobType}
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
