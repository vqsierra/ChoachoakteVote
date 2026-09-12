const PALETTE = ['#5f8a4e', '#d99a34', '#c15a3c', '#b23a6b', '#3f7ea6', '#8a5fb0'];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

// MurmurHash3 finalizer — spreads bits so that inputs differing only in a
// small integer (like consecutive dot indices) don't produce near-identical
// output, which a plain rolling hash does.
function fmix32(h) {
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return (h ^ (h >>> 16)) >>> 0;
}

/** Purely decorative color cycle — no meaning attached to a given dot. */
export function decorativeColor(index) {
  return PALETTE[index % PALETTE.length];
}

/** Stable color for a participant id, so the same person's dots match across cards. */
export function participantColor(participantId) {
  return PALETTE[hashString(participantId) % PALETTE.length];
}

/** Deterministic scatter position within a card's dot cluster, stable across re-renders. */
export function dotPosition(itemId, index) {
  const base = hashString(itemId);
  const seed = fmix32((base ^ Math.imul(index + 1, 0x9e3779b1)) >>> 0);
  const x = 14 + (seed % 72);
  const y = 12 + ((seed >>> 8) % 66);
  return { left: `${x}%`, top: `${y}%` };
}
