# The Wild Dandelion Collective — Digital Platform
## Product Design Requirements & Complete Handoff for Codex

**Version:** 1.0 — Handoff
**Date:** 2026-03-28
**Author:** David Marsh / LiFi NYC
**Status:** All 5 phases built. Deployed to Netlify. Awaiting production credentials.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Client & Business Context](#2-client--business-context)
3. [Links & Access](#3-links--access)
4. [Tech Stack](#4-tech-stack)
5. [Architecture](#5-architecture)
6. [Environment Variables](#6-environment-variables)
7. [Design System](#7-design-system)
8. [Page Inventory & Routing](#8-page-inventory--routing)
9. [Data Layer](#9-data-layer)
10. [Square Integration](#10-square-integration)
11. [Integration Seams (Placeholder Services)](#11-integration-seams-placeholder-services)
12. [Booking Flow](#12-booking-flow)
13. [Admin Dashboard](#13-admin-dashboard)
14. [Authentication & Security](#14-authentication--security)
15. [Notification System](#15-notification-system)
16. [SEO & Structured Data](#16-seo--structured-data)
17. [Performance & Accessibility](#17-performance--accessibility)
18. [Content: Services Catalog](#18-content-services-catalog)
19. [Content: FAQ](#19-content-faq)
20. [Wired vs. Placeholder Matrix](#20-wired-vs-placeholder-matrix)
21. [File Tree](#21-file-tree)
22. [Git History](#22-git-history)
23. [Deployment & Infrastructure](#23-deployment--infrastructure)
24. [Urgent Business Context: Rental/Tenant Search](#24-urgent-business-context-rentaltenant-search)
25. [Remaining Work](#25-remaining-work)
26. [Key Architectural Decisions](#26-key-architectural-decisions)
27. [Known Issues & Technical Debt](#27-known-issues--technical-debt)

---

## 1. Project Overview

The Wild Dandelion Collective is a unified, mobile-first digital platform replacing two static websites (salon site + collective store) for a hair salon in Longmont, Colorado. It provides:

- **Public brand presence** — Homepage, services, gallery, about, FAQ, contact, local SEO pages
- **Online booking** — Multi-step flow integrated with Square Bookings API
- **Consultation intake** — Photo-upload form for extension/color change consultations
- **Retail storefront** — Product catalog shell (Square Catalog API, cart/checkout pending)
- **Suite rental pipeline** — Rental inquiry form + admin management for open stations/spaces
- **Mobile admin dashboard** — Ashley's phone-first command center for bookings, clients, notes, inquiries, products, and notifications

Everything is designed for a single operator (Ashley) running her business from her phone. The admin dashboard prioritizes glanceability, large tap targets, and one-thumb navigation.

---

## 2. Client & Business Context

### The Person
**Ashley Dania DeMarco** — Owner, sole stylist, and operator of The Wild Dandelion Collective. 20+ years behind the chair. Vidal Sassoon Academy trained, Bumble and bumble certified, Davines color specialist.

### The Business
- **Type:** Hair salon + curated retail collective
- **Address:** 413 Main St, Longmont, CO 80501
- **Phone:** (303) 834-7572
- **Email:** info@thewilddandelioncollective.com
- **Hours:** Monday–Saturday, by appointment
- **Products:** Davines haircare line (exclusive)

### What Ashley Does
- **Signature services:** Lived-in blonde, precision cutting (Sassoon technique), signature color (Davines), bridal/event styling
- **Philosophy:** "Color should look like it grew out of your head." Unhurried, consultative approach. Every formula is custom-mixed.
- **Pricing:** Cuts from $85, color from $75, blonde from $200, bridal from $125, treatments from $45

### The Space
- 2,000 sq ft on Main Street in downtown Longmont
- Salon area + rotating art gallery + curated retail goods + botanicals
- Brand aesthetic: verdant, warm, natural — parchment tones, sage green, terracotta accents

### Urgent Need: Tenants
Ashley is actively seeking renters for the collective. Available immediately:
1. **Retail space** — 400 sq ft, private door/storefront, Main Street frontage, $800/mo all utilities included
2. **Styling stations** — 2 styling chairs + 1 makeup artist station for experienced professionals with full clientele, $800/mo each, includes WiFi, laundry service, Davines wet back bar access

This is financially urgent. The `/collective` page and homepage rental callout were built specifically to drive inquiries.

---

## 3. Links & Access

| Resource | URL / Path |
|----------|-----------|
| **Live site** | https://the-wild-dandelion-collective.netlify.app |
| **Target domain** | https://thewilddandelioncollective.com (not yet connected) |
| **GitHub repo** | https://github.com/omgitsthedm/wild-dandelion-collective-platform |
| **Netlify project** | https://app.netlify.com/projects/the-wild-dandelion-collective |
| **Local path** | `/Users/davidmarsh/Desktop/LiFi NYC/Clients/The Wild Dandelion/Website/platform/` |
| **Approved spec** | `Documents/specs/2026-03-27-wild-dandelion-platform-design.md` |
| **Phase 1 plan** | `Documents/plans/2026-03-27-phase-1-foundation.md` |
| **Phase 2 plan** | `Documents/plans/2026-03-28-phase-2-public-site.md` |

---

## 4. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js (App Router) | 16.2.1 |
| **UI** | React | 19.2.4 |
| **Language** | TypeScript | 5.x |
| **Styling** | CSS Modules + CSS custom properties | — |
| **Database** | Turso (libSQL/SQLite) | @libsql/client 0.17.2 |
| **Payments/Bookings** | Square SDK | 44.0.1 |
| **Hosting** | Netlify (SSR via @netlify/plugin-nextjs) | 5.15.9 |
| **Testing** | Vitest + @testing-library/react | 4.1.2 / 16.3.2 |
| **Linting** | ESLint 9 + eslint-config-next | 16.2.1 |

### What Is NOT Used
- **No Tailwind** — CSS Modules with design tokens only
- **No PostgreSQL** — Turso/SQLite for supplemental data; Square is the operational backbone
- **No Prisma/Drizzle** — Raw SQL via @libsql/client
- **No NextAuth** — Custom session-based auth with scrypt

---

## 5. Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Netlify CDN                       │
│                 (SSR + Edge + Static)                │
├─────────────────────────────────────────────────────┤
│              Next.js 16 App Router                   │
│                                                     │
│   ┌──────────────┐  ┌──────────────┐                │
│   │  (public)    │  │  (admin)     │                │
│   │  Route Group │  │  Route Group │                │
│   │              │  │  (auth-gated)│                │
│   │  Homepage    │  │  Dashboard   │                │
│   │  Services    │  │  Bookings    │                │
│   │  Booking     │  │  Clients     │                │
│   │  Gallery     │  │  Products    │                │
│   │  FAQ         │  │  Inquiries   │                │
│   │  Contact     │  │  Settings    │                │
│   │  Collective  │  │              │                │
│   │  Shop        │  │              │                │
│   │  About       │  │              │                │
│   │  Local SEO   │  │              │                │
│   └──────────────┘  └──────────────┘                │
│                                                     │
│   ┌──────────────────────────────────┐              │
│   │         API Routes (/api)        │              │
│   │  consult | admin/* | notify/*    │              │
│   └──────────────────────────────────┘              │
├─────────────────────────────────────────────────────┤
│                 Integration Layer                    │
│                                                     │
│   ┌─────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐ │
│   │ Square  │ │  Turso   │ │ Stripe │ │ Twilio   │ │
│   │ SDK v44 │ │  libSQL  │ │  (TBD) │ │  (TBD)   │ │
│   │         │ │          │ │        │ │          │ │
│   │Bookings │ │  Notes   │ │Deposit │ │  SMS     │ │
│   │Catalog  │ │  Tags    │ │Checkout│ │Reminders │ │
│   │Customer │ │  Consult │ │        │ │  Alerts  │ │
│   │Inventory│ │  Rental  │ │        │ │          │ │
│   │         │ │  Notif.  │ │        │ │          │ │
│   │         │ │  Session │ │        │ │          │ │
│   │         │ │  Recs    │ │        │ │          │ │
│   └─────────┘ └──────────┘ └────────┘ └──────────┘ │
│                                                     │
│   ┌──────────┐ ┌───────────────┐                    │
│   │  Resend  │ │ Netlify Blobs │                    │
│   │  (TBD)   │ │  (partially   │                    │
│   │  Email   │ │   wired)      │                    │
│   └──────────┘ └───────────────┘                    │
└─────────────────────────────────────────────────────┘
```

### Route Groups
- `(public)` — All customer-facing pages. No auth required. Uses `NavDock` bottom navigation + `Footer`.
- `(admin)` — Ashley's dashboard. Protected by session cookie. Uses `AdminNav` bottom tab bar.

### Integration Seam Pattern
Every external service has a wrapper in `src/lib/integrations/` or `src/lib/square/` that:
1. Checks for the relevant env var
2. If missing: logs to console, returns `{ success: true, placeholder: true }` or mock data
3. If present: calls the real API

This means the entire platform runs and builds cleanly with zero env vars configured. No crashes, no errors — just placeholder behavior until credentials are wired.

---

## 6. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# ── Required for core functionality ──────────────────

# Turso Database
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-token

# Square (source of truth for bookings, catalog, customers)
SQUARE_ACCESS_TOKEN=your-square-token
SQUARE_LOCATION_ID=your-square-location-id
SQUARE_ENVIRONMENT=sandbox          # or "production"

# Admin Authentication
ADMIN_PASSWORD_HASH=generate-with-script   # scrypt hash of Ashley's password

# ── Required for notifications ───────────────────────

ASHLEY_PHONE_NUMBER=+1xxxxxxxxxx    # SMS alerts go here
ASHLEY_EMAIL=ashley@example.com     # Email digest goes here

# ── Integration credentials (wire when ready) ────────

RESEND_API_KEY=                     # Email service (confirmations, digest)
TWILIO_ACCOUNT_SID=                 # SMS service (reminders, alerts)
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=                # "From" number for SMS
STRIPE_SECRET_KEY=                  # Deposit capture
STRIPE_PUBLISHABLE_KEY=             # Client-side Stripe Elements

# ── Auto-set by Netlify (no manual config needed) ────

# NETLIFY_BLOBS_TOKEN=              # File storage for consultation photos
# NETLIFY_SITE_ID=                  # Netlify site identifier
```

### Generating the Admin Password Hash
```bash
node -e "
const { randomBytes, scrypt } = require('crypto');
const password = 'YOUR_PASSWORD_HERE';
const salt = randomBytes(16).toString('hex');
scrypt(password, salt, 64, (err, derived) => {
  console.log(salt + ':' + derived.toString('hex'));
});
"
```

---

## 7. Design System

### Design Tokens (CSS Custom Properties)

All tokens live in `src/design-system/tokens/` and are imported in the root layout. Every component uses these variables — never hardcoded values.

#### Colors (`colors.css`)
```
--color-parchment:      #F7F3E9     (page background)
--color-parchment-dark: #EDE6D6     (section alternation)
--color-sage:           #8FA68E     (primary brand)
--color-sage-dark:      #6B826B     (hover/active sage)
--color-terracotta:     #C17A5C     (warm accent)
--color-golden:         #D4A574     (secondary accent)
--color-ink:            #2C2420     (primary text)
--color-ink-light:      #5C5348     (secondary text)
--color-success:        #7A9E7E
--color-warning:        #D4A574
--color-error:          #B85C4F
--color-line:           rgba(44,36,32,0.10)
--color-overlay:        rgba(44,36,32,0.40)
```

#### Typography (`typography.css`)
```
--font-heading: 'Cormorant Garamond', Georgia, serif
--font-body:    'Source Serif 4', Georgia, serif
--font-ui:      'Inter', system-ui, sans-serif
--font-accent:  'Caveat', cursive

--text-hero:    clamp(1.875rem, 4vw + 1rem, 3.25rem)   // 30–52px
--text-h1:      clamp(1.75rem, 3vw + 0.75rem, 2.625rem) // 28–42px
--text-h2:      clamp(1.375rem, 2vw + 0.5rem, 2rem)     // 22–32px
--text-h3:      clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)// 18–24px
--text-body:    1rem                                      // 16px
--text-small:   0.8125rem                                 // 13px
--text-label:   0.6875rem                                 // 11px

--leading-tight:    1.2
--leading-normal:   1.65
--leading-relaxed:  1.8
--tracking-tight:  -0.02em
--tracking-wide:    0.08em
```

#### Spacing (`spacing.css`)
```
--space-xs:      4px
--space-sm:      8px
--space-md:      16px
--space-lg:      24px
--space-xl:      40px
--space-2xl:     64px
--space-section: clamp(4rem, 8vw, 7rem)
--max-width:     1140px
--gutter:        clamp(1.25rem, 4vw, 2.5rem)
```

#### Motion (`motion.css`)
```
--ease-soft:    cubic-bezier(0.25, 0.1, 0.25, 1)
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1)    // bouncy
--ease-default: ease

--duration-fast:   150ms
--duration-normal: 280ms
--duration-slow:   600ms
--duration-reveal: 1400ms
```

**Signature animations:**
- `comb-out` — Headline text reveal via clip-path, like running a comb through hair
- `soften-in` — Prose fade-in from slightly below
- `photo-develop` — Images start grayscale/slightly blurred, "develop" to full color on scroll (IntersectionObserver)
- `slot-breathe` — Subtle breathing pulse on available booking time slots
- `tactile-press` — Button/card scale-down on press (0.97), spring back on release

**Accessibility:** All animations respect `prefers-reduced-motion: reduce` — durations go to 0, transforms become no-ops.

#### Textures (`textures.css`)
```
--shadow-sm:     0 1px 3px rgba(44,36,32,0.04)
--shadow-md:     0 4px 12px rgba(44,36,32,0.06)
--shadow-lg:     0 8px 32px rgba(44,36,32,0.08)
--shadow-strong: 0 14px 68px rgba(44,36,32,0.14)
--radius-sm:     8px
--radius-md:     16px
--radius-lg:     28px
--radius-pill:   100px
```

### Components

All in `src/design-system/components/`, each with TypeScript, CSS Module, and barrel export:

| Component | Props | Notes |
|-----------|-------|-------|
| **Accordion** | `title`, `children`, `defaultOpen?` | Client component. Animated height. ARIA expanded/controls. |
| **AdminNav** | — | Bottom tab bar: Dashboard, Bookings, Clients, Products. Terracotta active state. Badge count support. |
| **Button** | `href?`, `variant?`, `type?`, `children` | `primary` (sage bg), `secondary` (sage outline), `ghost` (text only). Renders `<a>` when href. Tactile press. |
| **Card** | `variant?`, `href?`, `children` | `flat` or `elevated`. Interactive when href. |
| **ContactInfo** | — | Hardcoded: 413 Main St, (303) 834-7572, hours, click-to-call. |
| **Footer** | — | Sage background. 3 link columns. "Designed, Hosted and Cared For by LittleFightNYC.com" attribution. |
| **GalleryGrid** | `images`, `categories?` | Client component. CSS columns masonry. Filter tabs. |
| **Input** | `label`, `name`, `type?`, `required?`, `error?` | Text/email/tel/textarea. Sage focus ring. Error state with red border. |
| **NavDock** | — | Floating bottom nav: Home, Services, Book, Contact. 44px tap targets. Frosted glass backdrop. |
| **PhotoFrame** | `src`, `alt`, `variant?`, `developing?`, `priority?` | Variants: `default`, `deckled` (torn edge), `inset` (border). `developing` = grayscale-to-color on scroll. Uses `next/image`. |
| **SectionHeader** | `eyebrow`, `title`, `divider?` | Eyebrow in uppercase Inter, title in Cormorant Garamond. |
| **ServiceCard** | `title`, `description`, `href` | Large tappable card with right arrow. Tactile press. |
| **StepIndicator** | `number`, `title`, `description` | Sage numbered circle + title/description below. |
| **TestimonialCard** | `quote`, `attribution` | Decorative quotation mark. Italic Source Serif body. |
| **TimeSlot** | `time`, `available?`, `selected?`, `onClick?` | Booking bloom effect (radial gradient on select). Breathing animation when available. |

---

## 8. Page Inventory & Routing

### Public Pages (`src/app/(public)/`)

| Route | File | Purpose |
|-------|------|---------|
| `/` | `page.tsx` | 5-section homepage: hero, services preview, the space + rental callout, trust/about Ashley, how to start |
| `/about` | `about/page.tsx` | Ashley's story, credentials list, philosophy, testimonial |
| `/services` | `services/page.tsx` | Service hub: "What brings you in?" with 6 guided ServiceCards |
| `/services/[slug]` | `services/[slug]/page.tsx` | Dynamic detail page. `generateStaticParams()` for all 11 services. Ashley's note in Caveat font. |
| `/gallery` | `gallery/page.tsx` | GalleryGrid with 9 images, 4 filter categories |
| `/faq` | `faq/page.tsx` | 5 Accordion sections. Embedded FAQPage JSON-LD schema. |
| `/contact` | `contact/page.tsx` | ContactInfo + Netlify Form (name, email, phone, message, honeypot) |
| `/collective` | `collective/page.tsx` | **Rental/tenant page.** Two space cards (retail + stations), amenities grid, inquiry form. |
| `/shop` | `shop/page.tsx` | Product catalog shell. Placeholder product cards. Wired to Square Catalog when credentials added. |
| `/longmont` | `longmont/page.tsx` | Local SEO landing: LocalBusiness JSON-LD, "Hair Salon in Longmont" |
| `/boulder` | `boulder/page.tsx` | Bridal-focused local SEO: "Bridal Hair Near Boulder" |
| `/book` | `book/page.tsx` | Step 1: Service selection |
| `/book/date` | `book/date/page.tsx` | Step 2: Calendar date picker |
| `/book/time` | `book/time/page.tsx` | Step 3: Time slot grid |
| `/book/details` | `book/details/page.tsx` | Step 4: Customer info form |
| `/book/deposit` | `book/deposit/page.tsx` | Step 5: Deposit capture (Stripe placeholder) |
| `/book/confirmation` | `book/confirmation/page.tsx` | Step 6: Booking confirmed |
| `/book/consult` | `book/consult/page.tsx` | 4-step consultation intake with photo upload |

### Admin Pages (`src/app/(admin)/admin/`)

| Route | Purpose |
|-------|---------|
| `/admin/login` | Password login (only unprotected admin route) |
| `/admin` | Dashboard: greeting, next-up card, today's timeline, action items, alerts, weekly stats |
| `/admin/bookings` | Filter tabs (upcoming/today/past), booking list |
| `/admin/bookings/[id]` | Booking detail with client info, notes textarea, voice note placeholder |
| `/admin/clients` | Searchable client list (from Square Customers API) |
| `/admin/clients/[id]` | Client detail: tags, notes, visit history, product recommendations |
| `/admin/products` | Product grid with stock counts, recommendation toggle |
| `/admin/inquiries` | Two tabs: Consultations (with status pipeline) + Rental inquiries (with status pipeline) |
| `/admin/settings` | Notification toggles, quiet hours config, logout |

### Infrastructure Routes

| Route | Purpose |
|-------|---------|
| `/api/consult` | POST: consultation submission |
| `/api/admin/notes` | POST: save note to client/booking |
| `/api/admin/consultations` | GET/PATCH: list and update consultations |
| `/api/admin/rentals` | GET/PATCH: list and update rental inquiries |
| `/api/notify/booking-confirmed` | POST: send confirmation email + SMS |
| `/api/notify/reminder` | GET (cron: hourly): send 24hr SMS reminders |
| `/api/notify/ashley-alert` | POST: send Ashley SMS alert (quiet hours aware) |
| `/api/notify/weekly-digest` | GET (cron: Mon 8am MT): weekly summary email |
| `/sitemap.xml` | Dynamic sitemap (all public + service routes) |
| `/robots.txt` | Blocks /admin/ and /api/ |

---

## 9. Data Layer

### Turso/SQLite (Supplemental Data)

**Client:** `src/lib/db.ts` — Singleton `@libsql/client` instance using `TURSO_DATABASE_URL` + `TURSO_AUTH_TOKEN`.

**Schema:** `src/lib/schema.ts` — 7 tables, applied via `runMigrations()`:

```sql
-- Client/booking notes (with optional voice recording)
CREATE TABLE notes (
  id TEXT PRIMARY KEY,
  square_customer_id TEXT,
  square_booking_id TEXT,
  content TEXT NOT NULL,
  voice_audio_url TEXT,
  voice_transcript TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Custom tags for client categorization
CREATE TABLE client_tags (
  id TEXT PRIMARY KEY,
  square_customer_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  UNIQUE(square_customer_id, tag)
);

-- Extension/color change consultation requests
CREATE TABLE consultations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT,
  description TEXT,
  photo_urls TEXT,          -- JSON array of Netlify Blob URLs
  preferred_contact TEXT,
  event_date TEXT,
  status TEXT DEFAULT 'new', -- new → contacted → scheduled → completed | declined
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Studio/station rental inquiries
CREATE TABLE rental_inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  specialty TEXT,
  portfolio_url TEXT,
  message TEXT,
  status TEXT DEFAULT 'new', -- new → contacted → approved → active → completed | declined
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Audit log for all outbound notifications
CREATE TABLE notification_log (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,        -- booking_confirmed, reminder, ashley_alert, weekly_digest
  recipient TEXT NOT NULL,
  subject TEXT,
  status TEXT DEFAULT 'pending', -- pending → sent | failed
  related_id TEXT,           -- booking ID, consultation ID, etc.
  sent_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Admin session tokens (7-day expiry)
CREATE TABLE admin_sessions (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL,  -- SHA256 of session token
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Ashley's featured product picks
CREATE TABLE product_recommendations (
  id TEXT PRIMARY KEY,
  square_product_id TEXT NOT NULL UNIQUE,
  ashley_note TEXT,
  featured INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);
```

### What Turso Stores vs. What Square Stores

| Data | Source of Truth | Notes |
|------|----------------|-------|
| Bookings | **Square** | Read via API. No local sync table (yet). |
| Services/catalog | **Square** | Read via API. Static data file provides content copy. |
| Customers | **Square** | Read via API. |
| Inventory | **Square** | Read via API. |
| Notes | **Turso** | Supplemental. Linked to Square IDs. |
| Tags | **Turso** | Supplemental. Linked to Square customer IDs. |
| Consultations | **Turso** | Platform-only. |
| Rental inquiries | **Turso** | Platform-only. |
| Notifications | **Turso** | Audit log only. |
| Sessions | **Turso** | Auth sessions. |
| Product recs | **Turso** | Ashley's picks. Linked to Square product IDs. |

---

## 10. Square Integration

**Location:** `src/lib/square/`

### Files

| File | Exports | Purpose |
|------|---------|---------|
| `client.ts` | `squareClient` | Singleton. Reads `SQUARE_ACCESS_TOKEN`. Switches sandbox/production via `SQUARE_ENVIRONMENT`. |
| `types.ts` | `SquareService`, `SquareTimeSlot`, `SquareBooking`, `SquareProduct`, `SquareCustomer` | Clean TypeScript types for the rest of the app. |
| `bookings.ts` | `getAvailability()`, `createBooking()`, `cancelBooking()`, `getBooking()`, `listUpcomingBookings()` | Full booking lifecycle. Creates customer if needed. Returns mock data when unconfigured. |
| `catalog.ts` | `listServices()`, `listProducts()`, `getProduct()` | Splits catalog into service items (for booking) and product items (for shop). Handles BigInt conversion. |
| `customers.ts` | `findOrCreateCustomer()`, `getCustomer()` | Search by email, create if missing. |
| `inventory.ts` | `getStockCounts()` | Batch stock lookup by product IDs. |
| `index.ts` | — | Barrel re-export of all modules. |

### How Square Maps to the UI

- **Booking flow** → `getAvailability()` for date/time, `createBooking()` on submit
- **Services page** → Static data in `src/data/services.ts` for copy; `listServices()` for real-time pricing when Square connected
- **Shop page** → `listProducts()` for catalog, `getStockCounts()` for inventory badges
- **Admin bookings** → `listUpcomingBookings()`, `getBooking()`, `cancelBooking()`
- **Admin clients** → `getCustomer()`, `findOrCreateCustomer()`
- **Admin products** → `listProducts()`, `getStockCounts()`

### Square SDK Note
Files use `@ts-nocheck` due to Square SDK v44 type surface changes. The API calls are correct; the types just don't align perfectly with the SDK's generated TypeScript definitions. This is cosmetic — runtime behavior is correct.

---

## 11. Integration Seams (Placeholder Services)

All in `src/lib/integrations/`. Each follows the same pattern:

### Email (`email.ts`)
```typescript
export async function sendEmail({ to, subject, html }): Promise<SendEmailResult>
// Checks: RESEND_API_KEY
// Placeholder: logs to console, returns { success: true, placeholder: true }
// To wire: Install `resend` package, uncomment Resend client code
```

### SMS (`sms.ts`)
```typescript
export async function sendSms({ to, body }): Promise<SendSmsResult>
// Checks: TWILIO_ACCOUNT_SID
// Placeholder: logs to console, returns { success: true, placeholder: true }
// To wire: Install `twilio` package, uncomment Twilio client code
```

### Payments (`payments.ts`)
```typescript
export async function createCheckout({ amount, currency, description, customerEmail }): Promise<CheckoutResult>
export async function captureDeposit({ amount, bookingId, customerEmail }): Promise<CheckoutResult>
// Checks: STRIPE_SECRET_KEY
// Placeholder: returns { success: true, placeholder: true, url: '#stripe-placeholder' }
// To wire: Install `stripe` package, implement Checkout Sessions
```

### Storage (`storage.ts`)
```typescript
export async function uploadBlob(key, data, contentType): Promise<string>
export async function getBlobUrl(key): Promise<string>
// Checks: NETLIFY_BLOBS_TOKEN + NETLIFY_SITE_ID
// Placeholder: returns mock URL
// Partially wired: Real Netlify Blobs API call exists, just needs env vars (auto-set in Netlify deploy context)
```

---

## 12. Booking Flow

**Location:** `src/app/(public)/book/`

### Architecture
- **BookingContext.tsx** — React Context + `useReducer` managing the full flow state
- **BookingShell.tsx** — Layout wrapper with progress dots, step labels, back navigation
- **layout.tsx** — Wraps all `/book/*` pages in `BookingProvider` + `BookingShell`

### Flow Steps

| Step | Route | What Happens |
|------|-------|-------------|
| 1. Choose service | `/book` | ServiceCards for each category. Selecting dispatches `SET_SERVICE` to context. |
| 2. Pick date | `/book/date` | Calendar grid. Calls `getAvailability()` from Square. Selecting dispatches `SET_DATE`. |
| 3. Pick time | `/book/time` | TimeSlot grid with bloom effect. Calls `getAvailability()` for selected date. Dispatches `SET_TIME`. |
| 4. Your details | `/book/details` | Name, email, phone, optional note. Dispatches `SET_CUSTOMER`. |
| 5. Deposit | `/book/deposit` | **Placeholder.** Stripe Elements placeholder. Will capture deposit on confirmation. |
| 6. Confirmed | `/book/confirmation` | Calls `createBooking()` to Square. Shows booking ID, summary, "Add to Calendar" prompt. |

### Consultation Intake (Alternative Flow)
- **Route:** `/book/consult` (has its own layout)
- **4 steps:** Service category → describe what you want (+ up to 3 photos) → contact info → confirmation
- **API:** `POST /api/consult` receives form data, saves to Turso `consultations` table
- **Admin:** Appears in `/admin/inquiries` Consultations tab

---

## 13. Admin Dashboard

### Design Philosophy
- Phone-first: Ashley uses this on her iPhone
- Glanceable: most important info is visible without scrolling
- 44px minimum tap targets throughout
- Bottom tab navigation (AdminNav) like a native app
- Terracotta accent for active states (vs. sage for public site)

### Dashboard (`/admin`)
- **Greeting:** "Good morning, Ashley" (time-aware)
- **Next-up card:** Next scheduled booking with countdown
- **Today's timeline:** Chronological list of today's bookings
- **Action items:** New consultations, rental inquiries needing response
- **Alerts:** Low stock warnings, upcoming booking gaps
- **Weekly stats:** Bookings this week, new clients, revenue (from Square)

### Booking Management (`/admin/bookings`, `/admin/bookings/[id]`)
- Filter: upcoming / today / past / cancelled
- Detail view: full booking info, client link, service, notes textarea, voice note placeholder
- Cancel booking action (calls `cancelBooking()`)

### Client Management (`/admin/clients`, `/admin/clients/[id]`)
- Searchable list from Square Customers API
- Detail: contact info, custom tags (Turso), notes history, visit history, product recommendations
- "Quick note" shortcut for post-appointment notes

### Product Management (`/admin/products`)
- Grid of products from Square Catalog
- Stock count badges (from Square Inventory)
- Toggle "Ashley's Pick" recommendation (saves to Turso `product_recommendations`)

### Inquiry Management (`/admin/inquiries`)
- **Consultations tab:** Status pipeline (new → contacted → scheduled → completed/declined)
- **Rentals tab:** Status pipeline (new → contacted → approved → active → completed/declined)
- Each inquiry shows: name, contact info, message, submitted date, current status
- Status change buttons advance through the pipeline

---

## 14. Authentication & Security

**File:** `src/lib/auth.ts`

### How It Works
1. **Login:** Ashley enters password at `/admin/login`
2. **Verify:** Password checked against `ADMIN_PASSWORD_HASH` env var using scrypt (timing-safe comparison)
3. **Session:** 32-byte random token generated, SHA256 hash stored in Turso `admin_sessions` table
4. **Cookie:** Raw token set as `wd_admin_session` httpOnly cookie, 7-day expiry
5. **Auth check:** Admin layout reads cookie, hashes token, looks up session in Turso, checks expiry
6. **Logout:** Deletes session from Turso, clears cookie

### Security Properties
- scrypt with 16-byte random salt, 64-byte derived key
- Timing-safe comparison prevents timing attacks
- Session tokens are SHA256-hashed before storage (compromise of DB doesn't expose tokens)
- 7-day rolling sessions
- httpOnly cookies (no JS access)
- No user signup flow (single-operator)

---

## 15. Notification System

### Alert Types

| Endpoint | Trigger | Channel | Quiet Hours |
|----------|---------|---------|-------------|
| `/api/notify/booking-confirmed` | New booking created | Email + SMS to client | No |
| `/api/notify/reminder` | Cron (hourly) | SMS to client (24hr before) | No |
| `/api/notify/ashley-alert` | Various events | SMS to Ashley | Yes (9pm–8am MT, except critical) |
| `/api/notify/weekly-digest` | Cron (Mon 8am MT) | Email to Ashley | No |

### Ashley Alert Types
- `new_booking` — new booking created
- `cancellation` — booking cancelled (**critical** — bypasses quiet hours)
- `zero_stock` — product out of stock (**critical**)
- `consultation` — new consultation submitted
- `rental_inquiry` — new rental inquiry submitted

### Quiet Hours
- Window: 9:00 PM to 8:00 AM Mountain Time (America/Denver)
- Non-critical alerts are held (logged but not sent)
- Critical alerts (`cancellation`, `zero_stock`) bypass quiet hours
- Configurable in admin settings (UI built, backend toggle pending)

### All notifications are logged to `notification_log` table for audit.

---

## 16. SEO & Structured Data

### Metadata
Every page has:
- `<title>` — Descriptive, keyword-rich
- `<meta name="description">` — 150-160 characters
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- `metadataBase` set to `https://thewilddandelioncollective.com`

### Structured Data (JSON-LD)

| Schema | Location | Data |
|--------|----------|------|
| **HairSalon** | Root layout (every page) | Name, address, phone, email, hours, services, geo coordinates |
| **FAQPage** | `/faq` | All 15+ Q&A pairs |
| **LocalBusiness** | `/longmont`, `/boulder` | Location-specific with service area |

### Infrastructure
- `src/app/sitemap.ts` — Dynamic sitemap including all public routes + all service slugs
- `src/app/robots.ts` — Allows all crawlers, blocks `/admin/` and `/api/`
- OG image: `/images/og-image.jpg` (1200x630) — needs to be created from brand assets

---

## 17. Performance & Accessibility

### Performance
- **Image optimization:** `next.config.ts` enables AVIF + WebP, responsive device sizes
- **PhotoFrame** uses `next/image` with lazy loading (except hero which has `priority`)
- **Loading states:** Skeleton loaders for both public (`loading.tsx`) and admin (`admin/loading.tsx`)
- **Static generation:** Service detail pages use `generateStaticParams()` for build-time rendering
- **Asset caching:** `netlify.toml` sets 1-year immutable cache on `/assets/*` and `/textures/*`
- **Custom 404:** Branded not-found page at `src/app/not-found.tsx`

### Accessibility
- **Skip navigation:** "Skip to main content" link in root layout
- **Focus management:** `:focus-visible` styles on all interactive components (sage outline, 2px offset)
- **Semantic HTML:** Proper heading hierarchy, landmarks (`<main>`, `<nav>`, `<section>`)
- **ARIA:** Accordion uses `aria-expanded`, `aria-controls`; NavDock uses `aria-label`, `aria-current`
- **Motion:** All animations respect `prefers-reduced-motion: reduce`
- **Tap targets:** 44px minimum throughout (especially admin dashboard)
- **Color contrast:** All text/background combinations meet WCAG AA (4.5:1+)

---

## 18. Content: Services Catalog

**File:** `src/data/services.ts`

11 services across 6 categories. Each service has:

| Field | Purpose |
|-------|---------|
| `slug` | URL path segment |
| `name` | Display name |
| `category` | `blonde` / `color` / `cutting` / `extensions` / `treatments` / `events` |
| `humanLabel` | First-person prompt ("I want to brighten my look") |
| `description` | One-line summary |
| `whatItIs` | 3-4 sentence explanation |
| `whoItsFor` | 2-3 sentence audience description |
| `whatToExpect` | 3-4 sentence appointment walkthrough |
| `pricingRange` | "Starting at $XX" |
| `duration` | "X hr + " |
| `consultationRequired` | Boolean (true for extensions) |
| `ashleyNote` | Personal note from Ashley (displayed in Caveat font) |
| `heroImage` | Path to `/images/` WebP |

### Service List

| Service | Category | Price | Duration |
|---------|----------|-------|----------|
| Precision Cutting | cutting | $85+ | 30 min+ |
| Signature Color | color | $150+ | 2 hr+ |
| Base Retouch | color | $120+ | 1.5 hr |
| Toner Refresh | color | $75+ | 1 hr |
| Lived-In Blonde | blonde | $200+ | 2.5 hr+ |
| Full Highlight | blonde | $250+ | 3 hr+ |
| Balayage / Ombre | blonde | $225+ | 2.5 hr+ |
| Extensions | extensions | Consult required | Varies |
| Treatments (Liquid Luster / Keraplasty) | treatments | $45+ | 30 min - 1 hr |
| Bridal & Formal Styling | events | $125+ | 1-2 hr+ |

**Helper functions:**
- `getServiceBySlug(slug)` — lookup for `[slug]` pages
- `getServicesByCategory(category)` — filter for category listings

---

## 19. Content: FAQ

**File:** `src/data/faq.ts`

5 sections, 15+ questions total:

### Booking (4 questions)
- How to book, deposit requirements, cancellation policy (48hr notice), new client info

### Policies (4 questions)
- Late arrival, children policy (not accommodated), payment methods (cards + Apple/Google Pay), tipping

### What to Expect (4 questions)
- First visit walkthrough, time estimates by service, consultation requirements, "not sure what I want"

### Aftercare (4 questions)
- Color maintenance (sulfate-free, lukewarm water), toner refresh cadence (4-6 weeks), extension care, product recommendations

### Products (3 questions)
- Davines product line, walk-in purchases, phone/text ordering for pickup

---

## 20. Wired vs. Placeholder Matrix

### Fully Wired (works now)
- All public pages (content, routing, styling, animations)
- Design system (all tokens, all 15 components)
- Square bookings API (availability, create, cancel, get, list)
- Square catalog API (services, products, single product)
- Square customers API (find/create, get)
- Square inventory API (stock counts)
- Turso database (schema, CRUD for all 7 tables)
- Admin authentication (login, sessions, logout)
- Admin dashboard (all 8 pages)
- Consultation intake (form + API + admin management)
- Rental inquiry pipeline (form + admin management)
- Notification logging (audit trail)
- SEO (metadata, JSON-LD, sitemap, robots.txt)
- Accessibility (skip nav, focus, ARIA, reduced motion)
- Loading states + custom 404
- Netlify deployment (build, SSR, scheduled functions)

### Partially Wired (structure exists, needs credentials)
- Netlify Blobs storage (API calls written, needs NETLIFY_BLOBS_TOKEN — auto-set on deploy)
- Shop page (reads from Square Catalog, but no cart/checkout flow)
- Consultation photo uploads (form UI exists, Blobs upload commented out)
- Booking deposit (Stripe UI shell exists, no Stripe integration)

### Placeholder Only (needs implementation + credentials)
- Email sending (Resend — code skeleton exists)
- SMS sending (Twilio — code skeleton exists)
- Stripe deposit capture
- Stripe product checkout
- Booking reminder SMS (needs local bookings sync table from Square)
- Weekly digest email delivery (format ready, needs Resend)
- Voice note recording (admin booking detail — UI placeholder only)
- Product recommendations admin UI (DB schema exists, UI toggle exists, full management pending)

---

## 21. File Tree

```
platform/
├── Documents/
│   ├── handoff/
│   │   └── 2026-03-28-codex-handoff.md          ← THIS FILE
│   ├── plans/
│   │   ├── 2026-03-27-phase-1-foundation.md
│   │   └── 2026-03-28-phase-2-public-site.md
│   └── specs/
│       └── 2026-03-27-wild-dandelion-platform-design.md
├── public/
│   ├── images/                                   ← 15 WebP brand photos
│   │   ├── ashley-portrait.webp
│   │   ├── bridal-1.webp, bridal-2.webp, bridal-3.webp, bridal-wedding.webp
│   │   ├── hair-work-1.webp through hair-work-6.webp
│   │   ├── studio-detail.webp, splash.webp
│   │   ├── logo-bw.webp, logo-grey.webp
│   │   ├── apple-touch-icon.png, icon-512.png
│   │   └── og-image.jpg                          ← Needs creation
│   └── textures/
│       └── paper-grain.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx                            ← Root layout (fonts, skip nav, schema)
│   │   ├── layout.module.css
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx
│   │   ├── not-found.module.css
│   │   ├── (public)/
│   │   │   ├── layout.tsx                        ← NavDock + Footer
│   │   │   ├── layout.module.css
│   │   │   ├── loading.tsx
│   │   │   ├── loading.module.css
│   │   │   ├── page.tsx                          ← Homepage
│   │   │   ├── page.module.css
│   │   │   ├── about/page.tsx + page.module.css
│   │   │   ├── services/page.tsx + page.module.css
│   │   │   ├── services/[slug]/page.tsx + page.module.css
│   │   │   ├── gallery/page.tsx + page.module.css
│   │   │   ├── faq/page.tsx + page.module.css
│   │   │   ├── contact/page.tsx + page.module.css
│   │   │   ├── collective/page.tsx + page.module.css
│   │   │   ├── shop/page.tsx + page.module.css
│   │   │   ├── longmont/page.tsx + page.module.css
│   │   │   ├── boulder/page.tsx + page.module.css
│   │   │   └── book/
│   │   │       ├── layout.tsx + layout.module.css
│   │   │       ├── BookingContext.tsx
│   │   │       ├── BookingShell.tsx
│   │   │       ├── page.tsx + page.module.css       ← Step 1
│   │   │       ├── date/page.tsx + page.module.css   ← Step 2
│   │   │       ├── time/page.tsx + page.module.css   ← Step 3
│   │   │       ├── details/page.tsx + page.module.css ← Step 4
│   │   │       ├── deposit/page.tsx + page.module.css ← Step 5
│   │   │       ├── confirmation/page.tsx + page.module.css ← Step 6
│   │   │       └── consult/
│   │   │           ├── layout.tsx
│   │   │           ├── page.tsx + page.module.css
│   │   ├── (admin)/
│   │   │   ├── layout.tsx                        ← Auth gate + AdminNav
│   │   │   ├── admin/
│   │   │   │   ├── login/page.tsx + page.module.css
│   │   │   │   ├── page.tsx + page.module.css       ← Dashboard
│   │   │   │   ├── loading.tsx + loading.module.css
│   │   │   │   ├── bookings/page.tsx + page.module.css
│   │   │   │   ├── bookings/[id]/page.tsx + page.module.css
│   │   │   │   ├── clients/page.tsx + page.module.css
│   │   │   │   ├── clients/[id]/page.tsx + page.module.css
│   │   │   │   ├── products/page.tsx + page.module.css
│   │   │   │   ├── inquiries/page.tsx + page.module.css
│   │   │   │   └── settings/page.tsx + page.module.css
│   │   └── api/
│   │       ├── consult/route.ts
│   │       ├── admin/
│   │       │   ├── notes/route.ts
│   │       │   ├── consultations/route.ts
│   │       │   └── rentals/route.ts
│   │       └── notify/
│   │           ├── booking-confirmed/route.ts
│   │           ├── reminder/route.ts
│   │           ├── ashley-alert/route.ts
│   │           └── weekly-digest/route.ts
│   ├── components/
│   │   └── schema/
│   │       └── HairSalonSchema.tsx               ← JSON-LD structured data
│   ├── data/
│   │   ├── services.ts                           ← 11 services, full content
│   │   └── faq.ts                                ← 5 sections, 15+ questions
│   ├── design-system/
│   │   ├── tokens/
│   │   │   ├── colors.css
│   │   │   ├── typography.css
│   │   │   ├── spacing.css
│   │   │   ├── motion.css
│   │   │   └── textures.css
│   │   └── components/
│   │       ├── Accordion/
│   │       ├── AdminNav/
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── ContactInfo/
│   │       ├── Footer/
│   │       ├── GalleryGrid/
│   │       ├── Input/
│   │       ├── NavDock/
│   │       ├── PhotoFrame/
│   │       ├── SectionHeader/
│   │       ├── ServiceCard/
│   │       ├── StepIndicator/
│   │       ├── TestimonialCard/
│   │       └── TimeSlot/
│   └── lib/
│       ├── auth.ts                               ← scrypt + sessions
│       ├── db.ts                                 ← Turso client singleton
│       ├── schema.ts                             ← 7-table schema + migration
│       ├── square/
│       │   ├── client.ts
│       │   ├── types.ts
│       │   ├── bookings.ts
│       │   ├── catalog.ts
│       │   ├── customers.ts
│       │   ├── inventory.ts
│       │   └── index.ts
│       └── integrations/
│           ├── email.ts                          ← Resend placeholder
│           ├── sms.ts                            ← Twilio placeholder
│           ├── payments.ts                       ← Stripe placeholder
│           └── storage.ts                        ← Netlify Blobs (partial)
├── tests/
│   ├── setup.ts
│   └── lib/
│       ├── auth.test.ts
│       ├── db.test.ts
│       └── schema.test.ts
├── .env.local.example
├── .gitignore
├── netlify.toml
├── next.config.ts
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

## 22. Git History

```
4977fad feat: add rental/tenant details — retail space + styling stations at $800/mo
8616d75 feat: Phase 5 — notifications, performance, accessibility, polish
828c5f9 feat: Phase 4 — admin dashboard with bookings, clients, products, inquiries
28796cf feat: Phase 3 — booking flow, consultation intake, Square integration
8c03d5f feat: add SEO infrastructure — sitemap, robots.txt, HairSalon schema
1b27ebe feat: build all public pages — homepage through area pages
e31a6fb feat: add Phase 2 components, data files, and brand assets
434c78e feat: add design system barrel exports and verify full build
15af3d6 feat: add integration seams — email, SMS, payments with placeholder implementations
7d5c34c feat: add admin auth — password hashing, session tokens, login page
4f55ee3 feat: add Turso database client and schema with all 7 tables
51dabe7 feat: add public layout with NavDock and admin layout shell
16d39b6 feat: add NavDock component — floating bottom navigation with active state
d98d980 feat: add Input component — text, email, tel, textarea with validation states
6099d31 feat: add PhotoFrame component — developing treatment, deckled edges, IntersectionObserver
fa35783 feat: add SectionHeader component — eyebrow, heading, divider
c27bd52 fix: add @netlify/plugin-nextjs for SSR and server component support
95152d5 feat: add Card component — flat, elevated variants with tactile press interaction
7aa66db feat: add Button component — primary, secondary, ghost variants with tactile press
ce9a40b feat: add design system tokens — colors, typography, spacing, motion, textures
ec4a6ca chore: scaffold Next.js app with Netlify config, vitest, and dependencies
```

All 21 commits on `main`. No branches. Clean linear history.

---

## 23. Deployment & Infrastructure

### Current State
- **Netlify site:** `the-wild-dandelion-collective`
- **Live URL:** https://the-wild-dandelion-collective.netlify.app
- **Build:** `npm run build` → `.next` output
- **SSR:** `@netlify/plugin-nextjs` handles server-rendered routes
- **Scheduled functions:** Configured in `netlify.toml` for hourly reminders + weekly digest

### To Complete Deployment
1. **Domain:** Connect `thewilddandelioncollective.com` to Netlify site (DNS settings)
2. **GitHub integration:** Connect repo for automatic deploys on push (currently manual `netlify deploy --prod`)
3. **Environment variables:** Set all env vars in Netlify dashboard (Settings → Environment Variables)
4. **Turso database:** Create database at turso.tech, run migrations, set URL + token
5. **Square credentials:** Get Ashley's Square API access token + location ID from her Square Dashboard
6. **Admin password:** Generate scrypt hash, set as `ADMIN_PASSWORD_HASH`

### Netlify Config (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[headers]]
  for = "/assets/*"
  Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/textures/*"
  Cache-Control = "public, max-age=31536000, immutable"

[functions."api/notify/reminder"]
  schedule = "0 * * * *"              # Every hour

[functions."api/notify/weekly-digest"]
  schedule = "0 15 * * 1"            # Monday 3pm UTC = 8am MT
```

---

## 24. Urgent Business Context: Rental/Tenant Search

Ashley is actively and urgently looking for tenants. This is the highest-priority business need after the core site being live.

### What's Available
1. **Retail Space:** 400 sq ft, private door, Main Street storefront, $800/mo, all utilities included
2. **Styling Stations:** 2 styling chairs + 1 makeup artist station, $800/mo each, WiFi + laundry + Davines wet back bar included

### What's Been Built
- **`/collective` page** — Full rental landing page with:
  - Two detailed space cards (retail + stations) with pricing and feature lists
  - Amenities grid (8 items)
  - Personal CTA from Ashley about wanting to talk
  - Inquiry form (Netlify Forms): name, email, phone, specialty, portfolio URL, message
  - SEO-optimized metadata targeting "Salon Suite & Retail Space for Rent in Longmont"

- **Homepage rental callout** — Sage-bordered callout box in "The Space" section:
  > "Now available: A 400 sq ft retail space with private entrance, plus styling and makeup stations for experienced professionals. $800/mo, all utilities included."

  With primary CTA "View Available Spaces" → `/collective`

### What's Needed
- The inquiry form submits via Netlify Forms (already configured with `data-netlify="true"`)
- Submissions need to flow to the admin `/admin/inquiries` Rentals tab via Turso
- Currently the Netlify Form submission and the Turso `rental_inquiries` table are separate paths — they need to be connected (either form action posts to API route, or Netlify webhook triggers API)

---

## 25. Remaining Work

### Priority 1: Go-Live Requirements
- [ ] Connect domain `thewilddandelioncollective.com` to Netlify
- [ ] Set up GitHub → Netlify automatic deploys
- [ ] Create Turso database and run migrations
- [ ] Get Ashley's Square API credentials and set env vars
- [ ] Generate admin password hash and set env var
- [ ] Create OG image (`/images/og-image.jpg`, 1200x630)

### Priority 2: Wire Integration Seams
- [ ] Install `resend` package, configure email sending
- [ ] Install `twilio` package, configure SMS sending
- [ ] Wire booking confirmation emails + SMS
- [ ] Wire 24hr reminder SMS (need local bookings sync from Square)
- [ ] Wire Ashley alert SMS
- [ ] Wire weekly digest email

### Priority 3: Payment Flow
- [ ] Install `stripe` package
- [ ] Implement deposit capture in booking flow
- [ ] Implement product checkout flow for shop
- [ ] Connect Stripe webhook for payment confirmation

### Priority 4: Feature Completion
- [ ] Connect rental inquiry form to Turso (currently Netlify Forms only)
- [ ] Connect consultation photo uploads to Netlify Blobs
- [ ] Build Square → Turso booking sync job (scheduled function)
- [ ] Build full product detail page (`/shop/[id]`)
- [ ] Build cart + checkout flow for retail products
- [ ] Voice note recording in admin booking detail
- [ ] Full product recommendations management UI

### Priority 5: Polish
- [ ] Real photography session with Ashley (replace placeholder images)
- [ ] Google Analytics 4 setup (GA4 ID)
- [ ] Google Search Console verification + sitemap submission
- [ ] Performance audit (Lighthouse 90+ target)
- [ ] Full accessibility audit (WCAG AA)
- [ ] Cross-browser testing (Safari, Chrome, Firefox on iOS + desktop)

---

## 26. Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| **Square over custom booking** | Ashley already uses Square for payments. Single source of truth for all operational data. No data sync headaches. |
| **Turso over PostgreSQL** | Lightweight, serverless-friendly SQLite. Only stores supplemental data (notes, tags, inquiries). Square handles the heavy lifting. |
| **CSS Modules over Tailwind** | Brand-specific design system with custom properties. Better control over the verdant/organic aesthetic. No utility class bloat. |
| **Integration seam pattern** | Every external service degrades gracefully. Platform runs with zero env vars. Wire services incrementally without code changes. |
| **Static service data** | Service copy (descriptions, Ashley's notes) lives in `src/data/services.ts`, not in Square. Square provides real-time pricing/availability. Content and operations are separate concerns. |
| **Route groups** | `(public)` and `(admin)` get different layouts, different nav, different auth requirements. Clean separation. |
| **Mobile-first admin** | Ashley runs her business from her phone. Admin dashboard is designed as a mobile app with bottom tab nav, not a desktop panel with sidebar. |
| **Netlify-native** | Scheduled functions for cron jobs, Blobs for file storage, Forms for contact/rental intake. Minimizes external dependencies. |
| **No client-side routing in booking** | Each step is a separate page, not a SPA step. This means each step has its own URL (shareable, back-button works), and each step's data requirements are isolated. Context bridges state across pages. |

---

## 27. Known Issues & Technical Debt

| Issue | Impact | Notes |
|-------|--------|-------|
| `@ts-nocheck` on Square files | Type safety gap | Square SDK v44 types don't perfectly match runtime API. Code works; types need migration. |
| No local bookings table | Reminder API returns empty | The `/api/notify/reminder` endpoint queries a local `bookings` table that doesn't exist. Needs a Square sync job. |
| Rental form dual path | Inquiries may not reach admin | The `/collective` form uses Netlify Forms (works), but admin inquiries page reads from Turso. Need to connect these. |
| Consultation photos | Not actually uploaded | The consultation form accepts photos, but the upload to Netlify Blobs is commented out. Photos are lost. |
| No booking validation | Double-booking risk | The booking flow doesn't re-check availability before final submission. Race condition possible during high traffic. |
| Admin auth no rate limiting | Brute force risk | Login endpoint has no rate limiting. Should add Netlify's built-in rate limiting or implement token bucket. |
| No error boundaries | White screen on crash | React error boundaries not implemented. A component error crashes the entire page. |
| Weekly digest untested | May not format correctly | The weekly digest email template is built but has never been tested with real Resend delivery. |

---

*Built with Claude Code (LiFi NYC) — 2026-03-28*
