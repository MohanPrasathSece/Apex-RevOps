import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { ScrollToTop } from "../components/ScrollToTop";
import { SmoothScroll } from "../components/SmoothScroll";
import { PageIntro } from "../components/PageIntro";
import { Cursor } from "../components/Cursor";
import { CTA } from "../components/sections/CTA";


function NotFoundComponent() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-[var(--beige)] px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-9xl text-[var(--ink)] font-light italic">404</h1>
          <h2 className="mt-4 text-xl font-display text-[var(--ink)]">Page not found</h2>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            The page you're looking for has wandered off.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--beige-light)] hover:shadow-gold transition-shadow"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Apex RevOps · Growth Solutions That Actually Work" },
      { name: "description", content: "Apex RevOps — premium B2B lead generation, cold outreach and AI automation that delivers booked meetings, not promises." },
      { name: "author", content: "Apex RevOps" },
      { property: "og:title", content: "Apex RevOps · Growth Solutions That Actually Work" },
      { property: "og:description", content: "Premium B2B lead generation and AI automation for revenue teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@apexrevops" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  const isContact = location.pathname === '/contact';

  return (
    <>
      <PageIntro />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main className="overflow-x-clip min-h-screen">
        <Outlet />
      </main>

      {!isContact && <CTA />}
      <Footer />
      <ScrollToTop />
    </>
  );
}
