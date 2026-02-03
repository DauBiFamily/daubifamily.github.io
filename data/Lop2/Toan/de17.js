export const data = [
  // --- Phần 1: Trắc nghiệm cơ bản (20 câu) ---
  {
    q: "Câu 1. Kết quả của 5 x 1 là:",
    opts: ["A. 1", "B. 5", "C. 6", "D. 10"],
    a: "B. 5",
    e: "Bất kỳ số nào nhân với 1 cũng bằng chính nó."
  },
  {
    q: "Câu 2. Dãy số: 5, 10, 15, 20, ..., 30. Số còn thiếu là:",
    opts: ["A. 21", "B. 22", "C. 25", "D. 29"],
    a: "C. 25",
    e: "Đếm thêm 5 đơn vị: 20 + 5 = 25."
  },
  {
    q: "Câu 3. 5 được lấy 4 lần viết là:",
    opts: ["A. 5 + 4", "B. 5 x 4", "C. 4 x 5", "D. 54"],
    a: "B. 5 x 4",
    e: "5 được lấy 4 lần nghĩa là 5 x 4."
  },
  {
    q: "Câu 4. 5 x 6 = ?",
    opts: ["A. 25", "B. 30", "C. 35", "D. 40"],
    a: "B. 30",
    e: "Theo bảng nhân 5: 5 x 6 = 30."
  },
  {
    q: "Câu 5. Mỗi bàn tay có 5 ngón tay. Hỏi 2 bàn tay có bao nhiêu ngón tay?",
    opts: ["A. 7 ngón", "B. 8 ngón", "C. 10 ngón", "D. 9 ngón"],
    a: "C. 10 ngón",
    e: "5 x 2 = 10 (ngón tay).",
    img: "./data/Lop2/Toan/images/de17_cau5.png"
  },
  {
    q: "Câu 6. Tìm tích của 5 và 8?",
    opts: ["A. 40", "B. 13", "C. 35", "D. 45"],
    a: "A. 40",
    e: "5 x 8 = 40."
  },
  {
    q: "Câu 7. Điền số thích hợp: ... x 5 = 35",
    opts: ["A. 6", "B. 7", "C. 8", "D. 9"],
    a: "B. 7",
    e: "Số cần điền là 7 vì 7 x 5 = 35 (hoặc 5 x 7 = 35)."
  },
  {
    q: "Câu 8. So sánh: 5 x 3 ... 5 x 2 + 5",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "C. =",
    e: "5 x 3 = 15. Vế phải: 5 x 2 = 10, 10 + 5 = 15. Vậy hai vế bằng nhau."
  },
  {
    q: "Câu 9. Mỗi tuần đi học 5 ngày. Hỏi 4 tuần đi học bao nhiêu ngày?",
    opts: ["A. 9 ngày", "B. 20 ngày", "C. 25 ngày", "D. 15 ngày"],
    a: "B. 20 ngày",
    e: "Số ngày đi học = 5 x 4 = 20 (ngày)."
  },
  {
    q: "Câu 10. Trong phép nhân 5 x 9 = 45. Số 45 gọi là:",
    opts: ["A. Số hạng", "B. Tổng", "C. Tích", "D. Thừa số"],
    a: "C. Tích",
    e: "Kết quả của phép nhân gọi là Tích."
  },
  {
    q: "Câu 11. 5 dm x 2 = ...",
    opts: ["A. 10", "B. 7 dm", "C. 10 dm", "D. 10 cm"],
    a: "C. 10 dm",
    e: "5 x 2 = 10, giữ nguyên đơn vị dm."
  },
  {
    q: "Câu 12. Tổng của 5 + 5 + 5 + 5 + 5 + 5 + 5 bằng với phép nhân nào?",
    opts: ["A. 5 x 6", "B. 5 x 7", "C. 5 x 8", "D. 5 x 5"],
    a: "B. 5 x 7",
    e: "Có 7 số 5 cộng lại -> 5 x 7."
  },
  {
    q: "Câu 13. Mẹ mua 5 gói bánh, mỗi gói có 5 cái bánh. Mẹ mua tất cả bao nhiêu cái bánh?",
    opts: ["A. 10 cái", "B. 20 cái", "C. 25 cái", "D. 15 cái"],
    a: "C. 25 cái",
    e: "Số bánh = 5 x 5 = 25 (cái)."
  },
  {
    q: "Câu 14. Kết quả phép tính 5 x 10 - 15 là:",
    opts: ["A. 35", "B. 25", "C. 40", "D. 30"],
    a: "A. 35",
    e: "5 x 10 = 50. 50 - 15 = 35."
  },
  {
    q: "Câu 15. Số liền sau của tích 5 x 4 là:",
    opts: ["A. 20", "B. 19", "C. 21", "D. 25"],
    a: "C. 21",
    e: "Tích 5 x 4 = 20. Số liền sau của 20 là 21."
  },
  {
    q: "Câu 16. Phép tính nào đúng?",
    opts: ["A. 5 x 0 = 5", "B. 5 x 1 = 1", "C. 5 x 5 = 20", "D. 5 x 3 = 15"],
    a: "D. 5 x 3 = 15",
    e: "A sai (bằng 0), B sai (bằng 5), C sai (bằng 25)."
  },
  {
    q: "Câu 17. 20 là tích của hai số nào?",
    opts: ["A. 5 và 3", "B. 5 và 4", "C. 5 và 5", "D. 2 và 8"],
    a: "B. 5 và 4",
    e: "5 x 4 = 20."
  },
  {
    q: "Câu 18. Một ngôi sao có 5 cánh. Hỏi 6 ngôi sao như thế có tất cả bao nhiêu cánh?",
    opts: ["A. 11 cánh", "B. 30 cánh", "C. 25 cánh", "D. 35 cánh"],
    a: "B. 30 cánh",
    e: "5 cánh/sao x 6 sao = 30 cánh.",
    img: "./data/Lop2/Toan/images/de17_cau18.png"
  },
  {
    q: "Câu 19. An có 5 viên bi. Bình có số bi gấp 2 lần số bi của An. Bình có bao nhiêu viên bi?",
    opts: ["A. 7 viên", "B. 10 viên", "C. 15 viên", "D. 3 viên"],
    a: "B. 10 viên",
    e: "Số bi của Bình = 5 x 2 = 10 (viên)."
  },
  {
    q: "Câu 20. Hình tam giác ABC có 3 cạnh bằng nhau, mỗi cạnh dài 5cm. Chu vi hình tam giác là:",
    opts: ["A. 10 cm", "B. 8 cm", "C. 15 cm", "D. 12 cm"],
    a: "C. 15 cm",
    e: "Chu vi = 5 + 5 + 5 = 5 x 3 = 15 (cm)."
  },
  // --- Phần 2: Câu hỏi Nâng cao (5 câu) ---
  {
    q: "Câu 21. Tìm y biết: y : 5 = 2 + 2",
    opts: ["A. y = 4", "B. y = 20", "C. y = 10", "D. y = 25"],
    a: "B. y = 20",
    e: "2 + 2 = 4. Vậy y : 5 = 4. Muốn tìm số bị chia (y), ta lấy thương nhân số chia: 4 x 5 = 20."
  },
  {
    q: "Câu 22. Một sợi dây dài 50cm, người ta cắt thành các đoạn bằng nhau, mỗi đoạn dài 5cm. Hỏi cắt được bao nhiêu đoạn?",
    opts: ["A. 5 đoạn", "B. 8 đoạn", "C. 9 đoạn", "D. 10 đoạn"],
    a: "D. 10 đoạn",
    e: "Ta có 5 x 10 = 50. Vậy cắt được 10 đoạn."
  },
  {
    q: "Câu 23. Số chẵn lớn nhất có một chữ số nhân với 5 được kết quả là:",
    opts: ["A. 40", "B. 45", "C. 30", "D. 35"],
    a: "A. 40",
    e: "Số chẵn lớn nhất có 1 chữ số là 8. 8 x 5 = 40."
  },
  {
    q: "Câu 24. Trong một phép nhân, nếu giữ nguyên thừa số thứ nhất là 5 và giảm thừa số thứ hai đi 2 đơn vị thì tích giảm đi bao nhiêu?",
    opts: ["A. 2 đơn vị", "B. 5 đơn vị", "C. 10 đơn vị", "D. 7 đơn vị"],
    a: "C. 10 đơn vị",
    e: "Giảm thừa số thứ hai 2 đơn vị, tức là mất đi 2 lần thừa số thứ nhất. Giảm: 5 x 2 = 10."
  },
  {
    q: "Câu 25. Có 5 bình hoa, mỗi bình có 3 bông hồng và 2 bông cúc. Hỏi có tất cả bao nhiêu bông hoa?",
    opts: ["A. 15 bông", "B. 25 bông", "C. 10 bông", "D. 20 bông"],
    a: "B. 25 bông",
    e: "Mỗi bình có: 3 + 2 = 5 bông. 5 bình có: 5 x 5 = 25 bông."
  }
];