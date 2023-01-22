import Layout from "@/components/layouts";
import AdvisorList from "@/components/team/advisor-list";
import TeamList from "@/components/team/team-list";
import TeamMember from "@/components/team/team-member";
import { AMIT, LINKDIN } from "@/constants/images";
import { CAREERS } from "@/constants/navigation";
import { ADVISORS_LIST, TEAM_LIST } from "@/constants/team";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <Layout activeMenu="Team">
      <div className="w-full text-center mt-44 md:mt-24">
        <TeamList />
        <AdvisorList />
      </div>
    </Layout>
  );
};

export default Team;
