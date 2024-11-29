import StyledDiv from "./Image.js";
import Image1 from "./Image1.js";
import All from "./Image1.js";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <StyledDiv />
      <p className="flex items-center font-bold justify-center text-2xl">
        To who we give zakat ?
      </p>
      <All />
    </div>
  );
}
