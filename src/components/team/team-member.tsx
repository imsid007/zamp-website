import { AMIT } from "@/constants/images";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  designation?: string;
  subtitle: string;
  imageUrl: string;
}

const TeamMember = ({
  name,
  designation,
  subtitle,
  imageUrl,
}: TeamMemberProps) => {
  return (
    <div className="text-center mt-9">
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width="240"
          height="250"
          className="m-auto"
        />
      </div>
      <div className="text-2xl mt-2">{name}</div>
      {designation && <div className="font-semibold">{designation}</div>}
      <div className="text-[#636c76] font-light mt-1.5">{subtitle}</div>
    </div>
  );
};
export default TeamMember;
