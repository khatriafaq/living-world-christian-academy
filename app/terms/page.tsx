import Head from "next/head";
import React from "react";

const Terms = () => {
  return (
    <>
      <Head>
        <title>The Terms and Conditions - Living Word Christian Academy</title>
      </Head>
      <header className="flex justify-center py-16 bg-dark">
        <div className="my-auto">
          <h1 className="gradient-text text-4xl md:text-5xl">
            The Terms and Conditions
          </h1>
          <p className="text-xs md:text-sm text-dark2 text-center">
            Last updated on 22 May, 2024
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] pb-40 text-justify font-poppins">
        {/* point 1 */}
        <div className="terms-container md:mx-8 xl:mx-0">
          <h2 className="mt-8">1. Introduction</h2>

          <p>
            These Terms govern the purchase, ownership, and use of Living Word
            Christian Academy (LWCA) Endowment NFTs. By participating, you agree
            to these Terms.{" "}
          </p>

          <h2 className="mt-8">2. NFT Purchase and Ownership: </h2>
          <p>
            <li>
              NFTs are available for purchase on the Polygon network for $25
              USDT each.
            </li>

            <li>
              Ownership entitles holders to potential annual returns and
              participation in quarterly tuition-free year drawings.
            </li>
          </p>
          <h2 className="mt-8">3. Payment and Fees: </h2>
          <p>
            <li>Payments must be made using USDT on the Polygon network.</li>
            <li>Buyers are responsible for any transaction fees.</li>
          </p>

          <h2 className="mt-8">4. Returns and Distributions: </h2>
          <p>
            <li>
              {" "}
              Returns are projected but not guaranteed and depend on market
              conditions.
            </li>
            <li>
              Annual distributions will occur based on financial performance.
            </li>
          </p>

          <h2 className="mt-8">5. Risk Disclosure: </h2>
          <p>
            <li>
              {" "}
              All investments carry risks, including potential financial losses.
            </li>
            <li>
              LWCA is not liable for losses resulting from market fluctuations.
            </li>
          </p>
          <h2 className="mt-8">6. Tax Implications: </h2>
          <p>
            <li>
              {" "}
              Earnings from NFTs may be subject to taxes. Consult a tax
              professional.
            </li>
          </p>
          <h2 className="mt-8">7. Intellectual Property: </h2>
          <p>
            <li>
              {" "}
              LWCA NFTs and associated artwork are the intellectual property of
              LWCA.
            </li>
          </p>
          <h2 className="mt-8">8. Privacy: </h2>
          <p>
            <li>
              {" "}
              - We do not collect or hold personal information other than wallet
              addresses for transaction purposes.
            </li>
          </p>

          <h2 className="mt-8">9. Amendments: </h2>
          <p>
            <li>
              {" "}
              LWCA reserves the right to amend these Terms. Changes will be
              communicated via our website.
            </li>
          </p>
          <h2 className="mt-8">10. Governing Law: </h2>
          <p>
            <li>
              {" "}
              These Terms are governed by the laws of the relevant jurisdiction
              where LWCA is located.
            </li>
          </p>
        </div>
      </main>
    </>
  );
};

export default Terms;
