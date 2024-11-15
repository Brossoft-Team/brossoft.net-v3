"use client"
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation} from 'swiper/modules';
import {ArrowLeft, ArrowRight, Quote} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

interface Testimonial {
    content: string;
    author: string;
    position: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        content: "I recently engaged in a website development project with an outstanding team, and the results were nothing short of exceptional. The team exhibited an exemplary level of professionalism, expertise, and dedication throughout the entire process.",
        author: "Joe Glodberg",
        position: "CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
        content: "The attention to detail and creative solutions provided by the team exceeded our expectations. They transformed our vision into reality with remarkable precision and innovation.",
        author: "Sarah Chen",
        position: "Creative Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
        content: "Working with this team was a game-changer for our business. Their strategic approach and technical expertise helped us achieve results we didn't think were possible.",
        author: "Michael Torres",
        position: "Product Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    }
];

function SwiperComp() {
    return (
        <div className="min-h-screen w-full text-white flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight">
                        <span className="text-gray-500">CUSTOMER</span><br/>
                        REVIEWS ABOUT<br/>
                        OUR WORK
                    </h1>
                </div>

                <div className="relative w-full flex flex-col items-end">
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        className="w-full max-w-3xl"
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-zinc-900 rounded-3xl p-10 shadow-xl">
                                    <Quote className="text-red-500 w-12 h-12 mb-6"/>
                                    <p className="text-xl md:text-2xl leading-relaxed mb-8">
                                        {testimonial.content}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{testimonial.author}</h3>
                                            <p className="text-gray-400">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="relative right-0 flex gap-3 z-10 w-48 h-24">
                        <button
                            className="swiper-button-prev transform transition-all duration-300 hover:scale-110 w-12 h-12 border border-1 border-gray-500 disabled:border-[#6B7280] border-solid rounded-full flex items-center justify-center backdrop-blur-sm group"
                            style={{width: "48px", height: "48px"}}>
                            <ArrowLeft className="text-white group-hover:text-white/90" strokeWidth={1}
                                       style={{width: "24px", height: "24px"}}/>
                        </button>
                        <button
                            className="swiper-button-next transform transition-all duration-300 hover:scale-110 w-12 h-12 border border-1 border-[#6B7280] border-solid rounded-full flex items-center justify-center backdrop-blur-sm group"
                            style={{width: "48px", height: "48px"}}>
                            <ArrowRight className="text-white group-hover:text-white/90 " strokeWidth={1}
                                        style={{width: "24px", height: "24px"}}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwiperComp;