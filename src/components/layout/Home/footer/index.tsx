import Image from "next/image";
import React from "react";
// import LogoLight from "@/assets/images/shopnow-light.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Qrcode from "@/assets/images/qrcode.png";
import Google from "@/assets/images/google-download.png";
import Apple from "@/assets/images/apple-download.png";
import { LogoLight } from "@/assets/images";

const Footer = () => {
  const downloads = [
    {
      img: Google,
      link: "",
    },
    {
      img: Apple,
      link: "",
    },
  ];
  const footerLinks = [
    {
      title: "Support",
      links: [
        {
          text: "12, Alhaja Adenike Street, iju road, Lagos ",
          link: "#",
        },
        {
          text: "ihamroland@gmail.com",
          link: "#",
        },
        {
          text: "+234 807 4238929",
          link: "#",
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          text: "My Account",
          link: "#",
        },
        {
          text: "Login/Register",
          link: "#",
        },
        {
          text: "Cart",
          link: "Shop",
        },
        {
          text: "Shop",
          link: "#",
        },
      ],
    },
    {
      title: "Quick Link",
      links: [
        {
          text: "Privacy Policy",
          link: "#",
        },
        {
          text: "Terms of Use",
          link: "#",
        },
        {
          text: "Faq",
          link: "#",
        },
        {
          text: "Contact",
          link: "#",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FacebookIcon,
      link: "#",
    },
    {
      icon: TwitterIcon,
      link: "#",
    },
    {
      icon: InstagramIcon,
      link: "#",
    },
    {
      icon: LinkedinIcon,
      link: "#",
    },
  ];

  const date = new Date().getFullYear()
  return (
    <footer className="bg-black pt-20 px-4 pb-6">
      <div className="max-w-[1240px] w-full mx-auto">
        <div className="mb-24 flex justify-between items-start gap-6 flex-wrap w-full">
          <div className="max-w-[217px] w-full">
            <div className="w-[157px] h-[33px] mb-6">
              <Image
                src={LogoLight}
                alt="Shop now logo light"
                height={157}
                width={33}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-borderColor mb-6">Subscribe</h3>
              <p className="mb-4 text-base text-borderColor">
                Get 10% off your order
              </p>
              <div className="flex justify-between gap p-3 bg-transparent border-[1.5px] border-borderColor rounded-[12px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-[16px] text-borderColor bg-transparent outline-none w-[80%]"
                />
                <SendIcon className="h-6 w-6 text-borderColor" />
              </div>
            </div>
          </div>
          {footerLinks?.map((footerItem, index) => (
            <div key={index}>
              <h3 className="mb-6 text-lg font-medium text-borderColor">
                {footerItem?.title}
              </h3>
              <div className="flex gap-4 flex-col max-w-[175px] w-full">
                {footerItem?.links?.map((item, index) => (
                  <Link
                    className="text-base text-borderColor hover:underline"
                    key={index}
                    href={item?.link}
                  >
                    {item?.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="max-w-[198px] w-full">
            <h3 className="mb-6 text-lg font-medium text-borderColor">
              Download App
            </h3>
            <p className="text-xs font-medium text-borderColor mb-2">
              save 3$ with App New User Only
            </p>
            <div className="h-[84px] w-full flex gap-3 mb-6">
              <div>
                <Image className="" src={Qrcode} alt="Shop now qrcode" />
              </div>
              <div className="flex flex-col gap-2.5 justify-between">
                {downloads?.map((download, index) => (
                  <Link href={download?.link} key={index}>
                    <Image
                      className=""
                      src={download?.img}
                      alt="Shop now download link"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="max-w-[168px] w-full gap-3 flex justify-between items-center">
              {socialLinks?.map((social, index) => (
                <Link href={social.link} key={index}>
                  <social.icon className="w-6 h-6 text-white hover:text-white/50" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4 w-full">
          <p className="text-base text-white/50 text-center">
            © Copyright Shop now {date}. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
