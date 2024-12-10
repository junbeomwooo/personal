"use client";

import Loading from "./loading";
import Header from "./header";
import Background from "./background";
import MainContent from "./mainContent";

import { useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);

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
