import avatarAli from "../../assets/images/avatar-ali.png";
import avatarAnisha from "../../assets/images/avatar-anisha.png";
import avatarRichard from "../../assets/images/avatar-richard.png";
import avatarShanai from "../../assets/images/avatar-shanai.png";
import Button from "../../ui/Button";
import TestimonialHeader from "../../ui/TestimonialText/TestimonialHeader";

interface Testimonial {
  id: number;
  avatarImg: string;
  avatarName: string;
  avatarTestimonial: string;
}

const testimonialContent: Testimonial[] = [
  {
    id: 1,
    avatarImg: avatarAnisha,
    avatarName: "Anisha Li",
    avatarTestimonial:
      "Manage has supercharged our teams workflow. They maintain visibility on larger milestones at all times keeps everyone motivated ",
  },
  {
    id: 2,
    avatarImg: avatarAli,
    avatarName: "Ali Bravo",
    avatarTestimonial:
      "We have been able to cancel all other subscriptions since using Manage. There is no more cross-chanel confusion and everyone is much more focused.",
  },
  {
    id: 3,
    avatarImg: avatarRichard,
    avatarName: "Richard Watts",
    avatarTestimonial:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending the to everyone i talk to!",
  },
  {
    id: 4,
    avatarImg: avatarShanai,
    avatarName: "Shanai Gough",
    avatarTestimonial:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the team in-sync without being intrusive.",
  },
];

export default function Testimonials() {
  return (
    <section>
      {/* text side */}
      <div className="mt-20 mb-20 flex w-full flex-col items-center text-center md:mt-28 md:items-center md:text-center">
        <div className="mx-0 flex items-center justify-center p-2">
          <TestimonialHeader />
        </div>
      </div>

      {/* testimonial cards */}
      <div className="mt-8 max-w-full flex-col justify-center gap-12 p-2 sm:flex md:flex-row lg:mt-12">
        {testimonialContent.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="relative mt-18 rounded-md bg-slate-300/20 p-2 text-center md:mt-0"
            >
              <img
                src={testimonial.avatarImg}
                className="absolute top-[-5%] left-1/2 h-16 -translate-x-1/2 -translate-y-1/2"
                alt="/"
              />
              <span className="mt-8 block text-center font-bold text-blue-950">
                {testimonial.avatarName}
              </span>
              <p className="my-4 tracking-wide text-slate-400">
                {testimonial.avatarTestimonial}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mx-auto flex justify-center pt-12">
        <Button />
      </div>
    </section>
  );
}
