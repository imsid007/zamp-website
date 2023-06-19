import Layout from "@/components/layouts";
import { FAQ } from "@/constants/data";

const FAQs = () => {
  return (
    <Layout type="home">
      <div className="max-w-[1100px] m-auto py-24 px-24 md:px-8">
        <h1 className="text-xl font-medium my-8">Frequently Asked Questions</h1>
        {FAQ.map((faq, idx) => (
          <div className="mb-8" key={idx}>
            <div className="font-semibold mb-3">{faq.quetion}</div>
            <div className="text-sm font-light leading-[21px]">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default FAQs;
