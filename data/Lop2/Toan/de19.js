export const data = [
  // --- Phần 1: Trắc nghiệm cơ bản (20 câu) ---
  {
    q: "Câu 1. Thừa số thứ nhất là 5, thừa số thứ hai là 9. Tích là:",
    opts: ["A. 14", "B. 40", "C. 45", "D. 59"],
    a: "C. 45",
    e: "5 x 9 = 45."
  },
  {
    q: "Câu 2. Phép tính nào có kết quả bằng 10?",
    opts: ["A. 5 x 3", "B. 2 x 5", "C. 2 x 4", "D. 5 + 2"],
    a: "B. 2 x 5",
    e: "2 x 5 = 10 (và 5 x 2 = 10)."
  },
  {
    q: "Câu 3. 5 kg x 4 = ...",
    opts: ["A. 20", "B. 20 kg", "C. 9 kg", "D. 25 kg"],
    a: "B. 20 kg",
    e: "5 x 4 = 20, thêm đơn vị kg."
  },
  {
    q: "Câu 4. Điền số vào chỗ chấm: 2 x ... = 18",
    opts: ["A. 8", "B. 9", "C. 7", "D. 6"],
    a: "B. 9",
    e: "Dựa vào bảng nhân 2: 2 x 9 = 18."
  },
  {
    q: "Câu 5. Có 10 chiếc đũa. Hỏi có bao nhiêu đôi đũa?",
    opts: ["A. 2 đôi", "B. 5 đôi", "C. 20 đôi", "D. 8 đôi"],
    a: "B. 5 đôi",
    e: "Mỗi đôi có 2 chiếc. Ta nhẩm 2 x 5 = 10. Vậy có 5 đôi."
  },
  {
    q: "Câu 6. 5 x 5 + 10 = ?",
    opts: ["A. 35", "B. 15", "C. 25", "D. 30"],
    a: "A. 35",
    e: "5 x 5 = 25; 25 + 10 = 35."
  },
  {
    q: "Câu 7. Một can dầu chứa 5 lít. Hỏi 7 can dầu như thế chứa bao nhiêu lít?",
    opts: ["A. 12 lít", "B. 30 lít", "C. 35 lít", "D. 40 lít"],
    a: "C. 35 lít",
    e: "5 x 7 = 35 (lít)."
  },
  {
    q: "Câu 8. Tìm x: x - 15 = 5 x 3",
    opts: ["A. x = 15", "B. x = 0", "C. x = 30", "D. x = 20"],
    a: "C. x = 30",
    e: "Tính vế phải trước: 5 x 3 = 15. Vậy x - 15 = 15. x = 15 + 15 = 30."
  },
  {
    q: "Câu 9. Đoạn thẳng AB dài 10cm được chia làm 5 đoạn thẳng nhỏ bằng nhau (như hình vẽ). Mỗi đoạn nhỏ dài bao nhiêu?",
    opts: ["A. 5 cm", "B. 2 cm", "C. 1 cm", "D. 10 cm"],
    a: "B. 2 cm",
    e: "Ta có phép nhân 2 x 5 = 10. Vậy mỗi đoạn dài 2cm.",
    img: "./data/Lop2/Toan/images/de19_cau9.png"
  },
  {
    q: "Câu 10. Trong các số sau, số nào không thuộc dãy số đếm thêm 5?",
    opts: ["A. 15", "B. 25", "C. 33", "D. 40"],
    a: "C. 33",
    e: "Các số đếm thêm 5 (tích của 5) luôn tận cùng là 0 hoặc 5. Số 33 không thỏa mãn."
  },
  {
    q: "Câu 11. Lan gấp được 5 con hạc giấy. Hồng gấp được số hạc giấy gấp 3 lần Lan. Hồng gấp được:",
    opts: ["A. 8 con", "B. 15 con", "C. 10 con", "D. 20 con"],
    a: "B. 15 con",
    e: "Số hạc của Hồng = 5 x 3 = 15 (con)."
  },
  {
    q: "Câu 12. Phép tính 2 x 0 có kết quả là:",
    opts: ["A. 2", "B. 0", "C. 20", "D. 1"],
    a: "B. 0",
    e: "Số nào nhân với 0 cũng bằng 0."
  },
  {
    q: "Câu 13. Tính chu vi hình tam giác có 3 cạnh đều bằng 2dm.",
    opts: ["A. 6 dm", "B. 5 dm", "C. 8 dm", "D. 6 cm"],
    a: "A. 6 dm",
    e: "Chu vi = 2 x 3 = 6 (dm)."
  },
  {
    q: "Câu 14. Chọn dấu thích hợp: 5 x 4 ... 2 x 9",
    opts: ["A. >", "B. <", "C. =", "D. Không so sánh được"],
    a: "A. >",
    e: "5 x 4 = 20; 2 x 9 = 18. Vì 20 > 18 nên chọn >."
  },
  {
    q: "Câu 15. Một ngày mẹ làm việc 8 giờ. Hỏi trong 5 ngày mẹ làm việc bao nhiêu giờ?",
    opts: ["A. 13 giờ", "B. 35 giờ", "C. 40 giờ", "D. 45 giờ"],
    a: "C. 40 giờ",
    e: "8 x 5 = 40 (giờ). (Học sinh có thể nhẩm bảng cửu chương 5: 5 x 8 = 40)."
  },
  {
    q: "Câu 16. Số hạng thứ nhất là tích của 2 và 3. Số hạng thứ hai là 4. Tổng là:",
    opts: ["A. 10", "B. 9", "C. 6", "D. 12"],
    a: "A. 10",
    e: "Số hạng thứ nhất: 2 x 3 = 6. Tổng: 6 + 4 = 10."
  },
  {
    q: "Câu 17. 2 cm x 8 + 4 cm = ?",
    opts: ["A. 16 cm", "B. 20", "C. 20 cm", "D. 24 cm"],
    a: "C. 20 cm",
    e: "2 x 8 = 16cm; 16 + 4 = 20cm."
  },
  {
    q: "Câu 18. Lớp 2A xếp thành 4 hàng, mỗi hàng có 5 bạn nam. Hỏi lớp 2A có bao nhiêu bạn nam?",
    opts: ["A. 9 bạn", "B. 20 bạn", "C. 25 bạn", "D. 15 bạn"],
    a: "B. 20 bạn",
    e: "Số bạn nam = 5 x 4 = 20 (bạn)."
  },
  {
    q: "Câu 19. Kết quả phép tính nào lớn nhất?",
    opts: ["A. 2 x 8", "B. 5 x 3", "C. 2 x 7", "D. 5 x 2"],
    a: "A. 2 x 8",
    e: "A=16, B=15, C=14, D=10. Lớn nhất là 16."
  },
  {
    q: "Câu 20. Đổi: 2 dm x 5 = ... cm",
    opts: ["A. 10", "B. 10 cm", "C. 100 cm", "D. 50 cm"],
    a: "C. 100 cm",
    e: "2 dm x 5 = 10 dm. Đổi 10 dm = 100 cm."
  },
  // --- Phần 2: Câu hỏi Nâng cao (5 câu) ---
  {
    q: "Câu 21. Quan sát hình ảnh (5 lọ hoa, mỗi lọ 5 bông). Nếu lấy bớt đi mỗi lọ 2 bông hoa thì còn lại tất cả bao nhiêu bông hoa?",
    opts: ["A. 15 bông", "B. 10 bông", "C. 25 bông", "D. 20 bông"],
    a: "A. 15 bông",
    e: "Cách 1: Tổng ban đầu 5x5=25. Lấy đi 2x5=10. Còn 25-10=15. Cách 2: Mỗi lọ còn 3 bông. 3x5=15.",
    img: "./data/Lop2/Toan/images/de19_cau21.png"
  },
  {
    q: "Câu 22. Tìm một số, biết số đó cộng với tích của 2 và 5 thì bằng 50.",
    opts: ["A. 40", "B. 30", "C. 60", "D. 10"],
    a: "A. 40",
    e: "Tích của 2 và 5 là 10. Số cần tìm + 10 = 50. Số đó là 50 - 10 = 40."
  },
  {
    q: "Câu 23. An mua 5 cái bút chì, mỗi cái giá 2 nghìn đồng. An đưa cô bán hàng tờ 20 nghìn đồng. Hỏi cô bán hàng trả lại An bao nhiêu tiền?",
    opts: ["A. 10 nghìn đồng", "B. 12 nghìn đồng", "C. 8 nghìn đồng", "D. 5 nghìn đồng"],
    a: "A. 10 nghìn đồng",
    e: "Tiền mua bút: 2 x 5 = 10 (nghìn). Tiền trả lại: 20 - 10 = 10 (nghìn)."
  },
  {
    q: "Câu 24. Điền số thích hợp: 5 x 3 < 5 x ... < 5 x 5",
    opts: ["A. 3", "B. 4", "C. 5", "D. 6"],
    a: "B. 4",
    e: "Giữa 3 và 5 là số 4. Kiểm tra: 15 < 20 < 25 (Đúng)."
  },
  {
    q: "Câu 25. Có một thanh gỗ dài 40cm. Bố em cưa thanh gỗ thành các đoạn dài 5cm. Hỏi bố phải cưa bao nhiêu lần?",
    opts: ["A. 8 lần", "B. 7 lần", "C. 6 lần", "D. 9 lần"],
    a: "B. 7 lần",
    e: "Số đoạn gỗ là 40 : 5 = 8 (đoạn). Số lần cưa luôn ít hơn số đoạn là 1. Vậy cần 7 lần cưa."
  }
];