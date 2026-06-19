import json

file_path = r'0580-ext-math\digitized_notes.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read().replace('window.subjectNotes = ', '').strip().rstrip(';')

data = json.loads(text)

for item in data:
    # Fix missing subtopicId
    if not item.get('subtopicId'):
        # If id is like '1.6', that's the subtopicId
        if item.get('id') in ['1.6', '1.7', '1.8', '1.9']:
            item['subtopicId'] = item['id']
            item['id'] = 'c1_' + item['id'].replace('.', '_')
        elif item.get('title') and '1.10' in item.get('title'):
            item['subtopicId'] = '1.10'
        elif item.get('title') and '1.11' in item.get('title'):
            item['subtopicId'] = '1.11'
            
    # Fix incorrect 'notes' to 'digitizedText'
    if 'notes' in item:
        item['digitizedText'] = item.pop('notes')
        
    # Fix incorrect 'questions' to 'quizzes'
    if 'questions' in item:
        item['quizzes'] = item.pop('questions')
        
with open(file_path, 'w', encoding='utf-8') as f:
    f.write("window.subjectNotes = ")
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(";")

print("JSON schema fixed!")
