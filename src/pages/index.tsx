import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layouts";
import HeroBanner from "@/components/home/hero-banner";
import HowIWorks from "@/components/home/how-it-works";
import Reviews from "@/components/home/reviews";
import EnterpriseGrade from "@/components/home/Enterprise-grade";
import GetStarted from "@/components/home/get-started";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout type="home">
      <HeroBanner />
      <HowIWorks />
      <Reviews />
      <EnterpriseGrade />
      <GetStarted />
    </Layout>
  );
}
