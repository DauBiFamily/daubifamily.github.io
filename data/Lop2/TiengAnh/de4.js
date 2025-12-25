/**
 * ĐỀ SỐ 2 - TIẾNG ANH LỚP 2
 * Nội dung: Family members, Feelings (Happy, Sad, etc.)
 */

export const data = [
  // --- CƠ BẢN (1-20) ---
  {
    q: "Câu 1: Who is this? - This is my _____.",
    img: "./data/Lop2/TiengAnh/images/de4_q1.png", // Hình người bố
    opts: ["A. dad", "B. mom", "C. sister", "D. grandma"],
    a: "A. dad",
    e: "Hình ảnh bố là Dad/Father."
  },
  {
    q: "Câu 2: Is this your mom?",
    img: "./data/Lop2/TiengAnh/images/de4_q2.png", // Hình người mẹ
    opts: ["A. Yes, it is.", "B. No, it isn't.", "C. Yes, he is.", "D. No, he isn't."],
    a: "A. Yes, it is.",
    e: "Hình mẹ, trả lời Yes."
  },
  {
    q: "Câu 3: He is my _____ (Anh trai).",
    opts: ["A. sister", "B. brother", "C. mother", "D. father"],
    a: "B. brother",
    e: "Anh/em trai là Brother."
  },
  {
    q: "Câu 4: How are you? - I am _____ (vui vẻ).",
    img: "./data/Lop2/TiengAnh/images/de4_q4.png", // Mặt cười
    opts: ["A. sad", "B. happy", "C. hungry", "D. cold"],
    a: "B. happy",
    e: "Happy là vui vẻ."
  },
  {
    q: "Câu 5: 'Grandpa' nghĩa là gì?",
    opts: ["A. Bà", "B. Ông", "C. Bố", "D. Chú"],
    a: "B. Ông",
    e: "Grandpa là ông."
  },
  {
    q: "Câu 6: She is _____ (buồn).",
    img: "./data/Lop2/TiengAnh/images/de4_q6.png", // Mặt buồn
    opts: ["A. happy", "B. sad", "C. hot", "D. thirsty"],
    a: "B. sad",
    e: "Sad là buồn."
  },
  {
    q: "Câu 7: Is he cold?",
    img: "./data/Lop2/TiengAnh/images/de4_q7.png", // Người đang run cầm cập
    opts: ["A. Yes, he is.", "B. No, he isn't.", "C. Yes, she is.", "D. No, it isn't."],
    a: "A. Yes, he is.",
    e: "Hình ảnh lạnh (cold). Chủ ngữ là He."
  },
  {
    q: "Câu 8: This is my sister. _____ is five.",
    opts: ["A. He", "B. She", "C. It", "D. I"],
    a: "B. She",
    e: "Sister (chị/em gái) là nữ nên dùng She."
  },
  {
    q: "Câu 9: Are they hungry?",
    img: "./data/Lop2/TiengAnh/images/de4_q9.png", // Hình người đang đói/nghĩ về đồ ăn
    opts: ["A. Yes, they are.", "B. No, they aren't.", "C. Yes, we are.", "D. No, he isn't."],
    a: "A. Yes, they are.",
    e: "Hungry là đói bụng."
  },
  {
    q: "Câu 10: Tìm từ khác loại:",
    opts: ["A. Dad", "B. Mom", "C. Sister", "D. Happy"],
    a: "D. Happy",
    e: "Happy là cảm xúc, còn lại là thành viên gia đình."
  },
  {
    q: "Câu 11: Who is she? - She is my _____ (Bà).",
    opts: ["A. grandpa", "B. grandma", "C. dad", "D. brother"],
    a: "B. grandma",
    e: "Bà là Grandma."
  },
  {
    q: "Câu 12: I am _____ (khát nước).",
    opts: ["A. hungry", "B. thirsty", "C. happy", "D. sad"],
    a: "B. thirsty",
    e: "Thirsty là khát nước."
  },
  {
    q: "Câu 13: Look at the photo. They are my _____.",
    img: "./data/Lop2/TiengAnh/images/de4_q13.png", // Hình gia đình đông người
    opts: ["A. family", "B. school", "C. class", "D. friends"],
    a: "A. family",
    e: "Family là gia đình."
  },
  {
    q: "Câu 14: Is she your sister? - No, she _____.",
    opts: ["A. is", "B. isn't", "C. not", "D. are"],
    a: "B. isn't",
    e: "Câu phủ định: No, she isn't."
  },
  {
    q: "Câu 15: baby / a / It's / .",
    opts: ["A. It's a baby.", "B. A baby it's.", "C. Baby a it's.", "D. It's baby a."],
    a: "A. It's a baby.",
    e: "Nó là một em bé."
  },
  {
    q: "Câu 16: He is my father. He is _____ (cao).",
    opts: ["A. short", "B. tall", "C. green", "D. red"],
    a: "B. tall",
    e: "Tall là cao."
  },
  {
    q: "Câu 17: Chọn câu đúng với hình:",
    img: "./data/Lop2/TiengAnh/images/de4_q17.png", // Một cô gái đang khóc
    opts: ["A. She is happy.", "B. She is sad.", "C. She is hot.", "D. She is cold."],
    a: "B. She is sad.",
    e: "Khóc là biểu hiện của buồn (Sad)."
  },
  {
    q: "Câu 18: Từ nào thiếu chữ cái 'o'?",
    opts: ["A. M_ther", "B. F_ther", "C. Sist_r", "D. B_by"],
    a: "A. M_ther",
    e: "Mother (Mẹ) thiếu chữ o."
  },
  {
    q: "Câu 19: Are you hot? - Yes, I _____.",
    opts: ["A. is", "B. are", "C. am", "D. not"],
    a: "C. am",
    e: "Yes, I am."
  },
  {
    q: "Câu 20: This is my uncle.",
    opts: ["A. Đây là dì của tôi.", "B. Đây là chú của tôi.", "C. Đây là bố của tôi.", "D. Đây là bà của tôi."],
    a: "B. Đây là chú của tôi.",
    e: "Uncle là chú/bác trai."
  },

  // --- NÂNG CAO (21-25) ---
  {
    q: "Câu 21: Logic: Dad is to Mom, as Grandpa is to _____?",
    opts: ["A. Sister", "B. Grandma", "C. Brother", "D. Aunt"],
    a: "B. Grandma",
    e: "Cặp tương ứng: Bố - Mẹ, Ông - Bà."
  },
  {
    q: "Câu 22: Unscramble: 'y / p / h / a / p'",
    opts: ["A. phapy", "B. happy", "C. yppah", "D. haypp"],
    a: "B. happy",
    e: "Sắp xếp lại thành từ Happy."
  },
  {
    q: "Câu 23: Read: 'She is my mom's mother.' Who is she?",
    opts: ["A. Sister", "B. Aunt", "C. Grandma", "D. Cousin"],
    a: "C. Grandma",
    e: "Mẹ của mẹ là Bà (Grandma)."
  },
  {
    q: "Câu 24: I'm not sad. I'm not angry. I'm smiling. I am _____.",
    opts: ["A. happy", "B. scared", "C. cold", "D. hot"],
    a: "A. happy",
    e: "Không buồn, không giận, đang cười -> Vui vẻ (Happy)."
  },
  {
    q: "Câu 25: Find the mistake: 'This are my family.'",
    opts: ["A. This", "B. are", "C. my", "D. family"],
    a: "B. are",
    e: "This đi với is. Câu đúng: This is my family."
  }
];