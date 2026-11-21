export type BentoFeature = {
  title: string;
  description: string;
  columns: number;
  rows: number;
  className: string;
};

// Paste your Loom or YouTube *embed* URL here once the 2-minute video is recorded.
// While it is empty, the video section is hidden.
export const VIDEO_EMBED_URL = "https://www.loom.com/embed/e967a4605fd0423ebe5c854475c19d04";

export const navigation = [
  { label: "How it works", href: "#services" },
  { label: "What counts", href: "#qualified" },
  { label: "The deal", href: "#deal" },
  { label: "FAQ", href: "#faq" },
];

export const bentoFeatures: BentoFeature[] = [
  {
    title: "Every inquiry screened before it reaches you",
    description:
      "Each homeowner answers four questions first: do they own the house, does their budget match the size of job you take on, are they in your area, and do they want to start within 3 months. Price-shoppers never take your time.",
    columns: 7,
    rows: 2,
    className: "feature-reviews",
  },
  {
    title: "Ads in your service area",
    description:
      "Facebook ads shown to homeowners near you who are planning a renovation. Written, built and run for you.",
    columns: 5,
    rows: 1,
    className: "feature-social",
  },
  {
    title: "Answered in minutes, day or night",
    description:
      "Every inquiry gets a reply while the homeowner is still interested, not the next morning.",
    columns: 5,
    rows: 1,
    className: "feature-voice",
  },
];

export const journeySteps = [
  {
    title: "Inquiry",
    summary: "A homeowner sees your ad and asks about a renovation.",
    detail: "They get an answer within minutes and go straight into the four screening questions.",
    image: "/assets/journey-inquiry.png",
  },
  {
    title: "Booking",
    summary: "Only qualified homeowners get a slot on your calendar.",
    detail: "Everyone else gets a polite reply. Booked homeowners get reminders so they actually show up.",
    image: "/assets/journey-booking.png",
  },
  {
    title: "Site visit",
    summary: "You walk into a visit with someone ready to build.",
    detail: "You already know the budget, the area and the timeline before you leave for the visit. Closing the job is your expertise.",
    image: "/assets/journey-fulfillment.png",
  },
];

export const qualifiedChecks = [
  { title: "Owns the house", detail: "Or is the one who decides on it." },
  { title: "Budget that fits your jobs", detail: "Set to the minimum project size you take on." },
  { title: "In your service area", detail: "No long drives for nothing." },
  { title: "Starting within 3 months", detail: "And they showed up to the visit." },
];

export const outcomeSlides = [
  {
    index: "01",
    title: "You pay for visits, not promises",
    copy: "The per-visit fee is only charged for qualified homeowners who actually show up. A no-show costs you nothing.",
  },
  {
    index: "02",
    title: "One contractor per city",
    copy: "Two contractors in the same city would compete for the same homeowners. So I only take one per city. Book a call to check if yours is open.",
  },
  {
    index: "03",
    title: "You see every visit",
    copy: "Every qualified visit goes into a shared log with the homeowner's answers, so you always know what you're paying for and why.",
  },
];

export const testimonials = [
  {
    quote:
      "Dwight, your first 30 days have exceeded expectations. You took over a system that was mid-handoff and made it yours, then went well beyond it. More than any single deliverable, you have shown real ownership: you find what is broken, fix it, document it, and move on, without waiting to be asked.",
    source: "Client, automation project",
    image: "/assets/testimonial-first-30-days.png",
    width: 428,
    height: 40,
  },
  {
    quote: "You've been crushing it! Really appreciate you!",
    source: "Client, CRM project",
    image: "/assets/testimonial-crushing-it.png",
    width: 446,
    height: 140,
  },
  {
    quote:
      "Dwight, you have been an absolute pleasure to work with, a golden asset to the team, and I know big things are coming your way. Keep up the great work!",
    source: "Client, systems project",
    image: "/assets/testimonial-pleasure-to-work-with.png",
    width: 448,
    height: 47,
  },
  {
    quote: "I feel comfortable in owning the updates and Dwight's ability to handle changes as well.",
    source: "Client, automation project",
    image: "/assets/testimonial-handles-changes.png",
    width: 375,
    height: 65,
  },
  {
    quote: "You are the best!!",
    source: "Client, CRM project",
    image: "/assets/testimonial-you-are-the-best.png",
    width: 296,
    height: 98,
  },
];

export const faqs = [
  {
    question: "What if a homeowner doesn't show up?",
    answer: "You don't pay for it. The per-visit fee is only for qualified visits that actually happen.",
  },
  {
    question: "Who pays for the ads?",
    answer: "You do, directly to Facebook. That money never passes through me.",
  },
  {
    question: "Do you guarantee the visit turns into a project?",
    answer: "No. I deliver qualified homeowners to your site visit. Closing the job is up to you.",
  },
  {
    question: "What if I get fewer than 4 qualified visits in 60 days?",
    answer: "I refund your setup fee.",
  },
  {
    question: "How much does it cost?",
    answer: "A one-time setup fee, then a fee for each qualified visit that shows up. I'll walk you through the exact numbers on the call, once we know your area fits.",
  },
];

export function calculateBentoCells(features: BentoFeature[]) {
  return features.reduce(
    (total, feature) => total + feature.columns * feature.rows,
    0,
  );
}
