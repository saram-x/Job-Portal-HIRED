import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// Utility function to merge and conditionally apply CSS classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
