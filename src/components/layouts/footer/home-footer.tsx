import { LINKDIN, MAIL, ZAMP_LOGO } from "@/constants/images";
import {
  CAREERS,
  FAQ,
  INVESTERS,
  PRIVACY_POLICY,
  TEAM,
  TERMS_OF_USE_ROUTE,
  ZAMP_LINKDIN,
} from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const HomeFooter = ({ type }: { type: string | undefined }) => {
  return (
    <div className="bg-[#f4f2ef] w-full">
      <div className=" flex justify-between p-8 max-w-[900px] mb-10 m-auto md:flex-col">
        <div className="w-[15%] md:w-[100%]">
          <Image
            src={ZAMP_LOGO}
            alt="Zamp logo"
            className="md:m-auto md:mb-8"
            width="83"
            height="100"
          />
        </div>
        <div className="text-[#8d8d8d] text-xs w-[40%] md:w-[100%] md:text-[10px]">
          {type === "home" ? (
            <>
              <p className="mb-3">
                *Interest rates are indicative. Actual results will vary, and
                are based on several factors. Historical performance is not a
                guarantee of future results.
              </p>
              <p>
                Varni Labs (Zamp) is a financial technology company, working
                with licensed and regulated broker dealers, custodians and other
                partners. The information discussed herein is provided for
                informational purposes only and is not intended to be investment
                advice. It is not a recommendation of, or an offer to sell or
                solicitation of an offer to buy, any particular security,
                strategy or investment product. Nothing on this website should
                be construed as personalized investment advice.
              </p>
            </>
          ) : (
            <p>
              Varni Labs (Zamp) is a financial technology company, working with
              licensed and regulated partners.
            </p>
          )}
        </div>
        <div className="w-[15%] md:w-[100%] md:text-center md:mt-10">
          <div className="text-[#8d8d8d] text-[10px] font-semibold">
            LEARN MORE
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={CAREERS}>Careers</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={TEAM}>Team</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={INVESTERS}>Investors</Link>
          </div>
        </div>
        <div className="w-[15%] md:w-[100%] md:text-center md:mt-10">
          <div className="text-[#8d8d8d] text-[10px] font-semibold">ABOUT</div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={PRIVACY_POLICY}>Privacy Policy</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={TERMS_OF_USE_ROUTE}>Terms of Use</Link>
          </div>
          <div className="text-sm mb-1.5 mt-3 font-medium hover:scale-105 ease-in-out duration-150">
            <Link href={FAQ}>FAQs</Link>
          </div>
          <div className="text-sm mb-1.5 mt-5 font-medium flex md:justify-center">
            <Link href={ZAMP_LINKDIN} legacyBehavior>
              <a target="_blank">
                <Image
                  src={LINKDIN}
                  alt="Zamp logo"
                  className=""
                  width="14"
                  height="14"
                />
              </a>
            </Link>
            <Link href="mailto:info@zamp.finance">
              <Image
                src={MAIL}
                alt="Zamp logo"
                className="ml-4"
                width="20"
                height="20"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-[#e4ebf3] p-4 text-sm	">
        © Varni Labs ltd.
      </div>
    </div>
  );
};

export default HomeFooter;
