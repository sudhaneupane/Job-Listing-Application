import Image from "next/image";
import React from "react";
import { pics } from "../../../public/data";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          {/* content */}
          <div className="">
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem]font-extrabold">
              <span className="text-blue-500">The Easiest Way </span>
              <br />
              To Get Your Job
            </h1>
            <p className="text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]">
              A platform where users can browse and discover job opportunities
              across various industries and locations.
            </p>
            {/* search */}
            <div className="mt-[1.5rem]">
              <input
                className="w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200"
                type="text"
                placeholder="Search Job"
              />
              <button className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white">
                Search
              </button>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <Image src={pics.hero_img} alt="hero" className="" />
          </div>
        </div>
      </div>
      <JobCategory />
    </div>
  );
};

export default Home;
