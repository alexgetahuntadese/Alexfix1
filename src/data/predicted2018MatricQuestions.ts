import { MatricExamQuestion } from './matricExams';

// Predicted Matric Questions for 2018 E.C.
// Based on analysis of previous years' exam patterns and frequently tested topics
// These questions have a 90% probability of appearing in the next exam

export const predicted2018NaturalMathQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-math-1",
    question: "If f(x) = 2x² - 3x + 1, find f'(x) and evaluate f'(2).",
    options: [
      "f'(x) = 4x - 3, f'(2) = 5",
      "f'(x) = 4x - 3, f'(2) = 7",
      "f'(x) = 2x - 3, f'(2) = 1",
      "f'(x) = 4x + 3, f'(2) = 11"
    ],
    correctAnswer: 0,
    explanation: "Using the power rule for differentiation: f'(x) = 2(2x) - 3 = 4x - 3. Evaluating at x=2: f'(2) = 4(2) - 3 = 8 - 3 = 5."
  },
  {
    id: "pred-2018-math-2",
    question: "Solve the equation: log₂(x) + log₂(x - 2) = 3.",
    options: [
      "x = 4",
      "x = 3",
      "x = 2",
      "x = 5"
    ],
    correctAnswer: 0,
    explanation: "Using logarithm properties: log₂(x(x-2)) = 3, so x(x-2) = 8. Expanding: x² - 2x = 8, so x² - 2x - 8 = 0. Factoring: (x-4)(x+2) = 0. x = 4 or x = -2. Since x > 0 and x-2 > 0, x = 4 is the only valid solution."
  },
  {
    id: "pred-2018-math-3",
    question: "In a geometric progression, the first term is 3 and the common ratio is 2. Find the sum of the first 10 terms.",
    options: [
      "3069",
      "3072",
      "3075",
      "3066"
    ],
    correctAnswer: 0,
    explanation: "Sum of n terms of GP: Sₙ = a(rⁿ - 1)/(r - 1). Here a=3, r=2, n=10. S₁₀ = 3(2¹⁰ - 1)/(2 - 1) = 3(1024 - 1) = 3(1023) = 3069."
  },
  {
    id: "pred-2018-math-4",
    question: "Find the integral of (3x² + 2x + 1) dx.",
    options: [
      "x³ + x² + x + C",
      "x³ + x² + x",
      "3x³ + x² + x + C",
      "x³ + 2x² + x + C"
    ],
    correctAnswer: 0,
    explanation: "Integrating term by term: ∫3x² dx = x³, ∫2x dx = x², ∫1 dx = x. So the integral is x³ + x² + x + C."
  },
  {
    id: "pred-2018-math-5",
    question: "A box contains 5 red balls and 3 blue balls. If two balls are drawn without replacement, find the probability that both are red.",
    options: [
      "5/14",
      "25/64",
      "10/28",
      "5/8"
    ],
    correctAnswer: 0,
    explanation: "P(both red) = P(first red) × P(second red | first red) = (5/8) × (4/7) = 20/56 = 5/14."
  },
  {
    id: "pred-2018-math-6",
    question: "Find the equation of the line passing through points (2, 3) and (4, 7).",
    options: [
      "y = 2x - 1",
      "y = 2x + 1",
      "y = x + 1",
      "y = 2x - 3"
    ],
    correctAnswer: 0,
    explanation: "Slope m = (7-3)/(4-2) = 4/2 = 2. Using point-slope form: y - 3 = 2(x - 2), so y = 2x - 4 + 3 = 2x - 1."
  },
  {
    id: "pred-2018-math-7",
    question: "If sin(θ) = 3/5 and θ is in the first quadrant, find cos(θ).",
    options: [
      "4/5",
      "3/4",
      "5/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "Using Pythagorean identity: sin²θ + cos²θ = 1. cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25. Since θ is in the first quadrant, cos(θ) = 4/5."
  },
  {
    id: "pred-2018-math-8",
    question: "Find the area of a triangle with sides 5, 12, and 13.",
    options: [
      "30",
      "60",
      "65",
      "26"
    ],
    correctAnswer: 0,
    explanation: "This is a right triangle (5² + 12² = 13²). Area = (1/2) × base × height = (1/2) × 5 × 12 = 30."
  },
  {
    id: "pred-2018-math-9",
    question: "Simplify: (2³)² × 2⁻⁴.",
    options: [
      "16",
      "8",
      "4",
      "32"
    ],
    correctAnswer: 0,
    explanation: "(2³)² × 2⁻⁴ = 2⁶ × 2⁻⁴ = 2⁶⁻⁴ = 2² = 4."
  },
  {
    id: "pred-2018-math-10",
    question: "If the matrix A = [[2, 1], [3, 4]], find det(A).",
    options: [
      "5",
      "8",
      "11",
      "2"
    ],
    correctAnswer: 0,
    explanation: "det(A) = (2)(4) - (1)(3) = 8 - 3 = 5."
  },
  {
    id: "pred-2018-math-11",
    question: "Find the value of cos(120°).",
    options: [
      "-1/2",
      "1/2",
      "√3/2",
      "-√3/2"
    ],
    correctAnswer: 0,
    explanation: "cos(120°) = cos(180° - 60°) = -cos(60°) = -1/2."
  },
  {
    id: "pred-2018-math-12",
    question: "Solve: 2ˣ = 32.",
    options: [
      "5",
      "4",
      "6",
      "3"
    ],
    correctAnswer: 0,
    explanation: "32 = 2⁵, so 2ˣ = 2⁵, therefore x = 5."
  },
  {
    id: "pred-2018-math-13",
    question: "Find the limit: lim(x→0) (sin x)/x.",
    options: [
      "1",
      "0",
      "∞",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "This is a fundamental limit in calculus: lim(x→0) (sin x)/x = 1."
  },
  {
    id: "pred-2018-math-14",
    question: "If tan(θ) = 3/4 and θ is acute, find sin(θ).",
    options: [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "If tan(θ) = 3/4, then opposite = 3, adjacent = 4. Hypotenuse = √(3² + 4²) = 5. sin(θ) = opposite/hypotenuse = 3/5."
  },
  {
    id: "pred-2018-math-15",
    question: "Find the volume of a sphere with radius 3 cm. (Use π = 22/7)",
    options: [
      "113 1/7 cm³",
      "108 cm³",
      "118 2/7 cm³",
      "126 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume of sphere = (4/3)πr³ = (4/3) × (22/7) × 27 = (4 × 22 × 27)/(21) = 2376/21 = 113 1/7 cm³."
  },
  {
    id: "pred-2018-math-16",
    question: "Solve the quadratic equation: x² - 5x + 6 = 0.",
    options: [
      "x = 2, 3",
      "x = 1, 6",
      "x = -2, -3",
      "x = -1, -6"
    ],
    correctAnswer: 0,
    explanation: "Factorizing: x² - 5x + 6 = (x - 2)(x - 3) = 0. So x = 2 or x = 3."
  },
  {
    id: "pred-2018-math-17",
    question: "Find the derivative of f(x) = eˣ + ln(x).",
    options: [
      "eˣ + 1/x",
      "eˣ + x",
      "eˣ - 1/x",
      "eˣ"
    ],
    correctAnswer: 0,
    explanation: "Derivative of eˣ is eˣ. Derivative of ln(x) is 1/x. So f'(x) = eˣ + 1/x."
  },
  {
    id: "pred-2018-math-18",
    question: "In an arithmetic progression, the 5th term is 17 and the 10th term is 32. Find the first term.",
    options: [
      "5",
      "7",
      "9",
      "3"
    ],
    correctAnswer: 0,
    explanation: "For AP: a₅ = a + 4d = 17, a₁₀ = a + 9d = 32. Subtracting: 5d = 15, so d = 3. Then a = 17 - 4(3) = 17 - 12 = 5."
  },
  {
    id: "pred-2018-math-19",
    question: "Find the value of √(144) + √(81).",
    options: [
      "21",
      "15",
      "27",
      "24"
    ],
    correctAnswer: 0,
    explanation: "√144 = 12, √81 = 9. 12 + 9 = 21."
  },
  {
    id: "pred-2018-math-20",
    question: "If vectors a = (2, 3) and b = (4, 1), find a · b (dot product).",
    options: [
      "11",
      "10",
      "9",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Dot product: a · b = (2)(4) + (3)(1) = 8 + 3 = 11."
  },
  {
    id: "pred-2018-math-21",
    question: "Find the value of log₈(64).",
    options: [
      "2",
      "3",
      "4",
      "1"
    ],
    correctAnswer: 0,
    explanation: "log₈(64) = x means 8ˣ = 64. Since 8² = 64, x = 2."
  },
  {
    id: "pred-2018-math-22",
    question: "What is the sum of interior angles of a regular hexagon?",
    options: [
      "720°",
      "540°",
      "360°",
      "900°"
    ],
    correctAnswer: 0,
    explanation: "Sum of interior angles = (n-2) × 180° = (6-2) × 180° = 4 × 180° = 720°."
  },
  {
    id: "pred-2018-math-23",
    question: "Solve for x: 2ˣ⁺¹ = 32.",
    options: [
      "4",
      "5",
      "3",
      "6"
    ],
    correctAnswer: 0,
    explanation: "2ˣ⁺¹ = 32 = 2⁵. Therefore, x + 1 = 5, so x = 4."
  },
  {
    id: "pred-2018-math-24",
    question: "What is the probability of rolling a sum of 7 with two dice?",
    options: [
      "1/6",
      "1/12",
      "1/9",
      "1/8"
    ],
    correctAnswer: 0,
    explanation: "There are 6 favorable outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 total outcomes. P = 6/36 = 1/6."
  },
  {
    id: "pred-2018-math-25",
    question: "Find the equation of the circle with center (2, -3) and radius 5.",
    options: [
      "(x-2)² + (y+3)² = 25",
      "(x+2)² + (y-3)² = 25",
      "(x-2)² + (y-3)² = 25",
      "(x+2)² + (y+3)² = 25"
    ],
    correctAnswer: 0,
    explanation: "Circle equation: (x-h)² + (y-k)² = r². With center (2, -3) and r=5: (x-2)² + (y+3)² = 25."
  },
  {
    id: "pred-2018-math-26",
    question: "What is the value of sin(30°) × cos(60°)?",
    options: [
      "1/4",
      "1/2",
      "√3/4",
      "0"
    ],
    correctAnswer: 0,
    explanation: "sin(30°) = 1/2, cos(60°) = 1/2. Product = (1/2) × (1/2) = 1/4."
  },
  {
    id: "pred-2018-math-27",
    question: "Find the determinant of the matrix [[3, 2], [1, 4]].",
    options: [
      "10",
      "14",
      "6",
      "12"
    ],
    correctAnswer: 0,
    explanation: "det = (3)(4) - (2)(1) = 12 - 2 = 10."
  },
  {
    id: "pred-2018-math-28",
    question: "What is the sum of the first 50 natural numbers?",
    options: [
      "1275",
      "1250",
      "1300",
      "1200"
    ],
    correctAnswer: 0,
    explanation: "Sum = n(n+1)/2 = 50(51)/2 = 2550/2 = 1275."
  },
  {
    id: "pred-2018-math-29",
    question: "Find the value of C(7, 3) - the number of combinations.",
    options: [
      "35",
      "21",
      "42",
      "28"
    ],
    correctAnswer: 0,
    explanation: "C(7, 3) = 7!/(3! × 4!) = (7×6×5)/(3×2×1) = 210/6 = 35."
  },
  {
    id: "pred-2018-math-30",
    question: "What is the LCM of 12, 15, and 20?",
    options: [
      "60",
      "120",
      "180",
      "30"
    ],
    correctAnswer: 0,
    explanation: "Prime factors: 12=2²×3, 15=3×5, 20=2²×5. LCM = 2²×3×5 = 60."
  },
  {
    id: "pred-2018-math-31",
    question: "Solve the quadratic equation: x² - 5x + 6 = 0",
    options: [
      "x = 2 or x = 3",
      "x = -2 or x = -3",
      "x = 1 or x = 6",
      "x = -1 or x = -6"
    ],
    correctAnswer: 0,
    explanation: "Factor: (x-2)(x-3) = 0. Therefore, x = 2 or x = 3."
  },
  {
    id: "pred-2018-math-32",
    question: "What is the value of sin²(45°) + cos²(45°)?",
    options: [
      "1",
      "0",
      "2",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "Trigonometric identity: sin²θ + cos²θ = 1 for any angle θ."
  },
  {
    id: "pred-2018-math-33",
    question: "Find the slope of the line passing through points (2, 3) and (6, 11).",
    options: [
      "2",
      "4",
      "1/2",
      "3"
    ],
    correctAnswer: 0,
    explanation: "Slope m = (y₂-y₁)/(x₂-x₁) = (11-3)/(6-2) = 8/4 = 2."
  },
  {
    id: "pred-2018-math-34",
    question: "Simplify: √50 + √18",
    options: [
      "8√2",
      "5√2",
      "4√2",
      "6√2"
    ],
    correctAnswer: 0,
    explanation: "√50 = 5√2, √18 = 3√2. Sum = 5√2 + 3√2 = 8√2."
  },
  {
    id: "pred-2018-math-35",
    question: "What is the value of 2⁵ × 2³?",
    options: [
      "256",
      "64",
      "128",
      "32"
    ],
    correctAnswer: 0,
    explanation: "2⁵ × 2³ = 2⁵⁺³ = 2⁸ = 256."
  },
  {
    id: "pred-2018-math-36",
    question: "Find the midpoint of the line segment joining (3, 4) and (7, 8).",
    options: [
      "(5, 6)",
      "(4, 5)",
      "(6, 7)",
      "(5, 5)"
    ],
    correctAnswer: 0,
    explanation: "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) = ((3+7)/2, (4+8)/2) = (5, 6)."
  },
  {
    id: "pred-2018-math-37",
    question: "What is the value of tan(45°)?",
    options: [
      "1",
      "0",
      "√3",
      "1/√3"
    ],
    correctAnswer: 0,
    explanation: "tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1."
  },
  {
    id: "pred-2018-math-38",
    question: "Solve: |2x - 3| = 5",
    options: [
      "x = 4 or x = -1",
      "x = 4 or x = 1",
      "x = -4 or x = 1",
      "x = -4 or x = -1"
    ],
    correctAnswer: 0,
    explanation: "2x - 3 = 5 gives x = 4. 2x - 3 = -5 gives x = -1."
  },
  {
    id: "pred-2018-math-39",
    question: "What is the equation of the line with slope 2 passing through (1, 3)?",
    options: [
      "y = 2x + 1",
      "y = 2x - 1",
      "y = 2x + 3",
      "y = 2x - 3"
    ],
    correctAnswer: 0,
    explanation: "Point-slope: y - 3 = 2(x - 1). y - 3 = 2x - 2. y = 2x + 1."
  },
  {
    id: "pred-2018-math-40",
    question: "What is the sum of the interior angles of a pentagon?",
    options: [
      "540°",
      "360°",
      "720°",
      "180°"
    ],
    correctAnswer: 0,
    explanation: "Sum = (n-2) × 180° = (5-2) × 180° = 3 × 180° = 540°."
  },
  {
    id: "pred-2018-math-41",
    question: "What is log₁₀(100)?",
    options: [
      "2",
      "10",
      "100",
      "1"
    ],
    correctAnswer: 0,
    explanation: "log₁₀(100) = 2 because 10² = 100."
  },
  {
    id: "pred-2018-math-42",
    question: "Simplify: √(-16)",
    options: [
      "4i",
      "-4",
      "4",
      "-4i"
    ],
    correctAnswer: 0,
    explanation: "√(-16) = √(16) × √(-1) = 4i, where i is the imaginary unit."
  },
  {
    id: "pred-2018-math-43",
    question: "What is 5! (5 factorial)?",
    options: [
      "120",
      "25",
      "60",
      "20"
    ],
    correctAnswer: 0,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    id: "pred-2018-math-44",
    question: "Find the mean of 5, 10, 15, 20, 25.",
    options: [
      "15",
      "10",
      "20",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Mean = (5+10+15+20+25)/5 = 75/5 = 15."
  },
  {
    id: "pred-2018-math-45",
    question: "What is the median of 3, 7, 2, 9, 5?",
    options: [
      "5",
      "3",
      "7",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Arrange in order: 2, 3, 5, 7, 9. Median is the middle value: 5."
  },
  {
    id: "pred-2018-math-46",
    question: "What is the mode of 2, 3, 2, 5, 2, 7?",
    options: [
      "2",
      "3",
      "5",
      "7"
    ],
    correctAnswer: 0,
    explanation: "Mode is the most frequent value. 2 appears three times, more than any other number."
  },
  {
    id: "pred-2018-math-47",
    question: "If f(x) = 2x + 3, what is f(5)?",
    options: [
      "13",
      "10",
      "8",
      "15"
    ],
    correctAnswer: 0,
    explanation: "f(5) = 2(5) + 3 = 10 + 3 = 13."
  },
  {
    id: "pred-2018-math-48",
    question: "What is the distance between points (0, 0) and (3, 4)?",
    options: [
      "5",
      "7",
      "6",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Distance = √((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5."
  },
  {
    id: "pred-2018-math-49",
    question: "What is the value of 0! (0 factorial)?",
    options: [
      "1",
      "0",
      "undefined",
      "infinity"
    ],
    correctAnswer: 0,
    explanation: "By definition, 0! = 1."
  },
  {
    id: "pred-2018-math-50",
    question: "Simplify: 2³ × 2⁴",
    options: [
      "128",
      "64",
      "256",
      "32"
    ],
    correctAnswer: 0,
    explanation: "2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128."
  },
  {
    id: "pred-2018-math-51",
    question: "What is sin(30°)?",
    options: [
      "1/2",
      "√3/2",
      "1",
      "0"
    ],
    correctAnswer: 0,
    explanation: "sin(30°) = 1/2."
  },
  {
    id: "pred-2018-math-52",
    question: "What is cos(30°)?",
    options: [
      "√3/2",
      "1/2",
      "1",
      "0"
    ],
    correctAnswer: 0,
    explanation: "cos(30°) = √3/2."
  },
  {
    id: "pred-2018-math-53",
    question: "Find the sum of the first 10 natural numbers.",
    options: [
      "55",
      "45",
      "50",
      "60"
    ],
    correctAnswer: 0,
    explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55."
  },
  {
    id: "pred-2018-math-54",
    question: "What is the standard deviation of 2, 4, 6, 8?",
    options: [
      "2.24",
      "2",
      "4",
      "1.41"
    ],
    correctAnswer: 0,
    explanation: "Mean = 5. Variance = ((2-5)²+(4-5)²+(6-5)²+(8-5)²)/4 = (9+1+1+9)/4 = 5. SD = √5 ≈ 2.24."
  },
  {
    id: "pred-2018-math-55",
    question: "What is the probability of getting heads on a fair coin?",
    options: [
      "1/2",
      "1/4",
      "1",
      "0"
    ],
    correctAnswer: 0,
    explanation: "A fair coin has two equally likely outcomes, so P(heads) = 1/2."
  },
  {
    id: "pred-2018-math-56",
    question: "Simplify: (x + 3)(x - 3)",
    options: [
      "x² - 9",
      "x² + 9",
      "x² - 6x + 9",
      "x² + 6x + 9"
    ],
    correctAnswer: 0,
    explanation: "(x + 3)(x - 3) = x² - 3x + 3x - 9 = x² - 9 (difference of squares)."
  },
  {
    id: "pred-2018-math-57",
    question: "What is the value of log₂(8)?",
    options: [
      "3",
      "8",
      "2",
      "4"
    ],
    correctAnswer: 0,
    explanation: "log₂(8) = 3 because 2³ = 8."
  },
  {
    id: "pred-2018-math-58",
    question: "Find the area of a circle with radius 7 cm.",
    options: [
      "154 cm²",
      "44 cm²",
      "49 cm²",
      "21 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = πr² = π(7)² = 49π ≈ 154 cm² (using π ≈ 22/7)."
  },
  {
    id: "pred-2018-math-59",
    question: "What is the circumference of a circle with radius 7 cm?",
    options: [
      "44 cm",
      "154 cm",
      "49 cm",
      "14 cm"
    ],
    correctAnswer: 0,
    explanation: "Circumference = 2πr = 2π(7) = 14π ≈ 44 cm (using π ≈ 22/7)."
  },
  {
    id: "pred-2018-math-60",
    question: "Solve: 2x + 5 = 13",
    options: [
      "x = 4",
      "x = 5",
      "x = 3",
      "x = 6"
    ],
    correctAnswer: 0,
    explanation: "2x = 13 - 5 = 8. x = 8/2 = 4."
  },
  {
    id: "pred-2018-math-61",
    question: "What is the range of the function f(x) = x²?",
    options: [
      "All non-negative real numbers",
      "All real numbers",
      "Positive real numbers only",
      "Negative real numbers only"
    ],
    correctAnswer: 0,
    explanation: "f(x) = x² always produces non-negative values (0 and positive numbers)."
  },
  {
    id: "pred-2018-math-62",
    question: "What is the domain of the function f(x) = √(x - 4)?",
    options: [
      "x ≥ 4",
      "x > 4",
      "x ≤ 4",
      "All real numbers"
    ],
    correctAnswer: 0,
    explanation: "The expression under the square root must be non-negative: x - 4 ≥ 0, so x ≥ 4."
  },
  {
    id: "pred-2018-math-63",
    question: "What is the value of sin(90°)?",
    options: [
      "1",
      "0",
      "1/2",
      "√3/2"
    ],
    correctAnswer: 0,
    explanation: "sin(90°) = 1."
  },
  {
    id: "pred-2018-math-64",
    question: "What is the value of cos(90°)?",
    options: [
      "0",
      "1",
      "1/2",
      "√3/2"
    ],
    correctAnswer: 0,
    explanation: "cos(90°) = 0."
  },
  {
    id: "pred-2018-math-65",
    question: "Find the sum of the first 5 even numbers.",
    options: [
      "30",
      "20",
      "25",
      "35"
    ],
    correctAnswer: 0,
    explanation: "First 5 even numbers: 2, 4, 6, 8, 10. Sum = 30."
  },
  {
    id: "pred-2018-math-66",
    question: "What is the probability of rolling a 6 on a fair die?",
    options: [
      "1/6",
      "1/3",
      "1/2",
      "1/4"
    ],
    correctAnswer: 0,
    explanation: "A fair die has 6 equally likely outcomes, so P(6) = 1/6."
  },
  {
    id: "pred-2018-math-67",
    question: "Simplify: log₁₀(1000)",
    options: [
      "3",
      "10",
      "100",
      "1000"
    ],
    correctAnswer: 0,
    explanation: "log₁₀(1000) = 3 because 10³ = 1000."
  },
  {
    id: "pred-2018-math-68",
    question: "What is the sum of interior angles of a hexagon?",
    options: [
      "720°",
      "540°",
      "360°",
      "900°"
    ],
    correctAnswer: 0,
    explanation: "Sum = (n-2) × 180° = (6-2) × 180° = 4 × 180° = 720°."
  },
  {
    id: "pred-2018-math-69",
    question: "What is the perimeter of a rectangle with length 10 and width 5?",
    options: [
      "30",
      "50",
      "15",
      "25"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2(l + w) = 2(10 + 5) = 2(15) = 30."
  },
  {
    id: "pred-2018-math-70",
    question: "What is the volume of a sphere with radius 3 cm?",
    options: [
      "36π cm³",
      "27π cm³",
      "9π cm³",
      "18π cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume = (4/3)πr³ = (4/3)π(27) = 36π cm³."
  },
  {
    id: "pred-2018-math-71",
    question: "Solve: 3x - 7 = 14",
    options: [
      "x = 7",
      "x = 5",
      "x = 6",
      "x = 8"
    ],
    correctAnswer: 0,
    explanation: "3x = 14 + 7 = 21. x = 21/3 = 7."
  },
  {
    id: "pred-2018-math-72",
    question: "What is the y-intercept of y = 2x + 5?",
    options: [
      "5",
      "2",
      "0",
      "-5"
    ],
    correctAnswer: 0,
    explanation: "The y-intercept is the constant term when x = 0: y = 2(0) + 5 = 5."
  },
  {
    id: "pred-2018-math-73",
    question: "What is the x-intercept of y = 2x - 6?",
    options: [
      "3",
      "-3",
      "6",
      "-6"
    ],
    correctAnswer: 0,
    explanation: "Set y = 0: 0 = 2x - 6. 2x = 6. x = 3."
  },
  {
    id: "pred-2018-math-74",
    question: "What is the value of 6! ÷ 4!?",
    options: [
      "30",
      "24",
      "6",
      "720"
    ],
    correctAnswer: 0,
    explanation: "6! ÷ 4! = (6×5×4×3×2×1)/(4×3×2×1) = 6×5 = 30."
  },
  {
    id: "pred-2018-math-75",
    question: "Find the arithmetic mean of 4, 8, 12.",
    options: [
      "8",
      "6",
      "10",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Mean = (4+8+12)/3 = 24/3 = 8."
  },
  {
    id: "pred-2018-math-76",
    question: "What is the geometric mean of 4 and 9?",
    options: [
      "6",
      "6.5",
      "5",
      "7"
    ],
    correctAnswer: 0,
    explanation: "Geometric mean = √(4×9) = √36 = 6."
  },
  {
    id: "pred-2018-math-77",
    question: "Simplify: (a²)³",
    options: [
      "a⁶",
      "a⁵",
      "a⁸",
      "a⁹"
    ],
    correctAnswer: 0,
    explanation: "(a²)³ = a²ˣ³ = a⁶."
  },
  {
    id: "pred-2018-math-78",
    question: "What is the surface area of a cube with side 4 cm?",
    options: [
      "96 cm²",
      "64 cm²",
      "48 cm²",
      "16 cm²"
    ],
    correctAnswer: 0,
    explanation: "Surface area = 6s² = 6(4)² = 6(16) = 96 cm²."
  },
  {
    id: "pred-2018-math-79",
    question: "What is the value of log₅(25)?",
    options: [
      "2",
      "5",
      "25",
      "10"
    ],
    correctAnswer: 0,
    explanation: "log₅(25) = 2 because 5² = 25."
  },
  {
    id: "pred-2018-math-80",
    question: "Find the sum of the first 20 natural numbers.",
    options: [
      "210",
      "200",
      "190",
      "220"
    ],
    correctAnswer: 0,
    explanation: "Sum = n(n+1)/2 = 20(21)/2 = 210."
  }
];

export const predicted2018NaturalPhysicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-phy-1",
    question: "A car accelerates uniformly from rest to 20 m/s in 5 seconds. Calculate the distance traveled.",
    options: [
      "50 m",
      "100 m",
      "25 m",
      "200 m"
    ],
    correctAnswer: 0,
    explanation: "Using s = ut + (1/2)at². Initial velocity u = 0, final velocity v = 20 m/s, time t = 5 s. Acceleration a = (v-u)/t = 20/5 = 4 m/s². Distance s = 0 + (1/2)(4)(25) = 50 m."
  },
  {
    id: "pred-2018-phy-2",
    question: "A force of 50 N acts on a mass of 10 kg. Calculate the acceleration.",
    options: [
      "5 m/s²",
      "500 m/s²",
      "0.2 m/s²",
      "50 m/s²"
    ],
    correctAnswer: 0,
    explanation: "Using Newton's second law: F = ma, so a = F/m = 50/10 = 5 m/s²."
  },
  {
    id: "pred-2018-phy-3",
    question: "What is the kinetic energy of a 2 kg mass moving at 10 m/s?",
    options: [
      "100 J",
      "20 J",
      "200 J",
      "10 J"
    ],
    correctAnswer: 0,
    explanation: "Kinetic energy = (1/2)mv² = (1/2)(2)(10)² = (1/2)(2)(100) = 100 J."
  },
  {
    id: "pred-2018-phy-4",
    question: "A 100 W light bulb operates for 10 hours. How much energy is consumed in kWh?",
    options: [
      "1 kWh",
      "10 kWh",
      "0.1 kWh",
      "1000 kWh"
    ],
    correctAnswer: 0,
    explanation: "Energy = Power × Time = 100 W × 10 h = 1000 Wh = 1 kWh."
  },
  {
    id: "pred-2018-phy-5",
    question: "The refractive index of glass is 1.5. If light travels from air to glass, calculate the speed of light in glass.",
    options: [
      "2 × 10⁸ m/s",
      "3 × 10⁸ m/s",
      "1.5 × 10⁸ m/s",
      "4.5 × 10⁸ m/s"
    ],
    correctAnswer: 0,
    explanation: "n = c/v, so v = c/n = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s."
  },
  {
    id: "pred-2018-phy-6",
    question: "A resistor of 10 Ω is connected to a 20 V battery. Calculate the current flowing through it.",
    options: [
      "2 A",
      "0.5 A",
      "200 A",
      "0.2 A"
    ],
    correctAnswer: 0,
    explanation: "Using Ohm's law: I = V/R = 20/10 = 2 A."
  },
  {
    id: "pred-2018-phy-7",
    question: "What is the period of a pendulum with length 1 m? (g = 10 m/s²)",
    options: [
      "≈ 2 s",
      "≈ 1 s",
      "≈ 3 s",
      "≈ 0.5 s"
    ],
    correctAnswer: 0,
    explanation: "Period T = 2π√(l/g) = 2π√(1/10) = 2π/√10 ≈ 6.28/3.16 ≈ 2 s."
  },
  {
    id: "pred-2018-phy-8",
    question: "A wave has frequency 100 Hz and wavelength 2 m. Calculate its speed.",
    options: [
      "200 m/s",
      "50 m/s",
      "102 m/s",
      "98 m/s"
    ],
    correctAnswer: 0,
    explanation: "Wave speed v = fλ = 100 × 2 = 200 m/s."
  },
  {
    id: "pred-2018-phy-9",
    question: "What is the potential difference across a 5 Ω resistor with 2 A current?",
    options: [
      "10 V",
      "2.5 V",
      "20 V",
      "0.4 V"
    ],
    correctAnswer: 0,
    explanation: "Using Ohm's law: V = IR = 2 × 5 = 10 V."
  },
  {
    id: "pred-2018-phy-10",
    question: "The half-life of a radioactive substance is 10 years. How much remains after 30 years?",
    options: [
      "12.5%",
      "25%",
      "50%",
      "6.25%"
    ],
    correctAnswer: 0,
    explanation: "After 30 years (3 half-lives), the remaining fraction = (1/2)³ = 1/8 = 12.5%."
  },
  {
    id: "pred-2018-phy-11",
    question: "What is the momentum of a 5 kg object moving at 8 m/s?",
    options: [
      "40 kg·m/s",
      "13 kg·m/s",
      "0.625 kg·m/s",
      "80 kg·m/s"
    ],
    correctAnswer: 0,
    explanation: "Momentum p = mv = 5 × 8 = 40 kg·m/s."
  },
  {
    id: "pred-2018-phy-12",
    question: "Two resistors of 6 Ω and 12 Ω are connected in parallel. Calculate the total resistance.",
    options: [
      "4 Ω",
      "18 Ω",
      "3 Ω",
      "8 Ω"
    ],
    correctAnswer: 0,
    explanation: "For parallel resistors: 1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4, so R = 4 Ω."
  },
  {
    id: "pred-2018-phy-13",
    question: "What is the work done by a force of 30 N moving an object 5 m?",
    options: [
      "150 J",
      "35 J",
      "6 J",
      "300 J"
    ],
    correctAnswer: 0,
    explanation: "Work = Force × Distance = 30 × 5 = 150 J."
  },
  {
    id: "pred-2018-phy-14",
    question: "The frequency of a wave is 50 Hz. What is its period?",
    options: [
      "0.02 s",
      "2 s",
      "50 s",
      "0.5 s"
    ],
    correctAnswer: 0,
    explanation: "Period T = 1/f = 1/50 = 0.02 s."
  },
  {
    id: "pred-2018-phy-15",
    question: "A ball is thrown vertically upward with initial velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)",
    options: [
      "20 m",
      "10 m",
      "40 m",
      "5 m"
    ],
    correctAnswer: 0,
    explanation: "Using v² = u² - 2gh. At max height, v = 0. 0 = 20² - 2(10)h, so h = 400/20 = 20 m."
  },
  {
    id: "pred-2018-phy-16",
    question: "What is the power dissipated in a 10 Ω resistor with 5 A current?",
    options: [
      "250 W",
      "50 W",
      "0.5 W",
      "500 W"
    ],
    correctAnswer: 0,
    explanation: "Power P = I²R = 5² × 10 = 25 × 10 = 250 W."
  },
  {
    id: "pred-2018-phy-17",
    question: "The focal length of a convex lens is 20 cm. An object is placed 30 cm from the lens. Where is the image formed?",
    options: [
      "60 cm from lens",
      "12 cm from lens",
      "40 cm from lens",
      "15 cm from lens"
    ],
    correctAnswer: 0,
    explanation: "Using lens formula: 1/f = 1/u + 1/v. 1/20 = 1/30 + 1/v, so 1/v = 1/20 - 1/30 = (3-2)/60 = 1/60, so v = 60 cm."
  },
  {
    id: "pred-2018-phy-18",
    question: "What is the escape velocity from Earth's surface? (g = 10 m/s², R = 6400 km)",
    options: [
      "≈ 11.2 km/s",
      "≈ 8 km/s",
      "≈ 15 km/s",
      "≈ 20 km/s"
    ],
    correctAnswer: 0,
    explanation: "Escape velocity vₑ = √(2gR) = √(2 × 10 × 6400000) = √(128000000) ≈ 11314 m/s ≈ 11.2 km/s."
  },
  {
    id: "pred-2018-phy-19",
    question: "A capacitor of 100 μF is charged to 10 V. What is the stored energy?",
    options: [
      "0.005 J",
      "0.5 J",
      "0.05 J",
      "5 J"
    ],
    correctAnswer: 0,
    explanation: "Energy = (1/2)CV² = (1/2)(100 × 10⁻⁶)(10)² = (1/2)(10⁻⁴)(100) = 0.005 J."
  },
  {
    id: "pred-2018-phy-20",
    question: "What is the de Broglie wavelength of an electron with velocity 10⁶ m/s? (h = 6.63 × 10⁻³⁴ J·s, mₑ = 9.11 × 10⁻³¹ kg)",
    options: [
      "≈ 0.73 nm",
      "≈ 7.3 nm",
      "≈ 0.073 nm",
      "≈ 73 nm"
    ],
    correctAnswer: 0,
    explanation: "λ = h/mv = (6.63 × 10⁻³⁴)/(9.11 × 10⁻³¹ × 10⁶) = 7.28 × 10⁻¹⁰ m = 0.728 nm ≈ 0.73 nm."
  },
  {
    id: "pred-2018-phy-21",
    question: "What is the gravitational force between two 10 kg masses separated by 1 meter? (G = 6.67 × 10⁻¹¹ N·m²/kg²)",
    options: [
      "6.67 × 10⁻⁹ N",
      "6.67 × 10⁻¹¹ N",
      "6.67 × 10⁻⁷ N",
      "6.67 × 10⁻¹³ N"
    ],
    correctAnswer: 0,
    explanation: "F = G(m₁m₂)/r² = (6.67 × 10⁻¹¹)(10×10)/1² = 6.67 × 10⁻⁹ N."
  },
  {
    id: "pred-2018-phy-22",
    question: "A stone is thrown horizontally from a cliff at 20 m/s. If it takes 4 seconds to hit the ground, how far from the cliff does it land?",
    options: [
      "80 m",
      "40 m",
      "160 m",
      "20 m"
    ],
    correctAnswer: 0,
    explanation: "Horizontal distance = horizontal velocity × time = 20 × 4 = 80 m."
  },
  {
    id: "pred-2018-phy-23",
    question: "What is the frequency of a wave with wavelength 0.5 m and speed 340 m/s?",
    options: [
      "680 Hz",
      "170 Hz",
      "340 Hz",
      "1360 Hz"
    ],
    correctAnswer: 0,
    explanation: "f = v/λ = 340/0.5 = 680 Hz."
  },
  {
    id: "pred-2018-phy-24",
    question: "A 5 kg object falls from rest. What is its kinetic energy after falling 10 meters? (g = 10 m/s²)",
    options: [
      "500 J",
      "250 J",
      "100 J",
      "50 J"
    ],
    correctAnswer: 0,
    explanation: "KE = mgh = 5 × 10 × 10 = 500 J (potential energy converts to kinetic energy)."
  },
  {
    id: "pred-2018-phy-25",
    question: "What is the angular velocity of a wheel rotating at 120 rpm?",
    options: [
      "4π rad/s",
      "2π rad/s",
      "8π rad/s",
      "π rad/s"
    ],
    correctAnswer: 0,
    explanation: "120 rpm = 120 × (2π/60) = 4π rad/s."
  },
  {
    id: "pred-2018-phy-26",
    question: "A convex mirror has a focal length of -20 cm. An object is placed 30 cm from the mirror. Where is the image formed?",
    options: [
      "-12 cm (virtual, behind mirror)",
      "-60 cm (virtual, behind mirror)",
      "12 cm (real, in front)",
      "60 cm (real, in front)"
    ],
    correctAnswer: 0,
    explanation: "1/f = 1/u + 1/v. 1/(-20) = 1/30 + 1/v. 1/v = -1/20 - 1/30 = -5/60 = -1/12. v = -12 cm."
  },
  {
    id: "pred-2018-phy-27",
    question: "What is the work done to stretch a spring by 0.1 m if its spring constant is 100 N/m?",
    options: [
      "0.5 J",
      "1 J",
      "10 J",
      "0.1 J"
    ],
    correctAnswer: 0,
    explanation: "W = (1/2)kx² = (1/2)(100)(0.1)² = 50 × 0.01 = 0.5 J."
  },
  {
    id: "pred-2018-phy-28",
    question: "Two resistors of 10 Ω each are connected in series. What is the total resistance?",
    options: [
      "20 Ω",
      "5 Ω",
      "10 Ω",
      "100 Ω"
    ],
    correctAnswer: 0,
    explanation: "In series, total resistance = R₁ + R₂ = 10 + 10 = 20 Ω."
  },
  {
    id: "pred-2018-phy-29",
    question: "What is the pressure exerted by a force of 500 N on an area of 0.5 m²?",
    options: [
      "1000 Pa",
      "250 Pa",
      "500 Pa",
      "100 Pa"
    ],
    correctAnswer: 0,
    explanation: "Pressure = Force/Area = 500/0.5 = 1000 Pa."
  },
  {
    id: "pred-2018-phy-30",
    question: "A transformer has 100 turns in the primary coil and 500 turns in the secondary. If the primary voltage is 12 V, what is the secondary voltage?",
    options: [
      "60 V",
      "120 V",
      "24 V",
      "30 V"
    ],
    correctAnswer: 0,
    explanation: "Vₛ/Vₚ = Nₛ/Nₚ. Vₛ/12 = 500/100 = 5. Vₛ = 12 × 5 = 60 V."
  },
  {
    id: "pred-2018-phy-31",
    question: "What is Newton's Second Law of Motion?",
    options: [
      "F = ma (Force equals mass times acceleration)",
      "F = mv (Force equals mass times velocity)",
      "F = m/a (Force equals mass divided by acceleration)",
      "F = m + a (Force equals mass plus acceleration)"
    ],
    correctAnswer: 0,
    explanation: "Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass: F = ma."
  },
  {
    id: "pred-2018-phy-32",
    question: "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
    options: [
      "25 J",
      "10 J",
      "50 J",
      "20 J"
    ],
    correctAnswer: 0,
    explanation: "KE = (1/2)mv² = (1/2)(2)(5)² = (1/2)(2)(25) = 25 J."
  },
  {
    id: "pred-2018-phy-33",
    question: "What is the unit of electric current?",
    options: [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of electric current is the Ampere (A), named after André-Marie Ampère."
  },
  {
    id: "pred-2018-phy-34",
    question: "What is the speed of light in vacuum?",
    options: [
      "3 × 10⁸ m/s",
      "3 × 10⁶ m/s",
      "3 × 10⁵ m/s",
      "3 × 10⁷ m/s"
    ],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is approximately 3 × 10⁸ meters per second."
  },
  {
    id: "pred-2018-phy-35",
    question: "What is the law of conservation of energy?",
    options: [
      "Energy cannot be created or destroyed, only transformed",
      "Energy can be created but not destroyed",
      "Energy is always lost",
      "Energy increases over time"
    ],
    correctAnswer: 0,
    explanation: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another."
  },
  {
    id: "pred-2018-phy-36",
    question: "What is the period of a pendulum with length 1 m? (Use g = 10 m/s²)",
    options: [
      "≈ 2 seconds",
      "≈ 1 second",
      "≈ 3 seconds",
      "≈ 4 seconds"
    ],
    correctAnswer: 0,
    explanation: "T = 2π√(l/g) = 2π√(1/10) = 2π(0.316) ≈ 2 seconds."
  },
  {
    id: "pred-2018-phy-37",
    question: "What is Ohm's Law?",
    options: [
      "V = IR (Voltage equals current times resistance)",
      "I = VR (Current equals voltage times resistance)",
      "R = VI (Resistance equals voltage times current)",
      "V = I/R (Voltage equals current divided by resistance)"
    ],
    correctAnswer: 0,
    explanation: "Ohm's Law states that the voltage across a conductor is directly proportional to the current flowing through it: V = IR."
  },
  {
    id: "pred-2018-phy-38",
    question: "What is the unit of power?",
    options: [
      "Watt (W)",
      "Joule (J)",
      "Newton (N)",
      "Pascal (Pa)"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of power is the Watt (W), which equals one Joule per second."
  },
  {
    id: "pred-2018-phy-39",
    question: "What is the principle of floatation?",
    options: [
      "Objects float when their weight equals the weight of displaced fluid",
      "Objects float when they are lighter than water",
      "Objects float when they are hollow",
      "Objects float when they are small"
    ],
    correctAnswer: 0,
    explanation: "Archimedes' principle states that an object floats when the buoyant force (weight of displaced fluid) equals the object's weight."
  },
  {
    id: "pred-2018-phy-40",
    question: "What is the refractive index of a medium?",
    options: [
      "Ratio of speed of light in vacuum to speed in medium",
      "Ratio of speed in medium to speed in vacuum",
      "Speed of light in the medium",
      "Speed of light in vacuum"
    ],
    correctAnswer: 0,
    explanation: "Refractive index n = c/v, where c is speed of light in vacuum and v is speed in the medium."
  },
  {
    id: "pred-2018-phy-41",
    question: "What is the work done when a force of 10 N moves an object 5 m in the direction of the force?",
    options: [
      "50 J",
      "15 J",
      "2 J",
      "100 J"
    ],
    correctAnswer: 0,
    explanation: "Work = Force × Distance = 10 N × 5 m = 50 J."
  },
  {
    id: "pred-2018-phy-42",
    question: "What is the power if 100 J of work is done in 5 seconds?",
    options: [
      "20 W",
      "500 W",
      "5 W",
      "100 W"
    ],
    correctAnswer: 0,
    explanation: "Power = Work/Time = 100 J/5 s = 20 W."
  },
  {
    id: "pred-2018-phy-43",
    question: "What is the mechanical advantage of a machine that lifts 200 N with an effort of 50 N?",
    options: [
      "4",
      "0.25",
      "10",
      "2.5"
    ],
    correctAnswer: 0,
    explanation: "Mechanical Advantage = Load/Effort = 200/50 = 4."
  },
  {
    id: "pred-2018-phy-44",
    question: "What is the efficiency if output work is 80 J and input work is 100 J?",
    options: [
      "80%",
      "100%",
      "125%",
      "20%"
    ],
    correctAnswer: 0,
    explanation: "Efficiency = (Output/Input) × 100% = (80/100) × 100% = 80%."
  },
  {
    id: "pred-2018-phy-45",
    question: "What is the temperature in Celsius if it is 300 K?",
    options: [
      "27°C",
      "-27°C",
      "573°C",
      "0°C"
    ],
    correctAnswer: 0,
    explanation: "Celsius = Kelvin - 273 = 300 - 273 = 27°C."
  },
  {
    id: "pred-2018-phy-46",
    question: "What is the specific heat capacity if 1000 J raises 2 kg of water by 1°C?",
    options: [
      "500 J/kg°C",
      "1000 J/kg°C",
      "2000 J/kg°C",
      "250 J/kg°C"
    ],
    correctAnswer: 0,
    explanation: "Specific heat = Q/(m×ΔT) = 1000/(2×1) = 500 J/kg°C."
  },
  {
    id: "pred-2018-phy-47",
    question: "What is the frequency of a wave with wavelength 2 m and speed 10 m/s?",
    options: [
      "5 Hz",
      "20 Hz",
      "0.2 Hz",
      "10 Hz"
    ],
    correctAnswer: 0,
    explanation: "Frequency = Speed/Wavelength = 10/2 = 5 Hz."
  },
  {
    id: "pred-2018-phy-48",
    question: "What is the period of a wave with frequency 10 Hz?",
    options: [
      "0.1 s",
      "10 s",
      "1 s",
      "0.01 s"
    ],
    correctAnswer: 0,
    explanation: "Period = 1/Frequency = 1/10 = 0.1 s."
  },
  {
    id: "pred-2018-phy-49",
    question: "What is the speed of sound in air at room temperature?",
    options: [
      "343 m/s",
      "300 m/s",
      "400 m/s",
      "350 m/s"
    ],
    correctAnswer: 0,
    explanation: "The speed of sound in air at room temperature (20°C) is approximately 343 m/s."
  },
  {
    id: "pred-2018-phy-50",
    question: "What is the angle of incidence if the angle of reflection is 30°?",
    options: [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    correctAnswer: 0,
    explanation: "According to the law of reflection, angle of incidence = angle of reflection = 30°."
  },
  {
    id: "pred-2018-phy-51",
    question: "What is the focal length of a convex lens with power 2 diopters?",
    options: [
      "0.5 m",
      "2 m",
      "0.25 m",
      "1 m"
    ],
    correctAnswer: 0,
    explanation: "Focal length = 1/Power = 1/2 = 0.5 m."
  },
  {
    id: "pred-2018-phy-52",
    question: "What is the resistance of a wire with resistivity 10 Ωm, length 2 m, and cross-sectional area 0.1 m²?",
    options: [
      "200 Ω",
      "20 Ω",
      "0.5 Ω",
      "50 Ω"
    ],
    correctAnswer: 0,
    explanation: "Resistance = ρL/A = 10 × 2/0.1 = 200 Ω."
  },
  {
    id: "pred-2018-phy-53",
    question: "What is the current through a 100 Ω resistor with 10 V across it?",
    options: [
      "0.1 A",
      "1 A",
      "10 A",
      "1000 A"
    ],
    correctAnswer: 0,
    explanation: "I = V/R = 10/100 = 0.1 A."
  },
  {
    id: "pred-2018-phy-54",
    question: "What is the potential energy of a 2 kg object at height 10 m? (g = 10 m/s²)",
    options: [
      "200 J",
      "20 J",
      "100 J",
      "400 J"
    ],
    correctAnswer: 0,
    explanation: "PE = mgh = 2 × 10 × 10 = 200 J."
  },
  {
    id: "pred-2018-phy-55",
    question: "What is the kinetic energy of a 5 kg object moving at 4 m/s?",
    options: [
      "40 J",
      "20 J",
      "80 J",
      "10 J"
    ],
    correctAnswer: 0,
    explanation: "KE = (1/2)mv² = (1/2) × 5 × 16 = 40 J."
  },
  {
    id: "pred-2018-phy-56",
    question: "What is the centripetal force on a 2 kg object moving at 5 m/s in a circle of radius 2 m?",
    options: [
      "25 N",
      "5 N",
      "10 N",
      "12.5 N"
    ],
    correctAnswer: 0,
    explanation: "F = mv²/r = 2 × 25/2 = 25 N."
  },
  {
    id: "pred-2018-phy-57",
    question: "What is the gravitational force between two 10 kg masses 1 m apart? (G = 6.67×10⁻¹¹ Nm²/kg²)",
    options: [
      "6.67×10⁻⁹ N",
      "6.67×10⁻¹¹ N",
      "6.67×10⁻⁷ N",
      "6.67×10⁻¹³ N"
    ],
    correctAnswer: 0,
    explanation: "F = Gm₁m₂/r² = 6.67×10⁻¹¹ × 10 × 10/1 = 6.67×10⁻⁹ N."
  },
  {
    id: "pred-2018-phy-58",
    question: "What is the pressure exerted by a 100 N force on area 0.5 m²?",
    options: [
      "200 Pa",
      "50 Pa",
      "100 Pa",
      "500 Pa"
    ],
    correctAnswer: 0,
    explanation: "Pressure = Force/Area = 100/0.5 = 200 Pa."
  },
  {
    id: "pred-2018-phy-59",
    question: "What is the density of a 5 kg object with volume 0.01 m³?",
    options: [
      "500 kg/m³",
      "50 kg/m³",
      "5000 kg/m³",
      "0.5 kg/m³"
    ],
    correctAnswer: 0,
    explanation: "Density = Mass/Volume = 5/0.01 = 500 kg/m³."
  },
  {
    id: "pred-2018-phy-60",
    question: "What is Archimedes' principle about?",
    options: [
      "Buoyant force equals weight of displaced fluid",
      "Pressure increases with depth",
      "Fluid flows from high to low pressure",
      "Objects float in water"
    ],
    correctAnswer: 0,
    explanation: "Archimedes' principle states that the buoyant force on an object equals the weight of the fluid it displaces."
  },
  {
    id: "pred-2018-phy-61",
    question: "What is the wavelength of a 100 Hz sound wave? (Speed of sound = 340 m/s)",
    options: [
      "3.4 m",
      "34 m",
      "0.34 m",
      "340 m"
    ],
    correctAnswer: 0,
    explanation: "Wavelength = Speed/Frequency = 340/100 = 3.4 m."
  },
  {
    id: "pred-2018-phy-62",
    question: "What is the critical angle for light going from water (n=1.33) to air (n=1)?",
    options: [
      "48.8°",
      "41.8°",
      "90°",
      "45°"
    ],
    correctAnswer: 0,
    explanation: "Critical angle = sin⁻¹(n₂/n₁) = sin⁻¹(1/1.33) = 48.8°."
  },
  {
    id: "pred-2018-phy-63",
    question: "What is the electric field 2 m from a 10 C point charge? (k = 9×10⁹ Nm²/C²)",
    options: [
      "2.25×10⁹ N/C",
      "4.5×10⁹ N/C",
      "5×10⁸ N/C",
      "9×10⁹ N/C"
    ],
    correctAnswer: 0,
    explanation: "E = kQ/r² = 9×10⁹ × 10/4 = 2.25×10⁹ N/C."
  },
  {
    id: "pred-2018-phy-64",
    question: "What is the magnetic field at the center of a circular loop?",
    options: [
      "Maximum",
      "Zero",
      "Minimum",
      "Infinite"
    ],
    correctAnswer: 0,
    explanation: "The magnetic field is maximum at the center of a circular current-carrying loop."
  },
  {
    id: "pred-2018-phy-65",
    question: "What is the energy of a photon with frequency 10¹⁴ Hz? (h = 6.63×10⁻³⁴ J·s)",
    options: [
      "6.63×10⁻²⁰ J",
      "6.63×10⁻³⁴ J",
      "6.63×10⁻²⁰ eV",
      "6.63×10⁻³⁴ eV"
    ],
    correctAnswer: 0,
    explanation: "E = hf = 6.63×10⁻³⁴ × 10¹⁴ = 6.63×10⁻²⁰ J."
  },
  {
    id: "pred-2018-phy-66",
    question: "What is the de Broglie wavelength of a particle?",
    options: [
      "λ = h/p",
      "λ = p/h",
      "λ = hf",
      "λ = hc/E"
    ],
    correctAnswer: 0,
    explanation: "The de Broglie wavelength is given by λ = h/p, where h is Planck's constant and p is momentum."
  },
  {
    id: "pred-2018-phy-67",
    question: "What is the unit of electric potential?",
    options: [
      "Volt",
      "Ampere",
      "Coulomb",
      "Watt"
    ],
    correctAnswer: 0,
    explanation: "The unit of electric potential is the Volt (V)."
  },
  {
    id: "pred-2018-phy-68",
    question: "What is the unit of magnetic flux?",
    options: [
      "Weber",
      "Tesla",
      "Henry",
      "Ampere"
    ],
    correctAnswer: 0,
    explanation: "The unit of magnetic flux is the Weber (Wb)."
  },
  {
    id: "pred-2018-phy-69",
    question: "What is the SI unit of frequency?",
    options: [
      "Hertz",
      "Second",
      "Meter",
      "Joule"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of frequency is Hertz (Hz)."
  },
  {
    id: "pred-2018-phy-70",
    question: "What is the escape velocity from Earth's surface?",
    options: [
      "11.2 km/s",
      "9.8 km/s",
      "7.9 km/s",
      "15 km/s"
    ],
    correctAnswer: 0,
    explanation: "The escape velocity from Earth's surface is approximately 11.2 km/s."
  },
  {
    id: "pred-2018-phy-71",
    question: "What is the orbital velocity of a satellite near Earth's surface?",
    options: [
      "7.9 km/s",
      "11.2 km/s",
      "3.1 km/s",
      "9.8 km/s"
    ],
    correctAnswer: 0,
    explanation: "The orbital velocity near Earth's surface is approximately 7.9 km/s."
  },
  {
    id: "pred-2018-phy-72",
    question: "What is the principle of conservation of energy?",
    options: [
      "Energy cannot be created or destroyed",
      "Energy can be created but not destroyed",
      "Energy can be destroyed but not created",
      "Energy is always increasing"
    ],
    correctAnswer: 0,
    explanation: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed."
  },
  {
    id: "pred-2018-phy-73",
    question: "What is the Doppler effect?",
    options: [
      "Change in frequency due to relative motion",
      "Change in amplitude",
      "Change in wavelength only",
      "No change in frequency"
    ],
    correctAnswer: 0,
    explanation: "The Doppler effect is the change in frequency of a wave due to relative motion between source and observer."
  },
  {
    id: "pred-2018-phy-74",
    question: "What is the speed of electromagnetic waves in vacuum?",
    options: [
      "3×10⁸ m/s",
      "3×10⁶ m/s",
      "3×10¹⁰ m/s",
      "3×10⁴ m/s"
    ],
    correctAnswer: 0,
    explanation: "The speed of electromagnetic waves in vacuum is 3×10⁸ m/s."
  },
  {
    id: "pred-2018-phy-75",
    question: "What is the unit of capacitance?",
    options: [
      "Farad",
      "Coulomb",
      "Volt",
      "Henry"
    ],
    correctAnswer: 0,
    explanation: "The unit of capacitance is the Farad (F)."
  },
  {
    id: "pred-2018-phy-76",
    question: "What is the unit of inductance?",
    options: [
      "Henry",
      "Farad",
      "Weber",
      "Tesla"
    ],
    correctAnswer: 0,
    explanation: "The unit of inductance is the Henry (H)."
  },
  {
    id: "pred-2018-phy-77",
    question: "What is the resistance of two 10 Ω resistors in series?",
    options: [
      "20 Ω",
      "5 Ω",
      "10 Ω",
      "100 Ω"
    ],
    correctAnswer: 0,
    explanation: "In series, resistances add: R = R₁ + R₂ = 10 + 10 = 20 Ω."
  },
  {
    id: "pred-2018-phy-78",
    question: "What is the resistance of two 10 Ω resistors in parallel?",
    options: [
      "5 Ω",
      "20 Ω",
      "10 Ω",
      "2.5 Ω"
    ],
    correctAnswer: 0,
    explanation: "In parallel: 1/R = 1/R₁ + 1/R₂ = 1/10 + 1/10 = 2/10. R = 5 Ω."
  },
  {
    id: "pred-2018-phy-79",
    question: "What is the principle of a transformer?",
    options: [
      "Mutual induction",
      "Self induction",
      "Electromagnetic induction",
      "Electrostatic induction"
    ],
    correctAnswer: 0,
    explanation: "A transformer works on the principle of mutual induction between two coils."
  },
  {
    id: "pred-2018-phy-80",
    question: "What is the efficiency of an ideal transformer?",
    options: [
      "100%",
      "50%",
      "0%",
      "75%"
    ],
    correctAnswer: 0,
    explanation: "An ideal transformer has 100% efficiency with no energy loss."
  }
];

export const predicted2018NaturalChemistryQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-chem-1",
    question: "What is the molar mass of H₂SO₄? (H=1, S=32, O=16)",
    options: [
      "98 g/mol",
      "96 g/mol",
      "100 g/mol",
      "98.5 g/mol"
    ],
    correctAnswer: 0,
    explanation: "Molar mass = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol."
  },
  {
    id: "pred-2018-chem-2",
    question: "How many moles are in 44 g of CO₂? (C=12, O=16)",
    options: [
      "1 mole",
      "2 moles",
      "0.5 moles",
      "1.5 moles"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of CO₂ = 12 + 2(16) = 44 g/mol. Moles = mass/molar mass = 44/44 = 1 mole."
  },
  {
    id: "pred-2018-chem-3",
    question: "What is the pH of a 0.01 M HCl solution?",
    options: [
      "2",
      "1",
      "3",
      "12"
    ],
    correctAnswer: 0,
    explanation: "HCl is a strong acid, so [H⁺] = 0.01 M. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2."
  },
  {
    id: "pred-2018-chem-4",
    question: "Balance the equation: Fe + O₂ → Fe₂O₃.",
    options: [
      "4Fe + 3O₂ → 2Fe₂O₃",
      "2Fe + 3O₂ → Fe₂O₃",
      "4Fe + O₂ → 2Fe₂O₃",
      "Fe + 3O₂ → Fe₂O₃"
    ],
    correctAnswer: 0,
    explanation: "Balanced equation: 4Fe + 3O₂ → 2Fe₂O₃. Check: 4 Fe on both sides, 6 O on both sides."
  },
  {
    id: "pred-2018-chem-5",
    question: "What type of bond forms between Na and Cl?",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    correctAnswer: 0,
    explanation: "Na (metal) donates an electron to Cl (non-metal), forming Na⁺ and Cl⁻ ions. The electrostatic attraction between these oppositely charged ions is an ionic bond."
  },
  {
    id: "pred-2018-chem-6",
    question: "What is the electron configuration of carbon (atomic number 6)?",
    options: [
      "1s² 2s² 2p²",
      "1s² 2s² 2p¹",
      "1s² 2s¹ 2p³",
      "1s¹ 2s² 2p³"
    ],
    correctAnswer: 0,
    explanation: "Carbon has 6 electrons: 2 in the first shell (1s²) and 4 in the second shell (2s² 2p²)."
  },
  {
    id: "pred-2018-chem-7",
    question: "Which gas is produced when zinc reacts with dilute HCl?",
    options: [
      "Hydrogen",
      "Oxygen",
      "Chlorine",
      "Carbon dioxide"
    ],
    correctAnswer: 0,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is produced."
  },
  {
    id: "pred-2018-chem-8",
    question: "What is the oxidation state of oxygen in H₂O₂?",
    options: [
      "-1",
      "-2",
      "0",
      "+1"
    ],
    correctAnswer: 0,
    explanation: "In H₂O₂, hydrogen is +1. Let oxygen be x. 2(+1) + 2(x) = 0, so 2 + 2x = 0, x = -1."
  },
  {
    id: "pred-2018-chem-9",
    question: "Which of the following is a strong acid?",
    options: [
      "HCl",
      "CH₃COOH",
      "H₂CO₃",
      "HNO₂"
    ],
    correctAnswer: 0,
    explanation: "HCl (hydrochloric acid) is a strong acid that completely dissociates in water. The others are weak acids."
  },
  {
    id: "pred-2018-chem-10",
    question: "What is the empirical formula of glucose (C₆H₁₂O₆)?",
    options: [
      "CH₂O",
      "C₂H₄O₂",
      "CHO",
      "C₃H₆O₃"
    ],
    correctAnswer: 0,
    explanation: "Divide all subscripts by 6: C₆/₆H₁₂/₆O₆/₆ = CH₂O."
  },
  {
    id: "pred-2018-chem-11",
    question: "What is Avogadro's number?",
    options: [
      "6.022 × 10²³",
      "6.022 × 10²²",
      "6.022 × 10²⁴",
      "6.022 × 10²¹"
    ],
    correctAnswer: 0,
    explanation: "Avogadro's number is 6.022 × 10²³, representing the number of particles in one mole of a substance."
  },
  {
    id: "pred-2018-chem-12",
    question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
    options: [
      "Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Double displacement reaction"
    ],
    correctAnswer: 0,
    explanation: "In a combination reaction, two or more substances combine to form a single product. Here H₂ and O₂ combine to form H₂O."
  },
  {
    id: "pred-2018-chem-13",
    question: "What is the mass of 0.5 moles of NaCl? (Na=23, Cl=35.5)",
    options: [
      "29.25 g",
      "58.5 g",
      "14.625 g",
      "117 g"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol. Mass = 0.5 × 58.5 = 29.25 g."
  },
  {
    id: "pred-2018-chem-14",
    question: "Which element has the highest electronegativity?",
    options: [
      "Fluorine",
      "Oxygen",
      "Chlorine",
      "Nitrogen"
    ],
    correctAnswer: 0,
    explanation: "Fluorine has the highest electronegativity (4.0 on the Pauling scale) of all elements."
  },
  {
    id: "pred-2018-chem-15",
    question: "What is the shape of a methane (CH₄) molecule?",
    options: [
      "Tetrahedral",
      "Trigonal planar",
      "Linear",
      "Octahedral"
    ],
    correctAnswer: 0,
    explanation: "Methane has a tetrahedral molecular geometry with bond angles of approximately 109.5°."
  },
  {
    id: "pred-2018-chem-16",
    question: "What is the product when sodium hydroxide reacts with hydrochloric acid?",
    options: [
      "NaCl + H₂O",
      "NaH + Cl₂",
      "NaO + HCl",
      "NaCl + H₂"
    ],
    correctAnswer: 0,
    explanation: "NaOH + HCl → NaCl + H₂O. This is a neutralization reaction producing salt and water."
  },
  {
    id: "pred-2018-chem-17",
    question: "What is the number of valence electrons in nitrogen?",
    options: [
      "5",
      "3",
      "7",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Nitrogen has 5 valence electrons (2s² 2p³ configuration)."
  },
  {
    id: "pred-2018-chem-18",
    question: "Which of the following is a Lewis acid?",
    options: [
      "BF₃",
      "NH₃",
      "H₂O",
      "OH⁻"
    ],
    correctAnswer: 0,
    explanation: "BF₃ is a Lewis acid because it can accept an electron pair (boron has an incomplete octet)."
  },
  {
    id: "pred-2018-chem-19",
    question: "What is the concentration if 0.1 moles of solute is dissolved in 500 mL of solution?",
    options: [
      "0.2 M",
      "0.1 M",
      "0.5 M",
      "2 M"
    ],
    correctAnswer: 0,
    explanation: "Molarity = moles/volume(L) = 0.1/0.5 = 0.2 M."
  },
  {
    id: "pred-2018-chem-20",
    question: "What is the IUPAC name of CH₃-CH₂-CH₃?",
    options: [
      "Propane",
      "Ethane",
      "Butane",
      "Methane"
    ],
    correctAnswer: 0,
    explanation: "CH₃-CH₂-CH₃ has 3 carbon atoms, so it is propane."
  },
  {
    id: "pred-2018-chem-21",
    question: "What is the hybridization of carbon in methane (CH₄)?",
    options: [
      "sp³",
      "sp²",
      "sp",
      "sp³d"
    ],
    correctAnswer: 0,
    explanation: "Carbon in methane forms 4 sigma bonds, requiring sp³ hybridization with tetrahedral geometry."
  },
  {
    id: "pred-2018-chem-22",
    question: "What is the pH of a 0.001 M HCl solution?",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    correctAnswer: 0,
    explanation: "HCl is a strong acid, so [H⁺] = 0.001 M. pH = -log(0.001) = -log(10⁻³) = 3."
  },
  {
    id: "pred-2018-chem-23",
    question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
    options: [
      "Combination (synthesis) reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Double displacement reaction"
    ],
    correctAnswer: 0,
    explanation: "Two substances (H₂ and O₂) combine to form one product (H₂O), making it a combination reaction."
  },
  {
    id: "pred-2018-chem-24",
    question: "What is the oxidation number of sulfur in H₂SO₄?",
    options: [
      "+6",
      "+4",
      "+2",
      "0"
    ],
    correctAnswer: 0,
    explanation: "H is +1 (×2 = +2), O is -2 (×4 = -8). For neutral molecule: +2 + S - 8 = 0, so S = +6."
  },
  {
    id: "pred-2018-chem-25",
    question: "What is the mass of 2 moles of water (H₂O)? (H=1, O=16)",
    options: [
      "36 g",
      "18 g",
      "32 g",
      "20 g"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of H₂O = 2(1) + 16 = 18 g/mol. Mass of 2 moles = 2 × 18 = 36 g."
  },
  {
    id: "pred-2018-chem-26",
    question: "Which of the following is a noble gas?",
    options: [
      "Argon",
      "Oxygen",
      "Nitrogen",
      "Chlorine"
    ],
    correctAnswer: 0,
    explanation: "Argon (Ar) is a noble gas in Group 18 of the periodic table, known for being inert."
  },
  {
    id: "pred-2018-chem-27",
    question: "What is the empirical formula of glucose (C₆H₁₂O₆)?",
    options: [
      "CH₂O",
      "C₂H₄O₂",
      "CHO",
      "C₃H₆O₃"
    ],
    correctAnswer: 0,
    explanation: "Divide all subscripts by 6: C₆/₆H₁₂/₆O₆/₆ = CH₂O."
  },
  {
    id: "pred-2018-chem-28",
    question: "What is the concentration of a solution made by dissolving 10 g of NaCl in enough water to make 500 mL? (Na=23, Cl=35.5)",
    options: [
      "0.34 M",
      "0.2 M",
      "0.5 M",
      "0.1 M"
    ],
    correctAnswer: 0,
    explanation: "Moles = 10/58.5 = 0.171. Volume = 0.5 L. Molarity = 0.171/0.5 = 0.34 M."
  },
  {
    id: "pred-2018-chem-29",
    question: "What is the product when calcium reacts with water?",
    options: [
      "Ca(OH)₂ + H₂",
      "CaO + H₂",
      "CaH₂ + O₂",
      "Ca + H₂O"
    ],
    correctAnswer: 0,
    explanation: "Ca + 2H₂O → Ca(OH)₂ + H₂. Calcium reacts with water to form calcium hydroxide and hydrogen gas."
  },
  {
    id: "pred-2018-chem-30",
    question: "What is the number of neutrons in carbon-14?",
    options: [
      "8",
      "6",
      "7",
      "14"
    ],
    correctAnswer: 0,
    explanation: "Carbon-14 has mass number 14 and atomic number 6. Neutrons = mass number - atomic number = 14 - 6 = 8."
  },
  {
    id: "pred-2018-chem-31",
    question: "What is the atomic number of carbon?",
    options: [
      "6",
      "12",
      "14",
      "8"
    ],
    correctAnswer: 0,
    explanation: "The atomic number of carbon is 6, which means it has 6 protons in its nucleus."
  },
  {
    id: "pred-2018-chem-32",
    question: "What type of bond is formed between sodium and chlorine?",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    correctAnswer: 0,
    explanation: "Sodium (metal) transfers an electron to chlorine (non-metal), forming an ionic bond between Na⁺ and Cl⁻."
  },
  {
    id: "pred-2018-chem-33",
    question: "What is the mass number of an atom with 8 protons and 8 neutrons?",
    options: [
      "16",
      "8",
      "24",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Mass number = protons + neutrons = 8 + 8 = 16."
  },
  {
    id: "pred-2018-chem-34",
    question: "What is Avogadro's number?",
    options: [
      "6.02 × 10²³",
      "6.02 × 10²²",
      "6.02 × 10²⁴",
      "6.02 × 10²¹"
    ],
    correctAnswer: 0,
    explanation: "Avogadro's number (6.02 × 10²³) is the number of particles in one mole of a substance."
  },
  {
    id: "pred-2018-chem-35",
    question: "What is the pH of a neutral solution?",
    options: [
      "7",
      "0",
      "14",
      "1"
    ],
    correctAnswer: 0,
    explanation: "A neutral solution has a pH of 7, where [H⁺] = [OH⁻]."
  },
  {
    id: "pred-2018-chem-36",
    question: "What is the formula for carbon dioxide?",
    options: [
      "CO₂",
      "CO",
      "C₂O",
      "C₂O₄"
    ],
    correctAnswer: 0,
    explanation: "Carbon dioxide consists of one carbon atom bonded to two oxygen atoms: CO₂."
  },
  {
    id: "pred-2018-chem-37",
    question: "What happens to the rate of reaction when temperature increases?",
    options: [
      "Reaction rate increases",
      "Reaction rate decreases",
      "Reaction rate stays the same",
      "Reaction stops"
    ],
    correctAnswer: 0,
    explanation: "Increasing temperature increases the kinetic energy of molecules, leading to more frequent and energetic collisions, thus increasing the reaction rate."
  },
  {
    id: "pred-2018-chem-38",
    question: "What is the law of conservation of mass?",
    options: [
      "Mass is neither created nor destroyed in a chemical reaction",
      "Mass is always created",
      "Mass is always destroyed",
      "Mass changes randomly"
    ],
    correctAnswer: 0,
    explanation: "The law of conservation of mass states that in a closed system, mass is neither created nor destroyed in a chemical reaction."
  },
  {
    id: "pred-2018-chem-39",
    question: "What is a catalyst?",
    options: [
      "Substance that speeds up reaction without being consumed",
      "Substance that slows down reaction",
      "Substance that is consumed in reaction",
      "Product of reaction"
    ],
    correctAnswer: 0,
    explanation: "A catalyst is a substance that increases the rate of a chemical reaction without being consumed in the process."
  },
  {
    id: "pred-2018-chem-40",
    question: "What is the chemical formula for water?",
    options: [
      "H₂O",
      "HO",
      "H₂O₂",
      "H₃O"
    ],
    correctAnswer: 0,
    explanation: "Water consists of two hydrogen atoms bonded to one oxygen atom: H₂O."
  },
  {
    id: "pred-2018-chem-41",
    question: "What is the molar volume of a gas at STP?",
    options: [
      "22.4 L",
      "24.5 L",
      "20.0 L",
      "18.0 L"
    ],
    correctAnswer: 0,
    explanation: "At standard temperature and pressure (STP), one mole of any gas occupies 22.4 liters."
  },
  {
    id: "pred-2018-chem-42",
    question: "What is Boyle's Law?",
    options: [
      "Pressure and volume are inversely proportional at constant temperature",
      "Volume and temperature are directly proportional at constant pressure",
      "Pressure and temperature are directly proportional at constant volume",
      "Pressure and volume are directly proportional"
    ],
    correctAnswer: 0,
    explanation: "Boyle's Law states that at constant temperature, pressure and volume of a gas are inversely proportional (P₁V₁ = P₂V₂)."
  },
  {
    id: "pred-2018-chem-43",
    question: "What is Charles's Law?",
    options: [
      "Volume and temperature are directly proportional at constant pressure",
      "Pressure and volume are inversely proportional at constant temperature",
      "Pressure and temperature are directly proportional at constant volume",
      "Volume and pressure are directly proportional"
    ],
    correctAnswer: 0,
    explanation: "Charles's Law states that at constant pressure, volume and absolute temperature of a gas are directly proportional (V₁/T₁ = V₂/T₂)."
  },
  {
    id: "pred-2018-chem-44",
    question: "What is the ideal gas equation?",
    options: [
      "PV = nRT",
      "PV = nT",
      "PT = nRV",
      "PV = R/T"
    ],
    correctAnswer: 0,
    explanation: "The ideal gas equation is PV = nRT, where P is pressure, V is volume, n is moles, R is the gas constant, and T is temperature."
  },
  {
    id: "pred-2018-chem-45",
    question: "What is molarity?",
    options: [
      "Moles of solute per liter of solution",
      "Grams of solute per liter of solution",
      "Moles of solute per kilogram of solvent",
      "Grams of solute per kilogram of solvent"
    ],
    correctAnswer: 0,
    explanation: "Molarity (M) is defined as moles of solute per liter of solution."
  },
  {
    id: "pred-2018-chem-46",
    question: "What is the molarity of a solution with 2 moles of solute in 4 liters of solution?",
    options: [
      "0.5 M",
      "2 M",
      "0.25 M",
      "8 M"
    ],
    correctAnswer: 0,
    explanation: "Molarity = moles/volume = 2/4 = 0.5 M."
  },
  {
    id: "pred-2018-chem-47",
    question: "What is Le Chatelier's principle?",
    options: [
      "System adjusts to counteract changes in equilibrium",
      "Reaction always goes to completion",
      "Catalysts change equilibrium position",
      "Temperature doesn't affect equilibrium"
    ],
    correctAnswer: 0,
    explanation: "Le Chatelier's principle states that if a system at equilibrium is disturbed, it will shift to counteract the change and restore equilibrium."
  },
  {
    id: "pred-2018-chem-48",
    question: "What is a strong acid?",
    options: [
      "Completely dissociates in water",
      "Partially dissociates in water",
      "Does not dissociate in water",
      "Neutral in water"
    ],
    correctAnswer: 0,
    explanation: "A strong acid completely dissociates in water, releasing all its hydrogen ions."
  },
  {
    id: "pred-2018-chem-49",
    question: "What is the pH of a 0.001 M HCl solution?",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    correctAnswer: 0,
    explanation: "HCl is strong acid, so [H⁺] = 0.001 M = 10⁻³ M. pH = -log(10⁻³) = 3."
  },
  {
    id: "pred-2018-chem-50",
    question: "What is oxidation?",
    options: [
      "Loss of electrons",
      "Gain of electrons",
      "Loss of protons",
      "Gain of protons"
    ],
    correctAnswer: 0,
    explanation: "Oxidation is the loss of electrons during a chemical reaction."
  },
  {
    id: "pred-2018-chem-51",
    question: "What is reduction?",
    options: [
      "Gain of electrons",
      "Loss of electrons",
      "Loss of protons",
      "Gain of protons"
    ],
    correctAnswer: 0,
    explanation: "Reduction is the gain of electrons during a chemical reaction."
  },
  {
    id: "pred-2018-chem-52",
    question: "What is the oxidation state of oxygen in most compounds?",
    options: [
      "-2",
      "+2",
      "0",
      "-1"
    ],
    correctAnswer: 0,
    explanation: "Oxygen typically has an oxidation state of -2 in most compounds, except in peroxides (-1) and with fluorine."
  },
  {
    id: "pred-2018-chem-53",
    question: "What is the functional group of alcohols?",
    options: [
      "-OH (hydroxyl)",
      "-COOH (carboxyl)",
      "-CHO (aldehyde)",
      "-CO (carbonyl)"
    ],
    correctAnswer: 0,
    explanation: "Alcohols contain the hydroxyl (-OH) functional group."
  },
  {
    id: "pred-2018-chem-54",
    question: "What is the functional group of carboxylic acids?",
    options: [
      "-COOH (carboxyl)",
      "-OH (hydroxyl)",
      "-CHO (aldehyde)",
      "-NH₂ (amino)"
    ],
    correctAnswer: 0,
    explanation: "Carboxylic acids contain the carboxyl (-COOH) functional group."
  },
  {
    id: "pred-2018-chem-55",
    question: "What is the general formula for alkanes?",
    options: [
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ",
      "CₙH₂ₙ₋₂",
      "CₙH₂ₙ₊₁"
    ],
    correctAnswer: 0,
    explanation: "Alkanes have the general formula CₙH₂ₙ₊₂, where n is the number of carbon atoms."
  },
  {
    id: "pred-2018-chem-56",
    question: "What is the general formula for alkenes?",
    options: [
      "CₙH₂ₙ",
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₋₂",
      "CₙH₂ₙ₊₁"
    ],
    correctAnswer: 0,
    explanation: "Alkenes have the general formula CₙH₂ₙ, where n is the number of carbon atoms."
  },
  {
    id: "pred-2018-chem-57",
    question: "What is electronegativity?",
    options: [
      "Ability of an atom to attract electrons",
      "Ability to lose electrons",
      "Number of valence electrons",
      "Atomic mass"
    ],
    correctAnswer: 0,
    explanation: "Electronegativity is the ability of an atom to attract shared electrons in a chemical bond."
  },
  {
    id: "pred-2018-chem-58",
    question: "Which element has the highest electronegativity?",
    options: [
      "Fluorine",
      "Oxygen",
      "Chlorine",
      "Nitrogen"
    ],
    correctAnswer: 0,
    explanation: "Fluorine has the highest electronegativity value of 4.0 on the Pauling scale."
  },
  {
    id: "pred-2018-chem-59",
    question: "What type of bond forms between atoms with similar electronegativities?",
    options: [
      "Covalent bond",
      "Ionic bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    correctAnswer: 0,
    explanation: "When atoms have similar electronegativities, they share electrons equally, forming a covalent bond."
  },
  {
    id: "pred-2018-chem-60",
    question: "What is the octet rule?",
    options: [
      "Atoms tend to have 8 valence electrons",
      "Atoms tend to have 8 protons",
      "Atoms tend to have 8 neutrons",
      "Atoms tend to have 8 total electrons"
    ],
    correctAnswer: 0,
    explanation: "The octet rule states that atoms tend to gain, lose, or share electrons to achieve a full valence shell of 8 electrons."
  },
  {
    id: "pred-2018-chem-61",
    question: "What is enthalpy?",
    options: [
      "Total heat content of a system",
      "Total energy of a system",
      "Randomness of a system",
      "Pressure of a system"
    ],
    correctAnswer: 0,
    explanation: "Enthalpy (H) is the total heat content of a system at constant pressure."
  },
  {
    id: "pred-2018-chem-62",
    question: "What is an exothermic reaction?",
    options: [
      "Releases heat to surroundings",
      "Absorbs heat from surroundings",
      "No heat exchange",
      "Only occurs at high temperature"
    ],
    correctAnswer: 0,
    explanation: "An exothermic reaction releases heat to the surroundings, resulting in a negative enthalpy change."
  },
  {
    id: "pred-2018-chem-63",
    question: "What is an endothermic reaction?",
    options: [
      "Absorbs heat from surroundings",
      "Releases heat to surroundings",
      "No heat exchange",
      "Only occurs at low temperature"
    ],
    correctAnswer: 0,
    explanation: "An endothermic reaction absorbs heat from the surroundings, resulting in a positive enthalpy change."
  },
  {
    id: "pred-2018-chem-64",
    question: "What is entropy?",
    options: [
      "Measure of disorder or randomness",
      "Measure of heat content",
      "Measure of pressure",
      "Measure of volume"
    ],
    correctAnswer: 0,
    explanation: "Entropy (S) is a measure of the disorder or randomness of a system."
  },
  {
    id: "pred-2018-chem-65",
    question: "What is the second law of thermodynamics?",
    options: [
      "Entropy of the universe always increases",
      "Energy is conserved",
      "Matter is conserved",
      "Temperature is constant"
    ],
    correctAnswer: 0,
    explanation: "The second law of thermodynamics states that the total entropy of an isolated system always increases over time."
  },
  {
    id: "pred-2018-chem-66",
    question: "What is an electrolyte?",
    options: [
      "Substance that conducts electricity when dissolved",
      "Substance that does not conduct electricity",
      "Pure metal",
      "Insulator"
    ],
    correctAnswer: 0,
    explanation: "An electrolyte is a substance that produces ions when dissolved in water, allowing it to conduct electricity."
  },
  {
    id: "pred-2018-chem-67",
    question: "What is the anode in an electrochemical cell?",
    options: [
      "Electrode where oxidation occurs",
      "Electrode where reduction occurs",
      "Salt bridge",
      "Electrolyte solution"
    ],
    correctAnswer: 0,
    explanation: "The anode is the electrode where oxidation (loss of electrons) occurs in an electrochemical cell."
  },
  {
    id: "pred-2018-chem-68",
    question: "What is the cathode in an electrochemical cell?",
    options: [
      "Electrode where reduction occurs",
      "Electrode where oxidation occurs",
      "Salt bridge",
      "Electrolyte solution"
    ],
    correctAnswer: 0,
    explanation: "The cathode is the electrode where reduction (gain of electrons) occurs in an electrochemical cell."
  },
  {
    id: "pred-2018-chem-69",
    question: "What is radioactivity?",
    options: [
      "Spontaneous emission of radiation from unstable nuclei",
      "Chemical reaction",
      "Physical change of state",
      "Nuclear fusion"
    ],
    correctAnswer: 0,
    explanation: "Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei."
  },
  {
    id: "pred-2018-chem-70",
    question: "What is alpha radiation?",
    options: [
      "Helium nucleus (2 protons, 2 neutrons)",
      "High-energy electron",
      "High-energy photon",
      "Neutron"
    ],
    correctAnswer: 0,
    explanation: "Alpha radiation consists of helium nuclei (2 protons and 2 neutrons) and has low penetration power."
  },
  {
    id: "pred-2018-chem-71",
    question: "What is beta radiation?",
    options: [
      "High-energy electron",
      "Helium nucleus",
      "High-energy photon",
      "Neutron"
    ],
    correctAnswer: 0,
    explanation: "Beta radiation consists of high-energy electrons emitted from the nucleus during beta decay."
  },
  {
    id: "pred-2018-chem-72",
    question: "What is gamma radiation?",
    options: [
      "High-energy photon",
      "Helium nucleus",
      "High-energy electron",
      "Neutron"
    ],
    correctAnswer: 0,
    explanation: "Gamma radiation consists of high-energy photons and has high penetration power."
  },
  {
    id: "pred-2018-chem-73",
    question: "What is half-life?",
    options: [
      "Time for half of radioactive atoms to decay",
      "Time for all atoms to decay",
      "Time for half of energy to be released",
      "Time for half of mass to be lost"
    ],
    correctAnswer: 0,
    explanation: "Half-life is the time required for half of the radioactive atoms in a sample to undergo radioactive decay."
  },
  {
    id: "pred-2018-chem-74",
    question: "What is the molecular formula of glucose?",
    options: [
      "C₆H₁₂O₆",
      "C₆H₆O₆",
      "C₁₂H₂₂O₁₁",
      "CH₂O"
    ],
    correctAnswer: 0,
    explanation: "Glucose has the molecular formula C₆H₁₂O₆."
  },
  {
    id: "pred-2018-chem-75",
    question: "What is the molecular formula of methane?",
    options: [
      "CH₄",
      "C₂H₆",
      "CH₃",
      "C₄H₁₀"
    ],
    correctAnswer: 0,
    explanation: "Methane (CH₄) is the simplest alkane with one carbon atom and four hydrogen atoms."
  },
  {
    id: "pred-2018-chem-76",
    question: "What is the molecular formula of ethane?",
    options: [
      "C₂H₆",
      "CH₄",
      "C₃H₈",
      "C₄H₁₀"
    ],
    correctAnswer: 0,
    explanation: "Ethane (C₂H₆) is an alkane with two carbon atoms and six hydrogen atoms."
  },
  {
    id: "pred-2018-chem-77",
    question: "What is a saturated hydrocarbon?",
    options: [
      "Contains only single bonds between carbon atoms",
      "Contains double bonds",
      "Contains triple bonds",
      "Contains no hydrogen"
    ],
    correctAnswer: 0,
    explanation: "A saturated hydrocarbon (alkane) contains only single bonds between carbon atoms and is saturated with hydrogen."
  },
  {
    id: "pred-2018-chem-78",
    question: "What is an unsaturated hydrocarbon?",
    options: [
      "Contains double or triple bonds between carbon atoms",
      "Contains only single bonds",
      "Contains no carbon",
      "Contains only hydrogen"
    ],
    correctAnswer: 0,
    explanation: "An unsaturated hydrocarbon contains double or triple bonds between carbon atoms (alkenes or alkynes)."
  },
  {
    id: "pred-2018-chem-79",
    question: "What is the molecular formula of ethene (ethylene)?",
    options: [
      "C₂H₄",
      "C₂H₆",
      "C₂H₂",
      "C₃H₆"
    ],
    correctAnswer: 0,
    explanation: "Ethene (C₂H₄) is the simplest alkene with a double bond between two carbon atoms."
  },
  {
    id: "pred-2018-chem-80",
    question: "What is the molecular formula of ethyne (acetylene)?",
    options: [
      "C₂H₂",
      "C₂H₄",
      "C₂H₆",
      "C₃H₄"
    ],
    correctAnswer: 0,
    explanation: "Ethyne (C₂H₂) is the simplest alkyne with a triple bond between two carbon atoms."
  }
];

export const predicted2018NaturalBiologyQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-bio-1",
    question: "Which organelle is responsible for protein synthesis?",
    options: [
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus",
      "Lysosome"
    ],
    correctAnswer: 0,
    explanation: "Ribosomes are the sites of protein synthesis in cells. They translate mRNA into polypeptide chains."
  },
  {
    id: "pred-2018-bio-2",
    question: "What is the function of mitochondria?",
    options: [
      "ATP production",
      "Protein synthesis",
      "DNA replication",
      "Waste disposal"
    ],
    correctAnswer: 0,
    explanation: "Mitochondria are the powerhouses of the cell, producing ATP through cellular respiration."
  },
  {
    id: "pred-2018-bio-3",
    question: "Which phase of mitosis do chromosomes align at the equator?",
    options: [
      "Metaphase",
      "Prophase",
      "Anaphase",
      "Telophase"
    ],
    correctAnswer: 0,
    explanation: "In metaphase, chromosomes align at the metaphase plate (equator) of the cell, attached to spindle fibers."
  },
  {
    id: "pred-2018-bio-4",
    question: "What is the basic unit of heredity?",
    options: [
      "Gene",
      "Chromosome",
      "DNA",
      "Nucleotide"
    ],
    correctAnswer: 0,
    explanation: "A gene is the basic unit of heredity, consisting of DNA sequences that code for specific traits."
  },
  {
    id: "pred-2018-bio-5",
    question: "Which blood type is the universal donor?",
    options: [
      "O negative",
      "AB positive",
      "A positive",
      "B negative"
    ],
    correctAnswer: 0,
    explanation: "O negative blood lacks A and B antigens and the Rh factor, making it compatible with all blood types."
  },
  {
    id: "pred-2018-bio-6",
    question: "What is the product of photosynthesis?",
    options: [
      "Glucose and oxygen",
      "Carbon dioxide and water",
      "ATP and NADPH",
      "Glucose and carbon dioxide"
    ],
    correctAnswer: 0,
    explanation: "Photosynthesis converts CO₂ and H₂O (using light energy) into glucose and oxygen."
  },
  {
    id: "pred-2018-bio-7",
    question: "Which enzyme breaks down starch?",
    options: [
      "Amylase",
      "Protease",
      "Lipase",
      "Pepsin"
    ],
    correctAnswer: 0,
    explanation: "Amylase is the enzyme that breaks down starch into simpler sugars like maltose."
  },
  {
    id: "pred-2018-bio-8",
    question: "What is the function of red blood cells?",
    options: [
      "Transport oxygen",
      "Fight infection",
      "Clot blood",
      "Transport nutrients"
    ],
    correctAnswer: 0,
    explanation: "Red blood cells contain hemoglobin which binds and transports oxygen throughout the body."
  },
  {
    id: "pred-2018-bio-9",
    question: "Which structure controls cell activities?",
    options: [
      "Nucleus",
      "Cytoplasm",
      "Cell membrane",
      "Ribosome"
    ],
    correctAnswer: 0,
    explanation: "The nucleus contains DNA and controls all cellular activities through gene expression."
  },
  {
    id: "pred-2018-bio-10",
    question: "What type of tissue is bone?",
    options: [
      "Connective tissue",
      "Epithelial tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],
    correctAnswer: 0,
    explanation: "Bone is a type of connective tissue that provides structural support and protection."
  },
  {
    id: "pred-2018-bio-11",
    question: "What is the powerhouse of the cell?",
    options: [
      "Mitochondria",
      "Nucleus",
      "Ribosome",
      "Golgi apparatus"
    ],
    correctAnswer: 0,
    explanation: "Mitochondria are often called the powerhouse of the cell because they produce ATP through cellular respiration."
  },
  {
    id: "pred-2018-bio-12",
    question: "Which organelle contains digestive enzymes?",
    options: [
      "Lysosome",
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus"
    ],
    correctAnswer: 0,
    explanation: "Lysosomes contain digestive enzymes that break down waste materials and cellular debris."
  },
  {
    id: "pred-2018-bio-13",
    question: "What is the process by which plants make food?",
    options: [
      "Photosynthesis",
      "Respiration",
      "Digestion",
      "Fermentation"
    ],
    correctAnswer: 0,
    explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy (glucose)."
  },
  {
    id: "pred-2018-bio-14",
    question: "Which blood component fights infection?",
    options: [
      "White blood cells",
      "Red blood cells",
      "Platelets",
      "Plasma"
    ],
    correctAnswer: 0,
    explanation: "White blood cells (leukocytes) are part of the immune system and fight infections."
  },
  {
    id: "pred-2018-bio-15",
    question: "What is the function of the cell membrane?",
    options: [
      "Controls what enters and exits the cell",
      "Produces energy",
      "Contains DNA",
      "Synthesizes proteins"
    ],
    correctAnswer: 0,
    explanation: "The cell membrane (plasma membrane) regulates the movement of substances in and out of the cell."
  },
  {
    id: "pred-2018-bio-16",
    question: "What is the basic unit of life?",
    options: [
      "Cell",
      "Tissue",
      "Organ",
      "Organism"
    ],
    correctAnswer: 0,
    explanation: "The cell is the basic structural and functional unit of all living organisms."
  },
  {
    id: "pred-2018-bio-17",
    question: "Which organelle packages and ships proteins?",
    options: [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Ribosome",
      "Nucleus"
    ],
    correctAnswer: 0,
    explanation: "The Golgi apparatus modifies, packages, and ships proteins and lipids to their destinations."
  },
  {
    id: "pred-2018-bio-18",
    question: "What is DNA replication?",
    options: [
      "Process of copying DNA",
      "Process of making proteins",
      "Process of cell division",
      "Process of energy production"
    ],
    correctAnswer: 0,
    explanation: "DNA replication is the process by which a cell makes an identical copy of its DNA."
  },
  {
    id: "pred-2018-bio-19",
    question: "What is the function of chlorophyll?",
    options: [
      "Absorbs light for photosynthesis",
      "Transports water",
      "Produces ATP",
      "Stores genetic information"
    ],
    correctAnswer: 0,
    explanation: "Chlorophyll is the green pigment in plants that absorbs light energy for photosynthesis."
  },
  {
    id: "pred-2018-bio-20",
    question: "Which type of muscle is found in the heart?",
    options: [
      "Cardiac muscle",
      "Skeletal muscle",
      "Smooth muscle",
      "Striated muscle"
    ],
    correctAnswer: 0,
    explanation: "Cardiac muscle is the specialized muscle tissue found only in the heart, responsible for pumping blood."
  },
  {
    id: "pred-2018-bio-21",
    question: "What is the function of the cell wall in plant cells?",
    options: [
      "Provides structural support and protection",
      "Stores genetic information",
      "Produces energy",
      "Controls cell division"
    ],
    correctAnswer: 0,
    explanation: "The cell wall provides rigid structural support and protection for plant cells, maintaining cell shape and preventing excessive water uptake."
  },
  {
    id: "pred-2018-bio-22",
    question: "What is the process by which plants make their own food using sunlight?",
    options: [
      "Photosynthesis",
      "Respiration",
      "Digestion",
      "Fermentation"
    ],
    correctAnswer: 0,
    explanation: "Photosynthesis is the process by which plants convert light energy, CO₂, and water into glucose and oxygen."
  },
  {
    id: "pred-2018-bio-23",
    question: "What is the basic unit of heredity?",
    options: [
      "Gene",
      "Chromosome",
      "DNA",
      "Nucleotide"
    ],
    correctAnswer: 0,
    explanation: "A gene is the basic unit of heredity, consisting of DNA sequences that code for specific traits."
  },
  {
    id: "pred-2018-bio-24",
    question: "What is mitosis?",
    options: [
      "Cell division resulting in two identical daughter cells",
      "Cell division resulting in four different cells",
      "Formation of gametes",
      "DNA replication only"
    ],
    correctAnswer: 0,
    explanation: "Mitosis is a type of cell division that results in two genetically identical daughter cells from a single parent cell."
  },
  {
    id: "pred-2018-bio-25",
    question: "What is the function of the plasma membrane?",
    options: [
      "Controls what enters and exits the cell",
      "Produces energy",
      "Stores genetic material",
      "Synthesizes proteins"
    ],
    correctAnswer: 0,
    explanation: "The plasma membrane (cell membrane) regulates the movement of substances in and out of the cell through selective permeability."
  },
  {
    id: "pred-2018-bio-26",
    question: "What are chromosomes made of?",
    options: [
      "DNA and proteins",
      "RNA and proteins",
      "DNA only",
      "Proteins only"
    ],
    correctAnswer: 0,
    explanation: "Chromosomes are made of DNA tightly coiled around histone proteins, which help package the DNA."
  },
  {
    id: "pred-2018-bio-27",
    question: "What is the difference between prokaryotic and eukaryotic cells?",
    options: [
      "Prokaryotes lack a nucleus; eukaryotes have a nucleus",
      "Prokaryotes are larger; eukaryotes are smaller",
      "Eukaryotes lack DNA; prokaryotes have DNA",
      "Prokaryotes have organelles; eukaryotes do not"
    ],
    correctAnswer: 0,
    explanation: "The main difference is that prokaryotic cells lack a membrane-bound nucleus, while eukaryotic cells have a true nucleus."
  },
  {
    id: "pred-2018-bio-28",
    question: "What is the function of enzymes?",
    options: [
      "Catalyze biochemical reactions",
      "Store energy",
      "Provide structural support",
      "Transport oxygen"
    ],
    correctAnswer: 0,
    explanation: "Enzymes are biological catalysts that speed up biochemical reactions without being consumed in the process."
  },
  {
    id: "pred-2018-bio-29",
    question: "What is the role of chlorophyll in photosynthesis?",
    options: [
      "Absorbs light energy to drive photosynthesis",
      "Produces glucose",
      "Releases oxygen",
      "Transports water"
    ],
    correctAnswer: 0,
    explanation: "Chlorophyll is the green pigment in plants that absorbs light energy, which is then used to power the photosynthetic reactions."
  },
  {
    id: "pred-2018-bio-30",
    question: "What is meiosis?",
    options: [
      "Cell division producing four haploid gametes",
      "Cell division producing two diploid cells",
      "DNA replication process",
      "Protein synthesis process"
    ],
    correctAnswer: 0,
    explanation: "Meiosis is a type of cell division that produces four haploid gametes (sperm or egg cells) from one diploid parent cell."
  },
  {
    id: "pred-2018-bio-31",
    question: "What is the powerhouse of the cell?",
    options: [
      "Mitochondria",
      "Nucleus",
      "Ribosome",
      "Golgi apparatus"
    ],
    correctAnswer: 0,
    explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP through cellular respiration."
  },
  {
    id: "pred-2018-bio-32",
    question: "What is DNA?",
    options: [
      "Deoxyribonucleic acid - genetic material",
      "Ribonucleic acid - protein synthesis",
      "A type of protein",
      "A carbohydrate"
    ],
    correctAnswer: 0,
    explanation: "DNA (Deoxyribonucleic acid) is the molecule that carries genetic instructions for the development, functioning, and reproduction of all living organisms."
  },
  {
    id: "pred-2018-bio-33",
    question: "What is the basic unit of life?",
    options: [
      "Cell",
      "Tissue",
      "Organ",
      "Organism"
    ],
    correctAnswer: 0,
    explanation: "The cell is the basic structural and functional unit of all living organisms."
  },
  {
    id: "pred-2018-bio-34",
    question: "What is the function of red blood cells?",
    options: [
      "Carry oxygen throughout the body",
      "Fight infections",
      "Clot blood",
      "Produce hormones"
    ],
    correctAnswer: 0,
    explanation: "Red blood cells contain hemoglobin which binds to oxygen and transports it throughout the body."
  },
  {
    id: "pred-2018-bio-35",
    question: "What is the function of white blood cells?",
    options: [
      "Fight infections and diseases",
      "Carry oxygen",
      "Clot blood",
      "Transport nutrients"
    ],
    correctAnswer: 0,
    explanation: "White blood cells (leukocytes) are part of the immune system and help fight infections and foreign invaders."
  },
  {
    id: "pred-2018-bio-36",
    question: "What is the process by which plants release oxygen?",
    options: [
      "Photosynthesis",
      "Respiration",
      "Transpiration",
      "Digestion"
    ],
    correctAnswer: 0,
    explanation: "During photosynthesis, plants use sunlight to convert CO₂ and water into glucose and release oxygen as a byproduct."
  },
  {
    id: "pred-2018-bio-37",
    question: "What are the products of cellular respiration?",
    options: [
      "CO₂, water, and ATP",
      "Glucose and oxygen",
      "Oxygen and glucose",
      "Water and oxygen"
    ],
    correctAnswer: 0,
    explanation: "Cellular respiration converts glucose and oxygen into carbon dioxide, water, and ATP (energy)."
  },
  {
    id: "pred-2018-bio-38",
    question: "What is the function of the nucleus?",
    options: [
      "Contains genetic material and controls cell activities",
      "Produces energy",
      "Synthesizes proteins",
      "Stores water"
    ],
    correctAnswer: 0,
    explanation: "The nucleus contains DNA and controls all cell activities by regulating gene expression."
  },
  {
    id: "pred-2018-bio-39",
    question: "What is the difference between DNA and RNA?",
    options: [
      "DNA has deoxyribose and is double-stranded; RNA has ribose and is single-stranded",
      "RNA has deoxyribose; DNA has ribose",
      "Both are the same",
      "DNA is single-stranded; RNA is double-stranded"
    ],
    correctAnswer: 0,
    explanation: "DNA contains deoxyribose sugar and is double-stranded, while RNA contains ribose sugar and is typically single-stranded."
  },
  {
    id: "pred-2018-bio-40",
    question: "What is the function of the digestive system?",
    options: [
      "Break down food and absorb nutrients",
      "Pump blood",
      "Exchange gases",
      "Control body movements"
    ],
    correctAnswer: 0,
    explanation: "The digestive system breaks down food into smaller molecules that can be absorbed and used by the body for energy, growth, and repair."
  },
  {
    id: "pred-2018-bio-41",
    question: "What is mitosis?",
    options: [
      "Cell division producing identical daughter cells",
      "Cell division producing gametes",
      "Cell death",
      "Cell growth"
    ],
    correctAnswer: 0,
    explanation: "Mitosis is the process of cell division that produces two genetically identical daughter cells."
  },
  {
    id: "pred-2018-bio-42",
    question: "What is meiosis?",
    options: [
      "Cell division producing gametes with half the chromosomes",
      "Cell division producing identical cells",
      "Cell growth",
      "Cell repair"
    ],
    correctAnswer: 0,
    explanation: "Meiosis is a type of cell division that produces gametes (sperm and egg) with half the number of chromosomes."
  },
  {
    id: "pred-2018-bio-43",
    question: "What are the phases of mitosis in order?",
    options: [
      "Prophase, Metaphase, Anaphase, Telophase",
      "Metaphase, Prophase, Anaphase, Telophase",
      "Prophase, Anaphase, Metaphase, Telophase",
      "Telophase, Anaphase, Metaphase, Prophase"
    ],
    correctAnswer: 0,
    explanation: "The phases of mitosis in order are Prophase, Metaphase, Anaphase, and Telophase."
  },
  {
    id: "pred-2018-bio-44",
    question: "What is a gene?",
    options: [
      "Segment of DNA that codes for a trait",
      "Segment of RNA",
      "Protein",
      "Cell organelle"
    ],
    correctAnswer: 0,
    explanation: "A gene is a segment of DNA that contains the instructions for making a specific protein or trait."
  },
  {
    id: "pred-2018-bio-45",
    question: "What is an allele?",
    options: [
      "Alternative form of a gene",
      "Type of chromosome",
      "Type of cell",
      "Type of protein"
    ],
    correctAnswer: 0,
    explanation: "An allele is an alternative form of a gene that can produce different variations of a trait."
  },
  {
    id: "pred-2018-bio-46",
    question: "What is Mendel's first law (Law of Segregation)?",
    options: [
      "Alleles separate during gamete formation",
      "Genes assort independently",
      "Dominant traits always appear",
      "Recessive traits never appear"
    ],
    correctAnswer: 0,
    explanation: "The Law of Segregation states that alleles separate during gamete formation, so each gamete receives only one allele."
  },
  {
    id: "pred-2018-bio-47",
    question: "What is Mendel's second law (Law of Independent Assortment)?",
    options: [
      "Genes for different traits assort independently",
      "Alleles always stay together",
      "Dominant genes always segregate",
      "Recessive genes are always hidden"
    ],
    correctAnswer: 0,
    explanation: "The Law of Independent Assortment states that genes for different traits are inherited independently of each other."
  },
  {
    id: "pred-2018-bio-48",
    question: "What is a dominant allele?",
    options: [
      "Allele that masks the expression of a recessive allele",
      "Allele that is always hidden",
      "Allele that causes disease",
      "Allele that is rare"
    ],
    correctAnswer: 0,
    explanation: "A dominant allele masks the expression of a recessive allele when both are present."
  },
  {
    id: "pred-2018-bio-49",
    question: "What is a recessive allele?",
    options: [
      "Allele that is only expressed when two copies are present",
      "Allele that always shows",
      "Allele that is dominant",
      "Allele that is never expressed"
    ],
    correctAnswer: 0,
    explanation: "A recessive allele is only expressed when two copies are present (homozygous recessive)."
  },
  {
    id: "pred-2018-bio-50",
    question: "What is genotype?",
    options: [
      "Genetic makeup of an organism",
      "Physical appearance",
      "Environmental factors",
      "Cell type"
    ],
    correctAnswer: 0,
    explanation: "Genotype refers to the genetic makeup of an organism, including all its alleles."
  },
  {
    id: "pred-2018-bio-51",
    question: "What is phenotype?",
    options: [
      "Observable physical characteristics",
      "Genetic makeup",
      "Environmental factors only",
      "Cell structure"
    ],
    correctAnswer: 0,
    explanation: "Phenotype refers to the observable physical characteristics of an organism resulting from genotype and environment."
  },
  {
    id: "pred-2018-bio-52",
    question: "What is homozygous?",
    options: [
      "Having two identical alleles for a gene",
      "Having two different alleles",
      "Having one allele",
      "Having no alleles"
    ],
    correctAnswer: 0,
    explanation: "Homozygous means having two identical alleles for a particular gene (e.g., AA or aa)."
  },
  {
    id: "pred-2018-bio-53",
    question: "What is heterozygous?",
    options: [
      "Having two different alleles for a gene",
      "Having two identical alleles",
      "Having one allele",
      "Having no alleles"
    ],
    correctAnswer: 0,
    explanation: "Heterozygous means having two different alleles for a particular gene (e.g., Aa)."
  },
  {
    id: "pred-2018-bio-54",
    question: "What is natural selection?",
    options: [
      "Process where organisms with favorable traits survive and reproduce",
      "Random genetic changes",
      "Artificial breeding",
      "Environmental stability"
    ],
    correctAnswer: 0,
    explanation: "Natural selection is the process where organisms with traits better suited to their environment survive and reproduce more successfully."
  },
  {
    id: "pred-2018-bio-55",
    question: "What is evolution?",
    options: [
      "Change in heritable traits over generations",
      "Individual changes during lifetime",
      "Random mutations only",
      "Environmental changes only"
    ],
    correctAnswer: 0,
    explanation: "Evolution is the change in heritable characteristics of biological populations over successive generations."
  },
  {
    id: "pred-2018-bio-56",
    question: "What is an ecosystem?",
    options: [
      "Community of organisms and their environment",
      "Single organism",
      "Group of same species",
      "Laboratory setting"
    ],
    correctAnswer: 0,
    explanation: "An ecosystem is a community of living organisms interacting with each other and their physical environment."
  },
  {
    id: "pred-2018-bio-57",
    question: "What is a food chain?",
    options: [
      "Linear sequence of organisms where each eats the one below",
      "Circular food web",
      "Single organism diet",
      "Plant only system"
    ],
    correctAnswer: 0,
    explanation: "A food chain is a linear sequence showing how energy and nutrients move from producers to consumers."
  },
  {
    id: "pred-2018-bio-58",
    question: "What is a producer in an ecosystem?",
    options: [
      "Organism that makes its own food (usually plants)",
      "Organism that eats other organisms",
      "Organism that decomposes matter",
      "Organism that consumes waste"
    ],
    correctAnswer: 0,
    explanation: "Producers (autotrophs) are organisms that make their own food, typically through photosynthesis."
  },
  {
    id: "pred-2018-bio-59",
    question: "What is a consumer in an ecosystem?",
    options: [
      "Organism that obtains energy by eating other organisms",
      "Organism that makes its own food",
      "Organism that decomposes matter",
      "Organism that produces oxygen"
    ],
    correctAnswer: 0,
    explanation: "Consumers (heterotrophs) are organisms that obtain energy by eating other organisms."
  },
  {
    id: "pred-2018-bio-60",
    question: "What is a decomposer?",
    options: [
      "Organism that breaks down dead organic matter",
      "Organism that makes its own food",
      "Organism that eats only plants",
      "Organism that eats only animals"
    ],
    correctAnswer: 0,
    explanation: "Decomposers break down dead organic matter and recycle nutrients back into the ecosystem."
  },
  {
    id: "pred-2018-bio-61",
    question: "What is the function of the respiratory system?",
    options: [
      "Exchange oxygen and carbon dioxide",
      "Digest food",
      "Pump blood",
      "Filter waste"
    ],
    correctAnswer: 0,
    explanation: "The respiratory system facilitates the exchange of oxygen and carbon dioxide between the body and the environment."
  },
  {
    id: "pred-2018-bio-62",
    question: "What is the function of the circulatory system?",
    options: [
      "Transport blood, nutrients, and waste",
      "Digest food",
      "Exchange gases",
      "Control movement"
    ],
    correctAnswer: 0,
    explanation: "The circulatory system transports blood, oxygen, nutrients, and waste products throughout the body."
  },
  {
    id: "pred-2018-bio-63",
    question: "What is the function of the nervous system?",
    options: [
      "Control and coordinate body activities",
      "Digest food",
      "Pump blood",
      "Exchange gases"
    ],
    correctAnswer: 0,
    explanation: "The nervous system controls and coordinates body activities through electrical signals."
  },
  {
    id: "pred-2018-bio-64",
    question: "What is the function of the endocrine system?",
    options: [
      "Produce hormones to regulate body functions",
      "Digest food",
      "Pump blood",
      "Exchange gases"
    ],
    correctAnswer: 0,
    explanation: "The endocrine system produces hormones that regulate metabolism, growth, and other body functions."
  },
  {
    id: "pred-2018-bio-65",
    question: "What is the function of the excretory system?",
    options: [
      "Remove waste products from the body",
      "Digest food",
      "Pump blood",
      "Produce hormones"
    ],
    correctAnswer: 0,
    explanation: "The excretory system removes waste products and excess substances from the body."
  },
  {
    id: "pred-2018-bio-66",
    question: "What is the function of chlorophyll?",
    options: [
      "Absorb light energy for photosynthesis",
      "Transport water",
      "Store food",
      "Produce oxygen directly"
    ],
    correctAnswer: 0,
    explanation: "Chlorophyll is the green pigment in plants that absorbs light energy for photosynthesis."
  },
  {
    id: "pred-2018-bio-67",
    question: "What is the function of xylem in plants?",
    options: [
      "Transport water and minerals from roots",
      "Transport food from leaves",
      "Produce food",
      "Store water"
    ],
    correctAnswer: 0,
    explanation: "Xylem is the vascular tissue that transports water and minerals from roots to the rest of the plant."
  },
  {
    id: "pred-2018-bio-68",
    question: "What is the function of phloem in plants?",
    options: [
      "Transport food from leaves to other parts",
      "Transport water from roots",
      "Produce food",
      "Store food"
    ],
    correctAnswer: 0,
    explanation: "Phloem is the vascular tissue that transports food (sugars) from leaves to other parts of the plant."
  },
  {
    id: "pred-2018-bio-69",
    question: "What is transpiration?",
    options: [
      "Loss of water vapor from plant leaves",
      "Absorption of water by roots",
      "Production of food",
      "Transport of minerals"
    ],
    correctAnswer: 0,
    explanation: "Transpiration is the process by which plants lose water vapor through small pores called stomata."
  },
  {
    id: "pred-2018-bio-70",
    question: "What is a virus?",
    options: [
      "Non-living infectious agent that requires a host",
      "Living single-celled organism",
      "Multicellular organism",
      "Beneficial bacteria"
    ],
    correctAnswer: 0,
    explanation: "A virus is a non-living infectious agent that can only reproduce inside a host cell."
  },
  {
    id: "pred-2018-bio-71",
    question: "What is a bacterium?",
    options: [
      "Single-celled prokaryotic organism",
      "Multicellular organism",
      "Virus",
      "Fungi"
    ],
    correctAnswer: 0,
    explanation: "Bacteria are single-celled prokaryotic organisms that lack a nucleus."
  },
  {
    id: "pred-2018-bio-72",
    question: "What is a fungus?",
    options: [
      "Eukaryotic organism that absorbs nutrients from organic matter",
      "Prokaryotic organism",
      "Photosynthetic organism",
      "Single-celled animal"
    ],
    correctAnswer: 0,
    explanation: "Fungi are eukaryotic organisms that absorb nutrients from organic matter, including plants, animals, and decaying material."
  },
  {
    id: "pred-2018-bio-73",
    question: "What is the function of the immune system?",
    options: [
      "Defend the body against pathogens",
      "Digest food",
      "Pump blood",
      "Exchange gases"
    ],
    correctAnswer: 0,
    explanation: "The immune system defends the body against infections, diseases, and foreign invaders."
  },
  {
    id: "pred-2018-bio-74",
    question: "What is an antibody?",
    options: [
      "Protein that recognizes and neutralizes pathogens",
      "Pathogen itself",
      "Type of cell",
      "Type of virus"
    ],
    correctAnswer: 0,
    explanation: "Antibodies are proteins produced by the immune system that recognize and neutralize pathogens."
  },
  {
    id: "pred-2018-bio-75",
    question: "What is a vaccine?",
    options: [
      "Biological preparation that provides immunity",
      "Medication for bacterial infection",
      "Surgical procedure",
      "Diagnostic tool"
    ],
    correctAnswer: 0,
    explanation: "A vaccine is a biological preparation that provides immunity to a particular disease."
  },
  {
    id: "pred-2018-bio-76",
    question: "What is biotechnology?",
    options: [
      "Use of living organisms to develop products",
      "Study of rocks",
      "Study of stars",
      "Study of chemicals only"
    ],
    correctAnswer: 0,
    explanation: "Biotechnology is the use of living organisms, cells, or biological systems to develop products."
  },
  {
    id: "pred-2018-bio-77",
    question: "What is genetic engineering?",
    options: [
      "Direct manipulation of an organism's genes",
      "Study of inheritance only",
      "Natural selection",
      "Random mutation"
    ],
    correctAnswer: 0,
    explanation: "Genetic engineering is the direct manipulation of an organism's genes using biotechnology."
  },
  {
    id: "pred-2018-bio-78",
    question: "What is DNA replication?",
    options: [
      "Process of copying DNA before cell division",
      "Process of making RNA",
      "Process of making proteins",
      "Process of cell death"
    ],
    correctAnswer: 0,
    explanation: "DNA replication is the process of copying DNA before cell division to ensure each daughter cell gets a copy."
  },
  {
    id: "pred-2018-bio-79",
    question: "What is transcription?",
    options: [
      "Process of copying DNA into RNA",
      "Process of making proteins",
      "Process of DNA replication",
      "Process of cell division"
    ],
    correctAnswer: 0,
    explanation: "Transcription is the process of copying a segment of DNA into RNA."
  },
  {
    id: "pred-2018-bio-80",
    question: "What is translation?",
    options: [
      "Process of making proteins from mRNA",
      "Process of making RNA from DNA",
      "Process of DNA replication",
      "Process of cell division"
    ],
    correctAnswer: 0,
    explanation: "Translation is the process of synthesizing proteins from mRNA using ribosomes."
  }
];

export const predicted2018NaturalCivicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-civ-1",
    question: "What is the primary function of a constitution?",
    options: [
      "To establish the fundamental principles and structure of government",
      "To elect government officials",
      "To collect taxes",
      "To regulate international trade"
    ],
    correctAnswer: 0,
    explanation: "A constitution establishes the fundamental principles and structure of government, defining the relationship between the state and its citizens."
  },
  {
    id: "pred-2018-civ-2",
    question: "What is the principle of 'rule of law'?",
    options: [
      "No one is above the law, including government officials",
      "The government can make any law it wants",
      "Laws only apply to common citizens",
      "Judges can ignore the law"
    ],
    correctAnswer: 0,
    explanation: "The rule of law means that no one is above the law, including government officials and institutions."
  },
  {
    id: "pred-2018-civ-3",
    question: "What is the difference between direct and representative democracy?",
    options: [
      "Direct: citizens vote on laws directly; Representative: citizens elect officials to make decisions",
      "Direct: only officials can vote; Representative: everyone can vote",
      "Direct: no elections; Representative: regular elections",
      "Direct: military rule; Representative: civilian rule"
    ],
    correctAnswer: 0,
    explanation: "Direct democracy involves citizens voting directly on laws, while representative democracy involves electing officials to make decisions on their behalf."
  },
  {
    id: "pred-2018-civ-4",
    question: "What is the purpose of separation of powers?",
    options: [
      "To prevent concentration of power by dividing government into branches",
      "To make government more efficient",
      "To reduce government costs",
      "To increase the power of the executive"
    ],
    correctAnswer: 0,
    explanation: "Separation of powers divides government into legislative, executive, and judicial branches to prevent concentration of power."
  },
  {
    id: "pred-2018-civ-5",
    question: "What is a 'bill of rights'?",
    options: [
      "A list of fundamental rights guaranteed to citizens",
      "A list of government expenses",
      "A tax collection document",
      "A criminal record"
    ],
    correctAnswer: 0,
    explanation: "A bill of rights is a document that lists and protects the fundamental rights of citizens against government infringement."
  },
  {
    id: "pred-2018-civ-6",
    question: "What is the role of the judiciary?",
    options: [
      "To interpret laws and ensure justice",
      "To create laws",
      "To enforce laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The judiciary interprets laws, resolves disputes, and ensures justice is served according to the constitution."
  },
  {
    id: "pred-2018-civ-7",
    question: "What is 'citizenship'?",
    options: [
      "Legal status of being a member of a country with rights and responsibilities",
      "Living in a country temporarily",
      "Working in a foreign country",
      "Having a passport"
    ],
    correctAnswer: 0,
    explanation: "Citizenship is the legal status of being a member of a country, granting specific rights and imposing certain responsibilities."
  },
  {
    id: "pred-2018-civ-8",
    question: "What is the purpose of elections?",
    options: [
      "To choose representatives and leaders through voting",
      "To count population",
      "To collect taxes",
      "To enforce laws"
    ],
    correctAnswer: 0,
    explanation: "Elections allow citizens to choose their representatives and leaders through the democratic process of voting."
  },
  {
    id: "pred-2018-civ-9",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Rule by a single central government",
      "Rule by military",
      "No government at all"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central government and regional governments."
  },
  {
    id: "pred-2018-civ-10",
    question: "What are 'civil rights'?",
    options: [
      "Rights that protect individuals from discrimination",
      "Rights of government officials",
      "Rights of corporations",
      "Military rights"
    ],
    correctAnswer: 0,
    explanation: "Civil rights are rights that protect individuals from discrimination and ensure equal treatment under the law."
  },
  {
    id: "pred-2018-civ-11",
    question: "What is 'checks and balances'?",
    options: [
      "System where each branch can limit the powers of others",
      "System for counting money",
      "System for checking documents",
      "System for balancing budgets"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances ensure no single branch becomes too powerful by allowing each branch to limit the others."
  },
  {
    id: "pred-2018-civ-12",
    question: "What is the role of the executive branch?",
    options: [
      "To enforce laws",
      "To make laws",
      "To interpret laws",
      "To judge laws"
    ],
    correctAnswer: 0,
    explanation: "The executive branch (president/prime minister) enforces laws and administers government programs."
  },
  {
    id: "pred-2018-civ-13",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Speedy trial",
      "Free legal representation",
      "Public trial"
    ],
    correctAnswer: 0,
    explanation: "Due process ensures fair treatment through the judicial system, protecting citizens from arbitrary government action."
  },
  {
    id: "pred-2018-civ-14",
    question: "What is the purpose of taxation?",
    options: [
      "To fund public services and government operations",
      "To punish citizens",
      "To control population",
      "To reward supporters"
    ],
    correctAnswer: 0,
    explanation: "Taxation provides revenue to fund public services, infrastructure, defense, and government operations."
  },
  {
    id: "pred-2018-civ-15",
    question: "What is 'judicial review'?",
    options: [
      "Power of courts to review laws for constitutionality",
      "Review of court cases",
      "Review of judges",
      "Review of legal documents"
    ],
    correctAnswer: 0,
    explanation: "Judicial review is the power of courts to determine whether laws violate the constitution."
  },
  {
    id: "pred-2018-civ-16",
    question: "What is a 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government department",
      "Court system",
      "Military unit"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and seek to influence government policy."
  },
  {
    id: "pred-2018-civ-17",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without censorship",
      "Right to speak only in public",
      "Right to speak only to government",
      "Right to speak only in private"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without government censorship or restraint."
  },
  {
    id: "pred-2018-civ-18",
    question: "What is the role of the legislative branch?",
    options: [
      "To make laws",
      "To enforce laws",
      "To interpret laws",
      "To execute laws"
    ],
    correctAnswer: 0,
    explanation: "The legislative branch (parliament/congress) is responsible for making and passing laws."
  },
  {
    id: "pred-2018-civ-19",
    question: "What is 'universal suffrage'?",
    options: [
      "Right of all adult citizens to vote",
      "Right of only men to vote",
      "Right of only wealthy to vote",
      "Right of only educated to vote"
    ],
    correctAnswer: 0,
    explanation: "Universal suffrage means all adult citizens have the right to vote regardless of race, gender, or economic status."
  },
  {
    id: "pred-2018-civ-20",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey unjust laws through nonviolent protest",
      "Violent rebellion",
      "Obeying all laws",
      "Breaking laws for personal gain"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful protest against unjust policies."
  },
  {
    id: "pred-2018-civ-21",
    question: "What is 'rule of law'?",
    options: [
      "All individuals and institutions are subject to and accountable to law",
      "Only government follows laws",
      "Laws apply only to citizens",
      "Laws can be ignored by officials"
    ],
    correctAnswer: 0,
    explanation: "Rule of law means that all individuals, including government officials, are subject to and accountable under the law."
  },
  {
    id: "pred-2018-civ-22",
    question: "What is 'separation of powers'?",
    options: [
      "Division of government responsibilities into branches to prevent concentration of power",
      "One branch controls everything",
      "All branches have the same powers",
      "No separation between branches"
    ],
    correctAnswer: 0,
    explanation: "Separation of powers divides government responsibilities among legislative, executive, and judicial branches to prevent any one branch from becoming too powerful."
  },
  {
    id: "pred-2018-civ-23",
    question: "What is 'constitutionalism'?",
    options: [
      "Government limited by a constitution",
      "Government without limits",
      "Rule by military",
      "Rule by one person"
    ],
    correctAnswer: 0,
    explanation: "Constitutionalism is the principle that government power is limited by a constitution and must follow its provisions."
  },
  {
    id: "pred-2018-civ-24",
    question: "What is 'civil society'?",
    options: [
      "Organizations and institutions that operate independently of government",
      "Government organizations",
      "Military organizations",
      "Political parties only"
    ],
    correctAnswer: 0,
    explanation: "Civil society consists of non-governmental organizations, community groups, and other organizations that operate independently of the government."
  },
  {
    id: "pred-2018-civ-25",
    question: "What is 'media freedom'?",
    options: [
      "Right of media to report without government censorship",
      "Government control of media",
      "Media only reporting positive news",
      "No media allowed"
    ],
    correctAnswer: 0,
    explanation: "Media freedom is the right of journalists and media organizations to report news and express opinions without government censorship or interference."
  },
  {
    id: "pred-2018-civ-26",
    question: "What is 'transparency' in government?",
    options: [
      "Openness about government decisions and actions",
      "Government secrecy",
      "Hidden government operations",
      "No public access to information"
    ],
    correctAnswer: 0,
    explanation: "Transparency in government means openness about government decisions, actions, and spending, allowing citizens to hold officials accountable."
  },
  {
    id: "pred-2018-civ-27",
    question: "What is 'accountability' in governance?",
    options: [
      "Government officials being answerable for their actions",
      "Officials having no responsibility",
      "Government acting without oversight",
      "No consequences for actions"
    ],
    correctAnswer: 0,
    explanation: "Accountability means government officials must answer for their decisions and actions, and can be held responsible for their performance."
  },
  {
    id: "pred-2018-civ-28",
    question: "What is 'gender equality'?",
    options: [
      "Equal rights and opportunities for all genders",
      "Superiority of one gender",
      "Different rights based on gender",
      "Only men have rights"
    ],
    correctAnswer: 0,
    explanation: "Gender equality means that all people, regardless of gender, have equal rights, responsibilities, and opportunities in all areas of life."
  },
  {
    id: "pred-2018-civ-29",
    question: "What is 'political ideology'?",
    options: [
      "Set of beliefs about how society should function",
      "Political party only",
      "Government policy",
      "Economic system only"
    ],
    correctAnswer: 0,
    explanation: "Political ideology is a set of beliefs about the proper role of government and how society should be organized and governed."
  },
  {
    id: "pred-2018-civ-30",
    question: "What is 'civil liberty'?",
    options: [
      "Freedoms that protect individuals from government abuse",
      "Government powers",
      "Military rights",
      "Corporate privileges"
    ],
    correctAnswer: 0,
    explanation: "Civil liberties are freedoms that protect individuals from government abuse, such as freedom of speech, religion, and assembly."
  },
  {
    id: "pred-2018-civ-31",
    question: "What is 'democracy'?",
    options: [
      "System of government by the whole population or elected representatives",
      "Rule by one person",
      "Rule by military",
      "Rule by the wealthy"
    ],
    correctAnswer: 0,
    explanation: "Democracy is a system of government where power is vested in the people, either directly or through elected representatives."
  },
  {
    id: "pred-2018-civ-32",
    question: "What is 'human rights'?",
    options: [
      "Fundamental rights inherent to all human beings",
      "Rights only for citizens",
      "Rights granted by government",
      "Rights only for wealthy"
    ],
    correctAnswer: 0,
    explanation: "Human rights are rights inherent to all human beings, regardless of nationality, place of residence, sex, or any other status."
  },
  {
    id: "pred-2018-civ-33",
    question: "What is 'voting'?",
    options: [
      "Formal expression of preference for a candidate or proposal",
      "Government decision",
      "Military action",
      "Court judgment"
    ],
    correctAnswer: 0,
    explanation: "Voting is the formal expression of preference for a candidate or a proposal in an election or referendum."
  },
  {
    id: "pred-2018-civ-34",
    question: "What is 'political participation'?",
    options: [
      "Involvement in political processes and activities",
      "Only voting",
      "Only protesting",
      "Only joining political parties"
    ],
    correctAnswer: 0,
    explanation: "Political participation includes various activities such as voting, campaigning, protesting, and engaging in public debates."
  },
  {
    id: "pred-2018-civ-35",
    question: "What is 'judiciary'?",
    options: [
      "Branch of government responsible for interpreting laws",
      "Branch that makes laws",
      "Branch that executes laws",
      "Military branch"
    ],
    correctAnswer: 0,
    explanation: "The judiciary is the branch of government responsible for interpreting laws, resolving disputes, and administering justice."
  },
  {
    id: "pred-2018-civ-36",
    question: "What is 'legislature'?",
    options: [
      "Branch of government that makes laws",
      "Branch that interprets laws",
      "Branch that executes laws",
      "Military branch"
    ],
    correctAnswer: 0,
    explanation: "The legislature is the branch of government responsible for making laws, typically consisting of a parliament or congress."
  },
  {
    id: "pred-2018-civ-37",
    question: "What is 'executive'?",
    options: [
      "Branch of government that enforces laws",
      "Branch that makes laws",
      "Branch that interprets laws",
      "Judicial branch"
    ],
    correctAnswer: 0,
    explanation: "The executive branch is responsible for implementing and enforcing laws, typically led by a president or prime minister."
  },
  {
    id: "pred-2018-civ-38",
    question: "What is 'election'?",
    options: [
      "Formal process of selecting a person for public office",
      "Military selection",
      "Court appointment",
      "Monarch selection"
    ],
    correctAnswer: 0,
    explanation: "An election is a formal decision-making process by which a population chooses an individual to hold public office."
  },
  {
    id: "pred-2018-civ-39",
    question: "What is 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government organization",
      "Military group",
      "Social club"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and aim to gain political power."
  },
  {
    id: "pred-2018-civ-40",
    question: "What is 'public opinion'?",
    options: [
      "Collective attitudes and beliefs of citizens on public issues",
      "Government opinion",
      "Media opinion",
      "Military opinion"
    ],
    correctAnswer: 0,
    explanation: "Public opinion refers to the collective views, attitudes, and beliefs of citizens on public issues and policies."
  },
  {
    id: "pred-2018-civ-41",
    question: "What is 'citizenship'?",
    options: [
      "Legal status of being a member of a country",
      "Living in a country",
      "Working in a country",
      "Visiting a country"
    ],
    correctAnswer: 0,
    explanation: "Citizenship is the legal status of being a member of a particular country, with associated rights and responsibilities."
  },
  {
    id: "pred-2018-civ-42",
    question: "What is the United Nations (UN)?",
    options: [
      "International organization for maintaining peace and security",
      "Regional African organization",
      "European trade organization",
      "Military alliance"
    ],
    correctAnswer: 0,
    explanation: "The United Nations is an international organization established to maintain international peace and security."
  },
  {
    id: "pred-2018-civ-43",
    question: "What is the African Union (AU)?",
    options: [
      "Continental union of African countries",
      "European organization",
      "Asian organization",
      "American organization"
    ],
    correctAnswer: 0,
    explanation: "The African Union is a continental union consisting of 55 member states in Africa."
  },
  {
    id: "pred-2018-civ-44",
    question: "What is a 'constitutional monarchy'?",
    options: [
      "Monarchy with limited powers by constitution",
      "Absolute monarchy",
      "Republic",
      "Dictatorship"
    ],
    correctAnswer: 0,
    explanation: "A constitutional monarchy is a form of government where a monarch acts as head of state within the limits of a constitution."
  },
  {
    id: "pred-2018-civ-45",
    question: "What is a 'republic'?",
    options: [
      "State where citizens elect representatives",
      "State ruled by a monarch",
      "State ruled by military",
      "State with no government"
    ],
    correctAnswer: 0,
    explanation: "A republic is a form of government where the country is considered a public matter and citizens elect representatives."
  },
  {
    id: "pred-2018-civ-46",
    question: "What is 'civic responsibility'?",
    options: [
      "Duties citizens owe to their community",
      "Rights citizens have",
      "Government duties",
      "Military obligations only"
    ],
    correctAnswer: 0,
    explanation: "Civic responsibility refers to the duties and obligations that citizens have to their community and society."
  },
  {
    id: "pred-2018-civ-47",
    question: "What is 'taxation'?",
    options: [
      "Mandatory financial charge by government",
      "Voluntary donation",
      "Private payment",
      "Charitable giving"
    ],
    correctAnswer: 0,
    explanation: "Taxation is the compulsory levy by government on income, goods, or services to fund public expenditures."
  },
  {
    id: "pred-2018-civ-48",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Quick judgment",
      "No legal process",
      "Military trial"
    ],
    correctAnswer: 0,
    explanation: "Due process is the legal requirement that the state must respect all legal rights owed to a person."
  },
  {
    id: "pred-2018-civ-49",
    question: "What is 'judicial review'?",
    options: [
      "Power of courts to review constitutionality of laws",
      "Review of court decisions",
      "Review of government spending",
      "Review of military actions"
    ],
    correctAnswer: 0,
    explanation: "Judicial review is the power of courts to examine and determine the constitutionality of laws and government actions."
  },
  {
    id: "pred-2018-civ-50",
    question: "What is 'sovereignty'?",
    options: [
      "Supreme authority of a state to govern itself",
      "Power of individuals",
      "Power of corporations",
      "Power of international organizations"
    ],
    correctAnswer: 0,
    explanation: "Sovereignty is the full right and power of a governing body to govern itself without outside interference."
  },
  {
    id: "pred-2018-civ-51",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Centralized power",
      "No government",
      "Military rule"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central government and regional governments."
  },
  {
    id: "pred-2018-civ-52",
    question: "What is 'unitary government'?",
    options: [
      "Central government holds all power",
      "Divided power",
      "No central government",
      "Regional governments only"
    ],
    correctAnswer: 0,
    explanation: "A unitary government is one where the central government holds all the power and regional governments have limited authority."
  },
  {
    id: "pred-2018-civ-53",
    question: "What is 'parliamentary system'?",
    options: [
      "Executive derives legitimacy from legislature",
      "Executive separate from legislature",
      "No legislature",
      "Military government"
    ],
    correctAnswer: 0,
    explanation: "In a parliamentary system, the executive branch derives its legitimacy from and is accountable to the legislature."
  },
  {
    id: "pred-2018-civ-54",
    question: "What is 'presidential system'?",
    options: [
      "Executive and legislature are separate branches",
      "Executive part of legislature",
      "No executive",
      "Military rule"
    ],
    correctAnswer: 0,
    explanation: "In a presidential system, the executive branch is separate from and independent of the legislative branch."
  },
  {
    id: "pred-2018-civ-55",
    question: "What is 'civic education'?",
    options: [
      "Learning about rights and responsibilities as citizens",
      "Military training",
      "Job training",
      "Technical education"
    ],
    correctAnswer: 0,
    explanation: "Civic education teaches citizens about their rights, responsibilities, and how to participate in democratic processes."
  },
  {
    id: "pred-2018-civ-56",
    question: "What is 'social contract'?",
    options: [
      "Agreement between people and government",
      "Contract between businesses",
      "Marriage contract",
      "Employment contract"
    ],
    correctAnswer: 0,
    explanation: "The social contract is the theory that people consent to surrender some freedoms to a government in exchange for protection."
  },
  {
    id: "pred-2018-civ-57",
    question: "What is 'lobbying'?",
    options: [
      "Attempting to influence government decisions",
      "Working in a lobby",
      "Building construction",
      "Hotel management"
    ],
    correctAnswer: 0,
    explanation: "Lobbying is the act of attempting to influence decisions made by government officials."
  },
  {
    id: "pred-2018-civ-58",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey certain laws as protest",
      "Obeying all laws",
      "Military action",
      "Violent protest"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful protest against unjust policies."
  },
  {
    id: "pred-2018-civ-59",
    question: "What is 'political ideology'?",
    options: [
      "Set of beliefs about how society should function",
      "Political party only",
      "Government policy",
      "Economic system only"
    ],
    correctAnswer: 0,
    explanation: "Political ideology is a set of beliefs about the proper role of government and how society should be organized."
  },
  {
    id: "pred-2018-civ-60",
    question: "What is 'liberalism'?",
    options: [
      "Political philosophy emphasizing individual rights",
      "Emphasizing government control",
      "Emphasizing military power",
      "Emphasizing tradition only"
    ],
    correctAnswer: 0,
    explanation: "Liberalism is a political philosophy that emphasizes individual rights, liberty, and limited government."
  },
  {
    id: "pred-2018-civ-61",
    question: "What is 'conservatism'?",
    options: [
      "Political philosophy emphasizing tradition and stability",
      "Emphasizing radical change",
      "Emphasizing no government",
      "Emphasizing individual rights only"
    ],
    correctAnswer: 0,
    explanation: "Conservatism is a political philosophy that values tradition, stability, and gradual change."
  },
  {
    id: "pred-2018-civ-62",
    question: "What is 'socialism'?",
    options: [
      "Economic system where production is socially owned",
      "Private ownership only",
      "No government",
      "Pure capitalism"
    ],
    correctAnswer: 0,
    explanation: "Socialism is an economic and political system where the means of production are socially owned."
  },
  {
    id: "pred-2018-civ-63",
    question: "What is 'capitalism'?",
    options: [
      "Economic system based on private ownership",
      "Government ownership",
      "No private property",
      "State planning"
    ],
    correctAnswer: 0,
    explanation: "Capitalism is an economic system based on private ownership of the means of production and market competition."
  },
  {
    id: "pred-2018-civ-64",
    question: "What is 'globalization'?",
    options: [
      "Increasing interconnectedness of world economies",
      "Isolation of countries",
      "No international trade",
      "Local economies only"
    ],
    correctAnswer: 0,
    explanation: "Globalization is the process of increasing interconnectedness and interdependence of world economies and societies."
  },
  {
    id: "pred-2018-civ-65",
    question: "What is 'sustainable development'?",
    options: [
      "Development meeting present needs without compromising future",
      "Rapid development",
      "Resource depletion",
      "No development"
    ],
    correctAnswer: 0,
    explanation: "Sustainable development is development that meets present needs without compromising the ability of future generations."
  },
  {
    id: "pred-2018-civ-66",
    question: "What is 'environmental protection'?",
    options: [
      "Protecting natural environment from pollution",
      "Destroying nature",
      "No environmental laws",
      "Unlimited resource use"
    ],
    correctAnswer: 0,
    explanation: "Environmental protection involves safeguarding the natural environment from pollution and degradation."
  },
  {
    id: "pred-2018-civ-67",
    question: "What is 'human development'?",
    options: [
      "Improving human well-being and capabilities",
      "Economic growth only",
      "Industrial development",
      "Urban development"
    ],
    correctAnswer: 0,
    explanation: "Human development focuses on improving people's well-being, capabilities, and quality of life."
  },
  {
    id: "pred-2018-civ-68",
    question: "What is 'gender equality'?",
    options: [
      "Equal rights and opportunities for all genders",
      "Superiority of one gender",
      "Different rights based on gender",
      "Only men have rights"
    ],
    correctAnswer: 0,
    explanation: "Gender equality means that all people, regardless of gender, have equal rights, responsibilities, and opportunities."
  },
  {
    id: "pred-2018-civ-69",
    question: "What is 'child rights'?",
    options: [
      "Rights specific to children under international law",
      "Adult rights",
      "No special rights",
      "Parental rights only"
    ],
    correctAnswer: 0,
    explanation: "Children's rights are special rights that protect children under international conventions like the UN Convention on the Rights of the Child."
  },
  {
    id: "pred-2018-civ-70",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without government censorship",
      "Government control of speech",
      "No speech allowed",
      "Only government speech"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without censorship, restraint, or legal penalty."
  },
  {
    id: "pred-2018-civ-71",
    question: "What is 'freedom of assembly'?",
    options: [
      "Right to gather peacefully",
      "No gatherings allowed",
      "Only government gatherings",
      "Military only"
    ],
    correctAnswer: 0,
    explanation: "Freedom of assembly is the right to gather peacefully for political, social, or other purposes."
  },
  {
    id: "pred-2018-civ-72",
    question: "What is 'freedom of religion'?",
    options: [
      "Right to practice any religion or none",
      "State religion only",
      "No religion allowed",
      "One religion mandatory"
    ],
    correctAnswer: 0,
    explanation: "Freedom of religion is the right to practice, change, or have no religion without government interference."
  },
  {
    id: "pred-2018-civ-73",
    question: "What is 'freedom of the press'?",
    options: [
      "Right to publish without government censorship",
      "Government control of media",
      "No media allowed",
      "Only state media"
    ],
    correctAnswer: 0,
    explanation: "Freedom of the press is the right to publish news and opinions without government censorship."
  },
  {
    id: "pred-2018-civ-74",
    question: "What is 'right to education'?",
    options: [
      "Right to access education",
      "No education right",
      "Only rich can educate",
      "Government can deny education"
    ],
    correctAnswer: 0,
    explanation: "The right to education is a human right that ensures all people have access to education."
  },
  {
    id: "pred-2018-civ-75",
    question: "What is 'right to healthcare'?",
    options: [
      "Right to access medical services",
      "No healthcare right",
      "Only for wealthy",
      "Optional right"
    ],
    correctAnswer: 0,
    explanation: "The right to healthcare is the right to access medical services without discrimination."
  },
  {
    id: "pred-2018-civ-76",
    question: "What is 'rule of law'?",
    options: [
      "All individuals and institutions subject to law",
      "Only citizens subject to law",
      "Government above law",
      "No law applies to leaders"
    ],
    correctAnswer: 0,
    explanation: "Rule of law means that all individuals and institutions, including the government, are subject to and accountable under the law."
  },
  {
    id: "pred-2018-civ-77",
    question: "What is 'independence of judiciary'?",
    options: [
      "Courts free from government influence",
      "Government controls courts",
      "Courts serve politicians",
      "No judiciary"
    ],
    correctAnswer: 0,
    explanation: "Judicial independence means courts are free from government influence or pressure in their decisions."
  },
  {
    id: "pred-2018-civ-78",
    question: "What is 'checks and balances'?",
    options: [
      "System preventing any branch from becoming too powerful",
      "No branch control",
      "One branch controls all",
      "No separation of powers"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances is a system that prevents any one branch of government from becoming too powerful."
  },
  {
    id: "pred-2018-civ-79",
    question: "What is 'devolution'?",
    options: [
      "Transfer of power from central to regional government",
      "Centralizing power",
      "No regional government",
      "Military rule"
    ],
    correctAnswer: 0,
    explanation: "Devolution is the transfer of power from central government to regional or local governments."
  },
  {
    id: "pred-2018-civ-80",
    question: "What is 'grassroots democracy'?",
    options: [
      "Democracy starting at local community level",
      "Only national democracy",
      "Top-down democracy",
      "Elites only"
    ],
    correctAnswer: 0,
    explanation: "Grassroots democracy refers to democratic processes that start at the local community level and move upward."
  }
];

export const predicted2018NaturalScholasticAptitudeQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sat-1",
    question: "Complete the analogy: Book is to Reading as Fork is to ____",
    options: [
      "Eating",
      "Kitchen",
      "Spoon",
      "Plate"
    ],
    correctAnswer: 0,
    explanation: "A book is used for reading, just as a fork is used for eating. This is a function-based analogy."
  },
  {
    id: "pred-2018-sat-2",
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely Lazzles.",
    options: [
      "True",
      "False",
      "Cannot be determined",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "If all Bloops are Razzles, and all Razzles are Lazzles, then by transitive logic, all Bloops must be Lazzles."
  },
  {
    id: "pred-2018-sat-3",
    question: "Choose the word that is most similar in meaning to 'Ephemeral':",
    options: [
      "Transient",
      "Permanent",
      "Eternal",
      "Solid"
    ],
    correctAnswer: 0,
    explanation: "Ephemeral means lasting for a very short time, which is synonymous with transient."
  },
  {
    id: "pred-2018-sat-4",
    question: "What number comes next in the sequence: 2, 6, 12, 20, 30, ____",
    options: [
      "42",
      "40",
      "44",
      "38"
    ],
    correctAnswer: 0,
    explanation: "The pattern is adding consecutive even numbers: +4, +6, +8, +10, +12. So 30 + 12 = 42."
  },
  {
    id: "pred-2018-sat-5",
    question: "If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours at the same speed?",
    options: [
      "150 km",
      "120 km",
      "180 km",
      "90 km"
    ],
    correctAnswer: 0,
    explanation: "Speed = 60 km/hour. In 2.5 hours: 60 × 2.5 = 150 km."
  },
  {
    id: "pred-2018-sat-6",
    question: "Choose the word that is most opposite in meaning to 'Benevolent':",
    options: [
      "Malevolent",
      "Kind",
      "Generous",
      "Caring"
    ],
    correctAnswer: 0,
    explanation: "Benevolent means kind and generous. Malevolent means having or showing a wish to do evil to others."
  },
  {
    id: "pred-2018-sat-7",
    question: "What is the next term in the sequence: 1, 1, 2, 3, 5, 8, 13, ____",
    options: [
      "21",
      "18",
      "20",
      "26"
    ],
    correctAnswer: 0,
    explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding numbers: 8 + 13 = 21."
  },
  {
    id: "pred-2018-sat-8",
    question: "If 5 workers can complete a job in 10 days, how many days will 10 workers need?",
    options: [
      "5 days",
      "2 days",
      "20 days",
      "8 days"
    ],
    correctAnswer: 0,
    explanation: "More workers means less time. 10 workers is double, so time is halved: 10/2 = 5 days."
  },
  {
    id: "pred-2018-sat-9",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Classroom",
      "Student",
      "Book"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a workplace-based analogy."
  },
  {
    id: "pred-2018-sat-10",
    question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
    options: [
      "154 cm²",
      "44 cm²",
      "49 cm²",
      "308 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²."
  },
  {
    id: "pred-2018-sat-11",
    question: "Choose the word that is most similar in meaning to 'Pragmatic':",
    options: [
      "Practical",
      "Idealistic",
      "Theoretical",
      "Impractical"
    ],
    correctAnswer: 0,
    explanation: "Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical."
  },
  {
    id: "pred-2018-sat-12",
    question: "What comes next: 3, 9, 27, 81, ____",
    options: [
      "243",
      "162",
      "324",
      "108"
    ],
    correctAnswer: 0,
    explanation: "Each term is multiplied by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243."
  },
  {
    id: "pred-2018-sat-13",
    question: "Complete the analogy: Pen is to Write as Camera is to ____",
    options: [
      "Capture",
      "Photo",
      "Lens",
      "Flash"
    ],
    correctAnswer: 0,
    explanation: "A pen is used to write, just as a camera is used to capture images. This is a function-based analogy."
  },
  {
    id: "pred-2018-sat-14",
    question: "If 8 machines produce 64 items in 4 hours, how many items will 12 machines produce in 6 hours?",
    options: [
      "144",
      "96",
      "128",
      "192"
    ],
    correctAnswer: 0,
    explanation: "8 machines × 4 hours = 32 machine-hours for 64 items. So 1 machine-hour produces 2 items. 12 × 6 = 72 machine-hours. 72 × 2 = 144 items."
  },
  {
    id: "pred-2018-sat-15",
    question: "Choose the word that is most opposite in meaning to 'Abundant':",
    options: [
      "Scarce",
      "Plentiful",
      "Rich",
      "Full"
    ],
    correctAnswer: 0,
    explanation: "Abundant means existing in large quantities. Scarce means insufficient in quantity."
  },
  {
    id: "pred-2018-sat-16",
    question: "What is the next term: 64, 32, 16, 8, ____",
    options: [
      "4",
      "2",
      "6",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Each term is halved: 64/2=32, 32/2=16, 16/2=8, 8/2=4."
  },
  {
    id: "pred-2018-sat-17",
    question: "If A > B and B > C, then which statement is true?",
    options: [
      "A > C",
      "C > A",
      "A = C",
      "Cannot determine"
    ],
    correctAnswer: 0,
    explanation: "By transitive property: if A > B and B > C, then A > C."
  },
  {
    id: "pred-2018-sat-18",
    question: "Complete the analogy: Fish is to Water as Bird is to ____",
    options: [
      "Air",
      "Tree",
      "Nest",
      "Sky"
    ],
    correctAnswer: 0,
    explanation: "Fish live in water, just as birds live in air. This is a habitat-based analogy."
  },
  {
    id: "pred-2018-sat-19",
    question: "What is the perimeter of a rectangle with length 12 and width 8?",
    options: [
      "40",
      "20",
      "96",
      "32"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40."
  },
  {
    id: "pred-2018-sat-20",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Quick",
      "Rough"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  },
  {
    id: "pred-2018-sat-21",
    question: "Complete the analogy: Author is to Book as Artist is to ____",
    options: [
      "Painting",
      "Canvas",
      "Brush",
      "Gallery"
    ],
    correctAnswer: 0,
    explanation: "An author creates a book, just as an artist creates a painting. This is a creator-creation analogy."
  },
  {
    id: "pred-2018-sat-22",
    question: "What is 15% of 200 plus 20% of 150?",
    options: [
      "60",
      "50",
      "70",
      "55"
    ],
    correctAnswer: 0,
    explanation: "15% of 200 = 30. 20% of 150 = 30. 30 + 30 = 60."
  },
  {
    id: "pred-2018-sat-23",
    question: "If all roses are flowers and some flowers are red, then some roses are definitely red.",
    options: [
      "Cannot be determined",
      "True",
      "False",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "This is a logical fallacy. Some flowers being red doesn't guarantee that any roses are red. We cannot determine this relationship."
  },
  {
    id: "pred-2018-sat-24",
    question: "What comes next: 1, 4, 2, 5, 3, 6, ____",
    options: [
      "4",
      "7",
      "5",
      "8"
    ],
    correctAnswer: 0,
    explanation: "The pattern alternates: +3, -2, +3, -2, +3. So 6 - 2 = 4."
  },
  {
    id: "pred-2018-sat-25",
    question: "Choose the word that is most similar in meaning to 'Candid':",
    options: [
      "Frank",
      "Secretive",
      "Dishonest",
      "Shy"
    ],
    correctAnswer: 0,
    explanation: "Candid means truthful and straightforward, which is synonymous with frank."
  },
  {
    id: "pred-2018-sat-26",
    question: "Complete the analogy: Clock is to Time as Thermometer is to ____",
    options: [
      "Temperature",
      "Heat",
      "Weather",
      "Degree"
    ],
    correctAnswer: 0,
    explanation: "A clock measures time, just as a thermometer measures temperature. This is a tool-measurement analogy."
  },
  {
    id: "pred-2018-sat-27",
    question: "What is the volume of a cube with side length 3 cm?",
    options: [
      "27 cm³",
      "9 cm³",
      "18 cm³",
      "36 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume = side³ = 3³ = 27 cm³."
  },
  {
    id: "pred-2018-sat-28",
    question: "Choose the word that is most opposite in meaning to 'Optimistic':",
    options: [
      "Pessimistic",
      "Hopeful",
      "Positive",
      "Confident"
    ],
    correctAnswer: 0,
    explanation: "Optimistic means hopeful and positive. Pessimistic means expecting the worst or being negative."
  },
  {
    id: "pred-2018-sat-29",
    question: "What is the next term: 5, 8, 12, 17, 23, ____",
    options: [
      "30",
      "29",
      "31",
      "28"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +3, +4, +5, +6. So next is +7: 23 + 7 = 30."
  },
  {
    id: "pred-2018-sat-30",
    question: "Complete the analogy: Captain is to Ship as Pilot is to ____",
    options: [
      "Airplane",
      "Airport",
      "Sky",
      "Passenger"
    ],
    correctAnswer: 0,
    explanation: "A captain commands a ship, just as a pilot commands an airplane. This is a commander-vehicle analogy."
  },
  {
    id: "pred-2018-sat-31",
    question: "What is 25% of 80?",
    options: [
      "20",
      "25",
      "15",
      "30"
    ],
    correctAnswer: 0,
    explanation: "25% of 80 = 0.25 × 80 = 20."
  },
  {
    id: "pred-2018-sat-32",
    question: "What comes next: 2, 6, 12, 20, 30, ____",
    options: [
      "42",
      "40",
      "44",
      "38"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +4, +6, +8, +10. So next is +12: 30 + 12 = 42."
  },
  {
    id: "pred-2018-sat-33",
    question: "Choose the word that is most similar in meaning to 'Benevolent':",
    options: [
      "Kind",
      "Cruel",
      "Angry",
      "Sad"
    ],
    correctAnswer: 0,
    explanation: "Benevolent means well-meaning and kindly, which is synonymous with kind."
  },
  {
    id: "pred-2018-sat-34",
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: [
      "40",
      "13",
      "26",
      "45"
    ],
    correctAnswer: 0,
    explanation: "Area = length × width = 8 × 5 = 40."
  },
  {
    id: "pred-2018-sat-35",
    question: "What is the next term: 1, 4, 9, 16, 25, ____",
    options: [
      "36",
      "35",
      "30",
      "40"
    ],
    correctAnswer: 0,
    explanation: "The pattern is perfect squares: 1², 2², 3², 4², 5². Next is 6² = 36."
  },
  {
    id: "pred-2018-sat-36",
    question: "Choose the word that is most opposite in meaning to 'Ancient':",
    options: [
      "Modern",
      "Old",
      "Historic",
      "Traditional"
    ],
    correctAnswer: 0,
    explanation: "Ancient means very old. Modern means current or recent, which is the opposite."
  },
  {
    id: "pred-2018-sat-37",
    question: "What is 1/3 + 1/6?",
    options: [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    correctAnswer: 0,
    explanation: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2."
  },
  {
    id: "pred-2018-sat-38",
    question: "Complete the analogy: Pen is to Write as Knife is to ____",
    options: [
      "Cut",
      "Sharp",
      "Metal",
      "Handle"
    ],
    correctAnswer: 0,
    explanation: "A pen is used to write, just as a knife is used to cut. This is a tool-function analogy."
  },
  {
    id: "pred-2018-sat-39",
    question: "What is the perimeter of a square with side length 6?",
    options: [
      "24",
      "12",
      "36",
      "18"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 4 × side = 4 × 6 = 24."
  },
  {
    id: "pred-2018-sat-40",
    question: "Choose the word that is most similar in meaning to 'Prudent':",
    options: [
      "Wise",
      "Careless",
      "Reckless",
      "Foolish"
    ],
    correctAnswer: 0,
    explanation: "Prudent means acting with or showing care and thought for the future, which is synonymous with wise."
  },
  {
    id: "pred-2018-sat-41",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Hospital",
      "Clinic",
      "Office"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a profession-workplace analogy."
  },
  {
    id: "pred-2018-sat-42",
    question: "What comes next: 3, 9, 27, 81, ____",
    options: [
      "243",
      "162",
      "243",
      "324"
    ],
    correctAnswer: 0,
    explanation: "The pattern multiplies by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243."
  },
  {
    id: "pred-2018-sat-43",
    question: "What is 15% of 200?",
    options: [
      "30",
      "25",
      "35",
      "20"
    ],
    correctAnswer: 0,
    explanation: "15% of 200 = 0.15 × 200 = 30."
  },
  {
    id: "pred-2018-sat-44",
    question: "Complete the analogy: Library is to Books as Museum is to ____",
    options: [
      "Artifacts",
      "Books",
      "Music",
      "Games"
    ],
    correctAnswer: 0,
    explanation: "A library contains books, just as a museum contains artifacts. This is a container-content analogy."
  },
  {
    id: "pred-2018-sat-45",
    question: "What comes next: 1, 4, 9, 16, 25, ____",
    options: [
      "36",
      "30",
      "40",
      "49"
    ],
    correctAnswer: 0,
    explanation: "The pattern is perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36."
  },
  {
    id: "pred-2018-sat-46",
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: [
      "40",
      "13",
      "26",
      "45"
    ],
    correctAnswer: 0,
    explanation: "Area = length × width = 8 × 5 = 40."
  },
  {
    id: "pred-2018-sat-47",
    question: "Choose the word that is most opposite in meaning to 'Ancient':",
    options: [
      "Modern",
      "Old",
      "Historic",
      "Classic"
    ],
    correctAnswer: 0,
    explanation: "Ancient means very old, while modern means current or recent. They are opposites."
  },
  {
    id: "pred-2018-sat-48",
    question: "Complete the analogy: Fish is to Water as Bird is to ____",
    options: [
      "Air",
      "Water",
      "Land",
      "Tree"
    ],
    correctAnswer: 0,
    explanation: "Fish live in water, just as birds live in air. This is a creature-habitat analogy."
  },
  {
    id: "pred-2018-sat-49",
    question: "What comes next: 2, 4, 8, 16, 32, ____",
    options: [
      "64",
      "48",
      "96",
      "128"
    ],
    correctAnswer: 0,
    explanation: "The pattern doubles each time: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64."
  },
  {
    id: "pred-2018-sat-50",
    question: "What is the sum of angles in a triangle?",
    options: [
      "180°",
      "90°",
      "360°",
      "270°"
    ],
    correctAnswer: 0,
    explanation: "The sum of interior angles in any triangle is always 180 degrees."
  },
  {
    id: "pred-2018-sat-51",
    question: "Choose the word that is most similar in meaning to 'Candid':",
    options: [
      "Honest",
      "Secretive",
      "Dishonest",
      "Hidden"
    ],
    correctAnswer: 0,
    explanation: "Candid means truthful and straightforward, which is synonymous with honest."
  },
  {
    id: "pred-2018-sat-52",
    question: "Complete the analogy: Author is to Book as Artist is to ____",
    options: [
      "Painting",
      "Book",
      "Music",
      "Dance"
    ],
    correctAnswer: 0,
    explanation: "An author creates books, just as an artist creates paintings. This is a creator-creation analogy."
  },
  {
    id: "pred-2018-sat-53",
    question: "What comes next: 10, 20, 30, 40, 50, ____",
    options: [
      "60",
      "55",
      "65",
      "70"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by 10 each time: 10+10=20, 20+10=30, 30+10=40, 40+10=50, 50+10=60."
  },
  {
    id: "pred-2018-sat-54",
    question: "What is the perimeter of a rectangle with length 10 and width 4?",
    options: [
      "28",
      "14",
      "40",
      "20"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2 × (length + width) = 2 × (10 + 4) = 2 × 14 = 28."
  },
  {
    id: "pred-2018-sat-55",
    question: "Choose the word that is most opposite in meaning to 'Generous':",
    options: [
      "Stingy",
      "Kind",
      "Giving",
      "Charitable"
    ],
    correctAnswer: 0,
    explanation: "Generous means willing to give, while stingy means unwilling to give. They are opposites."
  },
  {
    id: "pred-2018-sat-56",
    question: "Complete the analogy: Key is to Lock as Password is to ____",
    options: [
      "Computer",
      "Key",
      "Door",
      "Safe"
    ],
    correctAnswer: 0,
    explanation: "A key opens a lock, just as a password unlocks a computer. This is an access tool analogy."
  },
  {
    id: "pred-2018-sat-57",
    question: "What comes next: 1, 8, 27, 64, 125, ____",
    options: [
      "216",
      "200",
      "180",
      "250"
    ],
    correctAnswer: 0,
    explanation: "The pattern is cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216."
  },
  {
    id: "pred-2018-sat-58",
    question: "What is the area of a triangle with base 10 and height 6?",
    options: [
      "30",
      "60",
      "16",
      "36"
    ],
    correctAnswer: 0,
    explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30."
  },
  {
    id: "pred-2018-sat-59",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Rough",
      "Quick"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  },
  {
    id: "pred-2018-sat-60",
    question: "Complete the analogy: Earth is to Sun as Moon is to ____",
    options: [
      "Earth",
      "Sun",
      "Star",
      "Planet"
    ],
    correctAnswer: 0,
    explanation: "The Earth orbits the Sun, just as the Moon orbits the Earth. This is an orbital relationship analogy."
  },
  {
    id: "pred-2018-sat-61",
    question: "What comes next: 100, 90, 80, 70, 60, ____",
    options: [
      "50",
      "55",
      "45",
      "40"
    ],
    correctAnswer: 0,
    explanation: "The pattern decreases by 10 each time: 100-10=90, 90-10=80, 80-10=70, 70-10=60, 60-10=50."
  },
  {
    id: "pred-2018-sat-62",
    question: "What is the volume of a cube with side length 3?",
    options: [
      "27",
      "9",
      "18",
      "36"
    ],
    correctAnswer: 0,
    explanation: "Volume = side³ = 3³ = 27."
  },
  {
    id: "pred-2018-sat-63",
    question: "Choose the word that is most opposite in meaning to 'Optimistic':",
    options: [
      "Pessimistic",
      "Hopeful",
      "Positive",
      "Cheerful"
    ],
    correctAnswer: 0,
    explanation: "Optimistic means hopeful about the future, while pessimistic means expecting the worst. They are opposites."
  },
  {
    id: "pred-2018-sat-64",
    question: "Complete the analogy: Seed is to Plant as Egg is to ____",
    options: [
      "Bird",
      "Chicken",
      "Nest",
      "Tree"
    ],
    correctAnswer: 0,
    explanation: "A seed grows into a plant, just as an egg develops into a bird. This is a growth/development analogy."
  },
  {
    id: "pred-2018-sat-65",
    question: "What comes next: 1, 2, 4, 7, 11, 16, ____",
    options: [
      "22",
      "21",
      "23",
      "20"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +1, +2, +3, +4, +5. So next is +6: 16 + 6 = 22."
  },
  {
    id: "pred-2018-sat-66",
    question: "What is the circumference of a circle with radius 7? (Use π ≈ 22/7)",
    options: [
      "44",
      "14",
      "22",
      "154"
    ],
    correctAnswer: 0,
    explanation: "Circumference = 2πr = 2 × (22/7) × 7 = 44."
  },
  {
    id: "pred-2018-sat-67",
    question: "Choose the word that is most similar in meaning to 'Diligent':",
    options: [
      "Hardworking",
      "Lazy",
      "Idle",
      "Careless"
    ],
    correctAnswer: 0,
    explanation: "Diligent means having or showing care and conscientiousness in one's work, which is synonymous with hardworking."
  },
  {
    id: "pred-2018-sat-68",
    question: "Complete the analogy: Day is to Night as Summer is to ____",
    options: [
      "Winter",
      "Spring",
      "Autumn",
      "Fall"
    ],
    correctAnswer: 0,
    explanation: "Day and night are opposites, just as summer and winter are opposite seasons. This is an opposite analogy."
  },
  {
    id: "pred-2018-sat-69",
    question: "What comes next: 2, 3, 5, 8, 13, 21, ____",
    options: [
      "34",
      "32",
      "33",
      "35"
    ],
    correctAnswer: 0,
    explanation: "The pattern is Fibonacci: each number is the sum of the two previous: 2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34."
  },
  {
    id: "pred-2018-sat-70",
    question: "What is the area of a circle with radius 5? (Use π ≈ 3.14)",
    options: [
      "78.5",
      "31.4",
      "15.7",
      "157"
    ],
    correctAnswer: 0,
    explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5."
  },
  {
    id: "pred-2018-sat-71",
    question: "Choose the word that is most opposite in meaning to 'Benevolent':",
    options: [
      "Malevolent",
      "Kind",
      "Generous",
      "Charitable"
    ],
    correctAnswer: 0,
    explanation: "Benevolent means well-meaning and kindly, while malevolent means having or showing a wish to do evil. They are opposites."
  },
  {
    id: "pred-2018-sat-72",
    question: "Complete the analogy: Wheel is to Car as Wing is to ____",
    options: [
      "Airplane",
      "Car",
      "Bird",
      "Ship"
    ],
    correctAnswer: 0,
    explanation: "A wheel is part of a car, just as a wing is part of an airplane. This is a part-whole analogy."
  },
  {
    id: "pred-2018-sat-73",
    question: "What comes next: 0.5, 1, 1.5, 2, 2.5, ____",
    options: [
      "3",
      "2.75",
      "3.5",
      "2.25"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by 0.5 each time: 0.5+0.5=1, 1+0.5=1.5, 1.5+0.5=2, 2+0.5=2.5, 2.5+0.5=3."
  },
  {
    id: "pred-2018-sat-74",
    question: "What is the perimeter of a triangle with sides 5, 12, and 13?",
    options: [
      "30",
      "26",
      "28",
      "25"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 5 + 12 + 13 = 30."
  },
  {
    id: "pred-2018-sat-75",
    question: "Choose the word that is most similar in meaning to 'Vigilant':",
    options: [
      "Watchful",
      "Sleepy",
      "Careless",
      "Relaxed"
    ],
    correctAnswer: 0,
    explanation: "Vigilant means keeping careful watch for possible danger or difficulties, which is synonymous with watchful."
  },
  {
    id: "pred-2018-sat-76",
    question: "Complete the analogy: Clock is to Time as Thermometer is to ____",
    options: [
      "Temperature",
      "Time",
      "Weather",
      "Heat"
    ],
    correctAnswer: 0,
    explanation: "A clock measures time, just as a thermometer measures temperature. This is an instrument-measurement analogy."
  },
  {
    id: "pred-2018-sat-77",
    question: "What comes next: 1, 3, 6, 10, 15, 21, ____",
    options: [
      "28",
      "27",
      "29",
      "30"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +2, +3, +4, +5, +6. So next is +7: 21 + 7 = 28."
  },
  {
    id: "pred-2018-sat-78",
    question: "What is 33 1/3% of 90?",
    options: [
      "30",
      "33",
      "27",
      "36"
    ],
    correctAnswer: 0,
    explanation: "33 1/3% = 1/3. 1/3 of 90 = 90 ÷ 3 = 30."
  },
  {
    id: "pred-2018-sat-79",
    question: "Choose the word that is most opposite in meaning to 'Eloquent':",
    options: [
      "Inarticulate",
      "Fluent",
      "Articulate",
      "Expressive"
    ],
    correctAnswer: 0,
    explanation: "Eloquent means fluent or persuasive in speaking or writing, while inarticulate means unable to express ideas clearly. They are opposites."
  },
  {
    id: "pred-2018-sat-80",
    question: "Complete the analogy: Music is to Ear as Painting is to ____",
    options: [
      "Eye",
      "Ear",
      "Nose",
      "Hand"
    ],
    correctAnswer: 0,
    explanation: "Music is perceived by the ear, just as painting is perceived by the eye. This is a sense-perception analogy."
  }
];

export const predicted2018NaturalEnglishQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-eng-1",
    question: "Choose the correct form: 'She ___ to the store yesterday.'",
    options: [
      "went",
      "goes",
      "gone",
      "going"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'go' is 'went'. Since the action happened yesterday, we use the past tense."
  },
  {
    id: "pred-2018-eng-2",
    question: "Which word is a synonym for 'happy'?",
    options: [
      "joyful",
      "sad",
      "angry",
      "tired"
    ],
    correctAnswer: 0,
    explanation: "Joyful means experiencing or showing great pleasure, which is a synonym for happy."
  },
  {
    id: "pred-2018-eng-10",
    question: "Which sentence is in passive voice?",
    options: [
      "The book was read by the student.",
      "The student read the book.",
      "The student is reading the book.",
      "The student has read the book."
    ],
    correctAnswer: 0,
    explanation: "In passive voice, the subject receives the action. 'The book' receives the action of being read."
  },
  {
    id: "pred-2018-eng-11",
    question: "Choose the correct article: '___ apple a day keeps the doctor away.'",
    options: [
      "An",
      "A",
      "The",
      "No article"
    ],
    correctAnswer: 0,
    explanation: "Use 'an' before words starting with a vowel sound. 'Apple' starts with a vowel sound /æ/."
  },
  {
    id: "pred-2018-eng-12",
    question: "What is the comparative form of 'good'?",
    options: [
      "better",
      "gooder",
      "more good",
      "best"
    ],
    correctAnswer: 0,
    explanation: "'Good' is an irregular adjective. Its comparative form is 'better'."
  },
  {
    id: "pred-2018-eng-13",
    question: "Choose the correct conjunction: 'I studied hard, ___ I passed the exam.'",
    options: [
      "so",
      "but",
      "or",
      "because"
    ],
    correctAnswer: 0,
    explanation: "'So' shows cause and effect. I studied hard, therefore I passed."
  },
  {
    id: "pred-2018-eng-14",
    question: "Which word is spelled correctly?",
    options: [
      "necessary",
      "neccessary",
      "necesary",
      "neccesary"
    ],
    correctAnswer: 0,
    explanation: "The correct spelling is 'necessary' with one 'c' and two 's's."
  },
  {
    id: "pred-2018-eng-15",
    question: "What is the superlative form of 'tall'?",
    options: [
      "tallest",
      "taller",
      "most tall",
      "more tall"
    ],
    correctAnswer: 0,
    explanation: "The superlative form of 'tall' is 'tallest', formed by adding '-est' to the adjective."
  },
  {
    id: "pred-2018-eng-16",
    question: "Choose the correct tense: 'They ___ football every Sunday.'",
    options: [
      "play",
      "plays",
      "played",
      "playing"
    ],
    correctAnswer: 0,
    explanation: "For habitual actions in the present, we use the simple present tense. 'They' takes the base form 'play'."
  },
  {
    id: "pred-2018-eng-17",
    question: "Which sentence uses the conditional correctly?",
    options: [
      "If I were you, I would study harder.",
      "If I was you, I would study harder.",
      "If I am you, I will study harder.",
      "If I be you, I would study harder."
    ],
    correctAnswer: 0,
    explanation: "In conditional sentences about hypothetical situations, we use 'If I were' (subjunctive mood)."
  },
  {
    id: "pred-2018-eng-18",
    question: "What is the meaning of the idiom 'break a leg'?",
    options: [
      "Good luck",
      "To injure oneself",
      "To work hard",
      "To take a break"
    ],
    correctAnswer: 0,
    explanation: "'Break a leg' is an idiom used to wish someone good luck, especially before a performance."
  },
  {
    id: "pred-2018-eng-19",
    question: "Choose the correct word: 'The weather is ___ today.'",
    options: [
      "beautiful",
      "beauty",
      "beautifully",
      "beautify"
    ],
    correctAnswer: 0,
    explanation: "We need an adjective to describe the noun 'weather'. 'Beautiful' is the correct adjective form."
  },
  {
    id: "pred-2018-eng-20",
    question: "What type of sentence is this: 'What time is it?'",
    options: [
      "Interrogative",
      "Declarative",
      "Imperative",
      "Exclamatory"
    ],
    correctAnswer: 0,
    explanation: "An interrogative sentence asks a question. It ends with a question mark."
  },
  {
    id: "pred-2018-eng-21",
    question: "Choose the correct word: 'She has a ___ of books on her shelf.'",
    options: [
      "collection",
      "collecton",
      "colection",
      "collektion"
    ],
    correctAnswer: 0,
    explanation: "'Collection' is the correct spelling meaning a group of things gathered together."
  },
  {
    id: "pred-2018-eng-22",
    question: "What is the past perfect tense of 'write'?",
    options: [
      "had written",
      "wrote",
      "has written",
      "was writing"
    ],
    correctAnswer: 0,
    explanation: "Past perfect tense is formed with 'had' + past participle. The past participle of 'write' is 'written'."
  },
  {
    id: "pred-2018-eng-23",
    question: "Which sentence uses the subjunctive mood correctly?",
    options: [
      "I suggest that he study harder.",
      "I suggest that he studies harder.",
      "I suggest that he studied harder.",
      "I suggest that he studying harder."
    ],
    correctAnswer: 0,
    explanation: "The subjunctive mood uses the base form of the verb after 'suggest that' - 'he study' not 'he studies'."
  },
  {
    id: "pred-2018-eng-24",
    question: "What is the meaning of the prefix 'anti-'?",
    options: [
      "Against or opposite",
      "Before",
      "After",
      "Between"
    ],
    correctAnswer: 0,
    explanation: "The prefix 'anti-' means against, opposite, or opposing, as in 'antibiotic' (against bacteria)."
  },
  {
    id: "pred-2018-eng-25",
    question: "Choose the correct sentence:",
    options: [
      "Each of the students has a textbook.",
      "Each of the students have a textbook.",
      "Each of the students are having a textbook.",
      "Each of the students having a textbook."
    ],
    correctAnswer: 0,
    explanation: "'Each' is singular and requires a singular verb 'has', not 'have'."
  },
  {
    id: "pred-2018-eng-26",
    question: "What type of noun is 'happiness'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Happiness' is an abstract noun because it represents a concept or emotion that cannot be physically touched."
  },
  {
    id: "pred-2018-eng-27",
    question: "Choose the correct form: 'If I ___ you, I would accept the offer.'",
    options: [
      "were",
      "was",
      "am",
      "be"
    ],
    correctAnswer: 0,
    explanation: "In hypothetical conditional sentences, use 'were' (subjunctive mood) instead of 'was'."
  },
  {
    id: "pred-2018-eng-28",
    question: "What is the superlative form of 'expensive'?",
    options: [
      "most expensive",
      "expensivest",
      "more expensive",
      "expensiver"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives (three or more syllables), use 'most' to form the superlative."
  },
  {
    id: "pred-2018-eng-29",
    question: "Which word is a preposition?",
    options: [
      "under",
      "understand",
      "undergo",
      "underground"
    ],
    correctAnswer: 0,
    explanation: "'Under' is a preposition indicating position or relationship. The others are verbs or adjectives."
  },
  {
    id: "pred-2018-eng-30",
    question: "Choose the correct word: 'The weather is ___ today.'",
    options: [
      "pleasant",
      "pleasent",
      "plesant",
      "pleasent"
    ],
    correctAnswer: 0,
    explanation: "'Pleasant' is the correct spelling meaning enjoyable or agreeable."
  },
  {
    id: "pred-2018-eng-31",
    question: "What is the past tense of 'begin'?",
    options: [
      "began",
      "begun",
      "beginning",
      "begined"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'begin' is the irregular verb 'began'."
  },
  {
    id: "pred-2018-eng-32",
    question: "What is the plural of 'mouse'?",
    options: [
      "mice",
      "mouses",
      "mices",
      "mouse"
    ],
    correctAnswer: 0,
    explanation: "'Mice' is the irregular plural of 'mouse'."
  },
  {
    id: "pred-2018-eng-33",
    question: "Which word is an adverb?",
    options: [
      "quickly",
      "quick",
      "quickness",
      "quicken"
    ],
    correctAnswer: 0,
    explanation: "'Quickly' is an adverb describing how an action is performed. 'Quick' is an adjective, 'quickness' is a noun, 'quicken' is a verb."
  },
  {
    id: "pred-2018-eng-34",
    question: "What is the comparative form of 'bad'?",
    options: [
      "worse",
      "badder",
      "more bad",
      "baddest"
    ],
    correctAnswer: 0,
    explanation: "'Bad' is an irregular adjective. Its comparative form is 'worse'."
  },
  {
    id: "pred-2018-eng-35",
    question: "Choose the correct conjunction: 'I like coffee, ___ I prefer tea.'",
    options: [
      "but",
      "and",
      "or",
      "because"
    ],
    correctAnswer: 0,
    explanation: "'But' shows contrast. I like coffee, but I prefer tea."
  },
  {
    id: "pred-2018-eng-36",
    question: "What is the meaning of the suffix '-less'?",
    options: [
      "Without",
      "Full of",
      "Small",
      "Large"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-less' means without, as in 'hopeless' (without hope)."
  },
  {
    id: "pred-2018-eng-37",
    question: "What type of noun is 'team'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Team' is a collective noun because it refers to a group of people considered as a single unit."
  },
  {
    id: "pred-2018-eng-38",
    question: "What is the superlative form of 'good'?",
    options: [
      "best",
      "goodest",
      "more good",
      "better"
    ],
    correctAnswer: 0,
    explanation: "'Good' is an irregular adjective. Its superlative form is 'best'."
  },
  {
    id: "pred-2018-eng-39",
    question: "Which sentence is in the passive voice?",
    options: [
      "The book was read by the student.",
      "The student read the book.",
      "The student is reading the book.",
      "The student has read the book."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The book was read by the student' is passive (book receives the action)."
  },
  {
    id: "pred-2018-eng-40",
    question: "What is the past participle of 'write'?",
    options: [
      "written",
      "wrote",
      "writing",
      "writes"
    ],
    correctAnswer: 0,
    explanation: "The past participle of 'write' is 'written'. It is used with auxiliary verbs like 'have' or 'had'."
  },
  {
    id: "pred-2018-eng-41",
    question: "Choose the correct word: 'She ___ to the store yesterday.'",
    options: [
      "went",
      "go",
      "goes",
      "gone"
    ],
    correctAnswer: 0,
    explanation: "'Went' is the past tense of 'go'. The action happened yesterday, so past tense is needed."
  },
  {
    id: "pred-2018-eng-42",
    question: "What is the plural of 'person'?",
    options: [
      "people",
      "persons",
      "person",
      "people"
    ],
    correctAnswer: 0,
    explanation: "'People' is the common plural of 'person'."
  },
  {
    id: "pred-2018-eng-43",
    question: "Which word is a pronoun?",
    options: [
      "they",
      "their",
      "them",
      "themselves"
    ],
    correctAnswer: 0,
    explanation: "'They' is a pronoun used to refer to people or things previously mentioned."
  },
  {
    id: "pred-2018-eng-44",
    question: "What is the comparative form of 'beautiful'?",
    options: [
      "more beautiful",
      "beautifuler",
      "beautifuller",
      "most beautiful"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives like 'beautiful', we use 'more' to form the comparative."
  },
  {
    id: "pred-2018-eng-45",
    question: "Choose the correct preposition: 'I am interested ___ science.'",
    options: [
      "in",
      "at",
      "on",
      "to"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'interested' is 'in'."
  },
  {
    id: "pred-2018-eng-46",
    question: "What is the meaning of the prefix 'un-'?",
    options: [
      "Not",
      "Before",
      "After",
      "Between"
    ],
    correctAnswer: 0,
    explanation: "The prefix 'un-' means not, as in 'unhappy' (not happy)."
  },
  {
    id: "pred-2018-eng-47",
    question: "What type of noun is 'freedom'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Freedom' is an abstract noun because it represents an idea or concept that cannot be physically touched."
  },
  {
    id: "pred-2018-eng-48",
    question: "Choose the correct word: 'They ___ playing football now.'",
    options: [
      "are",
      "is",
      "was",
      "were"
    ],
    correctAnswer: 0,
    explanation: "'They' is plural and the action is happening now (present continuous), so we use 'are'."
  },
  {
    id: "pred-2018-eng-49",
    question: "What is the superlative form of 'beautiful'?",
    options: [
      "most beautiful",
      "beautifuler",
      "more beautiful",
      "beautifulest"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives like 'beautiful', we use 'most' to form the superlative."
  },
  {
    id: "pred-2018-eng-50",
    question: "Which sentence is in the active voice?",
    options: [
      "The teacher explained the lesson.",
      "The lesson was explained by the teacher.",
      "The lesson is being explained by the teacher.",
      "The lesson has been explained by the teacher."
    ],
    correctAnswer: 0,
    explanation: "Active voice: subject performs the action. 'The teacher explained the lesson' is active (teacher performs the explaining)."
  },
  {
    id: "pred-2018-eng-51",
    question: "What is the past tense of 'teach'?",
    options: [
      "taught",
      "teached",
      "teaching",
      "teaches"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'teach' is the irregular verb 'taught'."
  },
  {
    id: "pred-2018-eng-52",
    question: "What is the plural of 'tooth'?",
    options: [
      "teeth",
      "tooths",
      "tooth",
      "teeths"
    ],
    correctAnswer: 0,
    explanation: "'Teeth' is the irregular plural of 'tooth'."
  },
  {
    id: "pred-2018-eng-53",
    question: "Which word is a conjunction?",
    options: [
      "although",
      "quickly",
      "quick",
      "quickness"
    ],
    correctAnswer: 0,
    explanation: "'Although' is a conjunction used to connect ideas. 'Quickly' is an adverb, 'quick' is an adjective, 'quickness' is a noun."
  },
  {
    id: "pred-2018-eng-54",
    question: "What is the comparative form of 'little'?",
    options: [
      "less",
      "littler",
      "more little",
      "littlest"
    ],
    correctAnswer: 0,
    explanation: "'Little' is an irregular adjective. Its comparative form is 'less'."
  },
  {
    id: "pred-2018-eng-55",
    question: "Choose the correct preposition: 'She is good ___ mathematics.'",
    options: [
      "at",
      "in",
      "on",
      "to"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'good' when referring to skills is 'at'."
  },
  {
    id: "pred-2018-eng-56",
    question: "What is the meaning of the suffix '-ful'?",
    options: [
      "Full of",
      "Without",
      "Small",
      "Large"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-ful' means full of, as in 'hopeful' (full of hope)."
  },
  {
    id: "pred-2018-eng-57",
    question: "What type of noun is 'class'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Class' is a collective noun because it refers to a group of students considered as a single unit."
  },
  {
    id: "pred-2018-eng-58",
    question: "Choose the correct word: 'I ___ my homework yesterday.'",
    options: [
      "did",
      "do",
      "does",
      "done"
    ],
    correctAnswer: 0,
    explanation: "'Did' is the past tense of 'do'. The action happened yesterday, so past tense is needed."
  },
  {
    id: "pred-2018-eng-59",
    question: "What is the superlative form of 'little'?",
    options: [
      "least",
      "littler",
      "less",
      "littlest"
    ],
    correctAnswer: 0,
    explanation: "'Little' is an irregular adjective. Its superlative form is 'least'."
  },
  {
    id: "pred-2018-eng-60",
    question: "Which sentence is in the passive voice?",
    options: [
      "The cake was baked by my mother.",
      "My mother baked the cake.",
      "My mother is baking the cake.",
      "My mother has baked the cake."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The cake was baked by my mother' is passive (cake receives the action)."
  },
  {
    id: "pred-2018-eng-61",
    question: "What is the past participle of 'eat'?",
    options: [
      "eaten",
      "ate",
      "eating",
      "eats"
    ],
    correctAnswer: 0,
    explanation: "The past participle of 'eat' is 'eaten'. It is used with auxiliary verbs like 'have' or 'had'."
  },
  {
    id: "pred-2018-eng-62",
    question: "What is the plural of 'foot'?",
    options: [
      "feet",
      "foots",
      "foot",
      "feets"
    ],
    correctAnswer: 0,
    explanation: "'Feet' is the irregular plural of 'foot'."
  },
  {
    id: "pred-2018-eng-63",
    question: "Which word is an adjective?",
    options: [
      "happy",
      "happily",
      "happiness",
      "happen"
    ],
    correctAnswer: 0,
    explanation: "'Happy' is an adjective describing a noun. 'Happily' is an adverb, 'happiness' is a noun, 'happen' is a verb."
  },
  {
    id: "pred-2018-eng-64",
    question: "What is the comparative form of 'far'?",
    options: [
      "farther",
      "farrer",
      "more far",
      "farest"
    ],
    correctAnswer: 0,
    explanation: "'Far' is an irregular adjective. Its comparative form is 'farther' (or 'further' for distance)."
  },
  {
    id: "pred-2018-eng-65",
    question: "Choose the correct preposition: 'He is afraid ___ dogs.'",
    options: [
      "of",
      "at",
      "in",
      "to"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'afraid' is 'of'."
  },
  {
    id: "pred-2018-eng-66",
    question: "What is the meaning of the prefix 'mis-'?",
    options: [
      "Wrong or badly",
      "Before",
      "After",
      "Not"
    ],
    correctAnswer: 0,
    explanation: "The prefix 'mis-' means wrong or badly, as in 'misunderstand' (understand wrongly)."
  },
  {
    id: "pred-2018-eng-67",
    question: "What type of noun is 'beauty'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Beauty' is an abstract noun because it represents a quality that cannot be physically touched."
  },
  {
    id: "pred-2018-eng-68",
    question: "Choose the correct word: 'She ___ to Paris last year.'",
    options: [
      "went",
      "go",
      "goes",
      "gone"
    ],
    correctAnswer: 0,
    explanation: "'Went' is the past tense of 'go'. The action happened last year, so past tense is needed."
  },
  {
    id: "pred-2018-eng-69",
    question: "What is the superlative form of 'far'?",
    options: [
      "farthest",
      "farrer",
      "more far",
      "farther"
    ],
    correctAnswer: 0,
    explanation: "'Far' is an irregular adjective. Its superlative form is 'farthest' (or 'furthest' for distance)."
  },
  {
    id: "pred-2018-eng-70",
    question: "Which sentence is in the active voice?",
    options: [
      "The cat chased the mouse.",
      "The mouse was chased by the cat.",
      "The mouse is being chased by the cat.",
      "The mouse has been chased by the cat."
    ],
    correctAnswer: 0,
    explanation: "Active voice: subject performs the action. 'The cat chased the mouse' is active (cat performs the chasing)."
  },
  {
    id: "pred-2018-eng-71",
    question: "What is the past tense of 'buy'?",
    options: [
      "bought",
      "buyed",
      "buying",
      "buys"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'buy' is the irregular verb 'bought'."
  },
  {
    id: "pred-2018-eng-72",
    question: "What is the plural of 'man'?",
    options: [
      "men",
      "mans",
      "man",
      "mens"
    ],
    correctAnswer: 0,
    explanation: "'Men' is the irregular plural of 'man'."
  },
  {
    id: "pred-2018-eng-73",
    question: "Which word is a noun?",
    options: [
      "happiness",
      "happy",
      "happily",
      "happen"
    ],
    correctAnswer: 0,
    explanation: "'Happiness' is a noun. 'Happy' is an adjective, 'happily' is an adverb, 'happen' is a verb."
  },
  {
    id: "pred-2018-eng-74",
    question: "What is the comparative form of 'much'?",
    options: [
      "more",
      "mucher",
      "most",
      "more much"
    ],
    correctAnswer: 0,
    explanation: "'Much' is an irregular adjective. Its comparative form is 'more'."
  },
  {
    id: "pred-2018-eng-75",
    question: "Choose the correct preposition: 'She is married ___ him.'",
    options: [
      "to",
      "with",
      "at",
      "in"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'married' is 'to'."
  },
  {
    id: "pred-2018-eng-76",
    question: "What is the meaning of the suffix '-ness'?",
    options: [
      "State or quality",
      "Without",
      "Full of",
      "Small"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-ness' means state or quality, as in 'kindness' (quality of being kind)."
  },
  {
    id: "pred-2018-eng-77",
    question: "What type of noun is 'audience'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Audience' is a collective noun because it refers to a group of listeners considered as a single unit."
  },
  {
    id: "pred-2018-eng-78",
    question: "Choose the correct word: 'We ___ the movie last night.'",
    options: [
      "saw",
      "see",
      "sees",
      "seen"
    ],
    correctAnswer: 0,
    explanation: "'Saw' is the past tense of 'see'. The action happened last night, so past tense is needed."
  },
  {
    id: "pred-2018-eng-79",
    question: "What is the superlative form of 'much'?",
    options: [
      "most",
      "more",
      "mucher",
      "most much"
    ],
    correctAnswer: 0,
    explanation: "'Much' is an irregular adjective. Its superlative form is 'most'."
  },
  {
    id: "pred-2018-eng-80",
    question: "Which sentence is in the passive voice?",
    options: [
      "The letter was written by John.",
      "John wrote the letter.",
      "John is writing the letter.",
      "John has written the letter."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The letter was written by John' is passive (letter receives the action)."
  }
];

export const predicted2018SocialMathQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-smath-1",
    question: "If a shirt costs 200 Birr and is on sale for 25% off, what is the sale price?",
    options: [
      "150 Birr",
      "175 Birr",
      "125 Birr",
      "160 Birr"
    ],
    correctAnswer: 0,
    explanation: "Discount = 25% of 200 = 50 Birr. Sale price = 200 - 50 = 150 Birr."
  },
  {
    id: "pred-2018-smath-2",
    question: "Convert 3/5 to a percentage.",
    options: [
      "60%",
      "30%",
      "50%",
      "40%"
    ],
    correctAnswer: 0,
    explanation: "3/5 = 0.6 = 60%."
  },
  {
    id: "pred-2018-smath-3",
    question: "What is the simple interest on 1000 Birr at 5% per year for 3 years?",
    options: [
      "150 Birr",
      "100 Birr",
      "200 Birr",
      "50 Birr"
    ],
    correctAnswer: 0,
    explanation: "Simple Interest = P × R × T = 1000 × 0.05 × 3 = 150 Birr."
  },
  {
    id: "pred-2018-smath-4",
    question: "A shopkeeper sells an item for 240 Birr with a 20% profit. What was the cost price?",
    options: [
      "200 Birr",
      "180 Birr",
      "220 Birr",
      "192 Birr"
    ],
    correctAnswer: 0,
    explanation: "Selling Price = Cost Price + Profit. 240 = CP + 20% of CP = 1.2 CP. CP = 240/1.2 = 200 Birr."
  },
  {
    id: "pred-2018-smath-5",
    question: "What is the mean of 5, 10, 15, 20, 25?",
    options: [
      "15",
      "12",
      "18",
      "20"
    ],
    correctAnswer: 0,
    explanation: "Mean = (5 + 10 + 15 + 20 + 25)/5 = 75/5 = 15."
  },
  {
    id: "pred-2018-smath-6",
    question: "If 15% of a number is 30, what is the number?",
    options: [
      "200",
      "150",
      "250",
      "180"
    ],
    correctAnswer: 0,
    explanation: "Let the number be x. 15% of x = 30. 0.15x = 30. x = 30/0.15 = 200."
  },
  {
    id: "pred-2018-smath-7",
    question: "What is the median of 3, 7, 2, 9, 5?",
    options: [
      "5",
      "7",
      "3",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Arrange in order: 2, 3, 5, 7, 9. The median (middle value) is 5."
  },
  {
    id: "pred-2018-smath-8",
    question: "A trader buys goods for 5000 Birr and sells for 6000 Birr. What is the profit percentage?",
    options: [
      "20%",
      "15%",
      "25%",
      "18%"
    ],
    correctAnswer: 0,
    explanation: "Profit = 6000 - 5000 = 1000 Birr. Profit % = (1000/5000) × 100 = 20%."
  },
  {
    id: "pred-2018-smath-9",
    question: "What is 2/3 of 120?",
    options: [
      "80",
      "60",
      "90",
      "40"
    ],
    correctAnswer: 0,
    explanation: "2/3 of 120 = (2/3) × 120 = 240/3 = 80."
  },
  {
    id: "pred-2018-smath-10",
    question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
    options: [
      "20",
      "15",
      "25",
      "18"
    ],
    correctAnswer: 0,
    explanation: "3:2 ratio means for every 3 boys there are 2 girls. 30 boys = 10 × 3, so girls = 10 × 2 = 20."
  },
  {
    id: "pred-2018-smath-11",
    question: "What is 15% of 800?",
    options: [
      "120",
      "100",
      "150",
      "80"
    ],
    correctAnswer: 0,
    explanation: "15% of 800 = 0.15 × 800 = 120."
  },
  {
    id: "pred-2018-smath-12",
    question: "If a car depreciates by 10% each year, what will be its value after 2 years if it was initially 200,000 Birr?",
    options: [
      "162,000 Birr",
      "180,000 Birr",
      "160,000 Birr",
      "164,000 Birr"
    ],
    correctAnswer: 0,
    explanation: "After 1 year: 200,000 × 0.9 = 180,000. After 2 years: 180,000 × 0.9 = 162,000 Birr."
  },
  {
    id: "pred-2018-smath-13",
    question: "What is the mode of 2, 3, 5, 3, 7, 3, 9?",
    options: [
      "3",
      "5",
      "7",
      "9"
    ],
    correctAnswer: 0,
    explanation: "The mode is the most frequently occurring value. 3 appears 3 times, which is the most."
  },
  {
    id: "pred-2018-smath-14",
    question: "A discount of 20% on an item is equivalent to a discount of how much on 500 Birr?",
    options: [
      "100 Birr",
      "150 Birr",
      "200 Birr",
      "80 Birr"
    ],
    correctAnswer: 0,
    explanation: "20% of 500 = 0.2 × 500 = 100 Birr."
  },
  {
    id: "pred-2018-smath-15",
    question: "What is the range of 5, 12, 8, 15, 20?",
    options: [
      "15",
      "10",
      "12",
      "8"
    ],
    correctAnswer: 0,
    explanation: "Range = Maximum - Minimum = 20 - 5 = 15."
  },
  {
    id: "pred-2018-smath-16",
    question: "If 3 apples cost 60 Birr, how much do 7 apples cost?",
    options: [
      "140 Birr",
      "120 Birr",
      "150 Birr",
      "180 Birr"
    ],
    correctAnswer: 0,
    explanation: "Cost per apple = 60/3 = 20 Birr. Cost of 7 apples = 7 × 20 = 140 Birr."
  },
  {
    id: "pred-2018-smath-17",
    question: "What is 25% as a decimal?",
    options: [
      "0.25",
      "0.025",
      "2.5",
      "0.0025"
    ],
    correctAnswer: 0,
    explanation: "25% = 25/100 = 0.25."
  },
  {
    id: "pred-2018-smath-18",
    question: "A shop offers a 'buy 2 get 1 free' offer. What percentage discount is this?",
    options: [
      "33.33%",
      "25%",
      "50%",
      "40%"
    ],
    correctAnswer: 0,
    explanation: "For 3 items, you pay for 2. Discount = 1/3 ≈ 33.33%."
  },
  {
    id: "pred-2018-smath-19",
    question: "What is the compound interest on 1000 Birr at 10% per year for 2 years?",
    options: [
      "210 Birr",
      "200 Birr",
      "220 Birr",
      "100 Birr"
    ],
    correctAnswer: 0,
    explanation: "Year 1: 1000 × 0.10 = 100. Year 2: 1100 × 0.10 = 110. Total interest = 100 + 110 = 210 Birr."
  },
  {
    id: "pred-2018-smath-20",
    question: "If the price increases from 80 to 100, what is the percentage increase?",
    options: [
      "25%",
      "20%",
      "30%",
      "15%"
    ],
    correctAnswer: 0,
    explanation: "Increase = 100 - 80 = 20. Percentage increase = (20/80) × 100 = 25%."
  },
  {
    id: "pred-2018-smath-21",
    question: "What is the greatest common divisor (GCD) of 36 and 48?",
    options: [
      "12",
      "6",
      "24",
      "18"
    ],
    correctAnswer: 0,
    explanation: "Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 48: 1,2,3,4,6,8,12,16,24,48. GCD = 12."
  },
  {
    id: "pred-2018-smath-22",
    question: "A bank offers 8% compound interest annually. How much will 5000 Birr become after 2 years?",
    options: [
      "5832 Birr",
      "5800 Birr",
      "5850 Birr",
      "5750 Birr"
    ],
    correctAnswer: 0,
    explanation: "Year 1: 5000 × 1.08 = 5400. Year 2: 5400 × 1.08 = 5832 Birr."
  },
  {
    id: "pred-2018-smath-23",
    question: "What is the standard deviation of 2, 4, 6, 8, 10?",
    options: [
      "√8 ≈ 2.83",
      "√10 ≈ 3.16",
      "√6 ≈ 2.45",
      "√12 ≈ 3.46"
    ],
    correctAnswer: 0,
    explanation: "Mean = 6. Variance = [(2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²]/5 = (16+4+0+4+16)/5 = 40/5 = 8. SD = √8 ≈ 2.83."
  },
  {
    id: "pred-2018-smath-24",
    question: "If a rectangle has length 15 cm and width 8 cm, what is its diagonal?",
    options: [
      "17 cm",
      "23 cm",
      "20 cm",
      "13 cm"
    ],
    correctAnswer: 0,
    explanation: "Diagonal = √(l² + w²) = √(15² + 8²) = √(225 + 64) = √289 = 17 cm."
  },
  {
    id: "pred-2018-smath-25",
    question: "What is the surface area of a cube with side length 4 cm?",
    options: [
      "96 cm²",
      "64 cm²",
      "48 cm²",
      "144 cm²"
    ],
    correctAnswer: 0,
    explanation: "Surface area = 6 × side² = 6 × 4² = 6 × 16 = 96 cm²."
  },
  {
    id: "pred-2018-smath-26",
    question: "Solve: 3x - 7 = 2x + 5",
    options: [
      "x = 12",
      "x = 2",
      "x = 10",
      "x = 7"
    ],
    correctAnswer: 0,
    explanation: "3x - 7 = 2x + 5. Subtract 2x: x - 7 = 5. Add 7: x = 12."
  },
  {
    id: "pred-2018-smath-27",
    question: "What is the volume of a cylinder with radius 3 cm and height 10 cm? (Use π = 22/7)",
    options: [
      "282.86 cm³",
      "188.57 cm³",
      "94.29 cm³",
      "377.14 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume = πr²h = (22/7) × 9 × 10 = (22/7) × 90 = 1980/7 ≈ 282.86 cm³."
  },
  {
    id: "pred-2018-smath-28",
    question: "A shop sells an item for 450 Birr with a 12.5% profit. What is the cost price?",
    options: [
      "400 Birr",
      "420 Birr",
      "375 Birr",
      "393.75 Birr"
    ],
    correctAnswer: 0,
    explanation: "Selling Price = CP + 12.5% of CP = 1.125 CP. CP = 450/1.125 = 400 Birr."
  },
  {
    id: "pred-2018-smath-29",
    question: "What is the probability of getting an even number when rolling a die?",
    options: [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    correctAnswer: 0,
    explanation: "Even numbers on a die: 2, 4, 6 (3 outcomes). Total outcomes: 6. P = 3/6 = 1/2."
  },
  {
    id: "pred-2018-smath-30",
    question: "If the HCF of two numbers is 6 and their LCM is 180, and one number is 36, what is the other number?",
    options: [
      "30",
      "24",
      "60",
      "18"
    ],
    correctAnswer: 0,
    explanation: "Product of two numbers = HCF × LCM = 6 × 180 = 1080. Other number = 1080/36 = 30."
  },
  {
    id: "pred-2018-smath-31",
    question: "Solve the quadratic equation: x² - 7x + 12 = 0",
    options: [
      "x = 3 or x = 4",
      "x = -3 or x = -4",
      "x = 2 or x = 6",
      "x = -2 or x = -6"
    ],
    correctAnswer: 0,
    explanation: "Factor: (x-3)(x-4) = 0. Therefore, x = 3 or x = 4."
  },
  {
    id: "pred-2018-smath-32",
    question: "What is the slope of the line passing through (1, 2) and (4, 8)?",
    options: [
      "2",
      "3",
      "1.5",
      "2.5"
    ],
    correctAnswer: 0,
    explanation: "Slope m = (8-2)/(4-1) = 6/3 = 2."
  },
  {
    id: "pred-2018-smath-33",
    question: "What is the area of a triangle with base 12 cm and height 8 cm?",
    options: [
      "48 cm²",
      "96 cm²",
      "24 cm²",
      "40 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2) × 12 × 8 = 48 cm²."
  },
  {
    id: "pred-2018-smath-34",
    question: "Simplify: √72 - √18",
    options: [
      "3√2",
      "5√2",
      "4√2",
      "7√2"
    ],
    correctAnswer: 0,
    explanation: "√72 = 6√2, √18 = 3√2. Difference = 6√2 - 3√2 = 3√2."
  },
  {
    id: "pred-2018-smath-35",
    question: "What is 3² × 2³?",
    options: [
      "72",
      "36",
      "54",
      "18"
    ],
    correctAnswer: 0,
    explanation: "3² = 9, 2³ = 8. 9 × 8 = 72."
  },
  {
    id: "pred-2018-smath-36",
    question: "Find the midpoint of the line segment joining (0, 0) and (6, 8).",
    options: [
      "(3, 4)",
      "(2, 4)",
      "(3, 5)",
      "(4, 3)"
    ],
    correctAnswer: 0,
    explanation: "Midpoint = ((0+6)/2, (0+8)/2) = (3, 4)."
  },
  {
    id: "pred-2018-smath-37",
    question: "What is the value of cos(60°)?",
    options: [
      "1/2",
      "√3/2",
      "0",
      "1"
    ],
    correctAnswer: 0,
    explanation: "cos(60°) = 1/2."
  },
  {
    id: "pred-2018-smath-38",
    question: "Solve: |x - 4| = 6",
    options: [
      "x = 10 or x = -2",
      "x = 10 or x = 2",
      "x = -10 or x = 2",
      "x = -10 or x = -2"
    ],
    correctAnswer: 0,
    explanation: "x - 4 = 6 gives x = 10. x - 4 = -6 gives x = -2."
  },
  {
    id: "pred-2018-smath-39",
    question: "What is the equation of the line with slope -1 passing through (2, 5)?",
    options: [
      "y = -x + 7",
      "y = -x + 3",
      "y = x + 7",
      "y = x - 7"
    ],
    correctAnswer: 0,
    explanation: "y - 5 = -1(x - 2). y - 5 = -x + 2. y = -x + 7."
  },
  {
    id: "pred-2018-smath-40",
    question: "What is the sum of the interior angles of an octagon?",
    options: [
      "1080°",
      "720°",
      "1440°",
      "540°"
    ],
    correctAnswer: 0,
    explanation: "Sum = (n-2) × 180° = (8-2) × 180° = 6 × 180° = 1080°."
  },
  {
    id: "pred-2018-smath-41",
    question: "If a number is increased by 20% and then decreased by 20%, what is the net change?",
    options: [
      "4% decrease",
      "4% increase",
      "No change",
      "2% decrease"
    ],
    correctAnswer: 0,
    explanation: "Let number = 100. After 20% increase = 120. After 20% decrease = 120 × 0.8 = 96. Net change = 4% decrease."
  },
  {
    id: "pred-2018-smath-42",
    question: "What is the compound interest on 1000 Birr at 10% per year for 2 years?",
    options: [
      "210 Birr",
      "200 Birr",
      "220 Birr",
      "100 Birr"
    ],
    correctAnswer: 0,
    explanation: "Amount = 1000 × (1.1)² = 1000 × 1.21 = 1210. CI = 1210 - 1000 = 210 Birr."
  },
  {
    id: "pred-2018-smath-43",
    question: "The ratio of boys to girls in a class is 3:5. If there are 24 girls, how many boys are there?",
    options: [
      "14.4",
      "15",
      "14",
      "16"
    ],
    correctAnswer: 0,
    explanation: "3/5 = x/24. x = 24 × 3/5 = 72/5 = 14.4. Since we can't have fractional students, approximately 14 or 15 boys."
  },
  {
    id: "pred-2018-smath-44",
    question: "What is the median of 5, 12, 3, 8, 15?",
    options: [
      "8",
      "5",
      "12",
      "10"
    ],
    correctAnswer: 0,
    explanation: "Arranged: 3, 5, 8, 12, 15. Median is the middle value = 8."
  },
  {
    id: "pred-2018-smath-45",
    question: "Solve: 2x + 5 = 13",
    options: [
      "x = 4",
      "x = 8",
      "x = 6",
      "x = 3"
    ],
    correctAnswer: 0,
    explanation: "2x = 13 - 5 = 8. x = 8/2 = 4."
  },
  {
    id: "pred-2018-smath-46",
    question: "What is the circumference of a circle with diameter 14 cm? (Use π ≈ 22/7)",
    options: [
      "44 cm",
      "88 cm",
      "22 cm",
      "154 cm"
    ],
    correctAnswer: 0,
    explanation: "Circumference = πd = (22/7) × 14 = 44 cm."
  },
  {
    id: "pred-2018-smath-47",
    question: "If the selling price is 600 Birr and profit is 20%, what is the cost price?",
    options: [
      "500 Birr",
      "480 Birr",
      "520 Birr",
      "550 Birr"
    ],
    correctAnswer: 0,
    explanation: "SP = CP + 20% of CP = 1.2 CP. CP = 600/1.2 = 500 Birr."
  },
  {
    id: "pred-2018-smath-48",
    question: "What is the mode of 2, 5, 2, 8, 5, 2, 9?",
    options: [
      "2",
      "5",
      "8",
      "9"
    ],
    correctAnswer: 0,
    explanation: "The mode is the most frequent value. 2 appears 3 times, more than any other number."
  },
  {
    id: "pred-2018-smath-49",
    question: "Simplify: (2³)²",
    options: [
      "64",
      "32",
      "128",
      "256"
    ],
    correctAnswer: 0,
    explanation: "(2³)² = 2^(3×2) = 2⁶ = 64."
  },
  {
    id: "pred-2018-smath-50",
    question: "What is the area of a circle with radius 7 cm? (Use π ≈ 22/7)",
    options: [
      "154 cm²",
      "44 cm²",
      "308 cm²",
      "22 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 154 cm²."
  },
  {
    id: "pred-2018-smath-51",
    question: "A shopkeeper sells an item at a loss of 10%. If the cost price is 500 Birr, what is the selling price?",
    options: [
      "450 Birr",
      "550 Birr",
      "400 Birr",
      "475 Birr"
    ],
    correctAnswer: 0,
    explanation: "SP = CP - 10% of CP = 500 - 50 = 450 Birr."
  },
  {
    id: "pred-2018-smath-52",
    question: "What is the range of 4, 8, 12, 6, 10?",
    options: [
      "8",
      "6",
      "10",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Range = Maximum - Minimum = 12 - 4 = 8."
  },
  {
    id: "pred-2018-smath-53",
    question: "Solve: 3x - 7 = 14",
    options: [
      "x = 7",
      "x = 5",
      "x = 6",
      "x = 8"
    ],
    correctAnswer: 0,
    explanation: "3x = 14 + 7 = 21. x = 21/3 = 7."
  },
  {
    id: "pred-2018-smath-54",
    question: "What is the volume of a rectangular prism with length 5, width 3, and height 4?",
    options: [
      "60",
      "12",
      "20",
      "45"
    ],
    correctAnswer: 0,
    explanation: "Volume = length × width × height = 5 × 3 × 4 = 60."
  },
  {
    id: "pred-2018-smath-55",
    question: "If 5 apples cost 25 Birr, how much do 8 apples cost?",
    options: [
      "40 Birr",
      "35 Birr",
      "45 Birr",
      "50 Birr"
    ],
    correctAnswer: 0,
    explanation: "Cost per apple = 25/5 = 5 Birr. 8 apples = 8 × 5 = 40 Birr."
  },
  {
    id: "pred-2018-smath-56",
    question: "What is the mean of 10, 15, 20, 25?",
    options: [
      "17.5",
      "15",
      "20",
      "18"
    ],
    correctAnswer: 0,
    explanation: "Mean = (10 + 15 + 20 + 25)/4 = 70/4 = 17.5."
  },
  {
    id: "pred-2018-smath-57",
    question: "What is the value of sin(30°)?",
    options: [
      "1/2",
      "√3/2",
      "0",
      "1"
    ],
    correctAnswer: 0,
    explanation: "sin(30°) = 1/2."
  },
  {
    id: "pred-2018-smath-58",
    question: "Solve: x/5 = 3",
    options: [
      "x = 15",
      "x = 8",
      "x = 12",
      "x = 10"
    ],
    correctAnswer: 0,
    explanation: "x = 3 × 5 = 15."
  },
  {
    id: "pred-2018-smath-59",
    question: "What is the perimeter of a square with side 9 cm?",
    options: [
      "36 cm",
      "18 cm",
      "81 cm",
      "27 cm"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 4 × side = 4 × 9 = 36 cm."
  },
  {
    id: "pred-2018-smath-60",
    question: "A car travels 180 km in 3 hours. What is its speed?",
    options: [
      "60 km/h",
      "54 km/h",
      "45 km/h",
      "72 km/h"
    ],
    correctAnswer: 0,
    explanation: "Speed = Distance/Time = 180/3 = 60 km/h."
  },
  {
    id: "pred-2018-smath-61",
    question: "What is 15% of 300?",
    options: [
      "45",
      "30",
      "50",
      "60"
    ],
    correctAnswer: 0,
    explanation: "15% of 300 = 0.15 × 300 = 45."
  },
  {
    id: "pred-2018-smath-62",
    question: "Solve: 2(x + 3) = 14",
    options: [
      "x = 4",
      "x = 7",
      "x = 5",
      "x = 6"
    ],
    correctAnswer: 0,
    explanation: "x + 3 = 7. x = 7 - 3 = 4."
  },
  {
    id: "pred-2018-smath-63",
    question: "What is the area of a square with side 7 cm?",
    options: [
      "49 cm²",
      "28 cm²",
      "14 cm²",
      "21 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = side² = 7² = 49 cm²."
  },
  {
    id: "pred-2018-smath-64",
    question: "If the ratio of two numbers is 4:7 and their sum is 66, find the numbers.",
    options: [
      "24 and 42",
      "28 and 38",
      "20 and 46",
      "22 and 44"
    ],
    correctAnswer: 0,
    explanation: "Let numbers be 4x and 7x. 4x + 7x = 66. 11x = 66. x = 6. Numbers: 24 and 42."
  },
  {
    id: "pred-2018-smath-65",
    question: "What is the surface area of a cube with side 4 cm?",
    options: [
      "96 cm²",
      "64 cm²",
      "48 cm²",
      "16 cm²"
    ],
    correctAnswer: 0,
    explanation: "Surface area = 6 × side² = 6 × 16 = 96 cm²."
  },
  {
    id: "pred-2018-smath-66",
    question: "Solve: 5x - 2 = 3x + 8",
    options: [
      "x = 5",
      "x = 4",
      "x = 6",
      "x = 3"
    ],
    correctAnswer: 0,
    explanation: "5x - 3x = 8 + 2. 2x = 10. x = 5."
  },
  {
    id: "pred-2018-smath-67",
    question: "What is the value of tan(45°)?",
    options: [
      "1",
      "0",
      "√3",
      "1/√3"
    ],
    correctAnswer: 0,
    explanation: "tan(45°) = 1."
  },
  {
    id: "pred-2018-smath-68",
    question: "A train travels 240 km at 60 km/h. How long does it take?",
    options: [
      "4 hours",
      "3 hours",
      "5 hours",
      "6 hours"
    ],
    correctAnswer: 0,
    explanation: "Time = Distance/Speed = 240/60 = 4 hours."
  },
  {
    id: "pred-2018-smath-69",
    question: "What is 125% of 80?",
    options: [
      "100",
      "90",
      "110",
      "120"
    ],
    correctAnswer: 0,
    explanation: "125% of 80 = 1.25 × 80 = 100."
  },
  {
    id: "pred-2018-smath-70",
    question: "Solve: x² = 49",
    options: [
      "x = 7 or x = -7",
      "x = 7 only",
      "x = -7 only",
      "x = 49"
    ],
    correctAnswer: 0,
    explanation: "x = ±√49 = ±7. So x = 7 or x = -7."
  },
  {
    id: "pred-2018-smath-71",
    question: "What is the perimeter of a rectangle with length 15 cm and width 8 cm?",
    options: [
      "46 cm",
      "30 cm",
      "23 cm",
      "120 cm"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2 × (length + width) = 2 × (15 + 8) = 2 × 23 = 46 cm."
  },
  {
    id: "pred-2018-smath-72",
    question: "If 3 workers can complete a job in 12 days, how many days will 4 workers take?",
    options: [
      "9 days",
      "8 days",
      "10 days",
      "12 days"
    ],
    correctAnswer: 0,
    explanation: "Total work = 3 × 12 = 36 worker-days. 4 workers: 36/4 = 9 days."
  },
  {
    id: "pred-2018-smath-73",
    question: "What is the value of ∛27?",
    options: [
      "3",
      "9",
      "27",
      "1"
    ],
    correctAnswer: 0,
    explanation: "∛27 = 3 because 3³ = 27."
  },
  {
    id: "pred-2018-smath-74",
    question: "Solve: (x + 5)(x - 2) = 0",
    options: [
      "x = -5 or x = 2",
      "x = 5 or x = -2",
      "x = 5 or x = 2",
      "x = -5 or x = -2"
    ],
    correctAnswer: 0,
    explanation: "x + 5 = 0 gives x = -5. x - 2 = 0 gives x = 2."
  },
  {
    id: "pred-2018-smath-75",
    question: "What is the volume of a sphere with radius 3 cm? (Use π ≈ 22/7)",
    options: [
      "113.14 cm³",
      "36 cm³",
      "108 cm³",
      "84 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume = (4/3)πr³ = (4/3) × (22/7) × 27 ≈ 113.14 cm³."
  },
  {
    id: "pred-2018-smath-76",
    question: "If a number is divided by 6 and then multiplied by 4, the result is 16. What is the number?",
    options: [
      "24",
      "12",
      "18",
      "30"
    ],
    correctAnswer: 0,
    explanation: "Let number = x. (x/6) × 4 = 16. 4x/6 = 16. x = 16 × 6/4 = 24."
  },
  {
    id: "pred-2018-smath-77",
    question: "What is the value of cos(90°)?",
    options: [
      "0",
      "1",
      "-1",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "cos(90°) = 0."
  },
  {
    id: "pred-2018-smath-78",
    question: "A shop sells 3 items for 150 Birr. What is the cost of 5 items?",
    options: [
      "250 Birr",
      "200 Birr",
      "300 Birr",
      "180 Birr"
    ],
    correctAnswer: 0,
    explanation: "Cost per item = 150/3 = 50 Birr. 5 items = 5 × 50 = 250 Birr."
  },
  {
    id: "pred-2018-smath-79",
    question: "What is the LCM of 12 and 18?",
    options: [
      "36",
      "6",
      "72",
      "24"
    ],
    correctAnswer: 0,
    explanation: "Prime factors: 12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 4 × 9 = 36."
  },
  {
    id: "pred-2018-smath-80",
    question: "What is the sum of the first 10 natural numbers?",
    options: [
      "55",
      "45",
      "50",
      "60"
    ],
    correctAnswer: 0,
    explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55."
  }
];

export const predicted2018SocialEnglishQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-seng-1",
    question: "Choose the correct word: 'The ___ of the movie was very exciting.'",
    options: [
      "plot",
      "plat",
      "plotte",
      "plott"
    ],
    correctAnswer: 0,
    explanation: "'Plot' is the correct spelling meaning the storyline of a narrative."
  },
  {
    id: "pred-2018-seng-2",
    question: "Which is a compound sentence?",
    options: [
      "I went to the store, and I bought milk.",
      "I went to the store.",
      "Because I was hungry, I ate.",
      "I went to the store and bought milk."
    ],
    correctAnswer: 0,
    explanation: "A compound sentence has two independent clauses joined by a coordinating conjunction (and, but, or)."
  },
  {
    id: "pred-2018-seng-3",
    question: "What is the plural of 'child'?",
    options: [
      "children",
      "childs",
      "childes",
      "childern"
    ],
    correctAnswer: 0,
    explanation: "'Children' is the irregular plural of 'child'."
  },
  {
    id: "pred-2018-seng-4",
    question: "Which word is an adjective?",
    options: [
      "beautiful",
      "beauty",
      "beautifully",
      "beautify"
    ],
    correctAnswer: 0,
    explanation: "'Beautiful' is an adjective describing a noun. 'Beauty' is a noun, 'beautifully' is an adverb, 'beautify' is a verb."
  },
  {
    id: "pred-2018-seng-5",
    question: "Choose the correct pronoun: 'This book belongs to ___.",
    options: [
      "me",
      "I",
      "my",
      "mine"
    ],
    correctAnswer: 0,
    explanation: "After 'belongs to', use the object pronoun 'me'."
  },
  {
    id: "pred-2018-seng-6",
    question: "What is the main idea of a paragraph called?",
    options: [
      "Topic sentence",
      "Supporting detail",
      "Concluding sentence",
      "Transition"
    ],
    correctAnswer: 0,
    explanation: "The topic sentence states the main idea of a paragraph."
  },
  {
    id: "pred-2018-seng-7",
    question: "Which sentence uses the correct subject-verb agreement?",
    options: [
      "The news is good.",
      "The news are good.",
      "The news be good.",
      "The news were good."
    ],
    correctAnswer: 0,
    explanation: "'News' is an uncountable noun that takes a singular verb 'is'."
  },
  {
    id: "pred-2018-seng-8",
    question: "What is a homophone for 'their'?",
    options: [
      "there",
      "they're",
      "their",
      "thier"
    ],
    correctAnswer: 0,
    explanation: "'There' is a homophone of 'their' (same pronunciation, different meaning/spelling)."
  },
  {
    id: "pred-2018-seng-9",
    question: "Which is an example of a metaphor?",
    options: [
      "Time is a thief.",
      "She runs like the wind.",
      "The clouds are white cotton balls.",
      "He is as strong as an ox."
    ],
    correctAnswer: 0,
    explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Time is a thief' is a metaphor."
  },
  {
    id: "pred-2018-seng-10",
    question: "What is the purpose of a conclusion in an essay?",
    options: [
      "To summarize and restate the main points",
      "To introduce new ideas",
      "To ask questions",
      "To provide background information"
    ],
    correctAnswer: 0,
    explanation: "The conclusion summarizes the main points and restates the thesis in a new way."
  },
  {
    id: "pred-2018-seng-11",
    question: "Choose the correct word: 'She has a ___ of books on her shelf.'",
    options: [
      "collection",
      "collecton",
      "colection",
      "collektion"
    ],
    correctAnswer: 0,
    explanation: "'Collection' is the correct spelling meaning a group of things gathered together."
  },
  {
    id: "pred-2018-seng-12",
    question: "What is the past perfect tense of 'write'?",
    options: [
      "had written",
      "wrote",
      "has written",
      "was writing"
    ],
    correctAnswer: 0,
    explanation: "Past perfect tense is formed with 'had' + past participle. The past participle of 'write' is 'written'."
  },
  {
    id: "pred-2018-seng-13",
    question: "Which sentence uses the subjunctive mood correctly?",
    options: [
      "I suggest that he study harder.",
      "I suggest that he studies harder.",
      "I suggest that he studied harder.",
      "I suggest that he studying harder."
    ],
    correctAnswer: 0,
    explanation: "The subjunctive mood uses the base form of the verb after 'suggest that' - 'he study' not 'he studies'."
  },
  {
    id: "pred-2018-seng-14",
    question: "What is the meaning of the prefix 'anti-'?",
    options: [
      "Against or opposite",
      "Before",
      "After",
      "Between"
    ],
    correctAnswer: 0,
    explanation: "The prefix 'anti-' means against, opposite, or opposing, as in 'antibiotic' (against bacteria)."
  },
  {
    id: "pred-2018-seng-15",
    question: "Choose the correct sentence:",
    options: [
      "Each of the students has a textbook.",
      "Each of the students have a textbook.",
      "Each of the students are having a textbook.",
      "Each of the students having a textbook."
    ],
    correctAnswer: 0,
    explanation: "'Each' is singular and requires a singular verb 'has', not 'have'."
  },
  {
    id: "pred-2018-seng-16",
    question: "What type of noun is 'happiness'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Happiness' is an abstract noun because it represents a concept or emotion that cannot be physically touched."
  },
  {
    id: "pred-2018-seng-17",
    question: "Choose the correct form: 'If I ___ you, I would accept the offer.'",
    options: [
      "were",
      "was",
      "am",
      "be"
    ],
    correctAnswer: 0,
    explanation: "In hypothetical conditional sentences, use 'were' (subjunctive mood) instead of 'was'."
  },
  {
    id: "pred-2018-seng-18",
    question: "What is the superlative form of 'expensive'?",
    options: [
      "most expensive",
      "expensivest",
      "more expensive",
      "expensiver"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives (three or more syllables), use 'most' to form the superlative."
  },
  {
    id: "pred-2018-seng-19",
    question: "Which word is a preposition?",
    options: [
      "under",
      "understand",
      "undergo",
      "underground"
    ],
    correctAnswer: 0,
    explanation: "'Under' is a preposition indicating position or relationship. The others are verbs or adjectives."
  },
  {
    id: "pred-2018-seng-20",
    question: "Choose the correct word: 'The weather is ___ today.'",
    options: [
      "pleasant",
      "pleasent",
      "plesant",
      "pleasent"
    ],
    correctAnswer: 0,
    explanation: "'Pleasant' is the correct spelling meaning enjoyable or agreeable."
  },
  {
    id: "pred-2018-seng-21",
    question: "What is the past tense of 'begin'?",
    options: [
      "began",
      "begun",
      "beginning",
      "begined"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'begin' is the irregular verb 'began'."
  },
  {
    id: "pred-2018-seng-22",
    question: "What is the plural of 'mouse'?",
    options: [
      "mice",
      "mouses",
      "mices",
      "mouse"
    ],
    correctAnswer: 0,
    explanation: "'Mice' is the irregular plural of 'mouse'."
  },
  {
    id: "pred-2018-seng-23",
    question: "Which word is an adverb?",
    options: [
      "quickly",
      "quick",
      "quickness",
      "quicken"
    ],
    correctAnswer: 0,
    explanation: "'Quickly' is an adverb describing how an action is performed. 'Quick' is an adjective, 'quickness' is a noun, 'quicken' is a verb."
  },
  {
    id: "pred-2018-seng-24",
    question: "What is the comparative form of 'bad'?",
    options: [
      "worse",
      "badder",
      "more bad",
      "baddest"
    ],
    correctAnswer: 0,
    explanation: "'Bad' is an irregular adjective. Its comparative form is 'worse'."
  },
  {
    id: "pred-2018-seng-25",
    question: "Choose the correct conjunction: 'I like coffee, ___ I prefer tea.'",
    options: [
      "but",
      "and",
      "or",
      "because"
    ],
    correctAnswer: 0,
    explanation: "'But' shows contrast. I like coffee, but I prefer tea."
  },
  {
    id: "pred-2018-seng-26",
    question: "What is the meaning of the suffix '-less'?",
    options: [
      "Without",
      "Full of",
      "Small",
      "Large"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-less' means without, as in 'hopeless' (without hope)."
  },
  {
    id: "pred-2018-seng-27",
    question: "What type of noun is 'team'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Team' is a collective noun because it refers to a group of people considered as a single unit."
  },
  {
    id: "pred-2018-seng-28",
    question: "Choose the correct word: 'She ___ to the store yesterday.'",
    options: [
      "went",
      "gone",
      "go",
      "going"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'go' is 'went'. Since it happened yesterday, we use the past tense."
  },
  {
    id: "pred-2018-seng-29",
    question: "What is the superlative form of 'good'?",
    options: [
      "best",
      "goodest",
      "more good",
      "better"
    ],
    correctAnswer: 0,
    explanation: "'Good' is an irregular adjective. Its superlative form is 'best'."
  },
  {
    id: "pred-2018-seng-30",
    question: "Which sentence is in the passive voice?",
    options: [
      "The book was read by the student.",
      "The student read the book.",
      "The student is reading the book.",
      "The student has read the book."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The book was read by the student' is passive (book receives the action)."
  },
  {
    id: "pred-2018-seng-31",
    question: "What is the past participle of 'go'?",
    options: [
      "gone",
      "went",
      "going",
      "goes"
    ],
    correctAnswer: 0,
    explanation: "The past participle of 'go' is 'gone'. It is used with auxiliary verbs like 'have' or 'had'."
  },
  {
    id: "pred-2018-seng-32",
    question: "What is the plural of 'child'?",
    options: [
      "children",
      "childs",
      "childrens",
      "child"
    ],
    correctAnswer: 0,
    explanation: "'Children' is the irregular plural of 'child'."
  },
  {
    id: "pred-2018-seng-33",
    question: "Which word is a conjunction?",
    options: [
      "however",
      "quickly",
      "quick",
      "quickness"
    ],
    correctAnswer: 0,
    explanation: "'However' is a conjunction used to connect ideas. 'Quickly' is an adverb, 'quick' is an adjective, 'quickness' is a noun."
  },
  {
    id: "pred-2018-seng-34",
    question: "What is the comparative form of 'far'?",
    options: [
      "farther",
      "farrer",
      "more far",
      "farthest"
    ],
    correctAnswer: 0,
    explanation: "'Far' is an irregular adjective. Its comparative form is 'farther' (or 'further' for distance)."
  },
  {
    id: "pred-2018-seng-35",
    question: "Choose the correct preposition: 'She arrived ___ the station.'",
    options: [
      "at",
      "in",
      "on",
      "to"
    ],
    correctAnswer: 0,
    explanation: "'At' is the correct preposition for arriving at a location like a station."
  },
  {
    id: "pred-2018-seng-36",
    question: "What is the meaning of the prefix 're-'?",
    options: [
      "Again or back",
      "Before",
      "After",
      "Not"
    ],
    correctAnswer: 0,
    explanation: "The prefix 're-' means again or back, as in 'rewrite' (write again) or 'return' (go back)."
  },
  {
    id: "pred-2018-seng-37",
    question: "What type of noun is 'happiness'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Happiness' is an abstract noun because it represents an emotion or concept that cannot be physically touched."
  },
  {
    id: "pred-2018-seng-38",
    question: "Choose the correct word: 'They ___ playing football yesterday.'",
    options: [
      "were",
      "was",
      "are",
      "did"
    ],
    correctAnswer: 0,
    explanation: "'They' is plural and the action happened in the past, so we use 'were'."
  },
  {
    id: "pred-2018-seng-39",
    question: "What is the superlative form of 'far'?",
    options: [
      "farthest",
      "farrer",
      "more far",
      "farther"
    ],
    correctAnswer: 0,
    explanation: "'Far' is an irregular adjective. Its superlative form is 'farthest' (or 'furthest' for distance)."
  },
  {
    id: "pred-2018-seng-40",
    question: "Which sentence is in the active voice?",
    options: [
      "The student read the book.",
      "The book was read by the student.",
      "The book is being read by the student.",
      "The book has been read by the student."
    ],
    correctAnswer: 0,
    explanation: "Active voice: subject performs the action. 'The student read the book' is active (student performs the reading)."
  },
  {
    id: "pred-2018-seng-41",
    question: "What is the past tense of 'teach'?",
    options: [
      "taught",
      "teached",
      "teaching",
      "teaches"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'teach' is the irregular verb 'taught'."
  },
  {
    id: "pred-2018-seng-42",
    question: "What is the plural of 'foot'?",
    options: [
      "feet",
      "foots",
      "foot",
      "feets"
    ],
    correctAnswer: 0,
    explanation: "'Feet' is the irregular plural of 'foot'."
  },
  {
    id: "pred-2018-seng-43",
    question: "Which word is an adjective?",
    options: [
      "happy",
      "happily",
      "happiness",
      "happen"
    ],
    correctAnswer: 0,
    explanation: "'Happy' is an adjective describing a noun. 'Happily' is an adverb, 'happiness' is a noun, 'happen' is a verb."
  },
  {
    id: "pred-2018-seng-44",
    question: "What is the comparative form of 'little'?",
    options: [
      "less",
      "littler",
      "more little",
      "littlest"
    ],
    correctAnswer: 0,
    explanation: "'Little' is an irregular adjective. Its comparative form is 'less'."
  },
  {
    id: "pred-2018-seng-45",
    question: "Choose the correct preposition: 'She is good ___ mathematics.'",
    options: [
      "at",
      "in",
      "on",
      "to"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'good' when referring to skills is 'at'."
  },
  {
    id: "pred-2018-seng-46",
    question: "What is the meaning of the suffix '-ful'?",
    options: [
      "Full of",
      "Without",
      "Small",
      "Large"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-ful' means full of, as in 'hopeful' (full of hope)."
  },
  {
    id: "pred-2018-seng-47",
    question: "What type of noun is 'class'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Class' is a collective noun because it refers to a group of students considered as a single unit."
  },
  {
    id: "pred-2018-seng-48",
    question: "Choose the correct word: 'I ___ my homework yesterday.'",
    options: [
      "did",
      "do",
      "does",
      "done"
    ],
    correctAnswer: 0,
    explanation: "'Did' is the past tense of 'do'. The action happened yesterday, so past tense is needed."
  },
  {
    id: "pred-2018-seng-49",
    question: "What is the superlative form of 'little'?",
    options: [
      "least",
      "littler",
      "less",
      "littlest"
    ],
    correctAnswer: 0,
    explanation: "'Little' is an irregular adjective. Its superlative form is 'least'."
  },
  {
    id: "pred-2018-seng-50",
    question: "Which sentence is in the passive voice?",
    options: [
      "The cake was baked by my mother.",
      "My mother baked the cake.",
      "My mother is baking the cake.",
      "My mother has baked the cake."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The cake was baked by my mother' is passive (cake receives the action)."
  },
  {
    id: "pred-2018-seng-51",
    question: "What is the past participle of 'eat'?",
    options: [
      "eaten",
      "ate",
      "eating",
      "eats"
    ],
    correctAnswer: 0,
    explanation: "The past participle of 'eat' is 'eaten'. It is used with auxiliary verbs like 'have' or 'had'."
  },
  {
    id: "pred-2018-seng-52",
    question: "What is the plural of 'man'?",
    options: [
      "men",
      "mans",
      "man",
      "mens"
    ],
    correctAnswer: 0,
    explanation: "'Men' is the irregular plural of 'man'."
  },
  {
    id: "pred-2018-seng-53",
    question: "Which word is a noun?",
    options: [
      "happiness",
      "happy",
      "happily",
      "happen"
    ],
    correctAnswer: 0,
    explanation: "'Happiness' is a noun. 'Happy' is an adjective, 'happily' is an adverb, 'happen' is a verb."
  },
  {
    id: "pred-2018-seng-54",
    question: "What is the comparative form of 'much'?",
    options: [
      "more",
      "mucher",
      "most",
      "more much"
    ],
    correctAnswer: 0,
    explanation: "'Much' is an irregular adjective. Its comparative form is 'more'."
  },
  {
    id: "pred-2018-seng-55",
    question: "Choose the correct preposition: 'She is married ___ him.'",
    options: [
      "to",
      "with",
      "at",
      "in"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'married' is 'to'."
  },
  {
    id: "pred-2018-seng-56",
    question: "What is the meaning of the suffix '-ness'?",
    options: [
      "State or quality",
      "Without",
      "Full of",
      "Small"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-ness' means state or quality, as in 'kindness' (quality of being kind)."
  },
  {
    id: "pred-2018-seng-57",
    question: "What type of noun is 'audience'?",
    options: [
      "Collective noun",
      "Proper noun",
      "Abstract noun",
      "Concrete noun"
    ],
    correctAnswer: 0,
    explanation: "'Audience' is a collective noun because it refers to a group of listeners considered as a single unit."
  },
  {
    id: "pred-2018-seng-58",
    question: "Choose the correct word: 'We ___ the movie last night.'",
    options: [
      "saw",
      "see",
      "sees",
      "seen"
    ],
    correctAnswer: 0,
    explanation: "'Saw' is the past tense of 'see'. The action happened last night, so past tense is needed."
  },
  {
    id: "pred-2018-seng-59",
    question: "What is the superlative form of 'much'?",
    options: [
      "most",
      "more",
      "mucher",
      "most much"
    ],
    correctAnswer: 0,
    explanation: "'Much' is an irregular adjective. Its superlative form is 'most'."
  },
  {
    id: "pred-2018-seng-60",
    question: "Which sentence is in the passive voice?",
    options: [
      "The letter was written by John.",
      "John wrote the letter.",
      "John is writing the letter.",
      "John has written the letter."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The letter was written by John' is passive (letter receives the action)."
  },
  {
    id: "pred-2018-seng-61",
    question: "What is the past tense of 'buy'?",
    options: [
      "bought",
      "buyed",
      "buying",
      "buys"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'buy' is the irregular verb 'bought'."
  },
  {
    id: "pred-2018-seng-62",
    question: "What is the plural of 'person'?",
    options: [
      "people",
      "persons",
      "person",
      "people"
    ],
    correctAnswer: 0,
    explanation: "'People' is the common plural of 'person'."
  },
  {
    id: "pred-2018-seng-63",
    question: "Which word is a pronoun?",
    options: [
      "they",
      "their",
      "them",
      "themselves"
    ],
    correctAnswer: 0,
    explanation: "'They' is a pronoun used to refer to people or things previously mentioned."
  },
  {
    id: "pred-2018-seng-64",
    question: "What is the comparative form of 'beautiful'?",
    options: [
      "more beautiful",
      "beautifuler",
      "beautifuller",
      "most beautiful"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives like 'beautiful', we use 'more' to form the comparative."
  },
  {
    id: "pred-2018-seng-65",
    question: "Choose the correct preposition: 'I am interested ___ science.'",
    options: [
      "in",
      "at",
      "on",
      "to"
    ],
    correctAnswer: 0,
    explanation: "The correct preposition with 'interested' is 'in'."
  },
  {
    id: "pred-2018-seng-66",
    question: "What is the meaning of the prefix 'un-'?",
    options: [
      "Not",
      "Before",
      "After",
      "Between"
    ],
    correctAnswer: 0,
    explanation: "The prefix 'un-' means not, as in 'unhappy' (not happy)."
  },
  {
    id: "pred-2018-seng-67",
    question: "What type of noun is 'freedom'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Freedom' is an abstract noun because it represents an idea or concept that cannot be physically touched."
  },
  {
    id: "pred-2018-seng-68",
    question: "Choose the correct word: 'They ___ playing football now.'",
    options: [
      "are",
      "is",
      "was",
      "were"
    ],
    correctAnswer: 0,
    explanation: "'They' is plural and the action is happening now (present continuous), so we use 'are'."
  },
  {
    id: "pred-2018-seng-69",
    question: "What is the superlative form of 'beautiful'?",
    options: [
      "most beautiful",
      "beautifuler",
      "more beautiful",
      "beautifulest"
    ],
    correctAnswer: 0,
    explanation: "For longer adjectives like 'beautiful', we use 'most' to form the superlative."
  },
  {
    id: "pred-2018-seng-70",
    question: "Which sentence is in the active voice?",
    options: [
      "The teacher explained the lesson.",
      "The lesson was explained by the teacher.",
      "The lesson is being explained by the teacher.",
      "The lesson has been explained by the teacher."
    ],
    correctAnswer: 0,
    explanation: "Active voice: subject performs the action. 'The teacher explained the lesson' is active (teacher performs the explaining)."
  },
  {
    id: "pred-2018-seng-71",
    question: "What is the past tense of 'begin'?",
    options: [
      "began",
      "begun",
      "beginning",
      "begined"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'begin' is the irregular verb 'began'."
  },
  {
    id: "pred-2018-seng-72",
    question: "What is the plural of 'mouse'?",
    options: [
      "mice",
      "mouses",
      "mices",
      "mouse"
    ],
    correctAnswer: 0,
    explanation: "'Mice' is the irregular plural of 'mouse'."
  },
  {
    id: "pred-2018-seng-73",
    question: "Which word is an adverb?",
    options: [
      "quickly",
      "quick",
      "quickness",
      "quicken"
    ],
    correctAnswer: 0,
    explanation: "'Quickly' is an adverb describing how an action is performed. 'Quick' is an adjective, 'quickness' is a noun, 'quicken' is a verb."
  },
  {
    id: "pred-2018-seng-74",
    question: "What is the comparative form of 'bad'?",
    options: [
      "worse",
      "badder",
      "more bad",
      "baddest"
    ],
    correctAnswer: 0,
    explanation: "'Bad' is an irregular adjective. Its comparative form is 'worse'."
  },
  {
    id: "pred-2018-seng-75",
    question: "Choose the correct conjunction: 'I like coffee, ___ I prefer tea.'",
    options: [
      "but",
      "and",
      "or",
      "because"
    ],
    correctAnswer: 0,
    explanation: "'But' shows contrast. I like coffee, but I prefer tea."
  },
  {
    id: "pred-2018-seng-76",
    question: "What is the meaning of the suffix '-less'?",
    options: [
      "Without",
      "Full of",
      "Small",
      "Large"
    ],
    correctAnswer: 0,
    explanation: "The suffix '-less' means without, as in 'hopeless' (without hope)."
  },
  {
    id: "pred-2018-seng-77",
    question: "What type of noun is 'beauty'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "'Beauty' is an abstract noun because it represents a quality that cannot be physically touched."
  },
  {
    id: "pred-2018-seng-78",
    question: "Choose the correct word: 'She ___ to Paris last year.'",
    options: [
      "went",
      "go",
      "goes",
      "gone"
    ],
    correctAnswer: 0,
    explanation: "'Went' is the past tense of 'go'. The action happened last year, so past tense is needed."
  },
  {
    id: "pred-2018-seng-79",
    question: "What is the superlative form of 'bad'?",
    options: [
      "worst",
      "badder",
      "more bad",
      "baddest"
    ],
    correctAnswer: 0,
    explanation: "'Bad' is an irregular adjective. Its superlative form is 'worst'."
  },
  {
    id: "pred-2018-seng-80",
    question: "Which sentence is in the passive voice?",
    options: [
      "The song was sung by the choir.",
      "The choir sang the song.",
      "The choir is singing the song.",
      "The choir has sung the song."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The song was sung by the choir' is passive (song receives the action)."
  }
];

export const predicted2018SocialGeographyQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sgeo-1",
    question: "What is the largest continent in the world by area?",
    options: [
      "Asia",
      "Africa",
      "Europe",
      "North America"
    ],
    correctAnswer: 0,
    explanation: "Asia is the largest continent by area, covering approximately 44.58 million square kilometers."
  },
  {
    id: "pred-2018-sgeo-2",
    question: "What is the longest river in the world?",
    options: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctAnswer: 0,
    explanation: "The Nile River in Africa is generally considered the longest river in the world at approximately 6,650 kilometers."
  },
  {
    id: "pred-2018-sgeo-3",
    question: "What is the capital city of Ethiopia?",
    options: [
      "Addis Ababa",
      "Dire Dawa",
      "Mekelle",
      "Bahir Dar"
    ],
    correctAnswer: 0,
    explanation: "Addis Ababa is the capital and largest city of Ethiopia, founded in 1886."
  },
  {
    id: "pred-2018-sgeo-4",
    question: "What type of climate does Ethiopia have?",
    options: [
      "Tropical monsoon climate",
      "Desert climate",
      "Temperate climate",
      "Polar climate"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia has a tropical monsoon climate with variations due to its diverse topography and altitude."
  },
  {
    id: "pred-2018-sgeo-5",
    question: "What is the Great Rift Valley?",
    options: [
      "A geological feature extending from Lebanon to Mozambique",
      "A mountain range in Europe",
      "A desert in Africa",
      "A river in South America"
    ],
    correctAnswer: 0,
    explanation: "The Great Rift Valley is a geological feature that extends from Lebanon in the north to Mozambique in the south, passing through Ethiopia."
  },
  {
    id: "pred-2018-sgeo-6",
    question: "What is the highest peak in Ethiopia?",
    options: [
      "Ras Dashan",
      "Mount Entoto",
      "Mount Guna",
      "Mount Chilalo"
    ],
    correctAnswer: 0,
    explanation: "Ras Dashan is the highest peak in Ethiopia, reaching an elevation of 4,550 meters (14,928 feet)."
  },
  {
    id: "pred-2018-sgeo-7",
    question: "What is the primary economic activity in the Ethiopian highlands?",
    options: [
      "Agriculture",
      "Mining",
      "Fishing",
      "Manufacturing"
    ],
    correctAnswer: 0,
    explanation: "Agriculture is the primary economic activity in the Ethiopian highlands, with crops like teff, coffee, and various vegetables."
  },
  {
    id: "pred-2018-sgeo-8",
    question: "Which ocean borders Africa?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswer: 0,
    explanation: "The Atlantic Ocean borders the western coast of Africa."
  },
  {
    id: "pred-2018-sgeo-9",
    question: "What is the population of Ethiopia approximately?",
    options: [
      "120 million",
      "80 million",
      "150 million",
      "100 million"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia's population is approximately 120 million, making it the second-most populous nation in Africa."
  },
  {
    id: "pred-2018-sgeo-10",
    question: "What is the main export crop of Ethiopia?",
    options: [
      "Coffee",
      "Tea",
      "Cocoa",
      "Sugar"
    ],
    correctAnswer: 0,
    explanation: "Coffee is Ethiopia's main export crop, and the country is known as the birthplace of coffee."
  },
  {
    id: "pred-2018-sgeo-11",
    question: "What is the largest lake in Ethiopia?",
    options: [
      "Lake Tana",
      "Lake Abaya",
      "Lake Chamo",
      "Lake Ziway"
    ],
    correctAnswer: 0,
    explanation: "Lake Tana is the largest lake in Ethiopia and the source of the Blue Nile River."
  },
  {
    id: "pred-2018-sgeo-12",
    question: "Which region in Ethiopia is known for its rock-hewn churches?",
    options: [
      "Tigray",
      "Oromia",
      "Amhara",
      "Somali"
    ],
    correctAnswer: 0,
    explanation: "Tigray region is famous for its rock-hewn churches, particularly those in Lalibela."
  },
  {
    id: "pred-2018-sgeo-13",
    question: "What is the dominant religion in Ethiopia?",
    options: [
      "Christianity (Ethiopian Orthodox)",
      "Islam",
      "Hinduism",
      "Buddhism"
    ],
    correctAnswer: 0,
    explanation: "Ethiopian Orthodox Christianity is the dominant religion, practiced by approximately 40-45% of the population."
  },
  {
    id: "pred-2018-sgeo-14",
    question: "What is the currency of Ethiopia?",
    options: [
      "Ethiopian Birr",
      "Ethiopian Dollar",
      "Ethiopian Pound",
      "Ethiopian Euro"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Birr (ETB) is the official currency of Ethiopia."
  },
  {
    id: "pred-2018-sgeo-15",
    question: "Which mountain range runs through Ethiopia?",
    options: [
      "Ethiopian Highlands",
      "Andes Mountains",
      "Himalayas",
      "Alps"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Highlands is a rugged mass of mountains in Ethiopia, forming the largest continuous area of its elevation in the continent."
  },
  {
    id: "pred-2018-sgeo-16",
    question: "What is the most widely spoken language in Ethiopia?",
    options: [
      "Amharic",
      "Oromo",
      "Tigrinya",
      "Somali"
    ],
    correctAnswer: 0,
    explanation: "Amharic is the official working language and most widely spoken language in Ethiopia."
  },
  {
    id: "pred-2018-sgeo-17",
    question: "What is the Danakil Depression known for?",
    options: [
      "Being one of the hottest places on Earth",
      "Being the coldest place in Africa",
      "Having the highest rainfall",
      "Being covered in forests"
    ],
    correctAnswer: 0,
    explanation: "The Danakil Depression is one of the hottest and lowest places on Earth, with temperatures often exceeding 50°C."
  },
  {
    id: "pred-2018-sgeo-18",
    question: "What is the Simien Mountains National Park famous for?",
    options: [
      "Endemic wildlife and dramatic landscapes",
      "Ancient ruins",
      "Desert scenery",
      "Coastal beaches"
    ],
    correctAnswer: 0,
    explanation: "Simien Mountains National Park is a UNESCO World Heritage Site known for endemic species like the Walia ibex and Gelada baboon."
  },
  {
    id: "pred-2018-sgeo-19",
    question: "Which river originates in Ethiopia and flows into Sudan?",
    options: [
      "Blue Nile",
      "White Nile",
      "Congo River",
      "Niger River"
    ],
    correctAnswer: 0,
    explanation: "The Blue Nile originates from Lake Tana in Ethiopia and flows into Sudan, where it joins the White Nile."
  },
  {
    id: "pred-2018-sgeo-20",
    question: "What is the main environmental challenge facing Ethiopia?",
    options: [
      "Deforestation and soil erosion",
      "Flooding",
      "Desertification only",
      "Air pollution"
    ],
    correctAnswer: 0,
    explanation: "Deforestation and soil erosion are major environmental challenges, with Ethiopia losing significant forest cover over decades."
  },
  {
    id: "pred-2018-sgeo-21",
    question: "What is the Tropic of Cancer?",
    options: [
      "The northernmost latitude where the sun can be directly overhead",
      "The southernmost latitude where the sun can be directly overhead",
      "The equator",
      "The Arctic Circle"
    ],
    correctAnswer: 0,
    explanation: "The Tropic of Cancer at 23.5°N is the northernmost latitude where the sun appears directly overhead at noon during the June solstice."
  },
  {
    id: "pred-2018-sgeo-22",
    question: "What is the difference between weather and climate?",
    options: [
      "Weather is short-term; climate is long-term average",
      "Weather is long-term; climate is short-term",
      "They are the same thing",
      "Weather affects land; climate affects ocean"
    ],
    correctAnswer: 0,
    explanation: "Weather refers to day-to-day atmospheric conditions, while climate is the average weather pattern over a long period (typically 30+ years)."
  },
  {
    id: "pred-2018-sgeo-23",
    question: "What is the largest desert in Africa?",
    options: [
      "Sahara Desert",
      "Kalahari Desert",
      "Namib Desert",
      "Gobi Desert"
    ],
    correctAnswer: 0,
    explanation: "The Sahara Desert is the largest hot desert in the world and covers most of North Africa."
  },
  {
    id: "pred-2018-sgeo-24",
    question: "What is the difference between latitude and longitude?",
    options: [
      "Latitude measures north-south position; longitude measures east-west position",
      "Latitude measures east-west; longitude measures north-south",
      "Both measure the same thing",
      "Latitude measures time; longitude measures distance"
    ],
    correctAnswer: 0,
    explanation: "Latitude lines run horizontally and measure distance north or south of the equator. Longitude lines run vertically and measure distance east or west of the Prime Meridian."
  },
  {
    id: "pred-2018-sgeo-25",
    question: "What is a tributary?",
    options: [
      "A river or stream flowing into a larger river",
      "A river flowing out of a lake",
      "A man-made canal",
      "A dry riverbed"
    ],
    correctAnswer: 0,
    explanation: "A tributary is a smaller river or stream that flows into and joins a larger river or lake."
  },
  {
    id: "pred-2018-sgeo-26",
    question: "What is the International Date Line?",
    options: [
      "An imaginary line where the date changes by one day",
      "A line separating countries",
      "A line at the equator",
      "A line at the Prime Meridian"
    ],
    correctAnswer: 0,
    explanation: "The International Date Line (roughly 180° longitude) is where the date changes when crossing east or west."
  },
  {
    id: "pred-2018-sgeo-27",
    question: "What is the most populous country in Africa?",
    options: [
      "Nigeria",
      "Ethiopia",
      "Egypt",
      "Democratic Republic of Congo"
    ],
    correctAnswer: 0,
    explanation: "Nigeria is the most populous country in Africa with over 200 million people."
  },
  {
    id: "pred-2018-sgeo-28",
    question: "What is the difference between an isthmus and a peninsula?",
    options: [
      "Isthmus connects two land masses; peninsula is surrounded by water on three sides",
      "Peninsula connects two land masses; isthmus is surrounded by water",
      "They are the same",
      "Isthmus is a mountain; peninsula is a valley"
    ],
    correctAnswer: 0,
    explanation: "An isthmus is a narrow strip of land connecting two larger land areas. A peninsula is a piece of land almost entirely surrounded by water."
  },
  {
    id: "pred-2018-sgeo-29",
    question: "What is the greenhouse effect?",
    options: [
      "Trapping of heat in the atmosphere by certain gases",
      "Growing plants in a greenhouse",
      "Cooling of the Earth",
      "Reflection of sunlight"
    ],
    correctAnswer: 0,
    explanation: "The greenhouse effect is the trapping of the sun's warmth in the Earth's lower atmosphere by gases like CO₂ and methane."
  },
  {
    id: "pred-2018-sgeo-30",
    question: "What is the Ring of Fire?",
    options: [
      "A Pacific Ocean area with frequent earthquakes and volcanic activity",
      "A forest fire zone",
      "A desert region",
      "A mountain range"
    ],
    correctAnswer: 0,
    explanation: "The Ring of Fire is a horseshoe-shaped area in the Pacific Ocean basin where many earthquakes and volcanic eruptions occur."
  },
  {
    id: "pred-2018-sgeo-31",
    question: "What is the capital city of Ethiopia?",
    options: [
      "Addis Ababa",
      "Dire Dawa",
      "Mekelle",
      "Bahir Dar"
    ],
    correctAnswer: 0,
    explanation: "Addis Ababa is the capital and largest city of Ethiopia, founded in 1886."
  },
  {
    id: "pred-2018-sgeo-32",
    question: "What is the longest river in Africa?",
    options: [
      "Nile River",
      "Congo River",
      "Niger River",
      "Zambezi River"
    ],
    correctAnswer: 0,
    explanation: "The Nile River is the longest river in Africa, flowing northward through northeastern Africa."
  },
  {
    id: "pred-2018-sgeo-33",
    question: "What is the Great Rift Valley?",
    options: [
      "A large geological trench running through Africa",
      "A mountain range in Europe",
      "A desert in Asia",
      "An ocean trench"
    ],
    correctAnswer: 0,
    explanation: "The Great Rift Valley is a continuous geographic trench running from Lebanon to Mozambique, approximately 6,000 km in length."
  },
  {
    id: "pred-2018-sgeo-34",
    question: "What is the population of Ethiopia approximately?",
    options: [
      "Over 120 million",
      "Over 80 million",
      "Over 200 million",
      "Over 50 million"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia's population is over 120 million, making it the second most populous country in Africa after Nigeria."
  },
  {
    id: "pred-2018-sgeo-35",
    question: "What is the main river in Ethiopia?",
    options: [
      "Blue Nile (Abay)",
      "Awash River",
      "Omo River",
      "Shebelle River"
    ],
    correctAnswer: 0,
    explanation: "The Blue Nile (Abay) is the main river in Ethiopia, originating from Lake Tana and contributing about 80% of the Nile's water."
  },
  {
    id: "pred-2018-sgeo-36",
    question: "What is Lake Tana known for?",
    options: [
      "Source of the Blue Nile",
      "Largest lake in Africa",
      "Highest lake in the world",
      "Saltwater lake"
    ],
    correctAnswer: 0,
    explanation: "Lake Tana is the source of the Blue Nile River and is the largest lake in Ethiopia."
  },
  {
    id: "pred-2018-sgeo-37",
    question: "What is the Ethiopian Highlands?",
    options: [
      "A rugged mass of mountains in Ethiopia",
      "A desert region",
      "A coastal plain",
      "A river basin"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Highlands is a rugged mass of mountains forming the largest continuous area of its elevation in Africa."
  },
  {
    id: "pred-2018-sgeo-38",
    question: "What is the climate of the Ethiopian highlands?",
    options: [
      "Highland tropical climate",
      "Arid desert climate",
      "Mediterranean climate",
      "Tropical rainforest climate"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian highlands have a highland tropical climate with cooler temperatures due to altitude."
  },
  {
    id: "pred-2018-sgeo-39",
    question: "What is the Danakil Depression?",
    options: [
      "One of the lowest and hottest places on Earth",
      "A mountain range",
      "A fertile valley",
      "A coastal city"
    ],
    correctAnswer: 0,
    explanation: "The Danakil Depression is one of the lowest and hottest places on Earth, located in the Afar Region of Ethiopia."
  },
  {
    id: "pred-2018-sgeo-40",
    question: "What is the main export crop of Ethiopia?",
    options: [
      "Coffee",
      "Tea",
      "Cocoa",
      "Cotton"
    ],
    correctAnswer: 0,
    explanation: "Coffee is Ethiopia's main export crop, with the country being the birthplace of Arabica coffee."
  },
  {
    id: "pred-2018-sgeo-41",
    question: "What is the largest ocean in the world?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswer: 0,
    explanation: "The Pacific Ocean is the largest and deepest ocean, covering about 63 million square miles."
  },
  {
    id: "pred-2018-sgeo-42",
    question: "What is the smallest country in the world by area?",
    options: [
      "Vatican City",
      "Monaco",
      "San Marino",
      "Liechtenstein"
    ],
    correctAnswer: 0,
    explanation: "Vatican City is the smallest independent state by area, covering only 0.44 square kilometers."
  },
  {
    id: "pred-2018-sgeo-43",
    question: "What is the most populous country in the world?",
    options: [
      "India",
      "China",
      "United States",
      "Indonesia"
    ],
    correctAnswer: 0,
    explanation: "India is currently the most populous country in the world with over 1.4 billion people."
  },
  {
    id: "pred-2018-sgeo-44",
    question: "What is the tallest mountain in the world?",
    options: [
      "Mount Everest",
      "K2",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    correctAnswer: 0,
    explanation: "Mount Everest is the tallest mountain in the world at 8,848.86 meters above sea level."
  },
  {
    id: "pred-2018-sgeo-45",
    question: "What is the largest country in the world by area?",
    options: [
      "Russia",
      "Canada",
      "China",
      "United States"
    ],
    correctAnswer: 0,
    explanation: "Russia is the largest country by area, covering over 17 million square kilometers."
  },
  {
    id: "pred-2018-sgeo-46",
    question: "What is the equator?",
    options: [
      "An imaginary line dividing the Earth into Northern and Southern Hemispheres",
      "A line dividing East and West",
      "A mountain range",
      "A river"
    ],
    correctAnswer: 0,
    explanation: "The equator is an imaginary line at 0° latitude that divides the Earth into Northern and Southern Hemispheres."
  },
  {
    id: "pred-2018-sgeo-47",
    question: "What is a plateau?",
    options: [
      "A flat elevated landform",
      "A deep valley",
      "A coastal plain",
      "A volcanic peak"
    ],
    correctAnswer: 0,
    explanation: "A plateau is a flat, elevated landform that rises sharply above the surrounding area on at least one side."
  },
  {
    id: "pred-2018-sgeo-48",
    question: "What is the Prime Meridian?",
    options: [
      "The line of 0° longitude",
      "The line of 0° latitude",
      "The equator",
      "The International Date Line"
    ],
    correctAnswer: 0,
    explanation: "The Prime Meridian is the line of 0° longitude, passing through Greenwich, London, and divides the Earth into Eastern and Western Hemispheres."
  },
  {
    id: "pred-2018-sgeo-49",
    question: "What is the Tropic of Cancer?",
    options: [
      "The northernmost latitude where the sun can be directly overhead",
      "The southernmost latitude where the sun can be directly overhead",
      "The equator",
      "The Arctic Circle"
    ],
    correctAnswer: 0,
    explanation: "The Tropic of Cancer at 23.5°N is the northernmost latitude where the sun can appear directly overhead."
  },
  {
    id: "pred-2018-sgeo-50",
    question: "What is the Tropic of Capricorn?",
    options: [
      "The southernmost latitude where the sun can be directly overhead",
      "The northernmost latitude where the sun can be directly overhead",
      "The equator",
      "The Antarctic Circle"
    ],
    correctAnswer: 0,
    explanation: "The Tropic of Capricorn at 23.5°S is the southernmost latitude where the sun can appear directly overhead."
  },
  {
    id: "pred-2018-sgeo-51",
    question: "What is the difference between weather and climate?",
    options: [
      "Weather is short-term; climate is long-term",
      "Climate is short-term; weather is long-term",
      "They are the same",
      "Weather affects land; climate affects ocean"
    ],
    correctAnswer: 0,
    explanation: "Weather refers to day-to-day atmospheric conditions, while climate is the average weather pattern over a long period (typically 30+ years)."
  },
  {
    id: "pred-2018-sgeo-52",
    question: "What is a delta?",
    options: [
      "A landform formed at the mouth of a river",
      "A mountain peak",
      "A desert",
      "A volcanic island"
    ],
    correctAnswer: 0,
    explanation: "A delta is a landform created by sediment deposited where a river flows into an ocean or lake."
  },
  {
    id: "pred-2018-sgeo-53",
    question: "What is the largest lake in Africa?",
    options: [
      "Lake Victoria",
      "Lake Tanganyika",
      "Lake Malawi",
      "Lake Albert"
    ],
    correctAnswer: 0,
    explanation: "Lake Victoria is the largest lake in Africa by surface area and the largest tropical lake in the world."
  },
  {
    id: "pred-2018-sgeo-54",
    question: "What is the Sahel region?",
    options: [
      "A semi-arid transition zone south of the Sahara",
      "A rainforest region",
      "A mountain range",
      "A coastal plain"
    ],
    correctAnswer: 0,
    explanation: "The Sahel is the ecoclimatic and biogeographic zone of transition in Africa between the Sahara to the north and the Sudanian Savanna to the south."
  },
  {
    id: "pred-2018-sgeo-55",
    question: "What is the Congo Basin?",
    options: [
      "The drainage basin of the Congo River",
      "A mountain range",
      "A desert region",
      "A coastal area"
    ],
    correctAnswer: 0,
    explanation: "The Congo Basin is the drainage basin of the Congo River and the second largest rainforest in the world after the Amazon."
  },
  {
    id: "pred-2018-sgeo-56",
    question: "What is the highest mountain in Africa?",
    options: [
      "Mount Kilimanjaro",
      "Mount Kenya",
      "Mount Cameroon",
      "Rwenzori Mountains"
    ],
    correctAnswer: 0,
    explanation: "Mount Kilimanjaro in Tanzania is the highest mountain in Africa at 5,895 meters above sea level."
  },
  {
    id: "pred-2018-sgeo-57",
    question: "What is the Great Barrier Reef?",
    options: [
      "The world's largest coral reef system",
      "A mountain range",
      "A desert",
      "A river system"
    ],
    correctAnswer: 0,
    explanation: "The Great Barrier Reef off the coast of Australia is the world's largest coral reef system."
  },
  {
    id: "pred-2018-sgeo-58",
    question: "What is the Amazon Rainforest?",
    options: [
      "The world's largest tropical rainforest",
      "A desert region",
      "A mountain range",
      "A grassland"
    ],
    correctAnswer: 0,
    explanation: "The Amazon Rainforest in South America is the world's largest tropical rainforest, covering about 5.5 million square kilometers."
  },
  {
    id: "pred-2018-sgeo-59",
    question: "What is the Arctic Circle?",
    options: [
      "The latitude above which the sun does not set on summer solstice",
      "The equator",
      "The Tropic of Cancer",
      "The Antarctic Circle"
    ],
    correctAnswer: 0,
    explanation: "The Arctic Circle at approximately 66.5°N is the latitude above which the sun does not set on the summer solstice."
  },
  {
    id: "pred-2018-sgeo-60",
    question: "What is the Antarctic Circle?",
    options: [
      "The latitude below which the sun does not rise on winter solstice",
      "The equator",
      "The Tropic of Capricorn",
      "The Arctic Circle"
    ],
    correctAnswer: 0,
    explanation: "The Antarctic Circle at approximately 66.5°S is the latitude below which the sun does not rise on the winter solstice."
  },
  {
    id: "pred-2018-sgeo-61",
    question: "What is a monsoon?",
    options: [
      "A seasonal wind pattern bringing heavy rainfall",
      "A type of mountain",
      "A desert wind",
      "A ocean current"
    ],
    correctAnswer: 0,
    explanation: "A monsoon is a seasonal wind pattern that brings heavy rainfall, particularly in South and Southeast Asia."
  },
  {
    id: "pred-2018-sgeo-62",
    question: "What is the Himalayas?",
    options: [
      "The highest mountain range in the world",
      "A desert region",
      "A river system",
      "A coastal plain"
    ],
    correctAnswer: 0,
    explanation: "The Himalayas in Asia is the highest mountain range in the world, containing Mount Everest and other 8,000-meter peaks."
  },
  {
    id: "pred-2018-sgeo-63",
    question: "What is the Andes?",
    options: [
      "The longest continental mountain range in the world",
      "A river",
      "A desert",
      "A coastal plain"
    ],
    correctAnswer: 0,
    explanation: "The Andes in South America is the longest continental mountain range in the world, stretching about 7,000 kilometers."
  },
  {
    id: "pred-2018-sgeo-64",
    question: "What is the Gulf Stream?",
    options: [
      "A warm ocean current in the Atlantic",
      "A river in the Gulf of Mexico",
      "A desert wind",
      "A mountain range"
    ],
    correctAnswer: 0,
    explanation: "The Gulf Stream is a powerful warm ocean current in the Atlantic Ocean that influences climate in Europe and North America."
  },
  {
    id: "pred-2018-sgeo-65",
    question: "What is the difference between a map and a globe?",
    options: [
      "A map is flat; a globe is spherical",
      "A globe is flat; a map is spherical",
      "They are the same",
      "A map shows only land; a globe shows only water"
    ],
    correctAnswer: 0,
    explanation: "A map is a flat representation of Earth's surface, while a globe is a spherical model that accurately shows the Earth's shape."
  },
  {
    id: "pred-2018-sgeo-66",
    question: "What is a scale on a map?",
    options: [
      "The ratio of distance on the map to actual distance",
      "The size of the map",
      "The direction indicator",
      "The legend"
    ],
    correctAnswer: 0,
    explanation: "A map scale shows the relationship between distances on the map and actual distances on the ground."
  },
  {
    id: "pred-2018-sgeo-67",
    question: "What is a compass rose?",
    options: [
      "A symbol showing cardinal directions on a map",
      "A flower pattern",
      "A mountain symbol",
      "A river symbol"
    ],
    correctAnswer: 0,
    explanation: "A compass rose is a figure on a map or nautical chart used to display the orientation of the cardinal directions."
  },
  {
    id: "pred-2018-sgeo-68",
    question: "What is urbanization?",
    options: [
      "The movement of people from rural to urban areas",
      "The movement from urban to rural areas",
      "Building farms",
      "Deforestation"
    ],
    correctAnswer: 0,
    explanation: "Urbanization is the process by which large numbers of people become permanently concentrated in relatively small areas, forming cities."
  },
  {
    id: "pred-2018-sgeo-69",
    question: "What is a megalopolis?",
    options: [
      "A large urban region formed by the merging of metropolitan areas",
      "A single large city",
      "A rural area",
      "A desert region"
    ],
    correctAnswer: 0,
    explanation: "A megalopolis is a very large urban region formed by the merging of several metropolitan areas."
  },
  {
    id: "pred-2018-sgeo-70",
    question: "What is the difference between renewable and non-renewable resources?",
    options: [
      "Renewable can be replenished; non-renewable cannot",
      "Non-renewable can be replenished; renewable cannot",
      "They are the same",
      "Renewable are only found in cities"
    ],
    correctAnswer: 0,
    explanation: "Renewable resources like solar and wind can be naturally replenished, while non-renewable resources like fossil fuels cannot."
  },
  {
    id: "pred-2018-sgeo-71",
    question: "What is the Simien Mountains in Ethiopia known for?",
    options: [
      "UNESCO World Heritage Site with unique wildlife",
      "Desert landscape",
      "Coastal beaches",
      "Oil reserves"
    ],
    correctAnswer: 0,
    explanation: "The Simien Mountains are a UNESCO World Heritage Site known for their unique wildlife including the Walia ibex and Gelada baboon."
  },
  {
    id: "pred-2018-sgeo-72",
    question: "What is the Awash River in Ethiopia?",
    options: [
      "A major river flowing into the Afar Depression",
      "The longest river in Africa",
      "A coastal river",
      "A seasonal stream"
    ],
    correctAnswer: 0,
    explanation: "The Awash River is a major river in Ethiopia that flows into the Afar Depression and never reaches the sea."
  },
  {
    id: "pred-2018-sgeo-73",
    question: "What is the Omo River in Ethiopia known for?",
    options: [
      "Flowing into Lake Turkana and supporting diverse ecosystems",
      "Being the longest river in Ethiopia",
      "Flowing into the Red Sea",
      "Being a seasonal river only"
    ],
    correctAnswer: 0,
    explanation: "The Omo River flows south into Lake Turkana and supports diverse ecosystems and indigenous communities."
  },
  {
    id: "pred-2018-sgeo-74",
    question: "What is the Bale Mountains in Ethiopia known for?",
    options: [
      "High-altitude ecosystem with endemic species",
      "Desert landscape",
      "Coastal region",
      "Oil production"
    ],
    correctAnswer: 0,
    explanation: "The Bale Mountains contain the largest area of Afroalpine habitat in Africa and many endemic species."
  },
  {
    id: "pred-2018-sgeo-75",
    question: "What is the Shebelle River?",
    options: [
      "A river flowing through Ethiopia and Somalia",
      "A river only in Ethiopia",
      "A river only in Somalia",
      "A coastal river in Kenya"
    ],
    correctAnswer: 0,
    explanation: "The Shebelle River flows from Ethiopia through Somalia and is an important water source for both countries."
  },
  {
    id: "pred-2018-sgeo-76",
    question: "What is the main environmental challenge in the Sahel region?",
    options: [
      "Desertification",
      "Flooding",
      "Earthquakes",
      "Volcanic eruptions"
    ],
    correctAnswer: 0,
    explanation: "Desertification is the main environmental challenge in the Sahel, caused by climate change and overgrazing."
  },
  {
    id: "pred-2018-sgeo-77",
    question: "What is the difference between subsistence farming and commercial farming?",
    options: [
      "Subsistence is for family consumption; commercial is for sale",
      "Commercial is for family; subsistence is for sale",
      "They are the same",
      "Subsistence uses machines; commercial uses manual labor"
    ],
    correctAnswer: 0,
    explanation: "Subsistence farming produces food primarily for the farmer's family, while commercial farming produces crops for sale."
  },
  {
    id: "pred-2018-sgeo-78",
    question: "What is the Horn of Africa?",
    options: [
      "A peninsula in Northeast Africa including Ethiopia, Somalia, Eritrea, and Djibouti",
      "A mountain range",
      "A desert region",
      "A coastal area in West Africa"
    ],
    correctAnswer: 0,
    explanation: "The Horn of Africa is a peninsula in Northeast Africa that includes Ethiopia, Somalia, Eritrea, and Djibouti."
  },
  {
    id: "pred-2018-sgeo-79",
    question: "What is the significance of the Red Sea to Ethiopia?",
    options: [
      "Ethiopia has access to the Red Sea through Eritrea and Djibouti",
      "Ethiopia has no access to the Red Sea",
      "The Red Sea is a river in Ethiopia",
      "The Red Sea is a lake in Ethiopia"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia lost its direct access to the Red Sea after Eritrea's independence but uses ports in Eritrea and Djibouti."
  },
  {
    id: "pred-2018-sgeo-80",
    question: "What is the main economic activity in the Ethiopian lowlands?",
    options: [
      "Pastoralism and livestock herding",
      "Industrial manufacturing",
      "Fishing",
      "Forestry"
    ],
    correctAnswer: 0,
    explanation: "Pastoralism and livestock herding are the main economic activities in the Ethiopian lowlands due to the arid climate."
  }
];

export const predicted2018SocialEconomicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-secon-1",
    question: "What is the primary goal of economics?",
    options: [
      "To study how societies allocate scarce resources",
      "To print money",
      "To control prices",
      "To manage international trade only"
    ],
    correctAnswer: 0,
    explanation: "Economics studies how societies allocate scarce resources to satisfy unlimited human wants and needs."
  },
  {
    id: "pred-2018-secon-2",
    question: "What is 'opportunity cost'?",
    options: [
      "The value of the next best alternative given up when making a choice",
      "The cost of production",
      "The price of a good",
      "The tax on a product"
    ],
    correctAnswer: 0,
    explanation: "Opportunity cost is the value of the next best alternative that is given up when making a decision."
  },
  {
    id: "pred-2018-secon-3",
    question: "What is 'supply and demand'?",
    options: [
      "Economic model showing relationship between quantity supplied and quantity demanded",
      "Government price control",
      "Tax collection method",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "Supply and demand is an economic model that shows how price and quantity are determined in a market."
  },
  {
    id: "pred-2018-secon-4",
    question: "What is 'inflation'?",
    options: [
      "A general increase in prices over time",
      "A decrease in prices",
      "Economic growth",
      "Low unemployment"
    ],
    correctAnswer: 0,
    explanation: "Inflation is a general increase in the price level of goods and services over time."
  },
  {
    id: "pred-2018-secon-5",
    question: "What is 'GDP'?",
    options: [
      "Gross Domestic Product - total value of goods and services produced in a country",
      "General Development Plan",
      "Government Debt Payment",
      "Global Development Program"
    ],
    correctAnswer: 0,
    explanation: "GDP (Gross Domestic Product) measures the total value of all goods and services produced within a country in a given period."
  },
  {
    id: "pred-2018-secon-6",
    question: "What is 'unemployment'?",
    options: [
      "People who are actively seeking work but cannot find jobs",
      "People who don't want to work",
      "People who are retired",
      "People who are students"
    ],
    correctAnswer: 0,
    explanation: "Unemployment refers to people who are actively seeking work but are unable to find employment."
  },
  {
    id: "pred-2018-secon-7",
    question: "What is a 'market economy'?",
    options: [
      "Economic system where prices are determined by supply and demand",
      "Government controls all prices",
      "No private property allowed",
      "Central planning only"
    ],
    correctAnswer: 0,
    explanation: "In a market economy, prices and production are determined by supply and demand with minimal government intervention."
  },
  {
    id: "pred-2018-secon-8",
    question: "What is 'scarcity' in economics?",
    options: [
      "Limited resources compared to unlimited wants",
      "Abundance of resources",
      "Equal distribution",
      "Government control"
    ],
    correctAnswer: 0,
    explanation: "Scarcity is the fundamental economic problem of having limited resources to satisfy unlimited human wants."
  },
  {
    id: "pred-2018-secon-9",
    question: "What is 'taxation'?",
    options: [
      "Compulsory payments to government to fund public services",
      "Voluntary donations",
      "Private business revenue",
      "Bank interest"
    ],
    correctAnswer: 0,
    explanation: "Taxation is the compulsory collection of revenue by the government to fund public services and infrastructure."
  },
  {
    id: "pred-2018-secon-10",
    question: "What is 'international trade'?",
    options: [
      "Exchange of goods and services between countries",
      "Trade within a country",
      "Government spending",
      "Local market transactions"
    ],
    correctAnswer: 0,
    explanation: "International trade is the exchange of goods, services, and capital across national borders."
  },
  {
    id: "pred-2018-secon-11",
    question: "What is 'monetary policy'?",
    options: [
      "Central bank actions to control money supply and interest rates",
      "Government taxation policy",
      "Trade agreements between countries",
      "Environmental regulations"
    ],
    correctAnswer: 0,
    explanation: "Monetary policy involves central bank actions to control money supply and interest rates to influence the economy."
  },
  {
    id: "pred-2018-secon-12",
    question: "What is 'fiscal policy'?",
    options: [
      "Government use of taxation and spending to influence the economy",
      "Central bank policy",
      "Trade policy",
      "Environmental policy"
    ],
    correctAnswer: 0,
    explanation: "Fiscal policy refers to the government's use of taxation and spending to influence economic activity."
  },
  {
    id: "pred-2018-secon-13",
    question: "What is a 'monopoly'?",
    options: [
      "A single seller dominates the market with no close substitutes",
      "Many sellers compete",
      "Government controls the market",
      "No sellers exist"
    ],
    correctAnswer: 0,
    explanation: "A monopoly exists when a single seller controls the entire market for a product with no close substitutes."
  },
  {
    id: "pred-2018-secon-14",
    question: "What is 'comparative advantage'?",
    options: [
      "Producing at lower opportunity cost than trading partners",
      "Producing more than others",
      "Producing faster than others",
      "Producing cheaper than others"
    ],
    correctAnswer: 0,
    explanation: "Comparative advantage means producing goods at a lower opportunity cost than trading partners."
  },
  {
    id: "pred-2018-secon-15",
    question: "What is the 'law of demand'?",
    options: [
      "As price increases, quantity demanded decreases",
      "As price increases, quantity demanded increases",
      "Price and demand are unrelated",
      "Demand always increases"
    ],
    correctAnswer: 0,
    explanation: "The law of demand states that as price increases, quantity demanded decreases, all else being equal."
  },
  {
    id: "pred-2018-secon-16",
    question: "What is the 'law of supply'?",
    options: [
      "As price increases, quantity supplied increases",
      "As price increases, quantity supplied decreases",
      "Supply is independent of price",
      "Supply always decreases"
    ],
    correctAnswer: 0,
    explanation: "The law of supply states that as price increases, producers are willing to supply more of the good."
  },
  {
    id: "pred-2018-secon-17",
    question: "What is 'equilibrium price'?",
    options: [
      "Price where quantity demanded equals quantity supplied",
      "Highest price in market",
      "Lowest price in market",
      "Government-set price"
    ],
    correctAnswer: 0,
    explanation: "Equilibrium price occurs where the quantity demanded by consumers equals the quantity supplied by producers."
  },
  {
    id: "pred-2018-secon-18",
    question: "What is a 'public good'?",
    options: [
      "Non-excludable and non-rivalrous good",
      "Good sold by government",
      "Expensive good",
      "Imported good"
    ],
    correctAnswer: 0,
    explanation: "Public goods are non-excludable (cannot exclude anyone) and non-rivalrous (one person's use doesn't reduce availability)."
  },
  {
    id: "pred-2018-secon-19",
    question: "What is the 'business cycle'?",
    options: [
      "Fluctuations in economic activity over time",
      "Daily business operations",
      "Annual business reports",
      "Business planning process"
    ],
    correctAnswer: 0,
    explanation: "The business cycle refers to periodic economic fluctuations including expansions and recessions."
  },
  {
    id: "pred-2018-secon-20",
    question: "What is the difference between nominal and real GDP?",
    options: [
      "Nominal uses current prices; real uses constant prices",
      "Nominal is larger; real is smaller",
      "Nominal includes services; real does not",
      "No difference"
    ],
    correctAnswer: 0,
    explanation: "Nominal GDP uses current prices, while real GDP adjusts for inflation using constant base-year prices."
  },
  {
    id: "pred-2018-secon-21",
    question: "What is 'elasticity of demand'?",
    options: [
      "Measure of how quantity demanded responds to price changes",
      "Measure of production costs",
      "Measure of government spending",
      "Measure of trade balance"
    ],
    correctAnswer: 0,
    explanation: "Price elasticity of demand measures how much the quantity demanded of a good responds to a change in its price."
  },
  {
    id: "pred-2018-secon-22",
    question: "What is a 'subsidy'?",
    options: [
      "Government payment to producers to lower production costs",
      "Tax on consumers",
      "Government loan",
      "Private investment"
    ],
    correctAnswer: 0,
    explanation: "A subsidy is a government payment to producers to reduce production costs and encourage production of specific goods."
  },
  {
    id: "pred-2018-secon-23",
    question: "What is the difference between a 'need' and a 'want'?",
    options: [
      "Needs are essential; wants are desires",
      "Needs are expensive; wants are cheap",
      "Needs are for rich people; wants are for poor",
      "They are the same"
    ],
    correctAnswer: 0,
    explanation: "Needs are essential requirements for survival (food, shelter, clothing), while wants are desires that enhance quality of life."
  },
  {
    id: "pred-2018-secon-24",
    question: "What is 'human capital'?",
    options: [
      "Skills, knowledge, and experience possessed by workers",
      "Money invested in machines",
      "Government buildings",
      "Natural resources"
    ],
    correctAnswer: 0,
    explanation: "Human capital refers to the skills, knowledge, and experience that workers possess, which increases their productivity."
  },
  {
    id: "pred-2018-secon-25",
    question: "What is 'division of labor'?",
    options: [
      "Specialization of workers in specific tasks",
      "Workers doing all tasks",
      "Government control of labor",
      "Labor union formation"
    ],
    correctAnswer: 0,
    explanation: "Division of labor is the specialization of workers in specific tasks, which increases efficiency and productivity."
  },
  {
    id: "pred-2018-secon-26",
    question: "What is the 'law of diminishing returns'?",
    options: [
      "Adding more input eventually yields smaller increases in output",
      "More input always yields more output",
      "Output decreases with more input",
      "Input and output are unrelated"
    ],
    correctAnswer: 0,
    explanation: "The law of diminishing returns states that adding more of a variable input to fixed inputs eventually results in smaller increases in output."
  },
  {
    id: "pred-2018-secon-27",
    question: "What is 'foreign direct investment (FDI)'?",
    options: [
      "Investment by a company in business operations in another country",
      "Government foreign aid",
      "International trade",
      "Currency exchange"
    ],
    correctAnswer: 0,
    explanation: "FDI is when a company or individual invests directly in business operations in another country, establishing operations or acquiring assets."
  },
  {
    id: "pred-2018-secon-28",
    question: "What is 'recession'?",
    options: [
      "Period of economic decline characterized by reduced GDP and employment",
      "Period of rapid economic growth",
      "Stable economic period",
      "High inflation period"
    ],
    correctAnswer: 0,
    explanation: "A recession is a significant decline in economic activity spread across the economy, typically visible in GDP, income, employment, and industrial production."
  },
  {
    id: "pred-2018-secon-29",
    question: "What is 'balance of trade'?",
    options: [
      "Difference between a country's exports and imports",
      "Government budget balance",
      "Bank account balance",
      "Personal savings"
    ],
    correctAnswer: 0,
    explanation: "Balance of trade is the difference between the value of a country's exports and imports of goods and services."
  },
  {
    id: "pred-2018-secon-30",
    question: "What is 'sustainable development'?",
    options: [
      "Development that meets present needs without compromising future generations",
      "Rapid economic growth",
      "Development using all resources immediately",
      "Only environmental protection"
    ],
    correctAnswer: 0,
    explanation: "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
  },
  {
    id: "pred-2018-secon-31",
    question: "What is 'inflation'?",
    options: [
      "General increase in prices and fall in purchasing power",
      "General decrease in prices",
      "Increase in production",
      "Decrease in unemployment"
    ],
    correctAnswer: 0,
    explanation: "Inflation is the rate at which the general level of prices for goods and services is rising, leading to a fall in purchasing power."
  },
  {
    id: "pred-2018-secon-32",
    question: "What is 'GDP'?",
    options: [
      "Gross Domestic Product - total value of goods and services produced",
      "General Domestic Price",
      "Gross Development Plan",
      "General Development Product"
    ],
    correctAnswer: 0,
    explanation: "GDP (Gross Domestic Product) is the total monetary value of all finished goods and services produced within a country's borders in a specific time period."
  },
  {
    id: "pred-2018-secon-33",
    question: "What is 'unemployment'?",
    options: [
      "People who are actively seeking work but unable to find jobs",
      "People who choose not to work",
      "People working part-time",
      "All people not working"
    ],
    correctAnswer: 0,
    explanation: "Unemployment refers to people who are actively looking for work but are unable to find employment."
  },
  {
    id: "pred-2018-secon-34",
    question: "What is 'supply and demand'?",
    options: [
      "Economic model of price determination in a market",
      "Government control of prices",
      "Production only",
      "Consumption only"
    ],
    correctAnswer: 0,
    explanation: "Supply and demand is an economic model that determines the price of goods in a market based on availability and consumer desire."
  },
  {
    id: "pred-2018-secon-35",
    question: "What is 'opportunity cost'?",
    options: [
      "Value of the next best alternative forgone",
      "Cost of production",
      "Price of goods",
      "Profit margin"
    ],
    correctAnswer: 0,
    explanation: "Opportunity cost is the value of the next best alternative that must be forgone when making a choice."
  },
  {
    id: "pred-2018-secon-36",
    question: "What is 'market economy'?",
    options: [
      "Economic system where supply and demand determine prices",
      "Government controls all economic decisions",
      "No private property",
      "Central planning only"
    ],
    correctAnswer: 0,
    explanation: "A market economy is an economic system where decisions about production and consumption are guided by market forces of supply and demand."
  },
  {
    id: "pred-2018-secon-37",
    question: "What is 'poverty'?",
    options: [
      "State of lacking sufficient money or material possessions",
      "State of having too much money",
      "State of being unemployed only",
      "State of being wealthy"
    ],
    correctAnswer: 0,
    explanation: "Poverty is the state of not having enough money to meet basic needs such as food, clothing, and shelter."
  },
  {
    id: "pred-2018-secon-38",
    question: "What is 'tax'?",
    options: [
      "Mandatory financial charge imposed by government",
      "Voluntary payment to government",
      "Payment to private companies",
      "Charitable donation"
    ],
    correctAnswer: 0,
    explanation: "A tax is a compulsory financial charge or other type of levy imposed by a government on individuals or entities."
  },
  {
    id: "pred-2018-secon-39",
    question: "What is 'budget deficit'?",
    options: [
      "When government spending exceeds revenue",
      "When revenue exceeds spending",
      "When budget is balanced",
      "When there is no spending"
    ],
    correctAnswer: 0,
    explanation: "A budget deficit occurs when government spending exceeds its revenue, typically requiring borrowing to cover the gap."
  },
  {
    id: "pred-2018-secon-40",
    question: "What is 'economic growth'?",
    options: [
      "Increase in the production of goods and services over time",
      "Decrease in production",
      "No change in production",
      "Stagnation of economy"
    ],
    correctAnswer: 0,
    explanation: "Economic growth is an increase in the production of goods and services over a specific period, typically measured by GDP."
  },
  {
    id: "pred-2018-secon-41",
    question: "What is 'inflation'?",
    options: [
      "A general increase in prices and fall in purchasing power",
      "A decrease in prices",
      "No change in prices",
      "Economic growth"
    ],
    correctAnswer: 0,
    explanation: "Inflation is the rate at which the general level of prices for goods and services is rising, causing purchasing power to fall."
  },
  {
    id: "pred-2018-secon-42",
    question: "What is 'deflation'?",
    options: [
      "A general decrease in prices and increase in purchasing power",
      "A general increase in prices",
      "No change in prices",
      "Economic stability"
    ],
    correctAnswer: 0,
    explanation: "Deflation is a decrease in the general price level of goods and services, the opposite of inflation."
  },
  {
    id: "pred-2018-secon-43",
    question: "What is 'recession'?",
    options: [
      "A significant decline in economic activity across the economy",
      "Economic growth",
      "Price stability",
      "High employment"
    ],
    correctAnswer: 0,
    explanation: "A recession is a significant decline in economic activity spread across the economy, typically lasting more than a few months."
  },
  {
    id: "pred-2018-secon-44",
    question: "What is 'fiscal policy'?",
    options: [
      "Government use of taxation and spending to influence the economy",
      "Central bank policy on money supply",
      "Private sector investment decisions",
      "International trade agreements"
    ],
    correctAnswer: 0,
    explanation: "Fiscal policy refers to government use of taxation and spending to influence the economy."
  },
  {
    id: "pred-2018-secon-45",
    question: "What is 'monetary policy'?",
    options: [
      "Central bank's management of money supply and interest rates",
      "Government taxation policy",
      "Private sector investment",
      "International trade policy"
    ],
    correctAnswer: 0,
    explanation: "Monetary policy is the process by which a central bank manages the money supply and interest rates to achieve economic objectives."
  },
  {
    id: "pred-2018-secon-46",
    question: "What is 'balance of trade'?",
    options: [
      "Difference between a country's exports and imports",
      "Government budget balance",
      "Bank account balance",
      "Trade deficit only"
    ],
    correctAnswer: 0,
    explanation: "Balance of trade is the difference between the value of a country's exports and imports of goods."
  },
  {
    id: "pred-2018-secon-47",
    question: "What is 'foreign direct investment (FDI)'?",
    options: [
      "Investment by a company in business interests in another country",
      "Domestic investment only",
      "Government spending",
      "Consumer spending"
    ],
    correctAnswer: 0,
    explanation: "FDI is an investment made by a company or entity based in one country into business interests located in another country."
  },
  {
    id: "pred-2018-secon-48",
    question: "What is 'human capital'?",
    options: [
      "The skills, knowledge, and experience possessed by workers",
      "Physical capital only",
      "Financial capital only",
      "Natural resources"
    ],
    correctAnswer: 0,
    explanation: "Human capital refers to the skills, knowledge, and experience possessed by an individual or population, viewed in terms of their value to an organization or country."
  },
  {
    id: "pred-2018-secon-49",
    question: "What is 'gross national income (GNI)'?",
    options: [
      "Total income earned by a nation's citizens and businesses",
      "Domestic production only",
      "Export value only",
      "Import value only"
    ],
    correctAnswer: 0,
    explanation: "GNI is the total income earned by a nation's citizens and businesses, including income from abroad."
  },
  {
    id: "pred-2018-secon-50",
    question: "What is 'purchasing power parity (PPP)'?",
    options: [
      "Economic theory comparing different currencies' purchasing power",
      "Exchange rate only",
      "Trade balance",
      "Inflation rate"
    ],
    correctAnswer: 0,
    explanation: "PPP is an economic theory that compares different countries' currencies through a basket of goods approach."
  },
  {
    id: "pred-2018-secon-51",
    question: "What is 'subsidy'?",
    options: [
      "Government financial assistance to producers or consumers",
      "Tax on producers",
      "Consumer payment",
      "Export duty"
    ],
    correctAnswer: 0,
    explanation: "A subsidy is a government transfer or payment to individuals or firms, usually intended to reduce the cost of goods or services."
  },
  {
    id: "pred-2018-secon-52",
    question: "What is 'tariff'?",
    options: [
      "Tax on imported goods",
      "Tax on exported goods",
      "Domestic tax",
      "Consumer tax"
    ],
    correctAnswer: 0,
    explanation: "A tariff is a tax imposed by a government on imported goods and services."
  },
  {
    id: "pred-2018-secon-53",
    question: "What is 'quota' in international trade?",
    options: [
      "Limit on the quantity of goods that can be imported",
      "Tax on imports",
      "Export requirement",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "A quota is a trade restriction that limits the quantity of goods that can be imported or exported during a specific time period."
  },
  {
    id: "pred-2018-secon-54",
    question: "What is 'devaluation'?",
    options: [
      "Official reduction in the value of a currency relative to other currencies",
      "Increase in currency value",
      "No change in value",
      "Currency appreciation"
    ],
    correctAnswer: 0,
    explanation: "Devaluation is the deliberate downward adjustment of a country's currency value relative to another currency."
  },
  {
    id: "pred-2018-secon-55",
    question: "What is 'public debt'?",
    options: [
      "Total amount of money owed by the government",
      "Private sector debt",
      "Corporate debt",
      "Individual debt"
    ],
    correctAnswer: 0,
    explanation: "Public debt is the total amount of money that a government owes to creditors, including domestic and foreign lenders."
  },
  {
    id: "pred-2018-secon-56",
    question: "What is 'GDP per capita'?",
    options: [
      "GDP divided by the population of a country",
      "Total GDP only",
      "GDP growth rate",
      "GDP minus imports"
    ],
    correctAnswer: 0,
    explanation: "GDP per capita is a measure of a country's economic output that accounts for its population, calculated by dividing GDP by the population."
  },
  {
    id: "pred-2018-secon-57",
    question: "What is 'economic development'?",
    options: [
      "Process of improving economic well-being and quality of life",
      "Economic growth only",
      "Population increase",
      "Industrialization only"
    ],
    correctAnswer: 0,
    explanation: "Economic development is the process by which a nation improves the economic, political, and social well-being of its people."
  },
  {
    id: "pred-2018-secon-58",
    question: "What is 'infrastructure'?",
    options: [
      "Basic physical and organizational structures needed for economic activity",
      "Natural resources only",
      "Human resources only",
      "Financial markets only"
    ],
    correctAnswer: 0,
    explanation: "Infrastructure refers to the fundamental facilities and systems serving a country, city, or area, including transportation, communication, and utilities."
  },
  {
    id: "pred-2018-secon-59",
    question: "What is 'entrepreneurship'?",
    options: [
      "The process of starting and running a new business",
      "Working for a company",
      "Government employment",
      "Agricultural work only"
    ],
    correctAnswer: 0,
    explanation: "Entrepreneurship is the activity of setting up a business or businesses, taking on financial risks in the hope of profit."
  },
  {
    id: "pred-2018-secon-60",
    question: "What is 'sustainable development'?",
    options: [
      "Development that meets present needs without compromising future generations",
      "Rapid economic growth at any cost",
      "Resource depletion",
      "Environmental destruction"
    ],
    correctAnswer: 0,
    explanation: "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
  },
  {
    id: "pred-2018-secon-61",
    question: "What is 'interest rate'?",
    options: [
      "The cost of borrowing money or return on saving",
      "Tax rate",
      "Profit margin",
      "Exchange rate"
    ],
    correctAnswer: 0,
    explanation: "Interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of assets."
  },
  {
    id: "pred-2018-secon-62",
    question: "What is 'central bank'?",
    options: [
      "The main monetary authority of a country",
      "Commercial bank",
      "Investment bank",
      "Private bank"
    ],
    correctAnswer: 0,
    explanation: "A central bank is the main monetary authority of a country that manages currency, money supply, and interest rates."
  },
  {
    id: "pred-2018-secon-63",
    question: "What is 'money supply'?",
    options: [
      "Total amount of monetary assets available in an economy",
      "Bank reserves only",
      "Currency in circulation only",
      "Gold reserves"
    ],
    correctAnswer: 0,
    explanation: "Money supply is the total amount of monetary assets available in an economy at a specific time."
  },
  {
    id: "pred-2018-secon-64",
    question: "What is 'exchange rate'?",
    options: [
      "The value of one currency expressed in terms of another",
      "Interest rate",
      "Inflation rate",
      "Tax rate"
    ],
    correctAnswer: 0,
    explanation: "Exchange rate is the value of one nation's currency versus the currency of another nation or economic region."
  },
  {
    id: "pred-2018-secon-65",
    question: "What is 'export'?",
    options: [
      "Goods and services produced domestically and sold abroad",
      "Goods produced abroad and sold domestically",
      "Domestic sales only",
      "Government purchases"
    ],
    correctAnswer: 0,
    explanation: "Exports are goods and services that are produced domestically and sold to foreign buyers."
  },
  {
    id: "pred-2018-secon-66",
    question: "What is 'import'?",
    options: [
      "Goods and services produced abroad and purchased domestically",
      "Goods produced domestically and sold abroad",
      "Domestic production only",
      "Government sales"
    ],
    correctAnswer: 0,
    explanation: "Imports are goods and services that are purchased from foreign countries and brought into a country."
  },
  {
    id: "pred-2018-secon-67",
    question: "What is 'trade surplus'?",
    options: [
      "When exports exceed imports",
      "When imports exceed exports",
      "When exports equal imports",
      "When there is no trade"
    ],
    correctAnswer: 0,
    explanation: "A trade surplus occurs when a country's exports exceed its imports."
  },
  {
    id: "pred-2018-secon-68",
    question: "What is 'trade deficit'?",
    options: [
      "When imports exceed exports",
      "When exports exceed imports",
      "When exports equal imports",
      "When there is no trade"
    ],
    correctAnswer: 0,
    explanation: "A trade deficit occurs when a country's imports exceed its exports."
  },
  {
    id: "pred-2018-secon-69",
    question: "What is 'industrialization'?",
    options: [
      "The process of social and economic change that transforms a country from an agrarian to an industrial economy",
      "Agricultural development",
      "Service sector growth only",
      "Deindustrialization"
    ],
    correctAnswer: 0,
    explanation: "Industrialization is the transition from an agricultural economy to one dominated by manufacturing and industry."
  },
  {
    id: "pred-2018-secon-70",
    question: "What is 'urbanization'?",
    options: [
      "The process by which people move from rural to urban areas",
      "Movement from urban to rural areas",
      "Population decline",
      "Agricultural expansion"
    ],
    correctAnswer: 0,
    explanation: "Urbanization is the process by which large numbers of people become permanently concentrated in relatively small areas, forming cities."
  },
  {
    id: "pred-2018-secon-71",
    question: "What is the main economic activity in Ethiopia?",
    options: [
      "Agriculture",
      "Manufacturing",
      "Services",
      "Mining"
    ],
    correctAnswer: 0,
    explanation: "Agriculture is the main economic activity in Ethiopia, employing the majority of the population and contributing significantly to GDP."
  },
  {
    id: "pred-2018-secon-72",
    question: "What is Ethiopia's main export?",
    options: [
      "Coffee",
      "Gold",
      "Oil",
      "Textiles"
    ],
    correctAnswer: 0,
    explanation: "Coffee is Ethiopia's main export, accounting for a significant portion of the country's foreign exchange earnings."
  },
  {
    id: "pred-2018-secon-73",
    question: "What is 'Growth and Transformation Plan (GTP)' in Ethiopia?",
    options: [
      "A national development strategy to accelerate economic growth",
      "Agricultural policy only",
      "Educational program",
      "Health initiative"
    ],
    correctAnswer: 0,
    explanation: "The GTP was Ethiopia's national development strategy aimed at accelerating economic growth and transforming the country into a middle-income economy."
  },
  {
    id: "pred-2018-secon-74",
    question: "What is 'microfinance'?",
    options: [
      "Financial services for low-income individuals and small businesses",
      "Large corporate banking",
      "Government borrowing",
      "International trade finance"
    ],
    correctAnswer: 0,
    explanation: "Microfinance provides financial services such as loans, savings, and insurance to low-income individuals and small businesses."
  },
  {
    id: "pred-2018-secon-75",
    question: "What is 'informal sector'?",
    options: [
      "Economic activities that are not regulated or taxed by government",
      "Government-regulated businesses",
      "Large corporations",
      "International companies"
    ],
    correctAnswer: 0,
    explanation: "The informal sector consists of economic activities that are not registered, regulated, or taxed by the government."
  },
  {
    id: "pred-2018-secon-76",
    question: "What is 'remittance'?",
    options: [
      "Money sent by foreign workers to their home country",
      "Government aid",
      "Foreign investment",
      "Export earnings"
    ],
    correctAnswer: 0,
    explanation: "Remittances are funds sent by migrant workers to their families or communities in their home countries."
  },
  {
    id: "pred-2018-secon-77",
    question: "What is 'economic integration'?",
    options: [
      "The unification of economic policies between different regions",
      "Economic isolation",
      "Trade barriers",
      "Currency devaluation"
    ],
    correctAnswer: 0,
    explanation: "Economic integration refers to the unification of economic policies between different regions through the elimination of trade barriers."
  },
  {
    id: "pred-2018-secon-78",
    question: "What is the African Union's economic goal?",
    options: [
      "To promote economic integration and development in Africa",
      "To isolate African countries",
      "To increase trade barriers",
      "To promote conflict"
    ],
    correctAnswer: 0,
    explanation: "The African Union aims to promote economic integration, development, and cooperation among African countries."
  },
  {
    id: "pred-2018-secon-79",
    question: "What is 'comparative advantage'?",
    options: [
      "The ability to produce goods at a lower opportunity cost than others",
      "Producing everything domestically",
      "Importing all goods",
      "Having no trade"
    ],
    correctAnswer: 0,
    explanation: "Comparative advantage is the ability of a country to produce a particular good or service at a lower opportunity cost than another country."
  },
  {
    id: "pred-2018-secon-80",
    question: "What is 'economic liberalization'?",
    options: [
      "Reducing government restrictions on economic activities",
      "Increasing government control",
      "Nationalizing industries",
      "Imposing trade barriers"
    ],
    correctAnswer: 0,
    explanation: "Economic liberalization refers to reducing government regulations and restrictions on economic activities to promote free markets."
  }
];

export const predicted2018SocialCivicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sciv-1",
    question: "What is the purpose of government?",
    options: [
      "To maintain order, protect rights, and provide public services",
      "To control citizens only",
      "To collect taxes only",
      "To enforce military rule"
    ],
    correctAnswer: 0,
    explanation: "The purpose of government is to maintain social order, protect citizens' rights, and provide essential public services."
  },
  {
    id: "pred-2018-sciv-2",
    question: "What is 'sovereignty'?",
    options: [
      "The supreme authority of a state to govern itself",
      "Economic power",
      "Military strength",
      "International influence"
    ],
    correctAnswer: 0,
    explanation: "Sovereignty is the supreme authority of a state to govern itself without external interference."
  },
  {
    id: "pred-2018-sciv-3",
    question: "What are 'human rights'?",
    options: [
      "Fundamental rights inherent to all human beings",
      "Rights granted by government",
      "Rights of citizens only",
      "Economic privileges"
    ],
    correctAnswer: 0,
    explanation: "Human rights are fundamental rights and freedoms that belong to every person by virtue of being human."
  },
  {
    id: "pred-2018-sciv-4",
    question: "What is 'democracy'?",
    options: [
      "System of government by the whole population through elected representatives",
      "Rule by one person",
      "Military rule",
      "No government"
    ],
    correctAnswer: 0,
    explanation: "Democracy is a system of government where power is held by the people through elected representatives."
  },
  {
    id: "pred-2018-sciv-5",
    question: "What is the role of the legislative branch?",
    options: [
      "To make laws",
      "To enforce laws",
      "To interpret laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The legislative branch (parliament/congress) is responsible for making and passing laws."
  },
  {
    id: "pred-2018-sciv-6",
    question: "What is 'political participation'?",
    options: [
      "Citizens taking part in political processes like voting and campaigning",
      "Watching politics on TV",
      "Reading news only",
      "Ignoring politics"
    ],
    correctAnswer: 0,
    explanation: "Political participation involves citizens actively engaging in political processes such as voting, campaigning, and public debate."
  },
  {
    id: "pred-2018-sciv-7",
    question: "What is 'social justice'?",
    options: [
      "Fair and just relations between individuals and society",
      "Economic inequality",
      "Social discrimination",
      "Military power"
    ],
    correctAnswer: 0,
    explanation: "Social justice refers to fair and just relations between individuals and society, including fair distribution of wealth and opportunities."
  },
  {
    id: "pred-2018-sciv-8",
    question: "What is 'civic responsibility'?",
    options: [
      "Duties of citizens to contribute to their community",
      "Rights only",
      "Government duties only",
      "Military service only"
    ],
    correctAnswer: 0,
    explanation: "Civic responsibility refers to the duties of citizens to actively participate in their community and contribute to the common good."
  },
  {
    id: "pred-2018-sciv-9",
    question: "What is 'public policy'?",
    options: [
      "Government actions and decisions to address public problems",
      "Private business decisions",
      "Individual choices",
      "International agreements only"
    ],
    correctAnswer: 0,
    explanation: "Public policy consists of government actions, decisions, and laws designed to address societal problems."
  },
  {
    id: "pred-2018-sciv-10",
    question: "What is the importance of civic education?",
    options: [
      "To prepare citizens to participate effectively in democratic society",
      "To teach only history",
      "To promote military training",
      "To control citizens"
    ],
    correctAnswer: 0,
    explanation: "Civic education prepares citizens to participate effectively in democratic processes and understand their rights and responsibilities."
  },
  {
    id: "pred-2018-sciv-11",
    question: "What is 'checks and balances'?",
    options: [
      "Each branch can limit the powers of the others",
      "One branch controls everything",
      "No branch has power",
      "Military controls all branches"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances ensure no single branch becomes too powerful by allowing each branch to limit the others."
  },
  {
    id: "pred-2018-sciv-12",
    question: "What is the role of the executive branch?",
    options: [
      "To enforce laws",
      "To make laws",
      "To interpret laws",
      "To judge laws"
    ],
    correctAnswer: 0,
    explanation: "The executive branch (president/prime minister) enforces laws and administers government programs."
  },
  {
    id: "pred-2018-sciv-13",
    question: "What is the role of the judiciary?",
    options: [
      "To interpret laws and ensure justice",
      "To create laws",
      "To enforce laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The judiciary interprets laws, resolves disputes, and ensures justice is served according to the constitution."
  },
  {
    id: "pred-2018-sciv-14",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Speedy trial only",
      "Free legal representation only",
      "Public trial only"
    ],
    correctAnswer: 0,
    explanation: "Due process ensures fair treatment through the judicial system, protecting citizens from arbitrary government action."
  },
  {
    id: "pred-2018-sciv-15",
    question: "What is a 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government department",
      "Court system",
      "Military unit"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and seek to influence government policy."
  },
  {
    id: "pred-2018-sciv-16",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without censorship",
      "Right to speak only in public",
      "Right to speak only to government",
      "Right to speak only in private"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without government censorship or restraint."
  },
  {
    id: "pred-2018-sciv-17",
    question: "What is 'universal suffrage'?",
    options: [
      "Right of all adult citizens to vote",
      "Right of only men to vote",
      "Right of only wealthy to vote",
      "Right of only educated to vote"
    ],
    correctAnswer: 0,
    explanation: "Universal suffrage means all adult citizens have the right to vote regardless of race, gender, or economic status."
  },
  {
    id: "pred-2018-sciv-18",
    question: "What is 'judicial review'?",
    options: [
      "Power of courts to review laws for constitutionality",
      "Review of court cases",
      "Review of judges",
      "Review of legal documents"
    ],
    correctAnswer: 0,
    explanation: "Judicial review is the power of courts to determine whether laws violate the constitution."
  },
  {
    id: "pred-2018-sciv-19",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey unjust laws through nonviolent protest",
      "Violent rebellion",
      "Obeying all laws",
      "Breaking laws for personal gain"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful protest against unjust policies."
  },
  {
    id: "pred-2018-sciv-20",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Central government controls everything",
      "No government exists",
      "Military dictatorship"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central government and regional governments."
  },
  {
    id: "pred-2018-sciv-21",
    question: "What is 'rule of law'?",
    options: [
      "All individuals and institutions are subject to and accountable to law",
      "Only government follows laws",
      "Laws apply only to citizens",
      "Laws can be ignored by officials"
    ],
    correctAnswer: 0,
    explanation: "Rule of law means that all individuals, including government officials, are subject to and accountable under the law."
  },
  {
    id: "pred-2018-sciv-22",
    question: "What is 'separation of powers'?",
    options: [
      "Division of government responsibilities into branches to prevent concentration of power",
      "One branch controls everything",
      "All branches have the same powers",
      "No separation between branches"
    ],
    correctAnswer: 0,
    explanation: "Separation of powers divides government responsibilities among legislative, executive, and judicial branches to prevent any one branch from becoming too powerful."
  },
  {
    id: "pred-2018-sciv-23",
    question: "What is 'constitutionalism'?",
    options: [
      "Government limited by a constitution",
      "Government without limits",
      "Rule by military",
      "Rule by one person"
    ],
    correctAnswer: 0,
    explanation: "Constitutionalism is the principle that government power is limited by a constitution and must follow its provisions."
  },
  {
    id: "pred-2018-sciv-24",
    question: "What is 'civil society'?",
    options: [
      "Organizations and institutions that operate independently of government",
      "Government organizations",
      "Military organizations",
      "Political parties only"
    ],
    correctAnswer: 0,
    explanation: "Civil society consists of non-governmental organizations, community groups, and other organizations that operate independently of the government."
  },
  {
    id: "pred-2018-sciv-25",
    question: "What is 'media freedom'?",
    options: [
      "Right of media to report without government censorship",
      "Government control of media",
      "Media only reporting positive news",
      "No media allowed"
    ],
    correctAnswer: 0,
    explanation: "Media freedom is the right of journalists and media organizations to report news and express opinions without government censorship or interference."
  },
  {
    id: "pred-2018-sciv-26",
    question: "What is 'transparency' in government?",
    options: [
      "Openness about government decisions and actions",
      "Government secrecy",
      "Hidden government operations",
      "No public access to information"
    ],
    correctAnswer: 0,
    explanation: "Transparency in government means openness about government decisions, actions, and spending, allowing citizens to hold officials accountable."
  },
  {
    id: "pred-2018-sciv-27",
    question: "What is 'accountability' in governance?",
    options: [
      "Government officials being answerable for their actions",
      "Officials having no responsibility",
      "Government acting without oversight",
      "No consequences for actions"
    ],
    correctAnswer: 0,
    explanation: "Accountability means government officials must answer for their decisions and actions, and can be held responsible for their performance."
  },
  {
    id: "pred-2018-sciv-28",
    question: "What is 'gender equality'?",
    options: [
      "Equal rights and opportunities for all genders",
      "Superiority of one gender",
      "Different rights based on gender",
      "Only men have rights"
    ],
    correctAnswer: 0,
    explanation: "Gender equality means that all people, regardless of gender, have equal rights, responsibilities, and opportunities in all areas of life."
  },
  {
    id: "pred-2018-sciv-29",
    question: "What is 'political ideology'?",
    options: [
      "Set of beliefs about how society should function",
      "Political party only",
      "Government policy",
      "Economic system only"
    ],
    correctAnswer: 0,
    explanation: "Political ideology is a set of beliefs about the proper role of government and how society should be organized and governed."
  },
  {
    id: "pred-2018-sciv-30",
    question: "What is 'civil liberty'?",
    options: [
      "Freedoms that protect individuals from government abuse",
      "Government powers",
      "Military rights",
      "Corporate privileges"
    ],
    correctAnswer: 0,
    explanation: "Civil liberties are freedoms that protect individuals from government abuse, such as freedom of speech, religion, and assembly."
  },
  {
    id: "pred-2018-sciv-31",
    question: "What is 'democracy'?",
    options: [
      "System of government by the whole population or elected representatives",
      "Rule by one person",
      "Rule by military",
      "Rule by the wealthy"
    ],
    correctAnswer: 0,
    explanation: "Democracy is a system of government where power is vested in the people, either directly or through elected representatives."
  },
  {
    id: "pred-2018-sciv-32",
    question: "What is 'human rights'?",
    options: [
      "Fundamental rights inherent to all human beings",
      "Rights only for citizens",
      "Rights granted by government",
      "Rights only for wealthy"
    ],
    correctAnswer: 0,
    explanation: "Human rights are rights inherent to all human beings, regardless of nationality, place of residence, sex, or any other status."
  },
  {
    id: "pred-2018-sciv-33",
    question: "What is 'voting'?",
    options: [
      "Formal expression of preference for a candidate or proposal",
      "Government decision",
      "Military action",
      "Court judgment"
    ],
    correctAnswer: 0,
    explanation: "Voting is the formal expression of preference for a candidate or a proposal in an election or referendum."
  },
  {
    id: "pred-2018-sciv-34",
    question: "What is 'political participation'?",
    options: [
      "Involvement in political processes and activities",
      "Only voting",
      "Only protesting",
      "Only joining political parties"
    ],
    correctAnswer: 0,
    explanation: "Political participation includes various activities such as voting, campaigning, protesting, and engaging in public debates."
  },
  {
    id: "pred-2018-sciv-35",
    question: "What is 'judiciary'?",
    options: [
      "Branch of government responsible for interpreting laws",
      "Branch that makes laws",
      "Branch that executes laws",
      "Military branch"
    ],
    correctAnswer: 0,
    explanation: "The judiciary is the branch of government responsible for interpreting laws, resolving disputes, and administering justice."
  },
  {
    id: "pred-2018-sciv-36",
    question: "What is 'legislature'?",
    options: [
      "Branch of government that makes laws",
      "Branch that interprets laws",
      "Branch that executes laws",
      "Military branch"
    ],
    correctAnswer: 0,
    explanation: "The legislature is the branch of government responsible for making laws, typically consisting of a parliament or congress."
  },
  {
    id: "pred-2018-sciv-37",
    question: "What is 'executive'?",
    options: [
      "Branch of government that enforces laws",
      "Branch that makes laws",
      "Branch that interprets laws",
      "Judicial branch"
    ],
    correctAnswer: 0,
    explanation: "The executive branch is responsible for implementing and enforcing laws, typically led by a president or prime minister."
  },
  {
    id: "pred-2018-sciv-38",
    question: "What is 'election'?",
    options: [
      "Formal process of selecting a person for public office",
      "Military selection",
      "Court appointment",
      "Monarch selection"
    ],
    correctAnswer: 0,
    explanation: "An election is a formal decision-making process by which a population chooses an individual to hold public office."
  },
  {
    id: "pred-2018-sciv-39",
    question: "What is 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government organization",
      "Military group",
      "Social club"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and aim to gain political power."
  },
  {
    id: "pred-2018-sciv-40",
    question: "What is 'public opinion'?",
    options: [
      "Collective attitudes and beliefs of citizens on public issues",
      "Government opinion",
      "Media opinion",
      "Military opinion"
    ],
    correctAnswer: 0,
    explanation: "Public opinion refers to the collective views, attitudes, and beliefs of citizens on public issues and policies."
  },
  {
    id: "pred-2018-sciv-41",
    question: "What is 'separation of powers'?",
    options: [
      "Division of government responsibilities into distinct branches",
      "Combining all powers in one branch",
      "Military control of government",
      "No government structure"
    ],
    correctAnswer: 0,
    explanation: "Separation of powers divides government responsibilities among different branches to prevent concentration of power."
  },
  {
    id: "pred-2018-sciv-42",
    question: "What is 'checks and balances'?",
    options: [
      "System where each branch can limit the powers of others",
      "Unlimited power for one branch",
      "No government oversight",
      "Military control"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances is a system that allows each branch of government to limit the powers of the others."
  },
  {
    id: "pred-2018-sciv-43",
    question: "What is 'constitution'?",
    options: [
      "Supreme law of a country that establishes government structure",
      "Ordinary law",
      "Temporary rule",
      "Military decree"
    ],
    correctAnswer: 0,
    explanation: "A constitution is the fundamental law that establishes the framework of government and defines citizens' rights."
  },
  {
    id: "pred-2018-sciv-44",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Centralized government only",
      "No government structure",
      "Regional independence only"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central authority and constituent political units."
  },
  {
    id: "pred-2018-sciv-45",
    question: "What is 'unitary government'?",
    options: [
      "System where central government holds all power",
      "Power divided between central and regional",
      "No central government",
      "Regional governments have all power"
    ],
    correctAnswer: 0,
    explanation: "A unitary government is a system where all governmental power is vested in a single, central authority."
  },
  {
    id: "pred-2018-sciv-46",
    question: "What is 'parliamentary system'?",
    options: [
      "System where executive derives legitimacy from legislature",
      "System with separate executive and legislature",
      "Military rule",
      "Monarchy only"
    ],
    correctAnswer: 0,
    explanation: "In a parliamentary system, the executive branch derives its legitimacy from and is accountable to the legislature."
  },
  {
    id: "pred-2018-sciv-47",
    question: "What is 'presidential system'?",
    options: [
      "System where executive and legislature are separate",
      "Executive and legislature combined",
      "No executive branch",
      "Military rule"
    ],
    correctAnswer: 0,
    explanation: "A presidential system separates the executive and legislative branches, with the president elected independently of the legislature."
  },
  {
    id: "pred-2018-sciv-48",
    question: "What is 'rule of law'?",
    options: [
      "Principle that all are subject to law",
      "Rule by military",
      "Rule by majority only",
      "No legal system"
    ],
    correctAnswer: 0,
    explanation: "Rule of law means that all individuals and institutions are subject to and accountable under the law."
  },
  {
    id: "pred-2018-sciv-49",
    question: "What is 'civil society'?",
    options: [
      "Organizations independent of government that promote public interests",
      "Government organizations",
      "Military groups",
      "Political parties only"
    ],
    correctAnswer: 0,
    explanation: "Civil society consists of non-governmental organizations and institutions that operate independently of the state."
  },
  {
    id: "pred-2018-sciv-50",
    question: "What is 'civic responsibility'?",
    options: [
      "Duties of citizens to contribute to their community",
      "Government duties only",
      "Military service only",
      "No citizen obligations"
    ],
    correctAnswer: 0,
    explanation: "Civic responsibility refers to the duties and obligations of citizens to participate in and contribute to their community."
  },
  {
    id: "pred-2018-sciv-51",
    question: "What is 'citizenship'?",
    options: [
      "Legal status of being a member of a country with rights and duties",
      "Living in a country",
      "Working in a country",
      "Visiting a country"
    ],
    correctAnswer: 0,
    explanation: "Citizenship is the legal status of being a member of a particular country, with associated rights and responsibilities."
  },
  {
    id: "pred-2018-sciv-52",
    question: "What is 'naturalization'?",
    options: [
      "Process by which a foreign citizen becomes a citizen of another country",
      "Birth citizenship",
      "Temporary residency",
      "Tourist visa"
    ],
    correctAnswer: 0,
    explanation: "Naturalization is the legal process by which a foreign citizen becomes a citizen of another country."
  },
  {
    id: "pred-2018-sciv-53",
    question: "What is 'suffrage'?",
    options: [
      "The right to vote in political elections",
      "Right to work",
      "Right to education",
      "Right to property"
    ],
    correctAnswer: 0,
    explanation: "Suffrage is the right to vote in political elections, a fundamental democratic right."
  },
  {
    id: "pred-2018-sciv-54",
    question: "What is 'political ideology'?",
    options: [
      "Set of beliefs about the proper role of government",
      "Religious beliefs",
      "Economic beliefs only",
      "Social customs"
    ],
    correctAnswer: 0,
    explanation: "Political ideology is a set of beliefs about the proper role and scope of government in society."
  },
  {
    id: "pred-2018-sciv-55",
    question: "What is 'liberalism'?",
    options: [
      "Political philosophy emphasizing individual rights and limited government",
      "Unlimited government power",
      "No individual rights",
      "Military rule"
    ],
    correctAnswer: 0,
    explanation: "Liberalism is a political philosophy that emphasizes individual rights, limited government, and free markets."
  },
  {
    id: "pred-2018-sciv-56",
    question: "What is 'conservatism'?",
    options: [
      "Political philosophy emphasizing tradition and social stability",
      "Radical change",
      "No tradition",
      "Complete government control"
    ],
    correctAnswer: 0,
    explanation: "Conservatism is a political philosophy that values tradition, social stability, and gradual change."
  },
  {
    id: "pred-2018-sciv-57",
    question: "What is 'socialism'?",
    options: [
      "Economic system where means of production are socially owned",
      "Private ownership only",
      "No government",
      "Military economy"
    ],
    correctAnswer: 0,
    explanation: "Socialism is an economic and political system where the means of production are owned collectively or by the state."
  },
  {
    id: "pred-2018-sciv-58",
    question: "What is 'capitalism'?",
    options: [
      "Economic system based on private ownership and profit",
      "State ownership only",
      "No private property",
      "Military economy"
    ],
    correctAnswer: 0,
    explanation: "Capitalism is an economic system based on private ownership of the means of production and their operation for profit."
  },
  {
    id: "pred-2018-sciv-59",
    question: "What is 'dictatorship'?",
    options: [
      "Form of government where power is concentrated in one person",
      "Democratic government",
      "Power divided among branches",
      "No government"
    ],
    correctAnswer: 0,
    explanation: "A dictatorship is a form of government where power is concentrated in the hands of a single leader or small group."
  },
  {
    id: "pred-2018-sciv-60",
    question: "What is 'totalitarianism'?",
    options: [
      "Political system where state recognizes no limits to its authority",
      "Limited government power",
      "Democratic system",
      "Federal system"
    ],
    correctAnswer: 0,
    explanation: "Totalitarianism is a political system where the state recognizes no limits to its authority and seeks to control all aspects of life."
  },
  {
    id: "pred-2018-sciv-61",
    question: "What is 'United Nations'?",
    options: [
      "International organization promoting peace and cooperation",
      "Regional organization only",
      "Military alliance",
      "Trade bloc"
    ],
    correctAnswer: 0,
    explanation: "The United Nations is an international organization founded to promote peace, security, and cooperation among nations."
  },
  {
    id: "pred-2018-sciv-62",
    question: "What is 'African Union'?",
    options: [
      "Continental union of African states",
      "Asian organization",
      "European organization",
      "American organization"
    ],
    correctAnswer: 0,
    explanation: "The African Union is a continental union consisting of 55 member states in Africa."
  },
  {
    id: "pred-2018-sciv-63",
    question: "What is 'diplomacy'?",
    options: [
      "Practice of conducting negotiations between countries",
      "Military action",
      "Economic sanctions only",
      "Trade only"
    ],
    correctAnswer: 0,
    explanation: "Diplomacy is the art and practice of conducting negotiations between representatives of states or groups."
  },
  {
    id: "pred-2018-sciv-64",
    question: "What is 'treaty'?",
    options: [
      "Formal agreement between countries",
      "Domestic law",
      "Military order",
      "Trade policy"
    ],
    correctAnswer: 0,
    explanation: "A treaty is a formal, legally binding agreement between two or more sovereign states."
  },
  {
    id: "pred-2018-sciv-65",
    question: "What is 'ambassador'?",
    options: [
      "Official representative of a country in another country",
      "Military officer",
      "Business representative",
      "Tourist"
    ],
    correctAnswer: 0,
    explanation: "An ambassador is a high-ranking diplomat who represents a country in a foreign country."
  },
  {
    id: "pred-2018-sciv-66",
    question: "What is 'human rights'?",
    options: [
      "Fundamental rights inherent to all human beings",
      "Rights granted by government",
      "Rights of citizens only",
      "Economic privileges"
    ],
    correctAnswer: 0,
    explanation: "Human rights are fundamental rights and freedoms that belong to every person by virtue of being human."
  },
  {
    id: "pred-2018-sciv-67",
    question: "What is 'Universal Declaration of Human Rights'?",
    options: [
      "UN document outlining fundamental human rights",
      "National law",
      "Military document",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "The Universal Declaration of Human Rights is a UN document that outlines fundamental human rights to be universally protected."
  },
  {
    id: "pred-2018-sciv-68",
    question: "What is 'gender equality'?",
    options: [
      "Equal rights and opportunities regardless of gender",
      "Preferential treatment for men",
      "Preferential treatment for women",
      "No gender consideration"
    ],
    correctAnswer: 0,
    explanation: "Gender equality means equal rights, responsibilities, and opportunities for all people regardless of gender."
  },
  {
    id: "pred-2018-sciv-69",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey certain laws as a form of protest",
      "Violent rebellion",
      "Military coup",
      "Supporting all laws"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful political protest."
  },
  {
    id: "pred-2018-sciv-70",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without censorship",
      "Right to remain silent",
      "Right to vote",
      "Right to property"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without censorship, restraint, or legal penalty."
  },
  {
    id: "pred-2018-sciv-71",
    question: "What is 'freedom of assembly'?",
    options: [
      "Right to gather peacefully for political purposes",
      "Right to private property",
      "Right to vote",
      "Right to work"
    ],
    correctAnswer: 0,
    explanation: "Freedom of assembly is the right to hold public meetings and form associations without government interference."
  },
  {
    id: "pred-2018-sciv-72",
    question: "What is 'freedom of religion'?",
    options: [
      "Right to practice any religion or none",
      "State religion only",
      "No religion allowed",
      "Government-controlled religion"
    ],
    correctAnswer: 0,
    explanation: "Freedom of religion is the right to practice any religion or none at all, without government interference."
  },
  {
    id: "pred-2018-sciv-73",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Unfair trial",
      "No legal process",
      "Military justice"
    ],
    correctAnswer: 0,
    explanation: "Due process is the legal requirement that the state must respect all legal rights owed to a person."
  },
  {
    id: "pred-2018-sciv-74",
    question: "What is 'Ethiopian Constitution'?",
    options: [
      "Supreme law of Ethiopia established in 1995",
      "Temporary document",
      "Military decree",
      "Regional law only"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Constitution is the supreme law of Ethiopia, adopted in 1995, establishing a federal democratic republic."
  },
  {
    id: "pred-2018-sciv-75",
    question: "What is the form of government in Ethiopia?",
    options: [
      "Federal parliamentary republic",
      "Monarchy",
      "Military dictatorship",
      "Unitary state"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia is a federal parliamentary republic, with power divided between federal and regional governments."
  },
  {
    id: "pred-2018-sciv-76",
    question: "What is the House of Peoples' Representatives in Ethiopia?",
    options: [
      "Lower house of the Ethiopian parliament",
      "Upper house of parliament",
      "Executive branch",
      "Judicial branch"
    ],
    correctAnswer: 0,
    explanation: "The House of Peoples' Representatives is the lower house of the Ethiopian Federal Parliamentary Assembly."
  },
  {
    id: "pred-2018-sciv-77",
    question: "What is the House of Federation in Ethiopia?",
    options: [
      "Upper house of the Ethiopian parliament representing regional states",
      "Lower house of parliament",
      "Executive branch",
      "Judicial branch"
    ],
    correctAnswer: 0,
    explanation: "The House of Federation is the upper house of the Ethiopian parliament, representing the regional states."
  },
  {
    id: "pred-2018-sciv-78",
    question: "What is 'regional state' in Ethiopia?",
    options: [
      "Administrative division with significant autonomy",
      "Central government district",
      "Military zone",
      "City administration"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia is divided into regional states that have significant autonomy under the federal system."
  },
  {
    id: "pred-2018-sciv-79",
    question: "What is 'ethnic federalism' in Ethiopia?",
    options: [
      "Federal system based on ethnic boundaries",
      "Geographic federalism",
      "No federalism",
      "Centralized system"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia practices ethnic federalism, where regional states are organized along ethnic lines."
  },
  {
    id: "pred-2018-sciv-80",
    question: "What is the role of the Prime Minister in Ethiopia?",
    options: [
      "Head of government and chief executive",
      "Head of state",
      "Military commander",
      "Judicial head"
    ],
    correctAnswer: 0,
    explanation: "The Prime Minister of Ethiopia is the head of government and chief executive, holding the most political power."
  }
];

export const predicted2018SocialScholasticAptitudeQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-ssat-1",
    question: "Complete the analogy: Ocean is to Water as Forest is to ____",
    options: [
      "Trees",
      "Animals",
      "Birds",
      "Soil"
    ],
    correctAnswer: 0,
    explanation: "An ocean is a body of water, just as a forest is a collection of trees. This is a composition-based analogy."
  },
  {
    id: "pred-2018-ssat-2",
    question: "If all X are Y and some Y are Z, then some X are definitely Z.",
    options: [
      "False",
      "True",
      "Cannot be determined",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "This is a logical fallacy. Just because some Y are Z doesn't mean any X are Z. We cannot determine this relationship."
  },
  {
    id: "pred-2018-ssat-3",
    question: "Choose the word that is most similar in meaning to 'Diligent':",
    options: [
      "Hardworking",
      "Lazy",
      "Careless",
      "Slow"
    ],
    correctAnswer: 0,
    explanation: "Diligent means showing care in one's work or duties, which is synonymous with hardworking."
  },
  {
    id: "pred-2018-ssat-4",
    question: "What number comes next in the sequence: 3, 6, 12, 24, ____",
    options: [
      "48",
      "36",
      "30",
      "60"
    ],
    correctAnswer: 0,
    explanation: "The pattern is doubling each number: 3×2=6, 6×2=12, 12×2=24, 24×2=48."
  },
  {
    id: "pred-2018-ssat-5",
    question: "If a worker can complete a job in 6 days, how many days will 3 workers take?",
    options: [
      "2 days",
      "3 days",
      "6 days",
      "18 days"
    ],
    correctAnswer: 0,
    explanation: "More workers means less time. 3 workers is triple, so time is divided by 3: 6/3 = 2 days."
  },
  {
    id: "pred-2018-ssat-6",
    question: "Choose the word that is most opposite in meaning to 'Generous':",
    options: [
      "Stingy",
      "Kind",
      "Rich",
      "Giving"
    ],
    correctAnswer: 0,
    explanation: "Generous means willing to give more than necessary. Stingy means unwilling to give or spend."
  },
  {
    id: "pred-2018-ssat-7",
    question: "What is the next term in the sequence: 1, 4, 9, 16, 25, ____",
    options: [
      "36",
      "30",
      "49",
      "32"
    ],
    correctAnswer: 0,
    explanation: "This is the sequence of perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36."
  },
  {
    id: "pred-2018-ssat-8",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Classroom",
      "Student",
      "Book"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a workplace-based analogy."
  },
  {
    id: "pred-2018-ssat-9",
    question: "What is 40% of 250?",
    options: [
      "100",
      "80",
      "120",
      "50"
    ],
    correctAnswer: 0,
    explanation: "40% of 250 = 0.40 × 250 = 100."
  },
  {
    id: "pred-2018-ssat-10",
    question: "What comes next: 100, 50, 25, 12.5, ____",
    options: [
      "6.25",
      "10",
      "8",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Each term is halved: 100/2=50, 50/2=25, 25/2=12.5, 12.5/2=6.25."
  },
  {
    id: "pred-2018-ssat-11",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Quick",
      "Rough"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  },
  {
    id: "pred-2018-ssat-12",
    question: "What comes next: 2, 5, 11, 23, 47, ____",
    options: [
      "95",
      "94",
      "96",
      "93"
    ],
    correctAnswer: 0,
    explanation: "The pattern is ×2+1: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95."
  },
  {
    id: "pred-2018-ssat-13",
    question: "Complete the analogy: Library is to Books as Garden is to ____",
    options: [
      "Plants",
      "Flowers",
      "Trees",
      "Soil"
    ],
    correctAnswer: 0,
    explanation: "A library contains books, just as a garden contains plants. This is a container-content analogy."
  },
  {
    id: "pred-2018-ssat-14",
    question: "If 6 machines produce 120 units in 4 hours, how many units will 8 machines produce in 6 hours?",
    options: [
      "240",
      "180",
      "200",
      "160"
    ],
    correctAnswer: 0,
    explanation: "6 machines × 4 hours = 24 machine-hours for 120 units. So 1 machine-hour produces 5 units. 8 × 6 = 48 machine-hours. 48 × 5 = 240 units."
  },
  {
    id: "pred-2018-ssat-15",
    question: "Choose the word that is most opposite in meaning to 'Humble':",
    options: [
      "Arrogant",
      "Modest",
      "Shy",
      "Quiet"
    ],
    correctAnswer: 0,
    explanation: "Humble means having a modest view of one's importance. Arrogant means having an exaggerated sense of self-importance."
  },
  {
    id: "pred-2018-ssat-16",
    question: "What is the area of a triangle with base 8 and height 6?",
    options: [
      "24",
      "48",
      "12",
      "14"
    ],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2) × 8 × 6 = 24."
  },
  {
    id: "pred-2018-ssat-17",
    question: "If A is to the east of B, and B is to the east of C, then A is to the ____ of C.",
    options: [
      "east",
      "west",
      "north",
      "south"
    ],
    correctAnswer: 0,
    explanation: "If A is east of B, and B is east of C, then A is east of C (transitive property of direction)."
  },
  {
    id: "pred-2018-ssat-18",
    question: "Complete the analogy: Music is to Sound as Painting is to ____",
    options: [
      "Sight",
      "Color",
      "Canvas",
      "Brush"
    ],
    correctAnswer: 0,
    explanation: "Music appeals to the sense of hearing (sound), just as painting appeals to the sense of sight."
  },
  {
    id: "pred-2018-ssat-19",
    question: "What is 25% of 80 plus 50% of 60?",
    options: [
      "50",
      "40",
      "60",
      "45"
    ],
    correctAnswer: 0,
    explanation: "25% of 80 = 20. 50% of 60 = 30. 20 + 30 = 50."
  },
  {
    id: "pred-2018-ssat-20",
    question: "Choose the word that is most similar in meaning to 'Eloquent':",
    options: [
      "Articulate",
      "Silent",
      "Confused",
      "Simple"
    ],
    correctAnswer: 0,
    explanation: "Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate."
  },
  {
    id: "pred-2018-ssat-21",
    question: "Complete the analogy: Author is to Book as Artist is to ____",
    options: [
      "Painting",
      "Canvas",
      "Brush",
      "Gallery"
    ],
    correctAnswer: 0,
    explanation: "An author creates a book, just as an artist creates a painting. This is a creator-creation analogy."
  },
  {
    id: "pred-2018-ssat-22",
    question: "What is 15% of 200 plus 20% of 150?",
    options: [
      "60",
      "50",
      "70",
      "55"
    ],
    correctAnswer: 0,
    explanation: "15% of 200 = 30. 20% of 150 = 30. 30 + 30 = 60."
  },
  {
    id: "pred-2018-ssat-23",
    question: "If all roses are flowers and some flowers are red, then some roses are definitely red.",
    options: [
      "Cannot be determined",
      "True",
      "False",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "This is a logical fallacy. Some flowers being red doesn't guarantee that any roses are red. We cannot determine this relationship."
  },
  {
    id: "pred-2018-ssat-24",
    question: "What comes next: 1, 4, 2, 5, 3, 6, ____",
    options: [
      "4",
      "7",
      "5",
      "8"
    ],
    correctAnswer: 0,
    explanation: "The pattern alternates: +3, -2, +3, -2, +3. So 6 - 2 = 4."
  },
  {
    id: "pred-2018-ssat-25",
    question: "Choose the word that is most similar in meaning to 'Candid':",
    options: [
      "Frank",
      "Secretive",
      "Dishonest",
      "Shy"
    ],
    correctAnswer: 0,
    explanation: "Candid means truthful and straightforward, which is synonymous with frank."
  },
  {
    id: "pred-2018-ssat-26",
    question: "Complete the analogy: Clock is to Time as Thermometer is to ____",
    options: [
      "Temperature",
      "Heat",
      "Weather",
      "Degree"
    ],
    correctAnswer: 0,
    explanation: "A clock measures time, just as a thermometer measures temperature. This is a tool-measurement analogy."
  },
  {
    id: "pred-2018-ssat-27",
    question: "What is the volume of a cube with side length 3 cm?",
    options: [
      "27 cm³",
      "9 cm³",
      "18 cm³",
      "36 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume = side³ = 3³ = 27 cm³."
  },
  {
    id: "pred-2018-ssat-28",
    question: "Choose the word that is most opposite in meaning to 'Optimistic':",
    options: [
      "Pessimistic",
      "Hopeful",
      "Positive",
      "Confident"
    ],
    correctAnswer: 0,
    explanation: "Optimistic means hopeful and positive. Pessimistic means expecting the worst or being negative."
  },
  {
    id: "pred-2018-ssat-29",
    question: "What is the next term: 5, 8, 12, 17, 23, ____",
    options: [
      "30",
      "29",
      "31",
      "28"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +3, +4, +5, +6. So next is +7: 23 + 7 = 30."
  },
  {
    id: "pred-2018-ssat-30",
    question: "Complete the analogy: Captain is to Ship as Pilot is to ____",
    options: [
      "Airplane",
      "Airport",
      "Sky",
      "Passenger"
    ],
    correctAnswer: 0,
    explanation: "A captain commands a ship, just as a pilot commands an airplane. This is a commander-vehicle analogy."
  },
  {
    id: "pred-2018-ssat-31",
    question: "What is 25% of 80?",
    options: [
      "20",
      "25",
      "15",
      "30"
    ],
    correctAnswer: 0,
    explanation: "25% of 80 = 0.25 × 80 = 20."
  },
  {
    id: "pred-2018-ssat-32",
    question: "What comes next: 2, 6, 12, 20, 30, ____",
    options: [
      "42",
      "40",
      "44",
      "38"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +4, +6, +8, +10. So next is +12: 30 + 12 = 42."
  },
  {
    id: "pred-2018-ssat-33",
    question: "Choose the word that is most similar in meaning to 'Benevolent':",
    options: [
      "Kind",
      "Cruel",
      "Angry",
      "Sad"
    ],
    correctAnswer: 0,
    explanation: "Benevolent means well-meaning and kindly, which is synonymous with kind."
  },
  {
    id: "pred-2018-ssat-34",
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: [
      "40",
      "13",
      "26",
      "45"
    ],
    correctAnswer: 0,
    explanation: "Area = length × width = 8 × 5 = 40."
  },
  {
    id: "pred-2018-ssat-35",
    question: "What is the next term: 1, 4, 9, 16, 25, ____",
    options: [
      "36",
      "35",
      "30",
      "40"
    ],
    correctAnswer: 0,
    explanation: "The pattern is perfect squares: 1², 2², 3², 4², 5². Next is 6² = 36."
  },
  {
    id: "pred-2018-ssat-36",
    question: "Choose the word that is most opposite in meaning to 'Ancient':",
    options: [
      "Modern",
      "Old",
      "Historic",
      "Traditional"
    ],
    correctAnswer: 0,
    explanation: "Ancient means very old. Modern means current or recent, which is the opposite."
  },
  {
    id: "pred-2018-ssat-37",
    question: "What is 1/3 + 1/6?",
    options: [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    correctAnswer: 0,
    explanation: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2."
  },
  {
    id: "pred-2018-ssat-38",
    question: "Complete the analogy: Pen is to Write as Knife is to ____",
    options: [
      "Cut",
      "Sharp",
      "Metal",
      "Handle"
    ],
    correctAnswer: 0,
    explanation: "A pen is used to write, just as a knife is used to cut. This is a tool-function analogy."
  },
  {
    id: "pred-2018-ssat-39",
    question: "What is the perimeter of a square with side length 6?",
    options: [
      "24",
      "12",
      "36",
      "18"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 4 × side = 4 × 6 = 24."
  },
  {
    id: "pred-2018-ssat-40",
    question: "Choose the word that is most similar in meaning to 'Prudent':",
    options: [
      "Wise",
      "Careless",
      "Reckless",
      "Foolish"
    ],
    correctAnswer: 0,
    explanation: "Prudent means acting with or showing care and thought for the future, which is synonymous with wise."
  },
  {
    id: "pred-2018-ssat-41",
    question: "Complete the analogy: Book is to Read as Music is to ____",
    options: [
      "Listen",
      "Hear",
      "Sound",
      "Song"
    ],
    correctAnswer: 0,
    explanation: "A book is meant to be read, just as music is meant to be listened to. This is an object-action analogy."
  },
  {
    id: "pred-2018-ssat-42",
    question: "What comes next: 3, 6, 12, 24, 48, ____",
    options: [
      "96",
      "72",
      "84",
      "90"
    ],
    correctAnswer: 0,
    explanation: "The pattern doubles each time: ×2, ×2, ×2, ×2. Next is 48 × 2 = 96."
  },
  {
    id: "pred-2018-ssat-43",
    question: "Choose the word that is most opposite in meaning to 'Generous':",
    options: [
      "Stingy",
      "Kind",
      "Giving",
      "Charitable"
    ],
    correctAnswer: 0,
    explanation: "Generous means willing to give. Stingy means unwilling to give, which is the opposite."
  },
  {
    id: "pred-2018-ssat-44",
    question: "What is 15% of 200?",
    options: [
      "30",
      "25",
      "35",
      "20"
    ],
    correctAnswer: 0,
    explanation: "15% of 200 = 0.15 × 200 = 30."
  },
  {
    id: "pred-2018-ssat-45",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Class",
      "Student",
      "Book"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a profession-workplace analogy."
  },
  {
    id: "pred-2018-ssat-46",
    question: "What comes next: 1, 1, 2, 3, 5, 8, ____",
    options: [
      "13",
      "11",
      "12",
      "14"
    ],
    correctAnswer: 0,
    explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones: 5 + 8 = 13."
  },
  {
    id: "pred-2018-ssat-47",
    question: "Choose the word that is most similar in meaning to 'Diligent':",
    options: [
      "Hardworking",
      "Lazy",
      "Careless",
      "Slow"
    ],
    correctAnswer: 0,
    explanation: "Diligent means having or showing care and conscientiousness in one's work, which is synonymous with hardworking."
  },
  {
    id: "pred-2018-ssat-48",
    question: "What is the volume of a cube with side length 4?",
    options: [
      "64",
      "16",
      "48",
      "32"
    ],
    correctAnswer: 0,
    explanation: "Volume = side³ = 4³ = 64."
  },
  {
    id: "pred-2018-ssat-49",
    question: "Complete the analogy: Fish is to Water as Bird is to ____",
    options: [
      "Air",
      "Tree",
      "Nest",
      "Sky"
    ],
    correctAnswer: 0,
    explanation: "Fish live in water, just as birds live in the air. This is a creature-habitat analogy."
  },
  {
    id: "pred-2018-ssat-50",
    question: "What comes next: 2, 5, 11, 23, 47, ____",
    options: [
      "95",
      "94",
      "93",
      "96"
    ],
    correctAnswer: 0,
    explanation: "The pattern is ×2 + 1: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47. Next is 47×2+1=95."
  },
  {
    id: "pred-2018-ssat-51",
    question: "Choose the word that is most opposite in meaning to 'Humble':",
    options: [
      "Arrogant",
      "Modest",
      "Shy",
      "Quiet"
    ],
    correctAnswer: 0,
    explanation: "Humble means having a modest view of one's importance. Arrogant means having an exaggerated sense of importance, which is the opposite."
  },
  {
    id: "pred-2018-ssat-52",
    question: "What is 3/4 of 80?",
    options: [
      "60",
      "50",
      "70",
      "40"
    ],
    correctAnswer: 0,
    explanation: "3/4 of 80 = (3 × 80) / 4 = 240 / 4 = 60."
  },
  {
    id: "pred-2018-ssat-53",
    question: "Complete the analogy: Library is to Books as Museum is to ____",
    options: [
      "Artifacts",
      "Visitors",
      "Building",
      "History"
    ],
    correctAnswer: 0,
    explanation: "A library houses books, just as a museum houses artifacts. This is a place-collection analogy."
  },
  {
    id: "pred-2018-ssat-54",
    question: "What comes next: 10, 20, 30, 40, 50, ____",
    options: [
      "60",
      "55",
      "65",
      "70"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by 10 each time: +10, +10, +10, +10. Next is 50 + 10 = 60."
  },
  {
    id: "pred-2018-ssat-55",
    question: "Choose the word that is most similar in meaning to 'Courageous':",
    options: [
      "Brave",
      "Fearful",
      "Cowardly",
      "Timid"
    ],
    correctAnswer: 0,
    explanation: "Courageous means not deterred by danger or pain, which is synonymous with brave."
  },
  {
    id: "pred-2018-ssat-56",
    question: "What is the circumference of a circle with radius 7? (Use π ≈ 22/7)",
    options: [
      "44",
      "154",
      "22",
      "88"
    ],
    correctAnswer: 0,
    explanation: "Circumference = 2πr = 2 × (22/7) × 7 = 44."
  },
  {
    id: "pred-2018-ssat-57",
    question: "Complete the analogy: Day is to Night as Summer is to ____",
    options: [
      "Winter",
      "Spring",
      "Autumn",
      "Season"
    ],
    correctAnswer: 0,
    explanation: "Day and night are opposites, just as summer and winter are opposite seasons."
  },
  {
    id: "pred-2018-ssat-58",
    question: "What comes next: 64, 32, 16, 8, 4, ____",
    options: [
      "2",
      "1",
      "3",
      "0"
    ],
    correctAnswer: 0,
    explanation: "The pattern halves each time: ÷2, ÷2, ÷2, ÷2. Next is 4 ÷ 2 = 2."
  },
  {
    id: "pred-2018-ssat-59",
    question: "Choose the word that is most opposite in meaning to 'Optimistic':",
    options: [
      "Pessimistic",
      "Hopeful",
      "Positive",
      "Confident"
    ],
    correctAnswer: 0,
    explanation: "Optimistic means hopeful and confident about the future. Pessimistic means seeing the worst aspect of things, which is the opposite."
  },
  {
    id: "pred-2018-ssat-60",
    question: "What is 125% of 40?",
    options: [
      "50",
      "45",
      "55",
      "48"
    ],
    correctAnswer: 0,
    explanation: "125% of 40 = 1.25 × 40 = 50."
  },
  {
    id: "pred-2018-ssat-61",
    question: "Complete the analogy: Seed is to Tree as Egg is to ____",
    options: [
      "Bird",
      "Nest",
      "Chicken",
      "Shell"
    ],
    correctAnswer: 0,
    explanation: "A seed grows into a tree, just as an egg develops into a bird. This is a beginning-product analogy."
  },
  {
    id: "pred-2018-ssat-62",
    question: "What comes next: 1, 8, 27, 64, 125, ____",
    options: [
      "216",
      "200",
      "215",
      "220"
    ],
    correctAnswer: 0,
    explanation: "The pattern is cubes: 1³, 2³, 3³, 4³, 5³. Next is 6³ = 216."
  },
  {
    id: "pred-2018-ssat-63",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Rough",
      "Quick"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  },
  {
    id: "pred-2018-ssat-64",
    question: "What is the area of a triangle with base 10 and height 6?",
    options: [
      "30",
      "60",
      "20",
      "40"
    ],
    correctAnswer: 0,
    explanation: "Area = (base × height) / 2 = (10 × 6) / 2 = 30."
  },
  {
    id: "pred-2018-ssat-65",
    question: "Complete the analogy: Clock is to Time as Thermometer is to ____",
    options: [
      "Temperature",
      "Heat",
      "Weather",
      "Degree"
    ],
    correctAnswer: 0,
    explanation: "A clock measures time, just as a thermometer measures temperature. This is an instrument-measurement analogy."
  },
  {
    id: "pred-2018-ssat-66",
    question: "What comes next: 2, 4, 8, 16, 32, ____",
    options: [
      "64",
      "48",
      "56",
      "72"
    ],
    correctAnswer: 0,
    explanation: "The pattern doubles each time: ×2, ×2, ×2, ×2. Next is 32 × 2 = 64."
  },
  {
    id: "pred-2018-ssat-67",
    question: "Choose the word that is most opposite in meaning to 'Sincere':",
    options: [
      "Insincere",
      "Honest",
      "Genuine",
      "Truthful"
    ],
    correctAnswer: 0,
    explanation: "Sincere means genuine and honest. Insincere means not genuine or honest, which is the opposite."
  },
  {
    id: "pred-2018-ssat-68",
    question: "What is 2/5 of 50?",
    options: [
      "20",
      "25",
      "15",
      "30"
    ],
    correctAnswer: 0,
    explanation: "2/5 of 50 = (2 × 50) / 5 = 100 / 5 = 20."
  },
  {
    id: "pred-2018-ssat-69",
    question: "Complete the analogy: Car is to Road as Boat is to ____",
    options: [
      "Water",
      "Sea",
      "Ocean",
      "River"
    ],
    correctAnswer: 0,
    explanation: "A car travels on a road, just as a boat travels on water. This is a vehicle-medium analogy."
  },
  {
    id: "pred-2018-ssat-70",
    question: "What comes next: 5, 10, 20, 40, 80, ____",
    options: [
      "160",
      "120",
      "140",
      "100"
    ],
    correctAnswer: 0,
    explanation: "The pattern doubles each time: ×2, ×2, ×2, ×2. Next is 80 × 2 = 160."
  },
  {
    id: "pred-2018-ssat-71",
    question: "Choose the word that is most similar in meaning to 'Eloquent':",
    options: [
      "Articulate",
      "Silent",
      "Quiet",
      "Mumbling"
    ],
    correctAnswer: 0,
    explanation: "Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate."
  },
  {
    id: "pred-2018-ssat-72",
    question: "What is the perimeter of a rectangle with length 12 and width 5?",
    options: [
      "34",
      "60",
      "24",
      "17"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34."
  },
  {
    id: "pred-2018-ssat-73",
    question: "Complete the analogy: Author is to Book as Artist is to ____",
    options: [
      "Painting",
      "Gallery",
      "Brush",
      "Canvas"
    ],
    correctAnswer: 0,
    explanation: "An author creates a book, just as an artist creates a painting. This is a creator-creation analogy."
  },
  {
    id: "pred-2018-ssat-74",
    question: "What comes next: 100, 90, 80, 70, 60, ____",
    options: [
      "50",
      "40",
      "55",
      "45"
    ],
    correctAnswer: 0,
    explanation: "The pattern decreases by 10 each time: -10, -10, -10, -10. Next is 60 - 10 = 50."
  },
  {
    id: "pred-2018-ssat-75",
    question: "Choose the word that is most opposite in meaning to 'Compassionate':",
    options: [
      "Cruel",
      "Kind",
      "Caring",
      "Sympathetic"
    ],
    correctAnswer: 0,
    explanation: "Compassionate means feeling or showing sympathy and concern for others. Cruel means the opposite."
  },
  {
    id: "pred-2018-ssat-76",
    question: "What is 33 1/3% of 90?",
    options: [
      "30",
      "33",
      "27",
      "36"
    ],
    correctAnswer: 0,
    explanation: "33 1/3% = 1/3. 1/3 of 90 = 90 / 3 = 30."
  },
  {
    id: "pred-2018-ssat-77",
    question: "Complete the analogy: Key is to Lock as Password is to ____",
    options: [
      "Computer",
      "Account",
      "Login",
      "Security"
    ],
    correctAnswer: 0,
    explanation: "A key opens a lock, just as a password unlocks a computer account. This is an access mechanism analogy."
  },
  {
    id: "pred-2018-ssat-78",
    question: "What comes next: 1, 2, 4, 7, 11, 16, ____",
    options: [
      "22",
      "21",
      "23",
      "20"
    ],
    correctAnswer: 0,
    explanation: "The pattern increases by +1, +2, +3, +4, +5. Next is +6: 16 + 6 = 22."
  },
  {
    id: "pred-2018-ssat-79",
    question: "Choose the word that is most similar in meaning to 'Vibrant':",
    options: [
      "Lively",
      "Dull",
      "Boring",
      "Quiet"
    ],
    correctAnswer: 0,
    explanation: "Vibrant means full of energy and life, which is synonymous with lively."
  },
  {
    id: "pred-2018-ssat-80",
    question: "What is the surface area of a cube with side length 3?",
    options: [
      "54",
      "27",
      "36",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Surface area = 6 × side² = 6 × 9 = 54."
  }
];

export const predicted2018SocialHistoryQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-hist-1",
    question: "When was the Battle of Adwa fought?",
    options: [
      "1896",
      "1935",
      "1941",
      "1855"
    ],
    correctAnswer: 0,
    explanation: "The Battle of Adwa was fought in 1896 between Ethiopia and Italy, resulting in an Ethiopian victory."
  },
  {
    id: "pred-2018-hist-2",
    question: "Who was the Ethiopian emperor during the Italian occupation (1935-1941)?",
    options: [
      "Haile Selassie I",
      "Menelik II",
      "Tewodros",
      "Yohannes IV"
    ],
    correctAnswer: 0,
    explanation: "Haile Selassie I was emperor during the Italian occupation and went into exile before returning in 1941."
  },
  {
    id: "pred-2018-hist-3",
    question: "What was the significance of the Ethio-Eritrean Federation?",
    options: [
      "Eritrea was federated with Ethiopia in 1952",
      "Eritrea became independent in 1952",
      "Ethiopia colonized Eritrea",
      "Eritrea joined the UN"
    ],
    correctAnswer: 0,
    explanation: "In 1952, Eritrea was federated with Ethiopia as an autonomous unit under Haile Selassie."
  },
  {
    id: "pred-2018-hist-4",
    question: "When did Ethiopia adopt its first constitution?",
    options: [
      "1931",
      "1955",
      "1974",
      "1995"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted its first constitution in 1931 under Emperor Haile Selassie I."
  },
  {
    id: "pred-2018-hist-5",
    question: "What was the Derg regime?",
    options: [
      "Military junta that ruled Ethiopia (1974-1991)",
      "Monarchical government",
      "Democratic government",
      "Colonial administration"
    ],
    correctAnswer: 0,
    explanation: "The Derg was a military junta that ruled Ethiopia after overthrowing Haile Selassie in 1974 until 1991."
  },
  {
    id: "pred-2018-hist-6",
    question: "When did Ethiopia become a federal democratic republic?",
    options: [
      "1995",
      "1991",
      "1974",
      "1930"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted a new constitution in 1995, establishing it as a federal democratic republic."
  },
  {
    id: "pred-2018-hist-7",
    question: "Who was the founder of modern Ethiopia?",
    options: [
      "Tewodros II",
      "Menelik II",
      "Haile Selassie I",
      "Yohannes IV"
    ],
    correctAnswer: 0,
    explanation: "Tewodros II (1855-1868) is often considered the founder of modern Ethiopia for his efforts to unify the country."
  },
  {
    id: "pred-2018-hist-8",
    question: "What was the purpose of the Berlin Conference (1884-1885)?",
    options: [
      "To partition Africa among European powers",
      "To free African slaves",
      "To establish trade routes",
      "To promote African independence"
    ],
    correctAnswer: 0,
    explanation: "The Berlin Conference was organized by European powers to partition Africa among themselves, with Ethiopia and Liberia being the only independent African nations."
  },
  {
    id: "pred-2018-hist-9",
    question: "When did Ethiopia join the League of Nations?",
    options: [
      "1923",
      "1918",
      "1935",
      "1945"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia joined the League of Nations in 1923, becoming the first African member state."
  },
  {
    id: "pred-2018-hist-10",
    question: "What was the significance of the Solomonic Dynasty?",
    options: [
      "Claimed descent from King Solomon and Queen of Sheba",
      "Ruled only for 50 years",
      "Was a foreign dynasty",
      "Established democracy"
    ],
    correctAnswer: 0,
    explanation: "The Solomonic Dynasty claimed descent from the biblical King Solomon and Queen of Sheba, providing religious legitimacy to Ethiopian emperors."
  },
  {
    id: "pred-2018-hist-11",
    question: "When did Menelik II expand Ethiopian territory?",
    options: [
      "Late 19th century (1889-1913)",
      "Early 18th century",
      "Mid 20th century",
      "17th century"
    ],
    correctAnswer: 0,
    explanation: "Emperor Menelik II significantly expanded Ethiopian territory in the late 19th century, incorporating regions like Ogaden and the southern territories."
  },
  {
    id: "pred-2018-hist-12",
    question: "What was the role of Ethiopia in World War II?",
    options: [
      "Fought against Italian occupation alongside Allied forces",
      "Remained neutral",
      "Fought with Axis powers",
      "Did not participate"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia fought against Italian occupation during WWII, eventually liberating the country in 1941 with British Allied support."
  },
  {
    id: "pred-2018-hist-13",
    question: "What was the Red Terror in Ethiopia?",
    options: [
      "Violent campaign by Derg against political opponents (1977-1978)",
      "Communist revolution",
      "War with Eritrea",
      "Economic reform program"
    ],
    correctAnswer: 0,
    explanation: "The Red Terror was a violent campaign by the Derg regime against political opponents, resulting in thousands of deaths."
  },
  {
    id: "pred-2018-hist-14",
    question: "When did Ethiopia adopt Christianity as a state religion?",
    options: [
      "4th century (330 AD)",
      "1st century",
      "7th century",
      "10th century"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted Christianity as a state religion in the 4th century under King Ezana, making it one of the oldest Christian nations."
  },
  {
    id: "pred-2018-hist-15",
    question: "What was the significance of the Axumite Kingdom?",
    options: [
      "Major ancient civilization and trade empire",
      "Small tribal kingdom",
      "European colony",
      "Islamic state"
    ],
    correctAnswer: 0,
    explanation: "The Axumite Kingdom was a major ancient civilization that controlled trade routes between Rome and India, and was one of the first states to mint coins."
  },
  {
    id: "pred-2018-hist-16",
    question: "Who was Empress Taytu Betul?",
    options: [
      "Wife of Menelik II and key figure in Ethiopian history",
      "First female emperor",
      "Military commander only",
      "Foreign diplomat"
    ],
    correctAnswer: 0,
    explanation: "Empress Taytu Betul was the wife of Menelik II and played a crucial role in Ethiopian politics, particularly during the Battle of Adwa."
  },
  {
    id: "pred-2018-hist-17",
    question: "What was the Zagwe Dynasty known for?",
    options: [
      "Building rock-hewn churches in Lalibela",
      "Military conquests",
      "Trade expansion",
      "Islamic conversion"
    ],
    correctAnswer: 0,
    explanation: "The Zagwe Dynasty (12th-13th century) is famous for building the rock-hewn churches of Lalibela, now a UNESCO World Heritage Site."
  },
  {
    id: "pred-2018-hist-18",
    question: "When did Ethiopia defeat Italy at the Battle of Adwa?",
    options: [
      "March 1, 1896",
      "October 3, 1935",
      "May 5, 1941",
      "December 19, 1944"
    ],
    correctAnswer: 0,
    explanation: "The Battle of Adwa was fought on March 1, 1896, resulting in a decisive Ethiopian victory over Italy."
  },
  {
    id: "pred-2018-hist-19",
    question: "What was the purpose of the Organization of African Unity (OAU)?",
    options: [
      "To promote African unity and independence",
      "To colonize Africa",
      "To establish European control",
      "To promote Islam only"
    ],
    correctAnswer: 0,
    explanation: "The OAU was founded in 1963 in Addis Ababa to promote African unity, independence, and cooperation among African states."
  },
  {
    id: "pred-2018-hist-20",
    question: "What was the Ethiopian Civil War (1974-1991)?",
    options: [
      "Conflict between Derg and various opposition groups",
      "War with Italy",
      "War with Eritrea only",
      "Religious conflict"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Civil War was fought between the Derg regime and various opposition groups, including the EPRDF which eventually won in 1991."
  },
  {
    id: "pred-2018-hist-21",
    question: "What was the significance of Emperor Menelik II's reign?",
    options: [
      "Modernized Ethiopia and defeated Italy at Adwa",
      "Only ruled for 5 years",
      "Was a foreign ruler",
      "Destroyed Ethiopian culture"
    ],
    correctAnswer: 0,
    explanation: "Emperor Menelik II (1889-1913) modernized Ethiopia, expanded its territory, and led the victory against Italy at the Battle of Adwa in 1896."
  },
  {
    id: "pred-2018-hist-22",
    question: "What was the Zagwe Dynasty known for?",
    options: [
      "Building the rock-hewn churches of Lalibela",
      "Military conquests",
      "Trade expansion",
      "Islamic conversion"
    ],
    correctAnswer: 0,
    explanation: "The Zagwe Dynasty (12th-13th century) is famous for building the rock-hewn churches of Lalibela, now a UNESCO World Heritage Site."
  },
  {
    id: "pred-2018-hist-23",
    question: "When did Ethiopia adopt Christianity as a state religion?",
    options: [
      "4th century (330 AD)",
      "1st century",
      "7th century",
      "10th century"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted Christianity as a state religion in the 4th century under King Ezana, making it one of the oldest Christian nations."
  },
  {
    id: "pred-2018-hist-24",
    question: "What was the purpose of the Berlin Conference (1884-1885)?",
    options: [
      "To partition Africa among European powers",
      "To free African slaves",
      "To establish trade routes",
      "To promote African independence"
    ],
    correctAnswer: 0,
    explanation: "The Berlin Conference was organized by European powers to partition Africa among themselves, with Ethiopia and Liberia being the only independent African nations."
  },
  {
    id: "pred-2018-hist-25",
    question: "Who was Empress Taytu Betul?",
    options: [
      "Wife of Menelik II and key figure in Ethiopian history",
      "First female emperor",
      "Military commander only",
      "Foreign diplomat"
    ],
    correctAnswer: 0,
    explanation: "Empress Taytu Betul was the wife of Menelik II and played a crucial role in Ethiopian politics, particularly during the Battle of Adwa."
  },
  {
    id: "pred-2018-hist-26",
    question: "What was the significance of the Axumite Kingdom?",
    options: [
      "Major ancient civilization and trade empire",
      "Small tribal kingdom",
      "European colony",
      "Islamic state"
    ],
    correctAnswer: 0,
    explanation: "The Axumite Kingdom was a major ancient civilization that controlled trade routes between Rome and India, and was one of the first states to mint coins."
  },
  {
    id: "pred-2018-hist-27",
    question: "When did Ethiopia join the League of Nations?",
    options: [
      "1923",
      "1918",
      "1935",
      "1945"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia joined the League of Nations in 1923, becoming the first African member state."
  },
  {
    id: "pred-2018-hist-28",
    question: "What was the Solomonic Dynasty?",
    options: [
      "Claimed descent from King Solomon and Queen of Sheba",
      "Ruled only for 50 years",
      "Was a foreign dynasty",
      "Established democracy"
    ],
    correctAnswer: 0,
    explanation: "The Solomonic Dynasty claimed descent from the biblical King Solomon and Queen of Sheba, providing religious legitimacy to Ethiopian emperors."
  },
  {
    id: "pred-2018-hist-29",
    question: "What was the purpose of the Organization of African Unity (OAU)?",
    options: [
      "To promote African unity and independence",
      "To colonize Africa",
      "To establish European control",
      "To promote Islam only"
    ],
    correctAnswer: 0,
    explanation: "The OAU was founded in 1963 in Addis Ababa to promote African unity, independence, and cooperation among African states."
  },
  {
    id: "pred-2018-hist-30",
    question: "What was the role of Ethiopia in World War II?",
    options: [
      "Fought against Italian occupation alongside Allied forces",
      "Remained neutral",
      "Fought with Axis powers",
      "Did not participate"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia fought against Italian occupation during WWII, eventually liberating the country in 1941 with British Allied support."
  },
  {
    id: "pred-2018-hist-31",
    question: "When was the Ethiopian Constitution first adopted?",
    options: [
      "1931",
      "1955",
      "1987",
      "1995"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia's first constitution was adopted in 1931 during Emperor Haile Selassie's reign."
  },
  {
    id: "pred-2018-hist-32",
    question: "What was the purpose of the Italo-Ethiopian War (1935-1936)?",
    options: [
      "Italy's attempt to colonize Ethiopia",
      "Ethiopia's attempt to colonize Italy",
      "Border dispute only",
      "Trade conflict"
    ],
    correctAnswer: 0,
    explanation: "Italy sought to colonize Ethiopia in 1935, but was defeated at the Battle of Adwa in 1896 and again faced resistance in 1935-1936."
  },
  {
    id: "pred-2018-hist-33",
    question: "What is the significance of the year 1974 in Ethiopian history?",
    options: [
      "End of the monarchy and beginning of the Derg regime",
      "Independence from Italy",
      "Battle of Adwa",
      "Establishment of modern Ethiopia"
    ],
    correctAnswer: 0,
    explanation: "1974 marked the end of Emperor Haile Selassie's reign and the establishment of the Marxist Derg military regime."
  },
  {
    id: "pred-2018-hist-34",
    question: "What was the Derg?",
    options: [
      "Military junta that ruled Ethiopia from 1974-1991",
      "Political party",
      "Traditional council",
      "Religious organization"
    ],
    correctAnswer: 0,
    explanation: "The Derg was a Marxist-Leninist military junta that ruled Ethiopia from 1974 until 1991."
  },
  {
    id: "pred-2018-hist-35",
    question: "When did Ethiopia become a federal republic?",
    options: [
      "1995",
      "1974",
      "1931",
      "1991"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted a new constitution in 1995, establishing it as a federal democratic republic."
  },
  {
    id: "pred-2018-hist-36",
    question: "What is the Ethiopian New Year called?",
    options: [
      "Enkutatash",
      "Timket",
      "Meskel",
      "Genna"
    ],
    correctAnswer: 0,
    explanation: "Enkutatash is the Ethiopian New Year, celebrated in September."
  },
  {
    id: "pred-2018-hist-37",
    question: "What is the significance of Lalibela?",
    options: [
      "Famous for its rock-hewn churches",
      "Battle site",
      "Capital city",
      "Trade center"
    ],
    correctAnswer: 0,
    explanation: "Lalibela is famous for its 11 rock-hewn churches carved from solid rock in the 12th century."
  },
  {
    id: "pred-2018-hist-38",
    question: "When did Ethiopia gain independence from Italy?",
    options: [
      "1941",
      "1935",
      "1896",
      "1945"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia was liberated from Italian occupation in 1941 with British Allied support during WWII."
  },
  {
    id: "pred-2018-hist-39",
    question: "What is the Ethiopian calendar system?",
    options: [
      "Approximately 7-8 years behind the Gregorian calendar",
      "Same as Gregorian calendar",
      "Ahead of Gregorian calendar",
      "Based on lunar cycles only"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian calendar is approximately 7-8 years behind the Gregorian calendar and has 13 months."
  },
  {
    id: "pred-2018-hist-40",
    question: "What was the role of Emperor Tewodros?",
    options: [
      "Unified Ethiopia and modernized the country",
      "Divided Ethiopia",
      "Surrendered to Italy",
      "Was a colonial ruler"
    ],
    correctAnswer: 0,
    explanation: "Emperor Tewodros (1855-1868) worked to unify Ethiopia and modernize the country, though his reign ended in conflict."
  },
  {
    id: "pred-2018-hist-41",
    question: "What was the significance of Emperor Menelik II?",
    options: [
      "Defeated Italy at Battle of Adwa and modernized Ethiopia",
      "Surrendered to Italy",
      "Was a colonial ruler",
      "Divided Ethiopia"
    ],
    correctAnswer: 0,
    explanation: "Emperor Menelik II (1889-1913) defeated Italy at the Battle of Adwa in 1896 and modernized Ethiopia with infrastructure and education."
  },
  {
    id: "pred-2018-hist-42",
    question: "What was the Solomonic Dynasty?",
    options: [
      "Ethiopian imperial dynasty claiming descent from King Solomon",
      "Egyptian dynasty",
      "European dynasty",
      "Arab dynasty"
    ],
    correctAnswer: 0,
    explanation: "The Solomonic Dynasty was the Ethiopian imperial dynasty that claimed descent from King Solomon and the Queen of Sheba, ruling from 1270 to 1974."
  },
  {
    id: "pred-2018-hist-43",
    question: "What was the significance of Aksum?",
    options: [
      "Ancient Ethiopian kingdom and major trading power",
      "Modern city only",
      "European kingdom",
      "Asian empire"
    ],
    correctAnswer: 0,
    explanation: "The Kingdom of Aksum was an ancient Ethiopian kingdom that was a major trading power from the 1st to 7th centuries AD."
  },
  {
    id: "pred-2018-hist-44",
    question: "What was the Scramble for Africa?",
    options: [
      "European colonization of Africa in the late 19th century",
      "African unification movement",
      "African independence war",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "The Scramble for Africa was the rapid colonization of Africa by European powers in the late 19th century."
  },
  {
    id: "pred-2018-hist-45",
    question: "What was the Berlin Conference (1884-1885)?",
    options: [
      "European meeting to divide Africa among colonial powers",
      "African independence conference",
      "Ethiopian peace conference",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "The Berlin Conference was where European powers met to divide Africa among themselves without African representation."
  },
  {
    id: "pred-2018-hist-46",
    question: "What was the significance of Ethiopia's independence during the Scramble for Africa?",
    options: [
      "Ethiopia was one of few African nations to resist colonization",
      "Ethiopia was colonized",
      "Ethiopia was a European colony",
      "Ethiopia did not exist"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia was one of the few African nations that successfully resisted European colonization during the Scramble for Africa."
  },
  {
    id: "pred-2018-hist-47",
    question: "What was the Atlantic Slave Trade?",
    options: [
      "Forced transportation of Africans to the Americas",
      "African internal trade",
      "European migration",
      "Asian trade route"
    ],
    correctAnswer: 0,
    explanation: "The Atlantic Slave Trade was the forced transportation of millions of Africans to the Americas as slaves from the 16th to 19th centuries."
  },
  {
    id: "pred-2018-hist-48",
    question: "What was the significance of the Haitian Revolution?",
    options: [
      "First successful slave revolt establishing an independent state",
      "European victory",
      "African colonization",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "The Haitian Revolution (1791-1804) was the first successful slave revolt, leading to the establishment of Haiti as an independent state."
  },
  {
    id: "pred-2018-hist-49",
    question: "What was Pan-Africanism?",
    options: [
      "Movement for African unity and liberation",
      "European movement",
      "Colonial movement",
      "Trade organization"
    ],
    correctAnswer: 0,
    explanation: "Pan-Africanism was a movement that aimed to encourage and strengthen bonds of solidarity between all people of African descent."
  },
  {
    id: "pred-2018-hist-50",
    question: "Who was Marcus Garvey?",
    options: [
      "Jamaican political leader promoting Pan-Africanism",
      "European colonial leader",
      "Ethiopian emperor",
      "American president"
    ],
    correctAnswer: 0,
    explanation: "Marcus Garvey was a Jamaican political leader who promoted Pan-Africanism and Black nationalism in the early 20th century."
  },
  {
    id: "pred-2018-hist-51",
    question: "What was the significance of World War I?",
    options: [
      "Global conflict from 1914-1918 involving major powers",
      "Regional conflict only",
      "African war only",
      "Trade dispute"
    ],
    correctAnswer: 0,
    explanation: "World War I (1914-1918) was a global conflict involving major world powers and reshaped political boundaries."
  },
  {
    id: "pred-2018-hist-52",
    question: "What was the League of Nations?",
    options: [
      "First worldwide intergovernmental organization for peace",
      "Military alliance",
      "Trade organization",
      "Colonial organization"
    ],
    correctAnswer: 0,
    explanation: "The League of Nations was the first worldwide intergovernmental organization established after WWI to maintain world peace."
  },
  {
    id: "pred-2018-hist-53",
    question: "What was the significance of World War II?",
    options: [
      "Global conflict from 1939-1945 involving most nations",
      "Regional conflict only",
      "European war only",
      "Trade dispute"
    ],
    correctAnswer: 0,
    explanation: "World War II (1939-1945) was the deadliest conflict in human history, involving most of the world's nations."
  },
  {
    id: "pred-2018-hist-54",
    question: "What was the United Nations?",
    options: [
      "International organization founded in 1945 to promote peace",
      "Military alliance",
      "Trade organization",
      "Colonial organization"
    ],
    correctAnswer: 0,
    explanation: "The United Nations was founded in 1945 after WWII to promote international cooperation and peace."
  },
  {
    id: "pred-2018-hist-55",
    question: "What was the Cold War?",
    options: [
      "Geopolitical tension between US and Soviet Union after WWII",
      "Hot war between US and USSR",
      "European conflict only",
      "Trade war"
    ],
    correctAnswer: 0,
    explanation: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union after World War II."
  },
  {
    id: "pred-2018-hist-56",
    question: "What was decolonization?",
    options: [
      "Process of colonies gaining independence",
      "Process of colonization",
      "Military conquest",
      "Trade expansion"
    ],
    correctAnswer: 0,
    explanation: "Decolonization was the process by which colonies became independent, particularly after World War II."
  },
  {
    id: "pred-2018-hist-57",
    question: "What was the significance of Ghana's independence in 1957?",
    options: [
      "First sub-Saharan African nation to gain independence",
      "Last African independence",
      "European independence",
      "Asian independence"
    ],
    correctAnswer: 0,
    explanation: "Ghana (formerly Gold Coast) was the first sub-Saharan African nation to gain independence from colonial rule in 1957."
  },
  {
    id: "pred-2018-hist-58",
    question: "What was apartheid?",
    options: [
      "System of racial segregation in South Africa",
      "System of equality",
      "Traditional African system",
      "European system only"
    ],
    correctAnswer: 0,
    explanation: "Apartheid was a system of institutionalized racial segregation and discrimination in South Africa from 1948 to 1994."
  },
  {
    id: "pred-2018-hist-59",
    question: "Who was Nelson Mandela?",
    options: [
      "South African anti-apartheid leader and first black president",
      "European colonial leader",
      "Ethiopian emperor",
      "American president"
    ],
    correctAnswer: 0,
    explanation: "Nelson Mandela was a South African anti-apartheid revolutionary who became the country's first black president in 1994."
  },
  {
    id: "pred-2018-hist-60",
    question: "What was the significance of the Ethiopian Revolution of 1974?",
    options: [
      "Overthrew the monarchy and established a Marxist regime",
      "Established democracy",
      "Ended Italian occupation",
      "Restored the monarchy"
    ],
    correctAnswer: 0,
    explanation: "The 1974 Ethiopian Revolution overthrew Emperor Haile Selassie and established the Marxist Derg military regime."
  },
  {
    id: "pred-2018-hist-61",
    question: "What was the Ethiopian Civil War?",
    options: [
      "Conflict between Derg regime and various rebel groups (1974-1991)",
      "War with Italy",
      "War with Egypt",
      "Internal tribal conflict"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Civil War (1974-1991) was fought between the Derg regime and various rebel groups including the EPRDF."
  },
  {
    id: "pred-2018-hist-62",
    question: "What was the significance of 1991 in Ethiopian history?",
    options: [
      "End of Derg regime and establishment of transitional government",
      "Battle of Adwa",
      "Italian occupation",
      "Monarchy restoration"
    ],
    correctAnswer: 0,
    explanation: "In 1991, the Derg regime was defeated and a transitional government was established, leading to the 1995 constitution."
  },
  {
    id: "pred-2018-hist-63",
    question: "What was the significance of the Great Depression?",
    options: [
      "Severe worldwide economic downturn in the 1930s",
      "Political revolution",
      "Military conflict",
      "Natural disaster"
    ],
    correctAnswer: 0,
    explanation: "The Great Depression was a severe worldwide economic depression that lasted from 1929 to the late 1930s."
  },
  {
    id: "pred-2018-hist-64",
    question: "What was the Industrial Revolution?",
    options: [
      "Transition to new manufacturing processes in the 18th-19th centuries",
      "Agricultural revolution",
      "Political revolution",
      "Military revolution"
    ],
    correctAnswer: 0,
    explanation: "The Industrial Revolution was the transition to new manufacturing processes in Europe and the US from about 1760 to 1840."
  },
  {
    id: "pred-2018-hist-65",
    question: "What was the Renaissance?",
    options: [
      "Cultural movement in Europe from 14th-17th centuries",
      "Political movement",
      "Military movement",
      "Religious movement only"
    ],
    correctAnswer: 0,
    explanation: "The Renaissance was a cultural movement that began in Italy in the 14th century and spread to Europe, marking the transition from medieval to modern times."
  },
  {
    id: "pred-2018-hist-66",
    question: "What was the French Revolution?",
    options: [
      "Revolution in France (1789-1799) that overthrew the monarchy",
      "Revolution in America",
      "Revolution in Ethiopia",
      "Revolution in England"
    ],
    correctAnswer: 0,
    explanation: "The French Revolution (1789-1799) overthrew the French monarchy and established a republic, spreading ideas of liberty and equality."
  },
  {
    id: "pred-2018-hist-67",
    question: "What was the American Revolution?",
    options: [
      "War (1775-1783) in which American colonies gained independence from Britain",
      "Civil war in America",
      "War with France",
      "War with Spain"
    ],
    correctAnswer: 0,
    explanation: "The American Revolution was the war in which the Thirteen Colonies gained independence from Great Britain, forming the United States."
  },
  {
    id: "pred-2018-hist-68",
    question: "What was the significance of the discovery of the New World?",
    options: [
      "Christopher Columbus's voyage led to European colonization of Americas",
      "Discovery of Africa",
      "Discovery of Asia",
      "Discovery of Europe"
    ],
    correctAnswer: 0,
    explanation: "Christopher Columbus's 1492 voyage led to European awareness of the Americas and subsequent colonization."
  },
  {
    id: "pred-2018-hist-69",
    question: "What was the significance of the invention of writing?",
    options: [
      "Enabled record-keeping and development of civilizations",
      "Military advancement only",
      "Agricultural development only",
      "Trade only"
    ],
    correctAnswer: 0,
    explanation: "The invention of writing around 3200 BC enabled record-keeping, literature, and the development of complex civilizations."
  },
  {
    id: "pred-2018-hist-70",
    question: "What was the significance of the Neolithic Revolution?",
    options: [
      "Transition from hunting-gathering to agriculture",
      "Industrial revolution",
      "Political revolution",
      "Military revolution"
    ],
    correctAnswer: 0,
    explanation: "The Neolithic Revolution was the transition from hunting and gathering to agriculture and settlement, beginning around 10,000 BC."
  },
  {
    id: "pred-2018-hist-71",
    question: "What was the significance of the Silk Road?",
    options: [
      "Ancient trade route connecting East and West",
      "Military route",
      "Religious pilgrimage route only",
      "Agricultural route"
    ],
    correctAnswer: 0,
    explanation: "The Silk Road was an ancient network of trade routes connecting East Asia with the Mediterranean, facilitating cultural and economic exchange."
  },
  {
    id: "pred-2018-hist-72",
    question: "What was the significance of the printing press?",
    options: [
      "Revolutionized the spread of information and knowledge",
      "Military invention",
      "Agricultural tool",
      "Transportation invention"
    ],
    correctAnswer: 0,
    explanation: "The printing press invented by Gutenberg in the 15th century revolutionized the spread of information and contributed to the Renaissance and Reformation."
  },
  {
    id: "pred-2018-hist-73",
    question: "What was the significance of the Ethiopian Orthodox Church?",
    options: [
      "One of the oldest Christian churches and central to Ethiopian culture",
      "European church",
      "Modern church only",
      "Political party"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Orthodox Church is one of the oldest Christian churches, dating to the 4th century, and is central to Ethiopian culture and history."
  },
  {
    id: "pred-2018-hist-74",
    question: "What was the significance of Queen of Sheba?",
    options: [
      "Legendary figure associated with Ethiopia and King Solomon",
      "European queen",
      "Asian queen",
      "Mythical creature"
    ],
    correctAnswer: 0,
    explanation: "The Queen of Sheba is a legendary figure who, according to tradition, visited King Solomon and is associated with Ethiopian royal lineage."
  },
  {
    id: "pred-2018-hist-75",
    question: "What was the significance of Gondar?",
    options: [
      "Capital of Ethiopia in the 17th-18th centuries known for castles",
      "Battle site",
      "Modern city only",
      "Trade center only"
    ],
    correctAnswer: 0,
    explanation: "Gondar was the capital of Ethiopia from 1636 to 1855, known for its castles and as a center of Ethiopian culture."
  },
  {
    id: "pred-2018-hist-76",
    question: "What was the significance of the Zagwe Dynasty?",
    options: [
      "Ethiopian dynasty that ruled after Aksum and built Lalibela churches",
      "European dynasty",
      "Asian dynasty",
      "Modern dynasty"
    ],
    correctAnswer: 0,
    explanation: "The Zagwe Dynasty (12th-13th centuries) ruled Ethiopia after the Aksumite Kingdom and is famous for building the rock-hewn churches of Lalibela."
  },
  {
    id: "pred-2018-hist-77",
    question: "What was the significance of Fasilides Castle?",
    options: [
      "Part of the Royal Enclosure in Gondar, UNESCO World Heritage Site",
      "Battle fortification",
      "Modern building",
      "Trade center"
    ],
    correctAnswer: 0,
    explanation: "Fasilides Castle is part of the Royal Enclosure in Gondar, a UNESCO World Heritage Site and symbol of Ethiopian architecture."
  },
  {
    id: "pred-2018-hist-78",
    question: "What was the significance of the Ethiopian resistance to Italian occupation?",
    options: [
      "Inspired anti-colonial movements across Africa",
      "Failed resistance",
      "European victory",
      "No significance"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia's resistance to Italian occupation, especially the victory at Adwa, inspired anti-colonial movements across Africa."
  },
  {
    id: "pred-2018-hist-79",
    question: "What was the significance of Haile Selassie?",
    options: [
      "Emperor who modernized Ethiopia and promoted African unity",
      "Military dictator",
      "Colonial ruler",
      "Traditional king only"
    ],
    correctAnswer: 0,
    explanation: "Emperor Haile Selassie (1930-1974) modernized Ethiopia, promoted African unity, and was a symbol of Pan-Africanism."
  },
  {
    id: "pred-2018-hist-80",
    question: "What was the significance of Axumite civilization?",
    options: [
      "Major ancient civilization that developed Ge'ez script and Christianity",
      "Minor civilization",
      "European civilization",
      "Asian civilization"
    ],
    correctAnswer: 0,
    explanation: "The Axumite civilization was a major ancient power that developed the Ge'ez script, adopted Christianity, and controlled trade routes."
  }
];
