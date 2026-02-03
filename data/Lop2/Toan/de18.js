export const data = [
  // --- Phần 1: Trắc nghiệm cơ bản (20 câu) ---
  {
    q: "Câu 1. Phép nhân 2 x 7 bằng bao nhiêu?",
    opts: ["A. 12", "B. 14", "C. 16", "D. 18"],
    a: "B. 14",
    e: "2 x 7 = 14."
  },
  {
    q: "Câu 2. Phép nhân 5 x 8 bằng bao nhiêu?",
    opts: ["A. 35", "B. 45", "C. 40", "D. 30"],
    a: "C. 40",
    e: "5 x 8 = 40."
  },
  {
    q: "Câu 3. Tích của 2 và 5 là:",
    opts: ["A. 7", "B. 10", "C. 3", "D. 25"],
    a: "B. 10",
    e: "2 x 5 = 10."
  },
  {
    q: "Câu 4. Trong phép nhân, số đứng trước dấu nhân gọi là gì?",
    opts: ["A. Số bị nhân", "B. Số hạng", "C. Thừa số", "D. Tích"],
    a: "C. Thừa số",
    e: "Cả hai số trong phép nhân đều được gọi là Thừa số."
  },
  {
    q: "Câu 5. Tìm x: x : 2 = 5",
    opts: ["A. x = 7", "B. x = 10", "C. x = 3", "D. x = 25"],
    a: "B. x = 10",
    e: "x là số bị chia. x = 5 x 2 = 10."
  },
  {
    q: "Câu 6. Mỗi chiếc xe đạp có 2 bánh xe. Hỏi 8 chiếc xe đạp có bao nhiêu bánh xe?",
    opts: ["A. 10 bánh", "B. 16 bánh", "C. 14 bánh", "D. 18 bánh"],
    a: "B. 16 bánh",
    e: "2 x 8 = 16 (bánh xe).",
    img: "./data/Lop2/Toan/images/de18_cau6.png"
  },
  {
    q: "Câu 7. Cô giáo chia lớp thành 5 tổ, mỗi tổ có 6 học sinh. Lớp đó có bao nhiêu học sinh?",
    opts: ["A. 11 học sinh", "B. 30 học sinh", "C. 25 học sinh", "D. 35 học sinh"],
    a: "B. 30 học sinh",
    e: "6 học sinh/tổ x 5 tổ = 30 học sinh (lấy 6 nhân 5 hoặc 5 nhân 6 đều ra tích là 30)."
  },
  {
    q: "Câu 8. So sánh: 2 kg x 5 ... 5 kg x 2",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "C. =",
    e: "2 x 5 = 10kg. 5 x 2 = 10kg. Hai vế bằng nhau."
  },
  {
    q: "Câu 9. Số 18 là tích của cặp số nào trong bảng nhân 2?",
    opts: ["A. 2 và 8", "B. 2 và 9", "C. 2 và 6", "D. 2 và 7"],
    a: "B. 2 và 9",
    e: "2 x 9 = 18."
  },
  {
    q: "Câu 10. Hình vẽ có 6 xe đạp, mỗi xe có 2 bánh. Tổng số bánh xe là:",
    opts: ["A. 8", "B. 12", "C. 10", "D. 14"],
    a: "B. 12",
    e: "2 x 6 = 12.",
    img: "./data/Lop2/Toan/images/de18_cau10.png"
  },
  {
    q: "Câu 11. 2 x 2 x 2 = ?",
    opts: ["A. 6", "B. 8", "C. 4", "D. 10"],
    a: "B. 8",
    e: "2 x 2 = 4; 4 x 2 = 8."
  },
  {
    q: "Câu 12. Nếu thừa số thứ nhất là 5, tích là 20 thì thừa số thứ hai là:",
    opts: ["A. 4", "B. 5", "C. 3", "D. 6"],
    a: "A. 4",
    e: "5 x ... = 20 -> Thừa số thứ hai là 4."
  },
  {
    q: "Câu 13. Phép tính 5 x 5 + 5 bằng với phép tính nào?",
    opts: ["A. 5 x 5", "B. 5 x 6", "C. 5 x 4", "D. 5 x 7"],
    a: "B. 5 x 6",
    e: "5 lần số 5 cộng thêm 1 số 5 nữa là 6 lần số 5 -> 5 x 6."
  },
  {
    q: "Câu 14. Chọn đáp án đúng: 20 cm : 2 = ...",
    opts: ["A. 10", "B. 10 cm", "C. 5 cm", "D. 2 cm"],
    a: "B. 10 cm",
    e: "Phép chia có đơn vị: 20 : 2 = 10, viết lại đơn vị cm."
  },
  {
    q: "Câu 15. Có 4 đĩa bánh, mỗi đĩa 5 cái. Ăn hết 3 cái. Còn lại bao nhiêu cái?",
    opts: ["A. 17 cái", "B. 20 cái", "C. 23 cái", "D. 2 cái"],
    a: "A. 17 cái",
    e: "Tổng số bánh: 5 x 4 = 20. Còn lại: 20 - 3 = 17."
  },
  {
    q: "Câu 16. Số lớn hơn 15 nhưng nhỏ hơn 25 và chia hết cho 5 là:",
    opts: ["A. 18", "B. 20", "C. 22", "D. 24"],
    a: "B. 20",
    e: "Số chia hết cho 5 (trong bảng nhân 5) ở khoảng đó là 20."
  },
  {
    q: "Câu 17. 2 giờ chiều hay còn gọi là:",
    opts: ["A. 12 giờ", "B. 14 giờ", "C. 16 giờ", "D. 15 giờ"],
    a: "B. 14 giờ",
    e: "2 giờ chiều = 2 + 12 = 14 giờ."
  },
  {
    q: "Câu 18. Một đôi đũa có 2 chiếc. 10 đôi đũa có bao nhiêu chiếc?",
    opts: ["A. 12 chiếc", "B. 20 chiếc", "C. 5 chiếc", "D. 18 chiếc"],
    a: "B. 20 chiếc",
    e: "2 chiếc/đôi x 10 đôi = 20 chiếc."
  },
  {
    q: "Câu 19. Tích của 5 và số nhỏ nhất có 1 chữ số khác 0 là:",
    opts: ["A. 0", "B. 5", "C. 10", "D. 1"],
    a: "B. 5",
    e: "Số nhỏ nhất có 1 chữ số khác 0 là 1. Tích: 5 x 1 = 5."
  },
  {
    q: "Câu 20. Phép nhân nào có tích lớn nhất?",
    opts: ["A. 2 x 9", "B. 5 x 4", "C. 2 x 8", "D. 5 x 3"],
    a: "B. 5 x 4",
    e: "A=18; B=20; C=16; D=15. 20 lớn nhất."
  },
  // --- Phần 2: Câu hỏi Nâng cao (5 câu) ---
  {
    q: "Câu 21. Tìm một số biết rằng số đó nhân với 5 thì được kết quả là số tròn chục lớn nhất có hai chữ số.",
    opts: ["A. 10", "B. 18", "C. 20", "D. 15"],
    a: "B. 18",
    e: "Số tròn chục lớn nhất có 2 chữ số là 90. Tìm số x sao cho x * 5 = 90. Học sinh có thể thử chọn: 18 x 5 = 90 (hoặc giải tư duy: 90 = 50 + 40 -> 10 lần 5 + 8 lần 5 = 18 lần 5)."
  },
  {
    q: "Câu 22. Quan sát cân đĩa (hình ảnh): Bên trái có 3 túi đường, mỗi túi 2kg. Bên phải cần đặt quả cân mấy kg để thăng bằng?",
    opts: ["A. 5 kg", "B. 6 kg", "C. 8 kg", "D. 4 kg"],
    a: "B. 6 kg",
    e: "Khối lượng bên trái: 2 x 3 = 6kg. Vậy quả cân phải là 6kg.",
    img: "./data/Lop2/Toan/images/de18_cau22.png"
  },
  {
    q: "Câu 23. Từ 3 số: 2, 5, 10. Có thể lập được bao nhiêu phép nhân đúng (dạng a x b = c)?",
    opts: ["A. 1 phép tính", "B. 2 phép tính", "C. 4 phép tính", "D. 3 phép tính"],
    a: "B. 2 phép tính",
    e: "Đó là: 2 x 5 = 10 và 5 x 2 = 10."
  },
  {
    q: "Câu 24. Biết A x 2 = B. Biết B là số lớn nhất có 1 chữ số. Hỏi A là số nào?",
    opts: ["A. Không có số A nào", "B. 4", "C. 5", "D. 4,5"],
    a: "A. Không có số A nào",
    e: "B là 9. Không có số tự nhiên nào nhân 2 bằng 9. (Lớp 2 chưa học số thập phân)."
  },
  {
    q: "Câu 25. Một toà nhà có 5 tầng, mỗi tầng có 2 căn hộ, mỗi căn hộ có 2 phòng ngủ. Hỏi toà nhà có bao nhiêu phòng ngủ?",
    opts: ["A. 10 phòng", "B. 20 phòng", "C. 15 phòng", "D. 9 phòng"],
    a: "B. 20 phòng",
    e: "Số căn hộ: 5 x 2 = 10 căn. Số phòng ngủ: 10 x 2 = 20 phòng."
  }
];