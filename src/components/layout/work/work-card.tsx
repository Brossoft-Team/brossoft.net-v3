import React from "react";

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
    <div className="relative group mb-4 break-inside-avoid rounded-3xl shadow-lg overflow-hidden space-y-10">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-x-0 bottom-2 px-2">
        <button className="flex items-center justify-between w-full bg-black/80 text-white px-5 py-2 rounded-full backdrop-blur-md transition-all duration-500">
          <span className="text-base">{title}</span>
          <span className="ml-5 text-xl">→</span>
        </button>
        <div className="h-0 overflow-hidden rounded-xl bg-black/80 transition-all duration-500 ease-out group-hover:h-24">
          <div className="opacity-0 p-4 transition-opacity duration-500 ease-out group-hover:opacity-100">
            <p className="text-gray-300 text-base text-ellipsis">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default  WorkCard;