import React from "react";
import Unlad from "../../../../assets/unlad2.jpg";

const AdminDashboard = () => {
  return (
    <div>
      {/* <!-- Card Section --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* <!-- Card --> */}
          <div class="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                USERS
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                150
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                RESOLUTIONS
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                25
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-red-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                ORDINANCES
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                4
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Section --> */}

      <section className="bg-gray-800 text-gray-100 m-10">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Morbi tempor</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                  Vestibulum diam nunc
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Donec porta enim vel{" "}
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Dec 2020
                  </time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci
                    scelerisque. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Aliquam sit amet nunc ut
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jul 2019
                  </time>
                  <p className="mt-3">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                    nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                    turpis eget egestas sodales.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Pellentesque habitant morbi
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                    velit consectetur nisl, sit amet condimentum lacus orci nec
                    purus. Mauris quis quam suscipit, vehicula felis id,
                    vehicula enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
