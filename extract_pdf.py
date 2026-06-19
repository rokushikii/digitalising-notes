import fitz
import os

os.makedirs('0625-physics/images', exist_ok=True)
os.makedirs('0625-physics/chapter_texts', exist_ok=True)

def process_pdf(pdf_path, prefix):
    print(f"Processing {pdf_path}...")
    doc = fitz.open(pdf_path)
    text_content = ""
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text_content += f"\n--- PAGE {page_num+1} ---\n"
        text_content += page.get_text()
        
        # Extract images
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"0625-physics/images/{prefix}_p{page_num+1}_i{img_index}.{image_ext}"
            
            with open(image_filename, "wb") as f:
                f.write(image_bytes)
                
    with open(f"0625-physics/chapter_texts/{prefix}_full_text.txt", "w", encoding="utf-8") as f:
        f.write(text_content)
    
    print(f"Finished {pdf_path}. Extracted text and images.")

process_pdf('0625-physics/Space Physics Simplified.pdf', 'space')
process_pdf('0625-physics/Compressed Physics Notes - Edited.pdf', 'main')
