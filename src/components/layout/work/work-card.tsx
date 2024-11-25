import React from "react";
import Link from "next/link";

interface WorkCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  id,
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg w-full h-80">

  <img
    src={image}
    alt={title}
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />

 
  <div className="absolute bottom-2 left-2 right-2">
   <button className="flex items-center justify-between w-full  bg-black/80 text-white px-7 py-2 rounded-full backdrop-blur-md transition-all duration-500 group-hover:translate-y-[-12px] group-hover:bg-black/80">
      <span className="text-base">{title}</span>
      <span className="ml-5 text-xl">→</span>
    </button>
    <div className="h-0 overflow-hidden rounded-xl bg-black/80 transition-all duration-500 ease-out group-hover:h-24">
      <div
        className="opacity-0 p-4 transition-opacity duration-500 ease-out group-hover:opacity-100">
        
        <p className="text-gray-300 text-base text-ellipsis">{description}</p>
      </div>
    </div>
  </div>
</div>

  

  );
};

export default WorkCard;
