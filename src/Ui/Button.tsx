type Variant = "primary" | "secondary";

interface Variants {
  primary: string;
  secondary: string;
}

interface ButtonProps {
  variant?: Variant;
}

export default function Button({ variant = "primary" }: ButtonProps) {
  const base =
    "hover cursor-pointer rounded-full px-4 py-3 duration-300 ease-in-out hover:scale-90";

  const variants: Variants = {
    primary: "bg-orange-400 text-white",
    secondary: "bg-white text-orange-400 ",
  };
  return (
    <button className={`${base} ${variants[variant]}`}>
      <span>Get started</span>
    </button>
  );
}
