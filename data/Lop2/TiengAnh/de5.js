/**
 * ĐỀ SỐ 3 - TIẾNG ANH LỚP 2
 * Nội dung: Body parts (Face, Arms, Legs, etc.)
 */

export const data = [
  // --- CƠ BẢN (1-20) ---
  {
    q: "Câu 1: What is this? - It's my _____.",
    img: "./data/Lop2/TiengAnh/images/de5_q1.png", // Hình cái mũi
    opts: ["A. nose", "B. eye", "C. ear", "D. face"],
    a: "A. nose",
    e: "Nose là cái mũi."
  },
  {
    q: "Câu 2: I have two _____.",
    img: "./data/Lop2/TiengAnh/images/de5_q2.png", // Hình đôi mắt
    opts: ["A. eye", "B. eyes", "C. nose", "D. mouth"],
    a: "B. eyes",
    e: "Hai mắt phải dùng số nhiều: eyes."
  },
  {
    q: "Câu 3: Touch your _____ (miệng).",
    opts: ["A. nose", "B. hair", "C. mouth", "D. ear"],
    a: "C. mouth",
    e: "Mouth là miệng."
  },
  {
    q: "Câu 4: What are these? - They are my _____ (những ngón tay).",
    img: "./data/Lop2/TiengAnh/images/de5_q4.png", // Hình bàn tay xòe ngón
    opts: ["A. fingers", "B. hands", "C. arms", "D. legs"],
    a: "A. fingers",
    e: "Fingers là các ngón tay."
  },
  {
    q: "Câu 5: This is my _____ (đầu).",
    opts: ["A. head", "B. hand", "C. leg", "D. foot"],
    a: "A. head",
    e: "Head là đầu."
  },
  {
    q: "Câu 6: How many legs do you have?",
    opts: ["A. One", "B. Two", "C. Three", "D. Four"],
    a: "B. Two",
    e: "Bạn có 2 chân (Two)."
  },
  {
    q: "Câu 7: Open your _____ (mắt).",
    opts: ["A. ears", "B. eyes", "C. arms", "D. legs"],
    a: "B. eyes",
    e: "Mở mắt ra."
  },
  {
    q: "Câu 8: These _____ my ears.",
    opts: ["A. is", "B. am", "C. are", "D. it"],
    a: "C. are",
    e: "These đi với are (số nhiều)."
  },
  {
    q: "Câu 9: Clap your _____.",
    img: "./data/Lop2/TiengAnh/images/de5_q9.png", // Hình vỗ tay
    opts: ["A. hands", "B. legs", "C. head", "D. nose"],
    a: "A. hands",
    e: "Clap your hands (Vỗ tay)."
  },
  {
    q: "Câu 10: Is this your face? - Yes, it _____.",
    opts: ["A. are", "B. is", "C. am", "D. not"],
    a: "B. is",
    e: "Yes, it is."
  },
  {
    q: "Câu 11: Chọn từ đúng cho hình ảnh:",
    img: "./data/Lop2/TiengAnh/images/de5_q11.png", // Hình cánh tay
    opts: ["A. Arm", "B. Leg", "C. Foot", "D. Toe"],
    a: "A. Arm",
    e: "Arm là cánh tay."
  },
  {
    q: "Câu 12: Stomp your _____ (giậm chân).",
    opts: ["A. hands", "B. feet", "C. eyes", "D. ears"],
    a: "B. feet",
    e: "Feet là đôi bàn chân."
  },
  {
    q: "Câu 13: Tìm từ khác loại:",
    opts: ["A. Eye", "B. Ear", "C. Apple", "D. Nose"],
    a: "C. Apple",
    e: "Apple là quả, còn lại là bộ phận cơ thể."
  },
  {
    q: "Câu 14: This is my _____ (tóc).",
    img: "./data/Lop2/TiengAnh/images/de5_q14.png", // Hình mái tóc
    opts: ["A. face", "B. hair", "C. head", "D. nose"],
    a: "B. hair",
    e: "Hair là tóc."
  },
  {
    q: "Câu 15: ears / my / These / are / .",
    opts: ["A. These are my ears.", "B. My ears are these.", "C. Are these my ears.", "D. These my are ears."],
    a: "A. These are my ears.",
    e: "Đây là đôi tai của tôi."
  },
  {
    q: "Câu 16: One foot, two _____.",
    opts: ["A. foots", "B. feet", "C. foot", "D. feat"],
    a: "B. feet",
    e: "Số nhiều của foot là feet."
  },
  {
    q: "Câu 17: I listen (nghe) with my _____.",
    opts: ["A. eyes", "B. nose", "C. ears", "D. mouth"],
    a: "C. ears",
    e: "Nghe bằng tai (ears)."
  },
  {
    q: "Câu 18: I see (nhìn) with my _____.",
    opts: ["A. ears", "B. eyes", "C. hands", "D. feet"],
    a: "B. eyes",
    e: "Nhìn bằng mắt (eyes)."
  },
  {
    q: "Câu 19: Shake your _____ (cơ thể).",
    opts: ["A. body", "B. head", "C. leg", "D. arm"],
    a: "A. body",
    e: "Lắc lư cơ thể."
  },
  {
    q: "Câu 20: How many fingers on one hand?",
    opts: ["A. Four", "B. Five", "C. Ten", "D. Two"],
    a: "B. Five",
    e: "Một bàn tay có 5 ngón."
  },

  // --- NÂNG CAO (21-25) ---
  {
    q: "Câu 21: Find the mistake: 'I have two nose.'",
    opts: ["A. I", "B. have", "C. two", "D. nose"],
    a: "D. nose",
    e: "Số 2 (two) thì nose phải thêm s -> noses. Hoặc thực tế con người chỉ có 1 mũi."
  },
  {
    q: "Câu 22: Which part is on your face?",
    opts: ["A. Knee", "B. Shoulder", "C. Eye", "D. Toe"],
    a: "C. Eye",
    e: "Mắt nằm trên khuôn mặt."
  },
  {
    q: "Câu 23: Complete: H_ad, Sh_ulders, Kn_es",
    opts: ["A. e - o - e", "B. a - o - e", "C. e - u - i", "D. a - a - e"],
    a: "A. e - o - e",
    e: "Head, Shoulders, Knees."
  },
  {
    q: "Câu 24: I smell (ngửi) with my _____.",
    opts: ["A. eye", "B. nose", "C. ear", "D. mouth"],
    a: "B. nose",
    e: "Ngửi bằng mũi."
  },
  {
    q: "Câu 25: What is missing? Head, Shoulders, _____, Toes.",
    opts: ["A. Eyes", "B. Ears", "C. Knees", "D. Mouth"],
    a: "C. Knees",
    e: "Theo bài hát: Head, Shoulders, Knees and Toes."
  }
];