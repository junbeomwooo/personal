"use client";

import Loading from "./loading";
import Header from "./header";
import { useState } from "react";
import { ReactTyped } from "react-typed";

import Background from "./background";

export default function Main() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Background />
          <Header />
        </>
      )}
    </>
  );
}
