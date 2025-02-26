import React from "react";

const Hero = () => {
  return (
    <section className="py-10">
      <h1 className="text-4xl text-center font-bold text-slate-900">
        Find Your Next <br />
        Dream Job
      </h1>
      <p className="text-lg text-center text-slate-600 mt-5">Connecting talent with top employers for career success.</p>
      <div className=" flex justify-center py-10">
        <form action="" className="p-5 flex items-center gap-2 max-w-md">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search job."
            className="border border-gray-400 px-4 py-2 w-full md:w-[400px] rounded-md focus:outline-none"
          />
          <button className="bg-blue-600 py-2 px-3 rounded-md text-white">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
