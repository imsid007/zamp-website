import { ROMA_DASHBOARD } from "@/constants/images";
import { SIGN_UP_ROMA } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const OpenAccount = () => {
  return (
    <div className="w-full px-20 pt-20 bg-black text-center open-account-container text-white sm:px-10 ">
      <div className=" motion-animation">
        <h1 className="text-[32px] sm:text-base">
          Open an account in 10 minutes
        </h1>
        <div className="text-[#717171] sm:text-xs">
          Sign up to be a member of our beta launch, and get early access to the
          platform.
        </div>
        <Link href={SIGN_UP_ROMA} legacyBehavior className="mt-10">
          <a target="_blank" rel="noreferrer">
            <button className="bg-white text-black py-4 px-8 rounded-full my-10 sm:py-2 sm:my-4">
              Sign up
            </button>
          </a>
        </Link>
      </div>
      <div className="relative fade-animation max-h-[500px] overflow-hidden mt-10 lg:max-h-[40vw]">
        <Image
          src={ROMA_DASHBOARD}
          alt="sequoia logo"
          className="m-auto sm:ml-0"
          width={1008}
          height={662}
        />
      </div>
    </div>
  );
};

export default OpenAccount;
