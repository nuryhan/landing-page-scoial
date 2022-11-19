import React from "react";

const Button = ({ color, content }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`flex flex-row items-center justify-center leading-[20px] font-poppins font-[600] text-[14px] py-2 px-4 rounded-[101px] md:ml-8 hover:bg-[#ECEEF4]
    duration-500 `}
    >
      <p className="text-gradient">{content}</p>
    </button>
  );
};

export default Button;
