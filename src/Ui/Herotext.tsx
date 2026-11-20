function Herotext({ children }: any) {
  return (
    <div className="lh-1 p-3">
      <h2 className="text-5xl/14 font-bold tracking-wide text-blue-950">
        Bring everyone together to build better products.
      </h2>
      <p className="max-w-sm py-6 pr-12 text-base/8 text-slate-400">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      {children}
    </div>
  );
}

export default Herotext;
