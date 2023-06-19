import { ROMA_LOGO, SEQUOIA_LOGO } from "@/constants/images";
import { SIGN_UP_ROMA } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const RomaHeroBanner = () => {
  return (
    <div className="w-full min-h-screen text-center justify-center p-6">
      <div className="motion-animation">
        <div className="md:max-w-[50%] m-auto">
          <Image
            src={ROMA_LOGO}
            className="m-auto mt-44 md:mt-28"
            alt="roma logo"
            width={375}
            height={84}
          />
        </div>
        <h2 className="mt-12 font-light text-[30px] m-auto sm:text-[20px] sm:max-w-[60%] sm:mt-6">
          {`The only global banking solution you'll need`}
        </h2>
        <h3 className="text-[#717171] my-6 font-light max-w-[750px] m-auto sm:text-xs sm:my-4">
          A regulated and compliant banking solution for traditional and digital
          assets so you can stay focused on what you do best.
        </h3>
        <Link href={SIGN_UP_ROMA} legacyBehavior className="mt-10">
          <a target="_blank" rel="noreferrer">
            <button className="bg-black text-white py-2 px-6 rounded-full ">
              Sign up
            </button>
          </a>
        </Link>
        <div className="flex items-center justify-center my-16 sm:my-8 sm:flex-col motion-">
          <span className="text-GRAY_3 text-lg md:text-sm">Backed by</span>
          <Image
            src={SEQUOIA_LOGO}
            alt="sequoia logo"
            className="ml-4 sm:ml-0"
            width={110}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default RomaHeroBanner;
