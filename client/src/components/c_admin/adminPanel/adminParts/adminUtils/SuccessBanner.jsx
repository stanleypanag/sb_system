import React, { useEffect } from "react";

const SuccessBanner = ({ message, onClose }) => {
  // Automatically close the banner after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Handle click outside to close the banner
  const handleClickOutside = (e) => {
    if (!e.target.closest(".success-banner")) {
      onClose();
    }
  };

  const slideDown = `
  @keyframes slideDown {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

  return (
    <div className="space-y-5">
      <div
        className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
        role="alert"
        style={{
          animation: "slideDown 1s ease forwards",
          zIndex: 10,
        }}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div className="ms-3">
            <h3 className="text-gray-800 font-semibold dark:text-white">
              Successfully updated.
            </h3>
            <p className="text-sm text-white-800 dark:text-white-800">
              {message}
            </p>
          </div>
          <button onClick={onClose} className="ml-auto">
            <svg
              className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;
