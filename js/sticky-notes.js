// sticky-notes.js

document.addEventListener("DOMContentLoaded", () => {
    const workspace = document.getElementById('workspace');
    const stickyLayer = document.getElementById('sticky-note-layer');
    let activeSticky = null;
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    // Load stickies on page load
    loadStickies();

    // Double click to create sticky note
    workspace.addEventListener('dblclick', (e) => {
        // Prevent creating a sticky if double clicking on an existing sticky
        if (e.target.closest('.sticky-note')) return;

        // Calculate absolute position within the scrollable workspace
        const rect = stickyLayer.getBoundingClientRect();
        const x = e.clientX - rect.left + workspace.scrollLeft;
        const y = e.clientY - rect.top + workspace.scrollTop;
        
        createStickyNote(x, y, '', 'yellow', Date.now().toString());
    });

    function createStickyNote(x, y, content, color, id) {
        const note = document.createElement('div');
        note.className = `sticky-note note-${color}`;
        note.dataset.id = id;
        note.dataset.color = color;
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;

        note.innerHTML = `
            <div class="sticky-note-header">
                <button class="sticky-close" title="Delete Note">✖</button>
            </div>
            <textarea class="sticky-textarea" placeholder="Type your note here...">${content}</textarea>
        `;

        stickyLayer.appendChild(note);
        saveStickies();

        const textarea = note.querySelector('.sticky-textarea');
        const closeBtn = note.querySelector('.sticky-close');

        // Auto-save on type
        textarea.addEventListener('input', () => saveStickies());

        // Delete note
        closeBtn.addEventListener('click', () => {
            note.remove();
            saveStickies();
        });

        // Dragging Logic
        note.addEventListener('mousedown', (e) => {
            if (e.target === textarea || e.target === closeBtn) return; // Don't drag if clicking textarea
            isDragging = true;
            activeSticky = note;
            
            const rect = note.getBoundingClientRect();
            // Calculate offset relative to the note's top-left
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            
            // Bring to front
            stickyLayer.appendChild(note); 
        });
    }

    // Global Mouse Handlers for Dragging
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !activeSticky) return;
        
        const rect = stickyLayer.getBoundingClientRect();
        // Calculate new position considering workspace scroll
        let newX = e.clientX - rect.left - dragOffsetX + workspace.scrollLeft;
        let newY = e.clientY - rect.top - dragOffsetY + workspace.scrollTop;

        // Simple boundary check
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;

        activeSticky.style.left = `${newX}px`;
        activeSticky.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            activeSticky = null;
            saveStickies();
        }
    });

    // Right click for color picker context menu
    document.addEventListener('contextmenu', (e) => {
        const note = e.target.closest('.sticky-note');
        if (!note) return;
        e.preventDefault();

        // Remove old picker if exists
        const oldPicker = document.querySelector('.color-picker-menu');
        if (oldPicker) oldPicker.remove();

        const picker = document.createElement('div');
        picker.className = 'color-picker-menu';
        picker.style.left = `${e.clientX}px`;
        picker.style.top = `${e.clientY}px`;

        const colors = ['yellow', 'blue', 'pink', 'green'];
        colors.forEach(c => {
            const dot = document.createElement('div');
            dot.className = `color-dot dot-${c}`;
            dot.onclick = () => {
                note.className = `sticky-note note-${c}`;
                note.dataset.color = c;
                picker.remove();
                saveStickies();
            };
            picker.appendChild(dot);
        });

        document.body.appendChild(picker);

        // Close picker if clicking elsewhere
        setTimeout(() => {
            document.addEventListener('click', function closePicker() {
                picker.remove();
                document.removeEventListener('click', closePicker);
            });
        }, 0);
    });

    // Save and Load
    function getSubjectCode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('subject') || '0580-ext-math';
    }

    function saveStickies() {
        const stickies = [];
        document.querySelectorAll('.sticky-note').forEach(note => {
            stickies.push({
                id: note.dataset.id,
                x: parseInt(note.style.left),
                y: parseInt(note.style.top),
                color: note.dataset.color,
                content: note.querySelector('.sticky-textarea').value
            });
        });
        
        const storageKey = `lms_stickies_${getSubjectCode()}`;
        localStorage.setItem(storageKey, JSON.stringify(stickies));
    }

    function loadStickies() {
        const storageKey = `lms_stickies_${getSubjectCode()}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            const stickies = JSON.parse(saved);
            stickies.forEach(s => {
                createStickyNote(s.x, s.y, s.content, s.color, s.id);
            });
        }
    }
});
