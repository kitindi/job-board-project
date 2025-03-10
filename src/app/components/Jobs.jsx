import React from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <section>
      <div className="pb-3">
        {/* <h2 className="text-center text-xl font-semibold mb-3 text-slate-800">Your Next Career Move Starts Here</h2> */}
        <p className="text-center text-lg text-slate-700">Explore exclusive job opportunities from trusted companies.</p>
      </div>
      <div className="max-w-3xl mx-auto px-10 py-4 rounded-md mt-5 bg-slate-100">
        <p className="text-gray-600 text-lg mb-5 font-bold">Recent Jobs</p>
        <div className="flex flex-col gap-3">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
