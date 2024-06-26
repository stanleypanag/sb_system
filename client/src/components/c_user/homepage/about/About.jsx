import React, { useState, useEffect, useRef } from "react";
import Phone from "../../../assets/phone.png";
import Email from "../../../assets/email.png";
import Facebook from "../../../assets/facebook.png";
import { supabase } from "../../../../supabase/supabase.js";
import "./about.css";

const About = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailPlaceHolder, setEmailPlaceholder] = useState("");
  const [textAreaPlaceHolder, setTextAreaPlaceholder] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const user = session.user;
        setUserEmail(user.email);
        setIsDisabled(false);
      } else {
        setEmailPlaceholder("You must first Login to enter email");
        setTextAreaPlaceholder("You must first Login to send a message");
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const message = formData.get("message");

    if (userEmail && message) {
      try {
        const { data, error } = await supabase
          .from("emails")
          .insert([{ email_address: userEmail, message: message }], {
            returning: "representation", // Add this line to return the inserted data
          });

        if (error) {
          console.error("Error inserting message:", error);
          alert(
            "An error occurred while sending your message. Please try again."
          );
        } else {
          console.log("Message sent successfully!");
          formRef.current.reset(); // Reset form fields after successful submission
        }
      } catch (error) {
        console.error("Error inserting message:", error);
        alert(
          "An error occurred while sending your message. Please try again."
        );
      }
    } else {
      alert("Please fill in both the email and message fields.");
    }
  };

  return (
    <>
      {/* <!-- About --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-row-3 sm:grid-row- lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div className="flex flex-col bg-transparent">
            <div className="flex-auto p-4 md:p-6">
              <h1 className="text-gray-800 text-center font-bold tracking-widest uppercase">
                The Sangguniang Bayan ng Naic
              </h1>

              <p className="mt-3 sm:mt-6 text-center text-gray-800 md:text-md tracking-wide">
                "The Sangguniang Bayan is the local legislative branch of the
                municipal governments in the Philippines. It is responsible for
                passing ordinances and resolutions for the administration of a
                municipality. Its powers are defined by the Local Government
                Code, passed by Congress in 1991."
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          <hr className="sm:block md:hidden border-gray-800"></hr>

          {/* <!-- Card --> */}
          <div className="flex flex-col bg-transparent">
            <div className="flex-auto p-4 md:p-6">
              <h1 className="font-bold text-gray-800 text-center tracking-widest uppercase">
                Location
              </h1>

              <p className="mt-3 sm:mt-6 text-center text-gray-800 md:text-md tracking-wide">
                " The Sangguniang Bayan of Naic, Cavite Office is located in
                Municipal Hall of Naic, Addressed at Barangay Ibayo Silangan,
                Naic, Cavite."
              </p>

              <div className="mt-10 text-center">
                <a
                  className="bg-none border-4 border-gray-800 hover:bg-gray-800 hover:text-gray-200 text-gray-800 text-sm font-bold py-2 px-4 rounded-full"
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
          <div className="flex flex-col bg-transparent">
            <div className="flex-auto p-4 md:p-6">
              <h1 className="font-bold text-center text-gray-800 tracking-widest uppercase">
                Contacts
              </h1>

              <div className="container mt-6 sm:mt-10 flex items-right">
                <div className="ms-3 sm:ms-4">
                  <div className="icon flex">
                    <img src={Phone} className="w-7" />
                    <a className="text text-gray-800">(046)856-0656/865-0650</a>
                  </div>
                  <div className="icon flex">
                    <img src={Email} className="w-7" />
                    <a
                      className="text-gray-800"
                      target="_blank"
                      href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbmGvwHKZhbhKNlLWKgdQNkCMkBlDHlmSlnvlNxTGNFXGnXMMhpbCbkdZMQCpmQFzzKdD"
                    >
                      municipal.sb.naic@gmail.com
                    </a>
                  </div>
                  <div className="icon flex">
                    <img src={Facebook} className="w-7" />
                    <a
                      className="text text-gray-800"
                      href="https://www.facebook.com/municipalityofnaic"
                      target="_blank"
                      rel="noopener noreferrer"
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

      <div className="bg-gray-700 grid grid-cols-1 gap-20 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 pb-20">
        <div className="flex flex-col justify-between items-center text-center">
          <div className="space-y-2">
            <h2 className="text-4xl text-white font-bold leadi lg:text-5xl">
              Your Feedback matters to us!
            </h2>
            <div className="text-gray-400">
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
            strokeWidth="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <path
                transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
                fill="#557e8b"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokeWidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
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
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={userEmail}
              placeholder={emailPlaceHolder}
              className="w-full p-3 rounded border border-gray-400 bg-gray-300 text-gray-800"
              disabled={isDisabled}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={textAreaPlaceHolder}
              className="w-full p-3 rounded border border-gray-400 bg-gray-300 text-gray-500"
              disabled={isDisabled}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-gray-900 text-gray-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default About;
