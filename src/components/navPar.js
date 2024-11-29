import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function NavPar() {
  const taps = ["Home", "About", "Conact"];
  return (
    <nav className=" bg-slate-200 p-4 flex justify-between sticky top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <CiCalculator1 size={30} />
        <p className="font-bold">Zahah </p>
      </div>

      <div className="flex gap-x-3">
        {taps.map((val) => (
          <Link to={`/${val.toLowerCase()}`} key={val}>
            {val}
          </Link>
        ))}
      </div>
      {/* map using for cutshort for loop */}
    </nav>
  );
}
