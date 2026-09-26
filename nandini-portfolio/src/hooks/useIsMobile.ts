import { useMediaQuery } from "./useMediaQuery";

/** Narrow viewport OR a coarse (touch) primary pointer — used to cut particle counts, bloom, cursor. */
export function useIsMobile(): boolean {
  const narrow = useMediaQuery("(max-width: 768px)");
  const coarse = useMediaQuery("(pointer: coarse)");
  return narrow || coarse;
}
