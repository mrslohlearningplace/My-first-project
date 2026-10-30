# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks or libraries (no React, Vue, Tailwind, etc.).
- No build step: files open directly in a browser as written.

## Project Structure

- `index.html`: portal homepage with the grid of tool cards
- `tools/`: one HTML page per tool (`tool-1.html` is a placeholder)
- `css/style.css`: shared styles, including light/dark colours
- `js/theme.js`: theme toggle, loaded by every page
- `README.md`: short project readme
- `CLAUDE.md`: this file, guidance for Claude

## Key Requirements

1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan

A web portal where secondary school students try out small
Mathematics web tools.

### Portal structure

- **Homepage** (`index.html`): site name, theme toggle, and a grid
  of tool cards. Each card shows the tool's name and a one-line
  description.
- **Opening a tool**: clicking a card opens that tool's own page
  in `tools/`.
- **Getting back**: every tool page has a header link back to the
  homepage.
- **Adding a tool later**: create a new page in `tools/` (plus its
  script in `js/` if needed), then add one card for it on the
  homepage.

### Phases

**Phase 1: Portal + Exam Paper Search**
- [x] Homepage with the tool grid and light/dark toggle, plus a
  placeholder "Tool 1 — coming soon" card that opens and returns.
- [ ] Exam Paper Search: filter MOE secondary common test and exam
  papers by school, year, level, stream, subject and exam type.
  Each result links to where the paper is hosted.
- [ ] Paper details and links live in `data/papers.js`, supplied by
  the project owner.

**Phase 2: More tools** (to be decided)
- Add further Mathematics tools, one card each.

**Phase 3: Polish** (to be decided)
- Improvements based on student feedback.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
