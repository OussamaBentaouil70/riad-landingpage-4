# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

International leisure travelers planning a trip to Marrakech, typically couples or small groups of friends, often from Europe (France, UK, Italy). They are comparing boutique riads in the historic medina, want an authentic Moroccan stay rather than a chain hotel, and are researching on a phone while traveling or planning. Their job: confirm the place feels authentic, understand the rooms and what is included, check availability and price, and start a booking with a real person.

## Product Purpose

Present Riad BE Marrakech — two connected riads plus a spa and yoga studio on the rooftop in the historic medina — and turn researching visitors into reservation inquiries. Success means a qualified inquiry (dates, guests, room preference) or a WhatsApp conversation, not passive browsing.

## Positioning

A guesthouse that behaves like a home: two riads, a spa, and a yoga studio connected on one rooftop, inside the real medina, run by a team that greets, hosts, and arranges the stay directly. The claim a neighboring hotel could not truthfully copy is the connected compound (two riads + spa + yoga + the Douiria private riad next door) hosted as one intimate home.

## Operating Context

- Visitors research and book from mobile as often as desktop, frequently mid-trip or while planning a Morocco itinerary.
- Conversion happens through WhatsApp chat and a reservation request form; there is no payment or inventory backend today.
- The riad is inside the medina: cars cannot reach the final alley, and the team meets guests and carries luggage.
- Stays include breakfast; spa/hammam, dining, tours, and transfers are arranged on request.
- Content covers four bookable options: BE Medina Room, BE Rooftop Suite, The Douiria Private Riad (sleeps 2–6), and the BE Agafay Yurt (stone-desert hideaway with pool).

## Capabilities and Constraints

- Static front end: Vite build, vanilla JavaScript rendering into `#app`, single `style.css`. No server, database, auth, or CMS.
- Conversion is limited to WhatsApp deep links (`wa.me`) and a client-side validated reservation request form that shows a success message. The form does not currently send data anywhere; preserve this behavior or clearly flag any change.
- Room detail modal with image slider, gallery lightbox, FAQ accordion, testimonial cards, and an opt-in ambient Web Audio soundscape already exist.
- Must remain a fast, static, mobile-first page with no new runtime dependency unless justified.
- Undecided: whether a real booking engine, email delivery, or CMS will be added later.

## Brand Commitments

- Name: "Riad BE Marrakech"; tagline "BE in the moment".
- Voice: warm, calm, hospitable, quietly confident; sensory and place-driven, never salesy or generic luxury-hotel copy.
- Must evoke authentic Moroccan craft — tadelakt, zellige, cedar mashrabiya, courtyard, rooftop, medina — without resorting to clichéd exoticism.
- Existing contact facts to preserve: +212 670 364 105 (phone/WhatsApp), beincontact@be-marrakech.com, 23 Derb Sidi Lahcen Ou Ali, Bab Doukkala, 40030 Marrakech; check-in 14:00, check-out 11:00.

## Evidence on Hand

- Room names, descriptions, amenities, and nightly prices (€90 / €160 / €320 / €320) are real and approved.
- Guest testimonials (Émilie Laurent, James Whitfield, Sofia Marchetti) are real and approved.
- Photography is placeholder stock (Pexels URLs) standing in for real property photography. Do not present stock images as verified photos of the actual rooms.
- No verified press, awards, ratings, or occupancy claims exist; future work must not fabricate them.

## Product Principles

1. Make the place feel like a home you can step into, not a listing you scroll past.
2. Reduce the distance to a real conversation: every section should offer a natural path to inquire or book.
3. Let Moroccan craft and the medina carry the atmosphere; the interface stays quiet and supportive.
4. Be honest about what is real; never manufacture proof, scarcity, or luxury signals.
5. Work beautifully on a phone, in the moment, on a slow connection.

## Accessibility & Inclusion

- Aim for WCAG 2.1 AA: readable contrast on imagery and color, visible keyboard focus, labeled form fields, and reduced-motion support for the ambient and scroll animations.
