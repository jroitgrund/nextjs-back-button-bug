"use client";
import { useCallback } from "react";

export default function CacheClear() {
  const clearCache = useCallback(() => {
    fetch("/api/cache", { method: "DELETE" });
  }, []);

  return (
    <a className="underline cursor-pointer" onClick={clearCache}>
      Clear Cache
    </a>
  );
}
