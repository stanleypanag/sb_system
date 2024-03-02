// imports from guest loader
import {Guest, Regular} from "./loader";

import Footer from "./components/reusable/footer/Footer";

const App = () => {
  return (
    <>
      <div className="dark:bg-white">
        {/* <div>
          <Guest />
        </div> */}

        <div>
          <Regular />
        </div>

        {/* <div><Admin/></div>  */}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;

// Logic:
// App.jsx will contains logic of access control and authentication paths.
