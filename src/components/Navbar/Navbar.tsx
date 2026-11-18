import logo from "../../assets/images/logo.svg";

interface NavLink {
  name: string;
  href: string;
}

function Navbar() {
  const navLinks: NavLink[] = [
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Communities",
      href: "/communities",
    },
  ];

  return (
    <header className="py-4">
      <nav className="mx-auto flex w-6xl items-center justify-between gap-4">
        <img src={logo} className="object-fit h-6" alt="manageLogo" />
        <div>
          <ul className="flex items-center justify-between gap-5">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.name}>
                  <a href={navLink.href}>{navLink.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="rounded-full bg-orange-400 p-3 text-white shadow-xl">
          <span>Get started</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
