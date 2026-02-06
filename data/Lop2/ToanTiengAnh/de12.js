export const data = [
  // --- Part 1: Basic Questions (20 questions) ---
  {
    q: "Question 1. 5 x 3 = ...",
    opts: ["A. 10", "B. 15", "C. 20", "D. 8"],
    a: "B. 15",
    e: "5 nhân 3 bằng 15."
  },
  {
    q: "Question 2. Count by 5s: 5, 10, 15, 20, ..., 30.",
    opts: ["A. 21", "B. 22", "C. 25", "D. 24"],
    a: "C. 25",
    e: "Đếm nhảy 5 (Skip count by 5). Số tiếp theo là 25."
  },
  {
    q: "Question 3. How many fingers on 3 hands?",
    opts: ["A. 10", "B. 15", "C. 20", "D. 12"],
    a: "B. 15",
    e: "Mỗi bàn tay 5 ngón. 3 bàn tay: 5 x 3 = 15 ngón."
  },
  {
    q: "Question 4. What is 5 times 6?",
    opts: ["A. 30", "B. 35", "C. 25", "D. 36"],
    a: "A. 30",
    e: "5 x 6 = 30."
  },
  {
    q: "Question 5. 5 x 8 = ...",
    opts: ["A. 35", "B. 45", "C. 40", "D. 50"],
    a: "C. 40",
    e: "5 x 8 = 40."
  },
  {
    q: "Question 6. There are 5 flowers in each vase. How many flowers in 5 vases?",
    opts: ["A. 10", "B. 20", "C. 25", "D. 15"],
    a: "C. 25",
    e: "5 x 5 = 25 bông hoa.",
    img: "./data/Lop2/ToanTiengAnh/images/de12_q6.png"
  },
  {
    q: "Question 7. Which number is in the 5 times table?",
    opts: ["A. 12", "B. 23", "C. 35", "D. 18"],
    a: "C. 35",
    e: "Các số trong bảng nhân 5 luôn tận cùng là 0 hoặc 5. Chọn 35."
  },
  {
    q: "Question 8. 5 multiplied by what number equals 45?",
    opts: ["A. 8", "B. 9", "C. 7", "D. 6"],
    a: "B. 9",
    e: "5 x 9 = 45."
  },
  {
    q: "Question 9. 5 nickels make ... cents. (1 nickel = 5 cents)",
    opts: ["A. 10", "B. 20", "C. 25", "D. 50"],
    a: "C. 25",
    e: "5 x 5 = 25 cents."
  },
  {
    q: "Question 10. Compare: 5 x 4 ... 2 x 10",
    opts: ["A. >", "B. <", "C. =", "D. None"],
    a: "C. =",
    e: "5 x 4 = 20. 2 x 10 = 20. Hai vế bằng nhau."
  },
  {
    q: "Question 11. Which shows 5 + 5 + 5 + 5?",
    opts: ["A. 5 x 4", "B. 5 x 5", "C. 4 x 4", "D. 5 + 4"],
    a: "A. 5 x 4",
    e: "5 được cộng 4 lần, viết là 5 x 4."
  },
  {
    q: "Question 12. 5 x 10 = ...",
    opts: ["A. 15", "B. 50", "C. 51", "D. 100"],
    a: "B. 50",
    e: "5 x 10 = 50."
  },
  {
    q: "Question 13. A star has 5 points. How many points do 4 stars have?",
    opts: ["A. 9", "B. 20", "C. 25", "D. 15"],
    a: "B. 20",
    e: "5 x 4 = 20 cánh sao."
  },
  {
    q: "Question 14. 5 x 0 = ...",
    opts: ["A. 5", "B. 0", "C. 10", "D. 1"],
    a: "B. 0",
    e: "Số nào nhân với 0 cũng bằng 0."
  },
  {
    q: "Question 15. Find the product of 5 and 7.",
    opts: ["A. 35", "B. 30", "C. 40", "D. 25"],
    a: "A. 35",
    e: "5 x 7 = 35."
  },
  {
    q: "Question 16. If today is Monday. In 5 weeks, it will be...",
    opts: ["A. Sunday", "B. Monday", "C. Tuesday", "D. Friday"],
    a: "B. Monday",
    e: "Sau đúng 1 tuần (7 ngày) thì lặp lại thứ đó. Sau 5 tuần vẫn là thứ Hai (Monday)."
  },
  {
    q: "Question 17. 40 is the product of 5 and ...",
    opts: ["A. 6", "B. 7", "C. 8", "D. 9"],
    a: "C. 8",
    e: "5 x 8 = 40."
  },
  {
    q: "Question 18. Each pack has 5 pencils. Mom buys 2 packs. How many pencils?",
    opts: ["A. 7", "B. 10", "C. 15", "D. 5"],
    a: "B. 10",
    e: "5 x 2 = 10 chiếc bút."
  },
  {
    q: "Question 19. 5 x 5 is equal to:",
    opts: ["A. 20 + 5", "B. 30 - 5", "C. 10 + 10", "D. Both A and B"],
    a: "D. Both A and B",
    e: "5 x 5 = 25. A: 20+5=25. B: 30-5=25. Cả A và B đều đúng."
  },
  {
    q: "Question 20. 10 divided by 5 is...",
    opts: ["A. 5", "B. 2", "C. 10", "D. 50"],
    a: "B. 2",
    e: "10 chia 5 bằng 2 (vì 5 x 2 = 10)."
  },
  // --- Part 2: Advanced Questions (5 questions) ---
  {
    q: "Question 21. There are 5 boxes. Each box has 5 red cars and 5 blue cars. How many cars in total?",
    opts: ["A. 25", "B. 50", "C. 10", "D. 15"],
    a: "B. 50",
    e: "Mỗi hộp có 5+5=10 xe. 5 hộp có 10 x 5 = 50 xe."
  },
  {
    q: "Question 22. What number is 5 less than the product of 5 and 6?",
    opts: ["A. 25", "B. 30", "C. 35", "D. 20"],
    a: "A. 25",
    e: "Tích của 5 và 6 là 30. Kém 5 đơn vị là: 30 - 5 = 25."
  },
  {
    q: "Question 23. A spider has 8 legs. An ant has 6 legs. Which has more legs: 5 ants or 3 spiders?",
    opts: ["A. 5 ants", "B. 3 spiders", "C. Equal", "D. Not sure"],
    a: "A. 5 ants",
    e: "5 kiến: 5 x 6 = 30 chân. 3 nhện: 3 x 8 = 24 chân. Vậy 5 con kiến có nhiều chân hơn."
  },
  {
    q: "Question 24. If A x 5 = 15 and B x 2 = 10. What is A + B?",
    opts: ["A. 5", "B. 8", "C. 10", "D. 7"],
    a: "B. 8",
    e: "A = 3 (vì 3x5=15). B = 5 (vì 5x2=10). A + B = 3 + 5 = 8."
  },
  {
    q: "Question 25. Which number is NOT in the 5 times table?",
    opts: ["A. 15", "B. 30", "C. 45", "D. 51"],
    a: "D. 51",
    e: "Các số trong bảng nhân 5 tận cùng là 0 hoặc 5. Số 51 không thỏa mãn."
  }
];