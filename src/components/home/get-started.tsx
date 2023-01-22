import { DASHBOARD_SNAPSHOT_CROP } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="bg-[#f4f2ef] flex justify-center w-full p-8">
      <div className="max-w-[853px] bg-white flex rounded-2xl mb-20 sm:mb-10 sm:pl-5 sm:flex-col">
        <div className="p-14 sm:p-0">
          <div className="text-2xl mb-2.5 mt-5">
            Get started in less than 10 mins
          </div>
          <div className="text-[#8f8f8f] mb-6">
            Sign up now and earn up to 4.8%* annually on your idle cash
          </div>
          <Link
            href="https://dashboard.zamp.finance/auth/signup"
            legacyBehavior
          >
            <a target="_blank" rel="noreferrer">
              <button className="bg-black text-white py-2 px-6 rounded-full">
                Sign Up
              </button>
            </a>
          </Link>
        </div>
        <div>
          <Image
            src={DASHBOARD_SNAPSHOT_CROP}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={410}
            height={250}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
