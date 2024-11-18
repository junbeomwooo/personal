"use client";

import Loading from "./loading";
import Header from "./header";
import Background from "./background";
import MainContent from "./mainContent";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Header />
            <MainContent />
            <Background />
          </motion.div>
        </>
      )}
    </>
  );
}
