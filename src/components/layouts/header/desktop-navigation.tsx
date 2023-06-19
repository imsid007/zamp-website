import {
  CAREERS,
  INVESTERS,
  LOGIN,
  SIGN_UP,
  TEAM,
} from "@/constants/navigation";
import Link from "next/link";

const DesktopNavigation = ({
  activeMenu,
}: {
  activeMenu: string | undefined;
}) => {
  return (
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
      <Link href={CAREERS} className="" legacyBehavior>
        <a target="_blank" rel="noreferrer" className="p-5">
          Careers
        </a>
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
  );
};

export default DesktopNavigation;
