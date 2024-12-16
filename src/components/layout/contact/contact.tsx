import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#101010] p-8 rounded-2xl text-gray-200">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
    <div className="lg:w-1/2">
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-notosans text-white mb-8">
        Let’s Collaborate on Your Project
      </h2>
      <p className="text-base sm:text-lg text-gray-400 mb-6">
        Got an idea? Let’s turn it into reality. Share your vision, and I’ll help design and build it.
      </p>
      <p className="text-base sm:text-lg text-gray-400 mb-6">
        Once you reach out, I’ll respond within 2-3 business days with an approximate quote or any questions for further details. From there, we can schedule a call to discuss the project.
      </p>
      <div>
        <p className="text-gray-500 text-sm mb-2">Send me an email:</p>
        <a
          href="mailto:info@brossoft.com"
          className="text-base sm:text-lg  text-white hover:underline"
        >
          info@brossoft.com
        </a>
      </div>
    </div>

    <form className="bg-[#181818] p-6 rounded-lg w-full lg:w-1/2">
      <Input
        type="text"
        placeholder="Your Name"
        className="w-full mb-4 bg-[#202020] text-white placeholder-gray-500 border border-gray-600 focus:border-white rounded-2xl px-4 py-3"
      />
      <Input
        type="email"
        placeholder="Your Email"
        className="w-full mb-4 bg-[#202020] text-white placeholder-gray-500 border border-gray-600 focus:border-white rounded-2xl px-4 py-3"
      />
      <Input
        type="text"
        placeholder="Subject"
        className="w-full mb-4 bg-[#202020] text-white placeholder-gray-500 border border-gray-600 focus:border-white rounded-2xl px-4 py-3"
      />
      <textarea
        placeholder="Your Message"
        className="w-full h-32 bg-[#202020] text-white placeholder-gray-500 border  focus:border-white rounded-2xl px-4 py-3 mb-6 resize-none"
      ></textarea>
      <Button
        label="Send Message"
        className="w-full bg-white text-black   py-3 rounded-2xl hover:translate-x-0 hover:translate-y-0 hover:shadow-none "
      />
    </form>
  </div>
</div>

  
  );
};

export default Contact;
