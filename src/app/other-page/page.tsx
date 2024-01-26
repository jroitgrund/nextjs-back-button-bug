import CacheClear from "@/components/cache-clear";
import Link from "next/link";

export default function OtherPage() {
  return (
    <main className="text-9xl w-screen h-screen flex flex-col items-center justify-center gap-y-10">
      <div>
        <Link href="/page" className="underline">
          Back to Home
        </Link>
      </div>
      <div>
        <CacheClear />
      </div>
    </main>
  );
}
