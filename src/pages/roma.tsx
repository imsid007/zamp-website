import EnterpriseGrade from "@/components/home/Enterprise-grade";
import Layout from "@/components/layouts";
import GlobalBusiness from "@/components/roma/global-business";
import OpenAccount from "@/components/roma/open-acccount";
import RomaAbout from "@/components/roma/roma-about";
import RomaHeroBanner from "@/components/roma/roma-hero-banner";
import RomaStatistics from "@/components/roma/statistics";
import { useScroll, motion } from "framer-motion";

const Roma = () => {
  const { scrollX } = useScroll();
  // sdf

  return (
    <Layout type="roma">
      <motion.div
        className="h-10 bg-red-700 progress-bar  z-50 fixed left-0 top-0"
        style={{ width: scrollX }}
      />
      {/* sdf */}
      <div className="bg-[#ededed]">
        <RomaHeroBanner />
        <RomaAbout />
        <RomaStatistics />
        <GlobalBusiness />
        <EnterpriseGrade />
        <OpenAccount />
      </div>
    </Layout>
  );
};

export default Roma;
