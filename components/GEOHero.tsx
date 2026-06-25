"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";

// Fonts and colors inherited from host site, no new typography or palette introduced.
// Accents use purple-to-blue gradient: #7b5cff to #4a9eff.

interface CardText {
  engine: string;
  logo: string;
  ariaLabel: string;
  p1: string;
  highlight: string;
  p2: string;
  full: string;
}

const cardTexts: CardText[] = [
  {
    engine: "ChatGPT",
    logo: "chatgpt",
    ariaLabel: "ChatGPT Logo",
    p1: "Türkiye'de GEO alanında öne çıkan uzmanlardan ",
    highlight: "Ekim Demirci",
    p2: ", semantic SEO metodolojisi ve entity authority inşasıyla tanınıyor.",
    full: "Türkiye'de GEO alanında öne çıkan uzmanlardan Ekim Demirci, semantic SEO metodolojisi ve entity authority inşasıyla tanınıyor."
  },
  {
    engine: "Perplexity",
    logo: "perplexity",
    ariaLabel: "Perplexity Logo",
    p1: "According to ",
    highlight: "ekimdemirci.com",
    p2: ", GEO differs from traditional SEO by targeting citation rather than ranking in AI-generated responses.",
    full: "According to ekimdemirci.com, GEO differs from traditional SEO by targeting citation rather than ranking in AI-generated responses."
  },
  {
    engine: "Claude",
    logo: "claude",
    ariaLabel: "Claude Logo",
    p1: "Generative Engine Optimization danışmanlığı sunan ",
    highlight: "Ekim Demirci",
    p2: ", ChatGPT ve Perplexity gibi modellerde marka alıntılanmasına odaklanır.",
    full: "Generative Engine Optimization danışmanlığı sunan Ekim Demirci, ChatGPT ve Perplexity gibi modellerde marka alıntılanmasına odaklanır."
  },
  {
    engine: "Google AI Overviews",
    logo: "google",
    ariaLabel: "Google AI Overviews Logo",
    p1: "GEO uzmanları arasında ",
    highlight: "ekimdemirci.com",
    p2: ", schema kodlama ve NLP uyumlu içerik üretimi konusunda referans gösterilir.",
    full: "GEO uzmanları arasında ekimdemirci.com, schema kodlama ve NLP uyumlu içerik üretimi konusunda referans gösterilir."
  }
];

