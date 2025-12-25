/**
 * TIÊU ĐỀ: ĐỀ ÔN TẬP HỌC KỲ 1 - ĐỀ SỐ 2
 * Nội dung: School Things, Colors, Body Parts.
 * Cấu trúc: 20 câu cơ bản + 5 câu nâng cao.
 */

export const data = [
  // --- CÂU HỎI CƠ BẢN (1-20) ---
  {
    id: 1,
    q: "What is this?",
    img: "./data/Lop2/TiengAnh/images/de2_q1.png", // Hình cái cặp sách
    img_desc: "Cái cặp sách (bag)",
    opts: ["A. It's a bag.", "B. It's a book.", "C. It's a pen.", "D. It's a rubber."],
    a: "A",
    e: "Hình ảnh cái cặp sách là 'Bag'."
  },
  {
    id: 2,
    q: "Is this a pen?",
    img: "./data/Lop2/TiengAnh/images/de2_q2.png", // Hình cục tẩy
    img_desc: "Cục tẩy (rubber/eraser)",
    opts: ["A. Yes, it is.", "B. No, it isn't. It's a pencil.", "C. No, it isn't. It's a rubber.", "D. Yes, they are."],
    a: "C",
    e: "Hình là cục tẩy (rubber), không phải bút mực. Đáp án C đúng."
  },
  {
    id: 3,
    q: "Touch your _______.",
    img: "./data/Lop2/TiengAnh/images/de2_q3.png", // Bé chạm tay lên mũi
    img_desc: "Chạm vào mũi (nose)",
    opts: ["A. nose", "B. eyes", "C. ears", "D. mouth"],
    a: "A",
    e: "Hành động chạm vào mũi. Mũi là 'Nose'."
  },
  {
    id: 4,
    q: "What color is this?",
    img: "./data/Lop2/TiengAnh/images/de2_q4.png", // Màu xanh dương
    img_desc: "Màu xanh dương (blue)",
    opts: ["A. Red", "B. Green", "C. Yellow", "D. Blue"],
    a: "D",
    e: "Màu xanh dương/xanh nước biển là 'Blue'."
  },
  {
    id: 5,
    q: "Open your _______.",
    img: "./data/Lop2/TiengAnh/images/de2_q5.png", // Mở sách ra
    img_desc: "Mở sách (book)",
    opts: ["A. door", "B. book", "C. bag", "D. window"],
    a: "B",
    e: "Hình ảnh mở sách. Cụm từ 'Open your book'."
  },
  {
    id: 6,
    q: "I have two ______.",
    img: "./data/Lop2/TiengAnh/images/de2_q6.png", // Hình đôi mắt
    img_desc: "Đôi mắt (eyes)",
    opts: ["A. nose", "B. face", "C. eyes", "D. mouth"],
    a: "C",
    e: "Chúng ta có 2 mắt. Đáp án đúng là 'eyes'."
  },
  {
    id: 7,
    q: "What is it? It is a ______.",
    img: "./data/Lop2/TiengAnh/images/de2_q7.png", // Cái cửa sổ
    img_desc: "Cửa sổ (window)",
    opts: ["A. door", "B. window", "C. board", "D. desk"],
    a: "B",
    e: "Hình cửa sổ là 'Window'."
  },
  {
    id: 8,
    q: "Mix colors: Red + Yellow = ?",
    img: "./data/Lop2/TiengAnh/images/de2_q8.png", // Pha màu đỏ và vàng
    img_desc: "Màu cam (orange)",
    opts: ["A. Green", "B. Purple", "C. Orange", "D. Brown"],
    a: "C",
    e: "Màu đỏ pha màu vàng ra màu cam (Orange)."
  },
  {
    id: 9,
    q: "These are my _______.",
    img: "./data/Lop2/TiengAnh/images/de2_q9.png", // Hình cái tai
    img_desc: "Đôi tai (ears)",
    opts: ["A. ear", "B. ears", "C. nose", "D. head"],
    a: "B",
    e: "Có 2 cái tai nên dùng số nhiều 'ears'."
  },
  {
    id: 10,
    q: "Sit ______, please!",
    img: "./data/Lop2/TiengAnh/images/de2_q10.png", // Học sinh ngồi xuống
    img_desc: "Ngồi xuống (sit down)",
    opts: ["A. up", "B. in", "C. on", "D. down"],
    a: "D",
    e: "Cụm từ mệnh lệnh: Sit down (Ngồi xuống)."
  },
  {
    id: 11,
    q: "What color is the leaf?",
    img: "./data/Lop2/TiengAnh/images/de2_q11.png", // Chiếc lá màu xanh lá cây
    img_desc: "Lá cây màu xanh (green)",
    opts: ["A. Green", "B. Red", "C. Black", "D. Pink"],
    a: "A",
    e: "Lá cây thường màu xanh lá. Green."
  },
  {
    id: 12,
    q: "Is it a desk?",
    img: "./data/Lop2/TiengAnh/images/de2_q12.png", // Hình cái bàn học
    img_desc: "Bàn học (desk)",
    opts: ["A. Yes, it is.", "B. No, it isn't.", "C. Yes, they are.", "D. No, they aren't."],
    a: "A",
    e: "Hình đúng là cái bàn. Trả lời: Yes, it is."
  },
  {
    id: 13,
    q: "Choose the odd one out:",
    img: "",
    opts: ["A. Pen", "B. Pencil", "C. Ruler", "D. Shoulder"],
    a: "D",
    e: "Pen, Pencil, Ruler là dụng cụ học tập. Shoulder (vai) là bộ phận cơ thể."
  },
  {
    id: 14,
    q: "This is my _______.",
    img: "./data/Lop2/TiengAnh/images/de2_q14.png", // Khuôn mặt
    img_desc: "Khuôn mặt (face)",
    opts: ["A. face", "B. hand", "C. leg", "D. arm"],
    a: "A",
    e: "Hình khuôn mặt là 'face'."
  },
  {
    id: 15,
    q: "Look at the teacher. She says: '_______ up!'",
    img: "./data/Lop2/TiengAnh/images/de2_q15.png", // Cô giáo ra hiệu đứng lên
    img_desc: "Đứng lên (stand up)",
    opts: ["A. Sit", "B. Stand", "C. Listen", "D. Open"],
    a: "B",
    e: "Stand up (Đứng lên)."
  },
  {
    id: 16,
    q: "How many legs do you have?",
    img: "",
    opts: ["A. One", "B. Two", "C. Three", "D. Four"],
    a: "B",
    e: "Con người có 2 chân (legs)."
  },
  {
    id: 17,
    q: "Correct spelling:",
    img: "./data/Lop2/TiengAnh/images/de2_q17.png", // Quyển vở
    img_desc: "Quyển vở (notebook)",
    opts: ["A. Notebook", "B. Notebook", "C. Notbook", "D. Noetbook"],
    a: "A",
    e: "Từ đúng là Notebook."
  },
  {
    id: 18,
    q: "What's this? - It's ______ orange pencil case.",
    img: "./data/Lop2/TiengAnh/images/de2_q18.png", // Hộp bút màu cam
    img_desc: "Hộp bút màu cam",
    opts: ["A. a", "B. an", "C. two", "D. is"],
    a: "B",
    e: "Trước nguyên âm 'o' (orange) dùng mạo từ 'an'. It's an orange pencil case."
  },
  {
    id: 19,
    q: "Clap your _______.",
    img: "./data/Lop2/TiengAnh/images/de2_q19.png", // Vỗ tay
    img_desc: "Vỗ tay (hands)",
    opts: ["A. hands", "B. arms", "C. legs", "D. head"],
    a: "A",
    e: "Clap your hands (Vỗ tay)."
  },
  {
    id: 20,
    q: "Color the circle ______.",
    img: "./data/Lop2/TiengAnh/images/de2_q20.png", // Hình tròn được tô màu vàng
    img_desc: "Hình tròn màu vàng",
    opts: ["A. red", "B. blue", "C. yellow", "D. pink"],
    a: "C",
    e: "Hình mẫu màu vàng. Đáp án Yellow."
  },

  // --- CÂU HỎI NÂNG CAO (21-25) ---
  {
    id: 21,
    q: "Unscramble: 's / i / h / T / n / o / s / e / m / y'",
    img: "",
    opts: ["A. This is nose my.", "B. This is my nose.", "C. My nose is This.", "D. Nose is my This."],
    a: "B",
    e: "Câu đúng: This is my nose (Đây là mũi của tôi)."
  },
  {
    id: 22,
    q: "Read and calculate: I have 2 blue pens and 3 red pens. How many pens do I have?",
    img: "",
    opts: ["A. 4 pens", "B. 5 pens", "C. 6 pens", "D. 5 pencils"],
    a: "B",
    e: "2 bút xanh + 3 bút đỏ = 5 bút (5 pens). Chú ý đáp án D sai vì là pencils (bút chì)."
  },
  {
    id: 23,
    q: "Logic: Eye is to See, as Ear is to ______?",
    img: "",
    opts: ["A. Smell", "B. Touch", "C. Hear", "D. Taste"],
    a: "C",
    e: "Mắt dùng để nhìn (See), Tai dùng để nghe (Hear/Listen)."
  },
  {
    id: 24,
    q: "Which object is NOT in the pencil case?",
    img: "./data/Lop2/TiengAnh/images/de2_q24.png", // Hộp bút chứa: bút, tẩy, thước. Bên ngoài là cái cặp.
    img_desc: "Hộp bút có pen, rubber, ruler. Cái cặp (bag) ở ngoài.",
    opts: ["A. Pen", "B. Rubber", "C. Bag", "D. Ruler"],
    a: "C",
    e: "Cái cặp (Bag) thường chứa hộp bút, chứ không nằm trong hộp bút."
  },
  {
    id: 25,
    q: "Reorder conversation: (1) I'm fine, thanks. (2) Hello, How are you? (3) Hi, I'm Lan.",
    img: "",
    opts: ["A. 1-2-3", "B. 2-3-1", "C. 3-2-1", "D. 2-1-3"],
    a: "C",
    e: "Trật tự hợp lý: Chào (3) -> Hỏi thăm (2) -> Trả lời (1)."
  }
];