import React from "react";

function FeatureCard({ photo, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs border p-4 rounded-lg bg-white shadow-md ">
      {/* Image */}
      <img src={photo} className="w-full h-[15-px] object-cover rounded-xl" />
      {/* Description */}
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
