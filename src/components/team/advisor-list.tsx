import { CAREERS } from "@/constants/navigation";
import { ADVISORS_LIST } from "@/constants/team";
import Link from "next/link";
import TeamMember from "./team-member";

const AdvisorList = () => {
  return (
    <div className="max-w-[1100px] m-auto">
      <h1 className="text-3xl my-8">
        Our <span className="gradient-text">Advisors</span>
      </h1>
      <div className="w-full flex flex-wrap justify-around">
        {ADVISORS_LIST.map((person, idx) => (
          <div className="w-[33%]" key={idx}>
            <TeamMember
              imageUrl={person.imageUrl}
              name={person.name}
              subtitle={person.subtitle}
            />
          </div>
        ))}
      </div>
      <div className="mt-28">
        <div className="text-[#636c76] text-2xl font-light max-w-[70%] m-auto">
          We are looking for extraordinary people to help us in our journey to
          the stars.
        </div>
        <Link href={CAREERS} legacyBehavior>
          <a target="_blank">
            <button className="ease-out duration-300 bg-[#294b96] text-white py-3 px-10 mt-10 mb-20 rounded-full font-light hover:shadow-lg hover:shadow-[#152ab282]">
              Join the rocketship!
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdvisorList;
