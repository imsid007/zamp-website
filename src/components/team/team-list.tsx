import { AMIT, LINKDIN } from "@/constants/images";
import { TEAM_LIST } from "@/constants/team";
import Image from "next/image";
import Link from "next/link";
import TeamMember from "./team-member";

const TeamList = () => {
  return (
    <div className="max-w-[1100px] m-auto">
      <h1 className="text-3xl mb-6">
        Meet Our <span className="gradient-text">Team</span>
      </h1>
      <div className="text-center">
        <Image
          src={AMIT}
          alt="Amit Jain"
          className="m-auto"
          width="240"
          height="250"
        />
        <div className="text-2xl flex justify-center align-middle mt-4">
          <span>Amit Jain</span>
          <Link
            href="https://www.linkedin.com/in/amit-jain-552280/"
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
        <div className="font-semibold my">Founder</div>
        <div className="text-[#636c76] font-light">
          {"Ex-Managing Director, Sequoia Capital"} <br />{" "}
          {"Ex-Head of APAC, Uber"}
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap mt-14 mb-28">
        {TEAM_LIST.map((person, idx) => (
          <div key={idx} className="w-[33%]">
            <TeamMember
              imageUrl={person.imageUrl}
              name={person.name}
              designation={person.designation}
              subtitle={person.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
