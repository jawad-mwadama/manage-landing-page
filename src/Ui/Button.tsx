export default function Button() {
  const base =
    "hover cursor-pointer rounded-full bg-orange-400 px-6 py-3 text-white duration-300 ease-in-out hover:scale-90";

  return (
    <button className={`${base}`}>
      <span>Get started</span>
    </button>
  );
}
