import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const getPositionIndicator = () => {
    switch (activeTab) {
      case "tab1":
        return "left-1";
      case "tab2":
        return "left-[calc(100%/3)+1]";
      case "tab3":
        return "left-[calc(100%/3*2)]";
      default:
        return "left-0";
    }
  };
  return (
    <>
      <div className="h-[316px] w-[720px] bg-[#363C43] flex drop-shadow-Card rounded-[18.89px] mt-8 mr-6">
        <div className="svgs flex flex-col justify-start px-5 gap-y-[105px] my-2">
          <img className="w-24px" width={"24px"} src="/Vector.svg" alt="" />
          <img width={"24px"} src="/Frame.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <div className="relative tab-list bg-[#171717] h-[62px] w-[614px] rounded-[23px] flex justify-around items-center my-2">
            <div
              className={`absolute top-1 h-[49px] w-[195px] bg-[#28292F] rounded-[16px] transition-all duration-300 ease-in-out  ${getPositionIndicator()}`}
            ></div>
            <button
              className={`tabs-trigger text-[18px] leading-[16.1px] w-[195px] h-[49px] rounded-[16px] px-[24px] py-[10px] font-poppins font-medium z-[10] ${
                activeTab === "tab1"
                  ? "text-white bg-[#28292F]"
                  : "text-[#A3ADB2]"
              }`}
              onClick={() => {
                setActiveTab("tab1");
              }}
            >
              About Me
            </button>
            <button
              className={`tabs-trigger text-[18px] leading-[16.1px]  w-[195px] h-[49px] rounded-[16px] px-[24px] py-[10px] font-poppins font-medium z-[10]  ${
                activeTab === "tab2"
                  ? "text-white bg-[#28292F]"
                  : "text-[#A3ADB2]"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Experience
            </button>
            <button
              className={`tabs-trigger text-[18px] leading-[16.1px]  w-[195px] h-[49px] rounded-[16px] px-[24px] py-[10px]  font-poppins font-medium z-[10] ${
                activeTab === "tab3"
                  ? "text-white bg-[#28292F]"
                  : "text-[#A3ADB2]"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Recommended
            </button>
          </div>
          {/* Tabs content */}
          <div className="tabs-content overflow-y-scroll">
            {activeTab === "tab1" && (
              <div className="text-[#969696] text-[20px] font-jakartaSans font-normal h-[175px] w-[611px]">
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.{" "}
                </p>
                <br />
                <p>
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...{" "}
                </p>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="text-[#969696] text-[20px] font-jakartaSans font-normal h-[175px] w-[611px]">
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.{" "}
                </p>
                <br />
                <p>
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...{" "}
                </p>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="text-[#969696] text-[20px] font-jakartaSans font-normal h-[175px] w-[611px]">
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.{" "}
                </p>
                <br />
                <p>
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...{" "}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* tabs trigger */}
      </div>
    </>
  );
}

export default Tabs;
