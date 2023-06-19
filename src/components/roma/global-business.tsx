import { GLOBAL_BUSSINESS } from "@/constants/images";
import { SIGN_UP_ROMA } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const GlobalBusiness = () => {
  return (
    <div className="w-full text-center px-10 pt-10 pb-28">
      <h2 className="mt-12 text-[32px] mb-10 sm:text-base">
        Built to scale with your global business
      </h2>
      <Link href={SIGN_UP_ROMA} legacyBehavior>
        <a target="_blank">
          <Image
            alt="Global business"
            className="m-auto"
            src={GLOBAL_BUSSINESS}
            width={1180}
            height={893}
          />
        </a>
      </Link>
    </div>
  );
};
export default GlobalBusiness;
