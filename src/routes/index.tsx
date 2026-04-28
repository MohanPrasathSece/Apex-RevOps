import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { ExpandingCard } from "../components/sections/ExpandingCard";
import { Stats } from "../components/sections/Stats";
import { HorizontalServices } from "../components/sections/HorizontalServices";

import { Testimonials } from "../components/sections/Testimonials";
import { LogoMarquee } from "../components/sections/LogoMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex RevOps · Growth Solutions That Actually Work" },
      { name: "description", content: "Premium B2B lead generation, cold outreach and AI automation that books qualified meetings — at scale." },
      { property: "og:title", content: "Apex RevOps · Growth Solutions That Actually Work" },
      { property: "og:description", content: "Premium B2B lead generation, cold outreach and AI automation that books qualified meetings — at scale." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ExpandingCard />
      <Stats />
      <HorizontalServices />
      <Testimonials />
    </>
  );
}
