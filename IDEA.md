# IDEA: Robotics — A New Imaginary Technology for Technical Safety BC

## Purpose

This project demonstrates how **Claude Code** and a multi-agent AI workflow can be used to design, develop, and present a new regulated technology for Technical Safety BC (TSBC). The imaginary **"Robotics"** technology serves as the example — modeled after the existing [Elevating Devices](https://www.technicalsafetybc.ca/technologies/elevating-devices) technology.

---

## 1. The Concept: Robotics Technology

### What It Regulates

Technical Safety BC oversees the safety of **robotic and autonomous systems** operating in British Columbia, including:

- **Industrial Robots** — welding arms, assembly line automation, CNC robotic systems
- **Service Robots** — robots in restaurants, hotels, hospitals, and retail
- **Delivery Drones** — aerial and ground-based autonomous delivery systems
- **Autonomous Vehicles** — self-driving shuttles, warehouse AGVs, mining vehicles
- **Surgical Robots** — robotic-assisted medical devices in healthcare facilities
- **Warehouse Automation** — robotic sorting, picking, and packing systems

### Why It Matters

As robotic systems become more common in workplaces and public spaces across BC, ensuring their safe installation, operation, and maintenance is critical to protecting workers and the public. Just as elevators, boilers, and electrical systems require oversight, so do robotic technologies.

---

## 2. Imaginary Regulatory Framework

### Legislation & Regulations

| Document | Description |
|----------|-------------|
| **Safety Standards Act** | Provincial legislation governing technical safety |
| **Robotics Safety Regulation** | Specific regulation for robotic and autonomous systems |
| **Safety Standards General Regulation** | General safety requirements applicable to all technologies |
| **Fee Setting Criteria Regulation** | How fees for permits and certifications are set |
| **Monetary Penalties Regulation** | Penalties for non-compliance |

### Safety Code

- **CSA R100 — Robotics Safety Code** (adopted April 2025)
- Reference codes: CSA R100, ISO 10218, ISO 13482, CAN/CSA-Z434
- Code books available through the CSA Standards Store

### Certification: Robotics Technician

| Class | Scope |
|-------|-------|
| **Class A** | Industrial Robots — factory floor, manufacturing, heavy industry |
| **Class B** | Service & Autonomous Robots — public-facing, delivery, healthcare |
| **Class C** | Drone Systems — aerial delivery, inspection, surveying |

- **Validity**: 3 years from date of issue
- **Renewal**: Online through TSBC Online Services
- **Continuing Education**: 24 hours mandatory training per renewal cycle:
  - 6 hours trade-specific safety
  - 6 hours Act/regulations/code
  - 12 hours technical training per certificate class

---

## 3. Content Mapping: Elevating Devices to Robotics

| Elevating Devices Section | Robotics Equivalent |
|---------------------------|---------------------|
| "Elevating Safety" intro | "Advancing Robotics Safety" intro |
| Elevating Devices Safety Regulation | Robotics Safety Regulation |
| CSA B44 Safety Code | CSA R100 Robotics Safety Code |
| Elevating Devices Mechanic (Cert) | Robotics Technician (Cert) |
| Class A, C, H, MR certificates | Class A, B, C certificates |
| Certificate Renewal (3 years) | Certificate Renewal (3 years) |
| Continuing Education (24 hrs) | Continuing Education (24 hrs) |
| Installation Permits | Installation Permits |
| Operating Permits | Operating Permits |
| Home Elevating Devices | Home Service Robots |
| Escalator Safety Tips | Delivery Drone Safety Tips |
| Compliance and Enforcement | Compliance and Enforcement |

---

## 4. Website Pages

### Page 1: Robotics Technology Landing

Mirrors: `technicalsafetybc.ca/technologies/elevating-devices`

- Hero banner with robotics imagery and "Robotics" heading
- "Advancing Robotics Safety" introduction
- Certificate Renewal CTA banner
- Robotics Regulations section
- CSA R100 Robotics Safety Code section
- Directives, Information Bulletins, Safety Orders
- "You Might Be Interested In" card grid
- Online Services (Manage account / Pay invoice)
- Related Information (Contact, Compliance, Fee Schedules)
- TSBC Footer

### Page 2: Certification Renewal

Mirrors: `technicalsafetybc.ca/.../elevating-devices-mechanic-certification/renewal`

- Hero: "Certification Renewal — Robotics Technician"
- Quick action cards (Online Services / Register)
- Accordion sections:
  - When Do I Need to Renew?
  - What Happens if I Don't Renew?
  - How Do I Update My Skills Passport?
  - Continuing Education Requirements
- Related Information cards

### Page 3: Form Application (Phase 2 — pending screenshot)

- Certification renewal form built with Angular Formly
- SQLite database backend
- User authentication

---

## 5. Multi-Agent Squad Workflow

### Architecture: Two Parallel Squads

#### Squad 1: App Development

```
PRD Review Agent (Sonnet)
    |
User Story Writer Agent (Sonnet) --> GitHub Issues
    |
Senior Developer Agent (Opus) --> Feature branches, PRs
    |
Code Reviewer Agent (Sonnet) --> PR review comments
    |
QA Tester Agent (Haiku) --> Test execution, bug reports
    |
    Loop back if bugs found
    |
Done
```

#### Squad 2: Content & Presentation (in parallel)

```
Website Developer (Opus) --> Angular SPA with TSBC design
Content Writer (Haiku) --> Page copy matching TSBC tone
Presentation Designer (Sonnet) --> PowerPoint via tsbc-designer
```

### Model Strategy (Token Optimization)

| Role | Model | Why |
|------|-------|-----|
| PRD Reviewer | Sonnet | Analytical, structured output |
| User Story Writer | Sonnet | Good at acceptance criteria format |
| Senior Developer | **Opus** | Complex code, architecture decisions |
| Code Reviewer | Sonnet | Pattern matching, best practices |
| QA Tester | **Haiku** | Fast, cheap — runs tests, reports pass/fail |
| Website Developer | **Opus** | Complex Angular + TSBC design system |
| Content Writer | **Haiku** | Template-following, straightforward |
| Presentation Designer | Sonnet | Creative + structured, balanced |

---

## 6. Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Angular 19 + TypeScript |
| Forms | Formly (dynamic forms) |
| Database | SQLite |
| Auth | TBD (pending screenshot) |
| Testing | Karma/Jest or Vitest |
| Linting | ESLint |
| Design | TSBC Design System (tsbc-designer skill) |
| Standards | tsbc-standards skill |
| Presentation | PowerPoint via tsbc-designer skill |
| Version Control | GitHub (Issues, PRs, branches) |

---

## 7. Skills Used

### tsbc-designer

- TSBC brand colors, typography, layout patterns
- PowerPoint generation with official TSBC template
- AI image generation for presentations
- WCAG AA accessibility compliance

### tsbc-standards

- Commit message format (conventional commits)
- Code style guidelines (TypeScript: 2-space indent, camelCase, PascalCase)
- Security requirements (parameterized queries, XSS prevention, OWASP Top 10)
- Testing requirements (80% minimum coverage)
- TSBC brand compliance for UI

---

## 8. Demo Goals

This project proves that Claude Code can:

1. **Work like a Squad team** — multiple specialized agents collaborating through GitHub
2. **Switch models intelligently** — Opus for complex work, Sonnet for analysis, Haiku for simple tasks
3. **Run parallel workstreams** — App development and content creation simultaneously
4. **Use GitHub professionally** — Issues, branches, PRs, code reviews, all linked
5. **Follow brand standards** — using custom skills for TSBC design and coding standards
6. **Create production-quality output** — website, app, and presentation

---

## 9. Milestones

| # | Milestone | Status |
|---|-----------|--------|
| 1 | IDEA.md brainstorm | In Progress |
| 2 | Project PRD (.claude/CLAUDE.md) | Pending |
| 3 | Angular project scaffolding | Pending |
| 4 | Robotics landing page | Pending |
| 5 | Certification renewal page | Pending |
| 6 | Form app (pending screenshot) | Waiting |
| 7 | Custom icon integration | Waiting |
| 8 | PowerPoint presentation | Pending |
