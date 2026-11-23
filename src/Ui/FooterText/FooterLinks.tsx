interface CommunicationLinks {
  name: string;
  href: string;
}
interface NavLink {
  name: string;
  href: string;
}

const communicationLinks: CommunicationLinks[] = [
  { name: "Careers", href: "/careers" },
  { name: "Community", href: "/communitiy" },
  { name: "Privacy Policy", href: "/privacyPolicy" },
];

const navLinks: NavLink[] = [
  { name: "Pricing", href: "/" },
  { name: "Product", href: "/product" },
  { name: "About us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Communities", href: "/communities" },
];
export default function FooterLinks() {
  return (
    <div className="flex flex-row gap-x-8 md:flex">
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
  );
}
