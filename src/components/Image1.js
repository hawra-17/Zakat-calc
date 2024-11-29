import FeatureCard from "./FeatureCard.js";
import Image from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";

export default function AllF() {
  return (
    <div className=" flex flex-warp justify-center gap-3 bg-green-50">
      <FeatureCard photo={Image} description="Poor and needy people" />
      <FeatureCard photo={Image2} description="Freeing slaves" />
      <FeatureCard photo={Image3} description="Debt-ridden" />
      <FeatureCard photo={Image4} description="Stranded travelers" />
    </div>
  );
}
