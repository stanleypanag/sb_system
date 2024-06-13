import React, { useState, useEffect } from "react";
import Unlad from "../../../../assets/unlad2.jpg";
import FolderBlue from "../../../../assets/FolderBlue.png";
import FolderYellow from "../../../../assets/FolderYellow.png";
import { Link } from "react-router-dom";
import { supabase } from "../../../../../supabase/supabase.js";

const AdminDashboard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [resolutionCount, setResolutionCount] = useState(0);
  const [ordinanceCount, setOrdinanceCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const { count: resolutionCount, error: resolutionError } =
          await supabase
            .from("document")
            .select("doc_type", { count: "exact", distinct: true })
            .eq("doc_type", "RESOLUTION");

        if (resolutionError) {
          console.error("Error fetching resolution count:", resolutionError);
        } else {
          setResolutionCount(resolutionCount);
        }

        const { count: ordinanceCount, error: ordinanceError } = await supabase
          .from("document")
          .select("doc_type", { count: "exact", distinct: true })
          .eq("doc_type", "ORDINANCE");

        if (ordinanceError) {
          console.error("Error fetching ordinance count:", ordinanceError);
        } else {
          setOrdinanceCount(ordinanceCount);
        }

        const { count: userCount, error: userError } = await supabase
          .from("users")
          .select("*", { count: "exact", distinct: true });

        if (userError) {
          console.error("Error fetching user count:", userError);
        } else {
          setUserCount(userCount);
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const user = session.user;
        setUserEmail(user.email);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
      fetchCounts();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {/* <!--Outside Card --> */}
      <div class="group relative block rounded-xl m-5">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
          <img
            class="size-full absolute top-0 start-0 object-cover"
            src={Unlad}
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 inset-x-0 z-10">
          <div class="flex flex-col h-full p-4 sm:p-6">
            <h3 class="text-lg sm:text-3xl font-semibold text-gray-200 group-hover:text-white/80 italic">
              {`Welcome Admin ${userEmail}`}
            </h3>
          </div>
        </div>
      </div>
      {/* <!-- End Outside Card --> */}

      {/* <!-- Card Section --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* <!-- Card --> */}
          <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                Users
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                {userCount}
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                Ordinances
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                {ordinanceCount}
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div class="inline-flex justify-center items-center">
              <span class="size-2 inline-block bg-red-500 rounded-full me-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                Resolutions
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
                {resolutionCount}
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Section --> */}

      {/* <!-- Card Blog --> */}
      <div class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid lg:grid-cols-2 gap-6">
          {/* <!-- Card --> */}
          <Link class="group relative block rounded-xl" to="/resolutionManager">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full ">
              <img
                class="size-full absolute top-0 start-0 object-cover"
                src={FolderBlue}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col w-[20rem] rounded-xl h-full p-4 sm:p-6 bg-gray-900">
                <h3 class="text-xl font-semibold text-gray-400 group-hover:text-white/80 italic">
                  Manage Resolutions
                </h3>
              </div>
            </div>
          </Link>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <Link class="group relative block rounded-xl" to="/ordinanceManager">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full">
              <img
                class="size-full absolute top-0 start-0 object-cover"
                src={FolderYellow}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col w-[20rem] rounded-xl h-full p-4 sm:p-6 bg-gray-900">
                <h3 class="text-xl font-semibold text-gray-400 group-hover:text-white/80 italic">
                  Manage Ordinances
                </h3>
              </div>
            </div>
          </Link>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
};

export default AdminDashboard;
