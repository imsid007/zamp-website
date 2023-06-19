import Layout from "@/components/layouts";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@/constants/data";

const PrivacyPolicy = () => {
  return (
    <Layout type="home">
      <div className="max-w-[1100px] m-auto py-24 px-24 md:px-8">
        <h1 className="text-xl font-medium my-8">Privacy Policy</h1>
        <div className="text-xs mb-8 leading-[18px]">
          Varni Labs Inc. with its registered address at 651 N Broad Street,
          Suite 201, Middletown – 19709, New Castle, Delaware that enables you
          to access a suite of financial services and products. Varni Labs Inc.
          provides its services under the brand name Zamp Finance. This Privacy
          Policy applies to the Zamp Finance Platform (which includes any
          websites and or mobile applications) which is under the ownership,
          control and/or may be licensed to Varni Labs Inc.. This Privacy Policy
          describes the information we collect from you via the Zamp Finance
          Platform and what happens to that information. Any changes to this
          Privacy Policy will be intimated to you via email and/or through the
          Zamp Finance Platform. For avoidance of doubt the term “you” in this
          Privacy Policy includes you as an individual as well as any
          company/organization/body corporate/association of persons whom you
          represent or on whose behalf you may be acting. Your use of the Zamp
          Finance Platform indicates your explicit consent to the terms of this
          Privacy Policy including any changes made hereto. If you are accessing
          the Zamp Finance Platform on behalf of a company/organization/body
          corporate/association of persons whom you represent and warrant that
          you have the express authorization of said company/organization/body
          corporate/association of persons to act on their behalf and accept the
          terms of this Privacy Policy on their behalf.
        </div>
        {PRIVACY_POLICY.map((term) => (
          <div className="mb-8">
            <div className="font-semibold mb-3 ">{term.title}</div>
            <div className="text-sm font-light leading-[21px]">
              {term.description}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default PrivacyPolicy;
