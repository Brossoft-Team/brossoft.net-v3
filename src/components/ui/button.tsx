import React from 'react';
import {cn} from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className = '', ...props}) => {
    return (
        <button
            onClick={onClick}
            className={cn('bg-primaryColor rounded-xl text-textColor font-bold py-1 px-8 h-14 shadow-[3px_3px_rgba(40,40,37)] border-2 border-[#282825] border-solid hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_rgba(40,40,37)] duration-200', className)}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;