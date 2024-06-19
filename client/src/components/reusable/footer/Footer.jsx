import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y bg-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
                <img src={logo} />
              </div>
              <span className="self-center text-xl font-semibold text-gray-300">
                SB Naic Office
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracki uppercase text-gray-50">Documents</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-gray-500"
                    rel="noopener noreferrer"
                    to={"/resolution"}
                  >
                    Resolutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500"
                    rel="noopener noreferrer"
                    to={"/ordinance"}
                  >
                    Ordinances
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase text-gray-50">Agency</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/municipalityofnaic"
                  >
                    Sangguniang Bayan
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/municipalityofnaic"
                  target="_blank"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current text-gray-600"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-400">
          © 2024 Sangguniang Bayan ng Naic. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
