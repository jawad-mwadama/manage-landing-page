import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
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
      </div>
    </footer>
  );
}
