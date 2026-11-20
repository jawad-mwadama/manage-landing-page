interface OverviewTextProps {
  number: string;
  title: string;
  description: string;
}

export default function OverviewText({
  number,
  title,
  description,
}: OverviewTextProps) {
  return (
    <div className="flex w-full min-w-0 items-start gap-4">
      <span className="shrink-0 rounded-full bg-orange-400 px-6 py-3 font-bold text-white">
        {number}
      </span>
      <div className="flex min-w-0 flex-col items-start gap-2">
        <h3 className="font-bold text-blue-950">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}
