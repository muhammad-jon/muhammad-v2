import React from "react";
import { VscOutput } from "react-icons/vsc";
import { FaConnectdevelop, FaLaptopCode } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

import TabMenu from "../../TabMenu";
import Footer from "../../Footer";
import PinnedProjects from "../../Content/PinnedProjects";
import ProfileOverview from "../../Content/ProfileOverview";

interface Props {}

const Header: React.FC<Props> = () => {
  const menus = [
    {
      icon: VscOutput,
      link: "/",
      label: "Profile",
      content: (
        <React.Fragment>
          <ProfileOverview />
          <PinnedProjects />
          <Footer />
        </React.Fragment>
      ),
    },
    {
      icon: GoRepo,
      link: "/",
      label: "Education",
      count: 20,
      content: "2",
    },
    {
      icon: FaLaptopCode,
      link: "/",
      label: "Companies",
      count: 20,
      content: "3",
    },
    {
      icon: FaConnectdevelop,
      link: "/",
      label: "Links",
      count: 25,
      content: "4",
    },
  ];

  return (
    <div className="w-full order-2 md:order-none flex flex-col items-center justify-start px-[15px] md:pl-[5px] md:pr-[30px]">
      <div className="flex-none w-[296px] hidden md:block"></div>
      <div className="w-full mt-5 md:mt-0 flex justify-center">
        <a
          href="https://samum.uz"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs md:text-sm font-semibold text-emerald-700 dark:text-emerald-300 transition-all duration-200 hover:bg-emerald-500/20 hover:scale-[1.02]"
        >
          New version is live
          <span className="underline underline-offset-2">Go to SAMUM.UZ</span>
        </a>
      </div>

      <TabMenu menus={menus} className="mt-[30px]" />
    </div>
  );
};

export default Header;
