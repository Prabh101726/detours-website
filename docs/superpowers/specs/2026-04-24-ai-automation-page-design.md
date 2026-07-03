# AI Automation Page Design (`/ai-automation`)

## Goal

Create a new standalone marketing page on the Detours website that positions AI automation as a live capability and explains practical value for fleet operators.

This page should communicate a "new era" message while staying grounded in concrete workflows:

1. POD uploads by drivers
2. AI invoice builder and customer invoice sorting
3. AI maintenance reports across fleet vehicles

## Scope

### In Scope

- New route: `app/ai-automation/page.tsx`
- Add "AI Automation" navigation link in:
  - `components/Navbar.tsx`
  - `components/Footer.tsx`
- Reuse existing Detours visual language (glass cards, orange accent, animated sections)
- Marketing/explainer content only

### Out of Scope

- Backend AI implementation changes
- Changes to Detours app APIs or data models
- Dashboard/product feature code in the app itself

## Audience and Messaging

### Primary audience

- Fleet owners and operations managers for small to mid-sized fleets

### Tone

- Hybrid tone:
  - Visionary headline: AI as the start of a new era
  - Practical body: reduced admin time, faster invoicing, better maintenance visibility

### Availability position

- All features are presented as live now

## Information Architecture

1. Hero section
2. Three AI pillar cards
3. Workflow strip (end-to-end data flow)
4. Business outcomes section
5. Trust and review controls section
6. Bottom CTA

## Page Sections

## 1) Hero

### Purpose

Set the strategic narrative and immediately clarify real-world outcomes.

### Content direction

- Label: "AI Automation"
- Headline: AI era messaging ("new era for fleet operations")
- Supporting copy: transform driver POD uploads into organized invoices and maintenance insights quickly
- CTA: Book a demo (`/contact`)

## 2) Three AI Pillars

### Pillar A: AI POD Processing

- Driver uploads POD via phone
- AI reads and extracts key delivery details
- Output is structured for owner review
- Value: faster, cleaner records with less manual sorting

### Pillar B: AI Invoice Builder + Sorting

- AI converts approved delivery data into invoice drafts
- Sorts and groups invoices by customer
- Value: shorter billing cycle and cleaner accounts workflow

### Pillar C: AI Maintenance Reports

- AI aggregates vehicle-level maintenance signals
- Builds fleet-wide summaries and trend reports
- Value: proactive maintenance planning and fewer surprises

## 3) Workflow Strip

### Purpose

Show exactly how data moves through the system in a simple linear flow.

### Steps

1. Driver uploads POD
2. AI extracts and classifies
3. Owner reviews and approves
4. Invoice/report output is ready

## 4) Business Outcomes

### Purpose

Translate features into operational impact.

### Outcome copy themes

- Faster invoice turnaround
- Less admin overhead
- Better consistency in records
- Improved visibility across fleet maintenance

No fabricated numeric performance claims should be used.

## 5) Trust, Controls, and Accuracy Messaging

### Purpose

Build confidence in AI-assisted workflows.

### Required trust statements

- If extracted data is unclear, items are flagged for review
- Nothing is auto-sent without owner approval
- Records remain traceable and audit-ready

## 6) Bottom CTA

### Purpose

Drive demo conversion in line with existing site patterns.

### CTA

- "Book a Demo" button linking to `/contact`
- Optional secondary support copy reinforcing setup simplicity

## Design and UI Standards

- Follow existing Detours marketing components and spacing conventions
- Reuse:
  - `AnimatedSection`
  - `GlassCard` where appropriate
- Enforce a glassmorphism visual direction across core sections:
  - Frosted, layered card surfaces with subtle transparency
  - Backdrop blur in the 10-20px range where already supported by site styles
  - Thin, visible borders on glass panels for edge definition
  - Depth hierarchy with restrained shadows and contrast
- Preserve existing typography rhythm:
  - Display headings
  - Monospace micro-labels
  - Orange accent color
- Keep current Detours brand system as source of truth for colors and type;
  do not switch to a new palette or new font family for this page.
- Maintain responsive behavior consistent with existing pages (`features`, `screens`, home)
- Ensure glass elements preserve readability and accessibility contrast (minimum 4.5:1 for body text)

## Metadata and SEO

- Add route metadata:
  - Title focused on "AI Automation"
  - Description covering POD automation, invoice generation/sorting, and maintenance reporting
- Keep wording clear for search intent without stuffing keywords

## Navigation Updates

- Add `"/ai-automation"` to primary nav links
- Add same route to footer navigation links
- Label: "AI Automation"

## Accessibility

- Semantic section structure with proper heading hierarchy
- Sufficient contrast with existing brand palette
- Decorative icons marked appropriately
- Ensure keyboard navigation works with any interactive elements

## Implementation Notes

- Keep page implementation self-contained in new route file
- Prefer simple local arrays for section content, matching style used in existing pages
- Avoid introducing new dependencies for this page

## Validation Plan

1. Run lint checks on changed files
2. Confirm `/ai-automation` renders without runtime errors
3. Verify navbar and footer link navigation to new page
4. Verify responsive layout on mobile and desktop widths
5. Smoke-check existing primary pages for regressions

## Risks and Mitigations

- Risk: "AI live now" copy could imply fully autonomous actions
  - Mitigation: explicit owner approval and review messaging
- Risk: page may overpromise beyond current product behavior
  - Mitigation: keep claims workflow-based and operational, avoid unsupported specifics

## Deliverables

- New page route: `app/ai-automation/page.tsx`
- Updated navigation in `components/Navbar.tsx`
- Updated footer links in `components/Footer.tsx`
- This design spec for implementation planning
