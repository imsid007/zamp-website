import Layout from "@/components/layouts";
import { TERMS_OF_USE } from "@/constants/data";

const TermsOfUse = () => {
  return (
    <Layout type="home">
      <div className="max-w-[1100px] m-auto py-24 px-24 md:px-8">
        <h1 className="text-xl font-medium my-8">Terms of Use</h1>
        <div className="text-xs mb-8 leading-[18px]">
          Welcome to Varni Labs, Inc.’s (“Zamp”) website and mobile application
          (which we refer to in these Terms of Service as the “Site,” which also
          refers to any content, functionality, and services offered on or
          through the website and/or mobile application). These Terms of Service
          (these “Terms”) are in place to govern your use of, and access to, the
          Site. The Site is owned and/or operated by Zamp who we refer to in
          these Terms, together with our affiliates, as “us,” “we,” “our,”
          and/or “Zamp.” When we refer to “you” and “your” in these Terms, we
          are referring to you as a visitor to and user of the Site. In addition
          to these Terms, your use of the Site is governed by all other policies
          posted on or made available through the Site (referred to collectively
          as our “Site Policies”), including our Privacy Policy, available here.
          All of the other Site Policies are incorporated by reference into
          these Terms.
        </div>
        {TERMS_OF_USE.map((term) => (
          <div className="mb-8">
            <div className="font-semibold mb-3">{term.title}</div>
            <div className="text-sm font-light leading-[21px]">
              {term.description}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default TermsOfUse;
