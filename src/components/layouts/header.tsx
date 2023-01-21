import { ZAMP_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-6 w-full z-[100]">
      <div
        className=" bg-[#ffffffab] px-6 max-w-[940px] m-auto flex justify-between items-center rounded-lg "
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div>
          <Image src={ZAMP_LOGO} alt="Zamp logo" width="83" height="28" />
        </div>
        <div className="flex items-center text-sm">
          <Link href="/team" className="p-5">
            Team
          </Link>
          <Link href="/investors" className="p-5">
            Investors
          </Link>
          <Link href="#" className="p-5">
            Careers
          </Link>
          <Link href="https://dashboard.zamp.finance/auth/login" legacyBehavior>
            <a target="_blank" rel="noreferrer" className="p-5">
              Login
            </a>
          </Link>

          <Link
            href="https://dashboard.zamp.finance/auth/signup"
            legacyBehavior
          >
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
