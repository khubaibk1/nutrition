"use client";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", closeMobileNav);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeMobileNav);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeMobileNav);
    };
  }, [isMobileNavOpen]);

  return (
    <nav className="w-full h-[130px] ">
      <div className="w-full h-[50px] flex flex-row justify-center items-center p-0 m-0">
        <div className="w-[95%] h-[50px]  text-[8px] font-[500] flex justify-center py-[16px] sm  sm:text-[16px] ">
          <p>
            Join the waitlist 🚨 Personalized Protein & Fiber Powder Supplements
            coming soon →
          </p>
        </div>
      </div>

      <div className="h-[78px] flex flex-row items-center sm:justify-around justify-between bg-[#146356] text-white ">
        <div className="text-[30px] sm:text-[40px] font-[800] sm:ml-[0] ml-[15px] ">
          Logo
        </div>

        <div className="block sm:hidden sm:mr-[0] text-[30px] mr-[15px]">
          <button onClick={toggleMobileNav}>
            {isMobileNavOpen ? (
              <span>
                <button onClick={closeMobileNav}>X</button>
              </span>
            ) : (
              <span>☰</span>
            )}
          </button>
        </div>

        <div className="hidden sm:flex  ">
          <div className="flex items-center mr-[40px]">
            <ul className="flex flex-row text-[6px] sm:text-[16px] font-[400] justify-around sm:w-[883px] pl-[70px]  w-[100px] ">
              <li>DNA Nutrition Analysis</li>
              <li> Personalized Vitamins & Supplements</li>
              <li>Dietitian Coaching</li>
              <li>Our Science</li>
            </ul>
          </div>

          <div>
            <button className="btn  active:bg-[#993636]  active:border-[#993636]">
              Log In
            </button>
            <button className="btn bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]  active:bg-[#993636]  active:border-[#993636]">
              Register
            </button>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div
          ref={menuRef}
          className="sm:hidden relative  h-[240px] z-40 bg-[#146356]  flex flex-col justify-center items-center m-0"
        >
          <div className="sm:hidden h-[210px] ">
            <ul className=" text-white p-4 text-[12px]  flex flex-col  items-center text-left justify-center">
              <li className="mb-[6px]">DNA Nutrition Analysis</li>
              <li className="mb-[6px]">Personalized Vitamins & Supplements</li>
              <li className="mb-[6px]">Dietitian Coaching</li>
              <li>Our Science</li>
            </ul>
            <div className="text-center p-4">
              <button className="btn  bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]  active:bg-[#993636]  active:border-[#993636] text-white">
                Log In
              </button>
              <button className="btn bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]  active:bg-[#993636]  active:border-[#993636] text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
