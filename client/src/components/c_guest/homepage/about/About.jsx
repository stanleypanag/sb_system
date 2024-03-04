import React from "react";

import "./about.css";
import Phone from "../../../assets/phone.png";
import Email from "../../../assets/email.png";
import Facebook from "../../../assets/facebook.png";
import Feedback from "../../../assets/feedback.png";

const About = () => {
  return (
    <>
      {/* <!-- About --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid grid-row-3 sm:grid-row- lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div class="flex flex-col bg-transparent">
            <div class="flex-auto p-4 md:p-6">
              <h1 className="text-gray-800 text-center font-bold tracking-widest uppercase">
                The Sangguniang Bayan ng Naic
              </h1>

              <p class="mt-3 sm:mt-6 text-center text-gray-800 md:text-md tracking-wide">
                <p>
                  "The Sangguniang Bayan is the local legislative branch of the
                  municipal governments in the Philippines. It is responsible
                  for passing ordinances and resolutions for the administration
                  of a municipality. Its powers are defined by the Local
                  Government Code, passed by Congress in 1991."
                </p>
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          <hr className="sm:block md:hidden border-gray-800"></hr>

          {/* <!-- Card --> */}
          <div class="flex flex-col bg-transparent">
            <div class="flex-auto p-4 md:p-6">
              <h1 className="font-bold text-gray-800 text-center tracking-widest uppercase">
                Location
              </h1>

              <p class="mt-3 sm:mt-6 text-center text-gray-800 md:text-md tracking-wide">
                <p>
                  " The Sangguniang Bayan of Naic, Cavite Office is located in
                  Municipal Hall of Naic, Addressed at Barangay Ibayo Silangan,
                  Naic, Cavite."
                </p>
              </p>

              <div class="mt-10 text-center">
                <a
                  class="bg-none border-4 border-gray-800 hover:bg-gray-800 hover:text-gray-200 text-gray-800 text-sm font-bold py-2 px-4 rounded-full"
                  href="https://maps.app.goo.gl/szvUz5Mc41PfCLzE7"
                >
                  Locate on Google Maps
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}

          <hr className="sm:block md:hidden border-gray-800"></hr>

          {/* <!-- Card --> */}
          <div class="flex flex-col bg-transparent">
            <div class="flex-auto p-4 md:p-6">
              <h1 className="font-bold text-center text-gray-800 tracking-widest uppercase">
                Contacts
              </h1>

              <div class="container mt-6 sm:mt-10 flex items-right">
                <div class="ms-3 sm:ms-4">
                  <div className="icon flex">
                    <img src={Phone} className="w-7" />
                    <a className="text text-gray-800">(046)856-0656/865-0650</a>
                  </div>
                  <div className="icon flex">
                    <img src={Email} className="w-7" />
                    <a
                      className="text-gray-800"
                      href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbmGvwHKZhbhKNlLWKgdQNkCMkBlDHlmSlnvlNxTGNFXGnXMMhpbCbkdZMQCpmQFzzKdD"
                    >
                      mayorjun.naic@gmail.com
                    </a>
                  </div>
                  <div className="icon flex">
                    <img src={Facebook} className="w-7" />
                    <a
                      className="text text-gray-800"
                      href="https://www.facebook.com/municipalityofnaic"
                    >
                      Municipality of Naic
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End About--> */}

      <div className="bg-black grid grid-cols-1 gap-20 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 pb-20">
        <div className="flex flex-col justify-between items-center text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Your Feedback matters to us!
            </h2>
            <div className="text-gray-500">
              please send us your sincere concerns for the future improvemets of
              this website, thank you.
            </div>
          </div>
          <svg
            className="w-[10rem]"
            viewBox="-2.4 -2.4 28.80 28.80"
            xmlns="http://www.w3.org/2000/svg"
            fill="#e6e6e6"
            stroke="#e6e6e6"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <path
                transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
                fill="#557e8b"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokewidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <form novalidate="" className="space-y-6">
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded border border-gray-400 bg-gray-300 text-gray-500"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 rounded border border-gray-400 bg-gray-300 text-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default About;
