"use client";

import Loading from "./loading";
import Header from "./header";
import Background from "./background";
import MainContent from "./mainContent";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(false);

  return (
    <>
        <Background />

        {loading ? (

            <Loading setLoading={setLoading} />
        ) : (
          <>
            <Header />
            <MainContent />
          </>
        )}
    </>
  );
}
