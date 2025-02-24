import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-10 ">
      <div>
        <img className="size-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="" />
      </div>
      <div className="flex-grow">
        <div>Spotify</div>
        <div>Product designer</div>
        <div>Remote &middot; New Yoark, US &middot; Full-time</div>
      </div>
      <div>1 week ago</div>
    </div>
  );
};

export default JobCard;
