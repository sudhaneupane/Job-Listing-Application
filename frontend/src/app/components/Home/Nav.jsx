import Image from "next/image";
import Link from "next/link";
import React from "react";
import { pics } from "../../../../public/data";

const Nav = () => {
  return (
    <div className="h-[13vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <Link href="/">
            <Image
              src={pics.jobimg}
              alt="Logo"
              width={200}
              height={200}
              className="w-[100%] h-[98%]"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signup">
            <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
