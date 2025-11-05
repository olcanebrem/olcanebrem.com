import React from "react";

const FigmaStyleButton = () => {
  return (
    <a
      href="/developers/api"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center justify-center rounded-md bg-black bg-opacity-5 px-4 py-2 text-sm font-medium text-[#0d0d0d] hover:bg-opacity-10 transition-colors duration-200"
    >
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Explore the Figma API</span>
      </span>
    </a>
  );
};

export default FigmaStyleButton;