import { DASHBOARD_SNAPSHOT, SEQUOIA_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container text-center pt-36 ">
      <h1 className="text-[42px] font-normal leading-[65px] tracking-wide">
        Earn up to 4.8%* annually on your idle cash
      </h1>
      <div className="text-GRAY_1 mt-4 text-lg	font-light mb-4">
        <span>
          Invest in U.S. Treasury Bills and other investment grade products
        </span>
        <br />
        <span>Custodied with Bank of New York Mellon Pershing</span>
      </div>
      <br />
      <Link href="https://dashboard.zamp.finance/auth/signup" legacyBehavior>
        <a target="_blank" rel="noreferrer">
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Sign up
          </button>
        </a>
      </Link>
      <div className="flex items-center justify-center my-16">
        <span className="text-GRAY_3 text-lg">Backed by</span>
        <Image
          src={SEQUOIA_LOGO}
          alt="sequoia logo"
          className="ml-4 "
          width={110}
          height={50}
        />
      </div>
      <div className="relative max-h-[400px] flex justify-center overflow-hidden z-10">
        <div>
          <Image
            src={DASHBOARD_SNAPSHOT}
            alt="sequoia logo"
            width={760}
            height={500}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
