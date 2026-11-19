import './style.css'

const WHATSAPP_NUMBER = '212670364105'
const WHATSAPP_MSG = "Hello Riad BE Marrakech, I'd like to inquire about availability."

const waLink = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

const waIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.34A10 10 0 1 0 12 2zm0 18.13c-1.6 0-3.17-.43-4.53-1.24l-.32-.19-3.34.88.89-3.26-.21-.33A8.13 8.13 0 1 1 12 20.13z"/></svg>`

const mailIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`

const arrowIcon = `<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const closeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`

const chevronLeft = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const chevronRight = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const ROOMS = [
  {
    name: 'BE Medina Room',
    tag: 'Classic Room',
    price: '€90',
    desc: 'A traditional room in the heart of the riad, with tadelakt walls, hand-laid zellige, and a window opening to the courtyard. Morning light filters through carved cedar screens.',
    amenities: ['Double bed', 'Ensuite bathroom', 'Courtyard view', 'A/C', 'Breakfast included'],
    images: [
      'https://images.pexels.com/photos/34672523/pexels-photo-34672523.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34645081/pexels-photo-34645081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'BE Rooftop Suite',
    tag: 'Signature Suite',
    price: '€160',
    desc: 'A spacious suite on the upper level with direct rooftop access. Wake to panoramic medina views, then step out for sunrise yoga on the terrace.',
    amenities: ['King bed', 'Rooftop access', 'Private terrace', 'Yoga access', 'A/C', 'Breakfast included'],
    images: [
      'https://images.pexels.com/photos/34940612/pexels-photo-34940612.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34769922/pexels-photo-34769922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/15531322/pexels-photo-15531322.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'The Douiria Private Riad',
    tag: 'Private Riad',
    price: '€320',
    desc: 'Just next door to the main Riad BE and connected on the terrace. Three sleeping rooms, a fully equipped kitchen, a patio with large dining table, a separate lounge, and a big private rooftop. Accommodates 2–6 people — perfect for families or friends.',
    amenities: ['3 bedrooms', 'Full kitchen', 'Private patio', 'Lounge', 'Private rooftop', 'Sleeps 6', 'Breakfast option'],
    images: [
      'https://images.pexels.com/photos/34645081/pexels-photo-34645081.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34940612/pexels-photo-34940612.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/30257102/pexels-photo-30257102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'BE Agafay Yurt',
    tag: 'The Hideaway',
    price: '€320',
    desc: 'Immerse yourself in the tranquility of our yurts in the heart of the enchanting stone-desert. A night in a yurt tent, including breakfast and dinner. Or visit us for a pool day with lunch or dinner by our pristine pool — the perfect blend of serenity and adventure.',
    amenities: ['Yurt tent', 'Breakfast + dinner', 'Pool access', 'Stone-desert views', 'Sunset terrace', 'From €320/night'],
    images: [
      'https://images.pexels.com/photos/18671249/pexels-photo-18671249.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/30757368/pexels-photo-30757368.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/35901297/pexels-photo-35901297.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
]

const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/30257102/pexels-photo-30257102.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/30282363/pexels-photo-30282363.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/32546630/pexels-photo-32546630.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/29125649/pexels-photo-29125649.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/30204572/pexels-photo-30204572.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/15531325/pexels-photo-15531325.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/34672523/pexels-photo-34672523.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

const GALLERY_ALTS = [
  'A zellige-tiled doorway with a carved cedar door',
  'A stone fountain in a tiled riad courtyard',
  'A brass lantern hanging in an arched alcove',
  'A shaded courtyard set for breakfast',
  'Rooftops and minarets above the medina',
  'A carved plaster ceiling seen from below',
  'Cedar and zellige detail in a guest room',
  'A doorway opening onto the courtyard',
]

const TESTIMONIALS = [
  {
    quote: "From the moment we stepped through the unassuming door, the noise of the medina fell away. The courtyard fountain became the soundtrack to our mornings. This is the Marrakech we dreamed of.",
    name: 'Émilie Laurent',
    role: 'Paris, France',
  },
  {
    quote: "The attention to detail is extraordinary — the mint tea waiting on arrival, the rose petals, the way light moves through the mashrabiya at golden hour. We never wanted to leave.",
    name: 'James Whitfield',
    role: 'London, UK',
  },
  {
    quote: "Riad BE feels like a private home, not a hotel. The team anticipated everything we needed. The rooftop dinner under the stars and the morning yoga were the highlights of our trip.",
    name: 'Sofia Marchetti',
    role: 'Milan, Italy',
  },
]

const FAQS = [
  { q: 'How do I get to the riad from the airport?', a: 'Marrakech Menara Airport is about 15 minutes by car. We can arrange a private transfer on request — simply share your flight details when booking.' },
  { q: 'Is the riad inside the medina? Can taxis reach it?', a: 'Yes, we are in the heart of the medina. Cars cannot access the very last alley, so taxis drop you about a 3-minute walk away. Our team will greet you at the nearest accessible point and carry your luggage.' },
  { q: 'What meals are included?', a: 'A traditional Moroccan breakfast is included in every stay, served on the rooftop or in the courtyard. Lunch and dinner can be ordered from our seasonal menu, with advance notice.' },
  { q: 'Do you offer spa and hammam treatments?', a: 'Yes. Our hammam and massage treatments are available by appointment. We recommend booking at least 24 hours in advance, especially during high season.' },
  { q: 'Can you arrange tours and excursions?', a: 'Absolutely. We organize guided medina walks, day trips to the Atlas Mountains, desert excursions, and cooking classes — all with trusted local guides.' },
  { q: 'What is your cancellation policy?', a: 'Cancellation terms are confirmed with your booking. Plans change, so message us directly and we will do our best to accommodate.' },
]

const reservationFormHTML = (idPrefix) => `
  <form class="reservation-form" data-form="${idPrefix}" novalidate>
    <div class="field">
      <label for="${idPrefix}-fullname">Full name</label>
      <input type="text" id="${idPrefix}-fullname" name="fullname" autocomplete="name" required />
      <span class="err-msg">Please enter your full name.</span>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-phone">Phone</label>
        <input type="tel" id="${idPrefix}-phone" name="phone" autocomplete="tel" required />
        <span class="err-msg">Please enter a valid phone number.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-email">Email</label>
        <input type="email" id="${idPrefix}-email" name="email" autocomplete="email" required />
        <span class="err-msg">Please enter a valid email.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-checkin">Check-in</label>
        <input type="date" id="${idPrefix}-checkin" name="checkin" required />
        <span class="err-msg">Select a date.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-checkout">Check-out</label>
        <input type="date" id="${idPrefix}-checkout" name="checkout" required />
        <span class="err-msg">Select a date after check-in.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-guests">Guests</label>
        <select id="${idPrefix}-guests" name="guests">
          <option value="1">1 guest</option>
          <option value="2" selected>2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5+">5+ guests</option>
        </select>
      </div>
      <div class="field">
        <label for="${idPrefix}-room">Room</label>
        <select id="${idPrefix}-room" name="room">
          <option value="any">Any available</option>
          <option value="BE Medina Room">BE Medina Room</option>
          <option value="BE Rooftop Suite">BE Rooftop Suite</option>
          <option value="The Douiria Private Riad">The Douiria Private Riad</option>
          <option value="BE Agafay Yurt">BE Agafay Yurt</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="${idPrefix}-message">Message</label>
      <textarea id="${idPrefix}-message" name="message" placeholder="Flight times, a celebration, anything we should know."></textarea>
    </div>
    <button type="submit" class="btn-primary"><span>Request reservation</span>${arrowIcon}</button>
    <div class="form-success" role="status">WhatsApp is opening with your request. If it does not, message us at +212 670 364 105.</div>
  </form>
