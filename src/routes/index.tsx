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
      { title: "Apex RevOps · B2B Pipeline Generation & Outreach Automation" },
      { name: "description", content: "We help businesses generate more revenue through outbound and inbound systems built for predictable growth." },
      { property: "og:title", content: "Apex RevOps · B2B Pipeline Generation & Outreach Automation" },
      { property: "og:description", content: "Qualified meetings through LinkedIn, cold email and AI automation." },
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
