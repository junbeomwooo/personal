"use client";

import Loading from "./loading";
import Header from "./header";
import { useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
          <Header />
      )}
    </>
  );
}
