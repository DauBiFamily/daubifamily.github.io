/**
 * TIÊU ĐỀ: ĐỀ ÔN TẬP HỌC KỲ 1 - ĐỀ SỐ 1
 * Nội dung: Chủ đề Family, Numbers, Feelings.
 * Cấu trúc: 20 câu cơ bản + 5 câu nâng cao.
 */

export const data = [
  // --- CÂU HỎI CƠ BẢN (1-20) ---
  {
    id: 1,
    q: "Look at the picture. Who is this?",
    img: "./data/Lop2/TiengAnh/images/de1_q1.png", // Hình ảnh một người bà đang cười
    img_desc: "Hình ảnh bà (grandma)",
    opts: ["A. Grandpa", "B. Grandma", "C. Sister", "D. Brother"],
    a: "B",
    e: "Trong hình là bà. Đáp án đúng là 'Grandma'."
  },
  {
    id: 2,
    q: "Choose the correct number: 'Seven'",
    img: "",
    opts: ["A. 6", "B. 7", "C. 8", "D. 9"],
    a: "B",
    e: "Seven nghĩa là số 7."
  },
  {
    id: 3,
    q: "How are you today? - I am ______.",
    img: "./data/Lop2/TiengAnh/images/de1_q3.png", // Hình ảnh mặt cười vui vẻ
    img_desc: "Hình mặt cười (happy)",
    opts: ["A. sad", "B. happy", "C. hungry", "D. scared"],
    a: "B",
    e: "Hình ảnh thể hiện sự vui vẻ. 'Happy' là vui vẻ."
  },
  {
    id: 4,
    q: "Is this your dad?",
    img: "./data/Lop2/TiengAnh/images/de1_q4.png", // Hình ảnh người bố
    img_desc: "Hình ảnh bố (dad)",
    opts: ["A. Yes, it is.", "B. No, it isn't.", "C. Yes, he is.", "D. No, she isn't."],
    a: "A",
    e: "Câu hỏi 'Is this your dad?' (Đây có phải bố bạn không?). Nhìn hình là bố nên trả lời 'Yes, it is.'"
  },
  {
    id: 5,
    q: "What is missing? One, Two, Three, _____, Five.",
    img: "",
    opts: ["A. Six", "B. Four", "C. Ten", "D. Nine"],
    a: "B",
    e: "Thứ tự đếm: 1, 2, 3, 4, 5. Số còn thiếu là Four (4)."
  },
  {
    id: 6,
    q: "Unscramble the word: 'r - o - t - h - e - b - r'",
    img: "./data/Lop2/TiengAnh/images/de1_q6.png", // Hình ảnh anh trai/em trai
    img_desc: "Hình ảnh anh em trai (brother)",
    opts: ["A. Sister", "B. Father", "C. Brother", "D. Mother"],
    a: "C",
    e: "Sắp xếp các chữ cái tạo thành từ 'Brother' (Anh/em trai)."
  },
  {
    id: 7,
    q: "Look and choose: What color is the apple?",
    img: "./data/Lop2/TiengAnh/images/de1_q7.png", // Hình ảnh quả táo màu đỏ
    img_desc: "Quả táo màu đỏ",
    opts: ["A. Blue", "B. Green", "C. Red", "D. Yellow"],
    a: "C",
    e: "Quả táo màu đỏ. Red là màu đỏ."
  },
  {
    id: 8,
    q: "Select the odd one out (Chọn từ khác loại):",
    img: "",
    opts: ["A. Sad", "B. Happy", "C. Sister", "D. Hungry"],
    a: "C",
    e: "Sad, Happy, Hungry là từ chỉ cảm xúc. Sister (chị/em gái) là từ chỉ người thân."
  },
  {
    id: 9,
    q: "Complete the sentence: 'This _____ my mom.'",
    img: "",
    opts: ["A. are", "B. is", "C. am", "D. an"],
    a: "B",
    e: "Cấu trúc giới thiệu: This is my... (Đây là... của tôi)."
  },
  {
    id: 10,
    q: "Count and choose: How many cats?",
    img: "./data/Lop2/TiengAnh/images/de1_q10.png", // Hình ảnh 3 con mèo
    img_desc: "Hình 3 con mèo",
    opts: ["A. Two", "B. Three", "C. Four", "D. Five"],
    a: "B",
    e: "Đếm trong hình có 3 con mèo. Đáp án là Three."
  },
  {
    id: 11,
    q: "Translate to Vietnamese: 'I am sad.'",
    img: "./data/Lop2/TiengAnh/images/de1_q11.png", // Mặt buồn
    img_desc: "Mặt buồn",
    opts: ["A. Tôi vui.", "B. Tôi đói.", "C. Tôi khát.", "D. Tôi buồn."],
    a: "D",
    e: "'Sad' nghĩa là buồn."
  },
  {
    id: 12,
    q: "Who is she? - She is my ______.",
    img: "./data/Lop2/TiengAnh/images/de1_q12.png", // Hình ảnh chị gái
    img_desc: "Hình ảnh chị gái",
    opts: ["A. brother", "B. dad", "C. sister", "D. grandpa"],
    a: "C",
    e: "Trong hình là con gái/chị gái. Đáp án phù hợp nhất là Sister."
  },
  {
    id: 13,
    q: "Calculate: 2 + 3 = ?",
    img: "",
    opts: ["A. Four", "B. Five", "C. Six", "D. Seven"],
    a: "B",
    e: "2 (Two) cộng 3 (Three) bằng 5 (Five)."
  },
  {
    id: 14,
    q: "Look at the picture. Is he hot?",
    img: "./data/Lop2/TiengAnh/images/de1_q14.png", // Người đang toát mồ hôi/nóng
    img_desc: "Người đang nóng (hot)",
    opts: ["A. Yes, he is.", "B. No, he isn't.", "C. Yes, she is.", "D. No, it isn't."],
    a: "A",
    e: "Hình ảnh người đang nóng. Câu hỏi dùng 'he' nên trả lời là 'Yes, he is.'"
  },
  {
    id: 15,
    q: "Which word starts with letter 'A'?",
    img: "./data/Lop2/TiengAnh/images/de1_q15.png", // Hình quả táo và con kiến
    img_desc: "Hình quả táo (apple) hoặc con kiến (ant)",
    opts: ["A. Boy", "B. Cat", "C. Ant", "D. Dog"],
    a: "C",
    e: "Ant (con kiến) bắt đầu bằng chữ A."
  },
  {
    id: 16,
    q: "Find the mistake: 'She is my brother.'",
    img: "",
    opts: ["A. She", "B. is", "C. my", "D. brother"],
    a: "D",
    e: "'She' dùng cho nữ, nhưng 'brother' là nam. Từ sai là brother (phải sửa thành sister) hoặc She (sửa thành He)."
  },
  {
    id: 17,
    q: "What is this?",
    img: "./data/Lop2/TiengAnh/images/de1_q17.png", // Hình cái bút chì
    img_desc: "Cái bút chì (pencil)",
    opts: ["A. It's a pencil.", "B. It's a pen.", "C. It's a bag.", "D. It's a book."],
    a: "A",
    e: "Hình ảnh là bút chì. Tiếng Anh là Pencil."
  },
  {
    id: 18,
    q: "Complete: G, H, I, ____, K",
    img: "",
    opts: ["A. L", "B. M", "C. J", "D. N"],
    a: "C",
    e: "Bảng chữ cái: G, H, I, J, K..."
  },
  {
    id: 19,
    q: "Choose the correct sentence.",
    img: "./data/Lop2/TiengAnh/images/de1_q19.png", // Bé trai chỉ vào mẹ
    img_desc: "Bé trai giới thiệu mẹ",
    opts: ["A. He is my mom.", "B. She is my mom.", "C. It is my mom.", "D. You is my mom."],
    a: "B",
    e: "Mẹ là nữ nên dùng 'She'. She is my mom."
  },
  {
    id: 20,
    q: "Word search: 'F_m_ly'",
    img: "",
    opts: ["A. a - i", "B. a - e", "C. o - i", "D. u - y"],
    a: "A",
    e: "Từ đầy đủ là Family (Gia đình)."
  },

  // --- CÂU HỎI NÂNG CAO (21-25) ---
  {
    id: 21,
    q: "Reorder the words: 'is / This / grandmother / my'",
    img: "",
    opts: ["A. This is my grandmother.", "B. My grandmother is This.", "C. This my is grandmother.", "D. Grandmother is my this."],
    a: "A",
    e: "Câu đúng ngữ pháp: This is my grandmother (Đây là bà của tôi)."
  },
  {
    id: 22,
    q: "Read and answer: 'My name is Lan. I am seven years old. I am happy.' - How old is Lan?",
    img: "",
    opts: ["A. She is six.", "B. She is seven.", "C. She is eight.", "D. She is happy."],
    a: "B",
    e: "Bài đọc nói 'I am seven years old'. Vậy Lan 7 tuổi."
  },
  {
    id: 23,
    q: "Logic: Father is to Brother, as Mother is to ______?",
    img: "",
    opts: ["A. Grandpa", "B. Aunt", "C. Sister", "D. Uncle"],
    a: "C",
    e: "Tương quan Nam - Nữ trong gia đình: Bố - Anh trai thì tương ứng Mẹ - Chị gái (Sister)."
  },
  {
    id: 24,
    q: "Choose the sentence that matches the picture.",
    img: "./data/Lop2/TiengAnh/images/de1_q24.png", // Một gia đình đang ăn cơm vui vẻ
    img_desc: "Gia đình đang ăn tối",
    opts: ["A. They are sad.", "B. They are hungry.", "C. They are scared.", "D. They are happy."],
    a: "D",
    e: "Gia đình đang ăn uống vui vẻ, biểu cảm tích cực nhất là 'They are happy'."
  },
  {
    id: 25,
    q: "Find the hidden word: 1-P, 2-E, 3-N -> 3-2-1 is?",
    img: "",
    opts: ["A. PEN", "B. NEP", "C. EPN", "D. NPE"],
    a: "B",
    e: "Đánh số: 1=P, 2=E, 3=N. Thứ tự 3-2-1 sẽ là N-E-P (Nep)."
  }
];