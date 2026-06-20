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

    function createStickyNote(x, y, content, color, id, drawingData = null) {
        const note = document.createElement('div');
        note.className = `sticky-note note-${color}`;
        note.dataset.id = id;
        note.dataset.color = color;
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;

        note.innerHTML = `
            <div class="sticky-note-header" style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; margin-bottom: 4px;">
                <button class="sticky-mode" title="Switch to Draw/Write Mode" style="background: none; border: none; font-size: 14px; cursor: pointer; opacity: 0.6; padding: 2px;">🖊️</button>
                <button class="sticky-clear" title="Clear Drawing" style="background: none; border: none; font-size: 14px; cursor: pointer; opacity: 0.6; padding: 2px; display: none;">🧹</button>
                <button class="sticky-close" title="Delete Note" style="background: none; border: none; font-size: 14px; cursor: pointer; opacity: 0.6; padding: 2px;">✖</button>
            </div>
            <div class="sticky-body-container" style="position: relative; flex: 1; display: flex; flex-direction: column; min-height: 80px;">
                <textarea class="sticky-textarea" placeholder="Type your note here..." style="width: 100%; flex: 1; z-index: 1; background: transparent; border: none; resize: none; font-family: inherit; font-size: 14px; line-height: 1.5; color: inherit; outline: none; pointer-events: auto;">${content}</textarea>
                <canvas class="sticky-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;"></canvas>
            </div>
        `;

        stickyLayer.appendChild(note);

        const textarea = note.querySelector('.sticky-textarea');
        const canvas = note.querySelector('.sticky-canvas');
        const modeBtn = note.querySelector('.sticky-mode');
        const clearBtn = note.querySelector('.sticky-clear');
        const closeBtn = note.querySelector('.sticky-close');

        let isDrawing = false;
        let ctx = canvas.getContext('2d');
        let mode = 'type'; // 'type' or 'draw'

        // Set canvas resolution to match its layout dimensions after rendering
        setTimeout(() => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width || 196;
            canvas.height = rect.height || 80;
            
            // Load existing drawing if available
            if (drawingData) {
                const img = new Image();
                img.src = drawingData;
                img.onload = () => {
                    ctx.drawImage(img, 0, 0);
                };
            }
        }, 50);

        // Drawing Helper Functions
        function getPos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: (e.clientX - rect.left) * (canvas.width / rect.width),
                y: (e.clientY - rect.top) * (canvas.height / rect.height)
            };
        }

        function startDrawing(e) {
            if (mode !== 'draw') return;
            isDrawing = true;
            ctx.beginPath();
            const pos = getPos(e);
            ctx.moveTo(pos.x, pos.y);
        }

        function draw(e) {
            if (!isDrawing || mode !== 'draw') return;
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            
            // Use note text color for contrast
            ctx.strokeStyle = window.getComputedStyle(note).color || '#1e293b';
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }

        function stopDrawing() {
            if (isDrawing) {
                isDrawing = false;
                saveStickies();
            }
        }

        // Mouse Drawing Listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // Touch Drawing Listeners (iPad/Tablet support)
        canvas.addEventListener('touchstart', (e) => {
            if (mode !== 'draw') return;
            e.preventDefault(); // Stop scrolling while drawing
            const touch = e.touches[0];
            startDrawing(touch);
        });
        canvas.addEventListener('touchmove', (e) => {
            if (mode !== 'draw') return;
            e.preventDefault();
            const touch = e.touches[0];
            draw(touch);
        });
        canvas.addEventListener('touchend', stopDrawing);

        // Toggle Drawing vs Typing Mode
        modeBtn.addEventListener('click', () => {
            if (mode === 'type') {
                mode = 'draw';
                modeBtn.innerText = '⌨️';
                modeBtn.title = 'Switch to Type Mode';
                clearBtn.style.display = 'inline-block';
                canvas.style.pointerEvents = 'auto';
                canvas.style.zIndex = '2';
                textarea.style.pointerEvents = 'none';
            } else {
                mode = 'type';
                modeBtn.innerText = '🖊️';
                modeBtn.title = 'Switch to Draw Mode';
                clearBtn.style.display = 'none';
                canvas.style.pointerEvents = 'none';
                canvas.style.zIndex = '0';
                textarea.style.pointerEvents = 'auto';
            }
        });

        // Clear Drawing
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveStickies();
        });

        // Auto-save text on type
        textarea.addEventListener('input', () => saveStickies());

        // Delete note
        closeBtn.addEventListener('click', () => {
            note.remove();
            saveStickies();
        });

        // Mouse Dragging Logic
        note.addEventListener('mousedown', (e) => {
            // Ignore dragging if interacting with controls or drawing canvas
            if (e.target === textarea || e.target === canvas || e.target === closeBtn || e.target === modeBtn || e.target === clearBtn) return;
            
            isDragging = true;
            activeSticky = note;
            
            const rect = note.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            
            // Bring to front
            stickyLayer.appendChild(note); 
        });

        // Touch Dragging Logic (iPad/Tablet support)
        note.addEventListener('touchstart', (e) => {
            if (e.target === textarea || e.target === canvas || e.target === closeBtn || e.target === modeBtn || e.target === clearBtn) return;
            
            isDragging = true;
            activeSticky = note;
            
            const touch = e.touches[0];
            const rect = note.getBoundingClientRect();
            dragOffsetX = touch.clientX - rect.left;
            dragOffsetY = touch.clientY - rect.top;
            
            stickyLayer.appendChild(note);
        });

        saveStickies();
    }

    // Global Move Handlers for Dragging
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !activeSticky) return;
        
        const rect = stickyLayer.getBoundingClientRect();
        let newX = e.clientX - rect.left - dragOffsetX + workspace.scrollLeft;
        let newY = e.clientY - rect.top - dragOffsetY + workspace.scrollTop;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;

        activeSticky.style.left = `${newX}px`;
        activeSticky.style.top = `${newY}px`;
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging || !activeSticky) return;
        e.preventDefault(); // Stop screen scrolling while dragging a note
        
        const touch = e.touches[0];
        const rect = stickyLayer.getBoundingClientRect();
        let newX = touch.clientX - rect.left - dragOffsetX + workspace.scrollLeft;
        let newY = touch.clientY - rect.top - dragOffsetY + workspace.scrollTop;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;

        activeSticky.style.left = `${newX}px`;
        activeSticky.style.top = `${newY}px`;
    }, { passive: false });

    // Global Drag End Handlers
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            activeSticky = null;
            saveStickies();
        }
    });

    document.addEventListener('touchend', () => {
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

    // Save and Load from LocalStorage
    function getSubjectCode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('subject') || '0580-ext-math';
    }

    function saveStickies() {
        const stickies = [];
        document.querySelectorAll('.sticky-note').forEach(note => {
            const canvas = note.querySelector('.sticky-canvas');
            stickies.push({
                id: note.dataset.id,
                x: parseInt(note.style.left),
                y: parseInt(note.style.top),
                color: note.dataset.color,
                content: note.querySelector('.sticky-textarea').value,
                drawing: canvas ? canvas.toDataURL() : null
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
                createStickyNote(s.x, s.y, s.content, s.color, s.id, s.drawing);
            });
        }
    }
});
