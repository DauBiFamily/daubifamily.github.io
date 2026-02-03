export const data = [
  // --- Phần 1: Trắc nghiệm cơ bản (20 câu) ---
  {
    q: "Câu 1. Tổng 2 + 2 + 2 + 2 + 2 được viết thành phép nhân là:",
    opts: ["A. 2 x 5", "B. 2 x 4", "C. 5 x 2", "D. 2 + 5"],
    a: "A. 2 x 5",
    e: "Số 2 được lấy 5 lần, nên ta viết là 2 x 5."
  },
  {
    q: "Câu 2. Trong phép nhân 2 x 3 = 6. Số 2 được gọi là:",
    opts: ["A. Số hạng", "B. Thừa số", "C. Tích", "D. Tổng"],
    a: "B. Thừa số",
    e: "Trong phép nhân, các thành phần là: Thừa số x Thừa số = Tích."
  },
  {
    q: "Câu 3. Kết quả của phép tính 2 x 6 là:",
    opts: ["A. 8", "B. 10", "C. 12", "D. 14"],
    a: "C. 12",
    e: "Dựa vào bảng nhân 2: 2 x 6 = 12."
  },
  {
    q: "Câu 4. Quan sát hình vẽ: Có 4 đĩa, mỗi đĩa có 2 quả cam. Phép tính đúng là:",
    opts: ["A. 4 x 2 = 8", "B. 2 + 4 = 6", "C. 2 x 4 = 8", "D. 4 + 4 = 8"],
    a: "C. 2 x 4 = 8",
    e: "2 quả cam được lấy 4 lần -> 2 x 4 = 8.",
    img: "./data/Lop2/Toan/images/de16_cau4.png"
  },
  {
    q: "Câu 5. Phép nhân 2 x 8 có kết quả bằng phép cộng nào sau đây?",
    opts: ["A. 2 + 8", "B. 8 + 8", "C. 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2", "D. 8 + 2"],
    a: "C. 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2",
    e: "2 x 8 có nghĩa là 8 số 2 cộng lại với nhau."
  },
  {
    q: "Câu 6. Điền số thích hợp: 2 x ... = 14",
    opts: ["A. 6", "B. 7", "C. 8", "D. 5"],
    a: "B. 7",
    e: "Theo bảng nhân 2: 2 x 7 = 14."
  },
  {
    q: "Câu 7. Mỗi con gà có 2 chân. Hỏi 5 con gà có bao nhiêu chân?",
    opts: ["A. 7 chân", "B. 10 chân", "C. 12 chân", "D. 8 chân"],
    a: "B. 10 chân",
    e: "Số chân gà là: 2 x 5 = 10 (chân)."
  },
  {
    q: "Câu 8. Tích của 2 và 9 là:",
    opts: ["A. 11", "B. 18", "C. 16", "D. 29"],
    a: "B. 18",
    e: "Tìm tích là làm phép nhân: 2 x 9 = 18."
  },
  {
    q: "Câu 9. Phép tính nào có kết quả bé nhất?",
    opts: ["A. 2 x 3", "B. 2 x 5", "C. 2 x 1", "D. 2 x 2"],
    a: "C. 2 x 1",
    e: "2 x 3 = 6; 2 x 5 = 10; 2 x 1 = 2; 2 x 2 = 4. Bé nhất là 2."
  },
  {
    q: "Câu 10. Chọn dấu thích hợp: 2 x 5 ... 2 x 4 + 2",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "C. =",
    e: "Vế trái: 10. Vế phải: 8 + 2 = 10. Vậy điền dấu =."
  },
  {
    q: "Câu 11. Các số: 2, 4, 6, 8, 10, ... Số tiếp theo là:",
    opts: ["A. 11", "B. 12", "C. 13", "D. 14"],
    a: "B. 12",
    e: "Đây là dãy số đếm thêm 2 (hoặc tích của bảng nhân 2). 10 + 2 = 12."
  },
  {
    q: "Câu 12. Mỗi chuồng có 2 con thỏ. Hỏi 3 chuồng như thế có bao nhiêu con thỏ?",
    opts: ["A. 5 con", "B. 6 con", "C. 8 con", "D. 4 con"],
    a: "B. 6 con",
    e: "2 được lấy 3 lần: 2 x 3 = 6 (con).",
    img: "./data/Lop2/Toan/images/de16_cau12.png"
  },
  {
    q: "Câu 13. Kết quả của phép tính 2 x 10 là:",
    opts: ["A. 12", "B. 20", "C. 21", "D. 22"],
    a: "B. 20",
    e: "2 x 10 = 20."
  },
  {
    q: "Câu 14. 2 + 2 + 2 = 2 x ...",
    opts: ["A. 3", "B. 2", "C. 6", "D. 4"],
    a: "A. 3",
    e: "Có 3 số hạng là 2, nên viết thành 2 x 3."
  },
  {
    q: "Câu 15. Bạn Mai xếp 2 cái bánh vào 1 hộp. Mai xếp được 6 hộp như thế. Hỏi Mai có tất cả bao nhiêu cái bánh?",
    opts: ["A. 8 cái", "B. 10 cái", "C. 12 cái", "D. 14 cái"],
    a: "C. 12 cái",
    e: "Tổng số bánh là: 2 x 6 = 12 (cái)."
  },
  {
    q: "Câu 16. Số thừa số thứ nhất là 2, thừa số thứ hai là 4. Tích là:",
    opts: ["A. 6", "B. 8", "C. 2", "D. 42"],
    a: "B. 8",
    e: "Tích = 2 x 4 = 8."
  },
  {
    q: "Câu 17. 2 cm x 5 = ...",
    opts: ["A. 10", "B. 7 cm", "C. 10 cm", "D. 10 dm"],
    a: "C. 10 cm",
    e: "Khi nhân số có đơn vị, ta nhân số rồi viết lại đơn vị. 2 x 5 = 10, thêm cm."
  },
  {
    q: "Câu 18. Chọn câu sai:",
    opts: ["A. 2 x 3 = 6", "B. 2 x 7 = 14", "C. 2 x 5 = 12", "D. 2 x 8 = 16"],
    a: "C. 2 x 5 = 12",
    e: "2 x 5 = 10 mới đúng."
  },
  {
    q: "Câu 19. Muốn tính tổng của 4 số 2, ta có thể viết:",
    opts: ["A. 2 x 4", "B. 4 x 2", "C. 2 + 4", "D. 4 + 2"],
    a: "A. 2 x 4",
    e: "Tổng của 4 số 2 tức là 2 được lấy 4 lần -> 2 x 4."
  },
  {
    q: "Câu 20. Nhà Lan có 2 con mèo, mỗi con mèo bắt được 2 con chuột. Hỏi mèo nhà Lan bắt được tất cả bao nhiêu con chuột?",
    opts: ["A. 2 con", "B. 4 con", "C. 6 con", "D. 0 con"],
    a: "B. 4 con",
    e: "Số chuột = 2 (chuột/mèo) x 2 (mèo) = 4 con."
  },
  // --- Phần 2: Câu hỏi Nâng cao (5 câu) ---
  {
    q: "Câu 21. Tìm x biết: 2 x 4 < x < 2 x 6. Biết x là số tròn chục.",
    opts: ["A. 8", "B. 10", "C. 12", "D. 9"],
    a: "B. 10",
    e: "2 x 4 = 8; 2 x 6 = 12. Vậy 8 < x < 12. Số tròn chục trong khoảng này là 10."
  },
  {
    q: "Câu 22. Có một số bao gạo, mỗi bao nặng 2kg. Biết tổng số gạo nặng bằng kết quả của phép tính 15kg + 5kg. Hỏi có bao nhiêu bao gạo?",
    opts: ["A. 5 bao", "B. 8 bao", "C. 10 bao", "D. 20 bao"],
    a: "C. 10 bao",
    e: "Tổng số gạo = 15 + 5 = 20kg. Mỗi bao 2kg. Vì 2 x 10 = 20 nên có 10 bao gạo."
  },
  {
    q: "Câu 23. Nếu thừa số thứ hai tăng thêm 1 đơn vị thì tích của 2 x 5 sẽ tăng thêm bao nhiêu đơn vị?",
    opts: ["A. 1 đơn vị", "B. 2 đơn vị", "C. 5 đơn vị", "D. 10 đơn vị"],
    a: "B. 2 đơn vị",
    e: "2 x 5 = 10. Nếu thừa số thứ hai tăng 1 (thành 6) -> 2 x 6 = 12. 12 - 10 = 2. (Tăng thêm 1 lần số 2)."
  },
  {
    q: "Câu 24. Điền dấu thích hợp: 2 x 3 + 2 ... 2 x 5",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "B. <",
    e: "Vế trái: 2 x 3 + 2 tức là 3 lần số 2 cộng thêm 1 lần số 2 = 4 lần số 2 (2x4). Vế phải là 2x5. Nên 2x4 < 2x5."
  },
  {
    q: "Câu 25. Bạn Hùng viết: 2 x 10 = 10 + 10. Bạn Dũng viết: 2 x 10 = 2 + 10. Ai đúng?",
    opts: ["A. Cả hai đều đúng", "B. Hùng đúng", "C. Dũng đúng", "D. Cả hai đều sai"],
    a: "B. Hùng đúng",
    e: "2 x 10 = 20. Hùng: 10 + 10 = 20 (Đúng, 2 lần số 10). Dũng: 2 + 10 = 12 (Sai)."
  }
];