`

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#walk">Skip to content</a>

  <div class="route-rail" aria-hidden="true">
    <span class="route-rail-line"></span>
    <span class="route-rail-fill" id="routeFill"></span>
    <i class="route-dot" style="--p:0%"></i>
    <i class="route-dot" style="--p:20%"></i>
    <i class="route-dot" style="--p:40%"></i>
    <i class="route-dot" style="--p:60%"></i>
    <i class="route-dot" style="--p:80%"></i>
    <i class="route-dot" style="--p:100%"></i>
  </div>

  <header class="site-header" id="header">
    <div class="bar">
      <a href="#hero" class="brand" aria-label="Riad BE Marrakech, home">
        <span class="brand-plate">BE</span>
        <span class="brand-word">Riad BE Marrakech<small>23 Derb Sidi Lahcen Ou Ali</small></span>
      </a>
      <nav class="nav" id="nav" aria-label="Primary">
        <a href="#walk">The walk</a>
        <a href="#rooms">Doors</a>
        <a href="#about">The house</a>
        <a href="#gallery">Along the way</a>
        <a href="#faq">Before you come</a>
        <a href="#contact">Find us</a>
        <a href="#contact" class="nav-cta">Reserve a door</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
    </div>
  </header>

  <main>
    <section class="hero" id="hero">
      <svg class="hero-map" viewBox="0 0 760 620" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M26 570 C 150 548, 118 438, 244 414 S 354 470, 430 366 S 494 226, 608 196" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2 12" stroke-linecap="round" />
        <circle cx="26" cy="570" r="7" fill="var(--ochre)" stroke="currentColor" stroke-width="1.5" />
        <circle cx="244" cy="414" r="7" fill="var(--ochre)" stroke="currentColor" stroke-width="1.5" />
        <circle cx="430" cy="366" r="7" fill="var(--ochre)" stroke="currentColor" stroke-width="1.5" />
        <circle cx="608" cy="196" r="9" fill="var(--tomato)" stroke="currentColor" stroke-width="1.5" />
      </svg>

      <div class="wrap hero-grid">
        <div class="hero-copy">
          <h1 class="hero-sign">
            <span>Riad</span>
            <span class="sign-be">BE</span>
            <small>Marrakech</small>
          </h1>
          <p class="hero-tagline">Three turns from <span class="paint">the noise.</span></p>
          <p class="hero-lede">Riad BE is a home in the heart of the Marrakech medina — two riads, a spa, and a rooftop yoga studio joined above the rooftops. Cars stop at Bab Doukkala. We meet you at the last turn.</p>
          <p class="hero-proof">Breakfast on the roof · Hammam and yoga · We meet you at the last turn</p>
          <div class="hero-actions">
            <a class="plate plate-red" href="${waLink()}" target="_blank" rel="noopener">${waIcon}<span>Talk to the house</span>${arrowIcon}</a>
            <a class="plate plate-line" href="#walk">See the walk down</a>
          </div>
          <ol class="route" aria-label="How to reach the door">
            <li><span class="route-n">01</span><span class="route-t">Menara</span><span class="route-d">15 min by car</span></li>
            <li><span class="route-n">02</span><span class="route-t">Bab Doukkala</span><span class="route-d">The car stops here</span></li>
            <li><span class="route-n">03</span><span class="route-t">The derb</span><span class="route-d">3 min on foot</span></li>
            <li class="is-here"><span class="route-n">04</span><span class="route-t">The door</span><span class="route-d">You have arrived</span></li>
          </ol>
        </div>

        <div class="hero-door">
          <div class="door-stage">
            <svg class="door-art" viewBox="0 0 420 470" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="whitewash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#fffaf0" />
                  <stop offset="1" stop-color="#e9e1d0" />
                </linearGradient>
                <linearGradient id="tealDoor" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#1b8170" />
                  <stop offset="0.55" stop-color="#146b5c" />
                  <stop offset="1" stop-color="#0d4f43" />
                </linearGradient>
              </defs>
              <ellipse cx="210" cy="454" rx="150" ry="12" fill="#0d1f4d" opacity="0.35" />
              <path d="M42 452 V220 C42 128 112 64 210 64 C308 64 378 128 378 220 V452 Z" fill="url(#whitewash)" stroke="#d9cfb8" stroke-width="6" />
              <path d="M82 452 V232 C82 158 138 108 210 108 C282 108 338 158 338 232 V452 Z" fill="#0b3f36" stroke="#b98a3c" stroke-width="5" />
              <path d="M88 452 V238 C88 168 140 118 208 114 L208 452 Z" fill="url(#tealDoor)" />
              <path d="M332 452 V238 C332 168 280 118 212 114 L212 452 Z" fill="url(#tealDoor)" />
              <g stroke="#0b3f36" stroke-width="2" opacity="0.55">
                <path d="M120 142 V448" />
                <path d="M150 132 V448" />
                <path d="M180 124 V448" />
                <path d="M240 124 V448" />
                <path d="M270 132 V448" />
                <path d="M300 142 V448" />
                <path d="M210 114 V452" />
              </g>
              <g fill="none" stroke="#b98a3c" stroke-width="2.5" opacity="0.9">
                <rect x="112" y="206" width="76" height="118" rx="3" />
                <rect x="112" y="344" width="76" height="84" rx="3" />
                <rect x="232" y="206" width="76" height="118" rx="3" />
                <rect x="232" y="344" width="76" height="84" rx="3" />
              </g>
              <g fill="#b98a3c">
                <circle cx="120" cy="214" r="3.5" />
                <circle cx="180" cy="214" r="3.5" />
                <circle cx="120" cy="316" r="3.5" />
                <circle cx="180" cy="316" r="3.5" />
                <circle cx="120" cy="352" r="3.5" />
                <circle cx="180" cy="352" r="3.5" />
                <circle cx="120" cy="420" r="3.5" />
                <circle cx="180" cy="420" r="3.5" />
                <circle cx="240" cy="214" r="3.5" />
                <circle cx="300" cy="214" r="3.5" />
                <circle cx="240" cy="316" r="3.5" />
                <circle cx="300" cy="316" r="3.5" />
                <circle cx="240" cy="352" r="3.5" />
                <circle cx="300" cy="352" r="3.5" />
                <circle cx="240" cy="420" r="3.5" />
                <circle cx="300" cy="420" r="3.5" />
              </g>
              <g fill="#b98a3c" stroke="#0b3f36" stroke-width="1">
                <circle cx="96" cy="252" r="4" />
                <circle cx="96" cy="360" r="4" />
                <circle cx="324" cy="252" r="4" />
                <circle cx="324" cy="360" r="4" />
              </g>
              <g fill="none" stroke="#b98a3c" stroke-width="3">
                <circle cx="300" cy="296" r="17" />
                <circle cx="300" cy="296" r="8" />
              </g>
              <circle cx="300" cy="338" r="5" fill="#14120d" stroke="#b98a3c" stroke-width="1.5" />
              <path d="M300 343 L296 352 H304 Z" fill="#14120d" stroke="#b98a3c" stroke-width="1" />
              <g fill="#b98a3c">
                <circle cx="92" cy="222" r="3.5" />
                <circle cx="100" cy="184" r="3.5" />
                <circle cx="116" cy="152" r="3.5" />
                <circle cx="142" cy="128" r="3.5" />
                <circle cx="174" cy="115" r="3.5" />
                <circle cx="210" cy="110" r="3.5" />
                <circle cx="246" cy="115" r="3.5" />
                <circle cx="278" cy="128" r="3.5" />
                <circle cx="304" cy="152" r="3.5" />
                <circle cx="320" cy="184" r="3.5" />
                <circle cx="328" cy="222" r="3.5" />
              </g>
              <rect x="70" y="446" width="280" height="14" fill="#d9cfb8" stroke="#b98a3c" stroke-width="2" />
              <path d="M54 460 H366" stroke="#0d1f4d" stroke-width="3" opacity="0.4" />
            </svg>
            <figure class="door-plaque">
              <span class="plaque-num">23</span>
              <span class="plaque-text">Derb Sidi Lahcen Ou Ali<small>Bab Doukkala · Marrakech 40030</small></span>
            </figure>
          </div>

          <form class="date-plate" id="datePlate" novalidate>
            <div class="date-plate-head">
              <span class="date-plate-num" aria-hidden="true">23</span>
              <div>
                <p class="date-plate-title">Arrival plaque</p>
                <p class="date-plate-sub">Carry your dates to the door.</p>
              </div>
            </div>
            <div class="date-fields">
              <div class="field">
                <label for="plate-checkin">Check-in</label>
                <input type="date" id="plate-checkin" name="checkin" required />
              </div>
              <div class="field">
                <label for="plate-checkout">Check-out</label>
                <input type="date" id="plate-checkout" name="checkout" required />
              </div>
              <div class="field">
                <label for="plate-guests">Guests</label>
                <select id="plate-guests" name="guests">
                  <option value="1">1</option>
                  <option value="2" selected>2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div class="field">
                <label for="plate-room">Room</label>
                <select id="plate-room" name="room">
                  <option value="any">Any</option>
                  <option value="BE Medina Room">Medina Room</option>
                  <option value="BE Rooftop Suite">Rooftop Suite</option>
                  <option value="The Douiria Private Riad">Douiria</option>
                  <option value="BE Agafay Yurt">Agafay Yurt</option>
                </select>
              </div>
            </div>
            <button type="submit" class="plate plate-red plate-wide"><span>Carry these dates to the door</span>${arrowIcon}</button>
            <p class="date-msg" id="dateMsg" role="status"></p>
          </form>
        </div>
      </div>
    </section>

    <section class="stop stop-walk" id="walk">
      <div class="wrap">
        <div class="stop-head reveal">
          <h2>The last three turns are the ones that matter.</h2>
          <p>Every riad in the medina is hidden. That is the point. Here is exactly how you arrive, and who meets you.</p>
        </div>
        <ol class="walk">
          <li class="walk-step reveal-swing">
            <span class="walk-num">01</span>
            <div class="walk-body">
              <h3>Land at Menara</h3>
              <p>Fifteen minutes by car. Share your flight details and we can arrange a private transfer.</p>
            </div>
          </li>
          <li class="walk-step reveal-swing">
            <span class="walk-num">02</span>
            <div class="walk-body">
              <h3>Stop at Bab Doukkala</h3>
              <p>The car cannot enter the last alley. It stops at the gate, and the medina begins on foot.</p>
            </div>
          </li>
          <li class="walk-step reveal-swing">
            <span class="walk-num">03</span>
            <div class="walk-body">
              <h3>Turn into the derb</h3>
              <p>Three minutes down Derb Sidi Lahcen Ou Ali. We meet you at the last turn and carry the bags.</p>
            </div>
          </li>
          <li class="walk-step is-last reveal-swing">
            <span class="walk-num">04</span>
            <div class="walk-body">
              <h3>Knock at 23</h3>
              <p>The door opens, the courtyard goes quiet, and the mint tea is already pouring.</p>
            </div>
          </li>
        </ol>
        <div class="walk-foot reveal">
          <p>Arriving late or lost? Message us and we will walk you in.</p>
          <a class="plate plate-line" href="${waLink('Hello Riad BE, I am on my way and would like help finding the door.')}" target="_blank" rel="noopener">${waIcon}<span>Send your arrival time</span></a>
        </div>
      </div>
    </section>

    <section class="stop stop-rooms" id="rooms">
      <div class="wrap">
        <div class="stop-head reveal">
          <h2>Four doors. Take your pick.</h2>
          <p>Each one opens onto the same courtyard, the same rooftop, the same breakfast. What changes is how much house you keep for yourself.</p>
          <p class="photo-note">Room photography is placeholder stock until the house's own images arrive.</p>
        </div>
        <div class="doors" id="roomsGrid"></div>
      </div>
    </section>

    <section class="stop stop-about" id="about">
      <div class="wrap about-grid">
        <figure class="about-figure reveal">
          <div class="about-photo">
            <img src="https://images.pexels.com/photos/30282363/pexels-photo-30282363.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Riad courtyard with a fountain and plants" loading="lazy" decoding="async" />
          </div>
          <figcaption>Two houses, one rooftop. The courtyard is the quietest room in the medina. <span class="fig-note">Placeholder image.</span></figcaption>
        </figure>
        <div class="about-copy reveal">
          <h2>The house behind the door.</h2>
          <p>Our riad sits in the middle of the historical medina — the heart of Marrakech. We are making a place full of local history, tradition, art, and food: Moroccan culture brought to the surface, with the doors opened.</p>
          <p>Two riads, a spa, and a yoga studio are connected on the rooftop. A home away from home, where every detail is shaped by well-being, culture, and the joy of sharing.</p>
          <dl class="wall-marks">
            <div><dt>Authentic</dt><dd>Local history, tradition, art, and food, brought to the surface.</dd></div>
            <div><dt>Well-being</dt><dd>Hammam, massages, yoga — space to breathe and reconnect.</dd></div>
            <div><dt>Culture</dt><dd>Cookery classes, local artisans, and the joy of sharing.</dd></div>
            <div><dt>Home</dt><dd>A home away from home in the heart of the medina.</dd></div>
          </dl>
          <a class="plate plate-red" href="${waLink()}" target="_blank" rel="noopener">${waIcon}<span>Chat with us on WhatsApp</span>${arrowIcon}</a>
        </div>
      </div>
    </section>

    <section class="stop stop-gallery" id="gallery">
      <div class="wrap">
        <div class="stop-head reveal">
          <h2>Along the way.</h2>
          <p>What you pass on the walk in, and what waits once the door closes behind you.</p>
          <p class="photo-note">Gallery images are placeholder stock, not yet the house's own photography.</p>
        </div>
        <div class="gallery-wall" id="galleryGrid"></div>
      </div>
    </section>

    <section class="stop stop-notes" id="testimonials">
      <div class="wrap">
        <div class="stop-head reveal">
          <h2>Notes left at the door.</h2>
          <p>Guests write to us after they leave. We keep the notes.</p>
        </div>
        <div class="notes" id="testimonialsGrid"></div>
      </div>
    </section>

    <section class="stop stop-faq" id="faq">
      <div class="wrap">
        <div class="stop-head reveal">
          <h2>Before you come.</h2>
          <p>The questions we answer most often, before the bags are packed.</p>
        </div>
        <div class="faq-list" id="faqList"></div>
      </div>
    </section>

    <section class="stop stop-contact" id="contact">
      <div class="wrap contact-grid">
        <div class="contact-copy reveal">
          <h2>Find the door.</h2>
          <p>Send your dates and we will be in touch with availability and a personal note. If you are already in Marrakech, call or message and we will help.</p>
          <address class="contact-signs">
            <div class="sign">
              <span class="sign-label">Address</span>
              <span class="sign-val">23, Derb Sidi Lahcen Ou Ali<br />Bab Doukkala, 40030 Marrakech</span>
            </div>
            <div class="sign">
              <span class="sign-label">Phone / WhatsApp</span>
              <a class="sign-val" href="tel:+212670364105">+212 670 364 105</a>
            </div>
            <div class="sign">
              <span class="sign-label">Email</span>
              <a class="sign-val" href="mailto:beincontact@be-marrakech.com">beincontact@be-marrakech.com</a>
            </div>
            <div class="sign">
              <span class="sign-label">Check-in / out</span>
              <span class="sign-val">Check-in 14:00<br />Check-out 11:00</span>
            </div>
          </address>
          <div class="contact-map">
            <a class="map-art" href="https://www.openstreetmap.org/?mlat=31.6344&amp;mlon=-7.9921#map=17/31.6344/-7.9921" target="_blank" rel="noopener" aria-label="Open the Riad BE location in OpenStreetMap">
              <svg viewBox="0 0 760 475" aria-hidden="true" focusable="false">
                <rect width="760" height="475" fill="#f4efe3" />
                <g fill="#e8deca">
                  <path d="M0 0h210l-42 120H0Z" />
                  <path d="M246 0h190l-34 130H212Z" />
                  <path d="M470 0h290v138l-84 16-30-96-44 8-22 74Z" />
                  <path d="M0 158h150l28 94L0 306Z" />
                  <path d="M214 168h170l-18 110H196Z" />
                  <path d="M430 174h116l20 100-142 12Z" />
                  <path d="M0 344h192l-26 131H0Z" />
                  <path d="M232 330h160l40 145H204Z" />
                  <path d="M590 178h170v156l-140 18Z" />
                  <path d="M438 330h118l-20 145H424Z" />
                  <path d="M590 366h170v109H560Z" />
                </g>
                <g stroke="#d3c3a7" stroke-width="2" fill="none">
                  <path d="M206 0l64 152 24 178-58 145" />
                  <path d="M446 0l-16 174 44 156-40 145" />
                  <path d="M0 148l206 10 24 172-38 145" />
                  <path d="M0 320l188 10 60 145" />
                  <path d="M424 168l166 6-30 156-126 30" />
                  <path d="M590 150l170 28" />
                  <path d="M560 330l200 36" />
                </g>
                <g stroke="#cbb99c" stroke-width="13" stroke-linecap="round" fill="none">
                  <path d="M-20 392C150 372 210 322 300 300S480 262 540 206 590 170 640 156" />
                  <path d="M128 500C150 408 196 334 214 244S226 96 244 20" />
                  <path d="M412 500C420 396 448 330 492 292S640 262 780 250" />
                </g>
                <g stroke="#b9a98e" stroke-width="2" stroke-dasharray="3 12" fill="none">
                  <path d="M-20 392C150 372 210 322 300 300S480 262 540 206 590 170 640 156" />
                  <path d="M128 500C150 408 196 334 214 244S226 96 244 20" />
                </g>
                <text class="map-lbl-ghost" x="512" y="418" fill="#14120d" opacity="0.06" font-size="56" letter-spacing="10">MEDINA</text>
                <path d="M86 374C204 366 226 318 318 300S470 264 520 212 576 174 626 158" fill="none" stroke="#1c3f94" stroke-width="5" stroke-dasharray="4 13" stroke-linecap="round" />
                <circle cx="86" cy="374" r="10" fill="#e0a32e" stroke="#14120d" stroke-width="2.5" />
                <circle cx="626" cy="158" r="12" fill="#b23a26" stroke="#14120d" stroke-width="2.5" />
                <text class="map-lbl-end" x="626" y="163" fill="#f4efe3" font-size="13" text-anchor="middle" letter-spacing="0">23</text>
                <text class="map-lbl-main" x="44" y="410" fill="#1c3f94" font-size="13">BAB DOUKKALA</text>
                <text class="map-lbl-sub" x="44" y="429" fill="#5b4c3b" font-size="10" letter-spacing="1.6">THE CAR STOPS HERE</text>
                <text class="map-lbl-main" x="418" y="128" fill="#14120d" font-size="12">DERB SIDI LAHCEN OU ALI</text>
                <text class="map-lbl-main" x="418" y="194" fill="#b23a26" font-size="12">RIAD BE</text>
                <text class="map-lbl-sub" x="418" y="212" fill="#5b4c3b" font-size="10" letter-spacing="1.6">KNOCK AT 23</text>
                <g transform="translate(60 64)" fill="none" stroke="#14120d" stroke-width="1.5">
                  <circle r="20" />
                  <path d="M0 -14L6 6 0 2-6 6Z" fill="#14120d" stroke="none" />
                  <text class="map-lbl-n" x="0" y="-27" fill="#14120d" stroke="none" font-size="10" text-anchor="middle" letter-spacing="1">N</text>
                </g>
                <text x="744" y="452" fill="#5b4c3b" font-size="9" text-anchor="end" letter-spacing="1.4">SCHEMATIC · NOT TO SCALE</text>
              </svg>
            </a>
            <a class="map-link" href="https://www.openstreetmap.org/?mlat=31.6344&amp;mlon=-7.9921#map=17/31.6344/-7.9921" target="_blank" rel="noopener">Open in OpenStreetMap</a>
          </div>
        </div>
        <div class="arrival-card reveal">
          <div class="arrival-head">
            <span class="arrival-plate">BE</span>
            <div>
              <h3>Arrival card</h3>
              <p>Name, phone, email and dates are required. Sending opens WhatsApp with your request ready to send.</p>
            </div>
          </div>
          ${reservationFormHTML('contact')}
          <label class="opt-in">
            <input type="checkbox" name="optin" />
            <span>Send me occasional notes about seasonal stays and offers.</span>
          </label>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div class="footer-brand-col">
        <span class="footer-brand">Riad BE Marrakech</span>
        <p>An authentic riad in the heart of the historical medina. Two riads, a spa, and a yoga studio — connected on the rooftop. BE in the moment.</p>
        <div class="footer-socials">
          <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
          <a href="mailto:beincontact@be-marrakech.com" aria-label="Email">${mailIcon}</a>
        </div>
        <button class="sound-toggle" id="soundToggle" aria-pressed="false">
          <span class="sound-dot" aria-hidden="true"></span>
          <span class="sound-label">Play the house</span>
        </button>
        <span class="sound-note">A quiet rooftop drone, made in the browser.</span>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="#walk">The walk</a>
        <a href="#rooms">Doors</a>
        <a href="#gallery">Along the way</a>
        <a href="#faq">Before you come</a>
      </div>
      <div>
        <h4>Stay</h4>
        <a href="#contact">Reservations</a>
        <a href="#contact">Spa &amp; Hammam</a>
        <a href="#contact">Dining</a>
        <a href="#contact">Tours</a>
      </div>
      <div>
        <h4>Reach us</h4>
        <a href="#contact">Bab Doukkala, Marrakech</a>
        <a href="tel:+212670364105">+212 670 364 105</a>
        <a href="mailto:beincontact@be-marrakech.com">beincontact@be-marrakech.com</a>
        <a href="#contact">Check-in 14:00</a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>© ${new Date().getFullYear()} Riad BE Marrakech. All rights reserved.</span>
      <span>Photography: placeholder stock from Pexels.</span>
      <span>Privacy · Terms · Crafted with care in Marrakech</span>
    </div>
  </footer>

  <a class="whatsapp-fab" href="${waLink()}" target="_blank" rel="noopener" aria-label="Message Riad BE on WhatsApp">${waIcon}</a>

  <div class="modal-overlay" id="modalOverlay" aria-hidden="true">
    <div class="modal" id="modal" role="dialog" aria-modal="true" aria-label="Room details"></div>
  </div>

  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close gallery">${closeIcon}</button>
    <button class="lightbox-nav prev" id="lbPrev" aria-label="Previous image">${chevronLeft}</button>
    <img id="lightboxImg" src="${GALLERY_IMAGES[0]}" alt="${GALLERY_ALTS[0]}" />
    <button class="lightbox-nav next" id="lbNext" aria-label="Next image">${chevronRight}</button>
    <div class="lightbox-counter" id="lbCounter"></div>
  </div>
`