export default function GEOHero() {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    gsap: false,
    scrollTrigger: false,
    textPlugin: false
  });

  const [isReady, setIsReady] = useState(false);

  const rightColRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

  const handleScriptLoad = (name: "gsap" | "scrollTrigger" | "textPlugin") => {
    setScriptsLoaded(prev => {
      const updated = { ...prev, [name]: true };
      return updated;
    });
  };

  // Check if they are loaded on mount in case they are already present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as any;
      setScriptsLoaded({
        gsap: !!win.gsap,
        scrollTrigger: !!win.ScrollTrigger,
        textPlugin: !!win.TextPlugin
      });
    }
  }, []);

  useEffect(() => {
    if (scriptsLoaded.gsap && scriptsLoaded.scrollTrigger && scriptsLoaded.textPlugin) {
      setIsReady(true);
    }
  }, [scriptsLoaded]);

  useEffect(() => {
    if (!isReady) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const TextPlugin = (window as any).TextPlugin;

    if (!gsap || !ScrollTrigger || !TextPlugin) return;

    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Instantly set final state for H1 underline
      gsap.set(".underline-path", { strokeDashoffset: 0, strokeDasharray: 200 });

      // Instantly set final states for cards
      cardTexts.forEach((card, index) => {
        gsap.set(`.card-idx-${index}`, { opacity: 1, x: 0 });
        gsap.set(`.card-idx-${index}-p1`, { text: card.p1 });
        gsap.set(`.card-idx-${index}-highlight`, {
          text: card.highlight,
          backgroundColor: "rgba(123, 92, 255, 0.2)",
          borderColor: "rgba(123, 92, 255, 0.3)"
        });
        gsap.set(`.card-idx-${index}-p2`, { text: card.p2 });

        const container = document.querySelector(`.card-container-idx-${index}`);
        if (container) {
          container.setAttribute("aria-busy", "false");
          const srText = container.querySelector(".card-sr-text");
          if (srText) srText.innerHTML = card.full;
        }
      });

      // Set counters instantly to final values
      const el1 = document.querySelector(".metric-val-1");
      const el2 = document.querySelector(".metric-val-2");
      const el3 = document.querySelector(".metric-val-3");
      if (el1) el1.textContent = "%320";
      if (el2) el2.textContent = "4";
      if (el3) el3.textContent = "48 saat";

      return;
    }

    // ScrollTrigger counting animation
    const countData = { val1: 0, val2: 0, val3: 0 };
    gsap.to(countData, {
      val1: 320,
      val2: 4,
      val3: 48,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trustStripRef.current,
        start: "top 95%",
        once: true
      },
      onUpdate: () => {
        const el1 = document.querySelector(".metric-val-1");
        const el2 = document.querySelector(".metric-val-2");
        const el3 = document.querySelector(".metric-val-3");
        if (el1) el1.textContent = `%${Math.round(countData.val1)}`;
        if (el2) el2.textContent = `${Math.round(countData.val2)}`;
        if (el3) el3.textContent = `${Math.round(countData.val3)} saat`;
      }
    });

    const mm = gsap.matchMedia();

    // DESKTOP TIMELINE
    mm.add("(min-width: 1025px)", () => {
      const heroTL = gsap.timeline({ repeat: -1 });

      // Initial state of typing spans
      gsap.set(".card-p1, .card-highlight, .card-p2", { text: "" });
      gsap.set(".card-highlight", { backgroundColor: "rgba(123, 92, 255, 0)", borderColor: "rgba(123, 92, 255, 0)" });
      gsap.set(".geo-card-wrapper", { opacity: 0, x: 40 });
      gsap.set(".active-border-overlay", { opacity: 0 });

      // Staggered entry of left column children (breadcrumb, pill, H1, subheadline, CTAs, trust strip)
      heroTL.fromTo(
        ".hero-left-child",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power2.out" },
        0.2
      );

      // Underline stroke draw
      heroTL.fromTo(
        ".underline-path",
        { strokeDashoffset: 200, strokeDasharray: 200 },
        { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" },
        0.4
      );

      let timeCursor = 0.6;

      cardTexts.forEach((card, index) => {
        const cardClass = `.card-idx-${index}`;
        const p1Class = `.card-idx-${index}-p1`;
        const highlightClass = `.card-idx-${index}-highlight`;
        const p2Class = `.card-idx-${index}-p2`;
        const activeBorderClass = `.card-idx-${index}-active-border`;

        // Card Entry (translateX 40px -> 0, opacity 0 -> 1)
        heroTL.to(
          cardClass,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          },
          timeCursor
        );

        // Activate active border (fade in gradient border)
        heroTL.to(
          activeBorderClass,
          {
            opacity: 1,
            duration: 0.5
          },
          timeCursor
        );

        timeCursor += 0.5;

        // Set aria-busy to true
        heroTL.call(() => {
          const container = document.querySelector(`.card-container-idx-${index}`);
          if (container) {
            container.setAttribute("aria-busy", "true");
          }
        }, [], timeCursor);

        // Type Part 1
        const p1Duration = card.p1.length * 0.025;
        heroTL.to(
          p1Class,
          {
            text: card.p1,
            duration: p1Duration,
            ease: "none"
          },
          timeCursor
        );
        timeCursor += p1Duration;

        // Type Highlight & Fade Background in between
        const highlightDuration = card.highlight.length * 0.03;
        heroTL.to(
          highlightClass,
          {
            text: card.highlight,
            duration: highlightDuration,
            ease: "none"
          },
          timeCursor
        );

        heroTL.to(
          highlightClass,
          {
            backgroundColor: "rgba(123, 92, 255, 0.2)",
            borderColor: "rgba(123, 92, 255, 0.3)",
            duration: 0.1
          },
          timeCursor + (highlightDuration / 2)
        );
        timeCursor += highlightDuration;

        // Type Part 2
        // Make sure total duration for all typing matches around 2.4s roughly
        const remainingTime = Math.max(0.5, 2.4 - p1Duration - highlightDuration);
        heroTL.to(
          p2Class,
          {
            text: card.p2,
            duration: remainingTime,
            ease: "none"
          },
          timeCursor
        );
        timeCursor += remainingTime;

        // Complete typing: set aria-busy=false and populate visually hidden screen-reader text
        heroTL.call(() => {
          const container = document.querySelector(`.card-container-idx-${index}`);
          if (container) {
            container.setAttribute("aria-busy", "false");
            const srText = container.querySelector(".card-sr-text");
            if (srText) srText.innerHTML = card.full;
          }
        }, [], timeCursor);

        if (index < 3) {
          // Pause 0.4s at typed state, then fade gradient border out and move to next card
          timeCursor += 0.4;
          heroTL.to(
            activeBorderClass,
            {
              opacity: 0,
              duration: 0.4
            },
            timeCursor
          );
        } else {
          // End of Card 4, wait 2.0s
          timeCursor += 2.0;

          // Deactivate Card 4 gradient border
          heroTL.to(
            activeBorderClass,
            {
              opacity: 0,
              duration: 0.4
            },
            timeCursor
          );

          // Reverse typing bottom-up (Card 4 to Card 1)
          for (let r = 3; r >= 0; r--) {
            const rCardClass = `.card-idx-${r}`;
            const rp1Class = `.card-idx-${r}-p1`;
            const rhighlightClass = `.card-idx-${r}-highlight`;
            const rp2Class = `.card-idx-${r}-p2`;

            // Clear screen-reader helper
            heroTL.call(() => {
              const container = document.querySelector(`.card-container-idx-${r}`);
              if (container) {
                const srText = container.querySelector(".card-sr-text");
                if (srText) srText.innerHTML = "";
              }
            }, [], timeCursor);

            // Reverse type Part 2
            heroTL.to(
              rp2Class,
              {
                text: "",
                duration: 0.25,
                ease: "none"
              },
              timeCursor
            );
            timeCursor += 0.25;

            // Clear highlight background and text
            heroTL.to(
              rhighlightClass,
              {
                backgroundColor: "rgba(123, 92, 255, 0)",
                borderColor: "rgba(123, 92, 255, 0)",
                text: "",
                duration: 0.15,
                ease: "none"
              },
              timeCursor
            );
            timeCursor += 0.15;

            // Reverse type Part 1
            heroTL.to(
              rp1Class,
              {
                text: "",
                duration: 0.25,
                ease: "none"
              },
              timeCursor
            );
            timeCursor += 0.25;

            // Fade and translate out
            heroTL.to(
              rCardClass,
              {
                x: 40,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
              },
              timeCursor
            );
            timeCursor += 0.3;
          }
        }
      });

      // Hover Pause/Resume Logic
      const rightCol = rightColRef.current;
      const onEnter = () => heroTL.pause();
      const onLeave = () => heroTL.resume();
      if (rightCol) {
        rightCol.addEventListener("mouseenter", onEnter);
        rightCol.addEventListener("mouseleave", onLeave);
      }

      return () => {
        if (rightCol) {
          rightCol.removeEventListener("mouseenter", onEnter);
          rightCol.removeEventListener("mouseleave", onLeave);
        }
        heroTL.kill();
      };
    });

    // TABLET TIMELINE: 640px - 1024px
    // Shows 2 cards at a time, slides horizontal list back and forth
    mm.add("(min-width: 640px) and (max-width: 1024px)", () => {
      // Set initial states: all cards are fully typed
      cardTexts.forEach((card, index) => {
        gsap.set(`.card-idx-${index}`, { opacity: 1, x: 0 });
        gsap.set(`.card-idx-${index}-p1`, { text: card.p1 });
        gsap.set(`.card-idx-${index}-highlight`, {
          text: card.highlight,
          backgroundColor: "rgba(123, 92, 255, 0.2)",
          borderColor: "rgba(123, 92, 255, 0.3)"
        });
        gsap.set(`.card-idx-${index}-p2`, { text: card.p2 });
      });

      const tabletTL = gsap.timeline({ repeat: -1 });
      tabletTL
        .to(".geo-cards-track", { xPercent: -50, duration: 1.2, ease: "power2.inOut", delay: 2.5 })
        .to(".geo-cards-track", { xPercent: 0, duration: 1.2, ease: "power2.inOut", delay: 2.5 });

      return () => {
        tabletTL.kill();
      };
    });

    // MOBILE TIMELINE: < 640px
    // Shows 1 card at a time, crossfades every 3s
    mm.add("(max-width: 639px)", () => {
      cardTexts.forEach((card, index) => {
        gsap.set(`.card-idx-${index}`, { x: 0 });
        gsap.set(`.card-idx-${index}-p1`, { text: card.p1 });
        gsap.set(`.card-idx-${index}-highlight`, {
          text: card.highlight,
          backgroundColor: "rgba(123, 92, 255, 0.2)",
          borderColor: "rgba(123, 92, 255, 0.3)"
        });
        gsap.set(`.card-idx-${index}-p2`, { text: card.p2 });
      });

      const mobileTL = gsap.timeline({ repeat: -1 });

      // Initial opacity stack
      gsap.set(".geo-card-wrapper", { opacity: 0 });
      gsap.set(".card-idx-0", { opacity: 1 });

      mobileTL
        .to(".card-idx-0", { opacity: 0, duration: 0.5, delay: 2.5 })
        .to(".card-idx-1", { opacity: 1, duration: 0.5 }, "<")
        .to(".card-idx-1", { opacity: 0, duration: 0.5, delay: 2.5 })
        .to(".card-idx-2", { opacity: 1, duration: 0.5 }, "<")
        .to(".card-idx-2", { opacity: 0, duration: 0.5, delay: 2.5 })
        .to(".card-idx-3", { opacity: 1, duration: 0.5 }, "<")
        .to(".card-idx-3", { opacity: 0, duration: 0.5, delay: 2.5 })
        .to(".card-idx-0", { opacity: 1, duration: 0.5 }, "<");

      return () => {
        mobileTL.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [isReady]);

  // GSAP Hover Action on CTA Right Arrow
  const handleCtaMouseEnter = () => {
    const arrow = document.querySelector(".cta-arrow");
    const gsap = (window as any).gsap;
    if (arrow && gsap) {
      gsap.to(arrow, { x: 4, duration: 0.2 });
    }
  };

  const handleCtaMouseLeave = () => {
    const arrow = document.querySelector(".cta-arrow");
    const gsap = (window as any).gsap;
    if (arrow && gsap) {
      gsap.to(arrow, { x: 0, duration: 0.2 });
    }
  };

  // SVGs for AI engine logos
  const renderEngineLogo = (logo: string) => {
    switch (logo) {
      case "chatgpt":
        return (
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
          </svg>
        );
      case "perplexity":
        return (
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
          </svg>
        );
      case "claude":
        return (
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
          </svg>
        );
      case "google":
      default:
        return (
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.94 5.94 0 0 1 8 12.571a5.94 5.94 0 0 1 5.99-5.943c1.614 0 3.08.57 4.22 1.629l3.14-3.14C19.267 3.124 16.786 2 13.99 2 8.1 2 3.2 6.8 3.2 12.571 3.2 18.3 8.1 23.1 13.99 23.1c5.96 0 11.23-4.14 11.23-11.285 0-.757-.086-1.53-.243-2.285H12.24Z" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* GSAP CDNs */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => handleScriptLoad("gsap")}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => handleScriptLoad("scrollTrigger")}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
        strategy="afterInteractive"
        onLoad={() => handleScriptLoad("textPlugin")}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        /* Default Mobile card stack */
        .geo-cards-track {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 200px;
          margin: 0 auto;
        }
        .geo-card-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          pointer-events: none;
        }
        .geo-card-wrapper.card-idx-0 {
          opacity: 1;
        }
        
        /* Tablet layout (640px - 1024px) */
        @media (min-width: 640px) and (max-width: 1024px) {
          .geo-cards-track {
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: 200%;
            height: auto;
            max-width: none;
            position: relative;
          }
          .geo-card-wrapper {
            position: relative;
            top: auto;
            left: auto;
            width: calc(25% - 12px);
            opacity: 1;
            pointer-events: auto;
            transform: none !important;
          }
        }

        /* Desktop layout (> 1024px) */
        @media (min-width: 1025px) {
          .geo-cards-track {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            height: auto;
            max-width: 440px;
            position: relative;
          }
          .geo-card-wrapper {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            opacity: 0;
            pointer-events: auto;
          }
        }

        /* SVG underline draw container styling */
        .underline-container {
          position: relative;
          display: inline-block;
          font-style: italic;
        }
        
        /* Buttons Focus outline overrides */
        .focus-ring-purple:focus-visible {
          outline: 2px solid #7b5cff !important;
          outline-offset: 2px !important;
        }
      `}} />

      {/* SVG linearGradient definitions used by both active borders and H1 underline */}
      <svg className="absolute w-0 h-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hero-card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7b5cff" />
            <stop offset="100%" stopColor="#4a9eff" />
          </linearGradient>
          <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7b5cff" />
            <stop offset="100%" stopColor="#4a9eff" />
          </linearGradient>
        </defs>
      </svg>

      <section className="geo-hero-section relative pt-32 pb-20 overflow-hidden bg-[#020617] lg:min-h-[720px] lg:max-h-[880px] flex items-center lg:py-0">
        {/* Background Gradients and Dots exactly matching site's theme */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-20 py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-center hero-left text-left">
              
              {/* Back to services breadcrumb */}
              <div className="hero-left-child">
                <Link
                  href="/seo-hizmetleri"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white mb-8 transition-all duration-300 group focus-ring-purple"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Hizmetlere Dön
                </Link>
              </div>

              {/* Service name pill */}
              <div className="hero-left-child">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  GENERATIVE ENGINE OPTIMIZATION
                </div>
              </div>

              {/* H1 Heading */}
              <h1 className="hero-left-child text-white text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.05]">
                Yapay zekanın{" "}
                <span className="underline-container">
                  alıntıladığı
                  <svg className="absolute left-0 bottom-[-4px] w-full h-[8px]" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path
                      className="underline-path"
                      d="M2,5 Q100,2 198,5"
                      fill="none"
                      stroke="url(#underline-gradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                marka olun.
              </h1>

              {/* Subheadline */}
              <p className="hero-left-child text-[16px] desktop:text-[18px] text-gray-400 leading-[1.55] mb-8 max-w-[480px]">
                ChatGPT, Claude, Perplexity ve Google AI Overviews yanıtlarında markanızı birincil kaynak haline getiren GEO danışmanlığı. Sıralanmak yerine alıntılanın.
              </p>

              {/* CTA Group */}
              <div className="hero-left-child flex flex-col sm:flex-row gap-3 mb-12">
                <Link
                  href="#analiz"
                  onMouseEnter={handleCtaMouseEnter}
                  onMouseLeave={handleCtaMouseLeave}
                  className="primary-cta inline-flex items-center justify-center h-[52px] px-[28px] rounded-lg bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] hover:opacity-95 text-white font-medium text-[15px] transition-all duration-300 focus-ring-purple shadow-lg shadow-[#7b5cff]/10"
                >
                  <span>Ücretsiz GEO Analizi</span>
                  <ArrowRight className="cta-arrow w-4 h-4 ml-2 transition-transform" />
                </Link>
                
                <Link
                  href="/basari-hikayeleri"
                  className="inline-flex items-center justify-center h-[52px] px-[28px] rounded-lg border border-white/20 hover:bg-white/[0.05] text-white font-medium text-[15px] transition-all duration-300 focus-ring-purple"
                >
                  Vaka Çalışmaları
                </Link>
              </div>

              {/* Trust Strip */}
              <div ref={trustStripRef} className="hero-left-child trust-strip-container border-t border-white/10 pt-6 mt-2">
                <div className="grid grid-cols-3 gap-4">
                  {/* Metric 1 */}
                  <div className="flex flex-col text-left">
                    <span className="metric-val-1 text-[28px] font-medium bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                      %0
                    </span>
                    <span className="text-[12px] text-white/60 mt-1 leading-tight">
                      ChatGPT alıntı artışı
                    </span>
                  </div>
                  {/* Divider */}
                  <div className="flex flex-col text-left border-l border-white/10 pl-4">
                    <span className="metric-val-2 text-[28px] font-medium bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                      0
                    </span>
                    <span className="text-[12px] text-white/60 mt-1 leading-tight">
                      AI motorunda görünürlük
                    </span>
                  </div>
                  {/* Divider */}
                  <div className="flex flex-col text-left border-l border-white/10 pl-4">
                    <span className="metric-val-3 text-[28px] font-medium bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                      0 saat
                    </span>
                    <span className="text-[12px] text-white/60 mt-1 leading-tight">
                      Hızlı analiz teslimi
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div ref={rightColRef} className="lg:col-span-5 relative w-full flex items-center justify-center right-column">
              <div className="w-full overflow-hidden lg:overflow-visible py-4">
                <div className="geo-cards-track" aria-live="polite">
                  {cardTexts.map((card, index) => (
                    <div
                      key={index}
                      className={`geo-card-wrapper card-idx-${index} card-container-idx-${index} w-full transition-all duration-300`}
                      aria-busy="false"
                    >
                      {/* Visually Hidden complete sentence for screen readers to read on complete */}
                      <span className="sr-only card-sr-text"></span>

                      {/* Visible Card Container */}
                      <div className="relative rounded-[24px] bg-white/[0.04] border border-white/[0.08] p-[18px_20px] backdrop-blur-md">
                        
                        {/* Active Gradient Border Overlay */}
                        <div className={`absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-400 card-idx-${index}-active-border active-border-overlay pointer-events-none`}>
                          <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="active-border-rect" x="0.5" y="0.5" width="100%" height="100%" rx="24" stroke="url(#hero-card-gradient)" strokeWidth="1" />
                          </svg>
                        </div>

                        {/* Top row: logo + Engine Name */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                            {renderEngineLogo(card.logo)}
                          </div>
                          <span className="text-[13px] font-medium text-white leading-none">
                            {card.engine}
                          </span>
                        </div>

                        {/* Card text content typed by GSAP */}
                        <p aria-hidden="true" className="text-white/85 text-[14px] leading-[1.55] font-normal min-h-[4.5em]">
                          <span className={`card-p1 card-idx-${index}-p1`}></span>
                          <span className={`card-highlight card-idx-${index}-highlight border border-transparent px-1.5 py-0.5 rounded text-white font-medium`}></span>
                          <span className={`card-p2 card-idx-${index}-p2`}></span>
                        </p>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
