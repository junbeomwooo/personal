"use client";

import Loading from "./loading";
import Header from "./header";
import { useState } from "react";
import Background from "./background";

export default function Main() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Background />
          
          </>
      )}
    </>
  );
}
