// notes-app.js

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectCode = urlParams.get('subject') || '0580-ext-math'; // default to ext-math
    
    // Update header
    const subjectNameMap = {
        '0580-ext-math': 'IGCSE 0580 Extended Mathematics',
        '0606-add-math': 'IGCSE 0606 Additional Mathematics',
        '0625-physics': 'IGCSE 0625 Physics'
    };
    document.getElementById('active-subject-name').innerText = subjectNameMap[subjectCode] || subjectCode;

    // Load Syllabus config
    let currentSyllabus = [];
    if (window.syllabusConfig && window.syllabusConfig[subjectCode]) {
        currentSyllabus = window.syllabusConfig[subjectCode];
    } else {
        showError("No syllabus configuration found for this subject.");
        return;
    }

    // Dynamically load the digitized notes data
    const script = document.createElement('script');
    script.src = `${subjectCode}/digitized_notes.js?v=${new Date().getTime()}`;
    script.onload = () => {
        if (window.subjectNotes && window.subjectNotes.length > 0) {
            initApp(currentSyllabus, window.subjectNotes);
        } else {
            showError("No digitized notes found for this subject yet.");
        }
    };
    script.onerror = () => {
        showError("Failed to load notes data. Have they been digitized yet?");
    };
    document.head.appendChild(script);

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('lms_theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.innerText = currentTheme === 'dark' ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('lms_theme', newTheme);
        themeBtn.innerText = newTheme === 'dark' ? '☀️' : '🌙';
    });
    
    // Initialize Mermaid globally
    if (window.mermaid) {
        mermaid.initialize({ startOnLoad: false, theme: currentTheme === 'dark' ? 'dark' : 'default' });
    }
});

function showError(msg) {
    document.getElementById('lessons-list').innerHTML = `<div style="padding: 16px; color: #ef4444;">${msg}</div>`;
}

function initApp(syllabusData, notesData) {
    const lessonsList = document.getElementById('lessons-list');
    const searchInput = document.getElementById('search-input');
    
    // Create a fast lookup map for notes by subtopic id
    const notesMap = {};
    notesData.forEach(note => {
        notesMap[note.subtopicId] = note;
    });

    function renderSidebar(query = "") {
        lessonsList.innerHTML = "";
        
        syllabusData.forEach((chapterData, chapIdx) => {
            // Filter subtopics based on query
            const filteredSubtopics = chapterData.subtopics.filter(st => 
                st.title.toLowerCase().includes(query.toLowerCase()) || 
                st.id.includes(query)
            );

            // If no subtopics match and the chapter title doesn't match either, skip
            if (filteredSubtopics.length === 0 && !chapterData.chapter.toLowerCase().includes(query.toLowerCase())) {
                return;
            }
            
            // Subtopics to actually render (if chapter matched, show all, otherwise show filtered)
            const subtopicsToRender = chapterData.chapter.toLowerCase().includes(query.toLowerCase()) ? chapterData.subtopics : filteredSubtopics;

            // Build Accordion
            const chapterContainer = document.createElement('div');
            chapterContainer.className = 'accordion-chapter';

            const header = document.createElement('div');
            header.className = 'accordion-header';
            
            const hasMatches = subtopicsToRender.some(st => notesMap[st.id]);
            // Expand automatically if there is a search query
            if (query !== "") header.classList.add('active');

            header.innerHTML = `
                <span>${chapterData.chapter}</span>
                <span class="accordion-icon">▼</span>
            `;

            const contentWrap = document.createElement('div');
            contentWrap.className = 'accordion-content';
            if (query !== "") contentWrap.style.maxHeight = '1000px';

            header.onclick = () => {
                header.classList.toggle('active');
                if (header.classList.contains('active')) {
                    contentWrap.style.maxHeight = contentWrap.scrollHeight + "px";
                } else {
                    contentWrap.style.maxHeight = null;
                }
            };

            subtopicsToRender.forEach(st => {
                const item = document.createElement('div');
                item.className = 'lesson-item';
                
                // Indicate if note is available
                const isAvailable = !!notesMap[st.id];
                item.innerHTML = `<span style="opacity: ${isAvailable ? 1 : 0.4}">${st.id} ${st.title} ${isAvailable ? '' : '(Pending)'}</span>`;
                
                if (isAvailable) {
                    item.onclick = () => loadNote(st.id, notesMap[st.id], item);
                }
                
                contentWrap.appendChild(item);
            });

            chapterContainer.appendChild(header);
            chapterContainer.appendChild(contentWrap);
            lessonsList.appendChild(chapterContainer);
        });
    }

    searchInput.addEventListener('input', (e) => renderSidebar(e.target.value));
    renderSidebar();
}

