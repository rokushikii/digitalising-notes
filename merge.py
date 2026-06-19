import json
import os

paths = [
    r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\8cf8b829-726e-4949-b821-88c3a617b369\scratch\chunk_1.json",
    r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\d9289b95-801d-4311-af13-ceba8cb14d95\scratch\chunk_2.json",
    r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\4bb7b2a2-4e29-46ef-bbd3-5971ba060aea\scratch\chunk_3.json",
    r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\9c261e91-8b3b-4023-be89-1dce717e88d5\scratch\chunk_4.json",
    r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\e1b0b185-c9f7-44ff-8aac-daa6c0bdb528\scratch\chunk_5.json"
]

all_notes = []

for p in paths:
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if isinstance(data, list):
                all_notes.extend(data)
            else:
                all_notes.append(data)
    else:
        print(f"MISSING FILE: {p}")

output_path = r"C:\Users\Saifudin Sajadi\Documents\GitHub\digitalising-notes\0580-ext-math\digitized_notes.js"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write("window.subjectNotes = ")
    json.dump(all_notes, f, indent=2, ensure_ascii=False)
    f.write(";")
    
print("Successfully merged all chunks into digitized_notes.js!")
