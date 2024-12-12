"use client";

import Loading from "./loading";
import Background from "./background";
import MainContent from "./mainContent";

import { useState } from "react";



export default function Main() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Background />
          <MainContent />
        </>
      )}
    </div>
  );
}
