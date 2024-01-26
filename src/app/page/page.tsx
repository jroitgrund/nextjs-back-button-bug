import CacheClear from "@/components/cache-clear";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="text-9xl w-screen h-screen flex flex-col items-center justify-center gap-y-10">
      <div>{new Date().getSeconds()}</div>
      <div>
        <Link className="underline" href="/other-page">
          Other Page
        </Link>
      </div>
      <div>
        <CacheClear />
      </div>
    </main>
  );
}
