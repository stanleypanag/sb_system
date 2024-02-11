import React from 'react'
import logo from '../../assets/logo.png'
import Rights from '../../assets/rights.png'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer class="w-full py-3 px-4 sm:px-6 lg:px-0 mx-auto bg-red-800">
        {/* <!-- Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-center">
          <div className="flex justify-center">
           <img src={logo} className="w-16"/>
            <a
              class="pt-5 pl-5 font-bold text-white flex-none text-xl dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              Sangguniang Bayan
            </a>
          </div>
          {/* <!-- End Col --> */}

         <div className="text-white text-xs">
          <p>
          The official Website of the Sangguniang Bayan of Naic, Cavite
          </p>
          <div className="footer-text flex">
            <img src={Rights} />
            <p>2023</p>
          </div>
          <p>
            Privacy Policy
          </p>
         </div>

          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </footer>
    </>
  )
}

export default Footer