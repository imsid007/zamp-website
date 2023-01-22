import { MENU, ZAMP_LOGO } from "@/constants/images";
import {
  CAREERS,
  HOME,
  INVESTERS,
  LOGIN,
  SIGN_UP,
  TEAM,
} from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ activeMenu }: { activeMenu?: string }) {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="fixed top-6 w-full z-[100] lg:px-6">
      <div
        className="relative z-[100]  bg-[#ffffffab] px-6 max-w-[940px]  m-auto flex justify-between items-center rounded-lg lg:max-w-[700px] "
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div
          className={`absolute z-[-1] ease-in duration-300 top-[120%]  rounded-lg  bg-white flex flex-col w-full left-0 ${
            showSlider ? "mt-0 opacity-1" : "-mt-[500px] opacity-0"
          } `}
        >
          <Link
            href={TEAM}
            className={`p-5 ${activeMenu == "Team" && "text-BLUE_LIGHT"}`}
          >
            Team
          </Link>
          <Link
            href={INVESTERS}
            className={`p-5 ${activeMenu == "Investors" && "text-BLUE_LIGHT"}`}
          >
            Investors
          </Link>
          <Link href={CAREERS} className="p-5">
            Careers
          </Link>
          <Link href={LOGIN} legacyBehavior>
            <a target="_blank" rel="noreferrer" className="p-5">
              Login
            </a>
          </Link>
          <Link href={SIGN_UP} legacyBehavior>
            <a target="_blank" rel="noreferrer">
              <button className="z-[-1] bg-black text-white py-2 px-6 mx-3 mb-5 rounded-full">
                Sign Up
              </button>
            </a>
          </Link>
        </div>
        <div>
          <Link href={HOME}>
            <Image src={ZAMP_LOGO} alt="Zamp logo" width="83" height="28" />
          </Link>
        </div>

        <div
          className="hidden mx-2 my-5 md:block mobile-menu"
          onClick={() => {
            setShowSlider(!showSlider);
          }}
        >
          <Image src={MENU} alt="Zamp logo" width="15" height="15" />
        </div>

        <div className="flex items-center text-sm md:hidden">
          <Link
            href={TEAM}
            className={`p-5 ${activeMenu == "Team" && "text-BLUE_LIGHT"}`}
          >
            Team
          </Link>
          <Link
            href={INVESTERS}
            className={`p-5 ${activeMenu == "Investors" && "text-BLUE_LIGHT"}`}
          >
            Investors
          </Link>
          <Link href={CAREERS} className="p-5">
            Careers
          </Link>
          <Link href={LOGIN} legacyBehavior>
            <a target="_blank" rel="noreferrer" className="p-5">
              Login
            </a>
          </Link>
          <Link href={SIGN_UP} legacyBehavior>
            <a target="_blank" rel="noreferrer">
              <button className="bg-black text-white py-2.5 px-6 rounded-full">
                Sign Up
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
