import InvesterWidget from "@/components/investers/invester-widget";
import InvestorsList from "@/components/investers/investors-list";
import LearnMore from "@/components/investers/learn-more";
import Layout from "@/components/layouts";
import PageTitle from "@/components/page-title";
import { DARA, SEQUOIA_COLOR_LOGO } from "@/constants/images";
import { ANGEL_LIST } from "@/constants/team";
import Image from "next/image";

const Investers = () => {
  return (
    <Layout activeMenu="Investors">
      <PageTitle title="Our lead Investor" />
      <InvestorsList />
      <LearnMore />
    </Layout>
  );
};

export default Investers;
