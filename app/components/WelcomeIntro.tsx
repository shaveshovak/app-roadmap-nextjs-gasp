"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import woman3dSvg from "../../assets/icons/svg";

export default function WelcomeIntro({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [introComplete, setIntroComplete] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const womanRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(dashboardRef.current, { autoAlpha: 1, y: 0 });
      const frame = window.requestAnimationFrame(() => setIntroComplete(true));

      return () => window.cancelAnimationFrame(frame);
    }

    gsap.set(dashboardRef.current, { autoAlpha: 0, y: 18 });
    gsap.set([womanRef.current, messageRef.current], { autoAlpha: 0, y: 24 });

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setIntroComplete(true),
    });

    timeline
      .to(womanRef.current, { autoAlpha: 1, y: 0, duration: 0.8 })
      .to(
        womanRef.current,
        {
          rotate: 4,
          x: 10,
          y: -8,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          transformOrigin: "50% 85%",
        },
        "-=0.25",
      )
      .to(messageRef.current, { autoAlpha: 1, y: 0, duration: 0.65 }, "-=0.2")
      .to({}, { duration: 0.85 })
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.55 })
      .to(dashboardRef.current, { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.2");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      {!introComplete && (
        <div
          aria-live="polite"
          className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#f6f7f9] px-5"
          ref={overlayRef}
        >
          <div className="grid w-full max-w-5xl items-center gap-8 md:grid-cols-[0.8fr_1fr]">
            <div
              aria-hidden="true"
              className="mx-auto h-[340px] w-[170px] overflow-hidden rounded-[2rem] drop-shadow-2xl sm:h-[420px] sm:w-[198px]"
              dangerouslySetInnerHTML={{ __html: woman3dSvg }}
              ref={womanRef}
            />

            <div className="space-y-5 text-center md:text-left" ref={messageRef}>
              <p className="mx-auto w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-600 md:mx-0">
                Welcome to Roadmap Index
              </p>
              <h1 className="text-4xl font-black leading-none tracking-normal text-slate-950 sm:text-6xl">
                Let&apos;s find your perfect software roadmap.
              </h1>
              <p className="mx-auto max-w-xl text-lg leading-8 text-slate-600 md:mx-0">
                Explore the paths, compare the roles, and choose where your next
                chapter in tech begins.
              </p>
            </div>
          </div>
        </div>
      )}

      <div ref={dashboardRef}>{children}</div>
    </>
  );
}
