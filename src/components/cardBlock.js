import { useState } from "react";
import Ginput from "./Ginput";

export default function CardBlock() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 className="text-xl font-bold">Calculate your Zakat</h1>
      <InputHolders />
    </div>
  );
}

const InputHolders = () => {
  const [cash, setCash] = useState(0);
  const [Gold, setGold] = useState(0);
  const [Silver, setSilver] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const goldNisab = 85 * 225; // 85 grams of gold * 225 SAR per gram
  const silverNisab = 595 * 3; // 595 grams of silver * 3 SAR per gram

  const validateInputs = (value) => {
    return !isNaN(value) && value >= 0; // Check if the value is a non-negative number
  };

  const Calculate = () => {
    // Validate inputs
    if (
      !validateInputs(cash) ||
      !validateInputs(Gold) ||
      !validateInputs(Silver)
    ) {
      setError("Please enter valid numeric values for all fields.");
      return;
    }

    setError(""); // Clear any previous error message

    // Calculate total wealth in SAR
    const totalWealth = Number(cash) + Number(Gold) + Number(Silver);

    // Calculate the Nisab value in SAR
    const nisabValue = Math.min(goldNisab, silverNisab);

    // Calculate Zakat if total wealth exceeds Nisab
    if (totalWealth >= nisabValue) {
      setResult(totalWealth * 0.025); // 2.5% of total wealth as Zakat
    } else {
      setResult("No Zakat is required"); // No Zakat if below Nisab
    }
  };

  return (
    <div className="bg-white shadow-xl flex flex-col p-6 gap-4 w-96">
      <Ginput
        topText="Cash saving"
        placeH="Enter your cash"
        setValue={setCash}
        value={cash}
      />
      <Ginput
        topText="Gold saving"
        placeH="Enter your gold"
        setValue={setGold}
        value={Gold}
      />
      <Ginput
        topText="Silver saving"
        placeH="Enter your silver"
        setValue={setSilver}
        value={Silver}
      />

      <Buttons f={Calculate} />

      {/* Display error message if validation fails */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display the result */}
      <div className="flex gap-2 mt-4">
        <p>The result is:</p>
        {typeof result === "number" ? `${result.toFixed(2)} SAR` : result}{" "}
        {/* Show "No Zakat is required" if the result is a string */}
      </div>
    </div>
  );
};

const Buttons = ({ f }) => {
  return (
    <button
      onClick={f}
      className="bg-green-500 hover:scale-110 transition-all rounded-xl p-2"
    >
      Calculate Zakah
    </button>
  );
};
