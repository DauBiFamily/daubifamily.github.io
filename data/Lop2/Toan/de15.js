export const data = [
  // --- Phần 1: Trắc nghiệm cơ bản (20 câu) ---
  {
    q: "Câu 1. 100 được đọc là:",
    opts: ["A. Một không không", "B. Một trăm", "C. Mười chục", "D. Một trăm linh"],
    a: "B. Một trăm",
    e: "Cách đọc số 100 là 'Một trăm'."
  },
  {
    q: "Câu 2. Hiệu của 52 và 18 là:",
    opts: ["A. 44", "B. 34", "C. 36", "D. 70"],
    a: "B. 34",
    e: "Ta đặt tính: 2 không trừ được 8, lấy 12 - 8 = 4, nhớ 1. 1 thêm 1 là 2; 5 - 2 = 3. Kết quả 34."
  },
  {
    q: "Câu 3. Trong phép tính 28 + 14 = 42, số 42 được gọi là:",
    opts: ["A. Số hạng", "B. Hiệu", "C. Tổng", "D. Số trừ"],
    a: "C. Tổng",
    e: "Trong phép cộng, kết quả được gọi là Tổng."
  },
  {
    q: "Câu 4. Điền dấu thích hợp: 35 + 6 ... 40",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "A. >",
    e: "35 + 6 = 41. Vì 41 > 40 nên điền dấu >."
  },
  {
    q: "Câu 5. Đoạn thẳng AB dài 5cm, đoạn thẳng BC dài 4cm. Độ dài đường gấp khúc ABC là:",
    opts: ["A. 1 cm", "B. 9 dm", "C. 9 cm", "D. 20 cm"],
    a: "C. 9 cm",
    e: "Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng: 5 + 4 = 9 (cm).",
    img: "./data/Lop2/Toan/images/de15_cau5.png"
  },
  {
    q: "Câu 6. 71 - 35 = ?",
    opts: ["A. 46", "B. 36", "C. 35", "D. 45"],
    a: "B. 36",
    e: "11 - 5 = 6, nhớ 1. 3 thêm 1 là 4; 7 - 4 = 3. Kết quả là 36."
  },
  {
    q: "Câu 7. Can bé đựng 3 lít mắm, can to đựng nhiều hơn can bé 5 lít. Hỏi can to đựng bao nhiêu lít?",
    opts: ["A. 2 lít", "B. 8 lít", "C. 15 lít", "D. 9 lít"],
    a: "B. 8 lít",
    e: "Bài toán 'nhiều hơn', ta dùng phép cộng: 3 + 5 = 8 (lít)."
  },
  {
    q: "Câu 8. Số thích hợp điền vào dãy số: 5, 10, 15, 20, ..., 30 là:",
    opts: ["A. 21", "B. 22", "C. 25", "D. 29"],
    a: "C. 25",
    e: "Đây là dãy số đếm thêm 5. Số tiếp theo là 20 + 5 = 25."
  },
  {
    q: "Câu 9. Một ngày có bao nhiêu giờ?",
    opts: ["A. 12 giờ", "B. 24 giờ", "C. 10 giờ", "D. 20 giờ"],
    a: "B. 24 giờ",
    e: "Một ngày đêm có 24 giờ."
  },
  {
    q: "Câu 10. Hôm qua là Chủ nhật. Ngày mai là thứ mấy?",
    opts: ["A. Thứ Hai", "B. Thứ Ba", "C. Thứ Tư", "D. Thứ Bảy"],
    a: "B. Thứ Ba",
    e: "Hôm qua là Chủ nhật -> Hôm nay là Thứ Hai -> Ngày mai là Thứ Ba."
  },
  {
    q: "Câu 11. Phép tính 9 + 7 có kết quả bằng phép tính nào?",
    opts: ["A. 8 + 6", "B. 8 + 8", "C. 10 + 5", "D. 20 - 5"],
    a: "B. 8 + 8",
    e: "9 + 7 = 16. Kiểm tra các đáp án: A=14, B=16, C=15, D=15. Vậy chọn B."
  },
  {
    q: "Câu 12. Bình thứ nhất có 5 lít dầu, bình thứ hai có 3 lít dầu. Cả hai bình có bao nhiêu lít?",
    opts: ["A. 2 lít", "B. 8 lít", "C. 15 lít", "D. 12 lít"],
    a: "B. 8 lít",
    e: "Tổng số lít dầu: 5 + 3 = 8 (lít).",
    img: "./data/Lop2/Toan/images/de15_cau12.png"
  },
  {
    q: "Câu 13. Tìm y, biết: y - 16 = 25",
    opts: ["A. y = 9", "B. y = 31", "C. y = 41", "D. y = 39"],
    a: "C. y = 41",
    e: "y là số bị trừ. Muốn tìm số bị trừ ta lấy Hiệu cộng Số trừ: 25 + 16 = 41."
  },
  {
    q: "Câu 14. Bố 38 tuổi, con 8 tuổi. Bố hơn con bao nhiêu tuổi?",
    opts: ["A. 46 tuổi", "B. 30 tuổi", "C. 31 tuổi", "D. 20 tuổi"],
    a: "B. 30 tuổi",
    e: "Muốn tìm bố hơn con bao nhiêu, ta dùng phép trừ: 38 - 8 = 30 (tuổi)."
  },
  {
    q: "Câu 15. Số 65 gồm:",
    opts: ["A. 6 chục và 5 đơn vị", "B. 60 chục và 5 đơn vị", "C. 5 chục và 6 đơn vị", "D. 6 và 5"],
    a: "A. 6 chục và 5 đơn vị",
    e: "Số 65 có chữ số hàng chục là 6, hàng đơn vị là 5."
  },
  {
    q: "Câu 16. 2 dm 5 cm = ... cm. Số cần điền là:",
    opts: ["A. 7", "B. 25", "C. 52", "D. 205"],
    a: "B. 25",
    e: "2 dm = 20 cm. Vậy 2 dm 5 cm = 20 + 5 = 25 cm."
  },
  {
    q: "Câu 17. Trong các số 12, 88, 54, 90. Số lớn nhất là:",
    opts: ["A. 12", "B. 88", "C. 54", "D. 90"],
    a: "D. 90",
    e: "So sánh hàng chục: 9 là lớn nhất nên 90 lớn nhất."
  },
  {
    q: "Câu 18. Lan hái được 24 bông hoa, Mai hái được ít hơn Lan 6 bông. Mai hái được:",
    opts: ["A. 30 bông", "B. 18 bông", "C. 28 bông", "D. 20 bông"],
    a: "B. 18 bông",
    e: "Mai hái ít hơn nên làm phép trừ: 24 - 6 = 18 (bông)."
  },
  {
    q: "Câu 19. Hình nào không phải là khối trụ?",
    opts: ["A. Lon nước ngọt", "B. Hộp phấn viết bảng", "C. Viên bi", "D. Hộp sữa ông Thọ"],
    a: "C. Viên bi",
    e: "Viên bi có dạng khối cầu, không phải khối trụ."
  },
  {
    q: "Câu 20. Có bao nhiêu hình tam giác trong hình vẽ (hình ảnh minh họa)?",
    opts: ["A. 2", "B. 3", "C. 4", "D. 5"],
    a: "B. 3",
    e: "Gồm 2 hình tam giác nhỏ và 1 hình tam giác to ghép lại. Tổng là 3.",
    img: "./data/Lop2/Toan/images/de15_cau20.png"
  },
  // --- Phần 2: Câu hỏi Nâng cao (5 câu) ---
  {
    q: "Câu 21. Tổng của hai số là 60. Nếu tăng số hạng thứ nhất thêm 5 đơn vị và giữ nguyên số hạng thứ hai thì tổng mới là bao nhiêu?",
    opts: ["A. 60", "B. 55", "C. 65", "D. 70"],
    a: "C. 65",
    e: "Trong một tổng, nếu một số hạng tăng bao nhiêu đơn vị thì tổng tăng bấy nhiêu. 60 + 5 = 65."
  },
  {
    q: "Câu 22. Tìm một số, biết rằng lấy số đó cộng với 15 rồi trừ đi 8 thì được kết quả là 20.",
    opts: ["A. 13", "B. 27", "C. 35", "D. 12"],
    a: "A. 13",
    e: "Ta tính ngược từ cuối lên: 20 + 8 = 28. Sau đó 28 - 15 = 13. Vậy số cần tìm là 13."
  },
  {
    q: "Câu 23. Mẹ đi chợ mua 3 chục quả trứng. Mẹ biếu bà 10 quả. Mẹ nấu ăn hết 5 quả. Hỏi mẹ còn lại bao nhiêu quả trứng?",
    opts: ["A. 15 quả", "B. 20 quả", "C. 25 quả", "D. 10 quả"],
    a: "A. 15 quả",
    e: "3 chục = 30. Mẹ còn lại: 30 - 10 - 5 = 15 (quả)."
  },
  {
    q: "Câu 24. Từ 3 chữ số: 0, 5, 8. Có thể lập được bao nhiêu số có hai chữ số khác nhau?",
    opts: ["A. 3 số", "B. 4 số", "C. 5 số", "D. 6 số"],
    a: "B. 4 số",
    e: "Các số lập được là: 50, 58, 80, 85. (Lưu ý 0 không đứng đầu được). Vậy có 4 số."
  },
  {
    q: "Câu 25. An có nhiều hơn Bình 10 viên bi. Nếu An cho Bình 4 viên bi thì An còn nhiều hơn Bình bao nhiêu viên bi?",
    opts: ["A. 6 viên", "B. 2 viên", "C. 4 viên", "D. 14 viên"],
    a: "B. 2 viên",
    e: "An mất đi 4, Bình nhận thêm 4. Khoảng cách thu hẹp: 10 - 4 - 4 = 2 viên. (Ví dụ: An 20, Bình 10 -> An cho 4 còn 16, Bình nhận 4 thành 14. 16 - 14 = 2)."
  }
];