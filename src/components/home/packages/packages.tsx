import React from "react";

const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24  mx-80 text-white">

      <div className="flex flex-col border border-gray-800 rounded-2xl p-20 bg-gradient-to-tr from-[#000] to-[#1e1e1e75]   shadow-md text-center">
        <h3 className="text-xl font-semibold tracking-wider mb-4">STANDARD PACKAGE</h3>
        <p className="text-sm text-gray-400 mb-2">Billed monthly</p>
        <h2 className="text-3xl font-bold mb-6">$1,000</h2>
        <ul className="flex-1 space-y-4 text-sm text-gray-300">
          <li className="text-red-400">  <span className="text-red-600">✅</span> One request at a time</li>
          <li>✔️ Unlimited revisions</li>
          <li>✔️ 2 days average turnaround</li>
          <li>✔️ Design + development</li>
          <li>✔️ 24/7 slack communication</li>
          <li>✔️ Pause or cancel anytime</li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full ">
          Subscribe
        </button>
      </div>

      {/* Ⅰ ➊ ⓵ ✅  ✔️ ☑*/}
      <div className="flex flex-col border border-gray-800 rounded-2xl p-20 bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#1E1E1E] text-center">
        <h3 className="text-xl font-semibold tracking-wider mb-4">PRO PACKAGE</h3>
        <p className="text-sm text-gray-400 mb-2">Billed monthly</p>
        <h2 className="text-3xl font-bold mb-6">$1,000</h2>
        <ul className="flex-1 space-y-4 text-sm text-gray-300">
          <li>✔️ Two requests at a time</li>
          <li>✔️ Unlimited revisions</li>
          <li>✔️ 2 days average turnaround</li>
          <li>✔️ Design + development</li>
          <li>✔️ 3D design + animation</li>
          <li>✔️ 24/7 slack communication</li>
          <li>✔️ Pause or cancel anytime</li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Pricing;