// ---------- Render rooms as doors ----------
const roomsGrid = document.getElementById('roomsGrid')
ROOMS.forEach((r, i) => {
  const card = document.createElement('article')
  card.className = 'door-card reveal-swing'
  card.tabIndex = 0
  card.setAttribute('role', 'button')
  card.setAttribute('aria-label', `Open ${r.name} details`)
  card.innerHTML = `
    <div class="door-card-frame">
      <img src="${r.images[0]}" alt="${r.name}" loading="lazy" decoding="async" />
      <span class="door-card-light" aria-hidden="true"></span>
    </div>
    <div class="door-card-plate">
      <span class="door-card-price">${r.price}<small>/ night</small></span>
      <h3>${r.name}</h3>
      <span class="door-card-tag">${r.tag}</span>
      <span class="door-card-open">Open the door ${arrowIcon}</span>
    </div>
  `
  const open = () => openRoomModal(i)
  card.addEventListener('click', open)
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  })
  roomsGrid.appendChild(card)
})

// ---------- Render gallery ----------
const galleryGrid = document.getElementById('galleryGrid')
const galleryClasses = ['', 'tall', 'wide', '', 'tall', '', 'wide', '']
GALLERY_IMAGES.forEach((src, i) => {
  const item = document.createElement('figure')
  item.className = 'gallery-item reveal ' + (galleryClasses[i] || '')
  item.innerHTML = `
    <button class="gallery-button" aria-label="Enlarge image ${i + 1}">
      <img src="${src}" alt="${GALLERY_ALTS[i]}" loading="lazy" decoding="async" />
      <span class="gallery-open" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5"/></svg></span>
    </button>
  `
  item.querySelector('.gallery-button').addEventListener('click', () => openLightbox(i))
  galleryGrid.appendChild(item)
})

