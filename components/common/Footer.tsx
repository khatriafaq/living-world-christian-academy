import Image from "next/image";
import Logo from "../../public/images/LivingWordLogo.svg";
import Link from "next/link";
import Telegram from "../../public/telegram.svg";
import FB from "../../public/Facebook.svg";
import Twitter from "../../public/Twitter.svg";
import Git from "../../public/Github.svg";
const Footer = () => {
  const SocialLink = [
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://www.twitter.com/VirtualX5GUK",
    },
    {
      name: "Telegram",
      icon: Telegram,
      link: "https://t.me/VirtualXuk",
    },
    {
      name: "Facebook",
      icon: FB,
      link: "#",
    },
    {
      name: "Github",
      icon: Git,
      link: "#",
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
      link: "/#",
    },
  ];

  return (
    <div className="py-16 lg:px-52 md:px-8 px-8 flex justify-center flex-col ">
      <div className="flex justify-center md:justify-between text-white flex-col md:flex-row">
        <div className="py-4 ">
          <div className="">
          <Image
            src={Logo}
            alt="logo"
            className="mb-5 "
            width={197.26}
            height={60.67}
            />
            </div>
          <p className="font-normal text-white">
          Empowering Every Student for  
            <br /> Success in a Dynamic World
            <br /> with Faith and Purpose.
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
          <div className="text-skyblue-300 uppercase my-3">Company</div>
          <div className="flex flex-col items-start">
            {Company.map((data, index) => (
              <div key={index}>
                <div className="text-white my-3">
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
          <div className=" text-skyblue-300 uppercase my-3">Resources</div>
          <div className="flex flex-col items-start">
            {Home.map((data, index) => (
              <div key={index}>
                <div className="text-white my-3">
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
      <div className="text-dark2 flex justify-center text-center">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
        LIVING WORD CHRISTIAN ACADEMY
      </div>
    </div>
  );
};
export default Footer;
