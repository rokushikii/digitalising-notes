import json

physics_structure = [
    {
        "chapter": "Chapter 1: General Physics",
        "subtopics": [
            { "id": "1.1", "title": "Length and Time" },
            { "id": "1.2", "title": "Motion" },
            { "id": "1.3", "title": "Mass and Weight" },
            { "id": "1.4", "title": "Density" },
            { "id": "1.5", "title": "Forces" },
            { "id": "1.6", "title": "Momentum" },
            { "id": "1.7", "title": "Energy, Work & Power" },
            { "id": "1.8", "title": "Pressure" }
        ]
    },
    {
        "chapter": "Chapter 2: Thermal Physics",
        "subtopics": [
            { "id": "2.1", "title": "Simple Kinetic Molecular Model of Matter" },
            { "id": "2.2", "title": "Thermal Properties and Temperature" },
            { "id": "2.3", "title": "Thermal Process" }
        ]
    },
    {
        "chapter": "Chapter 3: Waves, Light and Sound",
        "subtopics": [
            { "id": "3.1", "title": "Waves" },
            { "id": "3.2", "title": "Light" },
            { "id": "3.3", "title": "Electromagnetic Spectrum" },
            { "id": "3.4", "title": "Sound" }
        ]
    },
    {
        "chapter": "Chapter 4: Electricity and Magnetism",
        "subtopics": [
            { "id": "4.1", "title": "Simple Phenomena of Magnetism" },
            { "id": "4.2", "title": "Electrical Charge" },
            { "id": "4.3", "title": "Electric Circuit" },
            { "id": "4.4", "title": "Digital Electronics" },
            { "id": "4.5", "title": "Dangers of electricity" },
            { "id": "4.6", "title": "Electromagnetic Effect" }
        ]
    },
    {
        "chapter": "Chapter 5: Atomic Physics",
        "subtopics": [
            { "id": "5.1", "title": "The Nuclear Atom" },
            { "id": "5.2", "title": "Radioactivity" }
        ]
    },
    {
        "chapter": "Chapter 6: Space Physics",
        "subtopics": [
            { "id": "6.1", "title": "Earth and The Solar System" },
            { "id": "6.2", "title": "Stars and The Universe" }
        ]
    }
]

phys_json = json.dumps(physics_structure, indent=4)

with open(r'js/syllabus.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the last end of the object
if "    ]\n};" in text:
    text = text.replace("    ]\n};", '    ],\n    "0625-physics": ' + phys_json + '\n};')

with open(r'js/syllabus.js', 'w', encoding='utf-8') as f:
    f.write(text)
