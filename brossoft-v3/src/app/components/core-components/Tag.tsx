import React from "react";
import { cn } from "@/app/library/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Tag: React.FC<ButtonProps> = ({
  label,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-primaryColor rounded-full text-textColor font-bold   px-8 h-11 shadow-[3px_3px_00] border-2  border-[#282825] ",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Tag;
