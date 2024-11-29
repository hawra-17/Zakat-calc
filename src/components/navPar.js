import { CiCalculator1 } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

export default function NavPar() {
  const taps = [
    { label: "Home", path: "home" },
    { label: "Calculation", path: "cardblock" },
  ];
  return (
    <>
      <nav className=" bg-slate-200 p-4 flex justify-between sticky top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <CiCalculator1 size={30} />
          <p className="font-bold">Zahah </p>
        </div>

        <div className="flex gap-x-3">
          {taps.map((tap) => (
            <Link to={`/${tap.path}`} key={tap.path}>
              {tap.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="bg-green-50 h-screen flex flex-col justify-center items-center p-44">
        <Outlet />
      </div>
    </>
  );
}
