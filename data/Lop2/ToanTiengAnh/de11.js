export const data = [
  // --- Part 1: Basic Questions (20 questions) ---
  {
    q: "Question 1. 2 + 2 + 2 + 2 can be written as:",
    opts: ["A. 2 x 4", "B. 4 + 2", "C. 2 x 5", "D. 4 x 4"],
    a: "A. 2 x 4",
    e: "Số 2 được cộng 4 lần, nên viết thành phép nhân 2 x 4."
  },
  {
    q: "Question 2. What is the product of 2 and 5?",
    opts: ["A. 7", "B. 10", "C. 3", "D. 12"],
    a: "B. 10",
    e: "'Product' là tích. 2 x 5 = 10."
  },
  {
    q: "Question 3. Which number makes the sentence true: 2 x ... = 14",
    opts: ["A. 6", "B. 8", "C. 7", "D. 5"],
    a: "C. 7",
    e: "Theo bảng nhân 2: 2 x 7 = 14."
  },
  {
    q: "Question 4. How many legs do 6 chickens have?",
    opts: ["A. 10", "B. 12", "C. 8", "D. 14"],
    a: "B. 12",
    e: "Mỗi con gà có 2 chân. 6 con gà: 2 x 6 = 12 chân."
  },
  {
    q: "Question 5. Look at the picture. How many ducks in total?",
    opts: ["A. 6", "B. 4", "C. 8", "D. 10"],
    a: "C. 8",
    e: "Có 4 nhóm, mỗi nhóm 2 con vịt. 2 x 4 = 8 con vịt.",
    img: "./data/Lop2/ToanTiengAnh/images/de11_q5.png"
  },
  {
    q: "Question 6. 2 multiplied by 8 equals...",
    opts: ["A. 16", "B. 10", "C. 18", "D. 14"],
    a: "A. 16",
    e: "2 x 8 = 16."
  },
  {
    q: "Question 7. Fill in the blank: 2, 4, 6, ..., 10.",
    opts: ["A. 7", "B. 8", "C. 9", "D. 5"],
    a: "B. 8",
    e: "Dãy số đếm thêm 2 (Skip counting by 2). Số còn thiếu là 8."
  },
  {
    q: "Question 8. Which expression is equal to 2 x 3?",
    opts: ["A. 2 + 3", "B. 3 + 3", "C. 2 + 2 + 2", "D. Both B and C"],
    a: "D. Both B and C",
    e: "2 x 3 bằng 6. 3 + 3 = 6 và 2 + 2 + 2 = 6. Nên cả B và C đều đúng."
  },
  {
    q: "Question 9. Double of 6 is...",
    opts: ["A. 12", "B. 14", "C. 8", "D. 10"],
    a: "A. 12",
    e: "'Double' là gấp đôi (nhân 2). 6 x 2 = 12."
  },
  {
    q: "Question 10. There are 2 shoes in a pair. How many shoes in 9 pairs?",
    opts: ["A. 11", "B. 18", "C. 20", "D. 16"],
    a: "B. 18",
    e: "2 x 9 = 18 chiếc giày."
  },
  {
    q: "Question 11. 2 times 10 is...",
    opts: ["A. 12", "B. 20", "C. 22", "D. 10"],
    a: "B. 20",
    e: "2 x 10 = 20."
  },
  {
    q: "Question 12. Compare: 2 x 6 ... 15",
    opts: ["A. >", "B. <", "C. =", "D. Not sure"],
    a: "B. <",
    e: "2 x 6 = 12. Vì 12 nhỏ hơn 15 nên điền dấu <."
  },
  {
    q: "Question 13. Which multiplication fact equals 4?",
    opts: ["A. 2 x 1", "B. 2 x 3", "C. 2 x 2", "D. 2 x 4"],
    a: "C. 2 x 2",
    e: "2 x 2 = 4."
  },
  {
    q: "Question 14. A bicycle has 2 wheels. 5 bicycles have ... wheels.",
    opts: ["A. 7", "B. 10", "C. 12", "D. 52"],
    a: "B. 10",
    e: "Số bánh xe: 2 x 5 = 10."
  },
  {
    q: "Question 15. What is the missing factor? ... x 2 = 18",
    opts: ["A. 8", "B. 9", "C. 7", "D. 6"],
    a: "B. 9",
    e: "Mấy nhân 2 bằng 18? Đó là 9."
  },
  {
    q: "Question 16. The sum of 2 and 2 and 2 is same as:",
    opts: ["A. 2 x 2", "B. 2 x 3", "C. 2 x 4", "D. 3 x 3"],
    a: "B. 2 x 3",
    e: "Tổng của ba số 2 bằng 2 x 3."
  },
  {
    q: "Question 17. Which is the smallest product in the 2 times table?",
    opts: ["A. 2", "B. 4", "C. 0", "D. 1"],
    a: "C. 0",
    e: "Tích nhỏ nhất là 2 x 0 = 0 (Nếu chỉ học bảng từ 1 thì là 2, nhưng tổng quát là 0)."
  },
  {
    q: "Question 18. 2 weeks have ... days.",
    opts: ["A. 10", "B. 12", "C. 14", "D. 7"],
    a: "C. 14",
    e: "1 tuần có 7 ngày. 2 tuần là 7 x 2 = 14 ngày."
  },
  {
    q: "Question 19. If 2 x A = 16, then A is...",
    opts: ["A. 6", "B. 7", "C. 8", "D. 9"],
    a: "C. 8",
    e: "2 x 8 = 16."
  },
  {
    q: "Question 20. Choose the incorrect sentence.",
    opts: ["A. 2 x 5 = 10", "B. 2 x 7 = 14", "C. 2 x 9 = 19", "D. 2 x 3 = 6"],
    a: "C. 2 x 9 = 19",
    e: "Câu sai là C vì 2 x 9 = 18."
  },
  // --- Part 2: Advanced Questions (5 questions) ---
  {
    q: "Question 21. Mary has 2 bags. Each bag has 5 red balls and 2 blue balls. How many balls does she have in total?",
    opts: ["A. 10", "B. 14", "C. 7", "D. 12"],
    a: "B. 14",
    e: "Mỗi túi có 5 + 2 = 7 quả bóng. 2 túi có 7 x 2 = 14 quả."
  },
  {
    q: "Question 22. I am thinking of a number. If you multiply it by 2, you get the number of hours in a day. What is my number?",
    opts: ["A. 10", "B. 12", "C. 24", "D. 11"],
    a: "B. 12",
    e: "Số giờ trong ngày là 24. Số nào nhân 2 bằng 24? Đó là 12."
  },
  {
    q: "Question 23. Find the pattern: 4, 8, 12, ..., 20.",
    opts: ["A. 14", "B. 15", "C. 16", "D. 18"],
    a: "C. 16",
    e: "Dãy số cộng thêm 4 (hoặc 4 lần lượt nhân 1, 2, 3, 4, 5). Số thiếu là 16."
  },
  {
    q: "Question 24. Which is greater: 2 x 8 or 3 x 5?",
    opts: ["A. 2 x 8", "B. 3 x 5", "C. Equal", "D. Impossible"],
    a: "A. 2 x 8",
    e: "2 x 8 = 16. 3 x 5 = 15. Vậy 16 > 15."
  },
  {
    q: "Question 25. There are 10 students. Each student has 2 pencils. If 3 students lose their pencils, how many pencils are left?",
    opts: ["A. 17", "B. 20", "C. 14", "D. 16"],
    a: "C. 14",
    e: "Tổng số bút ban đầu: 10 x 2 = 20. 3 học sinh mất bút (tức là mất 3 x 2 = 6 bút). Còn lại: 20 - 6 = 14."
  }
];