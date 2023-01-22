import { ZAMP_LOGO } from "@/constants/images";
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

export default function Header({ activeMenu }: { activeMenu?: string }) {
  return (
    <div className="fixed top-6 w-full z-[100]">
      <div
        className=" bg-[#ffffffab] px-6 max-w-[940px] m-auto flex justify-between items-center rounded-lg "
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div>
          <Link href={HOME}>
            <Image src={ZAMP_LOGO} alt="Zamp logo" width="83" height="28" />
          </Link>
        </div>
        <div className="flex items-center text-sm">
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
