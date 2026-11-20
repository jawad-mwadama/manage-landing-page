import logo from "../../assets/images/logo.svg";
import Button from "../../ui/Button";

interface NavLink {
  name: string;
  href: string;
}

function Navbar() {
  const navLinks: NavLink[] = [
    { name: "Pricing", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Communities", href: "/communities" },
  ];

  return (
    <header className="py-4 md:py-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <img src={logo} className="h-6 w-auto shrink-0" alt="manageLogo" />

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <a
                href={navLink.href}
                className="text-sm font-medium text-blue-950 transition-colors hover:text-slate-500"
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
