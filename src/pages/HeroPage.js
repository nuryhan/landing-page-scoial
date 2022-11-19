import React from "react";
import {
  cart,
  hero,
  HeroBgLine,
  herodotbig,
  herodotsmall,
  heroimg,
  heropayment,
  product,
  safe,
  sale,
} from "../assets";
import Button from "../components/Button";
import styles from "../style";

const HeroPage = () => {
  return (
    <>
      <div className={`bg-[#5F40AF] oveflow-hidden  w-[100vw] h-[100vh]  `}>
        {/* Hero Content */}
        <div
          className={`absolute flex flex-col z-[11] items-center justify-center w-full h-[100vh] `}
        >
          <h2 className={`${styles.heading2}`}>
            Where eCommerce & <br /> Social Media Connect
          </h2>
          <p className={`${styles.paragraph}`}>
            Expererience a new interactive way to shop
          </p>

          <Button color="#FFE500" content="Start Shopping" />
        </div>

        {/* Hero background gradient overlay */}
        <div
          className={`absolute w-[100vw] h-[100vh] overflow-x-hidden header-gradient object-cover`}
        />

        {/* Hero background dots and vector svg image */}
        <div className="w-[100vw] h-[100vh] absolute object-cover">
          <img
            className="w-[100vw] h-[100vh] object-cover "
            src={HeroBgLine}
            alt="Hero background"
          />
        </div>

        {/* Hero background image */}
        <div className="w-full h-full object-cover ">
          <img
            className="w-full h-full md:pt-0 pt-[80px] "
            src={hero}
            alt="hero"
          />
        </div>
      </div>

      {/* Hero section two */}
      <div
        className={` bg-bluejesticViolet  ${styles.paddingX}    flex items-center justify-center  ${styles.paddingY}  w-[100vw] h-[80vh] `}
      >
        <div className=" flex flex-col absolute md:mt-0 mt-[-6rem] md:relative z-[1] ">
          <div className="w-full mt-3 flex  ">
            <img className="w-[350px] h-full" src={herodotsmall} alt={`hero`} />
          </div>
          <div className="w-full mb-7 flex  ">
            <img
              className="w-[350px] h-full md:ml-[10rem] md:mt-[-2px] "
              src={herodotbig}
              alt={`hero`}
            />
          </div>
        </div>

        <div className={`flex md:flex-row flex-col-reverse absolute z-[3]`}>
          <div className=" flex md:flex-col justify-between  ">
            <img className="w-[190px] h-[100px]" src={heroimg} alt={`hero`} />
            <img
              className="w-[190px] h-[100px] md:mt-[1.5rem]"
              src={heropayment}
              alt={`hero`}
            />
          </div>
          <div className="flex relative">
            <img
              className="w-[400px] h-[200px] md:ml-[1rem] mb-[2rem] "
              src={product}
              alt={`product`}
            />

            <img
              className="w-[38px] h-[38px] absolute right-[4.75rem] top-[-1.25rem]"
              src={cart}
              alt="cart"
            />

            <img
              className="w-[60px] h-[60px] absolute bottom-[0.50rem] left-[4rem]"
              src={sale}
              alt="cart"
            />

            <img
              className="md:w-[40px] md:h-[40px] w-[28px] h-[28px] absolute md:bottom-[-1rem] bottom-[0rem] right-[7rem] "
              src={safe}
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
