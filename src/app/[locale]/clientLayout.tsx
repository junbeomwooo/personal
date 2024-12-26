"use client";

import { useState } from "react";
import Header from "../components/header";
import Loading from "../components/loading";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  return loading ? (

    <Loading setLoading={setLoading} />
  ) : (
    <div className="max-w-[1921px] m-auto ">
      <Header />
      {children}
    </div>
  );
}