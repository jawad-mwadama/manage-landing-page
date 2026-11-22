import Button from "../../ui/Button";

export default function Cta() {
  return (
    <div className="mt-20 flex justify-between bg-orange-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
        <h3 className="mb-8 max-w-md text-3xl font-bold text-white sm:mb-0">
          Simplify how your team works today.
        </h3>
        <Button />
      </div>
    </div>
  );
}
