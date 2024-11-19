"use client";

import {AnimatePresence, motion} from "framer-motion";
import {Plus} from "lucide-react";
import {useState} from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({question, answer}: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="bg-[#181818] px-4 rounded-xl"
        >
            <button
                className="flex w-full items-center justify-between py-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl font-light">{question}</span>
                <motion.div
                    animate={{rotate: isOpen ? 45 : 0}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                >
                    <Plus className="h-6 w-6"/>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-neutral-400">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}