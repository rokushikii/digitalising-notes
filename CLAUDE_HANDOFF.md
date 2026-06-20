# Project Handoff: Digitalised Notes LMS

This document summarizes the architecture, features, and fixes implemented in the digitalised notes project to bring the next developer (Claude) up to speed.

## 1. Repository Architecture
The project relies on two repositories to manage development and production:
- **`digitalising-notes` (DEV):** The source repository where all data processing, styling, and JS logic changes are made.
- **`students-LMS` (LIVE):** The deployment repository hosted on GitHub Pages. 
*Important workflow note:* Any changes made in the DEV repository (`0580-ext-math`, `0606-add-math`, `0625-physics`, `js/`, `css/`, `notes.html`) must be copied over to the `notes/` directory in the `students-LMS` repository to be deployed to the live site.

## 2. Dynamic Content Loading
The application does not use a bundler or backend. It loads data dynamically:
- `notes.html` reads the `subject` query parameter (e.g. `?subject=0606-add-math`).
- `js/syllabus.js` maps subjects to their specific syllabus structure.
- `notes-app.js` dynamically fetches the subject's `digitized_notes.js` file, appending a `?v=timestamp` query string to bypass strict browser caching.
- Data is stored globally in `window.subjectNotes`, an array of objects containing `subtopicId`, `digitizedText`, and optionally a `quizzes` array.

## 3. Markdown and Mathematics Pipeline
The core rendering logic lives in `js/notes-app.js`, which processes the `digitizedText` string.
- **Markdown (marked.js):** Parses the text into HTML.
- **Math (KaTeX):** Mathematical formulas (e.g., `$x^2$` or `$$f(x)$$`) are protected from markdown mangling by replacing them with `@@MATHBLOCK@@` placeholders before parsing, and restoring them afterwards. `renderMathInElement` then renders the formulas.
- **GitHub Alerts:** Custom regex intercepts GitHub-style alerts (`> [!NOTE]`, `> [!WARNING]`) and wraps them in custom styled HTML `div`s.
- **Mermaid:** Code blocks tagged with `mermaid` are extracted and passed to the Mermaid.js engine.

## 4. Subject Implementations and Edge Cases
- **0625 Physics:** Features embedded SVGs for circuit diagrams. Previously these broke if indented by 4 spaces (markdown treated them as code blocks). We stripped the whitespace and upgraded the SVGs using regex to match the "Save My Exams" style (crisp navy-blue strokes `#1e293b`, `stroke-width: 2`, and `<tspan>` for subscripts like $V_T$).
- **0606 Add Math:** Completely populated with 74 topics. The required structure is strictly **Notes > Examples > Quiz**. Because Add Math shouldn't use Multiple Choice Questions (MCQs), the examples were duplicated into the `quizzes` array.
- **0580 Ext Math:** Initial setup complete with ~12 notes.

## 5. Interactive Quizzes UI
The `createQuizElement` function in `notes-app.js` supports two quiz types:
- **Multiple Choice:** Rendered as A/B/C/D buttons. It evaluates the user's choice against `quizData.correctIndex` or fuzzy-matches `quizData.answer`.
- **Structured Questions (No MCQs):** When `quizData.options` is missing or empty (as in Add Math), it renders a single **"💡 Show Solution"** button. The explanation block (`.quiz-explanation`) is hidden via CSS (`display: none`) until the user clicks the button. 
- State is preserved locally using `localStorage.setItem('quiz_v2_{id}', 'correct')`.

## 6. Sticky Notes with Canvas Drawing (iPad Support)
Implemented in `js/sticky-notes.js` and `css/notes-style.css`.
- **Creation:** Users double-click the background workspace to spawn a sticky note.
- **Drawing Mode:** The sticky notes contain both a `textarea` for typing and a layered HTML `<canvas>` overlay. A mode button toggles pointer events between the two, allowing users to draw with an iPad stylus directly on the note.
- **Resizing:** Sticky notes are resizable via CSS (`resize: both; overflow: hidden;`). A `ResizeObserver` detects dimension changes, writes the active drawing to an off-screen buffer, resizes the `<canvas>`, and redraws the buffer so pen strokes aren't lost on resize.
