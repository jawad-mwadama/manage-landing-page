import Navbar from "./components/Navbar/Navbar";
import tabletImg from "./assets/images/bg-tablet-pattern.svg";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Testimonials from "./components/Testimonials/Testimonials";
import Cta from "./components/CallToAction/Cta";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-gray-50 bg-cover bg-center bg-no-repeat text-base">
      <img
        src={tabletImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-19 z-0 h-auto w-105 select-none md:w-162.5 lg:w-170"
      />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Overview />
        </main>
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
