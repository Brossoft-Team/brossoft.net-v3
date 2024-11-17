"use client";

import {motion} from "framer-motion";
import FAQItem from "@/components/faq-item";
import {faqData} from "@/lib/data/faqData";

export default function FAQ() {
    return (
        <div className="min-h-screen text-white w-full">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="mb-12 text-6xl font-light"
                >
                    FAQ&apos;s
                </motion.h1>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="space-y-4"
                >
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}