import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";

export default function LogoWithLinks() {
  return (
    <div className="flex flex-col gap-[8vw]">
      <span className="rounded-lg bg-white px-2 pt-2">
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
  );
}
