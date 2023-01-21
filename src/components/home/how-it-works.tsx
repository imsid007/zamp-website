import {
  ACCESS_YOUR_FUNDS_AT_ANY_TIME,
  EARN_HIGHER_YEILD,
  HAVE_FULL_TRANSPARENCE,
} from "@/constants/images";
import Image from "next/image";

const HowIWorks = () => {
  return (
    <div className="bg-BLACK_1 w-full text-center pb-10">
      <h2 className="text-white text-xl p-6">How it works</h2>
      <div className="flex justify-center my-10">
        <div className="text-left mx-6">
          <Image
            src={EARN_HIGHER_YEILD}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={280}
            height={250}
          />
          <h2 className="text-lg mb-3 mt-6 text-white">Earn higher yield</h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            Put your cash to work with a personalized portfolio of government
            treasuries, other high-grade, low risk assets - tailored to your
            risk profile and liquidity needs.
          </div>
        </div>
        <div className="text-left mx-6">
          <Image
            src={ACCESS_YOUR_FUNDS_AT_ANY_TIME}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={280}
            height={200}
          />
          <h2 className="text-lg mb-3 mt-6 text-white">
            Access your funds at any time
          </h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            We offer you several faster liquidity options, even for investments
            that have a lock-in period.
          </div>
        </div>
        <div className="text-left mx-6">
          <Image
            src={HAVE_FULL_TRANSPARENCE}
            alt="Have full transparency"
            width={280}
            height={200}
          />
          <h2 className="text-lg mb-3 mt-6 text-white">
            Have full transparency
          </h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            Consolidate and monitor your portfolio and financial reporting into
            a single dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIWorks;
