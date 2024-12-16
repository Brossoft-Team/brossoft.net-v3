"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (pathname === "/team") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [pathname]);

  return (
    <header className="w-full flex justify-between h-[75px] items-center px-6 md:px-[75px]">
      <div className="flex md:hidden justify-between w-full items-center">
        <span className="text-3xl font-bold font-ephesis ml-6">B</span>
      </div>

      <ul className="hidden md:flex space-x-8">
        <li>
          <Link href={"/"} className="text-md">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about-us"} className="text-md">
            About Us
          </Link>
        </li>
      </ul>
      <div
        className={cn(
          "logo text-xl font-bold hidden md:flex",
          animate ? "headerAnimate" : "header"
        )}
      >
        BROSSOFT
      </div>
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link href={"/team"} className="text-md">
            Team
          </Link>
        </li>
        <li>
          <Link href={"/works"} className="text-md">
            Works
          </Link>
        </li>
      </ul>
    </header>
  );
}
