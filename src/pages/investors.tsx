import InvesterWidget from "@/components/investers/invester-widget";
import Layout from "@/components/layouts";
import { DARA, SEQUOIA_COLOR_LOGO } from "@/constants/images";
import { ANGEL_LIST } from "@/constants/team";
import Image from "next/image";

const Investers = () => {
  return (
    <Layout activeMenu="Investors">
      <div className="max-w-[1100px] m-auto lg:px-10">
        <div className="w-full text-center mt-44 sm:mt-24">
          <h1 className="text-3xl mb-6">
            Our lead <span className="gradient-text">Investor</span>
          </h1>
          <div className="w-full sm:max-w-[80%] sm:m-auto">
            <Image
              src={SEQUOIA_COLOR_LOGO}
              alt="sequoia logo"
              className="m-auto mt-10"
              width={350}
              height={70}
            />
          </div>
          <h1 className="text-3xl mt-14 mb-8">
            Some of Our <span className="gradient-text ">Angel Investors</span>
          </h1>

          <div className="w-full flex justify-between flex-wrap mt-14 ">
            {ANGEL_LIST.map((person, idx) => (
              <InvesterWidget
                key={idx}
                name={person.name}
                position={person.position}
                imageUrl={person.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Investers;
