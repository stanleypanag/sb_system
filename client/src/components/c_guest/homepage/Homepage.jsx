import React from "react";
import "./homepage.css";

import Cover from "./search_section/Cover";
import RecentDocs from "./recent_docs/RecentDocs";
import About from "./about/About";

const Homepage = () => {
  return (
    <>
      <Cover />
      <RecentDocs />

      <section className="about pb-20 bg-gray-300" id="about">
        <div className="about-title mb-10">
          <h2 className="font-bold text-5xl text-black pt-20 tracking-widest">
            ABOUT
          </h2>
        </div>

        <About />
      </section>
    </>
  );
};

export default Homepage;
