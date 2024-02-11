import React from "react";

import './about.css'

import Naic from "../../../assets/naic.png";
import Map from "../../../assets/map.png";
import Hall from "../../../assets/hall.png";
import Phone from "../../../assets/phone.png";
import Email from "../../../assets/email.png";
import Facebook from "../../../assets/facebook.png";

const About = () => {
  return (
    <>
      {/* <!-- About --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 sm:items-center gap-8">
          <div class="sm:order-2">
            <div class="relative rounded-lg">
              <img
                class="top-0 start-0 object-cover rounded-lg"
                src={Naic}
                alt="Image Description"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div class="sm:order-2">
            <h2 class="text-center text-2xl font-bold md:text-2xl text-gray-700 italic">
              The Sangguniang Bayan ng Naic
            </h2>

            {/* <!-- Avatar --> */}
            <div class="mt-6 sm:mt-10 flex items-center">
              <div class="ms-3 sm:ms-4">
                <p class="text-lg text-gray-700 text-center italic">
                  The Sangguniang Bayan is the local legislative branch of the
                  municipal governments in the Philippines. It is responsible
                  for passing ordinances and resolutions for the administration
                  of a municipality. Its powers are defined by the Local
                  Government Code, passed by Congress in 1991.
                </p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End About --> */}

      <div className="breakLine mb-5"></div>

      {/* <!-- Location --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 sm:items-center gap-8">
          <div class="sm:order-2">
            <div class="relative rounded-lg">
              <img
                class="top-0 start-0 object-cover rounded-lg"
                src={Map}
                alt="Image Description"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div class="sm:order-1">
            <h2 class="text-center text-2xl font-bold md:text-2xl text-gray-700 italic">
              Location
            </h2>

            {/* <!-- Avatar --> */}
            <div class="mt-6 sm:mt-10 flex items-center">
              <div class="ms-3 sm:ms-4">
                <p class="text-lg text-center text-gray-700 italic">
                  The Sangguniang Bayan of Naic, Cavite Office is located in
                  Municipal Hall of Naic, Addressed at Barangay Ibayo Silangan,
                  Naic, Cavite.
                </p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}

            <div class="mt-10 text-center">
              <a
                class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                href="https://maps.app.goo.gl/szvUz5Mc41PfCLzE7"
              >
                Locate on Google Maps
              </a>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Location --> */}

      <div className="breakLine mb-5"></div>

      {/* <!-- Contacts --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-3 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 sm:items-center gap-8">
          <div class="sm:order-1">
            <div class="relative rounded-lg">
              <img
                class=" top-0 start-0 object-cover rounded-lg pl-5"
                src={Hall}
                alt="Image Description"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div class="sm:order-1">
            <h2 class="text-center text-2xl font-bold md:text-2xl text-gray-700 italic">
              Contacts
            </h2>

            {/* <!-- Avatar --> */}
            <div class="container mt-6 sm:mt-10 flex items-right italic">
              <div class="ms-3 sm:ms-4">
                <div className="icon flex">
                  <img src={Phone} className="" />
                  <a className="text text-gray-700">(046)856-0656/865-0650</a>
                </div>
                <div className="icon flex">
                  <img src={Email} />
                  <a
                    className="text-gray-700"
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbmGvwHKZhbhKNlLWKgdQNkCMkBlDHlmSlnvlNxTGNFXGnXMMhpbCbkdZMQCpmQFzzKdD"
                  >
                    mayorjun.naic@gmail.com
                  </a>
                </div>
                <div className="icon flex">
                  <img src={Facebook} />
                  <a
                    className="text text-gray-700"
                    href="https://www.facebook.com/municipalityofnaic"
                  >
                    Municipality of Naic
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- End Avatar --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Contacts --> */}
    </>
  );
};

export default About;
