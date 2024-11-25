import React from "react";

interface WorkDetailsProps {
  title: string;
  id: number;
  details: string;
  image: string;
  technologies: string[];
}

const WorkDetails: React.FC<WorkDetailsProps> = ({
  title,
  details,
  image,
  technologies,
}) => {
  return (
    <div className=" text-white rounded-lg overflow-hidden shadow-xl">
      <h1 className="text-4xl font-bold mb-6">{title.toUpperCase()}</h1>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-2xl"
        />
      </div>

      <div className="flex py-6">
        <div className="w-1/2  text-white p-6">
          <div className="grid grid-cols-2 gap-y-8 text-gray-400 mb-6 border-r-2 border-gray-400">
            <div className="space-y-1">
              <h2 className="text-sm uppercase font-semibold">Industry</h2>
              <p className="text-lg text-white">Digital Collectible</p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm uppercase font-semibold">Services</h2>
              <p className="text-lg text-white">
                {technologies.slice(0, 2).join(" & ")}
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm uppercase font-semibold">Company</h2>
              <p className="text-lg text-white">Digital Collectible</p>
            </div>
          </div>
        </div>
        <div className="w-1/2  p-6 flex flex-col align-">
          <p className="text-lg text-gray-300 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            ipsum similique quisquam consectetur animi iste cumque reiciendis
            eveniet saepe, esse voluptate iure repellendus, placeat sunt
            dignissimos fugiat, nesciunt sit quidem?
          </p>
          <div className="flex items-center gap-4 bottom-0">
            <img
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-bold">Maison Price</p>
              <p className="text-sm text-gray-400">Creative Officer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-800">
        <button className="w-full py-3 bg-white text-black rounded-3xl font-bold hover:bg-gray-200 transition">
          Discuss the project
        </button>
      </div>
    </div>
  );
};

export default WorkDetails;
