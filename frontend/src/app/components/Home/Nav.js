import Image from "next/image";
import Link from "next/link";
import React from "react";
import { pics } from "../../../../public/data";

const Nav = () => {
  return (
    <div className="h-[13vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between"></div>

      <div className=" w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
        <Link href="/">
          <Image
            src={pics.jobimg}
            alt="Logo"
            width={500}
            height={500}
            className="w-[100%] h-[100%]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
