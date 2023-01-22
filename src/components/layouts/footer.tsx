import { ZAMP_LOGO } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import GlobalFooter from "../footer/global-footer";
import HomeFooter from "../footer/home-footer";

interface FooterProps {
  type?: string;
}

export default function Footer({ type }: FooterProps) {
  if (type == "home") {
    return <HomeFooter />;
  }
  return <GlobalFooter />;
}
