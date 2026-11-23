import OverviewText from "../../ui/OverviewText/OverviewText";

const overView = [
  {
    number: "01",
    title: "Track company wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at all the milestones level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export default function Overview() {
  return (
    <section className="mt-20 flex w-full flex-col items-start justify-between gap-12 px-4 md:mt-28 md:flex-row md:gap-12 md:px-6 lg:gap-16">
      {/* Left column: Heading & intro */}
      <div className="flex w-full min-w-0 flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
        <h2 className="text-3xl font-bold tracking-wide text-blue-950 sm:text-4xl lg:text-5xl/14">
          What's different about Manage?
        </h2>
        <p className="mx-auto max-w-sm py-6 text-base/8 text-slate-400 md:mx-0 md:pr-12">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      {/* Right column: Numbered list */}
      <div className="flex w-full min-w-0 flex-col gap-8 md:w-1/2">
        {overView.map((overview) => (
          <OverviewText
            key={overview.number}
            number={overview.number}
            title={overview.title}
            description={overview.description}
          />
        ))}
      </div>
    </section>
  );
}
