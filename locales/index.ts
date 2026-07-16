import { es } from "./es";
import { en } from "./en";

export const locales: Record<string, any> = {
  es,
  en,
};

export type LocaleType = typeof es;
