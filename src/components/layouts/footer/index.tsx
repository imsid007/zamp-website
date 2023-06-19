import { ZAMP_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import GlobalFooter from "./global-footer";
import HomeFooter from "./home-footer";

interface FooterProps {
  type?: string;
}

export default function Footer({ type }: FooterProps) {
  if (type == "home" || type === "roma") {
    return <HomeFooter type={type} />;
  }
  return <GlobalFooter />;
}
