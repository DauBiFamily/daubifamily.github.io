export const data = [
  // --- Part 1: Basic Questions (20 questions) ---
  {
    q: "Question 1. Calculate: 2 x 5 + 10 =",
    opts: ["A. 15", "B. 25", "C. 20", "D. 30"],
    a: "C. 20",
    e: "2 x 5 = 10. 10 + 10 = 20."
  },
  {
    q: "Question 2. Find the odd number: 2, 4, 6, 9, 10.",
    opts: ["A. 6", "B. 9", "C. 10", "D. 4"],
    a: "B. 9",
    e: "Odd number là số lẻ. 2, 4, 6, 10 là số chẵn. 9 là số lẻ."
  },
  {
    q: "Question 3. There are ... months in a year.",
    opts: ["A. 10", "B. 11", "C. 12", "D. 24"],
    a: "C. 12",
    e: "Có 12 tháng trong một năm."
  },
  {
    q: "Question 4. Choose the correct sign: 35 ... 40 - 5",
    opts: ["A. >", "B. <", "C. =", "D. None"],
    a: "C. =",
    e: "40 - 5 = 35. Vậy hai vế bằng nhau."
  },
  {
    q: "Question 5. 100 minus 30 is ...",
    opts: ["A. 60", "B. 70", "C. 80", "D. 50"],
    a: "B. 70",
    e: "100 - 30 = 70."
  },
  {
    q: "Question 6. A car has 4 wheels. 5 cars have ... wheels.",
    opts: ["A. 9", "B. 16", "C. 20", "D. 25"],
    a: "C. 20",
    e: "4 x 5 = 20 bánh xe."
  },
  {
    q: "Question 7. What is the sum of the largest 1-digit number and the smallest 2-digit number?",
    opts: ["A. 19", "B. 99", "C. 18", "D. 109"],
    a: "A. 19",
    e: "Số lớn nhất có 1 chữ số: 9. Số nhỏ nhất có 2 chữ số: 10. Tổng: 9 + 10 = 19."
  },
  {
    q: "Question 8. Write 'Forty-five' as a number.",
    opts: ["A. 45", "B. 54", "C. 405", "D. 504"],
    a: "A. 45",
    e: "Forty-five là 45."
  },
  {
    q: "Question 9. Which number is missing? 100, 90, 80, ..., 60.",
    opts: ["A. 75", "B. 70", "C. 85", "D. 50"],
    a: "B. 70",
    e: "Đếm lùi 10 (Skip count back by 10). Số thiếu là 70."
  },
  {
    q: "Question 10. Look at the pizza. It is divided into 7 equal parts. One part is eaten. How many parts are left?",
    opts: ["A. 5", "B. 2", "C. 3", "D. 6"],
    a: "D. 6",
    e: "Có 7 phần, ăn 1 phần còn: 7 - 1 = 6 phần.",
    img: "./data/Lop2/ToanTiengAnh/images/de15_q10.png"
  },
  {
    q: "Question 11. Which is not a shape?",
    opts: ["A. Circle", "B. Red", "C. Triangle", "D. Square"],
    a: "B. Red",
    e: "Red (màu đỏ) là màu sắc, không phải hình khối."
  },
  {
    q: "Question 12. 5 boys and 6 girls. How many children in total?",
    opts: ["A. 10", "B. 11", "C. 12", "D. 30"],
    a: "B. 11",
    e: "5 + 6 = 11 trẻ em."
  },
  {
    q: "Question 13. Which equation equals 12?",
    opts: ["A. 2 x 6", "B. 3 x 4", "C. 10 + 2", "D. All of them"],
    a: "D. All of them",
    e: "A, B, C đều có kết quả là 12."
  },
  {
    q: "Question 14. 20 is greater than ...",
    opts: ["A. 25", "B. 30", "C. 19", "D. 100"],
    a: "C. 19",
    e: "20 chỉ lớn hơn 19 trong các đáp án trên."
  },
  {
    q: "Question 15. I have 2 legs. A dog has 4 legs. How many legs do we have together?",
    opts: ["A. 4", "B. 6", "C. 8", "D. 2"],
    a: "B. 6",
    e: "2 + 4 = 6 chân."
  },
  {
    q: "Question 16. What is the value of 5 in number 52?",
    opts: ["A. 5", "B. 50", "C. 52", "D. 2"],
    a: "B. 50",
    e: "Số 5 nằm ở hàng chục, nên có giá trị là 50."
  },
  {
    q: "Question 17. 2 x 0 = ...",
    opts: ["A. 2", "B. 0", "C. 20", "D. 1"],
    a: "B. 0",
    e: "Số nào nhân 0 cũng bằng 0."
  },
  {
    q: "Question 18. Choose the heaviest item.",
    opts: ["A. A feather", "B. A pencil", "C. An elephant", "D. A book"],
    a: "C. An elephant",
    e: "Con voi (Elephant) là nặng nhất."
  },
  {
    q: "Question 19. Sunday, Monday, Tuesday, ... What comes next?",
    opts: ["A. Friday", "B. Thursday", "C. Wednesday", "D. Saturday"],
    a: "C. Wednesday",
    e: "Chủ nhật, Thứ Hai, Thứ Ba... tiếp theo là Thứ Tư (Wednesday)."
  },
  {
    q: "Question 20. 2 + 2 x 3 = ... (Be careful!)",
    opts: ["A. 12", "B. 8", "C. 6", "D. 10"],
    a: "B. 8",
    e: "Thực hiện phép nhân trước: 2 x 3 = 6. Sau đó cộng: 2 + 6 = 8."
  },
  // --- Part 2: Advanced Questions (5 questions) ---
  {
    q: "Question 21. There are 24 candies. Put them into bags of 4. How many bags?",
    opts: ["A. 5", "B. 6", "C. 7", "D. 8"],
    a: "B. 6",
    e: "Đây là phép chia (xếp nhóm): 24 chia 4 (dựa vào 4 x 6 = 24) được 6 túi."
  },
  {
    q: "Question 22. Look at the balance scale. Left: 2 apples. Right: 1 apple + 200g weight. How much does 1 apple weigh?",
    opts: ["A. 100g", "B. 200g", "C. 300g", "D. 400g"],
    a: "B. 200g",
    e: "Bỏ đi 1 quả táo ở mỗi bên, ta còn lại: 1 quả táo bên trái = 200g bên phải. Vậy táo nặng 200g.",
    img: "./data/Lop2/ToanTiengAnh/images/de15_q22.png"
  },
  {
    q: "Question 23. Find the missing number: 5, 8, 11, ..., 17.",
    opts: ["A. 12", "B. 13", "C. 14", "D. 15"],
    a: "C. 14",
    e: "Quy luật cộng thêm 3: 5+3=8, 8+3=11. Số tiếp theo: 11+3=14. Kiểm tra: 14+3=17 (Đúng)."
  },
  {
    q: "Question 24. A red ribbon is 10cm. A blue ribbon is twice as long as the red one. How long is the blue ribbon?",
    opts: ["A. 12 cm", "B. 20 cm", "C. 5 cm", "D. 30 cm"],
    a: "B. 20 cm",
    e: "'Twice' nghĩa là gấp đôi (nhân 2). 10 x 2 = 20 cm."
  },
  {
    q: "Question 25. Think of a number. Double it, then add 2. The answer is 12. What is the number?",
    opts: ["A. 4", "B. 5", "C. 6", "D. 3"],
    a: "B. 5",
    e: "Tính ngược: 12 - 2 = 10. Số nào gấp đôi (nhân 2) được 10? Đó là 5."
  }
];