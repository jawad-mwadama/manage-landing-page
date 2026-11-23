import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";

interface NavLink {
  name: string;
  href: string;
}

interface CommunicationLinks {
  name: string;
  href: string;
}

export default function Footer() {
  const navLinks: NavLink[] = [
    { name: "Pricing", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Communities", href: "/communities" },
  ];

  const communicationLinks: CommunicationLinks[] = [
    { name: "Careers", href: "/careers" },
    { name: "Community", href: "/communitiy" },
    { name: "Privacy Policy", href: "/privacyPolicy" },
  ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
        {/* logo and  socials side */}
        <div className="flex flex-col gap-[8vw]">
          <span>
            <img src={logo} alt="" />
          </span>

          <span className="flex justify-center gap-4">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </span>
        </div>

        {/* footer links */}
        <ul className="flex flex-col gap-3">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <a
                href={navLink.href}
                className="text-sm font-medium text-white transition-colors hover:text-slate-500"
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>

        {/* communicationLinks */}
        <ul className="flex flex-col gap-3">
          {communicationLinks.map((communicationLink) => (
            <li key={communicationLink.name}>
              <a
                href={communicationLink.href}
                className="text-sm font-medium text-white transition-colors hover:text-slate-500"
              >
                {communicationLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
