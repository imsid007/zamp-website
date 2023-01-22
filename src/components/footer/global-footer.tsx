import { LINKDIN, ZAMP_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const GlobalFooter = () => {
  return (
    <div className="border-t border-solid border-[#e4ebf3] pt-14 pb-24">
      <div className="max-w-[1100px] m-auto flex justify-between px-8">
        <div className="w-[20%]">
          <Image src={ZAMP_LOGO} alt="Zamp logo" width="150" height="100" />
        </div>
        <div className="flex justify-between w-[45%]">
          <div>
            <div className="font-medium">Locations</div>
            <div className="text-[#636c76] font-light">UAE</div>
            <div className="text-[#636c76] font-light">Singapore</div>
            <div className="text-[#636c76] font-light">USA</div>
            <div className="text-[#636c76] font-light">
              India (Delhi,
              <br /> Bangalore)
            </div>
          </div>
          <div>
            <div className="font-medium">Contact us</div>
            <Link href="mailto:info@zamp.finance" legacyBehavior>
              <a target="_blank">
                <div className="text-[#636c76] font-light">
                  info@zamp.finance
                </div>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/company/zampfintech"
              legacyBehavior
            >
              <a target="_blank">
                <div className="p-2 linkdin-container ml-4">
                  <div className="bg-white w-full h-full linkdin-inner-container hover:bg-black ease-out duration-300">
                    <Image
                      src={LINKDIN}
                      alt="Linkdin Logo"
                      className="m-auto linkdin-logo"
                      width="17"
                      height="17"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFooter;
