import React, { useState } from "react";

function Card() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <>
      <div className="h-[316px] w-[720px] bg-[#363C43] flex drop-shadow-Card rounded-[18.89px] mt-8 mr-6">
        <div className="svgs flex flex-col justify-start px-5 gap-y-[105px] my-2">
          <img className="w-24px" width={"24px"} src="/Vector.svg" alt="" />
          <img width={"24px"} src="/Frame.svg" alt="" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full justify-between">
            <div className="tab-list bg-[#171717] h-[62px] w-[149px] rounded-[23px] flex justify-around items-center my-2">
              <p className=" text-white font-poppins text-[20px] leading-none font-medium w-[72px] h-[30px] flex items-center justify-center">
                Gallery
              </p>
            </div>
            <div className="buttonAndIcon flex">
              <div
                style={{
                  filter:
                    "drop-shadow(-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25)), drop-shadow(9px 10px 7.1px rgba(0, 0, 0, 0.40))",
                  boxShadow:
                    "0px 0px 48.91px 0 rgba(255, 255, 255, 0.05), 0px 3.26px 3.26px 0 rgba(255, 255, 255, 0.15)",
                }}
                className="imageInput w-[131.32px] h-[46px] rounded-[104px] flex items-center justify-center mx-4 backdrop-blur-[104.56px] cursor-pointer"
              >
                <span className="cursor-pointer">
                  <img src="/plus.svg" alt="" />
                </span>
                <label
                  className="text-white opacity-100 cursor-pointer uppercase font-jakartaSans font-extrabold text-[12px] leading-[6.3px]"
                  htmlFor="image"
                >
                  {" "}
                  Add Image
                </label>
                <input
                  className="hidden cursor-pointer"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={handleImageChange}
                  name=""
                  id="image"
                />
              </div>
              <div className="arrows flex ">
                <div className="drop-shadow-5xl">
                  <div
                    style={{
                      filter:
                        "drop-shadow(-0.5px -0.5px 6.9px rgba(16, 18, 19, 1)), drop-shadow(-5px -3px 30px -10 rgba(150, 190, 231, 1))",
                    }}
                    className="left w-[45px] h-[45px] mr-8 bg-[#161718] rounded-full flex items-center justify-center hover:translate-y-1 cursor-pointer"
                  >
                    <img
                      className="w-[14px] h-[14px] stroke-[#6F787C] drop-shadow-LeftButton"
                      src="Left.svg"
                      alt="left arrow"
                    />
                  </div>
                </div>
                <div className="drop-shadow-5xl">
                  <div
                    style={{
                      filter: "",
                    }}
                    className="right w-[45px] h-[45px] mr-8 bg-[#161718] rounded-full flex items-center justify-center hover:translate-y-1 cursor-pointer drop-shadow-5xl  overflow-hidden"
                  >
                    <img
                      className="w-[14px] h-[14px] stroke-[#6F787C] drop-shadow-LeftButton"
                      src="Right.svg"
                      alt="right arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Tabs content */}
          </div>
          <div className="tabs-container  w-full">
            <div className="tabs-content flex grow-0 gap-x-4 mt-10 overflow-x-auto no-scrollbar">
              <div className="hover:-rotate-2 ease-in-out duration-200  flex-shrink-0">
                <img
                  className="hover:-rotate-2 hover:scale-110 saturate-[50%] ease-in-out rounded-3xl w-[190px] h-[179px]"
                  src="/image.png"
                  alt="hue-image"
                />
              </div>
              <div className="hover:-rotate-2 ease-in-out duration-200  flex-shrink-0">
                <img
                  className="hover:-rotate-2 hover:scale-110 saturate-[50%] ease-in-out rounded-3xl  w-[190px] h-[179px]"
                  src="/image.png"
                  alt="hue-image"
                />
              </div>
              <div className="hover:-rotate-2 ease-in-out duration-200  flex-shrink-0">
                <img
                  className="hover:-rotate-2 hover:scale-110 saturate-[50%] ease-in-out rounded-3xl  w-[190px] h-[179px]"
                  src="/image.png"
                  alt="hue-image"
                />
              </div>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="hover:-rotate-12 hover:hue-rotate-180 ease-in-out duration-200  flex-shrink-0"
                >
                  <img
                    className="rounded-3xl w-[190px] h-[179px] object-cover"
                    src={image}
                    alt={`uploaded-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* tabs trigger */}
      </div>
    </>
  );
}

export default Card;
