import React from "react";

export default function Ginput({ topText, placeH, value, setValue }) {
  return (
    <div className="flex flex-col">
      <p> {topText} </p>
      <input
        className="bg-gray-50 border-gray-300 w-full p-2 rounded-xl"
        placeholder={placeH}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