function loadNote(subtopicId, noteData, element) {
    // Highlight sidebar active
    document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    const contentDiv = document.getElementById('notes-content');
    
    // Parse Markdown
    let htmlContent = marked.parse(noteData.digitizedText);
    
    // Replace mermaid code blocks with div class="mermaid" for rendering
    // marked.js converts ```mermaid to <pre><code class="language-mermaid">
    // We need to transform it for Mermaid.js
    htmlContent = htmlContent.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g, '<div class="mermaid">$1</div>');

    contentDiv.innerHTML = htmlContent;

    // Append Quizzes if they exist
    if (noteData.quizzes && noteData.quizzes.length > 0) {
        const quizDetails = document.createElement('details');
        quizDetails.className = 'quiz-details-section';
        const quizSummary = document.createElement('summary');
        quizSummary.innerHTML = `<strong>📝 Test Your Knowledge (${noteData.quizzes.length} Questions)</strong>`;
        quizSummary.style.cursor = 'pointer';
        quizSummary.style.fontSize = '1.2rem';
        quizSummary.style.margin = '20px 0';
        quizDetails.appendChild(quizSummary);
        
        noteData.quizzes.forEach((quiz, index) => {
            quizDetails.appendChild(createQuizElement(quiz, noteData.id + "_q" + index));
        });
        contentDiv.appendChild(quizDetails);
    }

    // Render Math Equations using KaTeX Auto-Render
    renderMathInElement(contentDiv, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "\\[", right: "\\]", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false}
        ],
        throwOnError: false
    });

    // Render Mermaid diagrams
    if (window.mermaid) {
        mermaid.run({
            querySelector: '.mermaid'
        });
    }
    
    // Smooth scroll to top
    document.getElementById('workspace').scrollTo(0,0);
}

function createQuizElement(quizData, quizId) {
    const container = document.createElement('div');
    container.className = 'quiz-container';
    
    const question = document.createElement('div');
    question.className = 'quiz-question';
    question.innerHTML = marked.parse(quizData.question); // allow math/formatting in question
    container.appendChild(question);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';
    
    const explanation = document.createElement('div');
    explanation.className = 'quiz-explanation';
    explanation.innerHTML = `<strong>Explanation:</strong> ${marked.parseInline(quizData.explanation)}`;

    // Check if previously answered correctly from localStorage
    const savedState = localStorage.getItem(`quiz_v2_${quizId}`);
    let answered = savedState === 'correct';

    if (quizData.options && quizData.options.length > 0) {
        quizData.options.forEach((optText, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            // Parse inline to allow math formulas in options
            btn.innerHTML = `<strong>${String.fromCharCode(65 + i)})</strong>&nbsp;&nbsp;${marked.parseInline(optText)}`;
            
            if (answered && i === quizData.correctIndex) {
                btn.classList.add('correct');
                explanation.style.display = 'block';
            }

            btn.onclick = () => {
                if (answered) return; // prevent changing answer after correct
                
                if (i === quizData.correctIndex) {
                    btn.classList.add('correct');
                    explanation.style.display = 'block';
                    answered = true;
                    localStorage.setItem(`quiz_v2_${quizId}`, 'correct');
                } else {
                    btn.classList.add('wrong');
                    // Optional: remove wrong class after animation
                    setTimeout(() => btn.classList.remove('wrong'), 1000);
                }
            };
            optionsContainer.appendChild(btn);
        });
    } else {
        // Structured Question without Options
        const showSolBtn = document.createElement('button');
        showSolBtn.className = 'quiz-option';
        showSolBtn.innerHTML = `<strong>💡 Show Solution</strong>`;
        showSolBtn.style.justifyContent = 'center';
        showSolBtn.style.backgroundColor = '#f1f5f9';
        
        if (answered) {
            showSolBtn.classList.add('correct');
            explanation.style.display = 'block';
        }

        showSolBtn.onclick = () => {
            showSolBtn.classList.add('correct');
            explanation.style.display = 'block';
            localStorage.setItem(`quiz_v2_${quizId}`, 'correct');
        };
        optionsContainer.appendChild(showSolBtn);
    }

    container.appendChild(optionsContainer);
    container.appendChild(explanation);
    return container;
}
