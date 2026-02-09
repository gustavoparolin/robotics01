# Robotics01 — Project PRD

## Overview

An imaginary **"Robotics"** regulated technology website and application for Technical Safety BC, built to demonstrate Claude Code's multi-agent squad capabilities. Modeled after the existing [Elevating Devices](https://www.technicalsafetybc.ca/technologies/elevating-devices) technology pages.

**Repository**: `gustavoparolin/robotics01`
**Working Directory**: `C:\Users\gusta\web\robotics01`

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Angular | 19 |
| Language | TypeScript | 5.x |
| Forms | @ngx-formly/core + @ngx-formly/bootstrap | latest |
| Database | SQLite (sql.js for browser) | latest |
| Auth | TBD (pending screenshot) | — |
| Testing | Karma + Jasmine (Angular default) | latest |
| Linting | ESLint + @angular-eslint | latest |
| CSS | SCSS with TSBC design tokens | — |
| Package Manager | npm | — |

---

## Skills

### tsbc-designer
**Path**: `c:\Users\gusta\OneDrive\web\tsbc\githubSkills\.github\skills\tsbc-designer\SKILL.md`

Use for:
- TSBC brand colors, typography, layout patterns
- PowerPoint generation with official TSBC template
- AI image generation for presentations
- WCAG AA accessibility compliance

### tsbc-standards
**Path**: `c:\Users\gusta\OneDrive\web\tsbc\githubSkills\.github\skills\tsbc-standards\SKILL.md`

Use for:
- Conventional commit format: `type(scope): description`
- TypeScript: 2-space indent, camelCase variables, PascalCase classes
- Security: parameterized queries, XSS prevention, OWASP Top 10
- Testing: 80% minimum code coverage
- WCAG 2.1 AA compliance

---

## TSBC Design System Tokens

### Colors
```scss
$primary: #00497B;        // Deep blue — headers, primary actions, nav
$primary-dark: #1B2D51;   // Authority — important elements, dark sections
$primary-mid: #B5CEDF;    // Calm — hero backgrounds, accents
$primary-light: #E5EEF2;  // Clean — card backgrounds, subtle separations
$secondary: #46C1FE;      // Energy — hover states, links, interactive
$tertiary: #3EA893;       // Growth — success states, positive indicators
```

### Typography
```scss
$font-family: 'Inter', Arial, sans-serif;
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-semibold: 600;
$font-weight-bold: 700;

$font-size-h1: 65px;    // Mobile: 35px
$font-size-h2: 50px;    // Mobile: 30px
$font-size-h3: 30px;    // Mobile: 26px
$font-size-body: 20px;  // Min: 16px
$line-height: 1.5;
```

### Spacing (8px base)
```scss
$space-xs: 8px;
$space-sm: 16px;
$space-md: 24px;
$space-lg: 32px;
$space-xl: 48px;
$space-2xl: 64px;
```

### Components
```scss
$border-radius: 12px;
$card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
$transition: 200ms ease;
```

---

## Project Structure

```
robotics01/
  .claude/
    CLAUDE.md              # This PRD
  src/
    app/
      app.component.ts     # Root component
      app.routes.ts        # Route definitions
      pages/
        robotics/          # Robotics landing page
        renewal/           # Certification renewal page
        form/              # Form app (Phase 2)
      shared/
        components/
          header/           # TSBC header/nav
          footer/           # TSBC footer
          hero/             # Hero banner component
          card/             # Card component
          accordion/        # Accordion component
          cta-banner/       # CTA banner component
        styles/
          _variables.scss   # Design tokens
          _mixins.scss      # Reusable mixins
          _global.scss      # Global styles
      services/
        db.service.ts       # SQLite service (Phase 2)
        auth.service.ts     # Auth service (Phase 2)
    assets/
      icons/               # Robotics icon (provided later)
      images/              # Hero images, illustrations
    styles.scss            # Global stylesheet
  angular.json
  package.json
  tsconfig.json
```

---

## Pages

### 1. Robotics Technology Landing (`/robotics`)

Mirrors: `technicalsafetybc.ca/technologies/elevating-devices`

