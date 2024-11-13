import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";


interface PortfolioCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-2xl w-full h-full flex flex-col justify-between">
    <img src={image} alt={title} className="px-6 py-6 h-48 object-cover" />
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <div className="p-4 mt-auto">
     
    </div>
  </div>
  );
};

export default PortfolioCard;