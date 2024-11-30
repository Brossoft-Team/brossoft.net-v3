"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useEffect, useRef} from "react";

export default function ExpertAtItem({setPosition, title, description}) {
    const itemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        // Add listeners to the container instead of Swiper element
        const item = itemRef.current;
        if (item) {
            item.addEventListener('mousedown', handleMouseMove);

            return () => {
                item.addEventListener('mousedown', handleMouseMove);
            };
        }
    }, [])
    return (
        <div className={"bg-[#141414] p-10 h-[300px] justify-center items-center rounded-xl"} ref={itemRef}
             onMouseDown={() => console.log("yeter")}>
            <h3 className={"font-medium text-4xl"}>{title}</h3>
            <p className={"text-[#b0b0b0]"}>{description}</p>
        </div>
    );
}