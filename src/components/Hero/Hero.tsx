import Button from "../../Ui/Button";
import illustration from "../../assets/images/illustration-intro.svg";

export default function Hero() {
  return (
    <div className="mt-8 flex-col items-center justify-between gap-40 md:mt-12 md:flex md:flex-row lg:mt-18 lg:flex">
      {/* text sode */}
      <div className="lh-1 w-110 p-3 tracking-wider">
        <h2 className="text-5xl/14 font-bold text-blue-950">
          Bring everyone together to build better products.
        </h2>
        <p className="py-6 pr-12 text-base/8 text-slate-400 sm:pr-20">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button />
      </div>

      <div className="mx-auto">
        <img
          src={illustration}
          className="h-84 w-auto object-contain lg:h-1/2"
          alt="metric illustration"
        />
      </div>
    </div>
  );
}
