import React from "react";
import styles from "../style";

const CommunityPage = () => {
  return (
    <div className="community-gradient relative flex w-[100vw] h-[100vh] overflow-x-hidden ">
      <div
        className={`${styles.paddingX} ${styles.paddingY} relative flex items-start flex-col justify-center w-full h-full `}
      >
        <div className="relative  scrollbar-hide  flex flex-col w-full h-full justify-center items-center ">
          <div className={`flex flex-col   items-start  w-full top-[-1rem] `}>
            <h2 className="text-community-gradient font-poppins font-semibold  md:text-[30px] text-[32px]   ">
              Revolutionizing the Social <br /> Shopping Expererience
            </h2>
            <p className="font-poppins text-white font-[500] md:text-[14px] text-[12px] leading-[20px] mb-3 mt-5">
              Meet new people from around the world, bridging <br /> the divide
              between social media and e-Commerce
            </p>

            {/* <Button color="#FFE500" content="Get Started" /> */}

            <button
              style={{ marginLeft: "0px" }}
              className={`flex bg-[#FFE500] ml-0 flex-row items-center justify-center leading-[20px] font-poppins font-[600] text-[14px] py-2 px-4 rounded-[101px] md:ml-8 hover:bg-[#ECEEF4]
               duration-500 `}
            >
              <p className="text-gradient"> Get Started</p>
            </button>
          </div>
        </div>
      </div>

      <div className=" absolute w-[40px] h-[40px]  community-bg-circle " />

      <div className=" absolute overflow-x-hidden top-[-2rem] w-[780px] h-[780px] flex items-center justify-center   community-bg-circle ">
        <div className=" absolute  overflow-x-hidden w-[560px] h-[560px] flex   community-bg-circle " />
      </div>
    </div>
  );
};

export default CommunityPage;
