import React from 'react';
import {cn} from "@/lib/utils";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
                                                                          type,
                                                                          placeholder,
                                                                          value,
                                                                          onChange,
                                                                          className = '',
                                                                          ...props
                                                                      }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn('bg-white rounded-xl text-textColor font-semibold py-3 focus:outline-none outline-none mb-6 px-4 shadow-[3px_3px_rgba(40,40,37)] border-2 border-[#282825] border-solid hover:shadow-[6px_6px_rgba(40,40,37)] duration-200', className)}
            {...props}
        />
    );
};

export default Input;
