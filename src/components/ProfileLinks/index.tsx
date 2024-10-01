import React from "react";
import clsx from "clsx";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
  FaStackOverflow,
} from "react-icons/fa";
import ScreenConfig from "../../config/screen";

interface Props {
  className?: string;
}

const ProfileLinks: React.FC<Props> = (props) => {
  const links = [
    {
      link: "tel:+998903747483",
      icon: FaRegEnvelope,
      label: "Mail",
      useTitle: "+998 (90) 374 74 83",
    },
    {
      link: "mailto:oqqora069005@gmail.com",
      icon: FaRegEnvelope,
      label: "Mail",
      useTitle: "e-Mail",
    },
    {
      link: "https://github.com/muhammad-jon",
      icon: FaGithub,
      label: "GitHub",
      useTitle: "GitHub profile",
    },

    {
      link: "https://www.linkedin.com/in/muhammad-jon/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      useTitle: "LinkedIn profile",
      hidden: false,
    },
  ];

  const renderLinks = links
    .filter((link) => !link.hidden)
    .map((link) => {
      const isMail = "Mail" === link.label;
      const rel = isMail ? {} : { rel: "noreferrer", target: "_blank" };

      return (
        <a
          key={link.label}
          className="w-full flex font-sans dark:text-textColorDark text-sm mt-[10px]  hover:!text-textColorEmphasis hover:underline transition-all"
          href={link.link}
          {...rel}
        >
          <span className="flex items-center w-[22px] !text-headerTextColor profileLinkText">
            <link.icon size={14} />
          </span>
          {link?.useTitle || link.link}
        </a>
      );
    });

  return (
    <div
      className={clsx(
        "flex mt-4 w-full flex-col items-center",
        ScreenConfig.mobile.alignLeft ? "" : "max-w-[389px]",
        props?.className || ""
      )}
    >
      {renderLinks}
    </div>
  );
};

export default ProfileLinks;
