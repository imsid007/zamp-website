import Image from "next/image";

interface InvesterWidgetProps {
  name: string;
  position: string;
  imageUrl: string;
}

const InvesterWidget = ({ name, position, imageUrl }: InvesterWidgetProps) => {
  return (
    <div className="w-[33%] flex items-middle mb-16 lg:w-[50%] sm:w-[100%] sm:flex-col sm:justify-center sm:items-center">
      <Image
        src={imageUrl}
        height={140}
        width={140}
        alt="dara"
        className="rounded-full"
      />
      <div className="flex flex-col justify-center text-left ml-5">
        <h2 className="text-xl font-medium mb-2 sm:text-center sm:mt-4">
          {name}
        </h2>
        <div className="text-sm text-[#636c76] font-thin sm:text-center">
          {position}
        </div>
      </div>
    </div>
  );
};

export default InvesterWidget;
