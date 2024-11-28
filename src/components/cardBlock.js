import { useState } from "react";
import Ginput from "./Ginput";

export default function CardBlock() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-xl font-bold"> Calculate your zakah</h1>
      <InputHolders />
    </div>
  );
}

const InputHolders = () => {
  // () if i want to send parmeters ,
  const [cash, setCash] = useState(0);
  const [Gold, setGold] = useState(0);
  const [Silver, setSilver] = useState(0);
  const [result, setResult] = useState(0);

  const goldNisab = 85 * 225; // 85 grams of gold * 225 SAR per gram
  const silverNisab = 595 * 3; // 595 grams of silver * 3 SAR per gram

  const Calculate = () => {
    // Calculate total wealth in SAR
    const totalWealth = Number(cash) + Number(Gold) + Number(Silver);

    // Calculate the Nisab value in SAR
    const nisabValue = Math.min(goldNisab, silverNisab);

    // Calculate Zakat if total wealth exceeds Nisab
    if (totalWealth >= nisabValue) {
      setResult(totalWealth * 0.025); // 2.5% of total wealth as Zakat
    } else {
      setResult(0); // No Zakat if below Nisab
    }
  };

  return (
    <div className="bg-white shadow-xl flex flex-col p-6 gap-4 w-96 ">
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
        topText="Sliver saving"
        placeH="Enter your silver"
        setValue={setSilver}
        value={Silver}
      />
      <Buttons f={Calculate} />

      <div className="flex gap-2">
        <p> the result is </p>
        {result.toFixed(2)}
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
      Calculate Zahah
    </button>
  );
};
