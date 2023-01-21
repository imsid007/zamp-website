import { TC_LOGO } from "@/constants/images";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="bg-GRAY_4 flex flex-col text-white items-center p-14">
      <Image
        src={TC_LOGO}
        width={46}
        height={46}
        alt="tc logo"
        className="my-4"
      />
      <div className="mb-3 text-lg">
        {
          '"Dara Khosrowshahi and Marcelo Claure back former Sequoia India partner/’s startup"'
        }
      </div>
      <div className="mb-3 text-lg">
        {'"Ex-Uber Exec Amit Jain’s New Venture Raises $25 Mn Led By Sequoia"'}
      </div>
    </div>
  );
};

export default Reviews;
