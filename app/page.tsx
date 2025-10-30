"use client"
import HeroSection from "@/components/home/HeroSection";
import Features from "@/components/home/Features";
import Support from "@/components/home/support";
import Upcoming from "@/components/home/upcoming";
import Footer from "@/components/home/footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Add the scrollbar styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      ::-webkit-scrollbar-thumb {
        background: #1a1a1a;
        border-radius: 2px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #2a2a2a;
      }
      html {
        scrollbar-width: thin;
        scrollbar-color: #1a1a1a #0a0a0a;
      }
    `;
    document.head.appendChild(style);

    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      } catch (error) {
        console.error('Locomotive Scroll failed:', error);
      }
    })()
  }, []);
  

  return (
    <>
    <HeroSection />
    <Features />
    <Support />
    <Upcoming />
    <Footer />
    </>
  )
}
