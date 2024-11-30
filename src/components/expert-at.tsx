"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper/modules";
import {ChevronsLeftRight} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import ExpertAtItem from "@/components/expert-item";
import expertAt from "@/lib/data/expert-at";

export default function ExpertAt() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isInsideSwiper, setIsInsideSwiper] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleTouchMove = (swiper, e: MouseEvent) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
        return swiper;
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isInsideSwiper) {
                setPosition({x: e.clientX, y: e.clientY});
            }
        };

        const handleMouseEnter = () => {
            setIsInsideSwiper(true);
        };

        const handleMouseLeave = () => {
            setIsInsideSwiper(false);
        };

        // Add listeners to the container instead of Swiper element
        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            container.addEventListener('mousedown', handleMouseMove);

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.addEventListener('mousedown', handleMouseMove);
            };
        }
    }, [isInsideSwiper]);

    return (
        <div
            ref={containerRef}
            className="w-full text-white relative overflow-hidden"
            id={"expert-at"}
        >
            {isInsideSwiper && (
                <div
                    className="fixed flex items-center justify-center pointer-events-none"
                    style={{
                        left: position.x,
                        top: position.y,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 50,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: '56px',
                        height: '56px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        cursor: 'none'
                    }}
                >
                    <ChevronsLeftRight size={36} color="black"/>
                </div>
            )}
            <div className="container mx-auto px-4 py-20">
                <Swiper
                    modules={[EffectFade, Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    className="mySwiper"
                    onTouchMove={handleTouchMove}
                >
                    {expertAt.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ExpertAtItem title={item.title}
                                          description={item.description}
                                          icon={item.icon}
                                          setPosition={setPosition}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}