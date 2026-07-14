"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Hydration-safe reduced-motion flag. The server (and the first client
 * render) always report `false` so the trees match; the real media-query
 * value applies right after mount.
 */
export function useReducedMotionSafe(): boolean {
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => setMounted(true), []);
  return mounted && !!reduced;
}
