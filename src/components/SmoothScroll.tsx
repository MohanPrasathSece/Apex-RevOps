import { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "@tanstack/react-router";

declare global {
  interface Window {
    lenis: any;
  }
}

export function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2, // Optional: adjust touch sensitivity if needed
    });
    
    // Check if it's mobile to potentially disable or adjust
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // On mobile, we might want to disable smooth scrolling entirely if the user prefers "normal scroll"
      // or just let the browser handle it.
      // For Lenis, we can stop it.
    }

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // When pathname changes, tell Lenis to scroll to top instantly
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}