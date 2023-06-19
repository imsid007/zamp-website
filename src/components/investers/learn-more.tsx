const LearnMore = () => {
  return (
    <div className="bg-[#e1f8ff] w-full p-10">
      <div className="max-w-[1000px] m-auto flex justify-between items-center">
        <div className="max-w-[50%]">
          <h1 className="text-[#1a1a1a] text-[32px] font-semibold">
            Interested to learn more about Zamp?
          </h1>
          <div className="text-[#636c76] font-light">
            Fill out this form & our team will get in touch with you.
          </div>
        </div>
        <div className="flex flex-col w-[50%] ml-10">
          <input
            className="py-3 px-5 mb-4 rounded-2xl w-full border-[#00000080] border"
            type="email"
            placeholder="E-mail address"
          />
          <input
            className="py-3 px-5 mb-4 rounded-2xl w-full border-[#00000080] border"
            type="text"
            placeholder="Full name"
          />
          <textarea
            className="py-3 px-5 mb-4 rounded-2xl w-full border-[#00000080] border"
            rows={2}
            placeholder="Inquiry"
          />
          <button className="py-3 px-5 mb-4 rounded-2xl w-full bg-[#294b96] text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
