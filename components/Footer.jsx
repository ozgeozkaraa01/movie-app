import { SocialIcon } from "react-social-icons";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-center left-0 bottom-0 right-0">
      <div className="container p-5 relative mx-auto">
        <div className="mb-2 mt-5 flex justify-center">
          <SocialIcon
            url="https://github.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#626974"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ozgenur-ozkara/"
            target="_blank"
            fgColor="#626974"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://dribbble.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#626974"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/ozkaraozgee"
            target="_blank"
            fgColor="#626974"
            bgColor="transparent"
          />
        </div>
      </div>
      <div className="p-3 text-center text-gray-600">
        © {year} Copyright
        <Link href="https://ozgenurozkara.vercel.app/" target="_blank">
          {" "}
          Özgenur Özkara
        </Link>
      </div>
    </div>
  );
};

export default Footer;
