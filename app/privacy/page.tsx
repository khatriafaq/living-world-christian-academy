import Head from "next/head";
import React from "react";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Virtual X</title>
      </Head>
      <header className="flex justify-center py-16 bg-dark">
        <div className="my-auto">
          <h1 className="gradient-text text-4xl md:text-6xl">PRIVACY POLICY</h1>
          <p className="text-xs md:text-sm text-dark2 text-center">
            Last updated on 22 May, 2024
          </p>
          <p className="text-white mt-2 max-w-[1100px] text-center text-sm md:text-lg px-4">
            The following Privacy Policy explains how Living World Christian
            Academy collects and uses the Personal Data of its users. We follow
            all privacy laws and only take the information we need to provide
            services to our users, which is in our best interest.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] pb-40 font-poppins">
        {/* point 1 */}
        <div className="privacy-container">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how LWCA handles your information in
            connection with the NFT Endowment Program. .
          </p>
        </div>

        {/* point 2 */}
        <div className="privacy-container">
          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              Wallet Addresses: For processing transactions and distributions.
            </li>
          </ul>
        </div>

        <div className="privacy-container">
          <h2>3. Use of Information</h2>
          <p>
            Transaction Processing: To process NFT purchases and manage
            distributions.
          </p>
          <p>
            Compliance: To comply with legal obligations and enforce Terms and
            Conditions.
          </p>
        </div>

        <div className="privacy-container">
          <h2>4. Data Security</h2>
          <p>
            We implement reasonable measures to protect your wallet address
            information.
          </p>
        </div>

        <div className="privacy-container">
          <h2>5. Your Rights</h2>
          <p>
            Opt-Out: You can opt-out of communications related to the NFT
            program at any time.
          </p>
        </div>

        <div className="privacy-container">
          <h2>6. Data Retention</h2>
          <p>
            Wallet address information is retained as long as necessary for
            transaction and distribution purposes.
          </p>
        </div>

        <div className="privacy-container">
          <h2>7. Changes to Privacy Policy</h2>
          <p>
            LWCA may update this Privacy Policy. Changes will be communicated
            via our website.
          </p>
        </div>

        <div className="privacy-container">
          <h2>8. Contact Us</h2>
          <p>
            For questions or concerns, contact us at toddk@lwcadorchester.com.
          </p>
        </div>
      </main>
    </>
  );
};

export default Privacy;
