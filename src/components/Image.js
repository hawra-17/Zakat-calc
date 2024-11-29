import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomDiv() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cardblock"); // Navigate to CardBlock page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="relative w-[900px] h-[450px] bg-cover bg-center rounded-xl bg-[url('https://cdn.usegalileo.ai/stability/6535ced7-47be-43f9-adee-8d0aa165f6f1.png')]">
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          {/* <h1 className="text-4xl font-bold">Give Zakat with Sadaqah</h1> */}
          <p className="mt-2 text-lg">
            We make it easy to calculate and give your Zakat
          </p>
          <button
            onClick={handleNavigate}
            className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-600"
          >
            Calculate Zakat
          </button>
        </div>
      </div>
    </div>
  );
}
