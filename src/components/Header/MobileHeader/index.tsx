import React from "react";
import AuthorConfig from "../../../config/author";
import useDarkMode from "../../../hooks/useDarkMode";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const darkMode = useDarkMode();

  return (
    <header className="mobileHeader w-full order-2 flex flex-col md:flex-row md:items-center justify-between gap-3 p-[15px] md:px-[30px] mb-5 dark:bg-stickyBorder dark:border-0 border-b dark:border-b-borderColorLight bg-[rgba(0,0,0,0.009)] border-b-[rgba(0,0,0,0.02)]">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          {/* <GoThreeBars size={24} /> */}
          <span className="font-sans font-medium dark:text-textColorDark">
            {AuthorConfig.site}
          </span>
        </div>

        <button
          aria-label="toggle-dark-mode"
          className="flex items-center justify-end toggleDarkModeBtn"
          onClick={darkMode.setMode}
        >
          {darkMode.isDarkMode ? (
            <FiSun size={24} fill="#fff" />
          ) : (
            <BiMoon size={24} />
          )}
        </button>
      </div>

      <a
        href="https://samum.uz"
        target="_blank"
        rel="noreferrer"
        className="w-full text-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-[12px] font-semibold text-emerald-700 dark:text-emerald-300"
      >
        New version live - SAMUM.UZ ga o&apos;tish
      </a>
    </header>
  );
};

export default MobileHeader;
