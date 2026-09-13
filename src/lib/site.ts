export type BentoFeature = {
  title: string;
  description: string;
  columns: number;
  rows: number;
  className: string;
};

export const navigation = [
  { label: "What we automate", href: "#services" },
  { label: "How it works", href: "#journey" },
  { label: "Why it matters", href: "#outcomes" },
];

export const bentoFeatures: BentoFeature[] = [
  {
    title: "Turn completed jobs into visible trust",
    description:
      "Gomatic follows up while the experience is fresh, routes happy customers toward Google, and keeps your team out of manual reminder loops.",
    columns: 7,
    rows: 2,
    className: "feature-reviews",
  },
  {
    title: "Keep proof moving",
    description:
      "Strong feedback becomes ready-to-publish social content, so your reputation works beyond the review page.",
    columns: 5,
    rows: 1,
    className: "feature-social",
  },
  {
    title: "Answer while intent is high",
    description:
      "An AI voice agent handles first-touch inquiries, captures context, and moves qualified callers toward a booked service.",
    columns: 5,
    rows: 1,
    className: "feature-voice",
  },
];

export const journeySteps = [
  {
    title: "Inquiry",
    summary: "Respond before the next competitor does.",
    detail: "Capture the caller, their need, and the best next action even when the team is busy.",
    image: "/assets/journey-inquiry.png",
  },
  {
    title: "Booking",
    summary: "Move cleanly from interest to a confirmed job.",
    detail: "Use consistent questions and follow-up so fewer qualified opportunities fall through the gaps.",
    image: "/assets/journey-booking.png",
  },
  {
    title: "Fulfillment",
    summary: "Keep the customer informed without extra admin.",
    detail: "Trigger the right message at the right milestone while the team focuses on delivering the service.",
    image: "/assets/journey-fulfillment.png",
  },
  {
    title: "Reputation",
    summary: "Ask for feedback at the moment it makes sense.",
    detail: "Turn a finished job into a thoughtful review request and a stronger public reputation.",
    image: "/assets/journey-reputation.png",
  },
];

export const outcomeSlides = [
  {
    index: "01",
    title: "Fewer quiet gaps",
    copy: "A connected follow-up system means inquiries, booked work, and completed jobs do not disappear into separate tools.",
  },
  {
    index: "02",
    title: "More useful proof",
    copy: "Customer feedback becomes a reusable sales asset across Google and social channels instead of sitting in one place.",
  },
  {
    index: "03",
    title: "A journey your team can repeat",
    copy: "Automation handles the predictable handoffs while people step in where judgment, care, and expertise matter most.",
  },
];

export function calculateBentoCells(features: BentoFeature[]) {
  return features.reduce(
    (total, feature) => total + feature.columns * feature.rows,
    0,
  );
}
