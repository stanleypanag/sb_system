import React from 'react'
import './homepage.css'

import SearchSection from './search_section/SearchSection'
import RecentDocs from './recent_docs/RecentDocs'
import About from './about/About'

const Homepage = () => {
  return (
    <>

      {/* <SearchSection />
      <RecentDocs />
      
      <div className="about-title mb-10" id="about">
          <div className="breakLine1"></div>
          <div className="dot"></div>
          <h2 className="font-bold text-sm text-red-800">About</h2>
          <div className="dot"></div>
          <div className="breakLine1"></div>
      </div>

      <div className="about pb-20">
        <About />
      </div> */}

      <SearchSection />
      <RecentDocs />

      <div className="about pb-20">

        <div className="about-title mb-10" id="about">   
            <h2 className="font-bold text-5xl text-black pt-20 tracking-widest">ABOUT</h2>
        </div>
          
        <About />
      </div>
    </>
    
  )
}

export default Homepage