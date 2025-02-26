import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm  relative">
      <div className="absolute top-4 right-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#e5e7eb" fill="#e5e7eb">
          <path
            d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="flex items-center gap-10">
        <div className="content-center">
          <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="" />
        </div>
        <div className="grow md:flex">
          <div className="grow  ">
            <div className="text-gray-500">Spotify</div>
            <div className="font-bold text-lg mb-2">Product designer</div>
            <div className="text-sm text-gray-400">Remote &middot; New Yoark, US &middot; Full-time</div>
          </div>
          <div className="content-end text-sm text-gray-500">1 week ago</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
