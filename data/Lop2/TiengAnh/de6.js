/**
 * ĐỀ ÔN TẬP HỌC KỲ 1 TIẾNG ANH LỚP 2 - ĐỀ SỐ 6
 * Nội dung chính: Tổng hợp từ vựng về Trường lớp, Gia đình, Số đếm và Màu sắc.
 * Cấu trúc: 25 câu trắc nghiệm (có hình ảnh và bài tập nâng cao).
 */

export const data = [
  // --- PHẦN 1: TỪ VỰNG & NGỮ ÂM (CÂU 1 - 10) ---
  {
    q: "Câu 1. Look at the picture and choose the correct word. (Nhìn tranh và chọn từ đúng)",
    img: "./data/Lop2/TiengAnh/images/de6_q1.png", // Hình ảnh: Một chiếc bút chì (Pencil)
    opts: [
      "A. Pen",
      "B. Pencil",
      "C. Ruler",
      "D. Book"
    ],
    a: "B. Pencil",
    e: "Trong hình là chiếc bút chì. Tiếng Anh là 'Pencil'. Các đáp án khác: Pen (bút mực), Ruler (thước kẻ), Book (sách)."
  },
  {
    q: "Câu 2. What color is it?",
    img: "./data/Lop2/TiengAnh/images/de6_q2.png", // Hình ảnh: Một giọt mực hoặc đồ vật màu VÀNG (Yellow)
    opts: [
      "A. Red",
      "B. Blue",
      "C. Yellow",
      "D. Green"
    ],
    a: "C. Yellow",
    e: "Hình ảnh có màu vàng. Tiếng Anh màu vàng là 'Yellow'."
  },
  {
    q: "Câu 3. Choose the missing letter:  F__ther",
    opts: [
      "A. a",
      "B. e",
      "C. i",
      "D. o"
    ],
    a: "A. a",
    e: "Từ đúng là 'Father' (Bố/Cha). Chữ cái còn thiếu là 'a'."
  },
  {
    q: "Câu 4. Choose the odd one out.",
    opts: [
      "A. One",
      "B. Two",
      "C. Three",
      "D. Hello"
    ],
    a: "D. Hello",
    e: "Đáp án D là lời chào. Các đáp án A, B, C đều là số đếm (1, 2, 3)."
  },
  {
    q: "Câu 5. Look and choose.",
    img: "./data/Lop2/TiengAnh/images/de6_q5.png", // Hình ảnh: Một cái tai (Ear)
    opts: [
      "A. Eye",
      "B. Ear",
      "C. Nose",
      "D. Mouth"
    ],
    a: "B. Ear",
    e: "Hình ảnh chỉ cái tai. Tiếng Anh là 'Ear'."
  },
  {
    q: "Câu 6. Which number is it? ---8---",
    opts: [
      "A. Six",
      "B. Seven",
      "C. Eight",
      "D. Nine"
    ],
    a: "C. Eight",
    e: "Số 8 trong tiếng Anh viết là 'Eight'."
  },
  {
    q: "Câu 7. Find the word starting with letter 'B'. (Tìm từ bắt đầu bằng chữ B)",
    opts: [
      "A. Apple",
      "B. Cat",
      "C. Ball",
      "D. Dog"
    ],
    a: "C. Ball",
    e: "'Ball' (Quả bóng) bắt đầu bằng chữ cái B. Apple (A), Cat (C), Dog (D)."
  },
  {
    q: "Câu 8. Choose the correct translation: 'Bàn tay'",
    opts: [
      "A. Hand",
      "B. Head",
      "C. Leg",
      "D. Arm"
    ],
    a: "A. Hand",
    e: "'Bàn tay' trong tiếng Anh là 'Hand'. Head (Đầu), Leg (Chân), Arm (Cánh tay)."
  },
  {
    q: "Câu 9. Complete the word:  T_ach_r",
    opts: [
      "A. e / a",
      "B. e / e",
      "C. a / e",
      "D. i / e"
    ],
    a: "B. e / e",
    e: "Từ đúng là 'Teacher' (Giáo viên). Hai chữ cái còn thiếu đều là 'e'."
  },
  {
    q: "Câu 10. What is this? - It's a _______.",
    opts: [
      "A. bag school",
      "B. school bag",
      "C. bag of school",
      "D. schools bag"
    ],
    a: "B. school bag",
    e: "Cụm từ đúng để chỉ cặp sách là 'school bag'. Tính từ/danh từ bổ nghĩa 'school' đứng trước danh từ chính 'bag'."
  },

  // --- PHẦN 2: NGỮ PHÁP & MẪU CÂU (CÂU 11 - 20) ---
  {
    q: "Câu 11. A: Hello, I am Ben. - B: _______, Ben.",
    opts: [
      "A. Goodbye",
      "B. Hi",
      "C. Night",
      "D. See you"
    ],
    a: "B. Hi",
    e: "Khi người A chào 'Hello', người B đáp lại thân thiện bằng 'Hi' hoặc 'Hello'."
  },
  {
    q: "Câu 12. _______ is that? - That is my brother.",
    opts: [
      "A. What",
      "B. Who",
      "C. How",
      "D. Where"
    ],
    a: "B. Who",
    e: "Câu trả lời chỉ người (my brother), nên câu hỏi phải dùng 'Who' (Ai)."
  },
  {
    q: "Câu 13. Is this your pen? - _______, it is.",
    opts: [
      "A. No",
      "B. Yes",
      "C. Not",
      "D. Yeah"
    ],
    a: "B. Yes",
    e: "Câu trả lời khẳng định 'it is' đi kèm với 'Yes'. (Yes, it is)."
  },
  {
    q: "Câu 14. How are you? - I'm _______, thank you.",
    opts: [
      "A. five",
      "B. fine",
      "C. nice",
      "D. name"
    ],
    a: "B. fine",
    e: "Cấu trúc hỏi thăm sức khỏe: 'I'm fine, thank you.' (Tôi khỏe, cảm ơn)."
  },
  {
    q: "Câu 15. Touch your _______.",
    opts: [
      "A. hair",
      "B. book",
      "C. pen",
      "D. ruler"
    ],
    a: "A. hair",
    e: "Cấu trúc 'Touch your...' thường dùng cho bộ phận cơ thể. 'Hair' (Tóc) là đáp án phù hợp nhất trong nhóm này."
  },
  {
    q: "Câu 16. What's _______ name? - My name's Mary.",
    opts: [
      "A. you",
      "B. your",
      "C. she",
      "D. he"
    ],
    a: "B. your",
    e: "Câu hỏi tên bạn là gì: 'What's your name?'."
  },
  {
    q: "Câu 17. Nice to _______ you.",
    opts: [
      "A. meet",
      "B. met",
      "C. meat",
      "D. meeting"
    ],
    a: "A. meet",
    e: "Cụm từ chào hỏi: 'Nice to meet you' (Rất vui được gặp bạn)."
  },
  {
    q: "Câu 18. This is my _______. She is beautiful.",
    opts: [
      "A. brother",
      "B. father",
      "C. grandpa",
      "D. mother"
    ],
    a: "D. mother",
    e: "Câu sau dùng 'She' (Cô ấy/Bà ấy) nên từ cần điền phải chỉ nữ giới. 'Mother' (Mẹ) là đáp án đúng."
  },
  {
    q: "Câu 19. Open your _______, please.",
    opts: [
      "A. board",
      "B. book",
      "C. pen",
      "D. nose"
    ],
    a: "B. book",
    e: "Mệnh lệnh lớp học phổ biến: 'Open your book' (Mở sách ra)."
  },
  {
    q: "Câu 20. I have two _______.",
    opts: [
      "A. eye",
      "B. eyes",
      "C. nose",
      "D. head"
    ],
    a: "B. eyes",
    e: "Số lượng là 2 (two) nên danh từ phải ở số nhiều (có 's'). 'Eyes' là đôi mắt."
  },

  // --- PHẦN 3: NÂNG CAO (CÂU 21 - 25) ---
  {
    q: "Câu 21. Reorder the words: name / ? / is / your / What",
    opts: [
      "A. What name is your?",
      "B. What is your name?",
      "C. Your name is What?",
      "D. What your is name?"
    ],
    a: "B. What is your name?",
    e: "Câu hỏi tên đúng trật tự ngữ pháp là: 'What is your name?'."
  },
  {
    q: "Câu 22. Choose the correct sentence. (Chọn câu đúng)",
    opts: [
      "A. This is an eraser.",
      "B. This is a eraser.",
      "C. This an eraser is.",
      "D. Is this an eraser."
    ],
    a: "A. This is an eraser.",
    e: "'Eraser' bắt đầu bằng nguyên âm 'e' nên phải dùng mạo từ 'an'. Câu A đúng ngữ pháp."
  },
  {
    q: "Câu 23. Logic: One hand has 5 fingers. Two hands have _______ fingers.",
    opts: [
      "A. five",
      "B. eight",
      "C. nine",
      "D. ten"
    ],
    a: "D. ten",
    e: "Toán đố logic: Một bàn tay có 5 ngón, hai bàn tay có 10 ngón. Số 10 tiếng Anh là 'ten'."
  },
  {
    q: "Câu 24. Find the mistake: 'How old is you?'",
    opts: [
      "A. How",
      "B. old",
      "C. is",
      "D. you"
    ],
    a: "C. is",
    e: "Chủ ngữ là 'you' thì động từ tobe phải là 'are'. Câu đúng: 'How old are you?'. Lỗi sai ở 'is'."
  },
  {
    q: "Câu 25. A: Is that your sister? - B: No, it isn't. It's my _______.",
    opts: [
      "A. brother",
      "B. friend (girl)",
      "C. father",
      "D. grandpa"
    ],
    a: "B. friend (girl)",
    e: "Câu hỏi dùng 'sister' (nữ). Câu trả lời phủ định 'No', nhưng vế sau giải thích 'It's my...' thường để đính chính về một người khác cùng giới tính hoặc vai trò tương đương trong ngữ cảnh tranh (nếu có). Ở đây đáp án 'friend (girl)' (bạn nữ) là hợp lý nhất để thay thế cho danh từ chỉ nữ 'sister' trong ngữ cảnh nhận diện người."
  }
];