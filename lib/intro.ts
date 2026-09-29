"use client";

/**
 * Tiny coordination point between the intro curtain and above-the-fold
 * animations, so the hero doesn't play its reveal behind the curtain.
 * A pre-paint script in the root layout sets `html[data-intro]` to
 * "pending" (first visit this session) or "done".
 */

let done = false;
const listeners = new Set<() => void>();

function alreadyDone() {
  return (
    done ||
    (typeof document !== "undefined" &&
      document.documentElement.dataset.intro !== "pending")
  );
}

export function markIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((cb) => cb());
  listeners.clear();
}

export function onIntroDone(cb: () => void): () => void {
  if (alreadyDone()) {
    cb();
    return () => {};
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
