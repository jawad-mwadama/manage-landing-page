// import Button from "../../ui/Button";
import illustration from "../../assets/images/illustration-intro.svg";
import Button from "../../ui/Button";
// import Herotext from "../../ui/Herotext";

export default function Hero() {
  return (
    // <div className="mt-8 flex flex-col items-center justify-between gap-40 md:mt-12 md:flex md:flex-row lg:mt-24 lg:flex">
    //   {/* text sode */}
    //   <div className="w-full md:w-1/2">
    //     <Herotext>
    //       <Button />
    //     </Herotext>
    //   </div>

    //   <div className="flex w-full justify-center md:w-1/2">
    //     <img
    //       src={illustration}
    //       className="h-96 w-auto object-contain lg:h-1/2"
    //       alt="metric illustration"
    //     />
    //   </div>
    // </div>

    <div className="mt-8 flex w-full flex-col-reverse items-center justify-between gap-8 overflow-x-clip px-4 md:mt-12 md:flex-row md:items-center md:gap-12 md:px-6 lg:mt-24 lg:gap-16">
      {/* Text side */}
      <div className="flex w-full min-w-0 flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
        <div className="flex flex-col items-center p-3 md:items-start">
          <h2 className="text-3xl font-bold tracking-wide text-blue-950 sm:text-4xl lg:text-5xl/14">
            Bring everyone together to build better products.
          </h2>
          <p className="mx-auto max-w-sm py-6 text-base/8 text-slate-400 md:mx-0 md:pr-12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button />
        </div>
      </div>

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
