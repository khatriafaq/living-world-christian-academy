import Image from "next/image";
import Logo from "../../public/images/LivingWordLogo.svg";
import FooterShadow from "../../public/images/footer-shadow.svg";
import Link from "next/link";
import Telegram from "../../public/telegram.svg";
import FB from "../../public/Facebook.svg";
import Discord from "../../public/Discord.svg";
import Www from "../../public/Www.svg";

const Footer = () => {
  const SocialLink = [
    {
      name: "Discord",
      icon: Discord,
      link: "https://discord.gg/3mStUwn83Q",
    },
    {
      name: "Facebook",
      icon: FB,
      link: "https://www.facebook.com/LWCADOR?mibextid=LQQJ4d",
    },
    {
      name: "Website",
      icon: Www,
      link: "http://lwcadorchester.com/en/",
    },
  ];

  const Company = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Vision",
      link: "/#vision",
    },
    {
      name: "Mission",
      link: "/#mission",
    },
    {
      name: "Objective",
      link: "/#objective",
    },
  ];

  const Home = [
    {
      name: "Terms & Conditions",
      link: "/#",
    },
    {
      name: "Privacy Policy",
      link: "/#",
    },
    {
      name: "FAQ",
      link: "/#faq",
    },
  ];

  return (
    <div>
      {/* <Image
        className="w-full h-[623px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        src={FooterShadow}
        alt="Footer Shadow"
        width={197.26}
        height={60.67}
      /> */}
      <div className="py-16 lg:px-52 md:px-8 px-8 flex justify-center flex-col ">
        <div className="flex justify-center md:justify-between text-white flex-col md:flex-row">
          <div className="py-4 ">
            <Image
              src={Logo}
              alt="logo"
              className="mb-5"
              width={197.26}
              height={60.67}
            />

            <p className="font-normal text-white font-ubuntu">
              Empowering Every Student for
              <br /> Success in a Dynamic World
              <br /> with Faith and Purpose.
            </p>
            <p className="font-normal text-white font-ubuntu" id="contact">
              <br /> Contact: +1(443) 232-2625
              <br /> Email: toddk@lwcadorchester.com
            </p>
            <div className="flex mt-[48px] grayscale">
              {SocialLink.map((data, index) => (
                <div key={index}>
                  <div className="bg-dark2 hover:bg-brandColor hover:border border-white mr-4 h-[28px] w-[28px] rounded-full flex items-center justify-center">
                    <a href={data.link} target="_blank">
                      <Image src={data.icon} alt={data.name} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-5">
            <div className="text-skyblue-300 uppercase my-3 font-ubuntu">Company</div>
            <div className="flex flex-col items-start">
              {Company.map((data, index) => (
                <div key={index}>
                  <div className="text-white my-3 font-ubuntu">
                    <a
                      href={data.link}
                      className="hover:text-white active:text-brandColor transition-all"
                    >
                      {data.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-5">
            <div className=" text-skyblue-300 uppercase my-3 font-ubuntu">Resources</div>
            <div className="flex flex-col items-start">
              {Home.map((data, index) => (
                <div key={index}>
                  <div className="text-white my-3 font-ubuntu">
                    <Link
                      href={data.link}
                      className="hover:text-white active:text-brandColor transition-all"
                    >
                      {data.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-[#E2E8F0] h-px my-5" />
        </div>
        <div className="text-dark2 flex justify-center text-center font-ubuntu">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
          LIVING WORD CHRISTIAN ACADEMY
        </div>
      </div>
    </div>
  );
};
export default Footer;
