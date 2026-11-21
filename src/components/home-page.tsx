"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, CalendarCheck, Quotes, CaretLeft, CaretRight, Check, House, List, MapPin, Play, Wallet, X } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { VIDEO_EMBED_URL, bentoFeatures, faqs, journeySteps, navigation, outcomeSlides, qualifiedChecks, testimonials } from "@/lib/site";

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

const checkIcons = [House, Wallet, MapPin, CalendarCheck];

function BookingLink({ className = "button button-primary", children = "Book a 15-minute call" }) {
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
    "Most renovation inquiries are price-checks from people who aren't ready to build. Gomatic screens every one, so your site visits go to homeowners who own the house, have the budget, and want to start soon.";

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
          <BookingLink className="button button-nav">Book a call</BookingLink>
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
              Book a 15-minute call
            </a>
          </div>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-reveal">For whole-house renovation contractors in Greater Manila</p>
          <h1 id="hero-title" className="hero-title hero-reveal">
            <span className="hero-line">4+ Qualified</span>
            <span className="hero-line">Site Visits.</span>
            <span className="hero-line hero-line-offset">In 60 Days.</span>
          </h1>
          <div className="hero-bottom hero-reveal">
            <p>
              Site visits with homeowners who own the house and have the budget for the projects you want. You pay only when they show up, and get your setup fee back if I miss.
            </p>
            <div className="hero-actions">
              <BookingLink />
              <a className="button button-ghost" href="#services">
                <span>See how it works</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <span>How it works</span>
          <ArrowDownRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="video-section section-pad" aria-labelledby="video-title">
          <div className="section-heading">
            <h2 id="video-title">How it works, in 2 minutes.</h2>
            <p>What we do, what you do, and how you pay.</p>
          </div>
          <div className="video-frame">
            {VIDEO_EMBED_URL ? (
              <iframe src={VIDEO_EMBED_URL} title="How Gomatic works" allow="fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              <div className="video-placeholder">
                <span className="video-play"><Play size={28} weight="fill" aria-hidden="true" /></span>
                <strong>2-minute video coming soon</strong>
                <span>How it works and what a qualified visit means.</span>
              </div>
            )}
          </div>
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
          <h2>Ads, screening and booking, done for you.</h2>
          <p>You keep doing what you&rsquo;re good at: the site visit and the build.</p>
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
                    <div className="avatar avatar-one">MR</div>
                    <div><strong>New inquiry</strong><span>2-storey house, Antipolo</span></div>
                    <ArrowRight size={18} />
                  </div>
                  <div className="review-stream-card review-stream-two">
                    <div className="review-stars"><Check size={14} weight="bold" /><Check size={14} weight="bold" /><Check size={14} weight="bold" /><Check size={14} weight="bold" /></div>
                    <strong>Owner, budget fits, starts in 6 weeks</strong>
                    <span>Passed all 4 checks</span>
                  </div>
                  <div className="review-stream-card review-stream-three">
                    <div className="avatar avatar-two">G</div>
                    <div><strong>Site visit booked</strong><span>Reminder sent the night before</span></div>
                    <Check size={18} weight="bold" />
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="social-visual" aria-hidden="true">
                  <div className="social-window">
                    <span className="social-line social-line-short" />
                    <span className="social-line" />
                    <span className="social-line" />
                    <div className="social-rating"><MapPin size={15} weight="fill" /> Your area</div>
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
          <h2>From ad to site visit.</h2>
          <p>Three steps. You only show up for the last one.</p>
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

      <section className="testimonials section-pad" aria-labelledby="testimonials-title">
        <div className="section-heading">
          <h2 id="testimonials-title">What it&rsquo;s like working with us.</h2>
          <p>Feedback from clients I&rsquo;ve built CRM and automation systems for.</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {testimonials.map((item) => (
                  <li className="testimonial-card" key={`${copy}-${item.quote}`}>
                    <div className="testimonial-shot">
                      <Image src={item.image} alt={`Screenshot of client feedback: ${item.quote}`} width={item.width} height={item.height} />
                    </div>
                    <Quotes size={22} weight="fill" aria-hidden="true" />
                    <p>{item.quote}</p>
                    <span>{item.source}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section id="qualified" className="qualified section-pad" aria-labelledby="qualified-title">
        <div className="section-heading">
          <h2 id="qualified-title">A visit only counts if it passes all four checks.</h2>
          <p>This is exactly what you pay for, so there&rsquo;s never a debate when the bill comes.</p>
        </div>
        <div className="check-grid">
          {qualifiedChecks.map((check, index) => {
            const Icon = checkIcons[index];
            return (
              <article className="check-card" key={check.title}>
                <span className="check-icon"><Icon size={24} weight="regular" aria-hidden="true" /></span>
                <h3>{check.title}</h3>
                <p>{check.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="deal" className="stack-section section-pad" aria-labelledby="stack-title">
        <div className="stack-intro">
          <h2 id="stack-title">A simple deal. Most of it is paid only for results.</h2>
          <p>Your ad budget goes straight to Facebook, never through me.</p>
        </div>
        <div className="stack-list">
          <article className="stack-card stack-card-one">
            <span>Setup</span>
            <h3>One setup fee to build it.</h3>
            <p>Ads, screening questions, booking calendar and reminders, set up for your business and your area.</p>
            <div className="stack-art stack-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          </article>
          <article className="stack-card stack-card-two">
            <span>Per visit</span>
            <h3>A fee only per visit that shows up.</h3>
            <p>Only for homeowners who pass all four checks and actually arrive. A shared log tracks every one.</p>
            <div className="stack-art stack-path" aria-hidden="true"><i /><i /><i /><i /></div>
          </article>
          <article className="stack-card stack-card-three">
            <span>Guarantee</span>
            <h3>4 visits in 60 days, or your setup fee back.</h3>
            <p>If fewer than 4 qualified homeowners show up in your first 60 days, I refund the setup fee.</p>
            <div className="stack-art stack-stars" aria-hidden="true"><Check weight="bold" /><Check weight="bold" /><Check weight="bold" /><Check weight="bold" /></div>
          </article>
        </div>
      </section>

      <section id="outcomes" className="outcomes section-pad">
        <div className="outcomes-visual">
          <Image
            src="/assets/outcomes-connected-growth.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
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

      <section id="faq" className="faq section-pad" aria-labelledby="faq-title">
        <div className="section-heading">
          <h2 id="faq-title">Before you book.</h2>
          <p>The questions contractors ask most.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="book" className="booking section-pad">
        <div className="booking-heading">
          <p className="eyebrow">One contractor per city</p>
          <h2>See if your city is still open.</h2>
          <p>A 15-minute call. We look at your inquiries, your area and whether this fits. If it doesn&rsquo;t, I&rsquo;ll tell you.</p>
        </div>
        <a className="button button-primary booking-cta" href={BOOKING_URL}>
          <span>Book a 15-minute call</span>
          <ArrowRight size={20} weight="regular" aria-hidden="true" />
        </a>
      </section>

      <footer className="footer">
        <Logo />
        <p>Qualified site visits for whole-house renovation contractors in Metro Manila, Cavite, Laguna, Rizal and Bulacan.</p>
        <div className="footer-links">
          <a href="#services">How it works</a>
          <a href="#deal">The deal</a>
          <a href="#book">Book a call</a>
        </div>
        <span className="footer-note">© 2026 Gomatic</span>
      </footer>
    </main>
  );
}
