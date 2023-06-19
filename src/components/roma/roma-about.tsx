import { S1, S2, S3, S4 } from "@/constants/images";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RomaAbout = () => {
  const [scrollPosition, setScrollPosition] = useState(1);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPosition(latest);
  });

  return (
    <div className="bg-black w-full py-16 px-10 sm:hidden">
      <div className="flex max-w-[1100px] m-auto " ref={ref}>
        <div className="w-[50%] text-white text-3xl">
          <div className="sticky top-0  text-white">
            <div
              className="w-full relative "
              style={{ height: "calc(100vh - 150px)" }}
            >
              <Image
                alt="s1"
                style={{
                  opacity: scrollPosition <= 1 && scrollPosition >= 0.8 ? 1 : 0,
                }}
                className="mt-14 absolute top-0 left-1"
                src={S1}
                height={400}
                width={400}
              />
              <Image
                alt="s1"
                style={{
                  opacity:
                    scrollPosition <= 0.8 && scrollPosition >= 0.55 ? 1 : 0,
                }}
                className="mt-14 absolute top-0 left-1"
                src={S2}
                height={400}
                width={400}
              />
              <Image
                alt="s1"
                style={{
                  opacity:
                    scrollPosition < 0.55 && scrollPosition >= 0.15 ? 1 : 0,
                }}
                className="mt-14 absolute top-0 left-1"
                src={S3}
                height={400}
                width={400}
              />
              <Image
                alt="s1"
                style={{
                  opacity: scrollPosition < 0.15 && scrollPosition >= 0 ? 1 : 0,
                }}
                className="mt-14 absolute top-0 left-1"
                src={S4}
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className=" px-5 py-24">
            <div className="text-white">01/04</div>
            <div className="text-white text-2xl mt-3">Accounts</div>
            <div className=" my-4 text-[#9b9b9b]">
              Full-suite offering that combines traditional bank accounts and
              digital wallets to offer a seamless experience
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Create unlimited multi-currency bank accounts to manage your
              finances globally
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Secure and compliant custody of digital wallets across 30+
              blockchains
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Manage your bank accounts and digital wallets in one dashboard
            </div>
          </div>

          <div className=" px-5 py-24">
            <div className="text-white">02/04</div>
            <div className="text-white text-2xl mt-3">Payments</div>
            <div className=" my-4 text-[#9b9b9b]">
              Send and receive payments from anyone - vendors, suppliers,
              customers and others around the globe - either in fiat or digital
              assets
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Fiat payouts to 190 different countries and 100 currencies
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Accept and receive stablecoin payments seamlessly
            </div>
          </div>

          <div className=" px-5 py-24">
            <div className="text-white">03/04</div>
            <div className="text-white text-2xl mt-3">
              Seamless Fiat & Digital Asset Conversion
            </div>
            <div className=" my-4 text-[#9b9b9b]">
              Conversion between money held in your bank account and digital
              currencies within your wallet
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Seamlessly convert your funds between digital assets and fiat
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Buy & sell digital assets directly from liquidity providers to
              ensure the best rates
            </div>
          </div>

          <div className=" px-5 py-24">
            <div className="text-white">04/04</div>
            <div className="text-white text-2xl mt-3">
              Virtual & Physical Cards
            </div>
            <div className=" my-4 text-[#9b9b9b]">
              Easily track and monitor employee spending across all payment
              channels - online or offline
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Issue unlimited corporate debit cards (physical or virtual) as
              your team grows
            </div>
            <div className="p-4 border border-[#4b4b4b] my-4 text-[#9b9b9b]">
              Credit cards (coming soon)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomaAbout;
