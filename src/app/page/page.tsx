
import CacheClear from "@/components/cache-clear";
import Link from "next/link";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

export default function Home() {
  const date = new Date().getSeconds();
  return (
    <main className="text-9xl w-screen h-screen flex flex-col items-center justify-center gap-y-10">
      <div>{date}</div>
      
      <div>
        {/* <Link className="underline" href="/other-page">
          Other Page
        </Link> */}
        <a href="/other-page">Other Page</a>
      </div>
      <div>
        <CacheClear />
      </div>
    </main>
  );
}
