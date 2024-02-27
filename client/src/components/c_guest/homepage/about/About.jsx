import React from "react";

import "./about.css";
import Phone from "../../../assets/phone.png";
import Email from "../../../assets/email.png";
import Facebook from "../../../assets/facebook.png";

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
                  class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 underline"
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
    </>
  );
};

export default About;
