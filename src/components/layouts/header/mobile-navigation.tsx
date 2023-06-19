import {
  CAREERS,
  INVESTERS,
  LOGIN,
  SIGN_UP,
  TEAM,
} from "@/constants/navigation";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface MobileNavigationProps {
  showSlider: boolean;
  activeMenu: string | undefined;
}

const MobileNavigation = ({
  showSlider,
  activeMenu,
}: MobileNavigationProps) => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  return (
    <motion.ul
      className={`absolute z-[-1]  top-[120%]  rounded-lg  bg-white flex flex-col w-full left-0  ${
        showSlider ? "pointer-events-auto" : "pointer-events-none"
      }`}
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
            delayChildren: 0.4,
            staggerChildren: 0.08,
          },
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
            delay: 0.4,
            delayChildren: 0,
            staggerChildren: 0.08,
          },
        },
      }}
    >
      <motion.div
        variants={itemVariants}
        className={`p-5 ${activeMenu == "Team" && "text-BLUE_LIGHT"}`}
      >
        <Link href={TEAM}>Team</Link>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className={`p-5 ${activeMenu == "Investors" && "text-BLUE_LIGHT"}`}
      >
        <Link href={INVESTERS}>Investors</Link>
      </motion.div>
      <motion.div variants={itemVariants} className={`p-5 `}>
        <Link href={CAREERS} className="py-5">
          Careers
        </Link>
      </motion.div>
      <motion.div variants={itemVariants} className={`p-5 `}>
        <Link href={LOGIN} legacyBehavior className="py-5">
          <a target="_blank" rel="noreferrer">
            Login
          </a>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href={SIGN_UP} legacyBehavior>
          <a target="_blank" rel="noreferrer">
            <button className="z-[-1] bg-black text-white py-2 px-6 mx-3 mb-5 rounded-full">
              Sign Up
            </button>
          </a>
        </Link>
      </motion.div>
    </motion.ul>
  );
};

export default MobileNavigation;
