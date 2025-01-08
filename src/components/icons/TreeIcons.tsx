import React from "react";

export const TreeIcons = {
  Certified: () => (
    <div className="w-10 h-10 flex items-center justify-center bg-[#FF6A00]/10 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF6A00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" />
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" />
      </svg>
    </div>
  ),
  Emergency: () => (
    <div className="w-10 h-10 flex items-center justify-center bg-[#FF6A00]/10 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF6A00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" />
      </svg>
    </div>
  ),
  TreeService: () => (
    <div className="w-10 h-10 flex items-center justify-center bg-[#FF6A00]/10 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF6A00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 14V2" />
        <path d="M9 18.12V10" />
        <path d="M13 22V14" />
        <path d="M21 10V2" />
        <path d="M5 14V6" />
        <path d="M1 18V10" />
      </svg>
    </div>
  ),
};
