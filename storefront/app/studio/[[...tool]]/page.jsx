"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../storefront/sanity.config.js";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
