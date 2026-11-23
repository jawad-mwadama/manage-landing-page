import FooterLinks from "../../ui/FooterText/FooterLinks";
import InputWithCopyright from "../../ui/FooterText/InputWithCopyright";
import LogoWithLinks from "../../ui/FooterText/LogoWithLinks";

interface NavLink {
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

  return (
    <footer className="bg-blue-950 text-white">
      <div className="flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-6 sm:flex-row sm:gap-0 sm:px-6 md:mx-auto md:justify-between lg:px-8">
        <LogoWithLinks />

        <FooterLinks />

        <InputWithCopyright />
      </div>
    </footer>
  );
}