**Sections (top to bottom):**
1. Header — TSBC navigation bar
2. Hero — Blue banner (#B5CEDF), "Robotics" heading, subtitle, decorative image
3. "Advancing Robotics Safety" — intro paragraph
4. Certificate Renewal CTA — dark blue (#00497B) banner with "Renew Now" button
5. Robotics Regulations — links to Safety Standards Act, Robotics Safety Regulation, etc.
6. CSA R100 Robotics Safety Code — code adoption notice, CSA Standards Store link
7. Directives & Regulatory Notices — "View Regulatory Notices" CTA
8. "You Might Be Interested In" — card grid:
   - Robotics Technician Certification
   - Certification Renewal
   - Robotics Licences
   - Robotics Assessments
   - Robotics Design Registration
   - Installation Permits
   - Operating Permits
   - Home Service Robots
   - CSA R100 Safety Code
9. Safety Report section — "What Are the Leading Technical Safety Risks in BC?"
10. Home Service Robots — learn about home robot installation safety
11. Delivery Drone Safety Tips — public-facing safety tips
12. Online Services — Manage account / Pay invoice cards
13. Related Information — Contact, Compliance & Enforcement, Fee Schedules
14. Footer — Back to top, Report an Incident, Contact Us, copyright, social links

### 2. Certification Renewal (`/robotics/renewal`)

Mirrors: `technicalsafetybc.ca/.../renewal`

**Sections:**
1. Header
2. Hero — "Certification Renewal" heading, "Robotics Technician" subtitle
3. Quick Action Cards — Online Services / Register Now
4. Accordions:
   - **When Do I Need to Renew?** — 3-year validity, Class A, B, C
   - **What Happens if I Don't Renew?** — compliance orders, penalties, work stoppage, re-certification
   - **How Do I Update My Skills Passport?** — encouraged, declaration forms per class
   - **Continuing Education Requirements** — 24 hours: 6 trade safety + 6 regulations + 12 technical
5. Related Information Cards — Robotics Technician, Exam Info, Skills Passport
6. Footer

### 3. Form Application (`/robotics/apply`) — Phase 2

- Dynamic certification renewal form via Angular Formly
- SQLite backend for data persistence
- Authentication (details pending)

---

## Multi-Agent Squad Workflow

### Squad 1: App Development

| Step | Agent Role | Model | Action |
|------|-----------|-------|--------|
| 1 | PRD Reviewer | Sonnet | Validate this PRD, identify gaps |
| 2 | User Story Writer | Sonnet | Create GitHub Issues with acceptance criteria |
| 3 | Senior Developer | **Opus** | Implement on feature branches, create PRs |
| 4 | Code Reviewer | Sonnet | Review PRs, approve or request changes |
| 5 | QA Tester | **Haiku** | Run tests, verify acceptance criteria |
| 6 | Loop | — | Bugs go back to step 3, repeat until green |

### Squad 2: Content & Presentation (parallel)

| Agent Role | Model | Action |
|-----------|-------|--------|
| Website Developer | **Opus** | Build Angular SPA with TSBC design |
| Content Writer | **Haiku** | Write page copy matching TSBC tone |
| Presentation Designer | Sonnet | PowerPoint via tsbc-designer skill |

---

## Tone & Language

Follow TSBC's official voice:
- **Professional and regulatory** — reference Acts, Regulations, Standards
- **Clear and procedural** — imperative language for instructions
- **Consequence-focused** — emphasize risks of non-compliance
- **Accessible to public** — safety tips written simply, not jargon-heavy
- **Action-oriented CTAs** — "Renew Now", "Learn More", "View"

---

## Quality Gates

Before every commit and PR:

```bash
ng lint                 # ESLint passes
ng build                # Build succeeds
npm test                # Tests pass (80%+ coverage)
```

**Do NOT commit if any check fails.**

---

## Milestones

| # | Milestone | Issue | Status |
|---|-----------|-------|--------|
| 1 | IDEA.md brainstorm | #2 | Done |
| 2 | Project PRD | #4 | In Progress |
| 3 | Angular project scaffolding | TBD | Pending |
| 4 | Shared components (header, footer, hero, cards) | TBD | Pending |
| 5 | Robotics landing page | TBD | Pending |
| 6 | Certification renewal page | TBD | Pending |
| 7 | Form app (pending screenshot) | TBD | Waiting |
| 8 | Custom icon integration | TBD | Waiting |
| 9 | PowerPoint presentation | TBD | Pending |

---

## Do NOT

- Commit without running lint/typecheck/tests
- Push directly to main (use feature branches)
- Create PRs without linking to an issue
- Skip writing tests for new features
- Use colors outside the TSBC palette
- Use fonts other than Inter/Arial
- Ignore WCAG AA accessibility requirements
- Guess at requirements — ask first
