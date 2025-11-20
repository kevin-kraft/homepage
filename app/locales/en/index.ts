// app/locales/en/index.ts
import type { ResourceLanguage } from "i18next";
import notFound from "./not-found"; 
import translation from "./translation"; // import your namespaced locales

export default { notFound, translation } satisfies ResourceLanguage;