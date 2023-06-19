import { MENU, ZAMP_LOGO } from "@/constants/images";
import { HOME } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";

export default function Header({ activeMenu }: { activeMenu?: string }) {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="fixed top-6 w-full z-[100] lg:px-6">
      <motion.div
        className="relative z-[100]  bg-[#ffffffab] px-6 max-w-[940px]  m-auto flex justify-between items-center rounded-lg lg:max-w-[700px] "
        style={{ backdropFilter: "blur(4px)" }}
        initial={false}
        animate={showSlider ? "open" : "closed"}
      >
        <MobileNavigation showSlider={showSlider} activeMenu={activeMenu} />
        <Link href={HOME}>
          <Image src={ZAMP_LOGO} alt="Zamp logo" width="83" height="28" />
        </Link>
        <div
          className="hidden mx-2 my-5 md:block mobile-menu"
          onClick={() => {
            setShowSlider(!showSlider);
          }}
        >
          <Image src={MENU} alt="Zamp logo" width="15" height="15" />
        </div>
        <DesktopNavigation activeMenu={activeMenu} />
      </motion.div>
    </div>
  );
}
