import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center py-14 px-40 mx-auto border-[1px] border-t-black border-solid">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 flex items-center justify-center ">
          <p className="font-ephesis font text-4xl ">B</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xl text-gray-500">
          © 2019-∞{" "}
          <span className="font-semibold text-[#3d3d3d]">Brossoft AS.</span>
        </p>
        <p className="text-sm text-gray-600">
          Copyright © Brossoft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
<div>
  <p className="text-sm text-gray-600  flex text-center">
    Copyright © Brossoft. All Rights Reserved.
  </p>
</div>;
