import {
  INDUSTRY_LEADING_PARTNERS,
  NO_POOLED_ASSETS,
  SAFTER_FIRST,
} from "@/constants/images";
import Image from "next/image";

const EnterpriseGrade = () => {
  return (
    <div className="bg-[#f4f2ef] text-2xl text-center pt-14 pb-10 border-b border-solid border-[#e4ebf3]">
      <h2>Enterprise-grade safety and security</h2>
      <div className="flex justify-center my-10">
        <div className="text-left mx-5">
          <Image
            src={INDUSTRY_LEADING_PARTNERS}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={260}
            height={250}
          />
          <h2 className="text-lg mb-3 mt-6 font-medium	">
            Industry leading partners
          </h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            We partner with compliant, regulated & licensed custody partners -
            to ensure your funds are kept safe.
          </div>
        </div>
        <div className="text-left mx-5">
          <Image
            src={NO_POOLED_ASSETS}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={260}
            height={250}
          />
          <h2 className="text-lg mb-3 mt-6 font-medium	">No pooled assets</h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            Your investment assets are held individually and directly in your
            name.
          </div>
        </div>
        <div className="text-left mx-5">
          <Image
            src={SAFTER_FIRST}
            alt="ACCESS_YOUR_FUNDS_AT_ANY_TIME"
            width={260}
            height={250}
          />
          <h2 className="text-lg mb-3 mt-6 font-medium	">
            Safety-first in everything we do
          </h2>
          <div className="text-GRAY_2 text-sm max-w-[250px]">
            Our paramount focus is in the safety of your assets - from portfolio
            construction, custody, to every step in the process.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseGrade;
