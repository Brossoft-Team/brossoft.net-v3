"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/library/utils';
import { usePathname } from 'next/navigation';


export default function Header(): JSX.Element {
    const pathname = usePathname();
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      if (pathname === '/team') {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }, [pathname]);
    return (
        <header className="w-full flex justify-between h-[75px] items-center px-[75px]">
            <ul className='flex space-x-8'>
                <li>
                    <Link href='/' className='text-md'>Home</Link>
                </li>
                <li>
                    <Link href='/about-us' className='text-md'>About Us</Link>
                </li>
            </ul>
            <div className={cn("logo text-xl", animate ? 'headerAnimate' : 'header' )}>BROSSOFT</div>
            <ul className='flex space-x-8'>
                <li>
                    <Link href='/team' className='text-md'>Team</Link>
                </li>
                <li>
                    <Link href='/works' className='text-md'>Works</Link>
                </li>
            </ul>
        </header>
    );
}