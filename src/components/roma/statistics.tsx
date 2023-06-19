const RomaStatistics = () => {
  return (
    <div className="w-full bg-[#191919]">
      <div className=" max-w-[1300px] m-auto justify-between text-white items-center flex p-12 sm:flex-col sm:text-center">
        <div className="text-2xl font-medium">We have you covered</div>
        <div className="max-w-[150px] sm:mt-10">
          <div className="text-3xl font-medium mb-2">180+</div>
          <div className="text-lg font-extralight sm:text-base">
            supported payout contries
          </div>
        </div>
        <div className="max-w-[150px] sm:mt-10">
          <div className="text-3xl font-medium mb-2">1100+</div>
          <div className="text-lg font-extralight sm:text-base">
            supported digital assets
          </div>
        </div>
        <div className="max-w-[150px] sm:mt-10">
          <div className="text-3xl font-medium mb-2">100+</div>
          <div className="text-lg font-extralight sm:text-base">
            supported fiat assets
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomaStatistics;
