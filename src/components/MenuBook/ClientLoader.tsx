"use client";

import dynamic from "next/dynamic";

const MenuBook = dynamic(() => import("@/components/MenuBook"), { ssr: false });

export default function ClientLoader() {
  return <MenuBook />;
}
