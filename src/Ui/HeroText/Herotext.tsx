function Herotext({ children }: any) {
  return (
    <div className="flex w-full min-w-0 flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
      <div className="flex flex-col items-center p-2 md:items-start">
        <h2 className="text-3xl font-bold tracking-wide text-blue-950 sm:text-4xl lg:text-5xl/14">
          Bring everyone together to build better products.
        </h2>
        <p className="mx-auto max-w-sm py-6 text-base/8 text-slate-400 md:mx-0 md:pr-12">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        {children}
      </div>
    </div>
  );
}

export default Herotext;
