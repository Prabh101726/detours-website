import StorySections from "@/components/story/StorySections";
import HomeEnhancer, { HOME_STORY_ID } from "@/components/story/HomeEnhancer";

export default function HomePage() {
  return (
    <div id={HOME_STORY_ID} className="relative">
      <HomeEnhancer />
      <StorySections />
    </div>
  );
}
