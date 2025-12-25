/**
 * ĐỀ SỐ 1 - TIẾNG ANH LỚP 2
 * Nội dung: Greetings, Colors, Numbers 1-10
 */

export const data = [
  // --- CƠ BẢN (1-20) ---
  {
    q: "Câu 1: Hello, I _____ Mai.",
    opts: ["A. is", "B. am", "C. are", "D. it"],
    a: "B. am",
    e: "Cấu trúc giới thiệu tên: I am + tên (Tôi là...)."
  },
  {
    q: "Câu 2: How _____ you?",
    opts: ["A. is", "B. am", "C. are", "D. it"],
    a: "C. are",
    e: "Câu hỏi thăm sức khỏe: How are you?"
  },
  {
    q: "Câu 3: I'm fine, thank _____.",
    opts: ["A. you", "B. your", "C. he", "D. she"],
    a: "A. you",
    e: "Cụm từ cảm ơn: Thank you."
  },
  {
    q: "Câu 4: What _____ is it? - It's red.",
    img: "./data/Lop2/TiengAnh/images/de3_q4.png",
    opts: ["A. name", "B. color", "C. number", "D. time"],
    a: "B. color",
    e: "Câu hỏi màu sắc: What color is it?"
  },
  {
    q: "Câu 5: Chọn từ đúng với số 5:",
    opts: ["A. Four", "B. Five", "C. Six", "D. Seven"],
    a: "B. Five",
    e: "Five là số 5."
  },
  {
    q: "Câu 6: Look at the picture. What color is the balloon?",
    img: "./data/Lop2/TiengAnh/images/de3_q6.png", // Hình quả bóng bay màu xanh dương
    opts: ["A. Red", "B. Blue", "C. Yellow", "D. Green"],
    a: "B. Blue",
    e: "Trong hình là quả bóng màu xanh dương (Blue)."
  },
  {
    q: "Câu 7: Goodbye. See you _____.",
    opts: ["A. later", "B. hello", "C. nice", "D. meet"],
    a: "A. later",
    e: "Chào tạm biệt: See you later (Hẹn gặp lại sau)."
  },
  {
    q: "Câu 8: one, two, three, _____, five.",
    opts: ["A. six", "B. ten", "C. four", "D. nine"],
    a: "C. four",
    e: "Thứ tự đếm: 1, 2, 3, 4, 5."
  },
  {
    q: "Câu 9: Is it a red car?",
    img: "./data/Lop2/TiengAnh/images/de3_q9.png", // Hình chiếc xe ô tô màu đỏ
    opts: ["A. Yes, it is.", "B. No, it isn't.", "C. Yes, it isn't.", "D. No, it is."],
    a: "A. Yes, it is.",
    e: "Hình là xe đỏ, câu trả lời khẳng định là 'Yes, it is'."
  },
  {
    q: "Câu 10: Sắp xếp chữ cái: G - R - E - E - N",
    opts: ["A. Gren", "B. Green", "C. Geern", "D. Grene"],
    a: "B. Green",
    e: "Green là màu xanh lá cây."
  },
  {
    q: "Câu 11: What is your _____? - My name is Nam.",
    opts: ["A. color", "B. name", "C. hello", "D. number"],
    a: "B. name",
    e: "Hỏi tên: What is your name?"
  },
  {
    q: "Câu 12: Đếm số lượng quả táo trong hình:",
    img: "./data/Lop2/TiengAnh/images/de3_q12.png", // Hình 3 quả táo
    opts: ["A. One", "B. Two", "C. Three", "D. Four"],
    a: "C. Three",
    e: "Có 3 quả táo. Three."
  },
  {
    q: "Câu 13: Yellow + Red = ?",
    opts: ["A. Purple", "B. Green", "C. Orange", "D. Blue"],
    a: "C. Orange",
    e: "Màu vàng pha màu đỏ ra màu cam (Orange)."
  },
  {
    q: "Câu 14: Nice to _____ you.",
    opts: ["A. meet", "B. see", "C. look", "D. hi"],
    a: "A. meet",
    e: "Nice to meet you (Rất vui được gặp bạn)."
  },
  {
    q: "Câu 15: Tìm từ khác loại:",
    opts: ["A. One", "B. Two", "C. Red", "D. Six"],
    a: "C. Red",
    e: "Red là màu sắc, còn lại là số đếm."
  },
  {
    q: "Câu 16: What number is it?",
    img: "./data/Lop2/TiengAnh/images/de3_q16.png", // Hình số 8
    opts: ["A. Seven", "B. Eight", "C. Nine", "D. Ten"],
    a: "B. Eight",
    e: "Hình số 8 là Eight."
  },
  {
    q: "Câu 17: 'Purple' nghĩa là màu gì?",
    opts: ["A. Màu tím", "B. Màu hồng", "C. Màu nâu", "D. Màu đen"],
    a: "A. Màu tím",
    e: "Purple là màu tím."
  },
  {
    q: "Câu 18: Điền từ còn thiếu: S_ven",
    opts: ["A. a", "B. e", "C. i", "D. o"],
    a: "B. e",
    e: "Seven (số 7)."
  },
  {
    q: "Câu 19: This _____ my friend, Lan.",
    opts: ["A. are", "B. am", "C. is", "D. it"],
    a: "C. is",
    e: "This is... (Đây là...)."
  },
  {
    q: "Câu 20: Spell your name, please.",
    opts: ["A. I'm five.", "B. L-A-N", "C. It's red.", "D. Goodbye."],
    a: "B. L-A-N",
    e: "Yêu cầu đánh vần tên, đáp án B đúng."
  },

  // --- NÂNG CAO (21-25) ---
  {
    q: "Câu 21: Calculate (Tính): Two + Three = ?",
    opts: ["A. Four", "B. Five", "C. Six", "D. Seven"],
    a: "B. Five",
    e: "2 + 3 = 5 (Five)."
  },
  {
    q: "Câu 22: Reorder (Sắp xếp): name / is / My / Phong / .",
    opts: ["A. My name Phong is.", "B. Name my is Phong.", "C. My name is Phong.", "D. Phong is name My."],
    a: "C. My name is Phong.",
    e: "Câu đúng: My name is Phong."
  },
  {
    q: "Câu 23: Which word starts with letter 'B'?",
    img: "./data/Lop2/TiengAnh/images/de3_q23.png", // Hình con gấu (Bear) hoặc quả bóng (Ball)
    opts: ["A. Apple", "B. Cat", "C. Ball", "D. Duck"],
    a: "C. Ball",
    e: "Ball (quả bóng) bắt đầu bằng chữ B."
  },
  {
    q: "Câu 24: Read and answer: 'I am a fruit. I am red. What am I?'",
    opts: ["A. A banana", "B. An apple", "C. A lemon", "D. A kiwi"],
    a: "B. An apple",
    e: "Loại quả màu đỏ là quả táo (Apple)."
  },
  {
    q: "Câu 25: Find the mistake (Tìm lỗi sai): 'How old are you? - I am fine.'",
    opts: ["A. How", "B. old", "C. I am fine", "D. you"],
    a: "C. I am fine",
    e: "Hỏi 'How old' (bao nhiêu tuổi) thì phải trả lời tuổi (I am seven), không trả lời sức khỏe (I am fine)."
  }
];