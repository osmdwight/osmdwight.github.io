"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, CaretLeft, CaretRight, Check, List, Star, X } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { bentoFeatures, journeySteps, navigation, outcomeSlides } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/dwightgonzales/discovery-call";

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Gomatic home">
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      Gomatic
    </a>
  );
}

function BookingLink({ className = "button button-primary", children = "Book a strategy call" }) {
  return (
    <a className={className} href="#book">
      <span>{children}</span>
      <ArrowDownRight size={18} weight="regular" aria-hidden="true" />
    </a>
  );
}

export function HomePage() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeOutcome, setActiveOutcome] = useState(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.from(".hero-reveal", {
        y: 44,
        opacity: 0,
        duration: 1.05,
        stagger: 0.1,
        ease: "power3.out",
      });

      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      gsap.to(words, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".manifesto-copy",
          start: "top 78%",
          end: "bottom 42%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 88, scale: 0.94, opacity: 0.35 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 30%",
              scrub: true,
            },
          },
        );

        if (index < 2) {
          gsap.to(card, {
            scale: 0.96 - index * 0.015,
            opacity: 0.62,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 15%",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: root },
  );

  const manifesto =
    "The best service businesses already create moments worth talking about. Gomatic makes sure those moments become trust, demand, and a customer journey that keeps moving.";

  function moveOutcome(direction: number) {
    setActiveOutcome((current) => (current + direction + outcomeSlides.length) % outcomeSlides.length);
  }

  return (
    <main ref={root} id="top" className="site-shell">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <Logo />
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <BookingLink className="button button-nav">Talk to Gomatic</BookingLink>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#book" onClick={() => setMenuOpen(false)}>
              Book a strategy call
            </a>
          </div>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-reveal">Reputation and customer journey automation</p>
          <h1 id="hero-title" className="hero-title hero-reveal">
            <span className="hero-line">More Reviews.</span>
            <span className="hero-line">Higher Rankings.</span>
            <span className="hero-line hero-line-offset">Zero Extra Work.</span>
          </h1>
          <div className="hero-bottom hero-reveal">
            <p>
              Gomatic turns completed jobs into visible trust, answers new inquiries, and keeps every customer moving toward the next right step.
            </p>
            <div className="hero-actions">
              <BookingLink />
              <a className="button button-ghost" href="#services">
                <span>Explore the system</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <span>See the journey</span>
          <ArrowDownRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="manifesto section-pad" aria-label="Gomatic point of view">
        <p className="manifesto-copy">
          {manifesto.split(" ").map((word, index) => (
            <span className="manifesto-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading">
          <h2>One connected system around the work you already do.</h2>
          <p>Built for service businesses that win on responsiveness, trust, and a consistently good customer experience.</p>
        </div>

        <div className="bento-grid">
          {bentoFeatures.map((feature, index) => (
            <article className={`feature-card ${feature.className}`} key={feature.title}>
              <div className="feature-copy">
                <span className="feature-number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              {index === 0 && (
                <div className="review-stream" aria-hidden="true">
                  <div className="review-stream-card review-stream-one">
                    <div className="avatar avatar-one">LM</div>
                    <div><strong>Job completed</strong><span>Review request scheduled</span></div>
                    <Check size={18} weight="bold" />
                  </div>
                  <div className="review-stream-card review-stream-two">
                    <div className="review-stars"><Star size={14} weight="fill" /><Star size={14} weight="fill" /><Star size={14} weight="fill" /><Star size={14} weight="fill" /><Star size={14} weight="fill" /></div>
                    <strong>Fast, professional, and easy.</strong>
                    <span>Feedback ready for approval</span>
                  </div>
                  <div className="review-stream-card review-stream-three">
                    <div className="avatar avatar-two">G</div>
                    <div><strong>Social post drafted</strong><span>Customer proof keeps moving</span></div>
                    <ArrowRight size={18} />
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="social-visual" aria-hidden="true">
                  <div className="social-window">
                    <span className="social-line social-line-short" />
                    <span className="social-line" />
                    <span className="social-line" />
                    <div className="social-rating"><Star size={15} weight="fill" /> 5.0</div>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="voice-visual" aria-hidden="true">
                  {[18, 34, 48, 70, 40, 58, 28, 64, 44, 22].map((height, bar) => (
                    <span key={bar} style={{ height }} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="journey section-pad">
        <div className="section-heading section-heading-light">
          <h2>Make every handoff feel considered.</h2>
          <p>From the first ring to the public review, each stage should know what happens next.</p>
        </div>
        <div className="journey-accordion">
          {journeySteps.map((step, index) => (
            <button
              className={`journey-panel ${activeJourney === index ? "is-active" : ""}`}
              key={step.title}
              type="button"
              onClick={() => setActiveJourney(index)}
              onMouseEnter={() => setActiveJourney(index)}
              aria-expanded={activeJourney === index}
            >
              <Image src={step.image} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
              <span className="journey-overlay" />
              <span className="journey-index">0{index + 1}</span>
              <span className="journey-title">{step.title}</span>
              <span className="journey-detail">
                <strong>{step.summary}</strong>
                <span>{step.detail}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="stack-section section-pad" aria-labelledby="stack-title">
        <div className="stack-intro">
          <h2 id="stack-title">Automation should make the business feel more human.</h2>
          <p>Not more complicated. Not more robotic. Just better timed.</p>
        </div>
        <div className="stack-list">
          <article className="stack-card stack-card-one">
            <span>Respond</span>
            <h3>Meet demand in the moment.</h3>
            <p>Use an AI voice agent to answer, qualify, and route inquiries when your team cannot pick up.</p>
            <div className="stack-art stack-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          </article>
          <article className="stack-card stack-card-two">
            <span>Guide</span>
            <h3>Keep the customer journey in motion.</h3>
            <p>Trigger clear reminders, confirmations, and handoffs around every booked service.</p>
            <div className="stack-art stack-path" aria-hidden="true"><i /><i /><i /><i /></div>
          </article>
          <article className="stack-card stack-card-three">
            <span>Amplify</span>
            <h3>Let a great job keep selling.</h3>
            <p>Ask for feedback, guide the right customers to Google, and turn approved praise into social content.</p>
            <div className="stack-art stack-stars" aria-hidden="true"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
          </article>
        </div>
      </section>

      <section id="outcomes" className="outcomes section-pad">
        <div className="outcomes-visual">
          <Image
            src="/assets/outcomes-connected-growth.png"
            alt="Connected service journey from inquiry and booking to completed work and customer feedback"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className="portrait-stack" aria-hidden="true">
            <span className="portrait">
              <Image src="/assets/profile-business-owner.png" alt="" fill sizes="50px" />
            </span>
            <span className="portrait">
              <Image src="/assets/profile-operations-manager.png" alt="" fill sizes="50px" />
            </span>
            <span className="portrait">
              <Image src="/assets/profile-satisfied-customer.png" alt="" fill sizes="50px" />
            </span>
          </div>
        </div>
        <div className="outcomes-copy" aria-live="polite">
          <span className="outcome-index">{outcomeSlides[activeOutcome].index} / 03</span>
          <h2>{outcomeSlides[activeOutcome].title}</h2>
          <p>{outcomeSlides[activeOutcome].copy}</p>
          <div className="carousel-controls">
            <button type="button" onClick={() => moveOutcome(-1)} aria-label="Previous outcome"><CaretLeft weight="regular" /></button>
            <button type="button" onClick={() => moveOutcome(1)} aria-label="Next outcome"><CaretRight weight="regular" /></button>
          </div>
        </div>
      </section>

      <section id="book" className="booking section-pad">
        <div className="booking-heading">
          <p className="eyebrow">Your next customer journey starts here</p>
          <h2>Turn good service into your strongest growth channel.</h2>
          <p>Choose a time that works for you. We’ll discuss where inquiries or follow-up are getting stuck and map the first practical automation to fix it.</p>
        </div>
        <a className="button button-primary booking-cta" href={BOOKING_URL}>
          <span>Book a discovery call</span>
          <ArrowRight size={20} weight="regular" aria-hidden="true" />
        </a>
      </section>

      <footer className="footer">
        <Logo />
        <p>Reputation and customer journey automation for service businesses.</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#journey">Journey</a>
          <a href="#book">Contact</a>
        </div>
        <span className="footer-note">Built for the work after the handshake.</span>
      </footer>
    </main>
  );
}
