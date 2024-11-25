import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className=" text-white min-h-screen flex items-center  px-6 md:px-16 py-12 md:py-24">
      <div className="max-w-3xl">
        <h1>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-purple-400">
            merheba
          </span>
        </h1>
        <h1 className="text-5xl md:text-6xl font-serif mb-8">ABOUT US</h1>
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            Headquartered in Los Angeles, our team is dedicated to driving
            conversions and delivering tangible value to our clients. We are
            fueled by our passion for creating distinctive experiences that set
            you apart from the sea of ordinary brands in today's market.
          </p>
          <p>
            We take the time to deeply understand your business, allowing us to
            execute on your mission most effectively.
          </p>
        </div>
        <div className="mt-8 flex items-center">
          <a
            href="#"
            className="text-lg font-medium hover:underline flex items-center"
          >
            Read more
            <span className="ml-2 rounded  text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
