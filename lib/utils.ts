import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const enumToOptions = <T extends Record<string, string>>(enumObj: T) =>
  Object.entries(enumObj).map(([key, value]) => ({
    label: key.replace(/_/g, " "),
    value,
  }));