// ---------- Render testimonials ----------
const testimonialsGrid = document.getElementById('testimonialsGrid')
TESTIMONIALS.forEach((t) => {
  const card = document.createElement('figure')
  card.className = 'note reveal'
  const initials = t.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
  card.innerHTML = `
    <span class="tape" aria-hidden="true"></span>
    <blockquote>${t.quote}</blockquote>
    <figcaption>
      <span class="note-initials" aria-hidden="true">${initials}</span>
      <span><strong>${t.name}</strong><small>${t.role}</small></span>
    </figcaption>
  `
  testimonialsGrid.appendChild(card)
})

// ---------- Render FAQ ----------
const faqList = document.getElementById('faqList')
FAQS.forEach((f) => {
  const item = document.createElement('div')
  item.className = 'faq-item reveal'
  item.innerHTML = `
    <button class="faq-q" aria-expanded="false"><span>${f.q}</span><span class="faq-icon" aria-hidden="true"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  `
  const btn = item.querySelector('.faq-q')
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('open')
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false')
    })
    if (!isOpen) {
      item.classList.add('open')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
  faqList.appendChild(item)
})

// ---------- Room modal ----------
const modalOverlay = document.getElementById('modalOverlay')
const modal = document.getElementById('modal')
let currentSlide = 0
let lastFocused = null

