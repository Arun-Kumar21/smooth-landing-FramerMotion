import React, { useEffect, useState } from "react";

import { AnimatePresence, LayoutGroup , motion } from "framer-motion";
import Loader from "./components/Loader/loader";
import Banner from "./components/Banner/banner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);


  return (
    <LayoutGroup type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader" layout>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <motion.div>
            <Banner/>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
