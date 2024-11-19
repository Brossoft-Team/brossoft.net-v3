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
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
    </div>
    <a className="absolute bottom-4 right-4 text-white  p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" >  →</a>
   </div>

  );
};

export default WorkCard;
