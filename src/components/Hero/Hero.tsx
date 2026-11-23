// import Button from "../../ui/Button";
import illustration from "../../assets/images/illustration-intro.svg";
import Button from "../../ui/Button";
import Herotext from "../../ui/HeroText/Herotext";
// import Herotext from "../../ui/Herotext";

export default function Hero() {
  return (
    <div className="mt-8 flex w-full flex-col-reverse items-center justify-between gap-8 overflow-x-clip px-1 md:mt-12 md:flex-row md:items-center md:gap-12 md:px-6 lg:mt-24 lg:gap-16">
      {/* Text side */}
      <Herotext>
        <Button />
      </Herotext>

      {/* Image side */}
      <div className="flex w-full min-w-0 justify-center md:w-1/2">
        <img
          src={illustration}
          className="block h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-xl xl:max-w-2xl"
          alt="metric illustration"
        />
      </div>
    </div>
  );
}
