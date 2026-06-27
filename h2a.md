# Hermes → Antigravity Handoff (h2a.md)

**Date:** 2026-06-26
**From:** Hermes (Telegram)
**To:** Antigravity (Gemini)

---

## What was done this session

### 1. Add Math (0606) — Quiz Fix ✅
The quizzes in `0606-add-math/digitized_notes.js` were completely broken. All 85 quizzes had **no multiple choice options** — the "question" field literally contained the entire worked example text, and the "explanation" field repeated the same text. Students clicking a quiz just saw a "Show Solution" button that showed the notes they already read.

**Fixed:** All 74 subtopics now have **199 proper MCQ quiz questions** with:
- 4 options each
- correctIndex (0-3)
- Explanations using KaTeX math

**Only the `quizzes` arrays were modified.** All `digitizedText` content was preserved exactly.

### 2. Physics (0625) — Dark Mode SVG Fix ✅
Many SVGs in `0625-physics/digitized_notes.js` had hard-coded colors that broke dark mode:
- 21× `fill="white"`, 9× `fill="#ffffff"` → `fill="var(--white)"`
- 1× `fill="#333"`, 5× `fill="#bbb"`, 2× `fill="#ddd"` → CSS variables
- Various gray fills/strokes → `var(--text-muted)` / `var(--text-main)`

Also added to `css/notes-style.css`:
- `overflow: visible` on all SVGs (prevents clipping)
- `max-width: 100%; height: auto` (responsive)
- Theme-adaptive SVG utility classes

**Semantic colors were NOT touched** (magnet red/blue, circuit blue, etc. — these are intentional).

---

## Physics Diagram Issues — What Needs Fixing

### The Problem
The SVGs in Chapter 4 (Electricity & Magnetism) were generated with Antigravity and have structural quality issues. The dark mode colors are fixed, but the **diagram rendering quality** needs work.

### What to fix (by subtopic)

#### 4.1 Electric Field
- Parallel plate diagrams are OK (simple rectangles + arrows)
- Point charge diagrams have too many field lines that overlap — reduce to 6-8 lines max

#### 4.2 Charge (Electrostatic)
- Glass rod / cloth diagrams are overcomplicated (96-114 elements)
- The "charging by induction" 4-step diagram is too dense — consider splitting into 4 separate smaller SVGs
- The MCQ diagrams (A/B/C/D options) are well-structured but very large (600×400) — may overflow on mobile

#### 4.3 Current
- Wire cross-section diagram is OK
- Circuit diagram with ammeter/voltmeter — check that the meter circles are properly centered on the wires

#### 4.4 Voltage & EMF
- Circuit diagrams with battery symbols — the alternating long/short lines for cells may render unevenly. Use consistent spacing (long=10px, short=5px, gap=3px)
- The P→Q→R graph diagram is complex — verify coordinates are correct

#### 4.5 Resistance
- V-I graph is OK
- The filament lamp / thermistor symbols need checking — these are drawn with raw `<path>` elements

#### 4.6 Electrical Energy & Power
- Simple circuit with resistor — OK

#### 4.7 Circuit Analysis ⚠️ (Most complex)
- 11 SVGs total, many with 20-40 elements
- Battery symbols drawn as `M 130 30 L 130 50 M 140 20 L 140 60 M 150 30 L 150 50` — this is a 3-cell battery but the coordinate spacing is uneven
- Resistor symbols are plain rectangles (should use zigzag or box per convention)
- Ammeter/voltmeter circles need to be properly centered on wires
- Potential divider circuits have multiple components — check alignment
- LDR/thermistor symbols are hand-coded paths — verify they look correct
- Diode symbols use `<polygon>` — check triangle direction and bar placement

#### 4.9 Magnetic Field ⚠️
- Bar magnet field lines drawn with raw `<path>` curves — these are the most likely to look wonky
- Solenoid diagram uses `Q` (quadratic bezier) for coil loops — the control points may produce uneven curves
- Earth's field diagram — verify the dip angle rendering

#### 4.10 Electromagnet
- Solenoid wrapping around iron bar — the coil loops may overlap with the bar
- Electromagnet with perspective plane — 3D perspective drawn in 2D SVG is tricky

#### 4.11 Catapult Effect
- Right-hand rule diagrams — these need very precise positioning
- Force direction arrows need to be clearly visible

#### 4.12 Electromagnetic Induction ⚠️
- DC Generator diagram is the most complex (65 elements) — magnets + coil + split ring + brushes
- Fleming's Right-Hand Rule diagram — 3D hand gesture in 2D SVG
- AC vs DC output graphs — verify sine wave shape

#### 4.13 Transformer
- Iron core + primary/secondary coils — the coil wrapping around the core needs consistent spacing
- Power transmission diagram (plant → tower → tower → house) is simplified but functional

### General SVG Quality Rules for Redrawing

1. **Wire connections:** All `<line>` and `<path>` endpoints should share exact coordinates. No gaps, no overlaps.
2. **Component symbols:** Use standard IEC symbols:
   - Resistor: zigzag OR rectangle (pick one, be consistent)
   - Battery: alternating long/short parallel lines (long=positive, short=negative)
   - Ammeter: circle with "A"
   - Voltmeter: circle with "V"
   - Switch: break in wire with pivot point
3. **Labels:** Minimum font-size 12px. Use `class="sme-text"` for all labels.
4. **Field lines:** Use smooth curves (cubic bezier `C`), not quadratic `Q`. Arrow heads should be visible.
5. **Consistent stroke-width:** 2px for components, 1.5px for wires, 1px for construction lines.
6. **No hard-coded colors:** Use CSS classes (`sme-axis`, `sme-line-primary`, etc.) or `var(--text-main)`.
7. **Mobile-first:** Keep SVG width ≤ 500px. Use `viewBox` + `width="100%"` for responsiveness.

### What NOT to change
- Chapters 1, 2, 3, 5, 6 (General Physics, Thermal, Waves, Nuclear) — these are fine
- The `digitizedText` content — it's accurate and well-structured
- The quiz questions — they're properly formatted MCQs now

---

## File Locations
- Notes: `0606-add-math/digitized_notes.js` (283KB, 74 entries)
- Physics: `0625-physics/digitized_notes.js` (336KB, 32 entries)
- CSS: `css/notes-style.css` (updated with dark mode fixes)
- Landing: `index.html`, `notes.html` (unchanged)
