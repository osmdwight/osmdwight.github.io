# Gomatic Asset Library

Files in this directory are served by Next.js from `/assets/<filename>`. Keep every production image here, reference it with a root-relative URL, and update this catalog whenever an asset is added or replaced.

## Current Assets

| File | Website use | Alt-text guidance |
| --- | --- | --- |
| `journey-inquiry.png` | Inquiry journey panel | Decorative; the adjacent copy names the step. |
| `journey-booking.png` | Booking journey panel | Decorative; the adjacent copy names the step. |
| `journey-fulfillment.png` | Fulfillment journey panel | Decorative; the adjacent copy names the step. |
| `journey-reputation.png` | Reputation journey panel | Decorative; the adjacent copy names the step. |
| `outcomes-connected-growth.png` | Outcomes section feature visual | Connected service journey from inquiry and booking to completed work and customer feedback. |
| `profile-business-owner.png` | Outcomes profile stack | Decorative profile illustration. |
| `profile-operations-manager.png` | Outcomes profile stack | Decorative profile illustration. |
| `profile-satisfied-customer.png` | Outcomes profile stack | Decorative profile illustration. |

## Visual Direction

These illustrations were generated with OpenAI's built-in image model for this website. The shared prompt direction is: premium editorial service-business automation imagery; dimensional vector-like rendering; crisp geometric forms; subtle print grain; near-black and charcoal surfaces; vivid lime accents; white and muted gray details; no text, logos, trademarks, or watermarks.

The narrative prompt subjects are inquiry routing, confirmed booking, service fulfillment with milestone updates, five-star reputation distribution, and the complete connected customer journey. The profile prompts depict a service-business owner, an operations manager, and a satisfied customer in the same illustration system.

## Adding Assets

Use descriptive kebab-case names. Generate or source at the final aspect ratio, keep important content away from crop edges, verify the image in its responsive container, and run `pnpm lint`, `pnpm test`, and `pnpm build` after changing references.
