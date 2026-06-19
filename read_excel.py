import pandas as pd
import json

df_dict = pd.read_excel('2026 Subject Checklist High School (1).xlsx', sheet_name=None)
print("SHEET NAMES:")
for name in df_dict.keys():
    print(f"- {name}")

# Try to find math sheet
math_sheet = None
for name in df_dict.keys():
    if '0580' in name or 'Math' in name:
        math_sheet = name
        break

if math_sheet:
    print(f"\nHEAD OF SHEET '{math_sheet}':")
    print(df_dict[math_sheet].head(20).to_string())
