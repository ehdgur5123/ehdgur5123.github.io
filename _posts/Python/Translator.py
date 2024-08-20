from googletrans import Translator
import tkinter as tk
from tkinter import font

def translator(input_text, language):
    translator_instance = Translator()
    output = translator_instance.translate(input_text, src='auto', dest=language)
    output_text = output.text 
    return output_text

def translate():
    language = selected_language.get()
    input_text = input_entry.get("1.0", tk.END)
    translated_text = translator(input_text, language)
    output_entry.delete("1.0", tk.END)
    output_entry.insert(tk.END, translated_text, "spacing")

window = tk.Tk()
window.title("TRANSLATOR")

# 초기 창 크기 설정
window.geometry("400x300+1520+710")

# 창의 행과 열 크기 조정 가능하도록 설정
window.rowconfigure(1, weight=1)
window.columnconfigure(0, weight=1)
window.columnconfigure(1, weight=1)

# 폰트 설정
custom_font = font.Font(family="Helvetica", size=12, weight="bold")

# 입력 레이블과 번역된 텍스트 레이블
input_label = tk.Label(window, text="번역할 텍스트", font=custom_font)
input_label.grid(row=0, column=0, padx=10, pady=5)

output_label = tk.Label(window, text="번역된 텍스트", font=custom_font)
output_label.grid(row=0, column=1, padx=10, pady=5)

# 입력용 프레임과 스크롤바 추가
input_frame = tk.Frame(window)
input_frame.grid(row=1, column=0, padx=10, pady=5, sticky="nsew")

input_scrollbar = tk.Scrollbar(input_frame)
input_scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

# Text 위젯과 간격, 폰트 및 줄 간격 설정
input_entry = tk.Text(input_frame, wrap=tk.WORD, yscrollcommand=input_scrollbar.set, padx=10, pady=10, font=custom_font)
input_entry.pack(expand=True, fill=tk.BOTH)

# 줄 간격 설정 (spacing2는 각 줄 사이 간격)
input_entry.tag_configure("spacing", spacing2=10)

input_scrollbar.config(command=input_entry.yview)

# 출력용 프레임과 스크롤바 추가
output_frame = tk.Frame(window)
output_frame.grid(row=1, column=1, padx=10, pady=5, sticky="nsew")

output_scrollbar = tk.Scrollbar(output_frame)
output_scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

output_entry = tk.Text(output_frame, wrap=tk.WORD, yscrollcommand=output_scrollbar.set, padx=10, pady=10, font=custom_font)
output_entry.pack(expand=True, fill=tk.BOTH)

# 출력용 Text 위젯에 줄 간격 설정
output_entry.tag_configure("spacing", spacing2=10)

output_scrollbar.config(command=output_entry.yview)

# 라디오 버튼 (언어 선택)
selected_language = tk.StringVar(value="ko")

ko_radiobutton = tk.Radiobutton(window, text="한국어로 번역", variable=selected_language, value="ko", font=custom_font)
ko_radiobutton.grid(row=2, column=0, padx=10, pady=5)

en_radiobutton = tk.Radiobutton(window, text="영어로 번역", variable=selected_language, value="en", font=custom_font)
en_radiobutton.grid(row=2, column=1, padx=10, pady=5)

# 번역 버튼
translator_button = tk.Button(window, text="번역하기", command=translate, font=custom_font)
translator_button.grid(row=3, column=0, columnspan=2, pady=10)

window.mainloop()
