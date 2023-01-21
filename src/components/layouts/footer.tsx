import { ZAMP_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#f4f2ef] w-full">
      <div className=" flex justify-between p-8 max-w-[900px] mb-10 m-auto">
        <div className="w-[10%]">
          <Image src={ZAMP_LOGO} alt="Zamp logo" width="83" height="100" />
        </div>
        <div className="text-[#8d8d8d] text-xs w-[40%]">
          <p className="mb-3">
            *Interest rates are indicative. Actual results will vary, and are
            based on several factors. Historical performance is not a guarantee
            of future results.
          </p>
          <p>
            Varni Labs (Zamp) is a financial technology company, working with
            licensed and regulated broker dealers, custodians and other
            partners. The information discussed herein is provided for
            informational purposes only and is not intended to be investment
            advice. It is not a recommendation of, or an offer to sell or
            solicitation of an offer to buy, any particular security, strategy
            or investment product. Nothing on this website should be construed
            as personalized investment advice.
          </p>
        </div>
        <div className="w-[15%]">
          <div className="text-[#8d8d8d] text-[10px]">LEARN MORE</div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">Careers</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">Team</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">Investors</Link>
          </div>
        </div>
        <div className="w-[15%]">
          <div className="text-[#8d8d8d] text-[10px]">ABOUT</div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">Terms of Use</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">FAQs</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium">
            <Link href="#">FAQs</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-[#e4ebf3] p-4">
        © Varni Labs ltd.
      </div>
    </div>
  );
}
