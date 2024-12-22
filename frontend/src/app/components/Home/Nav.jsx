"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pics } from "../../../../public/data";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("token");
        toast.success(response.data.message);
        setTimeout(() => router.push("/"));
      }
    } catch (error) {
      console.log(error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

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
              className="w-[90%] h-[98%]"
            />
          </Link>
        </div>

        {!isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <Link href="/signup">
              <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
                Log In
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300"
            >
              Log Out
            </button>
            <ToastContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