function openRoomModal(idx) {
  const r = ROOMS[idx]
  currentSlide = 0
  lastFocused = document.activeElement
  modal.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close room details">${closeIcon}</button>
    <div class="modal-slider" id="modalSlider">
      ${r.images.map((src, i) => `<div class="slide ${i === 0 ? 'active' : ''}"><img src="${src}" alt="${r.name}, view ${i + 1}" /></div>`).join('')}
      <button class="slider-nav prev" id="slidePrev" aria-label="Previous image">${chevronLeft}</button>
      <button class="slider-nav next" id="slideNext" aria-label="Next image">${chevronRight}</button>
      <div class="slider-dots" id="sliderDots">
        ${r.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Go to image ${i + 1}"></button>`).join('')}
      </div>
    </div>
    <div class="modal-body">
      <span class="modal-tag">${r.tag}</span>
      <h3>${r.name}</h3>
      <p>${r.desc}</p>
      <div class="modal-amenities">${r.amenities.map((a) => `<span>${a}</span>`).join('')}</div>
      <p class="modal-note">Traditional tadelakt walls, hand-laid zellige, and cedar mashrabiya screens. Breakfast is served on the rooftop or in the courtyard, weather permitting.</p>
      <div class="modal-price-row">
        <div class="modal-price">${r.price}<span>/ night</span></div>
        <a class="plate plate-red" href="${waLink(`Hello, I'd like to book the ${r.name}.`)}" target="_blank" rel="noopener">${waIcon}<span>Book this room</span>${arrowIcon}</a>
      </div>
    </div>
  `
  modalOverlay.classList.add('show')
  modalOverlay.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'

  document.getElementById('modalClose').addEventListener('click', closeModal)
  document.getElementById('slidePrev').addEventListener('click', () => slideRoom(r, -1))
  document.getElementById('slideNext').addEventListener('click', () => slideRoom(r, 1))
  document.querySelectorAll('#sliderDots .dot').forEach((d) =>
    d.addEventListener('click', (e) => goToSlide(r, parseInt(e.currentTarget.dataset.i, 10)))
  )
  document.getElementById('modalClose').focus()
}

function slideRoom(r, dir) {
  currentSlide = (currentSlide + dir + r.images.length) % r.images.length
  updateSlider()
}
function goToSlide(r, i) {
  currentSlide = i
  updateSlider()
}
function updateSlider() {
  document.querySelectorAll('#modalSlider .slide').forEach((s, i) => s.classList.toggle('active', i === currentSlide))
  document.querySelectorAll('#sliderDots .dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide))
}

function closeModal() {
  modalOverlay.classList.remove('show')
  modalOverlay.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
  if (lastFocused) lastFocused.focus()
}
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal() })

// ---------- Gallery lightbox ----------
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightboxImg')
const lbCounter = document.getElementById('lbCounter')
let lbIndex = 0
let lbLastFocused = null

function openLightbox(i) {
  lbIndex = i
  lbLastFocused = document.activeElement
  updateLightbox()
  lightbox.classList.add('show')
  lightbox.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
  document.getElementById('lightboxClose').focus()
}
function updateLightbox() {
  lightboxImg.src = GALLERY_IMAGES[lbIndex]
  lightboxImg.alt = GALLERY_ALTS[lbIndex]
  lbCounter.textContent = `${lbIndex + 1} / ${GALLERY_IMAGES.length}`
}
function lbNav(dir) {
  lbIndex = (lbIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
  updateLightbox()
}
function closeLightbox() {
  lightbox.classList.remove('show')
  lightbox.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
  if (lbLastFocused) lbLastFocused.focus()
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox)
document.getElementById('lbPrev').addEventListener('click', () => lbNav(-1))
document.getElementById('lbNext').addEventListener('click', () => lbNav(1))
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox() })

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modalOverlay.classList.contains('show')) closeModal()
    if (lightbox.classList.contains('show')) closeLightbox()
  }
  if (lightbox.classList.contains('show')) {
    if (e.key === 'ArrowLeft') lbNav(-1)
    if (e.key === 'ArrowRight') lbNav(1)
  }
})

// ---------- Reservation form validation ----------
function validateForm(form) {
  let valid = true
  const fields = form.querySelectorAll('input[required], textarea[required], select[required]')
  fields.forEach((input) => {
    const field = input.closest('.field')
    let bad = false
    if (input.type === 'email') bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    else if (input.type === 'tel') bad = input.value.trim().length < 6
    else if (input.type === 'date') bad = !input.value
    else bad = !input.value.trim()
    field.classList.toggle('invalid', bad)
    input.setAttribute('aria-invalid', bad ? 'true' : 'false')
    if (bad) valid = false
  })
  const ci = form.querySelector('input[name="checkin"]')
  const co = form.querySelector('input[name="checkout"]')
  if (ci && co && ci.value && co.value && co.value <= ci.value) {
    co.closest('.field').classList.add('invalid')
    co.setAttribute('aria-invalid', 'true')
    valid = false
  }
  return valid
}

document.querySelectorAll('.reservation-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateForm(form)) {
      const success = form.querySelector('.form-success')
      const data = new FormData(form)
      const field = (name) => String(data.get(name) || '').trim()
      const room = field('room') === 'any' ? 'Any available' : field('room')
      const request = [
        'Hello Riad BE, I would like to request a stay.',
        `Name: ${field('fullname')}`,
        `Phone: ${field('phone')}`,
        `Email: ${field('email')}`,
        `Check-in: ${field('checkin')}`,
        `Check-out: ${field('checkout')}`,
        `Guests: ${field('guests')}`,
        `Room: ${room}`,
      ]
      if (field('message')) request.push(`Message: ${field('message')}`)
      const url = waLink(request.join('\n'))
      const opened = window.open(url, '_blank')
      if (opened) opened.opener = null
      else window.location.href = url
      success.classList.add('show')
      form.reset()
      form.querySelectorAll('input, textarea, select').forEach((input) => {
        input.setAttribute('aria-invalid', 'false')
        input.closest('.field').classList.remove('invalid')
      })
      setTimeout(() => success.classList.remove('show'), 6000)
    }
  })
  form.querySelectorAll('input, textarea, select').forEach((input) => {
    input.addEventListener('input', () => {
      input.closest('.field').classList.remove('invalid')
      input.setAttribute('aria-invalid', 'false')
    })
  })
})

// ---------- Hero date plate -> arrival card ----------
const datePlate = document.getElementById('datePlate')
const dateMsg = document.getElementById('dateMsg')
const contactForm = document.querySelector('.reservation-form[data-form="contact"]')

if (datePlate && contactForm) {
  const today = new Date().toISOString().split('T')[0]
  const plateIn = datePlate.querySelector('input[name="checkin"]')
  const plateOut = datePlate.querySelector('input[name="checkout"]')
  plateIn.min = today
  plateOut.min = today

  datePlate.addEventListener('submit', (e) => {
    e.preventDefault()
    const ci = plateIn.value
    const co = plateOut.value
    dateMsg.classList.remove('show')
    if (!ci || !co || co <= ci) {
      dateMsg.textContent = 'Choose a check-out after your check-in.'
      dateMsg.classList.add('show', 'is-error')
      return
    }
    contactForm.querySelector('input[name="checkin"]').value = ci
    contactForm.querySelector('input[name="checkout"]').value = co
    contactForm.querySelector('select[name="guests"]').value = datePlate.querySelector('select[name="guests"]').value
    contactForm.querySelector('select[name="room"]').value = datePlate.querySelector('select[name="room"]').value
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => contactForm.querySelector('input[name="fullname"]').focus({ preventScroll: true }), 600)
    dateMsg.textContent = 'Dates carried down to the arrival card.'
    dateMsg.classList.add('show')
  })
}

// ---------- Header + route progress ----------
const header = document.getElementById('header')
const routeFill = document.getElementById('routeFill')
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    header.classList.toggle('scrolled', y > 40)
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
    if (routeFill) routeFill.style.transform = `scaleY(${progress})`
    ticking = false
  })
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// ---------- Mobile nav ----------
const navToggle = document.getElementById('navToggle')
const nav = document.getElementById('nav')
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  navToggle.classList.toggle('open', open)
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
})
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open')
  navToggle.classList.remove('open')
  navToggle.setAttribute('aria-expanded', 'false')
  navToggle.setAttribute('aria-label', 'Open menu')
}))

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in')
      io.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
document.querySelectorAll('.reveal, .reveal-swing, .reveal-wipe').forEach((el) => io.observe(el))

// ---------- Ambient sound (opt-in, toggle) ----------
const soundToggle = document.getElementById('soundToggle')
let soundCtx = null
let soundNodes = []

function stopSound() {
  soundNodes.forEach(({ osc, lfo, gain }) => {
    try {
      gain.gain.cancelScheduledValues(soundCtx.currentTime)
      gain.gain.setValueAtTime(gain.gain.value || 0.0001, soundCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, soundCtx.currentTime + 0.6)
      osc.stop(soundCtx.currentTime + 0.8)
      lfo.stop(soundCtx.currentTime + 0.8)
    } catch (err) { /* already stopped */ }
  })
  soundNodes = []
}

soundToggle.addEventListener('click', () => {
  const playing = soundToggle.getAttribute('aria-pressed') === 'true'
  if (playing) {
    stopSound()
    soundToggle.setAttribute('aria-pressed', 'false')
    soundToggle.querySelector('.sound-label').textContent = 'Play the house'
    return
  }
  try {
    soundCtx = soundCtx || new (window.AudioContext || window.webkitAudioContext)()
    if (soundCtx.state === 'suspended') soundCtx.resume()
    const notes = [196, 261.63, 329.63]
    notes.forEach((freq, i) => {
      const osc = soundCtx.createOscillator()
      const gain = soundCtx.createGain()
      const lfo = soundCtx.createOscillator()
      const lfoGain = soundCtx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.0001, soundCtx.currentTime)
      gain.gain.linearRampToValueAtTime(0.05, soundCtx.currentTime + 2 + i)
      lfo.frequency.value = 0.12
      lfoGain.gain.value = 0.02
      osc.connect(gain).connect(soundCtx.destination)
      lfo.connect(lfoGain).connect(gain.gain)
      osc.start()
      lfo.start()
      soundNodes.push({ osc, lfo, gain })
    })
    soundToggle.setAttribute('aria-pressed', 'true')
    soundToggle.querySelector('.sound-label').textContent = 'Quiet the house'
  } catch (err) { /* audio not available */ }
})
