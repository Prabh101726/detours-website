import type { Metadata } from "next";
import StorySections from "@/components/story/StorySections";
import HomeEnhancer, { HOME_STORY_ID } from "@/components/story/HomeEnhancer";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/");

export default function HomePage() {
  return (
    <div id={HOME_STORY_ID} className="relative">
      <HomeEnhancer />
      <StorySections />
    </div>
  );
}
