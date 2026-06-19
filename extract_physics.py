import pandas as pd
import re

df = pd.read_excel('2026 Subject Checklist High School (1).xlsx', sheet_name='Physics (0625) OWS')
items = []

for i, row in df.iterrows():
    for j, cell in enumerate(row):
        cell_str = str(cell).strip()
        if re.match(r'^\d+\.\d+$', cell_str):
            title = str(row.iloc[j+1]).strip()
            if title != 'nan':
                items.append((cell_str, title))

items.sort(key=lambda x: [int(part) for part in x[0].split('.')])

for c, t in items:
    print(f'{c}: {t}')
