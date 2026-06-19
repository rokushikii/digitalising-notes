// Central Notes Database for all subjects
// Loaded via script tag to prevent local CORS errors when double-clicking HTML files

const NOTES_DATABASE = {
  "0580-ext-math": [
    {
      "id": "subtopic_1_1",
      "subtopicId": "1.1",
      "title": "Arithmetics",
      "digitizedText": "> [!NOTE]\n> **1. Arithmetics**\n>\n> **Number System:**\n> - Real numbers\n>   - i) Rational: can be expressed as fraction. e.g. 2/3, 4/6, 9/2, 1/7, 2 5/9.\n>   - ii) Irrational: cannot be expressed as fraction. e.g. $\\pi$, $e = 2.718...$ (natural exponent)\n> - Imaginary numbers: $\\dots, -2i, -i, 0, i, 2i$ (Foundation or A-level)\n>\n> **Number logics:**\n> i) Prime number: Number with only 2 factors\n> ii) Factors & Multiples\n> Composite number\n> Product of prime factors\n> iii) BEDMAS\n\n```mermaid\ngraph TD\n    A[Number System] --> B[Real numbers]\n    A --> C[Imaginary numbers]\n    B --> D[Rational]\n    B --> E[Irrational]\n```\n\n> [!NOTE]\n> **Example:**\n> a) Write 42 as a product of its prime factor\n> $42 = 2 \\times 3 \\times 7$\n> b) Find the product of prime factor for: i) 12, ii) 48, iii) 54, iv) 72, v) 142\n\n> [!NOTE]\n> **Extended Mathematics (0580)**\n> c) Find the HCF of 12 and 18\n> 12, 18 divided by 2 $\\rightarrow$ 6, 9\n> 6, 9 divided by 3 $\\rightarrow$ 2, 3\n> $2 \\times 3 = 6$ is the HCF\n>\n> d) Find the HCF of the following:\n> i) 24 and 32 (HCF: 8)\n> ii) 14 and 35 (HCF: 7)\n> iii) 100 and 200 (HCF: 100)\n\n> [!NOTE]\n> **BEDMAS**\n> B: Bracket\n> E: Exponent / Indices\n> D: Division (L1 operation)\n> M: Multiplication (L1 operation)\n> A: Addition (L2 operation)\n> S: Subtraction (L2 operation)\n> Same priority operation, $L \\rightarrow R$\n\n> [!NOTE]\n> **Example (Solve):**\n> a) $5 \\times 3 + 2 \\times 6 = 15 + 12 = 27$\n> b) $9 \\div 3 + 15 \\times 2 = 3 + 30 = 33$\n> c) $8 + (5 - 1) \\times 3 = 8 + 4 \\times 3 = 8 + 12 = 20$\n> d) $8^2 + 2 \\times 3^2 = 64 + 2 \\times 9 = 64 + 18 = 82$\n> e) $8 \\div 2(2+2) = 8 \\div 2(4) = 4 \\times 4 = 16$",
      "quizzes": [
        {
          "question": "Which of the following is an irrational number?",
          "options": [
            "22/7",
            "$\\sqrt{16}$",
            "$\\pi$",
            "3.14"
          ],
          "correctIndex": 2,
          "explanation": "Irrational numbers cannot be expressed as simple fractions. $\\pi$ is a classic example of an irrational number, while 22/7 is a rational approximation. $\\sqrt{16}$ equals 4, which is rational."
        },
        {
          "question": "Find the highest common factor (HCF) of 24 and 32.",
          "options": [
            "4",
            "6",
            "8",
            "12"
          ],
          "correctIndex": 2,
          "explanation": "The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The factors of 32 are 1, 2, 4, 8, 16, 32. The highest common factor is 8."
        },
        {
          "question": "Express 42 as a product of its prime factors.",
          "options": [
            "$2 \\times 21$",
            "$6 \\times 7$",
            "$2 \\times 3 \\times 7$",
            "$2 \\times 2 \\times 7$"
          ],
          "correctIndex": 2,
          "explanation": "Dividing 42 by prime numbers: 42 / 2 = 21. 21 / 3 = 7. 7 is a prime number. So, $42 = 2 \\times 3 \\times 7$."
        },
        {
          "question": "Evaluate the following expression using BEDMAS rules: $8 + (5 - 1) \\times 3$",
          "options": [
            "36",
            "20",
            "19",
            "24"
          ],
          "correctIndex": 1,
          "explanation": "Brackets first: $5 - 1 = 4$. Then multiplication: $4 \\times 3 = 12$. Finally addition: $8 + 12 = 20$."
        },
        {
          "question": "Calculate: $8 \\div 2(2 + 2)$",
          "options": [
            "1",
            "8",
            "16",
            "4"
          ],
          "correctIndex": 2,
          "explanation": "Brackets first: $(2+2) = 4$. Then left to right for multiplication/division: $8 \\div 2 = 4$. Then $4 \\times 4 = 16$."
        },
        {
          "question": "Which of the following numbers is a composite number?",
          "options": [
            "2",
            "13",
            "17",
            "21"
          ],
          "correctIndex": 3,
          "explanation": "A composite number has more than two factors. 21 has factors 1, 3, 7, and 21, making it a composite number. 2, 13, and 17 are prime numbers."
        },
        {
          "question": "Find the value of $9 \\div 3 + 15 \\times 2$.",
          "options": [
            "33",
            "36",
            "31",
            "18"
          ],
          "correctIndex": 0,
          "explanation": "Division and multiplication first: $9 \\div 3 = 3$ and $15 \\times 2 = 30$. Then addition: $3 + 30 = 33$."
        }
      ]
    },
    {
      "id": "subtopic_1_2",
      "subtopicId": "1.2",
      "title": "Fractions, decimals & percentages",
      "digitizedText": "> [!NOTE]\n> **2. Fractions, Decimals, & Percentages (FDP)**\n>\n> a) Fractions\n> - Operation\n> - Recurring decimal\n>\n> **Operation of fraction (Revision)**\n> $+$ or $-$\n> 1. Equalize denominator\n> 2. Add or subtract numerator only\n> 3. Simplify\n>\n> $\\times$ or $\\div$\n> 1. Cross simplify (if possible)\n> 2. Multiply numerators and denominators\n> 3. Simplify\n\n> [!NOTE]\n> **Examples:**\n> a) $1 \\frac{2}{3} + \\frac{3}{5} = 1 \\frac{10}{15} + \\frac{9}{15} = 1 \\frac{19}{15} = 2 \\frac{4}{15}$ or $\\frac{34}{15}$\n> b) $2 - \\frac{3}{7} = \\frac{14}{7} - \\frac{3}{7} = \\frac{11}{7}$\n> c) $7 \\frac{1}{4} - 4 \\frac{1}{2} = 6 \\frac{5}{4} - 4 \\frac{2}{4} = 2 \\frac{3}{4}$ or $\\frac{11}{4}$\n> d) $\\frac{2}{5} - \\frac{3}{4} = \\frac{8}{20} - \\frac{15}{20} = -\\frac{7}{20}$\n> a) $\\frac{2}{7} \\times \\frac{35}{7} = \\frac{10}{7}$\n> b) $2 \\frac{7}{9} \\div \\frac{10}{27} = \\frac{25}{9} \\times \\frac{27}{10} = \\frac{15}{2}$\n> c) $3 \\frac{1}{2} \\div 2 \\frac{3}{5} = \\frac{7}{2} \\times \\frac{5}{13} = \\frac{35}{26}$\n\n> [!NOTE]\n> **Fraction $\\rightarrow$ Recurring decimal**\n> $\\frac{1}{3} = 0.\\dot{3}$\n> $\\frac{2}{3} = 0.\\dot{6}$\n> $\\frac{1}{9} = 0.\\dot{1}$\n> $\\frac{2}{9} = 0.\\dot{2}$\n>\n> **Recurring decimal $\\rightarrow$ Fraction**\n> $0.\\dot{2}\\dot{1} = 0.212121\\dots$\n> $0.\\dot{3}\\dot{5} = \\frac{35}{99}$\n> $0.\\dot{1}\\dot{6} = \\frac{16}{99}$ (2 digits recurring $\\rightarrow$ always over 99)\n> $0.\\dot{2}\\dot{3}\\dot{4} = 0.234234234\\dots = \\frac{234}{999}$ (3 digits recurring $\\rightarrow$ always over 999)\n> $0.\\dot{1}\\dot{5}\\dot{9} = \\frac{159}{999}$\n>\n> **Convert $0.2\\dot{1}$ to fraction [2]**\n> $x = 0.21111\\dots$ (goal $\\rightarrow$ to eliminate recurring no.)\n> $10x = 2.1111\\dots$\n> $100x = 21.111\\dots$\n> $90x = 19 \\Rightarrow x = \\frac{19}{90}$",
      "quizzes": [
        {
          "question": "Evaluate $1 \\frac{2}{3} + \\frac{3}{5}$.",
          "options": [
            "$2 \\frac{4}{15}$",
            "$1 \\frac{5}{8}$",
            "$2 \\frac{1}{15}$",
            "$1 \\frac{15}{8}$"
          ],
          "correctIndex": 0,
          "explanation": "Equalizing denominators to 15: $1 \\frac{10}{15} + \\frac{9}{15} = 1 \\frac{19}{15}$, which simplifies to $2 \\frac{4}{15}$."
        },
        {
          "question": "Simplify $2 \\frac{7}{9} \\div \\frac{10}{27}$.",
          "options": [
            "$\\frac{15}{2}$",
            "$\\frac{2}{15}$",
            "$7 \\frac{1}{2}$",
            "Both A and C"
          ],
          "correctIndex": 3,
          "explanation": "Convert to improper fractions: $25/9 \\div 10/27$. Change to multiplication: $25/9 \\times 27/10$. Cross simplify: $5/1 \\times 3/2 = 15/2 = 7 \\frac{1}{2}$."
        },
        {
          "question": "Convert the recurring decimal $0.\\dot{1}\\dot{6}$ to a fraction in its simplest form.",
          "options": [
            "16/99",
            "16/90",
            "8/45",
            "4/25"
          ],
          "correctIndex": 0,
          "explanation": "For 2 digits recurring, put the number over 99: $16/99$. This fraction cannot be simplified further."
        },
        {
          "question": "Convert the recurring decimal $0.2\\dot{1}$ to a fraction.",
          "options": [
            "21/99",
            "19/90",
            "21/90",
            "7/33"
          ],
          "correctIndex": 1,
          "explanation": "Let $x = 0.2111...$. Then $10x = 2.111...$ and $100x = 21.111...$. Subtracting gives $90x = 19$, so $x = 19/90$."
        },
        {
          "question": "Evaluate $\\frac{2}{5} - \\frac{3}{4}$.",
          "options": [
            "-1/1",
            "-7/20",
            "7/20",
            "-1/20"
          ],
          "correctIndex": 1,
          "explanation": "Equalizing denominators to 20: $8/20 - 15/20 = -7/20$."
        },
        {
          "question": "What is the fractional equivalent of $0.\\dot{1}\\dot{5}\\dot{9}$?",
          "options": [
            "159/1000",
            "159/999",
            "53/333",
            "Both B and C"
          ],
          "correctIndex": 3,
          "explanation": "For 3 digits recurring, put the number over 999: $159/999$. This simplifies to $53/333$ by dividing numerator and denominator by 3."
        },
        {
          "question": "Calculate $3 \\frac{1}{2} \\div 2 \\frac{3}{5}$.",
          "options": [
            "35/26",
            "91/10",
            "26/35",
            "$1 \\frac{9}{35}$"
          ],
          "correctIndex": 0,
          "explanation": "Convert to improper fractions: $7/2 \\div 13/5$. Change to multiplication: $7/2 \\times 5/13 = 35/26$."
        }
      ]
    },
    {
      "id": "subtopic_1_3",
      "subtopicId": "1.3",
      "title": "Approximation & estimation",
      "digitizedText": "> [!NOTE]\n> **3. Approximation & Estimation**\n>\n> **Finding boundaries $\\rightarrow$ Range of estimation**\n> i) Place value (nearest 10, nearest 0.1, nearest 10,000)\n> ii) Significant figures (nearest 1sf, nearest 2sf)\n>\n> **Example:**\n> The mass, $m$ kg, of a horse is 429 kg correct to the nearest kg.\n> What is its upper boundary and lower boundary?\n> 1 kg $\\rightarrow$ estimation\n> $1/2 = 0.5$ kg\n> $UB = 429 + 0.5 = 429.5$ kg\n> $LB = 429 - 0.5 = 428.5$ kg\n>\n> correct to the nearest 10kg\n> $10/2 = 5$ kg\n> $UB = 429 + 5 = 434$ kg\n> $LB = 429 - 5 = 424$ kg\n> Difference between UB and LB is always = estimation\n\n> [!NOTE]\n> **Finding boundaries (dp or sf)**\n> Example:\n> a) 3.8 cm measured to nearest 0.1 cm\n> $0.1 / 2 = 0.05$\n> $UB = 3.8 + 0.05 = 3.85$ cm\n> $LB = 3.8 - 0.05 = 3.75$ cm\n> b) 0.07 to the nearest 2 dp $\\rightarrow 0.01 / 2 = 0.005$\n> $UB = 0.075$, $LB = 0.065$\n> c) 900 ml to the nearest 1 sf\n> Determine the place value at said sf to get the estimation: 100\n> $100 / 2 = 50$ ml\n> $UB = 950$ ml, $LB = 850$ ml\n> d) 8200 kg to the nearest 2 sf\n> hundred $\\rightarrow 100/2 = 50$\n> $UB = 8250$ kg, $LB = 8150$ kg\n\n> [!NOTE]\n> **Operations with UB & LB**\n> $\\oplus UB = UB + UB$\n> $\\oplus LB = LB + LB$\n> $\\ominus UB = UB - LB$\n> $\\ominus LB = LB - UB$\n> $\\otimes UB = UB \\times UB$\n> $\\otimes LB = LB \\times LB$\n> $\\oslash UB = UB \\div LB$\n> $\\oslash LB = LB \\div UB$\n\n> [!NOTE]\n> **Examples:**\n> 1. An equilateral triangle has sides length of 15 cm, correct to the nearest cm. Calculate UB perimeter of the shape.\n> $1/2 = 0.5$\n> $UB = 15 + 0.5 = 15.5$ cm\n> $Peri = 15.5 + 15.5 + 15.5 = 46.5$ cm\n>\n> 2. Given $P = 2(w + h)$\n> $w = 12$ to the nearest whole number (w.n.) $\\rightarrow 12.5$\n> $h = 4$ to the nearest w.n. $\\rightarrow 4.5$\n> Find UB of P.\n> $P = 2(12.5 + 4.5) = 2(17) = 34$\n>\n> 3. $A = (b \\times h) / 2$, $A = 10$ to the nearest w.n. ($10.5$), $h = 4$ to the nearest w.n. ($3.5$)\n> Find UB of b.\n> $b = 2A / h \\rightarrow UB_{b} = 2(UB_A) / LB_h = 2(10.5) / 3.5 = 21 / 3.5 = 6$\n>\n> 4. The space allowed for each tent is a rectangle measuring 8 m by 6 m, each correct to the nearest m. Calculate the UB of area of each tent.\n> $UB_{area} = 8.5 \\times 6.5 = 55.25$ m$^2$\n>\n> 5. The length of a roll of ribbon is 30 metres, correct to the nearest half-metre. A piece of length 5.8 m, correct to the nearest 10 cm, is cut from the roll.\n> Work out the maximum possible length of ribbon left on the roll.\n> 30 m (nearest 0.5 m) $\\rightarrow 0.5/2 = 0.25$\n> $UB = 30.25$, $LB = 29.75$\n> 5.8 m (nearest 0.1 m) $\\rightarrow 0.1/2 = 0.05$\n> $UB = 5.85$, $LB = 5.75$\n> Max left $= UB_{total} - LB_{cut} = 30.25 - 5.75 = 24.5$ m",
      "quizzes": [
        {
          "question": "A horse has a mass of 429 kg, correct to the nearest 10 kg. What is the lower boundary of its mass?",
          "options": [
            "428.5 kg",
            "424 kg",
            "425 kg",
            "429.5 kg"
          ],
          "correctIndex": 1,
          "explanation": "The degree of accuracy is 10 kg. Half of this is 5 kg. The lower boundary is $429 - 5 = 424$ kg."
        },
        {
          "question": "The length of a pencil is 15 cm, correct to the nearest cm. Calculate the upper boundary of the perimeter of an equilateral triangle with this side length.",
          "options": [
            "45 cm",
            "46.5 cm",
            "45.5 cm",
            "46 cm"
          ],
          "correctIndex": 1,
          "explanation": "The nearest cm means the accuracy is 1 cm, so half is 0.5 cm. The upper boundary for the side length is 15.5 cm. Perimeter $= 3 \\times 15.5 = 46.5$ cm."
        },
        {
          "question": "Given $P = 2(w + h)$, where $w = 12$ to the nearest whole number, and $h = 4$ to the nearest whole number. Find the upper boundary of $P$.",
          "options": [
            "32",
            "33",
            "34",
            "35"
          ],
          "correctIndex": 2,
          "explanation": "The upper boundaries are $w = 12.5$ and $h = 4.5$. So, $UB(P) = 2(12.5 + 4.5) = 2(17) = 34$."
        },
        {
          "question": "The space for a tent is a rectangle 8 m by 6 m, each correct to the nearest m. What is the upper boundary of the area?",
          "options": [
            "48 m\u00b2",
            "55.25 m\u00b2",
            "41.25 m\u00b2",
            "56 m\u00b2"
          ],
          "correctIndex": 1,
          "explanation": "The upper boundaries for length and width are 8.5 m and 6.5 m. The upper boundary for area $= 8.5 \\times 6.5 = 55.25$ m\u00b2."
        },
        {
          "question": "The length of a roll of ribbon is 30 metres, correct to the nearest half-metre. A piece of length 5.8 m, correct to the nearest 10 cm, is cut from the roll. Work out the maximum possible length of ribbon left.",
          "options": [
            "24.2 m",
            "24.5 m",
            "24.0 m",
            "24.75 m"
          ],
          "correctIndex": 1,
          "explanation": "Upper boundary of total length = 30.25 m. Lower boundary of cut piece = 5.75 m. Max length left = UB of total - LB of cut = $30.25 - 5.75 = 24.5$ m."
        },
        {
          "question": "If $A = 10$ (to the nearest whole number) and $h = 4$ (to the nearest whole number), what is the upper boundary of $b$ given $A = \\frac{b \\times h}{2}$?",
          "options": [
            "5",
            "6",
            "5.5",
            "4.5"
          ],
          "correctIndex": 1,
          "explanation": "Rearranging gives $b = 2A / h$. The upper boundary of a division is $UB / LB$. $UB_A = 10.5$ and $LB_h = 3.5$. $UB_b = 2(10.5) / 3.5 = 21 / 3.5 = 6$."
        },
        {
          "question": "Express 8200 kg to the nearest 2 significant figures. What is the upper boundary?",
          "options": [
            "8250 kg",
            "8300 kg",
            "8150 kg",
            "8200.5 kg"
          ],
          "correctIndex": 0,
          "explanation": "The second significant figure is in the hundreds place, so the degree of accuracy is 100. Half of 100 is 50. Upper boundary $= 8200 + 50 = 8250$ kg."
        }
      ]
    },
    {
      "id": "1.4",
      "subtopicId": "1.4",
      "title": "Standard form",
      "digitizedText": "## Significant Figures & Standard Form\n\n> [!NOTE]\n> **What are significant figures (sf)?**\n> Significant figures are non-zero digits with a few exceptions on zeros. Zeros in-between non-zero digits and trailing zeros after a decimal point are significant.\n\n### Rules for Significant Figures\n- **Whole Numbers:** Trailing zeros in a whole number are usually *not* significant.\n  - $3,461,000$ to 2 sf is $3,500,000$\n  - $3,461,000$ to 3 sf is $3,460,000$\n- **Decimals:** Leading zeros are *not* significant. In-between zeros and trailing zeros in decimals are significant.\n  - $0.0570900$ has 6 significant figures.\n  - $0.0570900$ to 2 sf is $0.057$\n  - $0.0570900$ to 3 sf is $0.0571$\n\n## Standard Form\n\n> [!NOTE]\n> **What is standard form?**\n> It is a method of writing a very large or very small number in a shorter way, in the form $A \\times 10^n$, where $1 \\le A < 10$ and $n$ is an integer. The decimal point must be placed to the right of the first significant figure.\n\n### Writing Numbers in Standard Form\n- Large numbers have a positive index: $15,000,000 = 1.5 \\times 10^7$\n- Small numbers have a negative index: $0.000000123 = 1.23 \\times 10^{-7}$\n\nIf a number is not in standard form, you must adjust the multiplier and the power of 10:\n- $235 \\times 10^3 = 2.35 \\times 10^5$\n- $0.257 \\times 10^{-2} = 2.57 \\times 10^{-3}$\n- $22.9 \\times 10^4 = 2.29 \\times 10^5$\n- $78.3 \\times 10^5 = 7.83 \\times 10^6$\n\n### Operations in Standard Form\n\n#### 1. Addition & Subtraction\nTo add or subtract, you must equalize the multiplier first. Always follow the bigger multiplier.\n- $5 \\times 10^4 + 3 \\times 10^4 = 8 \\times 10^4$\n- $2.5 \\times 10^5 + 3.3 \\times 10^4 = 2.5 \\times 10^5 + 0.33 \\times 10^5 = 2.83 \\times 10^5$\n- $6 \\times 10^3 + 8 \\times 10^2 = 6 \\times 10^3 + 0.8 \\times 10^3 = 6.8 \\times 10^3$\n\n#### 2. Multiplication & Division\nUse the rules of indices: $a^m \\times a^n = a^{m+n}$ and $a^m \\div a^n = a^{m-n}$.\n\n```mermaid\ngraph LR\n    A[Multiplication] --> B(2 x 10^3 * 3 x 10^4)\n    B --> C(2 * 3 x 10^{3+4})\n    C --> D(6 x 10^7)\n    E[Division] --> F(8 x 10^5 / 4 x 10^3)\n    F --> G(8/4 x 10^{5-3})\n    G --> H(2 x 10^2)\n```\n\n**Multiplication Examples:**\n- $(1.2 \\times 10^4) \\times (6 \\times 10^4) = 7.2 \\times 10^8$\n- $(0.8 \\times 10^{-7}) \\times (1.1 \\times 10^3) = 0.88 \\times 10^{-4} = 8.8 \\times 10^{-5}$\n\n**Division Examples:**\n- $(9 \\times 10^9) \\div (4 \\times 10^9) = 2.25 \\times 10^0 = 2.25$\n- $(1.2 \\times 10^9) \\div (3 \\times 10^5) = 0.4 \\times 10^4 = 4 \\times 10^3$\n\n#### 3. Indices\nUse the rule $(a^m)^n = a^{m \\times n}$.\n- $(2 \\times 10^3)^2 = 2^2 \\times 10^6 = 4 \\times 10^6$\n- $(1.2 \\times 10^4)^2 = 1.44 \\times 10^8$\n",
      "quizzes": [
        {
          "question": "Which of the following numbers is written in standard form?",
          "options": [
            "23.5 \\times 10^4",
            "0.45 \\times 10^{-2}",
            "4.2 \\times 10^5",
            "10.1 \\times 10^3"
          ],
          "correctIndex": 2,
          "explanation": "Standard form requires the multiplier to be between 1 and 10 (excluding 10). Only 4.2 satisfies this condition."
        },
        {
          "question": "What is 0.0000078 written in standard form?",
          "options": [
            "7.8 \\times 10^{-6}",
            "7.8 \\times 10^{-7}",
            "78 \\times 10^{-5}",
            "0.78 \\times 10^{-5}"
          ],
          "correctIndex": 0,
          "explanation": "Moving the decimal point 6 places to the right gives 7.8, so the power of 10 is -6."
        },
        {
          "question": "Calculate (2.5 \\times 10^4) + (4.1 \\times 10^3), giving your answer in standard form.",
          "options": [
            "6.6 \\times 10^4",
            "2.91 \\times 10^4",
            "6.6 \\times 10^7",
            "2.91 \\times 10^3"
          ],
          "correctIndex": 1,
          "explanation": "Equalize the multipliers: (2.5 \\times 10^4) + (0.41 \\times 10^4) = 2.91 \\times 10^4."
        },
        {
          "question": "Evaluate (8 \\times 10^6) \\times (3 \\times 10^{-2}) in standard form.",
          "options": [
            "2.4 \\times 10^5",
            "24 \\times 10^4",
            "2.4 \\times 10^4",
            "1.1 \\times 10^5"
          ],
          "correctIndex": 0,
          "explanation": "8 \\times 3 = 24 and 10^6 \\times 10^{-2} = 10^4. So, 24 \\times 10^4 = 2.4 \\times 10^5."
        },
        {
          "question": "Calculate (4.5 \\times 10^8) \\div (9 \\times 10^3) and write the answer in standard form.",
          "options": [
            "0.5 \\times 10^5",
            "5 \\times 10^4",
            "5 \\times 10^5",
            "0.5 \\times 10^4"
          ],
          "correctIndex": 1,
          "explanation": "4.5 \\div 9 = 0.5 and 10^8 \\div 10^3 = 10^5. This gives 0.5 \\times 10^5, which converts to 5 \\times 10^4."
        },
        {
          "question": "How many significant figures does the number 0.0570900 have?",
          "options": [
            "4",
            "5",
            "6",
            "7"
          ],
          "correctIndex": 2,
          "explanation": "Leading zeros are not significant. The digits 5, 7, 0, 9, 0, 0 are significant, giving a total of 6 significant figures."
        },
        {
          "question": "Evaluate (1.5 \\times 10^4)^2 in standard form.",
          "options": [
            "2.25 \\times 10^8",
            "3.0 \\times 10^8",
            "2.25 \\times 10^6",
            "1.5 \\times 10^8"
          ],
          "correctIndex": 0,
          "explanation": "1.5^2 = 2.25 and (10^4)^2 = 10^8, yielding 2.25 \\times 10^8."
        },
        {
          "question": "A light year is approximately 9.5 \\times 10^{12} km. How far does light travel in 2 years?",
          "options": [
            "1.9 \\times 10^{13} km",
            "1.9 \\times 10^{12} km",
            "19 \\times 10^{13} km",
            "9.5 \\times 10^{24} km"
          ],
          "correctIndex": 0,
          "explanation": "9.5 \\times 10^{12} \\times 2 = 19 \\times 10^{12} = 1.9 \\times 10^{13} km."
        }
      ]
    },
    {
      "id": "1.5",
      "subtopicId": "1.5",
      "title": "Ratio & proportion, currency exchange",
      "digitizedText": "## Ratio & Proportion\n\n> [!NOTE]\n> **What is ratio?**\n> A ratio is a way of comparing two or more similar quantities.\n\n### Types of Ratio Problems\n\n```mermaid\ngraph TD\n    A[Ratio Problems] --> B(Sharing Ratio)\n    A --> C(Given One Value)\n    A --> D(Ratio Difference)\n```\n\n#### 1. Sharing Ratio\nThis involves dividing a total amount into a given ratio.\n- **Example:** Abu and Sam want to share \u00a3250 in the ratio of $2:3$.\n  - Total ratio parts = $2 + 3 = 5$\n  - Actual / Ratio (A/R) = $250 \\div 5 = 50$\n  - Abu gets $2 \\times 50 = \u00a3100$\n  - Sam gets $3 \\times 50 = \u00a3150$\n\n#### 2. Given One Value\nIn this type, you are given the ratio and the actual amount for one part.\n- **Example:** James has apples and oranges in the ratio $2:5$. He has $15$ oranges.\n  - $5 \\text{ parts} = 15 \\text{ oranges}$\n  - $1 \\text{ part} = 15 \\div 5 = 3$\n  - James has $2 \\times 3 = 6 \\text{ apples}$\n\n#### 3. Ratio Difference\nYou are given the ratio and the difference between two quantities.\n- **Example:** A bag contains yellow and blue blocks in the ratio $1:3$. There are $8$ more blue blocks than yellow blocks.\n  - Ratio difference = $3 - 1 = 2 \\text{ parts}$\n  - $2 \\text{ parts} = 8 \\text{ blocks}$\n  - $1 \\text{ part} = 4 \\text{ blocks}$\n  - Yellow blocks = $1 \\times 4 = 4$\n  - Blue blocks = $3 \\times 4 = 12$\n\n#### 4. Ratio in 3 Quantities\n- **Example:** Concrete is made by mixing cement, sand, and gravel in the ratio $1:2:3$. Mark needs $300\\text{kg}$ of concrete.\n  - Total ratio = $1 + 2 + 3 = 6 \\text{ parts}$\n  - $1 \\text{ part} = 300 \\div 6 = 50\\text{kg}$\n  - Cement needed = $1 \\times 50 = 50\\text{kg}$\n  - Gravel needed = $3 \\times 50 = 150\\text{kg}$\n\n## Currency Exchange\n\n> [!TIP]\n> **Rounding Rule for Money:** Money must always be rounded to 2 decimal places (2 d.p.) unless stated otherwise in the question.\n\n**Example 1: Converting to another currency**\nGregor changes $700 into euros (\u20ac). The exchange rate is \u20ac$1 = \\$1.4131$.\n- Amount he receives = $700 \\div 1.4131 = \u20ac495.36$ (rounded to 2 d.p.)\n\n**Example 2: Converting back**\nMartina changed $200$ Swiss Francs (CHF) into euros (\u20ac). The exchange rate is \u20ac$1 = 1.14\\text{ CHF}$.\n- Amount she receives = $200 \\div 1.14 = \u20ac175.44$\n",
      "quizzes": [
        {
          "question": "Share $350 in the ratio 2:5. How much is the smaller share?",
          "options": [
            "$50",
            "$100",
            "$140",
            "$250"
          ],
          "correctIndex": 1,
          "explanation": "Total parts = 7. 1 part = $350 / 7 = $50. The smaller share is 2 parts: 2 \\times 50 = $100."
        },
        {
          "question": "The ratio of boys to girls in a school is 4:5. If there are 220 boys, how many students are there in total?",
          "options": [
            "275",
            "440",
            "495",
            "550"
          ],
          "correctIndex": 2,
          "explanation": "4 parts = 220, so 1 part = 55. Total parts = 9. Total students = 9 \\times 55 = 495."
        },
        {
          "question": "A sum of money is shared between Alice, Bob, and Charlie in the ratio 3:4:5. Charlie receives $60. How much is the total sum of money?",
          "options": [
            "$144",
            "$120",
            "$100",
            "$180"
          ],
          "correctIndex": 0,
          "explanation": "Charlie's 5 parts = $60, so 1 part = $12. Total parts = 12. Total sum = 12 \\times 12 = $144."
        },
        {
          "question": "Concrete is made by mixing cement, sand, and gravel in the ratio 1:2:3. If a builder uses 150 kg of sand, how much concrete is produced?",
          "options": [
            "300 kg",
            "450 kg",
            "600 kg",
            "900 kg"
          ],
          "correctIndex": 1,
          "explanation": "Sand is 2 parts. 2 parts = 150 kg, so 1 part = 75 kg. Total concrete is 6 parts: 6 \\times 75 = 450 kg."
        },
        {
          "question": "A bag contains red and blue marbles in the ratio 2:7. There are 15 more blue marbles than red marbles. How many red marbles are there?",
          "options": [
            "6",
            "9",
            "15",
            "21"
          ],
          "correctIndex": 0,
          "explanation": "Difference in parts = 7 - 2 = 5. 5 parts = 15 marbles, so 1 part = 3 marbles. Red marbles (2 parts) = 2 \\times 3 = 6."
        },
        {
          "question": "Convert $500 to Euros (\u20ac) given the exchange rate \u20ac1 = $1.25.",
          "options": [
            "\u20ac400",
            "\u20ac500",
            "\u20ac625",
            "\u20ac750"
          ],
          "correctIndex": 0,
          "explanation": "Divide the amount by the exchange rate: 500 / 1.25 = \u20ac400."
        },
        {
          "question": "Emma buys a laptop for \u00a3450. The exchange rate is \u00a31 = \u00a5180 (Japanese Yen). What is the cost of the laptop in Yen?",
          "options": [
            "\u00a52.5",
            "\u00a581,000",
            "\u00a545,000",
            "\u00a518,000"
          ],
          "correctIndex": 1,
          "explanation": "Multiply the amount by the exchange rate: 450 \\times 180 = \u00a581,000."
        },
        {
          "question": "Gregor changes \u00a3200 into US Dollars ($). The rate is \u00a31 = $1.35. He later changes the money back to Pounds when the rate is \u00a31 = $1.40. How much does he have now (to 2 decimal places)?",
          "options": [
            "\u00a3192.86",
            "\u00a3200.00",
            "\u00a3207.41",
            "\u00a3270.00"
          ],
          "correctIndex": 0,
          "explanation": "First, \u00a3200 \\times 1.35 = $270. Then, $270 / 1.40 = \u00a3192.857..., which rounds to \u00a3192.86."
        }
      ]
    },
    {
      "id": "1.6",
      "title": "Power & roots (Memorize)",
      "notes": "No explicit handwritten notes found for this topic. However, essential rules to memorize:\n\n> [!NOTE]\n> **Powers (Indices) Rules:**\n> - $a^m \\times a^n = a^{m+n}$\n> - $a^m \\div a^n = a^{m-n}$\n> - $(a^m)^n = a^{mn}$\n> - $a^0 = 1$\n> - $a^{-n} = \\frac{1}{a^n}$\n> - $a^{\\frac{1}{n}} = \\sqrt[n]{a}$\n> - $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$\n",
      "questions": [
        {
          "question": "What is the value of $2^{-3}$?",
          "options": [
            "-8",
            "-6",
            "0.125",
            "0.0625"
          ],
          "answer": "0.125",
          "explanation": "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0.125$."
        },
        {
          "question": "Simplify $(3x^2y^4)^3$.",
          "options": [
            "$9x^6y^{12}$",
            "$27x^5y^7$",
            "$27x^6y^{12}$",
            "$9x^5y^7$"
          ],
          "answer": "$27x^6y^{12}$",
          "explanation": "Apply the power to each term: $3^3 \\times (x^2)^3 \\times (y^4)^3 = 27x^6y^{12}$."
        },
        {
          "question": "Evaluate $16^{\\frac{3}{4}}$.",
          "options": [
            "8",
            "12",
            "64",
            "2"
          ],
          "answer": "8",
          "explanation": "$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$."
        },
        {
          "question": "Which of the following is equivalent to $\\frac{x^5 \\times x^3}{x^2}$?",
          "options": [
            "$x^6$",
            "$x^{15}$",
            "$x^8$",
            "$x^4$"
          ],
          "answer": "$x^6$",
          "explanation": "Using exponent rules: $\\frac{x^5 \\times x^3}{x^2} = \\frac{x^8}{x^2} = x^{8-2} = x^6$."
        },
        {
          "question": "Solve for $x$: $5^{2x-1} = 125$.",
          "options": [
            "1",
            "2",
            "3",
            "1.5"
          ],
          "answer": "2",
          "explanation": "$125 = 5^3$. Therefore, $2x - 1 = 3 \\Rightarrow 2x = 4 \\Rightarrow x = 2$."
        },
        {
          "question": "Calculate $\\sqrt[3]{-64}$.",
          "options": [
            "-8",
            "8",
            "-4",
            "4"
          ],
          "answer": "-4",
          "explanation": "The cube root of a negative number is negative. $(-4) \\times (-4) \\times (-4) = -64$."
        },
        {
          "question": "Simplify $\\left(\\frac{2a^3}{b^2}\\right)^{-2}$.",
          "options": [
            "$\\frac{4a^6}{b^4}$",
            "$\\frac{b^4}{4a^6}$",
            "$\\frac{-4a^6}{b^4}$",
            "$\\frac{b^4}{2a^6}$"
          ],
          "answer": "$\\frac{b^4}{4a^6}$",
          "explanation": "First invert the fraction to make the exponent positive: $\\left(\\frac{b^2}{2a^3}\\right)^2$. Then apply the power: $\\frac{b^4}{4a^6}$."
        },
        {
          "question": "What is the value of $(8^0 + 4^{-1})^{-1}$?",
          "options": [
            "0.8",
            "1.25",
            "0.25",
            "1.5"
          ],
          "answer": "0.8",
          "explanation": "$8^0 = 1$ and $4^{-1} = 0.25$. So, $(1 + 0.25)^{-1} = 1.25^{-1} = \\frac{1}{1.25} = \\frac{1}{5/4} = \\frac{4}{5} = 0.8$."
        }
      ]
    },
    {
      "id": "1.7",
      "title": "Percentages, simple interest, compound interest",
      "notes": "## 1.7 Simple Interest & Compound Interest\n\n> [!NOTE]\n> **Simple Interest, $I$**\n> $$ I = \\frac{P \\times r \\times t}{100} $$\n>\n> - **$P$** = Principal\n> - **$r$** = rate (%)\n> - **$t$** = time in years\n\n### Example\nRiza saves RM 600 in Bank A.\nBank A gives $2.5\\%$ simple interest.\n**a) How much is the interest after 4 years?**\n$I = 600 \\times \\frac{2.5}{100} \\times 4$\n$I = \\text{RM } 60$\n\n**b) How much is the total saving after 4 years?**\n$\\text{Total} = P + I$\n$= 600 + 60$\n$= \\text{RM } 660$\n\n---\n\n> [!NOTE]\n> **Compound Interest**\n> $$ A = P \\left(1 + \\frac{r}{100}\\right)^t $$\n>\n> - **$P$** = Principal\n> - **$r$** = rate (%) $\\rightarrow \\frac{r}{100}$\n> - **$t$** = time in years\n> - **$A$** = Amount after $t$ years\n>\n> ```mermaid\n> graph LR\n>   A[Principal] -->|Add Interest| B[Year 1 Amount]\n>   B -->|Add Interest on New Amount| C[Year 2 Amount]\n>   C -->|...| D[Year t Amount]\n> ```\n\n### Example\nRiza saves RM 600 in Bank B.\nBank B gives $2.5\\%$ compound interest. How much is his saving after 4 years?\n\n**Year by year breakdown:**\n- 2020: $600 \\times 2.5\\% = 15$\n- 2021: $615 \\times 2.5\\% = 15.375$\n- 2022: $630.375 \\times 102.5\\% = 646.13$\n- 2023: $646.13 \\times 102.5\\% = 662.29$\n\n**Using formula:**\n$A = 600 \\left(1 + \\frac{2.5}{100}\\right)^4$\n$A = \\text{RM } 662.29$\n\n**To find the interest:**\n$I = A - P$\n$I = 662.29 - 600$\n$I = \\text{RM } 62.29$",
      "questions": [
        {
          "question": "A bank offers a simple interest rate of $4\\%$ per year. If $\\$500$ is invested, what is the total interest earned after 3 years?",
          "options": [
            "$\\$60$",
            "$\\$560$",
            "$\\$20$",
            "$\\$62.43$"
          ],
          "answer": "$\\$60$",
          "explanation": "$I = \\frac{Prt}{100} = \\frac{500 \\times 4 \\times 3}{100} = 60$."
        },
        {
          "question": "John invests $\\$1200$ in a savings account that pays $5\\%$ compound interest per year. What is the total amount in the account after 2 years?",
          "options": [
            "$\\$1320.00$",
            "$\\$1323.00$",
            "$\\$123.00$",
            "$\\$1260.00$"
          ],
          "answer": "$\\$1323.00$",
          "explanation": "$A = 1200 \\left(1 + \\frac{5}{100}\\right)^2 = 1200 \\times 1.05^2 = 1323$."
        },
        {
          "question": "A car was bought for $\\$15,000$. Its value depreciates by $10\\%$ each year. What is the value of the car after 3 years?",
          "options": [
            "$\\$10,500$",
            "$\\$10,935$",
            "$\\$11,500$",
            "$\\$12,150$"
          ],
          "answer": "$\\$10,935$",
          "explanation": "$A = 15000 \\left(1 - \\frac{10}{100}\\right)^3 = 15000 \\times 0.9^3 = 10935$."
        },
        {
          "question": "Paula invests $\\$600$ at a rate of $r\\%$ per year simple interest. At the end of 10 years, the total interest earned is $\\$90$. What is the value of $r$?",
          "options": [
            "1.5",
            "2",
            "2.5",
            "15"
          ],
          "answer": "1.5",
          "explanation": "$I = \\frac{Prt}{100} \\Rightarrow 90 = \\frac{600 \\times r \\times 10}{100} \\Rightarrow 90 = 60r \\Rightarrow r = 1.5$."
        },
        {
          "question": "A shirt is priced at $\\$40$. During a sale, it is discounted by $20\\%$. What is the sale price of the shirt?",
          "options": [
            "$\\$8$",
            "$\\$30$",
            "$\\$32$",
            "$\\$20$"
          ],
          "answer": "$\\$32$",
          "explanation": "Discount $= 0.20 \\times 40 = 8$. Sale price $= 40 - 8 = 32$."
        },
        {
          "question": "The population of a town increases from $20,000$ to $25,000$. What is the percentage increase?",
          "options": [
            "$20\\%$",
            "$25\\%$",
            "$30\\%$",
            "$5\\%$"
          ],
          "answer": "$25\\%$",
          "explanation": "Percentage increase $= \\frac{\\text{Difference}}{\\text{Original}} \\times 100 = \\frac{5000}{20000} \\times 100 = 25\\%$."
        },
        {
          "question": "Hazel invests $\\$1800$ for 7 years at a rate of $1.5\\%$ per year compound interest. How much total interest will she receive after 7 years? (Correct to nearest dollar)",
          "options": [
            "$\\$189$",
            "$\\$198$",
            "$\\$1998$",
            "$\\$201$"
          ],
          "answer": "$\\$198$",
          "explanation": "Total Amount $= 1800 \\left(1 + \\frac{1.5}{100}\\right)^7 = 1800 \\times 1.015^7 \\approx 1997.74$. Interest $= 1997.74 - 1800 = 197.74$, nearest dollar is $\\$198$."
        },
        {
          "question": "A price includes a $15\\%$ tax. If the total price is $\\$230$, what was the price before tax?",
          "options": [
            "$\\$200$",
            "$\\$195.50$",
            "$\\$264.50$",
            "$\\$215$"
          ],
          "answer": "$\\$200$",
          "explanation": "Let original price be $x$. $x \\times 1.15 = 230 \\Rightarrow x = \\frac{230}{1.15} = 200$."
        }
      ]
    },
    {
      "id": "1.8",
      "title": "Speed, distance, time",
      "notes": "# 1.8 Speed, Distance, and Time\n\n> [!NOTE]\n> **Basic Formulas**\n> - **Speed** = $\\frac{\\text{Distance}}{\\text{Time}}$ (Rate of distance over time)\n> - **Average Speed** = $\\frac{\\text{Total Distance}}{\\text{Total Time}}$\n> \n> You can also rearrange to find distance or time:\n> - $\\text{Distance} = \\text{Speed} \\times \\text{Time}$\n> - $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$\n\n### Time Calculation\n\n> [!TIP]\n> **Calculating Duration**\n> - **Same day:** $\\text{Duration} = \\text{Final Time} - \\text{Initial Time}$ (use 24-hour system)\n> - **Different day:** Calculate the time until midnight on the first day, then add the time of the next day.\n> - **Different timezone:**\n>   - Destination is ahead: Subtract timezone difference from arrival time to find local departure time.\n>   - Destination is behind: Add timezone difference.\n\n### Unit Conversions\n\n> [!IMPORTANT]\n> To convert from **km/h to m/s**, multiply by $\\frac{1000}{3600}$.\n> Example: $45 \\text{ km/h} = 45 \\times \\frac{1000}{3600} \\text{ m/s} = 12.5 \\text{ m/s}$\n\n### Graph of Motion\n\n#### Distance vs Time Graph\n- **Gradient** = Speed ($m = \\frac{\\text{height}}{\\text{base}}$)\n- A horizontal line means the object is stationary (no movement).\n\n```mermaid\nxychart-beta\n    title \"Distance vs Time Graph Example\"\n    x-axis \"Time (s)\" [0, 3, 6, 8, 10]\n    y-axis \"Distance (m)\" 0 --> 10\n    line [0, 6, 6, 10, 0]\n```\n\n#### Speed vs Time Graph\n- **Gradient** = Acceleration / Deceleration\n- **Area under graph** = Distance travelled\n\n```mermaid\nxychart-beta\n    title \"Speed vs Time Graph Example\"\n    x-axis \"Time (s)\" [0, 4, 10, 12]\n    y-axis \"Speed (m/s)\" 0 --> 10\n    line [0, 8, 8, 0]\n```",
      "questions": [
        {
          "question": "A car travels 120 km in 1 hour and 30 minutes. What is its average speed in km/h?",
          "options": [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "180 km/h"
          ],
          "answer": "80 km/h",
          "explanation": "Average speed = Total distance / Total time. Time is 1.5 hours. Speed = 120 / 1.5 = 80 km/h."
        },
        {
          "question": "Convert 90 km/h to m/s.",
          "options": [
            "15 m/s",
            "20 m/s",
            "25 m/s",
            "30 m/s"
          ],
          "answer": "25 m/s",
          "explanation": "Multiply by 1000 to convert to meters and divide by 3600 to convert to seconds. 90 * (1000 / 3600) = 25 m/s."
        },
        {
          "question": "A train leaves a station at 08:45 and arrives at its destination at 14:15 on the same day. How long did the journey take?",
          "options": [
            "5 hours 30 mins",
            "6 hours 30 mins",
            "4 hours 30 mins",
            "5 hours 15 mins"
          ],
          "answer": "5 hours 30 mins",
          "explanation": "From 08:45 to 14:15. Subtracting using 24h format: 14:15 - 08:45 = 5 hours 30 mins."
        },
        {
          "question": "A flight leaves Paris (local time 09:00) and arrives in Istanbul 4 hours and 30 minutes later. If Istanbul is 2 hours ahead of Paris, what is the local arrival time in Istanbul?",
          "options": [
            "11:30",
            "13:30",
            "15:30",
            "17:30"
          ],
          "answer": "15:30",
          "explanation": "Departure time + flight duration = 09:00 + 4h 30m = 13:30 (Paris time). Add 2 hours for the timezone difference = 15:30 (Istanbul time)."
        },
        {
          "question": "On a distance-time graph, what does a horizontal line represent?",
          "options": [
            "Constant acceleration",
            "Constant velocity",
            "The object is stationary",
            "Deceleration"
          ],
          "answer": "The object is stationary",
          "explanation": "A horizontal line means distance is not changing as time passes, which means the object is stationary."
        },
        {
          "question": "A particle's speed-time graph shows a triangle with a base of 10 seconds and a height of 15 m/s. What is the total distance travelled?",
          "options": [
            "150 m",
            "75 m",
            "300 m",
            "1.5 m"
          ],
          "answer": "75 m",
          "explanation": "Distance is the area under the speed-time graph. Area of a triangle = 1/2 * base * height = 1/2 * 10 * 15 = 75 m."
        },
        {
          "question": "If a car accelerates uniformly from 0 to 20 m/s in 5 seconds, what is its acceleration?",
          "options": [
            "2 m/s\u00b2",
            "3 m/s\u00b2",
            "4 m/s\u00b2",
            "5 m/s\u00b2"
          ],
          "answer": "4 m/s\u00b2",
          "explanation": "Acceleration is the gradient of a speed-time graph. a = (v - u) / t = (20 - 0) / 5 = 4 m/s\u00b2."
        },
        {
          "question": "A cyclist travels for 2 hours at 15 km/h and then for 3 hours at 10 km/h. What is the average speed for the whole journey?",
          "options": [
            "12 km/h",
            "12.5 km/h",
            "11.5 km/h",
            "13 km/h"
          ],
          "answer": "12 km/h",
          "explanation": "First part distance = 2 * 15 = 30 km. Second part distance = 3 * 10 = 30 km. Total distance = 60 km. Total time = 5 hours. Average speed = 60 / 5 = 12 km/h."
        }
      ]
    },
    {
      "id": "1.9",
      "title": "Map scales",
      "notes": "# 1.9 Map Scales\n\n> [!NOTE]\n> **Understanding Scales**\n> A map scale is written as a ratio representing $\\text{Distance on paper} : \\text{Actual distance}$.\n> For example, a scale of $1 : 100,000$ means $1 \\text{ cm}$ on the map represents $100,000 \\text{ cm}$ in reality.\n\n### Converting Scales\n\n> [!TIP]\n> **Useful Conversions:**\n> - $1 \\text{ km} = 1000 \\text{ m} = 100,000 \\text{ cm}$\n> - $1 \\text{ m} = 100 \\text{ cm}$\n> \n> **Converting to $1 : n$ form:**\n> Ensure both sides are in the same units (usually cm) before removing units.\n> Example: Convert $5 \\text{ cm} : 10 \\text{ km}$ to $1 : n$\n> - Divide by 5: $1 \\text{ cm} : 2 \\text{ km}$\n> - Convert km to cm: $1 \\text{ cm} : 200,000 \\text{ cm}$\n> - Final scale: $1 : 200,000$\n\n### Area Scale vs Distance Scale\n\n> [!WARNING]\n> **Area Scale $\\neq$ Distance Scale**\n> The area scale is the square of the distance scale.\n> \n> If Distance Scale is $1 \\text{ cm} : 5 \\text{ km}$,\n> Then Area Scale is $(1 \\text{ cm})^2 : (5 \\text{ km})^2 \\Rightarrow 1 \\text{ cm}^2 : 25 \\text{ km}^2$.\n\n```mermaid\nflowchart LR\n    A[\"Distance Scale: 1 cm = 5 km\"] --> B[\"Square both sides\"]\n    B --> C[\"Area Scale: 1 cm\u00b2 = 25 km\u00b2\"]\n```",
      "questions": [
        {
          "question": "A map has a scale of 1 : 50,000. What actual distance, in km, does 4 cm on the map represent?",
          "options": [
            "2 km",
            "20 km",
            "0.2 km",
            "200 km"
          ],
          "answer": "2 km",
          "explanation": "4 cm represents 4 * 50,000 = 200,000 cm. Converting 200,000 cm to km: 200,000 / 100,000 = 2 km."
        },
        {
          "question": "The actual distance between two cities is 120 km. On a map with a scale of 1 : 300,000, what is the distance between them in cm?",
          "options": [
            "4 cm",
            "40 cm",
            "400 cm",
            "0.4 cm"
          ],
          "answer": "40 cm",
          "explanation": "Convert 120 km to cm: 120 * 100,000 = 12,000,000 cm. Distance on map = 12,000,000 / 300,000 = 40 cm."
        },
        {
          "question": "Convert the scale 2 cm : 5 km into the ratio 1 : n.",
          "options": [
            "1 : 25,000",
            "1 : 250,000",
            "1 : 2,500,000",
            "1 : 2,500"
          ],
          "answer": "1 : 250,000",
          "explanation": "Divide by 2: 1 cm : 2.5 km. Convert km to cm: 2.5 * 100,000 = 250,000 cm. Ratio is 1 : 250,000."
        },
        {
          "question": "A map has a scale of 1 : 25,000. An area of land is represented by 8 cm\u00b2 on the map. What is the actual area in km\u00b2?",
          "options": [
            "0.5 km\u00b2",
            "5 km\u00b2",
            "50 km\u00b2",
            "2 km\u00b2"
          ],
          "answer": "0.5 km\u00b2",
          "explanation": "Scale 1 cm : 25,000 cm means 1 cm : 0.25 km. Area scale = 1 cm\u00b2 : (0.25)\u00b2 km\u00b2 = 1 cm\u00b2 : 0.0625 km\u00b2. 8 cm\u00b2 = 8 * 0.0625 = 0.5 km\u00b2."
        },
        {
          "question": "The actual area of a lake is 45 km\u00b2. On a map with a scale of 1 cm : 3 km, what is the area of the lake on the map?",
          "options": [
            "15 cm\u00b2",
            "9 cm\u00b2",
            "5 cm\u00b2",
            "3 cm\u00b2"
          ],
          "answer": "5 cm\u00b2",
          "explanation": "Distance scale is 1 cm : 3 km. Area scale is (1 cm)\u00b2 : (3 km)\u00b2 -> 1 cm\u00b2 : 9 km\u00b2. Area on map = 45 / 9 = 5 cm\u00b2."
        },
        {
          "question": "A map is drawn to a scale of 1 : 100,000. Find the actual length of a road which is 7.5 cm on the map. Give your answer in km.",
          "options": [
            "7.5 km",
            "75 km",
            "0.75 km",
            "750 km"
          ],
          "answer": "7.5 km",
          "explanation": "Actual distance = 7.5 * 100,000 = 750,000 cm. Convert to km: 750,000 / 100,000 = 7.5 km."
        },
        {
          "question": "The scale of a map is 1 : 20,000. A park has an area of 15 cm\u00b2 on the map. Calculate the actual area of the park in hectares (1 km\u00b2 = 100 hectares).",
          "options": [
            "6 hectares",
            "60 hectares",
            "30 hectares",
            "15 hectares"
          ],
          "answer": "60 hectares",
          "explanation": "1 cm : 0.2 km. Area scale: 1 cm\u00b2 : 0.04 km\u00b2. Actual area = 15 * 0.04 = 0.6 km\u00b2. Convert to hectares: 0.6 * 100 = 60 hectares."
        },
        {
          "question": "A plan of a house is drawn to a scale of 1 : 50. If the actual length of the living room is 6 m, what is its length on the plan?",
          "options": [
            "12 cm",
            "3 cm",
            "1.2 cm",
            "30 cm"
          ],
          "answer": "12 cm",
          "explanation": "Actual length in cm = 6 * 100 = 600 cm. Plan length = 600 / 50 = 12 cm."
        }
      ]
    },
    {
      "id": "c1_set_notation",
      "title": "1.10 Set notation & Venn diagram",
      "image": "0580-ext-math/images/77_IMG_20260330_094853.jpg",
      "digitizedText": "# Chapter 1: Numbers\n\n## (10) Set notation & Venn Diagram\n\n> [!NOTE]\n> **What is a set?**\n> A set is a collection of objects, defined by certain rules.\n\n### Set Notations\n*   **$\\xi$** : Universal set\n*   **$\\in$** : is an element of\n*   **$\\notin$** : is not an element of\n*   **$n(A)$** : number of elements in set $A$\n*   **$\\cap$** : intersect (common elements)\n*   **$\\cup$** : union (all elements)\n*   **$A'$** : complementary of $A$ (all elements except $A$)\n*   **$\\emptyset$ or $\\{\\}$** : null set\n\n### Examples\nGiven the universal set $\\xi$ = Whole numbers from 1 to 10 inclusive:\n*   $A = \\{\\text{Even numbers}\\}=\\{2,4,6,8,10\\}$\n*   $B = \\{\\text{Odd numbers}\\}=\\{1,3,5,7,9\\}$\n*   $C = \\{\\text{Prime numbers}\\}=\\{2,3,5,7\\}$\n\nWe can apply the notations as follows:\n*   $3 \\in \\text{set } B$\n*   $5 \\notin \\text{set } A$\n*   $A \\cap B = \\emptyset \\text{ or } \\{\\}$\n*   $A \\cap C = \\{2\\}$\n*   $B \\cup C = \\{1, 2, 3, 5, 7, 9\\}$\n\n---\n\n### Venn Diagrams\nVisual representation of sets.\n\n**Example 3:**\n$\\xi = \\{\\text{Pupils in } Y7\\}$\n$P = \\text{Piano players}$\n$V = \\text{Violin players}$\n$C = \\text{Cello players}$\n\n> [!TIP]\n> Fred says 'Everyone in Y7 who plays the cello also plays the violin'.\n> Fred is right because set $C$ is a subset of set $V$.\n\n```mermaid\nflowchart LR\n    subgraph Universal[Y7 Pupils: 85 total]\n        direction LR\n        P((Piano: 15 only))\n        V((Violin: 12 only))\n        P_V((Piano & Violin: 4))\n        C((Cello: 7 only))\n        P_C((Piano & Cello: 3))\n        None[Neither: 44]\n        \n        P --- P_V\n        V --- P_V\n        C -. Subset of .- V\n        P --- P_C\n        C --- P_C\n    end\n```\n\n**Example 4:**\n30 people took part in a survey. 16 of them said they owned cars, and 12 said they owned bicycles. 6 said they owned neither a car nor a bicycle.\n\n*   $16 - x + x + 12 - x + 6 = 30$\n*   $34 - x = 30$\n*   $x = 4$\n\nSo, 4 people owned both a car and a bicycle.\n\n```mermaid\nflowchart TD\n    subgraph Survey [30 People Surveyed]\n        Car((Car Only: 12))\n        Both((Both: 4))\n        Bike((Bicycle Only: 8))\n        Car --- Both --- Bike\n        Neither[Neither: 6]\n    end\n```\n",
      "quizzes": [
        {
          "question": "Which symbol is used to denote the universal set?",
          "options": [
            "$\\xi$",
            "$\\emptyset$",
            "$\\cup$",
            "$\\in$"
          ],
          "correctIndex": 0,
          "explanation": "The universal set is denoted by the Greek letter $\\xi$ (xi), containing all elements under consideration."
        },
        {
          "question": "If $A = \\{2, 4, 6, 8\\}$ and $B = \\{4, 8, 12\\}$, what is $A \\cap B$?",
          "options": [
            "$\\{2, 4, 6, 8, 12\\}$",
            "$\\{4, 8\\}$",
            "$\\{2, 6\\}$",
            "$\\emptyset$"
          ],
          "correctIndex": 1,
          "explanation": "The intersection $A \\cap B$ contains elements that are common to both sets, which are 4 and 8."
        },
        {
          "question": "In a class of 40 students, 25 study History and 20 study Geography. If 5 students study neither subject, how many students study both subjects?",
          "options": [
            "10",
            "15",
            "5",
            "8"
          ],
          "correctIndex": 0,
          "explanation": "Total students taking at least one subject = $40 - 5 = 35$. The sum of History and Geography students is $25 + 20 = 45$. The number studying both is $45 - 35 = 10$."
        },
        {
          "question": "What does the notation $A'$ represent?",
          "options": [
            "All elements in set A",
            "The number of elements in set A",
            "The complement of set A",
            "The universal set"
          ],
          "correctIndex": 2,
          "explanation": "$A'$ represents the complement of set A, which includes all elements in the universal set that are not in set A."
        },
        {
          "question": "Given $\\xi = \\{x: x \\text{ is a positive integer } \\le 10\\}$ and $C = \\{x: x \\text{ is a prime number}\\}$. Find $n(C)$.",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "correctIndex": 1,
          "explanation": "The universal set is $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$. The prime numbers in this set are $\\{2, 3, 5, 7\\}$. So, $n(C) = 4$."
        },
        {
          "question": "If set $X$ is a subset of set $Y$, which of the following must be true?",
          "options": [
            "$X \\cup Y = X$",
            "$X \\cap Y = Y$",
            "$X \\cap Y = X$",
            "$X' \\subset Y'$"
          ],
          "correctIndex": 2,
          "explanation": "If $X \\subset Y$, then all elements of X are also in Y. Therefore, their intersection is exactly the set X."
        },
        {
          "question": "Let $\\xi$ = {days of the week}, $T$ = {days starting with letter T}, and $S$ = {days starting with letter S}. Which statement is true?",
          "options": [
            "$T \\cap S = \\emptyset$",
            "$n(T \\cup S) = 5$",
            "$T \\subset S$",
            "$n(T) = 3$"
          ],
          "correctIndex": 0,
          "explanation": "T = {Tuesday, Thursday} and S = {Saturday, Sunday}. They have no elements in common, so their intersection is the empty set."
        },
        {
          "question": "Which region is represented by the notation $(A \\cup B)'$?",
          "options": [
            "The region inside both A and B",
            "The region outside both A and B",
            "The region inside A but outside B",
            "The entire Venn diagram"
          ],
          "correctIndex": 1,
          "explanation": "$(A \\cup B)'$ is the complement of the union of A and B, which means everything outside the circles of A and B."
        }
      ]
    },
    {
      "id": "c1_surds",
      "title": "1.11 Surds",
      "image": "0580-ext-math/images/89_IMG_20260406_094642.jpg",
      "digitizedText": "# Chapter 1: Numbers\n\n## (11) Surds\n\n> [!NOTE]\n> **What is a surd?**\n> A surd is an irrational number (it cannot be expressed as a simple fraction). \n> For example: $\\sqrt{3}, \\sqrt{5}, \\sqrt{10}, \\sqrt{12}$ are surds. $\\sqrt{25}$ and $\\sqrt{100}$ are NOT surds because they evaluate to whole numbers.\n\n### Simplifying Surds\nSome surds can be simplified. Only surds with perfect square factors can be simplified.\n\nTake $\\sqrt{12}$ for example:\nThe factors of 12 are (1, 12), (2, 6), and (3, **4**). Since 4 is a perfect square:\n$$\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4} \\times \\sqrt{3} = 2\\sqrt{3}$$\n\n**More Examples:**\n*   $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$\n*   $\\sqrt{2} \\times \\sqrt{6} = \\sqrt{12} = 2\\sqrt{3}$\n*   $\\sqrt{7} \\times \\sqrt{8} = \\sqrt{56} = 2\\sqrt{14}$\n*   $\\sqrt{9} \\times \\sqrt{3} = 3\\sqrt{3}$\n*   $\\sqrt{8} \\times \\sqrt{4} = \\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}$\n\n> [!TIP]\n> Always look for the largest perfect square factor to simplify completely. For instance, $\\sqrt{32}$ could be $\\sqrt{4} \\times \\sqrt{8} = 2\\sqrt{8}$, but this is not the simplest form because 8 still has a perfect square factor. The simplest form is $\\sqrt{16} \\times \\sqrt{2} = 4\\sqrt{2}$.\n\n### Multiplying Surds\nMultiply the numbers outside the root together, and the numbers inside the root together.\n*   $2\\sqrt{3} \\times 3\\sqrt{5} = 6\\sqrt{15}$\n*   $7\\sqrt{2} \\times 4\\sqrt{11} = 28\\sqrt{22}$\n*   $2\\sqrt{13} \\times 2\\sqrt{2} = 4\\sqrt{26}$\n*   $10\\sqrt{2} \\times 5\\sqrt{3} = 50\\sqrt{6}$\n*   $2\\sqrt{2} \\times 3\\sqrt{8} = 6\\sqrt{16} = 6(4) = 24$\n\n### Rationalising Surds\nRationalising surds only happens for the denominator. A surd as a denominator is considered to be an unsimplified fraction. To rationalize the denominator, multiply the whole fraction by a 'conjugate'.\n\n**Examples:**\n*   $\\frac{1}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$\n*   $\\frac{2}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$\n*   $\\frac{5\\sqrt{5}}{\\sqrt{20}} = \\frac{5\\sqrt{5}}{2\\sqrt{5}} = \\frac{5}{2}$\n*   $\\frac{\\sqrt{2} + 1}{\\sqrt{5}} = \\frac{(\\sqrt{2} + 1) \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{\\sqrt{10} + \\sqrt{5}}{5}$\n*   $\\frac{2 - \\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3} - 3}{3}$\n\n### Operations Involving Surds (Addition & Subtraction)\nConsider the surd to be an unknown variable (like $7x - x = 6x$).\n\n**Examples:**\n*   $2\\sqrt{2} + 5\\sqrt{2} = 7\\sqrt{2}$\n*   $7\\sqrt{3} - \\sqrt{3} = 6\\sqrt{3}$\n*   $\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$\n*   $\\sqrt{50} - \\sqrt{8} = 5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$\n*   $4\\sqrt{80} + 3\\sqrt{45} = 4(4\\sqrt{5}) + 3(3\\sqrt{5}) = 16\\sqrt{5} + 9\\sqrt{5} = 25\\sqrt{5}$\n",
      "quizzes": [
        {
          "question": "Which of the following is a surd?",
          "options": [
            "$\\sqrt{16}$",
            "$\\sqrt{20}$",
            "$\\sqrt{100}$",
            "$0.5$"
          ],
          "correctIndex": 1,
          "explanation": "A surd is an irrational number expressed as a root. $\\sqrt{16}=4$ and $\\sqrt{100}=10$ are rational, but $\\sqrt{20}$ cannot be simplified to a rational number."
        },
        {
          "question": "Simplify $\\sqrt{72}$ completely.",
          "options": [
            "$3\\sqrt{8}$",
            "$2\\sqrt{18}$",
            "$6\\sqrt{2}$",
            "$36\\sqrt{2}$"
          ],
          "correctIndex": 2,
          "explanation": "Find the largest perfect square factor: $\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$."
        },
        {
          "question": "Calculate and simplify: $\\sqrt{3} \\times \\sqrt{15}$.",
          "options": [
            "$\\sqrt{18}$",
            "$3\\sqrt{5}$",
            "$9\\sqrt{5}$",
            "$5\\sqrt{3}$"
          ],
          "correctIndex": 1,
          "explanation": "$\\sqrt{3} \\times \\sqrt{15} = \\sqrt{45}$. Simplifying gives $\\sqrt{9 \\times 5} = 3\\sqrt{5}$."
        },
        {
          "question": "Expand and simplify: $\\sqrt{8} + \\sqrt{50}$.",
          "options": [
            "$\\sqrt{58}$",
            "$7\\sqrt{2}$",
            "$4\\sqrt{58}$",
            "$10\\sqrt{2}$"
          ],
          "correctIndex": 1,
          "explanation": "$\\sqrt{8} = 2\\sqrt{2}$ and $\\sqrt{50} = 5\\sqrt{2}$. Adding them gives $2\\sqrt{2} + 5\\sqrt{2} = 7\\sqrt{2}$."
        },
        {
          "question": "Rationalise the denominator of $\\frac{14}{\\sqrt{7}}$.",
          "options": [
            "$2\\sqrt{7}$",
            "$14\\sqrt{7}$",
            "$\\frac{\\sqrt{7}}{2}$",
            "$7\\sqrt{2}$"
          ],
          "correctIndex": 0,
          "explanation": "Multiply numerator and denominator by $\\sqrt{7}$ to get $\\frac{14\\sqrt{7}}{7}$, which simplifies to $2\\sqrt{7}$."
        },
        {
          "question": "Expand and simplify: $(3 + \\sqrt{2})(3 - \\sqrt{2})$.",
          "options": [
            "$7$",
            "$11$",
            "$9 - 2\\sqrt{2}$",
            "$5$"
          ],
          "correctIndex": 0,
          "explanation": "Using the difference of two squares: $3^2 - (\\sqrt{2})^2 = 9 - 2 = 7$."
        },
        {
          "question": "Simplify: $\\frac{\\sqrt{80}}{\\sqrt{5}}$.",
          "options": [
            "$\\sqrt{75}$",
            "$16$",
            "$4$",
            "$4\\sqrt{5}$"
          ],
          "correctIndex": 2,
          "explanation": "$\\frac{\\sqrt{80}}{\\sqrt{5}} = \\sqrt{\\frac{80}{5}} = \\sqrt{16} = 4$."
        },
        {
          "question": "Rationalise the denominator of $\\frac{\\sqrt{3}}{\\sqrt{6}}$.",
          "options": [
            "$\\frac{\\sqrt{2}}{2}$",
            "$\\frac{1}{2}$",
            "$\\sqrt{2}$",
            "$\\frac{\\sqrt{18}}{6}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\frac{\\sqrt{3}}{\\sqrt{6}} = \\sqrt{\\frac{3}{6}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}}$. Rationalising gives $\\frac{\\sqrt{2}}{2}$."
        }
      ]
    }
  ],
  "0606-add-math": [],
  "0625-physics": [
    {
      "subtopicId": "1.1",
      "title": "Physical Quantities and Measurement Techniques",
      "digitizedText": "# 1.1 Physical Quantities and Measurement Techniques\n\nWelcome to Physics! Our first step is to understand how we measure the world around us. In physics, we deal with **physical quantities**\u2014things we can measure, like length, time, or mass. \n\n![Derived Quantities](/0625-physics/images/main_p1_i0.png)\n\n### Base and Derived Quantities\nWe have **Base Quantities**, which are the fundamental building blocks (like Mass in kg, Length in m, Time in s). From these, we get **Derived Quantities** by combining base quantities using multiplication or division.\n*   **Area**: Length \u00d7 Length = $m^2$\n*   **Volume**: Length \u00d7 Length \u00d7 Length = $m^3$\n*   **Velocity**: Length \u00f7 Time = $m/s$ or $m s^{-1}$\n*   **Density**: Mass \u00f7 Volume = $kg/m^3$\n\n![Prefixes](/0625-physics/images/main_p2_i0.png)\n\n### Prefixes\nSometimes numbers are too big or too small, so we use **prefixes** to make them easier to read:\n*   **Giga (G)**: $10^9$ (1,000,000,000)\n*   **Mega (M)**: $10^6$ (1,000,000)\n*   **kilo (k)**: $10^3$ (1,000)\n*   **deci (d)**: $10^{-1}$ (0.1)\n*   **centi (c)**: $10^{-2}$ (0.01)\n*   **milli (m)**: $10^{-3}$ (0.001)\n*   **micro ($\\mu$)**: $10^{-6}$ (0.000001)\n*   **nano (n)**: $10^{-9}$ (0.000000001)\n\n![Measuring Time and Length](/0625-physics/images/main_p3_i0.png)\n\n### Measuring Time: The Pendulum\nA simple pendulum swings back and forth. The time taken to complete **one full oscillation** (from point A to B and back to A) is called the **Period (T)**.\n*   To find the period accurately, time 10 or 20 oscillations and divide the total time by the number of oscillations.\n*   **Important rule**: The period of a pendulum depends **only on its length**. It does *not* depend on the mass of the bob!\n\n### Measuring Length: Micrometer Screw Gauge\nFor very thin objects (like a piece of wire), a ruler isn't precise enough. We use a **Micrometer Screw Gauge**. \n*   It has a **Main Scale** (in mm) and a **Thimble Scale** (rotating part).\n*   **Reading = Main Scale Reading + Thimble Scale Reading**.\n*   In the example shown, if the main scale shows $3.5\\text{ mm}$ and the thimble aligns at $0.12\\text{ mm}$, the total reading is $3.5 + 0.12 = 3.62\\text{ mm}$.\n",
      "quizzes": [
        {
          "question": "Which of the following is a base quantity?",
          "options": [
            "Velocity",
            "Density",
            "Mass",
            "Force"
          ],
          "answer": "Mass",
          "explanation": "Mass is a fundamental base quantity. Velocity, density, and force are derived from base quantities."
        },
        {
          "question": "What is the SI unit for volume?",
          "options": [
            "m^2",
            "m^3",
            "kg/m^3",
            "cm^2"
          ],
          "answer": "m^3",
          "explanation": "Volume is length x length x length, so the standard SI unit is cubic meters (m^3)."
        },
        {
          "question": "What does the prefix 'micro' (\\u03bc) represent?",
          "options": [
            "10^-3",
            "10^6",
            "10^-6",
            "10^-9"
          ],
          "answer": "10^-6",
          "explanation": "Micro represents one millionth, or 10^-6."
        },
        {
          "question": "A student wants to measure the period of a pendulum. What is the most accurate method?",
          "options": [
            "Measure the time for 1 oscillation.",
            "Measure the time for 10 oscillations and divide by 10.",
            "Measure the time for half an oscillation and multiply by 2.",
            "Weigh the pendulum bob."
          ],
          "answer": "Measure the time for 10 oscillations and divide by 10.",
          "explanation": "Timing multiple oscillations reduces the effect of human reaction time error."
        },
        {
          "question": "What factor affects the period of a simple pendulum?",
          "options": [
            "Mass of the bob",
            "Amplitude of the swing",
            "Length of the string",
            "The material of the bob"
          ],
          "answer": "Length of the string",
          "explanation": "The period of a pendulum depends only on its length and the gravitational field strength."
        },
        {
          "question": "Which instrument is most suitable for measuring the diameter of a thin copper wire?",
          "options": [
            "Measuring tape",
            "Meter rule",
            "Vernier caliper",
            "Micrometer screw gauge"
          ],
          "answer": "Micrometer screw gauge",
          "explanation": "A micrometer screw gauge is used for very small and precise measurements like the diameter of a wire."
        },
        {
          "question": "A micrometer shows a main scale reading of 5.5 mm and a thimble reading of 0.24 mm. What is the total reading?",
          "options": [
            "5.26 mm",
            "5.74 mm",
            "5.524 mm",
            "7.9 mm"
          ],
          "answer": "5.74 mm",
          "explanation": "Total reading = Main scale + Thimble scale = 5.5 + 0.24 = 5.74 mm."
        }
      ]
    },
    {
      "subtopicId": "1.2",
      "title": "Motion",
      "digitizedText": "# 1.2 Motion\n\nIn physics, understanding how things move is called kinematics. Before we dive into motion, we must distinguish between two types of quantities.\n\n![Scalar and Vector Quantities](/0625-physics/images/main_p4_i0.png)\n\n### Scalar vs Vector Quantities\n*   **Scalar Quantity**: Has only **magnitude** (size or value). Examples: distance, speed, mass, time, energy.\n*   **Vector Quantity**: Has both **magnitude and direction**. Examples: displacement, velocity, acceleration, force, weight.\n\n![Distance, Speed, Acceleration](/0625-physics/images/main_p5_i0.png)\n\n### Key Definitions of Motion\n*   **Distance ($d$)**: Total length of the path traveled. (Scalar)\n*   **Displacement ($s$)**: The straight-line distance from the start to the end point, in a specific direction. (Vector)\n*   **Speed**: Rate of change of distance ($Speed = \\text{Distance} / \\text{Time}$). (Scalar)\n*   **Velocity ($v$)**: Rate of change of displacement ($Velocity = \\text{Displacement} / \\text{Time}$). (Vector)\n*   **Acceleration ($a$)**: Rate of change of velocity. ($a = \\frac{v - u}{t}$, where $v$ is final velocity and $u$ is initial velocity). Unit: $m/s^2$. (Vector). Deceleration is just negative acceleration (slowing down).\n\n![Kinematic Equations](/0625-physics/images/main_p6_i0.png)\n\n### Kinematic Equations\nFor an object moving with **constant acceleration**, we can use these equations:\n1.  $v = u + at$\n2.  $s = \\frac{1}{2}(u + v)t$\n3.  $s = ut + \\frac{1}{2}at^2$\n4.  $v^2 = u^2 + 2as$\n\n![Distance-Time Graph](/0625-physics/images/main_p7_i0.png)\n\n### Distance-Time ($s-t$) Graphs\n*   The **gradient** (slope) of a distance-time graph represents **velocity** ($v = \\frac{\\Delta s}{\\Delta t}$).\n*   Constant gradient = constant velocity.\n*   Zero gradient (horizontal line) = zero velocity (stationary).\n*   Curve curving upwards = increasing gradient = increasing velocity (acceleration).\n*   Curve flattening out = decreasing gradient = decreasing velocity (deceleration).\n\n![Velocity-Time Graph](/0625-physics/images/main_p8_i0.png)\n\n### Velocity-Time ($v-t$) Graphs\n*   The **gradient** of a velocity-time graph represents **acceleration** ($a = \\frac{\\Delta v}{\\Delta t}$).\n*   The **area under the graph** represents the **distance traveled** or displacement.\n*   Constant gradient = constant acceleration.\n*   Zero gradient (horizontal line) = constant velocity (zero acceleration).\n*   Negative gradient = deceleration.\n\n![Free Fall](/0625-physics/images/main_p9_i0.png)\n\n### Free Fall and Terminal Velocity\nWhen an object is dropped, it falls due to gravity with an acceleration of $g = 10 \\text{ m/s}^2$ (ignoring air resistance).\n*   If air resistance is present, as the object speeds up, air resistance increases.\n*   Eventually, Air Resistance = Weight. The resultant force becomes zero.\n*   The object stops accelerating and falls at a constant maximum speed called **Terminal Velocity**.\n",
      "quizzes": [
        {
          "question": "Which of the following is a vector quantity?",
          "options": [
            "Speed",
            "Distance",
            "Mass",
            "Acceleration"
          ],
          "answer": "Acceleration",
          "explanation": "Acceleration is a vector because it has both magnitude and direction."
        },
        {
          "question": "A car travels 50 m North and then 50 m South. What is its total displacement?",
          "options": [
            "100 m",
            "50 m",
            "0 m",
            "2500 m"
          ],
          "answer": "0 m",
          "explanation": "Displacement is the straight-line distance from start to end. Since the car returned to its starting point, displacement is zero."
        },
        {
          "question": "What does the gradient of a distance-time graph represent?",
          "options": [
            "Acceleration",
            "Speed/Velocity",
            "Distance",
            "Time"
          ],
          "answer": "Speed/Velocity",
          "explanation": "The slope (gradient) of a distance-time graph equals the rate of change of distance, which is speed."
        },
        {
          "question": "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?",
          "options": [
            "100 m/s^2",
            "4 m/s^2",
            "15 m/s^2",
            "25 m/s^2"
          ],
          "answer": "4 m/s^2",
          "explanation": "Acceleration = (Final Velocity - Initial Velocity) / Time = (20 - 0) / 5 = 4 m/s^2."
        },
        {
          "question": "What does the area under a velocity-time graph represent?",
          "options": [
            "Acceleration",
            "Time",
            "Distance traveled",
            "Final velocity"
          ],
          "answer": "Distance traveled",
          "explanation": "The area under a velocity-time graph equals the displacement or distance traveled."
        },
        {
          "question": "What happens to the acceleration of an object as it approaches terminal velocity?",
          "options": [
            "It increases",
            "It remains constant at 10 m/s^2",
            "It decreases to zero",
            "It becomes negative"
          ],
          "answer": "It decreases to zero",
          "explanation": "As speed increases, air resistance increases. The resultant force decreases, so acceleration decreases until it hits zero at terminal velocity."
        },
        {
          "question": "Which equation represents the kinematic relationship without time?",
          "options": [
            "v = u + at",
            "s = ut + 1/2 at^2",
            "v^2 = u^2 + 2as",
            "s = 1/2(u+v)t"
          ],
          "answer": "v^2 = u^2 + 2as",
          "explanation": "This equation does not require the time variable to solve."
        }
      ]
    },
    {
      "subtopicId": "1.3",
      "title": "Mass and Weight",
      "digitizedText": "# 1.3 Mass and Weight\n\n![Mass vs Weight](/0625-physics/images/main_p10_i0.png)\n\n### Understanding Mass and Weight\nStudents often confuse mass and weight, but in physics, they are very different!\n*   **Mass ($m$)**: The amount of matter in an object. It is a scalar quantity, measured in kilograms (kg), and it **never changes** regardless of where you are in the universe. Mass also represents an object's **inertia** (its reluctance to change its state of motion).\n*   **Weight ($W$)**: The gravitational force acting on an object. It is a vector quantity (always pointing downwards), measured in Newtons (N). Weight depends on the gravitational field strength ($g$).\n*   **Equation**: $W = m \\times g$\n    *   On Earth, $g \\approx 10 \\text{ N/kg}$ (or $10 \\text{ m/s}^2$).\n    *   So, a $5\\text{ kg}$ mass has a weight of $5 \\times 10 = 50\\text{ N}$ on Earth. On the moon, its weight would be less because the moon's gravity is weaker, but its mass remains $5\\text{ kg}$.\n\n![Centre of Mass](/0625-physics/images/main_p14_i0.png)\n\n### Centre of Mass and Stability\n*   **Centre of Mass**: The imaginary point where all the mass (and weight) of an object seems to be concentrated.\n*   **Stability**: How difficult it is to topple an object. \n    *   To make an object more stable, you should **lower its centre of mass** and **widen its base**.\n    *   If the vertical line extending downwards from the centre of mass falls outside the base, the object will topple!\n",
      "quizzes": [
        {
          "question": "Which statement about mass and weight is correct?",
          "options": [
            "Mass is a force, weight is not.",
            "Weight is measured in kilograms.",
            "Mass changes depending on gravity.",
            "Mass is scalar, weight is vector."
          ],
          "answer": "Mass is scalar, weight is vector.",
          "explanation": "Mass only has magnitude, while weight is a force and has a downwards direction."
        },
        {
          "question": "What is the weight of a 12 kg object on Earth? (g = 10 N/kg)",
          "options": [
            "1.2 N",
            "12 N",
            "120 N",
            "1200 N"
          ],
          "answer": "120 N",
          "explanation": "Weight = mass x gravity = 12 kg x 10 N/kg = 120 N."
        },
        {
          "question": "An astronaut travels to the moon. What happens to her mass and weight?",
          "options": [
            "Mass stays the same, weight decreases.",
            "Mass decreases, weight stays the same.",
            "Both decrease.",
            "Both stay the same."
          ],
          "answer": "Mass stays the same, weight decreases.",
          "explanation": "Mass is the amount of matter and never changes. The moon has less gravity, so weight decreases."
        },
        {
          "question": "What is meant by an object's inertia?",
          "options": [
            "Its resistance to a change in motion",
            "Its gravitational pull",
            "Its turning effect",
            "Its acceleration"
          ],
          "answer": "Its resistance to a change in motion",
          "explanation": "Inertia is the property of mass that resists changes in velocity."
        },
        {
          "question": "Where does the weight of an object appear to act?",
          "options": [
            "At its base",
            "At its centre of mass",
            "At its top",
            "Evenly across its surface"
          ],
          "answer": "At its centre of mass",
          "explanation": "The centre of mass is defined as the point where all the weight of the object seems to act."
        },
        {
          "question": "How can you increase the stability of an object?",
          "options": [
            "Raise its centre of mass and narrow its base.",
            "Raise its centre of mass and widen its base.",
            "Lower its centre of mass and narrow its base.",
            "Lower its centre of mass and widen its base."
          ],
          "answer": "Lower its centre of mass and widen its base.",
          "explanation": "A lower centre of gravity and a wider base make it harder for the object's centre of mass to pass outside its base."
        },
        {
          "question": "When will an object topple over?",
          "options": [
            "When its centre of mass is exactly above the edge of its base",
            "When the vertical line from its centre of mass falls outside its base",
            "When it is pushed slightly",
            "When it is on an incline"
          ],
          "answer": "When the vertical line from its centre of mass falls outside its base",
          "explanation": "Once the centre of mass is outside the base, gravity creates a turning moment that topples the object."
        }
      ]
    },
    {
      "subtopicId": "1.4",
      "title": "Density",
      "digitizedText": "# 1.4 Density\n\n![Density Definition](/0625-physics/images/main_p11_i0.png)\n\n### What is Density?\nDensity tells us how tightly packed the matter in an object is. A block of iron feels heavier than a block of wood of the exact same size because iron is more dense.\n*   **Definition**: Density is mass per unit volume.\n*   **Equation**: $\\rho = \\frac{m}{V}$ (where $\\rho$ is density, $m$ is mass, and $V$ is volume).\n*   **Units**: $kg/m^3$ or $g/cm^3$.\n\n### Floating and Sinking\n*   An object will **float** in a fluid if its density is **less** than the fluid's density.\n*   An object will **sink** if its density is **greater** than the fluid's density.\n\n![Measuring Volume](/0625-physics/images/main_p12_i0.png)\n\n### Measuring Volume to Find Density\nTo find the density of an object, you need its mass (using a balance) and its volume.\n*   **Regular objects** (like a box): Use a ruler to measure length, width, and height. ($V = l \\times w \\times h$).\n*   **Irregular objects** (like a stone): Use the **water displacement method**.\n    1. Fill a measuring cylinder with a known volume of water ($V_1$).\n    2. Submerge the stone in the water.\n    3. Read the new volume ($V_2$).\n    4. The volume of the stone is $V_2 - V_1$.\n",
      "quizzes": [
        {
          "question": "What is the formula for density?",
          "options": [
            "Density = Mass x Volume",
            "Density = Volume / Mass",
            "Density = Mass / Volume",
            "Density = Force / Area"
          ],
          "answer": "Density = Mass / Volume",
          "explanation": "Density is defined as the mass per unit volume."
        },
        {
          "question": "A block of metal has a mass of 400 g and a volume of 50 cm^3. What is its density?",
          "options": [
            "8 g/cm^3",
            "0.125 g/cm^3",
            "450 g/cm^3",
            "20000 g/cm^3"
          ],
          "answer": "8 g/cm^3",
          "explanation": "Density = 400 g / 50 cm^3 = 8 g/cm^3."
        },
        {
          "question": "Why does a piece of wood float on water?",
          "options": [
            "Wood has less mass than water.",
            "Wood has more volume than water.",
            "Wood has a lower density than water.",
            "Wood does not absorb water."
          ],
          "answer": "Wood has a lower density than water.",
          "explanation": "An object floats if its density is lower than the density of the fluid it is in."
        },
        {
          "question": "How do you find the volume of an irregularly shaped stone?",
          "options": [
            "Use a ruler to measure its sides",
            "Use the water displacement method in a measuring cylinder",
            "Weigh it on a balance",
            "Multiply its mass by its density"
          ],
          "answer": "Use the water displacement method in a measuring cylinder",
          "explanation": "Water displacement accurately measures the volume of irregular solid objects."
        },
        {
          "question": "Water has a density of 1000 kg/m^3. An object has a density of 1200 kg/m^3. What will happen to it in water?",
          "options": [
            "It will float.",
            "It will sink.",
            "It will stay suspended in the middle.",
            "It will dissolve."
          ],
          "answer": "It will sink.",
          "explanation": "Because 1200 kg/m^3 > 1000 kg/m^3, the object is denser than water and will sink."
        },
        {
          "question": "What is the SI unit for density?",
          "options": [
            "kg/m",
            "g/cm^3",
            "kg/m^3",
            "N/m^2"
          ],
          "answer": "kg/m^3",
          "explanation": "The standard SI unit uses kilograms for mass and cubic meters for volume."
        },
        {
          "question": "If you cut a block of wood in half, what happens to its density?",
          "options": [
            "It doubles.",
            "It halves.",
            "It stays the same.",
            "It becomes zero."
          ],
          "answer": "It stays the same.",
          "explanation": "Density is an intrinsic property of the material. Both mass and volume halve, so the ratio (density) remains the same."
        }
      ]
    },
    {
      "subtopicId": "1.5",
      "title": "Forces",
      "digitizedText": "# 1.5 Forces\n\nForces are pushes or pulls that can change the shape, speed, or direction of an object.\n\n![Resultant Force](/0625-physics/images/main_p12_i0.png)\n\n### Resultant Force\nWhen multiple forces act on an object, we can combine them into a single **Resultant Force**. \n*   If forces are in the same direction, add them.\n*   If forces are in opposite directions, subtract them.\n*   If the resultant force is zero, the object is in equilibrium (it stays at rest or continues moving at a constant velocity).\n*   Newton's Second Law states that Resultant Force = Mass \u00d7 Acceleration ($F = ma$).\n\n![Equilibrium and Moments](/0625-physics/images/main_p13_i0.png)\n\n### Turning Effect (Moments) and Equilibrium\nA force can cause an object to turn or rotate around a pivot. This turning effect is called a **Moment**.\n*   **Equation**: $\\text{Moment} = \\text{Force} \\times \\text{Perpendicular distance from pivot}$ ($M = F \\times d$).\n*   **Principle of Moments**: For an object to be in equilibrium (balanced and not rotating), the **total clockwise moment must equal the total anti-clockwise moment** about any pivot point.\n*   **Conditions for Equilibrium**:\n    1. Resultant force = $0$ (forces up = forces down, forces left = forces right).\n    2. Resultant moment = $0$ (total clockwise moment = total anti-clockwise moment).\n\n![Hooke's Law](/0625-physics/images/main_p15_i0.png)\n\n### Elasticity and Hooke's Law\n*   **Elasticity** is the ability of an object to return to its original shape after a stretching or compressing force is removed.\n*   **Hooke's Law**: The extension ($x$) of a spring is directly proportional to the force applied ($F$), provided the limit of proportionality (elastic limit) is not exceeded.\n*   **Equation**: $F = kx$ (where $k$ is the spring constant).\n*   On a Force-Extension graph, Hooke's Law is shown as a straight line passing through the origin. Once the graph curves, the spring has passed its elastic limit and is permanently deformed.\n",
      "quizzes": [
        {
          "question": "A force of 10 N pushes an object right, and a force of 4 N pushes it left. What is the resultant force?",
          "options": [
            "14 N right",
            "6 N right",
            "6 N left",
            "14 N left"
          ],
          "answer": "6 N right",
          "explanation": "Opposite forces are subtracted: 10 N - 4 N = 6 N in the direction of the larger force (right)."
        },
        {
          "question": "What is the formula for calculating a moment?",
          "options": [
            "Moment = Force / Distance",
            "Moment = Mass x Acceleration",
            "Moment = Force x Perpendicular Distance",
            "Moment = Force x Time"
          ],
          "answer": "Moment = Force x Perpendicular Distance",
          "explanation": "A moment is the turning effect of a force, calculated as Force x distance from the pivot."
        },
        {
          "question": "A 5 N force is applied 2 meters away from a pivot. What is the moment?",
          "options": [
            "10 Nm",
            "2.5 Nm",
            "7 Nm",
            "3 Nm"
          ],
          "answer": "10 Nm",
          "explanation": "Moment = F x d = 5 N x 2 m = 10 Nm."
        },
        {
          "question": "What are the two conditions for an object to be in equilibrium?",
          "options": [
            "Resultant force = 0 and Resultant moment = 0",
            "Constant velocity and Constant acceleration",
            "Resultant force > 0 and Resultant moment = 0",
            "Mass = 0 and Weight = 0"
          ],
          "answer": "Resultant force = 0 and Resultant moment = 0",
          "explanation": "Equilibrium requires no net translation (force = 0) and no net rotation (moment = 0)."
        },
        {
          "question": "What does Hooke's Law state?",
          "options": [
            "Force is inversely proportional to extension",
            "Force is directly proportional to extension",
            "Mass is directly proportional to weight",
            "Acceleration is proportional to force"
          ],
          "answer": "Force is directly proportional to extension",
          "explanation": "Hooke's law states F = kx, meaning force and extension are directly proportional."
        },
        {
          "question": "What happens when a spring is stretched beyond its elastic limit?",
          "options": [
            "It snaps instantly.",
            "It no longer obeys Hooke's Law and permanently deforms.",
            "It becomes stiffer and harder to stretch.",
            "It returns to its original shape faster."
          ],
          "answer": "It no longer obeys Hooke's Law and permanently deforms.",
          "explanation": "Past the elastic limit, the material undergoes plastic deformation and won't return to its original length."
        },
        {
          "question": "A spring has a constant k = 50 N/m. What force is needed to extend it by 0.2 m?",
          "options": [
            "10 N",
            "250 N",
            "100 N",
            "5 N"
          ],
          "answer": "10 N",
          "explanation": "F = kx = 50 N/m x 0.2 m = 10 N."
        }
      ]
    },
    {
      "subtopicId": "1.6",
      "title": "Momentum",
      "digitizedText": "# 1.6 Momentum\n\n![Momentum and Impulse](/0625-physics/images/main_p16_i0.png)\n\n### What is Momentum?\nMomentum ($p$) is a property of moving objects. It tells us how hard it is to stop something.\n*   **Equation**: $\\text{Momentum} = \\text{Mass} \\times \\text{Velocity}$ ($p = mv$).\n*   **Units**: $kg \\cdot m/s$. It is a **vector quantity**, so direction matters! (e.g., if moving right is positive, moving left is negative).\n\n### Impulse and Force\n*   **Impulse**: The change in momentum. $\\text{Impulse} = mv - mu$ (where $v$ is final velocity, $u$ is initial velocity).\n*   Impulse is also equal to Force $\\times$ Time ($Ft$). So, $Ft = mv - mu$.\n*   **Impulsive Force**: The rate of change of momentum. $F = \\frac{mv - mu}{t}$. To reduce the force of an impact (like in a car crash), you must increase the time of the impact ($t$).\n\n![Collisions](/0625-physics/images/main_p17_i0.png)\n\n### Principle of Conservation of Momentum\nIn any collision or explosion, if no external forces are acting on the system:\n*   **Total Initial Momentum = Total Final Momentum**\n*   $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$\n*   *Tip:* Always define one direction as positive. If objects move in opposite directions, one must have a negative velocity!\n",
      "quizzes": [
        {
          "question": "What is the formula for momentum?",
          "options": [
            "p = m/v",
            "p = mv",
            "p = 1/2 mv^2",
            "p = ma"
          ],
          "answer": "p = mv",
          "explanation": "Momentum is the product of mass and velocity."
        },
        {
          "question": "A 2 kg ball moves at 3 m/s. What is its momentum?",
          "options": [
            "5 kg m/s",
            "1.5 kg m/s",
            "6 kg m/s",
            "9 kg m/s"
          ],
          "answer": "6 kg m/s",
          "explanation": "p = mv = 2 kg x 3 m/s = 6 kg m/s."
        },
        {
          "question": "What does impulse equal?",
          "options": [
            "Rate of change of momentum",
            "Change in momentum",
            "Mass times acceleration",
            "Force divided by time"
          ],
          "answer": "Change in momentum",
          "explanation": "Impulse is defined as the change in momentum (mv - mu) and also equals Force x time (Ft)."
        },
        {
          "question": "How do airbags protect passengers in a car crash?",
          "options": [
            "They decrease the change in momentum.",
            "They increase the time of impact, reducing the impulsive force.",
            "They increase the force of the impact.",
            "They prevent any change in momentum."
          ],
          "answer": "They increase the time of impact, reducing the impulsive force.",
          "explanation": "Because F = (mv-mu)/t, increasing the time t decreases the force F for the same change in momentum."
        },
        {
          "question": "The Principle of Conservation of Momentum applies when:",
          "options": [
            "There are no external forces acting on the system.",
            "Objects stick together after collision.",
            "Objects bounce apart after collision.",
            "Friction is present."
          ],
          "answer": "There are no external forces acting on the system.",
          "explanation": "Momentum is only conserved in a closed system with no external resultant force."
        },
        {
          "question": "Car A (1000 kg) moving at 5 m/s hits stationary Car B (1000 kg). They stick together. What is their velocity after impact?",
          "options": [
            "5 m/s",
            "2.5 m/s",
            "0 m/s",
            "10 m/s"
          ],
          "answer": "2.5 m/s",
          "explanation": "Initial p = 1000x5 + 0 = 5000. Final p = (1000+1000)v. 5000 = 2000v. v = 2.5 m/s."
        },
        {
          "question": "Is momentum a scalar or a vector quantity?",
          "options": [
            "Scalar",
            "Vector",
            "Neither",
            "Both"
          ],
          "answer": "Vector",
          "explanation": "Momentum has both magnitude and direction because velocity is a vector."
        }
      ]
    },
    {
      "subtopicId": "1.7",
      "title": "Energy, Work and Power",
      "digitizedText": "# 1.7 Energy, Work and Power\n\n![Work and Energy](/0625-physics/images/main_p18_i0.png)\n\n### Work Done and Energy\nDoing \"work\" in physics means transferring energy by applying a force over a distance.\n*   **Work ($W$)**: $W = F \\times d$ (Force $\\times$ displacement in the direction of the force). \n*   **Unit**: Joules (J). 1 Joule of work transfers 1 Joule of energy.\n*   **Kinetic Energy ($E_k$)**: The energy of a moving object. $E_k = \\frac{1}{2}mv^2$.\n*   **Gravitational Potential Energy ($E_p$)**: The energy gained when an object is raised up. $E_p = mgh$.\n\n![Power and Efficiency](/0625-physics/images/main_p19_i0.png)\n\n### Power and Efficiency\n*   **Power ($P$)**: The rate at which energy is transferred or work is done. \n*   **Equation**: $P = \\frac{E}{t}$ or $P = \\frac{W}{t}$. \n*   **Unit**: Watts (W) or Joules per second (J/s).\n*   **Efficiency**: How good a machine is at converting input energy into useful output energy. No machine is 100% efficient due to heat loss (friction, resistance).\n    *   $\\text{Efficiency} = (\\text{Useful Energy Output} / \\text{Total Energy Input}) \\times 100\\%$\n    *   $\\text{Efficiency} = (\\text{Useful Power Output} / \\text{Total Power Input}) \\times 100\\%$\n\n![Energy Sources](/0625-physics/images/main_p20_i0.png)\n\n### Energy Resources\n*   **Non-renewable**: Cannot be easily replaced once used. (e.g., Fossil fuels like coal, oil, gas; Nuclear fuels).\n*   **Renewable**: Naturally replenished. (e.g., Solar, Wind, Wave, Tidal, Hydroelectric, Geothermal, Biomass).\n\n![Conservation of Energy](/0625-physics/images/main_p21_i0.png)\n\n### Principle of Conservation of Energy\n*   **Energy cannot be created or destroyed**, it can only change from one form to another.\n*   The total energy of an isolated system remains constant.\n*   *Example*: When a fruit falls from a tree, its Gravitational Potential Energy converts into Kinetic Energy. Just before it hits the ground, all its $E_p$ has become $E_k$ ($mgh = \\frac{1}{2}mv^2$).\n",
      "quizzes": [
        {
          "question": "What is the formula for calculating work done?",
          "options": [
            "W = F x d",
            "W = F / d",
            "W = m x g",
            "W = E / t"
          ],
          "answer": "W = F x d",
          "explanation": "Work is done when a force moves an object over a distance."
        },
        {
          "question": "A 2 kg mass is lifted 3 meters into the air. What is its gained gravitational potential energy? (g = 10)",
          "options": [
            "6 J",
            "60 J",
            "20 J",
            "30 J"
          ],
          "answer": "60 J",
          "explanation": "Ep = mgh = 2 x 10 x 3 = 60 Joules."
        },
        {
          "question": "What is kinetic energy?",
          "options": [
            "Energy stored in a spring",
            "Energy due to height",
            "Energy of motion",
            "Energy from heat"
          ],
          "answer": "Energy of motion",
          "explanation": "Kinetic energy (1/2 mv^2) is the energy an object possesses due to its motion."
        },
        {
          "question": "What does power measure in physics?",
          "options": [
            "Total energy used",
            "Force applied over time",
            "The rate at which work is done",
            "The speed of an object"
          ],
          "answer": "The rate at which work is done",
          "explanation": "Power is Energy/Time or Work/Time, measuring how fast energy is transferred."
        },
        {
          "question": "An engine uses 1000 J of energy to produce 300 J of useful work. What is its efficiency?",
          "options": [
            "30%",
            "70%",
            "300%",
            "33%"
          ],
          "answer": "30%",
          "explanation": "Efficiency = (Useful output / Total input) x 100% = (300 / 1000) x 100% = 30%."
        },
        {
          "question": "Which of the following is a renewable energy source?",
          "options": [
            "Coal",
            "Nuclear",
            "Wind",
            "Natural Gas"
          ],
          "answer": "Wind",
          "explanation": "Wind is naturally replenished, unlike fossil fuels and nuclear materials."
        },
        {
          "question": "According to the Principle of Conservation of Energy:",
          "options": [
            "Energy can be destroyed by friction.",
            "Energy cannot be created or destroyed.",
            "Total energy in the universe decreases over time.",
            "Kinetic energy is always conserved in every collision."
          ],
          "answer": "Energy cannot be created or destroyed.",
          "explanation": "Energy can only be transferred or changed from one form to another."
        }
      ]
    },
    {
      "subtopicId": "1.8",
      "title": "Pressure",
      "digitizedText": "# 1.8 Pressure\n\n![Solid Pressure](/0625-physics/images/main_p22_i0.png)\n\n### Pressure in Solids\nPressure tells us how concentrated a force is over an area. \n*   **Definition**: Force acting perpendicularly per unit area.\n*   **Equation**: $P = \\frac{F}{A}$\n*   **Units**: Pascals (Pa) or $N/m^2$.\n*   A smaller area creates a **larger pressure** (like a sharp knife). A larger area creates a **smaller pressure** (like snowshoes).\n\n![Liquid Pressure](/0625-physics/images/main_p23_i0.png)\n\n### Pressure in Liquids\nLiquids exert pressure in all directions. The pressure depends on the depth and the type of liquid.\n*   **Equation**: $P = \\rho g h$ \n    *   $\\rho$ = density of the liquid ($kg/m^3$)\n    *   $g$ = gravitational field strength ($10\\text{ N/kg}$)\n    *   $h$ = depth measured from the surface of the liquid ($m$)\n*   Pressure in a liquid **increases with depth**. It does not depend on the shape or width of the container.\n\n![Atmospheric Pressure](/0625-physics/images/main_p24_i0.png)\n![Barometer Calculations](/0625-physics/images/main_p25_i0.png)\n\n### Gas and Atmospheric Pressure\n*   Gas molecules constantly collide with the walls of their container, exerting a force and creating pressure.\n*   **Atmospheric Pressure ($P_{atm}$)**: The pressure exerted by the weight of the air above us. At sea level, it is roughly $100,000\\text{ Pa}$ (or $1\\text{ atm}$). As altitude increases, atmospheric pressure decreases.\n*   **Barometer**: An instrument used to measure atmospheric pressure. It typically consists of a glass tube inverted in a dish of mercury. A vacuum is at the top of the tube. The height of the mercury column ($h$) is pushed up by atmospheric pressure.\n    *   Standard atmospheric pressure supports a mercury column about $76\\text{ cm}$ (or $760\\text{ mm}$) high. So, $P_{atm} = 76\\text{ cm Hg}$.\n    *   To find total pressure underwater, add atmospheric pressure to liquid pressure: $\\text{Total } P = P_{atm} + \\rho g h$.\n",
      "quizzes": [
        {
          "question": "What is the formula for pressure?",
          "options": [
            "P = F x A",
            "P = A / F",
            "P = F / A",
            "P = m x g"
          ],
          "answer": "P = F / A",
          "explanation": "Pressure is defined as Force divided by the Area over which it acts."
        },
        {
          "question": "Why do snowshoes stop you from sinking into the snow?",
          "options": [
            "They decrease your weight.",
            "They increase the area, reducing the pressure.",
            "They increase the pressure.",
            "They repel the snow."
          ],
          "answer": "They increase the area, reducing the pressure.",
          "explanation": "Because P = F/A, a larger area means less pressure exerted on the snow."
        },
        {
          "question": "What happens to the pressure in a liquid as depth increases?",
          "options": [
            "It decreases.",
            "It stays the same.",
            "It increases.",
            "It fluctuates."
          ],
          "answer": "It increases.",
          "explanation": "Liquid pressure is given by P = \u03c1gh. Since depth (h) increases, pressure increases."
        },
        {
          "question": "Water has a density of 1000 kg/m^3. What is the liquid pressure at a depth of 5 meters? (g = 10 N/kg)",
          "options": [
            "50 Pa",
            "5000 Pa",
            "50000 Pa",
            "200 Pa"
          ],
          "answer": "50000 Pa",
          "explanation": "P = \u03c1gh = 1000 x 10 x 5 = 50000 Pa."
        },
        {
          "question": "What causes gas pressure in a container?",
          "options": [
            "Gravity pulling the gas down",
            "Gas molecules expanding",
            "Gas molecules colliding with the walls",
            "The temperature of the room"
          ],
          "answer": "Gas molecules colliding with the walls",
          "explanation": "The continuous collisions of particles against the container walls exert a force, creating pressure."
        },
        {
          "question": "What happens to atmospheric pressure as you climb a tall mountain?",
          "options": [
            "It increases.",
            "It decreases.",
            "It stays exactly the same.",
            "It becomes zero."
          ],
          "answer": "It decreases.",
          "explanation": "There is less air above you at higher altitudes, so the weight of the air (and thus the pressure) decreases."
        },
        {
          "question": "In a simple mercury barometer, what is in the space at the very top of the closed tube?",
          "options": [
            "Air",
            "Water",
            "A vacuum",
            "Helium"
          ],
          "answer": "A vacuum",
          "explanation": "The space above the mercury column is a vacuum so that no gas pushes down on the mercury."
        }
      ]
    },
    {
      "subtopicId": "2.1",
      "title": "Matter and its Physical State",
      "digitizedText": "### Matter and its Physical State\n\n**Raw Points Transcribed:**\n* Matter is anything that has mass and occupies space.\n* Physical states: Solid, Liquid, Gas.\n* Phase Changes absorbing energy: Melting (Solid $\\rightarrow$ Liquid), Boiling/Evaporation (Liquid $\\rightarrow$ Gas), Sublimation (Solid $\\rightarrow$ Gas).\n* Phase Changes releasing energy: Freezing (Liquid $\\rightarrow$ Solid), Condensation (Gas $\\rightarrow$ Liquid).\n* Solid has the strongest attractive forces, while gas has the weakest attractive forces.\n* Thermal expansion: As temperature increases, volume increases (expansion). As temperature decreases, volume decreases (contraction).\n* Expansion rate increases from solid to liquid to gas.\n\n**Teacher's Explanation:**\nWelcome to Thermal Physics! Let's start with the basics: **Matter**. Matter is the \"stuff\" everything is made of. If it has mass (you can weigh it) and occupies space (it has volume), it's matter.\n\nMatter primarily exists in three distinct physical states: **Solid, Liquid, and Gas**.\n\n* **Solids** have a fixed shape and volume. Their particles are packed closely together in a regular arrangement. The attractive forces holding them together are very strong, meaning they can only vibrate in fixed positions.\n* **Liquids** have a fixed volume but take the shape of their container. The particles are still close together but can slide past each other, meaning the attractive forces are weaker than in solids.\n* **Gases** completely fill any container they are placed in. Their particles are far apart and move rapidly in random directions. The attractive forces between gas particles are extremely weak.\n\n**Changes of State:**\nWhen matter changes from one state to another, it involves the transfer of thermal energy (heat).\n\n![State Changes](/0625-physics/images/main_p27_i0.png)\n\n* **Absorbing Energy:** When you heat a substance, its particles gain kinetic energy. This energy can overcome the attractive forces between them.\n    * **Melting:** Solid to Liquid.\n    * **Boiling/Evaporation:** Liquid to Gas.\n    * **Sublimation:** Solid directly to Gas.\n* **Releasing Energy:** When you cool a substance, it loses energy, and the attractive forces pull the particles closer together.\n    * **Freezing:** Liquid to Solid.\n    * **Condensation:** Gas to Liquid.\n\n**Thermal Expansion:**\nHave you ever noticed that a metal door might stick on a hot day? This happens because of **Thermal Expansion**. When a substance is heated, its temperature increases, giving the particles more kinetic energy. They vibrate or move more vigorously, pushing each other slightly further apart. This causes the overall volume of the substance to increase (it expands).\nConversely, when cooled, the particles lose energy, move less, and get closer together, causing the volume to decrease (it contracts).\n\nInterestingly, the **rate of expansion** depends on the state of matter:\n* **Gases** expand the most when heated.\n* **Liquids** expand less than gases but more than solids.\n* **Solids** expand the least.\n\n```mermaid\ngraph TD\n    A[Solid] -->|Melting<br>Absorbs Energy| B(Liquid)\n    B -->|Boiling/Evaporation<br>Absorbs Energy| C{Gas}\n    C -->|Condensation<br>Releases Energy| B\n    B -->|Freezing<br>Releases Energy| A\n    A -->|Sublimation<br>Absorbs Energy| C\n```",
      "quizzes": [
        {
          "question": "Which of the following states of matter has the strongest intermolecular attractive forces?",
          "options": [
            "Solid",
            "Liquid",
            "Gas",
            "Plasma"
          ],
          "answer": "Solid",
          "explanation": "Solids have particles closely packed in a regular lattice, held together by strong attractive forces, which is why they have a fixed shape."
        },
        {
          "question": "When a gas turns into a liquid, the process is called:",
          "options": [
            "Melting",
            "Freezing",
            "Condensation",
            "Sublimation"
          ],
          "answer": "Condensation",
          "explanation": "Condensation is the process where a gas loses thermal energy and its particles come closer together to form a liquid."
        },
        {
          "question": "Which of the following processes requires the absorption of thermal energy?",
          "options": [
            "Freezing",
            "Condensation",
            "Melting",
            "Deposition"
          ],
          "answer": "Melting",
          "explanation": "Melting involves breaking the strong attractive bonds in a solid to form a liquid, which requires an input (absorption) of energy."
        },
        {
          "question": "Sublimation is the process where a substance changes from:",
          "options": [
            "Solid to Liquid",
            "Liquid to Gas",
            "Solid to Gas",
            "Gas to Liquid"
          ],
          "answer": "Solid to Gas",
          "explanation": "Sublimation skips the liquid phase completely, transforming directly from a solid state to a gaseous state upon absorbing heat."
        },
        {
          "question": "Which state of matter exhibits the greatest rate of thermal expansion when subjected to the same temperature increase?",
          "options": [
            "Solid",
            "Liquid",
            "Gas",
            "They all expand equally"
          ],
          "answer": "Gas",
          "explanation": "Because the intermolecular forces in gases are very weak, giving gas particles a little bit of kinetic energy causes them to fly much further apart, resulting in the highest rate of expansion."
        },
        {
          "question": "What happens to the volume of a liquid when its temperature decreases?",
          "options": [
            "It expands",
            "It contracts",
            "It remains the same",
            "It fluctuates rapidly"
          ],
          "answer": "It contracts",
          "explanation": "Cooling a liquid removes kinetic energy. The particles move less vigorously and settle closer together, causing the overall volume to decrease (contract)."
        },
        {
          "question": "During which phase change is energy released to the surroundings?",
          "options": [
            "Evaporation",
            "Melting",
            "Sublimation",
            "Freezing"
          ],
          "answer": "Freezing",
          "explanation": "In freezing, liquid particles slow down and form stronger bonds to become a solid, releasing excess thermal energy into the surroundings."
        }
      ]
    },
    {
      "subtopicId": "2.2",
      "title": "Properties of Gas",
      "digitizedText": "### Properties of Gas\n\n**Raw Points Transcribed:**\n* Properties of gas relate to Pressure ($P$), Volume ($V$), and Temperature ($T$).\n* Equations: $F = \\frac{mv - mu}{t}$, $P = \\frac{F}{A}$\n* **Existence of gas pressure:**\n    * Gas particles collide with the walls.\n    * They experience a change in momentum.\n    * The rate of change of momentum produces a force.\n    * The force applied on a unit area exerts pressure.\n* **i) Pressure & Volume ($T$ constant): Boyle's Law**\n    * $V \\uparrow$, $P \\downarrow$ ($V \\propto \\frac{1}{P}$)\n    * $P_1V_1 = P_2V_2$\n    * Explanation: As volume increases, the space where gas particles can travel increases. Therefore, there are fewer collisions between the particles and the wall.\n* **ii) Pressure & Temperature ($V$ constant): Pressure Law**\n    * $T \\uparrow$, $P \\uparrow$ ($T \\propto P$)\n    * Explanation: As temperature increases, the particles gain kinetic energy. They move faster, leading to more frequent collisions between the particles and the wall.\n* **iii) Temperature & Volume ($P$ constant): Charles's Law**\n    * $T \\uparrow$, $V \\uparrow$ ($T \\propto V$)\n    * Explanation: As temperature increases, the particles gain kinetic energy. To maintain constant pressure, they travel further and occupy more space.\n\n**Teacher's Explanation:**\nNow, let's zoom in on gases. The behavior of a gas is governed by three main variables: **Pressure ($P$), Volume ($V$), and Temperature ($T$)**.\n\n![Gas Pressure Triangle](/0625-physics/images/main_p28_i0.png)\n![Gas Properties Overview](/0625-physics/images/main_p29_i0.png)\n\n**How is Gas Pressure Created?**\nImagine a balloon filled with gas. The gas particles are constantly zipping around in random directions. When they hit the inner wall of the balloon and bounce back, their momentum changes. According to Newton's Second Law, a rate of change of momentum produces a **force** ($F = \\frac{\\Delta p}{t}$). Since there are billions of particles striking the wall, they exert a collective force over the inner surface area ($A$). This force per unit area is what we measure as **pressure** ($P = \\frac{F}{A}$).\n\nThere are three key relationships to remember:\n\n**1. Pressure and Volume (Constant Temperature)** - *Boyle's Law*\nIf you squash a gas into a smaller volume without changing its temperature, its pressure will increase. Why? Because the particles are now trapped in a smaller space. They have less distance to travel before hitting a wall, so they collide with the walls more frequently. More collisions mean a greater average force on the walls, and hence, higher pressure. Mathematically, they are inversely proportional: $P_1V_1 = P_2V_2$.\n\n**2. Pressure and Temperature (Constant Volume)**\nIf you heat a gas in a rigid container (fixed volume), the pressure goes up. Why? Heating the gas increases its thermal energy, which turns into the kinetic energy of the particles. They move much faster. Because they are moving faster, they hit the walls more often AND with a greater force each time. This leads to a higher pressure.\n\n**3. Temperature and Volume (Constant Pressure)** - *Charles's Law*\nIf you heat a gas in an expandable container (like a balloon), the volume must increase to keep the pressure constant. The faster-moving, more energetic particles need more room to ensure they don't hit the walls too frequently, keeping the force per unit area constant.\n\n```mermaid\nflowchart LR\n    subgraph Boyle's Law\n    direction TB\n    V_down[Volume Decreases] --> Col[Collisions per second Increase]\n    Col --> P_up[Pressure Increases]\n    end\n\n    subgraph Pressure Law\n    direction TB\n    T_up[Temperature Increases] --> KE[Kinetic Energy & Speed Increase]\n    KE --> Freq[Harder & More Frequent Collisions]\n    Freq --> P_up2[Pressure Increases]\n    end\n```",
      "quizzes": [
        {
          "question": "Gas pressure is caused by gas particles:",
          "options": [
            "Attracting each other",
            "Repelling each other",
            "Colliding with the walls of their container",
            "Expanding in volume"
          ],
          "answer": "Colliding with the walls of their container",
          "explanation": "The macroscopic property of pressure is the result of countless microscopic collisions between gas particles and the inner walls of the container."
        },
        {
          "question": "According to physics principles, the force exerted by gas particles on a wall is due to their:",
          "options": [
            "Change in volume",
            "Rate of change of momentum",
            "Change in potential energy",
            "Increase in mass"
          ],
          "answer": "Rate of change of momentum",
          "explanation": "When particles strike the wall and bounce off, their momentum changes. The rate of this momentum change equals the force exerted on the wall (Newton's Second Law)."
        },
        {
          "question": "If the volume of a fixed mass of gas is halved at constant temperature, what happens to its pressure?",
          "options": [
            "It is halved",
            "It is doubled",
            "It remains the same",
            "It increases by a factor of 4"
          ],
          "answer": "It is doubled",
          "explanation": "Boyle's Law states that Pressure and Volume are inversely proportional ($P \\propto 1/V$). Halving the volume doubles the pressure."
        },
        {
          "question": "Why does heating a gas at a constant volume increase its pressure?",
          "options": [
            "The particles expand in size.",
            "The particles gain kinetic energy and hit the walls more frequently and harder.",
            "The container shrinks.",
            "The attractive forces between particles increase."
          ],
          "answer": "The particles gain kinetic energy and hit the walls more frequently and harder.",
          "explanation": "Higher temperature means higher average kinetic energy. Faster particles travel distance quicker (more frequent collisions) and hit with more momentum (harder collisions), increasing the total force and pressure."
        },
        {
          "question": "For a fixed mass of gas at constant pressure, what happens to its volume if the temperature increases?",
          "options": [
            "Volume increases",
            "Volume decreases",
            "Volume remains constant",
            "Volume drops to zero"
          ],
          "answer": "Volume increases",
          "explanation": "According to Charles's law, Volume is directly proportional to Temperature at constant pressure. As temperature rises, volume must expand so particles have more space, preventing a rise in collision frequency."
        },
        {
          "question": "The formula $P_1V_1 = P_2V_2$ is used when which property is kept constant?",
          "options": [
            "Pressure",
            "Volume",
            "Temperature",
            "Mass only"
          ],
          "answer": "Temperature",
          "explanation": "This formula represents Boyle's Law, which only applies to a fixed mass of gas held at a constant temperature."
        },
        {
          "question": "Which of the following defines pressure in terms of force and area?",
          "options": [
            "$P = F \\times A$",
            "$P = A / F$",
            "$P = F / A$",
            "$P = F + A$"
          ],
          "answer": "$P = F / A$",
          "explanation": "Pressure is defined as the force applied per unit cross-sectional area, calculated as $P = F / A$."
        }
      ]
    },
    {
      "subtopicId": "2.3",
      "title": "Evaporation",
      "digitizedText": "### Evaporation\n\n**Raw Points Transcribed:**\n* **Evaporation:** The process when particles of a liquid on the surface gain enough energy to escape from the liquid to form a gas.\n* Remaining liquid has: 1) lower energy, 2) decreased temperature (cooling effect).\n* **Factors increasing evaporation:**\n    1) Temperature $\\uparrow$\n    2) Surface area $\\uparrow$\n    3) Air movement (wind) $\\uparrow$\n    4) Humidity $\\downarrow$\n* **Differences between Evaporation & Boiling:**\n    * **Evaporation:** Occurs at any temperature, happens only on the surface of the liquid.\n    * **Boiling:** Occurs at a specific temperature (boiling point), happens throughout the liquid.\n\n**Teacher's Explanation:**\nEvaporation is something you see every day, like a puddle drying up after rain. But what's happening at the microscopic level?\n\n**The Mechanism of Evaporation:**\nIn any liquid, particles are moving at different speeds. Some are fast, some are slow. If a fast-moving particle happens to be near the **surface** of the liquid, and it's moving fast enough to overcome the attractive forces pulling it back in by the other liquid particles, it can escape! Once it escapes into the air, it becomes a gas particle. This is **evaporation**.\n\n![Evaporation Mechanism](/0625-physics/images/main_p30_i0.png)\n\n**The Cooling Effect of Evaporation:**\nWhen the fastest, most energetic particles escape, they take their high energy with them. This leaves behind the slower, lower-energy particles. Since temperature is a measure of the average kinetic energy of the particles, the average energy of the remaining liquid is now lower. Thus, **evaporation causes cooling**. This is why sweating cools your body down!\n\n**Factors Affecting the Rate of Evaporation:**\nIf you want something to dry faster, you can change a few conditions:\n1. **Higher Temperature:** Giving the liquid more heat means more particles will gain enough kinetic energy to escape.\n2. **Larger Surface Area:** Spreading out a puddle means more particles are directly at the surface, giving them a chance to escape.\n3. **More Air Movement (Wind):** Wind blows away the gas particles that have just evaporated. This stops them from bouncing back into the liquid and makes room for more to escape.\n4. **Lower Humidity:** If the air is already full of water vapor (high humidity), it's harder for more water to evaporate. Dry air encourages faster evaporation.\n\n**Evaporation vs. Boiling:**\nMany students confuse evaporation and boiling because both involve a liquid turning into a gas. Let's clarify the differences:\n\n| Feature | Evaporation | Boiling |\n| :--- | :--- | :--- |\n| **Temperature** | Can happen at *any* temperature between melting and boiling points. | Only happens at a *specific* temperature called the boiling point. |\n| **Location** | Only happens at the **surface** of the liquid. | Happens **throughout** the liquid (you see bubbles forming everywhere). |\n| **Speed** | Usually a slow process. | Usually a fast, vigorous process. |\n\n```mermaid\ngraph TD\n    A[Liquid Particles] -->|Random Speeds| B{Is particle fast enough & near surface?}\n    B -->|Yes| C[Overcomes attractive forces]\n    C --> D[Escapes as Gas]\n    D --> E[Average energy of remaining liquid decreases]\n    E --> F[Temperature of liquid drops]\n```",
      "quizzes": [
        {
          "question": "Which of the particles are most likely to escape during evaporation?",
          "options": [
            "The slowest particles at the bottom of the liquid",
            "The fastest particles at the surface of the liquid",
            "The slowest particles at the surface of the liquid",
            "The fastest particles at the bottom of the liquid"
          ],
          "answer": "The fastest particles at the surface of the liquid",
          "explanation": "Evaporation only occurs at the surface. Only the particles with the highest kinetic energy (the fastest ones) have enough energy to break the attractive forces and escape."
        },
        {
          "question": "Why does evaporation cause the remaining liquid to cool down?",
          "options": [
            "Because the escaping gas absorbs heat from the air.",
            "Because the most energetic particles leave, lowering the average kinetic energy of the remaining liquid.",
            "Because air movement physically cools the liquid surface.",
            "Because atmospheric pressure drops on the surface."
          ],
          "answer": "Because the most energetic particles leave, lowering the average kinetic energy of the remaining liquid.",
          "explanation": "Temperature is a measure of average kinetic energy. When high-energy particles escape, the average energy of the particles left behind is lower, meaning the temperature drops."
        },
        {
          "question": "Which of the following conditions would DECREASE the rate of evaporation of a puddle of water?",
          "options": [
            "Increasing the temperature of the surroundings",
            "Spreading the puddle out over a larger area",
            "A strong breeze blowing over the puddle",
            "High humidity in the air"
          ],
          "answer": "High humidity in the air",
          "explanation": "High humidity means the air is already saturated with water vapor. This leaves less 'room' in the air for new water molecules to evaporate into, slowing the process."
        },
        {
          "question": "A key difference between boiling and evaporation is that:",
          "options": [
            "Boiling causes cooling, while evaporation causes heating.",
            "Evaporation occurs at any temperature, while boiling only occurs at the boiling point.",
            "Evaporation happens throughout the liquid, while boiling only happens at the surface.",
            "Boiling turns liquid to solid, evaporation turns liquid to gas."
          ],
          "answer": "Evaporation occurs at any temperature, while boiling only occurs at the boiling point.",
          "explanation": "Evaporation can happen at room temperature (or any temp below boiling), whereas a liquid must reach its specific boiling point for boiling to occur."
        },
        {
          "question": "Where does boiling take place in a liquid?",
          "options": [
            "Only at the surface",
            "Only at the very bottom",
            "Throughout the entire liquid",
            "Only at the sides of the container"
          ],
          "answer": "Throughout the entire liquid",
          "explanation": "Unlike evaporation which is a surface phenomenon, boiling is a bulk process. You can see this as bubbles of gas forming everywhere inside the liquid during boiling."
        },
        {
          "question": "Spreading wet clothes out on a line instead of crumpling them up helps them dry faster because:",
          "options": [
            "It increases the temperature of the clothes.",
            "It decreases the humidity of the air.",
            "It increases the surface area exposed to the air.",
            "It decreases the wind speed around the clothes."
          ],
          "answer": "It increases the surface area exposed to the air.",
          "explanation": "A larger exposed surface area means more particles are at the surface and have the opportunity to escape the liquid state, thus increasing the evaporation rate."
        },
        {
          "question": "Which phenomenon explains why sweating cools down the human body?",
          "options": [
            "Condensation",
            "Boiling",
            "Evaporation",
            "Sublimation"
          ],
          "answer": "Evaporation",
          "explanation": "As sweat (a liquid) evaporates from the skin, the most energetic water molecules escape, leaving the lower-energy ones behind, effectively removing heat and lowering the skin's temperature."
        }
      ]
    },
    {
      "subtopicId": "3.1",
      "title": "General Wave Properties",
      "digitizedText": "# 3.1 General Wave Properties\n\nWelcome to the world of waves! Waves are fantastic because they transfer energy from one place to another without transferring matter. Imagine a Mexican wave in a stadium \u2013 the people move up and down, but the wave itself travels around the arena.\n\n## Types of Waves\nThere are two main types of waves you need to know:\n1. **Transverse Waves**: The vibrations are perpendicular (at right angles) to the direction of wave travel. Examples include light waves, water waves, and electromagnetic waves.\n2. **Longitudinal Waves**: The vibrations are parallel to the direction of wave travel. The best example is sound waves. They feature areas where particles are squashed together (compressions) and spread apart (rarefactions).\n\n```mermaid\ngraph TD\n    A[Waves Transfer Energy] --> B[Transverse Waves]\n    A --> C[Longitudinal Waves]\n    B --> D[Vibrations are perpendicular to travel]\n    C --> E[Vibrations are parallel to travel]\n    D --> F[Examples: Light, Water ripples]\n    E --> G[Examples: Sound, Ultrasound]\n```\n\n## Wave Characteristics\n- **Amplitude**: The maximum displacement from the rest position. A larger amplitude means more energy.\n- **Wavelength ($\\lambda$)**: The distance between two consecutive matching points (e.g., from crest to crest or trough to trough). \n- **Frequency ($f$)**: The number of waves passing a point every second. Measured in Hertz (Hz).\n- **Period ($T$)**: The time taken for one complete wave to pass. ($T = 1/f$).\n\n![Wavefronts, Crests and Troughs](/0625-physics/images/main_p50_i0.png)\n\n## The Wave Equation\nThe speed of a wave can be calculated using a simple equation:\n**$v = f \\times \\lambda$**\nWhere:\n- $v$ = wave speed in m/s\n- $f$ = frequency in Hz\n- $\\lambda$ = wavelength in meters\n\n## Wave Behaviors\nWhen waves travel, they can experience reflection, refraction, and diffraction.\n- **Reflection**: Bouncing back of waves when they hit a barrier.\n- **Refraction**: Bending of waves when they change speed (usually due to a change in depth for water waves, or a change in density for light). For example, when water waves enter shallower water, they slow down and their wavelength decreases.\n\n![Refraction of Wavefronts](/0625-physics/images/main_p55_i0.png)\n",
      "quizzes": [
        {
          "question": "What is the equation linking wave speed, frequency, and wavelength?",
          "options": [
            "v = f / \u03bb",
            "v = f \u00d7 \u03bb",
            "v = \u03bb / f",
            "f = v \u00d7 \u03bb"
          ],
          "answer": "v = f \u00d7 \u03bb"
        },
        {
          "question": "Which wave property is defined as the number of wavefronts passing a point per second?",
          "options": [
            "Amplitude",
            "Wavelength",
            "Frequency",
            "Speed"
          ],
          "answer": "Frequency"
        },
        {
          "question": "When water waves refract by entering shallower water, what happens to their speed and wavelength?",
          "options": [
            "Speed decreases, wavelength decreases",
            "Speed decreases, wavelength increases",
            "Speed increases, wavelength decreases",
            "Speed increases, wavelength increases"
          ],
          "answer": "Speed decreases, wavelength decreases"
        },
        {
          "question": "Sound waves are an example of which type of wave?",
          "options": [
            "Transverse",
            "Longitudinal",
            "Electromagnetic",
            "Stationary"
          ],
          "answer": "Longitudinal"
        },
        {
          "question": "The distance between two consecutive crests is called?",
          "options": [
            "Amplitude",
            "Period",
            "Wavelength",
            "Frequency"
          ],
          "answer": "Wavelength"
        },
        {
          "question": "If a wave has a frequency of 50 Hz and a wavelength of 2 m, what is its speed?",
          "options": [
            "25 m/s",
            "100 m/s",
            "0.04 m/s",
            "200 m/s"
          ],
          "answer": "100 m/s"
        },
        {
          "question": "What happens to the frequency of a wave during refraction?",
          "options": [
            "It increases",
            "It decreases",
            "It stays the same",
            "It becomes zero"
          ],
          "answer": "It stays the same"
        }
      ]
    },
    {
      "subtopicId": "3.2",
      "title": "Light",
      "digitizedText": "# 3.2 Light\n\nLight behaves as a transverse wave and allows us to see the world around us. In a vacuum, light travels incredibly fast\u2014at $3 \\times 10^8$ m/s!\n\n## Reflection of Light\nWhen a light ray strikes a mirror, it bounces off. \n**The Law of Reflection** states:\n*The angle of incidence ($i$) is always equal to the angle of reflection ($r$).*\nRemember, both angles are measured from the **normal** (an imaginary line drawn perpendicular to the surface).\n\n```mermaid\ngraph LR\n    A[Incident Ray] -->|Hits Mirror| B(Normal Line)\n    B -->|Bounces off| C[Reflected Ray]\n    style B stroke-dasharray: 5 5\n```\n\n## Refraction of Light\nWhen light passes from one transparent medium to another (e.g., from air to glass), its speed changes, which causes it to bend. This is called **refraction**.\n- Entering a **denser** medium (air to glass): Light slows down and bends **towards** the normal.\n- Entering a **less dense** medium (glass to air): Light speeds up and bends **away from** the normal.\n\n![Refraction of Light](/0625-physics/images/main_p40_i0.png)\n\n**Snell's Law** and Refractive Index ($n$):\n$n = \\frac{\\sin i}{\\sin r}$\n\n## Total Internal Reflection (TIR)\nIf light travels from a denser medium to a less dense medium, and the angle of incidence is greater than a specific angle called the **critical angle ($c$)**, it will not refract. Instead, it reflects entirely back inside the denser medium. This is the principle behind optical fibers used in internet cables!\n\nFormula relating critical angle and refractive index:\n$n = \\frac{1}{\\sin c}$\n\n## Lenses\n**Converging (Convex) Lenses** are thicker in the middle and cause parallel rays of light to converge (meet) at a point called the **principal focus ($F$)**.\nThe distance from the center of the lens to the principal focus is the **focal length**.\n\n![Converging Lens Ray Diagram](/0625-physics/images/main_p45_i0.png)\n",
      "quizzes": [
        {
          "question": "The law of reflection states that:",
          "options": [
            "Angle of incidence > angle of reflection",
            "Angle of incidence = angle of reflection",
            "Angle of incidence < angle of reflection",
            "Angle of incidence = angle of refraction"
          ],
          "answer": "Angle of incidence = angle of reflection"
        },
        {
          "question": "What is the formula for the refractive index n using angles of incidence and refraction?",
          "options": [
            "n = cos(i) / cos(r)",
            "n = sin(i) / sin(r)",
            "n = tan(i) / tan(r)",
            "n = sin(r) / sin(i)"
          ],
          "answer": "n = sin(i) / sin(r)"
        },
        {
          "question": "Total internal reflection occurs when light travels from:",
          "options": [
            "A less dense to a more dense medium",
            "A denser to a less dense medium at an angle greater than the critical angle",
            "A denser to a less dense medium at an angle less than the critical angle",
            "Any medium to a vacuum"
          ],
          "answer": "A denser to a less dense medium at an angle greater than the critical angle"
        },
        {
          "question": "A converging lens produces a virtual, upright, and magnified image when the object is placed:",
          "options": [
            "Beyond 2F",
            "At 2F",
            "Between F and 2F",
            "Between the lens and F"
          ],
          "answer": "Between the lens and F"
        },
        {
          "question": "The refractive index of glass is 1.5. What is the speed of light in this glass? (Speed of light in vacuum = 3 \u00d7 10^8 m/s)",
          "options": [
            "2 \u00d7 10^8 m/s",
            "4.5 \u00d7 10^8 m/s",
            "1.5 \u00d7 10^8 m/s",
            "3 \u00d7 10^8 m/s"
          ],
          "answer": "2 \u00d7 10^8 m/s"
        },
        {
          "question": "Which characteristic of an image is formed by a plane mirror?",
          "options": [
            "Real and inverted",
            "Virtual and inverted",
            "Virtual and laterally inverted",
            "Real and laterally inverted"
          ],
          "answer": "Virtual and laterally inverted"
        },
        {
          "question": "When light passes from air into a glass block, it bends:",
          "options": [
            "Towards the normal",
            "Away from the normal",
            "It does not bend",
            "It reflects completely"
          ],
          "answer": "Towards the normal"
        }
      ]
    },
    {
      "subtopicId": "3.3",
      "title": "Electromagnetic Spectrum",
      "digitizedText": "# 3.3 Electromagnetic Spectrum\n\nThe Electromagnetic (EM) Spectrum is a family of transverse waves. They are everywhere around us, from the light we see to the Wi-Fi signals we use.\n\n## Properties of EM Waves\nAll electromagnetic waves share these crucial properties:\n1. They are all **transverse waves**.\n2. They can travel through a **vacuum** (they don't need a medium like air or water).\n3. They all travel at the **speed of light** in a vacuum ($3 \\times 10^8$ m/s).\n\n## The Spectrum Order\nFrom longest wavelength (lowest frequency) to shortest wavelength (highest frequency):\n\n```mermaid\ngraph TD\n    A[Radio Waves] --> B[Microwaves]\n    B --> C[Infrared]\n    C --> D[Visible Light]\n    D --> E[Ultraviolet]\n    E --> F[X-rays]\n    F --> G[Gamma Rays]\n    style A fill:#ffcccc\n    style G fill:#ccccff\n```\n\n## Uses and Dangers\n- **Radio Waves**: \n  - *Uses*: Television and radio communications.\n- **Microwaves**: \n  - *Uses*: Satellite communications, mobile phones, and cooking food.\n  - *Dangers*: Internal heating of body tissues.\n- **Infrared (IR)**: \n  - *Uses*: Electrical heaters, cooking, night-vision cameras, remote controls.\n  - *Dangers*: Skin burns.\n- **Visible Light**: \n  - *Uses*: Vision, photography, optical fibers.\n- **Ultraviolet (UV)**: \n  - *Uses*: Fluorescent lamps, security marking, sunbeds.\n  - *Dangers*: Damage to surface cells and eyes, leading to skin cancer and cataracts.\n- **X-rays**: \n  - *Uses*: Medical imaging (seeing broken bones), security scanners.\n  - *Dangers*: Mutation of DNA leading to cancer.\n- **Gamma Rays**: \n  - *Uses*: Sterilizing medical equipment, treating cancer (radiotherapy).\n  - *Dangers*: Mutation of DNA leading to cancer.\n",
      "quizzes": [
        {
          "question": "Which of the following is NOT an electromagnetic wave?",
          "options": [
            "X-rays",
            "Sound waves",
            "Microwaves",
            "Ultraviolet"
          ],
          "answer": "Sound waves"
        },
        {
          "question": "Which electromagnetic wave has the highest frequency?",
          "options": [
            "Radio waves",
            "Visible light",
            "X-rays",
            "Gamma rays"
          ],
          "answer": "Gamma rays"
        },
        {
          "question": "All electromagnetic waves travel through a vacuum at what speed?",
          "options": [
            "3 \u00d7 10^6 m/s",
            "3 \u00d7 10^8 m/s",
            "340 m/s",
            "1500 m/s"
          ],
          "answer": "3 \u00d7 10^8 m/s"
        },
        {
          "question": "Which EM wave is used for thermal imaging and remote controls?",
          "options": [
            "Infrared",
            "Ultraviolet",
            "Microwaves",
            "Radio waves"
          ],
          "answer": "Infrared"
        },
        {
          "question": "Overexposure to which wave can cause premature skin aging and skin cancer?",
          "options": [
            "Infrared",
            "Ultraviolet",
            "Radio waves",
            "Visible light"
          ],
          "answer": "Ultraviolet"
        },
        {
          "question": "What is a primary use of microwaves?",
          "options": [
            "Sterilizing medical equipment",
            "Optical fibers",
            "Satellite communication and cooking",
            "Treating cancer"
          ],
          "answer": "Satellite communication and cooking"
        },
        {
          "question": "Which color of visible light has the longest wavelength?",
          "options": [
            "Violet",
            "Green",
            "Yellow",
            "Red"
          ],
          "answer": "Red"
        }
      ]
    },
    {
      "subtopicId": "3.4",
      "title": "Sound",
      "digitizedText": "# 3.4 Sound\n\nSound waves are how we hear the world. They are fundamentally different from light because they are **longitudinal waves** and require a medium to travel.\n\n## How is Sound Produced?\nSound is produced by vibrating objects. These vibrations compress and expand the surrounding air, creating a series of **compressions** (high pressure) and **rarefactions** (low pressure) that travel through the air.\n\n```mermaid\ngraph LR\n    A[Vibrating Source] --> B[Compressions]\n    A --> C[Rarefactions]\n    B --> D[Sound Wave Travels]\n    C --> D\n    D --> E[Ear Drum Vibrates]\n```\n\n## Speed of Sound\nBecause sound relies on particles knocking into each other, it travels fastest where particles are closest together:\n- **Solids**: Fastest (approx. $5000$ m/s in steel)\n- **Liquids**: Slower (approx. $1500$ m/s in water)\n- **Gases**: Slowest (approx. $340$ m/s in air)\n*Note: Sound cannot travel through a vacuum (like in space) because there are no particles to carry the vibrations!*\n\n## Pitch and Loudness\n- **Pitch**: How high or low a sound is. It depends on the **frequency** of the wave. High frequency = high pitch.\n- **Loudness**: How loud or quiet a sound is. It depends on the **amplitude** of the wave. Large amplitude = loud sound.\n\n## Echoes\nAn echo is simply a **reflection** of sound off a hard, flat surface.\nYou can use echoes to measure distance. If you know the speed of sound, you can time how long an echo takes to return and calculate the distance ($d = \\frac{v \\times t}{2}$).\n\n## Human Hearing\nThe audible range for a healthy young human ear is **20 Hz to 20,000 Hz**.\nSounds above 20,000 Hz are called **ultrasound**. Ultrasound is used for medical imaging (like scanning a baby in the womb) and non-destructive testing in industry.\n",
      "quizzes": [
        {
          "question": "Sound travels fastest in which of the following media?",
          "options": [
            "Vacuum",
            "Gases",
            "Liquids",
            "Solids"
          ],
          "answer": "Solids"
        },
        {
          "question": "The approximate range of audible frequencies for a healthy human ear is:",
          "options": [
            "2 Hz to 2000 Hz",
            "20 Hz to 20,000 Hz",
            "200 Hz to 200,000 Hz",
            "20,000 Hz to 20,000,000 Hz"
          ],
          "answer": "20 Hz to 20,000 Hz"
        },
        {
          "question": "An echo is the result of the:",
          "options": [
            "Refraction of sound",
            "Reflection of sound",
            "Diffraction of sound",
            "Interference of sound"
          ],
          "answer": "Reflection of sound"
        },
        {
          "question": "The pitch of a sound is directly related to its:",
          "options": [
            "Amplitude",
            "Speed",
            "Frequency",
            "Wavelength"
          ],
          "answer": "Frequency"
        },
        {
          "question": "The loudness of a sound is directly related to its:",
          "options": [
            "Amplitude",
            "Speed",
            "Frequency",
            "Wavelength"
          ],
          "answer": "Amplitude"
        },
        {
          "question": "Compressions and rarefactions are characteristics of:",
          "options": [
            "Transverse waves",
            "Longitudinal waves",
            "Electromagnetic waves",
            "Light waves"
          ],
          "answer": "Longitudinal waves"
        },
        {
          "question": "A sound wave takes 2 seconds to travel to a wall and echo back to the source. If the speed of sound is 340 m/s, how far is the wall?",
          "options": [
            "170 m",
            "340 m",
            "680 m",
            "85 m"
          ],
          "answer": "340 m"
        }
      ]
    },
    {
      "subtopicId": "4.1",
      "title": "Simple Phenomena of Magnetism",
      "digitizedText": "### 1. Properties of Magnets\n\nMagnetism is a fundamental force of nature. Magnets have two poles: a North pole and a South pole. \n\n*   **Law of Magnetism:** Like poles repel, and unlike poles attract.\n*   **Magnetic Materials:** Materials that can be magnetized or are attracted to a magnet. The most common magnetic materials are iron, steel, cobalt, and nickel.\n*   **Non-magnetic Materials:** Materials that are not attracted to a magnet, such as plastic, wood, copper, and aluminum.\n\n![Diagram](/0625-physics/images/main_p71_i0.png)\n\n### 2. Induced Magnetism\nWhen a piece of unmagnetized magnetic material touches or is brought near the pole of a permanent magnet, it becomes a magnet itself. The induced pole is of the opposite sign to the inducing pole.\n\n### 3. Magnetic Fields\nA magnetic field is a region in which a magnetic pole experiences a force. Magnetic field lines indicate the direction of the magnetic force. They always point from the North pole to the South pole outside the magnet.\n\n![Diagram](/0625-physics/images/main_p72_i0.png)\n\n### 4. Electromagnets\nAn electromagnet is a type of magnet in which the magnetic field is produced by an electric current. It usually consists of a coil of wire wound around a soft iron core. The magnetic field disappears when the current is turned off.\n\n```mermaid\nflowchart TD\n    A[Magnet Types] --> B(Permanent Magnets)\n    A --> C(Temporary Magnets)\n    A --> D(Electromagnets)\n    B --> E[Made of hard magnetic materials like steel]\n    C --> F[Made of soft magnetic materials like iron]\n    D --> G[Magnetic field generated by electric current]\n```\n",
      "quizzes": [
        {
          "question": "Which of the following materials is magnetic?",
          "options": [
            "Copper",
            "Aluminum",
            "Steel",
            "Plastic"
          ],
          "answer": "Steel",
          "explanation": "Steel is a magnetic material (made mostly of iron), whereas copper, aluminum, and plastic are non-magnetic."
        },
        {
          "question": "What is the rule for magnetic poles?",
          "options": [
            "Like poles attract",
            "Unlike poles repel",
            "Like poles repel and unlike poles attract",
            "All poles attract each other"
          ],
          "answer": "Like poles repel and unlike poles attract",
          "explanation": "This is the fundamental law of magnetism. North repels North, but North attracts South."
        },
        {
          "question": "In which direction do magnetic field lines point outside a magnet?",
          "options": [
            "From South to North",
            "From North to South",
            "From East to West",
            "From positive to negative"
          ],
          "answer": "From North to South",
          "explanation": "By convention, magnetic field lines outside a magnet go from the North pole to the South pole."
        },
        {
          "question": "Which material is best suited for the core of an electromagnet?",
          "options": [
            "Steel",
            "Soft iron",
            "Copper",
            "Wood"
          ],
          "answer": "Soft iron",
          "explanation": "Soft iron is easily magnetized and demagnetized, making it ideal for electromagnets where the field needs to be turned on and off quickly."
        },
        {
          "question": "What happens to an electromagnet when the electric current is switched off?",
          "options": [
            "It retains its magnetism permanently.",
            "Its magnetic field reverses direction.",
            "It loses its magnetism.",
            "It becomes a stronger magnet."
          ],
          "answer": "It loses its magnetism.",
          "explanation": "An electromagnet's magnetic field is produced by the electric current. When the current stops, the magnetic field disappears."
        },
        {
          "question": "What is a region where a magnetic pole experiences a force called?",
          "options": [
            "Electric field",
            "Gravitational field",
            "Magnetic field",
            "Electromagnetic field"
          ],
          "answer": "Magnetic field",
          "explanation": "A magnetic field is the specific region around a magnet where magnetic forces can be detected."
        },
        {
          "question": "What happens when a soft iron nail is brought near a strong permanent magnet?",
          "options": [
            "It gets repelled.",
            "It becomes an induced magnet and is attracted.",
            "It melts.",
            "Nothing happens."
          ],
          "answer": "It becomes an induced magnet and is attracted.",
          "explanation": "The permanent magnet induces a temporary opposite pole in the near end of the soft iron nail, causing attraction."
        }
      ]
    },
    {
      "subtopicId": "4.2",
      "title": "Electrical Quantities",
      "digitizedText": "### 1. Electric Field and Electrostatics\nAn **Electric Field** is a region where a charged particle experiences a force. The direction of the field is defined as the direction of the force on a positive charge (from positive to negative).\n\n*   **Same charges:** Repel\n*   **Opposite charges:** Attract\n\n![Diagram](/0625-physics/images/main_p61_i0.png)\n\n### 2. Charge and Current\n**Charge (Q)** is measured in **Coulombs (C)**. A single electron has a charge of $1.6 \\times 10^{-19} C$.\n**Current (I)** is the rate of flow of electric charge. It indicates the \"speed of charge\".\n\n$$I = \\frac{Q}{t}$$\n\n*   Current is measured in **Amperes (A)**.\n*   To measure current, an **ammeter** must be connected in series in the circuit.\n*   Conventional current flows from positive to negative, whereas electron flow is from negative to positive.\n\n![Diagram](/0625-physics/images/main_p63_i0.png)\n\n### 3. Potential Difference and E.M.F. (Voltage)\n**Potential Difference (V)** is the energy required to carry 1 Coulomb of charge from one point to another in a conductor.\n\n$$V = \\frac{E}{Q}$$\n\n**Electromotive Force (E.M.F.)** is the total energy required to carry 1 Coulomb of charge around the entire circuit. Both are measured in **Volts (V)**.\n*   To measure voltage, a **voltmeter** must be connected in parallel.\n\n![Diagram](/0625-physics/images/main_p64_i0.png)\n\n### 4. Electrical Energy and Power\nPower is the rate at which electrical energy is transferred.\n*   **Electrical Energy (E):** $E = V I t$\n*   **Electrical Power (P):** $P = V I$ and $P = \\frac{E}{t}$\n*   **Power Loss in Cables:** $P = I^2 R$\n\n![Diagram](/0625-physics/images/main_p70_i0.png)\n\n```mermaid\nflowchart TD\n    A[Electrical Quantities] --> B(Charge Q)\n    A --> C(Current I)\n    A --> D(Voltage V)\n    A --> E(Power P)\n    B --> F[Measured in Coulombs]\n    C --> G[Rate of charge flow: I = Q/t]\n    D --> H[Energy per unit charge: V = E/Q]\n    E --> I[Rate of energy transfer: P = VI]\n```\n",
      "quizzes": [
        {
          "question": "What is the unit of electric current?",
          "options": [
            "Volts",
            "Amperes",
            "Coulombs",
            "Joules"
          ],
          "answer": "Amperes",
          "explanation": "Current is measured in Amperes (A), which represents the rate of flow of charge."
        },
        {
          "question": "How should an ammeter be connected in a circuit to measure current?",
          "options": [
            "In parallel with the component",
            "In series with the component",
            "Directly across the battery",
            "In any configuration"
          ],
          "answer": "In series with the component",
          "explanation": "An ammeter must be connected in series so that all the current flowing through the circuit passes through it."
        },
        {
          "question": "If 10 Coulombs of charge flows through a wire in 2 seconds, what is the current?",
          "options": [
            "20 A",
            "5 A",
            "12 A",
            "8 A"
          ],
          "answer": "5 A",
          "explanation": "Current I = Q / t = 10 C / 2 s = 5 A."
        },
        {
          "question": "Which quantity is defined as the energy transferred per unit charge?",
          "options": [
            "Current",
            "Power",
            "Potential Difference",
            "Resistance"
          ],
          "answer": "Potential Difference",
          "explanation": "Potential difference (Voltage) is the energy transferred per unit charge, V = E / Q."
        },
        {
          "question": "What is the formula for calculating electrical power?",
          "options": [
            "P = V / I",
            "P = I / V",
            "P = V * I",
            "P = V * Q"
          ],
          "answer": "P = V * I",
          "explanation": "Electrical power is the product of potential difference and current, P = V * I."
        },
        {
          "question": "Which instrument is used to measure electromotive force (e.m.f)?",
          "options": [
            "Ammeter",
            "Voltmeter",
            "Galvanometer",
            "Ohmmeter"
          ],
          "answer": "Voltmeter",
          "explanation": "E.M.F. and potential difference are both measured in Volts using a voltmeter connected in parallel."
        },
        {
          "question": "What does conventional current refer to?",
          "options": [
            "The flow of electrons from negative to positive",
            "The flow of positive charge from positive to negative",
            "The movement of neutrons",
            "The resistance in a wire"
          ],
          "answer": "The flow of positive charge from positive to negative",
          "explanation": "By historical convention, current is considered to flow from the positive terminal to the negative terminal."
        },
        {
          "question": "The direction of an electric field is defined by the force acting on a:",
          "options": [
            "Negative charge",
            "Neutral particle",
            "Positive charge",
            "Magnetic pole"
          ],
          "answer": "Positive charge",
          "explanation": "Electric field lines point in the direction that a positive test charge would be pushed or pulled."
        }
      ]
    },
    {
      "subtopicId": "4.3",
      "title": "Electric Circuits",
      "digitizedText": "### 1. Ohm's Law and Resistance\n**Ohm's Law** states that the potential difference across a conductor is directly proportional to the current through it, provided temperature remains constant.\n\n$$V = IR$$\n\n**Resistance (R)** is the ratio of potential difference to current, measured in Ohms ($\\Omega$).\nFactors affecting the resistance of a wire:\n1.  **Length:** Resistance is directly proportional to length ($R \\propto L$). Longer wires have more resistance.\n2.  **Cross-sectional Area (Thickness):** Resistance is inversely proportional to area ($R \\propto 1/A$). Thicker wires have less resistance.\n3.  **Temperature:** Resistance usually increases with temperature.\n4.  **Material:** Different materials have different conductivities (e.g., copper has low resistance).\n\n![Diagram](/0625-physics/images/main_p65_i0.png)\n\n### 2. Series Circuits\nIn a series circuit, components are connected end-to-end.\n*   **Current:** Constant everywhere ($I_T = I_1 = I_2 = I_3$).\n*   **Voltage:** The total voltage is the sum of the voltages across each component ($V_T = V_1 + V_2 + V_3$).\n*   **Resistance:** Total resistance is the sum of individual resistances ($R_T = R_1 + R_2 + R_3$).\n\n### 3. Parallel Circuits\nIn a parallel circuit, components are connected across multiple branches.\n*   **Voltage:** Constant across all parallel branches ($V_T = V_1 = V_2 = V_3$).\n*   **Current:** The total current splits across the branches ($I_T = I_1 + I_2 + I_3$).\n*   **Resistance:** The total resistance decreases as more branches are added. $\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$.\n\n![Diagram](/0625-physics/images/main_p67_i0.png)\n\n### 4. Circuit Analysis Example\nTo solve complex circuits, simplify them step-by-step by combining series and parallel resistors into a single equivalent resistance.\n\n![Diagram](/0625-physics/images/main_p68_i0.png)\n\n```mermaid\nflowchart TD\n    A[Electric Circuits] --> B(Series)\n    A --> C(Parallel)\n    B --> D[Current is the same everywhere]\n    B --> E[Voltage is shared]\n    B --> F[Rt = R1 + R2 + ...]\n    C --> G[Voltage is the same across branches]\n    C --> H[Current is shared]\n    C --> I[1/Rt = 1/R1 + 1/R2 + ...]\n```\n",
      "quizzes": [
        {
          "question": "According to Ohm's Law, what is the relationship between voltage and current at a constant temperature?",
          "options": [
            "Inversely proportional",
            "Directly proportional",
            "Exponential",
            "No relationship"
          ],
          "answer": "Directly proportional",
          "explanation": "Ohm's Law states that V is directly proportional to I, meaning V = IR where R is constant."
        },
        {
          "question": "What happens to the resistance of a wire if its length is doubled?",
          "options": [
            "It halves",
            "It quadruples",
            "It doubles",
            "It remains the same"
          ],
          "answer": "It doubles",
          "explanation": "Resistance is directly proportional to the length of the wire (R \u221d L)."
        },
        {
          "question": "In a series circuit with three identical resistors, what can be said about the current?",
          "options": [
            "It is highest at the first resistor.",
            "It splits evenly among the three resistors.",
            "It is the same through all three resistors.",
            "It drops to zero at the last resistor."
          ],
          "answer": "It is the same through all three resistors.",
          "explanation": "In a series circuit, there is only one path for the electrons, so current is constant everywhere."
        },
        {
          "question": "Two 4 \u03a9 resistors are connected in series. What is the total resistance?",
          "options": [
            "2 \u03a9",
            "4 \u03a9",
            "8 \u03a9",
            "16 \u03a9"
          ],
          "answer": "8 \u03a9",
          "explanation": "For series resistors, total resistance Rt = R1 + R2 = 4 + 4 = 8 \u03a9."
        },
        {
          "question": "Two 6 \u03a9 resistors are connected in parallel. What is the total effective resistance?",
          "options": [
            "12 \u03a9",
            "6 \u03a9",
            "3 \u03a9",
            "1.5 \u03a9"
          ],
          "answer": "3 \u03a9",
          "explanation": "For parallel resistors, 1/Rt = 1/R1 + 1/R2 = 1/6 + 1/6 = 2/6. So Rt = 6/2 = 3 \u03a9."
        },
        {
          "question": "Which of the following increases the resistance of a metal wire?",
          "options": [
            "Decreasing its length",
            "Increasing its cross-sectional area",
            "Increasing its temperature",
            "Cooling it down"
          ],
          "answer": "Increasing its temperature",
          "explanation": "For most metals, an increase in temperature causes the atoms to vibrate more, increasing resistance to electron flow."
        },
        {
          "question": "In a parallel circuit, what remains constant across all branches?",
          "options": [
            "Current",
            "Resistance",
            "Power",
            "Potential Difference (Voltage)"
          ],
          "answer": "Potential Difference (Voltage)",
          "explanation": "Every branch in a parallel circuit is connected across the same two points, so they share the same voltage."
        }
      ]
    },
    {
      "subtopicId": "4.4",
      "title": "Electrical Safety",
      "digitizedText": "### 1. Dangers of Electricity\nElectricity can be dangerous if mishandled. The main hazards include:\n*   **Damaged Insulation:** Exposed wires can cause electric shocks if touched, or short circuits which may lead to fires.\n*   **Overheating of Cables:** If too much current flows through a wire, its resistance causes it to heat up, potentially melting the insulation and starting a fire.\n*   **Damp Conditions:** Water is a good conductor of electricity. Wet conditions significantly lower the resistance of the human body, increasing the risk of a fatal electric shock.\n\n### 2. Safety Devices\nTo protect against these hazards, several safety devices are used:\n*   **Fuses:** A fuse is a thin piece of wire that melts and breaks the circuit if the current exceeds its rating. It must be connected to the live wire.\n*   **Circuit Breakers:** These are automatic switches that \"trip\" (turn off) when the current is too high. They can be easily reset, unlike fuses which must be replaced.\n*   **Earth Wire:** The earth wire provides a low-resistance path to the ground. If a fault causes the metal casing of an appliance to become live, the current safely flows to earth, preventing a shock and usually blowing the fuse.\n*   **Double Insulation:** Some appliances have plastic casings and no exposed metal parts. These do not require an earth wire and are said to be double-insulated.\n\n```mermaid\nflowchart LR\n    A[Electrical Hazards] --> B(Fires)\n    A --> C(Electric Shocks)\n    B --> D[Prevented by Fuses & Circuit Breakers]\n    C --> E[Prevented by Earth Wires & Double Insulation]\n```\n",
      "quizzes": [
        {
          "question": "Why is damaged insulation on a wire dangerous?",
          "options": [
            "It increases the wire's resistance",
            "It wastes electrical energy",
            "It can cause electric shocks or short circuits",
            "It prevents the appliance from turning off"
          ],
          "answer": "It can cause electric shocks or short circuits",
          "explanation": "Exposed wires can be touched accidentally (causing shock) or touch each other (causing a short circuit and fire)."
        },
        {
          "question": "How does a fuse protect a circuit?",
          "options": [
            "It slows down the current.",
            "It melts and breaks the circuit when current is too high.",
            "It redirects current to the earth wire.",
            "It increases voltage to compensate."
          ],
          "answer": "It melts and breaks the circuit when current is too high.",
          "explanation": "A fuse contains a thin wire designed to melt when heated by a current exceeding its safety rating."
        },
        {
          "question": "To which wire in a plug is the fuse connected?",
          "options": [
            "Neutral wire",
            "Earth wire",
            "Live wire",
            "Any of the wires"
          ],
          "answer": "Live wire",
          "explanation": "The fuse must be in the live wire so that if it blows, the appliance is completely disconnected from the high voltage supply."
        },
        {
          "question": "What is the main purpose of the earth wire?",
          "options": [
            "To supply power to the appliance",
            "To complete the circuit",
            "To protect the user from electric shock if the metal casing becomes live",
            "To prevent the appliance from overheating"
          ],
          "answer": "To protect the user from electric shock if the metal casing becomes live",
          "explanation": "The earth wire provides a safe path for current to flow to the ground instead of through a person touching a faulty appliance."
        },
        {
          "question": "Which of the following conditions significantly increases the risk of electric shock?",
          "options": [
            "Dry skin",
            "Damp conditions",
            "Wearing rubber gloves",
            "Using battery-powered devices"
          ],
          "answer": "Damp conditions",
          "explanation": "Water containing impurities conducts electricity well, greatly lowering the body's resistance and allowing large, dangerous currents to flow."
        },
        {
          "question": "What does 'double insulation' mean?",
          "options": [
            "The appliance has two earth wires.",
            "The appliance has a plastic casing with no exposed metal parts.",
            "The appliance requires twice the normal voltage.",
            "The cables are twice as thick."
          ],
          "answer": "The appliance has a plastic casing with no exposed metal parts.",
          "explanation": "Double-insulated appliances have a non-conducting outer casing, meaning the user cannot get shocked even if there's an internal fault. They don't need an earth wire."
        },
        {
          "question": "Why are circuit breakers often preferred over fuses?",
          "options": [
            "They are cheaper.",
            "They handle much higher voltages.",
            "They can be easily reset after tripping.",
            "They don't use any electricity."
          ],
          "answer": "They can be easily reset after tripping.",
          "explanation": "Fuses must be replaced once they melt, whereas circuit breakers are switches that can simply be flipped back on."
        }
      ]
    },
    {
      "subtopicId": "4.5",
      "title": "Electromagnetic Effects (Motor Effect)",
      "digitizedText": "### 1. Magnetic Effect of a Current\nWhen an electric current flows through a wire, it generates a magnetic field around it. The field lines are concentric circles around the wire. The direction of the magnetic field can be determined using the **Right-Hand Grip Rule**: if your thumb points in the direction of the current, your fingers curl in the direction of the magnetic field lines.\n\n### 2. Force on a Current-Carrying Conductor (The Motor Effect)\nWhen a current-carrying wire is placed in a magnetic field, it experiences a force. This happens because the magnetic field around the wire interacts with the external magnetic field.\n*   The force is strongest when the wire is perpendicular to the magnetic field.\n*   There is zero force if the wire is parallel to the magnetic field.\n\n**Fleming's Left-Hand Rule** is used to find the direction of the force:\n*   **First finger:** Direction of Magnetic Field (North to South)\n*   **Second finger:** Direction of Current (Positive to Negative)\n*   **Thumb:** Direction of Force (Motion)\n\n![Diagram](/0625-physics/images/main_p73_i0.png)\n![Diagram](/0625-physics/images/main_p74_i0.png)\n\n### 3. DC Motor\nA simple direct-current (DC) motor uses the motor effect to create continuous rotation.\n*   It consists of a rectangular coil of wire in a magnetic field.\n*   Current flows in opposite directions on each side of the coil, causing one side to be pushed up and the other down, producing a turning effect.\n*   A **split-ring commutator** is used to reverse the current in the coil every half-turn. This ensures the force on the coil keeps it turning in the same direction continuously.\n\n![Diagram](/0625-physics/images/main_p75_i0.png)\n\n```mermaid\nflowchart TD\n    A[Motor Effect] --> B[Current-carrying wire]\n    A --> C[External Magnetic Field]\n    B & C --> D[Interact to produce a Force]\n    D --> E[Predicted by Fleming's Left-Hand Rule]\n    D --> F[Applied in DC Motors]\n```\n",
      "quizzes": [
        {
          "question": "What happens when a current-carrying wire is placed in a magnetic field?",
          "options": [
            "It gets cold.",
            "It becomes a permanent magnet.",
            "It experiences a force.",
            "It produces light."
          ],
          "answer": "It experiences a force.",
          "explanation": "The interaction between the wire's magnetic field and the external magnetic field produces a force. This is known as the motor effect."
        },
        {
          "question": "Which rule determines the direction of force on a current-carrying wire in a magnetic field?",
          "options": [
            "Right-Hand Grip Rule",
            "Fleming's Left-Hand Rule",
            "Fleming's Right-Hand Rule",
            "Lenz's Law"
          ],
          "answer": "Fleming's Left-Hand Rule",
          "explanation": "Fleming's Left-Hand Rule correlates the directions of the magnetic Field, Current, and resulting Force (Motion)."
        },
        {
          "question": "In Fleming's Left-Hand Rule, what does the first finger represent?",
          "options": [
            "Direction of Current",
            "Direction of Force",
            "Direction of Magnetic Field",
            "Direction of Electron Flow"
          ],
          "answer": "Direction of Magnetic Field",
          "explanation": "The First finger points in the direction of the Field (North to South)."
        },
        {
          "question": "What is the function of a split-ring commutator in a DC motor?",
          "options": [
            "To increase the voltage.",
            "To reverse the current direction in the coil every half turn.",
            "To act as a permanent magnet.",
            "To stop the motor from spinning too fast."
          ],
          "answer": "To reverse the current direction in the coil every half turn.",
          "explanation": "By reversing the current every half turn, the commutator ensures the turning effect (torque) remains in the same direction, allowing continuous rotation."
        },
        {
          "question": "Under what condition is the force on a current-carrying wire in a magnetic field zero?",
          "options": [
            "When the wire is perpendicular to the field.",
            "When the current is very high.",
            "When the wire is parallel to the magnetic field.",
            "When the magnetic field is very strong."
          ],
          "answer": "When the wire is parallel to the magnetic field.",
          "explanation": "The motor effect force is maximum at 90 degrees and drops to zero if the current flows parallel to the magnetic field lines."
        },
        {
          "question": "How can you increase the speed of a DC motor?",
          "options": [
            "Decrease the current.",
            "Use a weaker magnet.",
            "Increase the current or use a stronger magnet.",
            "Remove the split-ring commutator."
          ],
          "answer": "Increase the current or use a stronger magnet.",
          "explanation": "Increasing current, using stronger magnets, or adding more turns to the coil will increase the force and thus the speed of rotation."
        },
        {
          "question": "Which rule is used to find the pattern of the magnetic field around a straight current-carrying wire?",
          "options": [
            "Fleming's Left-Hand Rule",
            "Right-Hand Grip Rule",
            "Ohm's Law",
            "Faraday's Law"
          ],
          "answer": "Right-Hand Grip Rule",
          "explanation": "The Right-Hand Grip Rule shows that if the thumb points along the current, the curled fingers show the circular magnetic field direction."
        }
      ]
    },
    {
      "subtopicId": "4.6",
      "title": "Electromagnetic Effects (Induction & Transformers)",
      "digitizedText": "### 1. Electromagnetic Induction\nIf a wire \"cuts\" through magnetic field lines, or if the magnetic field through a coil changes, a voltage (Electromotive Force or E.M.F.) is induced. If the circuit is closed, an induced current flows. This is called electromagnetic induction.\n\n*   **Faraday's Law:** The magnitude of the induced E.M.F. is proportional to the rate at which magnetic field lines are cut.\n*   You can increase the induced E.M.F. by:\n    1. Moving the magnet or wire faster.\n    2. Using a stronger magnet.\n    3. Increasing the number of turns on the coil.\n\n![Diagram](/0625-physics/images/main_p76_i0.png)\n\n### 2. A.C. Generator\nAn AC generator uses electromagnetic induction to produce alternating current (A.C.).\n*   A coil is rotated inside a magnetic field, cutting the field lines and inducing an E.M.F.\n*   Instead of a split-ring commutator, it uses **slip rings**, which keep continuous contact with the ends of the coil without reversing the connections. This results in an alternating output voltage.\n\n### 3. Transformers\nA transformer changes the voltage of an alternating current. It consists of a primary coil and a secondary coil wound around a soft iron core.\n*   An AC current in the primary coil creates a constantly changing magnetic field in the iron core.\n*   This changing magnetic field cuts through the secondary coil, inducing an AC voltage in it.\n*   **Step-up transformer:** Has more turns on the secondary coil; increases voltage.\n*   **Step-down transformer:** Has fewer turns on the secondary coil; decreases voltage.\n\n**Transformer Equation:**\n$$\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$$\nWhere $V$ is voltage, $N$ is number of turns, $p$ is primary, and $s$ is secondary.\nFor a 100% efficient transformer, Electrical Power In = Electrical Power Out:\n$$V_p \\times I_p = V_s \\times I_s$$\n\n![Diagram](/0625-physics/images/main_p77_i0.png)\n\n```mermaid\nflowchart TD\n    A[Transformers] --> B(Step-Up)\n    A --> C(Step-Down)\n    B --> D[More turns on secondary coil]\n    B --> E[Increases Voltage, Decreases Current]\n    C --> F[Fewer turns on secondary coil]\n    C --> G[Decreases Voltage, Increases Current]\n```\n",
      "quizzes": [
        {
          "question": "What is electromagnetic induction?",
          "options": [
            "Creating a magnet using electricity",
            "Inducing a voltage by changing the magnetic field across a conductor",
            "The force on a wire in a magnetic field",
            "Static electricity buildup on an insulator"
          ],
          "answer": "Inducing a voltage by changing the magnetic field across a conductor",
          "explanation": "Electromagnetic induction refers to generating an electromotive force (voltage) due to a changing magnetic environment."
        },
        {
          "question": "Which of the following does NOT increase the induced e.m.f. in a coil?",
          "options": [
            "Moving the magnet faster",
            "Using a stronger magnetic field",
            "Increasing the number of turns on the coil",
            "Holding the magnet stationary inside the coil"
          ],
          "answer": "Holding the magnet stationary inside the coil",
          "explanation": "Induction requires relative motion or a changing magnetic field. If the magnet is stationary, no field lines are being cut, so e.m.f. is zero."
        },
        {
          "question": "What type of current is produced by a basic generator with slip rings?",
          "options": [
            "Direct Current (DC)",
            "Alternating Current (AC)",
            "Static Electricity",
            "No current"
          ],
          "answer": "Alternating Current (AC)",
          "explanation": "Slip rings maintain a constant connection to the rotating coil, meaning the output current naturally alternates direction every half turn."
        },
        {
          "question": "What is the primary function of a step-up transformer?",
          "options": [
            "To increase the current",
            "To convert AC to DC",
            "To increase the voltage",
            "To decrease the resistance"
          ],
          "answer": "To increase the voltage",
          "explanation": "A step-up transformer increases voltage for efficient power transmission, which simultaneously decreases current to minimize power loss in cables."
        },
        {
          "question": "Why do transformers only work with Alternating Current (AC)?",
          "options": [
            "DC is too dangerous.",
            "AC produces a constantly changing magnetic field needed for induction.",
            "DC creates too much heat.",
            "AC travels faster than DC."
          ],
          "answer": "AC produces a constantly changing magnetic field needed for induction.",
          "explanation": "Electromagnetic induction in the secondary coil only happens if the magnetic field is changing. A steady DC current creates a static magnetic field, which induces nothing."
        },
        {
          "question": "A transformer has 100 turns on the primary coil and 500 turns on the secondary coil. If the primary voltage is 10V, what is the secondary voltage?",
          "options": [
            "2V",
            "10V",
            "50V",
            "5000V"
          ],
          "answer": "50V",
          "explanation": "Using Vp/Vs = Np/Ns: 10 / Vs = 100 / 500. So Vs = 10 * 5 = 50V."
        },
        {
          "question": "If a transformer is 100% efficient and steps up the voltage, what happens to the current?",
          "options": [
            "It increases by the same factor.",
            "It remains the same.",
            "It decreases.",
            "It becomes zero."
          ],
          "answer": "It decreases.",
          "explanation": "Because Power In = Power Out (Vp*Ip = Vs*Is), if voltage increases (Vs > Vp), current must decrease proportionally to maintain the same power."
        }
      ]
    },
    {
      "subtopicId": "5.1",
      "title": "The Nuclear Atom",
      "digitizedText": "# 5.1 The Nuclear Atom\n\n## Atomic Structure\n![Atomic Structure Diagram](/0625-physics/images/main_p93_i0.png)\n\nAt the heart of every atom lies the **nucleus**, which contains subatomic particles called **protons** and **neutrons**. Orbiting this nucleus are **electrons**, which travel in specific layers called shells. \n\nHere is a summary of the subatomic particles:\n\n| Subatomic Particle | Charge | Relative Mass |\n| :--- | :--- | :--- |\n| **Proton** | Positive (+ve) | 1 |\n| **Neutron** | Neutral (no charge) | 1 |\n| **Electron** | Negative (-ve) | $\\approx$ 0 |\n\n### Key Definitions\n*   **Nucleon Number (Mass Number):** The total sum of protons and neutrons in the nucleus of an atom.\n*   **Proton Number (Atomic Number):** The number of protons in the nucleus. In a neutral atom, this is also equal to the number of electrons.\n\n**Teacher's Note:** Remember that the mass of an electron is so incredibly tiny compared to a proton or neutron that we consider it to be almost zero when calculating the total mass of an atom! \n\n## Isotopes\n![Isotopes Example](/0625-physics/images/main_p93_i0.png)\n\n**Isotopes** are atoms of the *same element* that have the *same number of protons* but a *different number of neutrons*. Because they have the same number of protons (and thus electrons), their chemical properties are exactly the same!\n\n*   Example: Sodium-23 ($^{23}_{11}\\text{Na}$) and Sodium-24 ($^{24}_{11}\\text{Na}$). Both have 11 protons, but Sodium-23 has 12 neutrons while Sodium-24 has 13 neutrons.\n\n## Radioisotopes\nA **Radioisotope** is an unstable isotope that releases radioactive particles (radiation) to become more stable.\n\n*   **Examples of Radioisotopes:** Sodium-24, Carbon-13, Carbon-14, Cobalt-60.",
      "quizzes": [
        {
          "question": "What are the constituent particles of an atomic nucleus?",
          "options": [
            "Protons and electrons",
            "Neutrons and electrons",
            "Protons and neutrons",
            "Protons, neutrons, and electrons"
          ],
          "answer": "Protons and neutrons"
        },
        {
          "question": "Which subatomic particle has a negative charge and negligible mass?",
          "options": [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleon"
          ],
          "answer": "Electron"
        },
        {
          "question": "The nucleon number of an atom is defined as:",
          "options": [
            "The number of protons in the nucleus",
            "The total number of protons and neutrons in the nucleus",
            "The number of electrons orbiting the nucleus",
            "The total number of protons and electrons"
          ],
          "answer": "The total number of protons and neutrons in the nucleus"
        },
        {
          "question": "An atom of Carbon-14 has a proton number of 6. How many neutrons does it contain?",
          "options": [
            "6",
            "8",
            "14",
            "20"
          ],
          "answer": "8"
        },
        {
          "question": "Isotopes are atoms of the same element that have:",
          "options": [
            "The same number of protons but different number of neutrons",
            "The same number of neutrons but different number of protons",
            "The same number of electrons but different number of protons",
            "The same mass number but different atomic number"
          ],
          "answer": "The same number of protons but different number of neutrons"
        },
        {
          "question": "Which of the following best describes a radioisotope?",
          "options": [
            "An isotope with no neutrons",
            "A highly stable isotope that does not decay",
            "An unstable isotope that emits radioactive particles",
            "An isotope that absorbs radiation from its surroundings"
          ],
          "answer": "An unstable isotope that emits radioactive particles"
        },
        {
          "question": "What does the proton number of a neutral atom tell us about its electrons?",
          "options": [
            "It has twice as many electrons as protons",
            "The number of electrons is equal to the number of protons",
            "The number of electrons is equal to the number of neutrons",
            "It provides no information about the electrons"
          ],
          "answer": "The number of electrons is equal to the number of protons"
        },
        {
          "question": "Which of the following is NOT an example of a radioisotope?",
          "options": [
            "Carbon-14",
            "Cobalt-60",
            "Sodium-24",
            "Sodium-23"
          ],
          "answer": "Sodium-23"
        }
      ]
    },
    {
      "subtopicId": "5.2",
      "title": "Radioactivity",
      "digitizedText": "# 5.2 Radioactivity\n\n## Radioactive Particles\nRadioactive decay involves the emission of three main types of radiation: **Alpha ($\\alpha$)**, **Beta ($\\beta$)**, and **Gamma ($\\gamma$)**.\n\n![Radioactive Particles Characteristics](/0625-physics/images/main_p94_i0.png)\n\n| Property | Alpha ($\\alpha$) | Beta ($\\beta$) | Gamma ($\\gamma$) |\n| :--- | :--- | :--- | :--- |\n| **Definition** | Helium nucleus ($^{4}_{2}\\text{He}$) | Fast-moving electron ($^{0}_{-1}\\text{e}$) | Electromagnetic wave |\n| **Mass** | Heaviest | Light | No mass |\n| **Speed** | Slowest | Moderate | Fastest ($3 \\times 10^8 \\text{ m/s}$) |\n| **Charge** | Positive (+2) | Negative (-1) | No charge |\n\n### Penetrating Power\n*   **Alpha:** Lowest penetration. Stopped by a thin sheet of paper.\n*   **Beta:** Moderate penetration. Stopped by a few millimeters of aluminium.\n*   **Gamma:** Highest penetration. Only stopped by thick lead or concrete.\n\n### Deflection in Electric and Magnetic Fields\n*   **Electric Field:** Alpha particles deflect towards the negative plate, while Beta particles deflect strongly towards the positive plate (due to their lighter mass). Gamma rays are unaffected.\n*   **Magnetic Field:** Using Fleming's Left-Hand Rule, Alpha and Beta particles deflect in opposite directions. Gamma rays pass straight through.\n\n## Ionisation Effect\n![Ionisation Effect](/0625-physics/images/main_p95_i0.png)\n\nIonisation occurs when radiation knocks electrons out of gas molecules, turning them into charged ions.\n*   **Alpha ($\\alpha$):** Strongest ionising effect (because it has the largest mass and charge).\n*   **Beta ($\\beta$):** Moderate ionising effect.\n*   **Gamma ($\\gamma$):** Weakest ionising effect.\n\n## Radioactive Decay Equations\n![Radioactive Decay](/0625-physics/images/main_p96_i0.png)\n\nRadioactive decay is the process where an unstable isotope becomes a more stable isotope by releasing a radioactive particle.\n\n1.  **Alpha Decay:** The nucleus loses 2 protons and 2 neutrons. The nucleon number decreases by 4, and the proton number decreases by 2.\n    *   *Example:* $^{210}_{84}\\text{Po} \\rightarrow ^{206}_{82}\\text{Pb} + ^{4}_{2}\\text{He}$\n2.  **Beta Decay:** A neutron turns into a proton and emits a fast-moving electron. The nucleon number stays the same, but the proton number increases by 1.\n    *   *Example:* $^{14}_{6}\\text{C} \\rightarrow ^{14}_{7}\\text{N} + ^{0}_{-1}\\text{e}$\n3.  **Gamma Emission:** The nucleus releases excess energy as a gamma ray. The atomic structure doesn't change, but it becomes more stable.\n    *   *Example:* $^{60}_{27}\\text{Co}^* \\rightarrow ^{60}_{27}\\text{Co} + \\gamma$\n\n![Graph of Decay](/0625-physics/images/main_p97_i0.png)\n\n## Half-Life ($T_{1/2}$)\n![Half-Life Calculations](/0625-physics/images/main_p98_i0.png)\n\n**Half-life** is the time taken for a radioactive substance to decay to half of its initial mass or activity.\n\n*   *Teacher's Tip:* If you start with 600g of a substance with a half-life of 20 minutes, after 20 minutes you'll have 300g left. After another 20 minutes, you'll have 150g left, and so on.\n\n## Background Radiation\n![Background Radiation](/0625-physics/images/main_p99_i0.png)\n![Activity vs Time Graphs](/0625-physics/images/main_p100_i0.png)\n\n**Background radiation** is the low-level radiation that occurs naturally in our environment (from the air, ground, cosmic rays, etc.).\n\nWhen calculating half-life from experimental data, you must **subtract the background radiation** from your readings first, find the half-life, and then add it back if you are plotting the actual count rate!\n\n```mermaid\ngraph TD\n    A[\"Measure Total Count Rate\"] --> B[\"Measure Background Count\"]\n    B --> C[\"Subtract Background from Total = Corrected Count\"]\n    C --> D[\"Halve the Corrected Count to find Half-Life interval\"]\n```\n",
      "quizzes": [
        {
          "question": "Which type of radioactive emission is a helium nucleus?",
          "options": [
            "Alpha particle",
            "Beta particle",
            "Gamma ray",
            "X-ray"
          ],
          "answer": "Alpha particle"
        },
        {
          "question": "Which type of radiation has the highest penetrating power?",
          "options": [
            "Alpha",
            "Beta",
            "Gamma",
            "Ultraviolet"
          ],
          "answer": "Gamma"
        },
        {
          "question": "What happens to the atomic structure of an element during Beta decay?",
          "options": [
            "The nucleon number decreases by 4",
            "The proton number decreases by 2",
            "The proton number increases by 1",
            "The nucleon number increases by 1"
          ],
          "answer": "The proton number increases by 1"
        },
        {
          "question": "Which type of radiation is most strongly deflected by a magnetic field, assuming equal velocities?",
          "options": [
            "Alpha particles",
            "Beta particles",
            "Gamma rays",
            "Alpha and Beta are deflected equally"
          ],
          "answer": "Beta particles"
        },
        {
          "question": "Which type of radiation has the strongest ionising effect?",
          "options": [
            "Alpha",
            "Beta",
            "Gamma",
            "Microwave"
          ],
          "answer": "Alpha"
        },
        {
          "question": "A radioactive substance has a half-life of 8 hours. If the initial mass is 1600g, how much will remain after 32 hours?",
          "options": [
            "800g",
            "400g",
            "200g",
            "100g"
          ],
          "answer": "100g"
        },
        {
          "question": "What is background radiation?",
          "options": [
            "Radiation emitted solely by nuclear power plants",
            "Radiation that occurs naturally in the environment",
            "Radiation used in medical imaging",
            "Radiation resulting only from nuclear weapons testing"
          ],
          "answer": "Radiation that occurs naturally in the environment"
        },
        {
          "question": "When determining the true half-life of a radioactive source from a Geiger-Muller tube reading, what must be done first?",
          "options": [
            "Multiply the reading by 2",
            "Add the background count to the reading",
            "Subtract the background count from the reading",
            "Divide the reading by the background count"
          ],
          "answer": "Subtract the background count from the reading"
        }
      ]
    },
    {
      "id": "phys_6_1",
      "subtopicId": "6.1",
      "title": "Earth and the Solar System",
      "digitizedText": "## 6.1 Earth and the Solar System\n\nWelcome to the start of Space Physics! Let's explore our local cosmic neighborhood.\n\n### The Earth and the Moon\n- **Earth's Orbit:** The Earth orbits the Sun in approximately 365 days (1 year).\n- **Earth's Rotation:** The Earth rotates on its own axis once every 24 hours (1 day).\n- **Seasons:** The Earth's axis is tilted. This tilt is responsible for the different seasons we experience as Earth orbits the Sun.\n- **The Moon:** Our Moon orbits the Earth approximately once every 28 days (1 month). The Moon is a natural satellite of Earth.\n\n> [!NOTE]\n> The rotation of the Earth gives us day and night, while its orbit around the Sun combined with its axial tilt gives us the seasons.\n\n### The Solar System\nThe Solar System consists of a central star (the Sun) and all the celestial bodies that orbit it.\n- **The Planets:** There are 8 planets. In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n- **Minor Planets:** Dwarf planets like Pluto.\n- **Asteroids:** Rocky objects that mostly orbit between Mars and Jupiter.\n- **Comets:** Icy bodies that have highly elliptical orbits. They originate from the outer edges of the Solar System (like the Kuiper Belt or Oort Cloud). As they get closer to the Sun, the ice vaporizes, forming a glowing tail.\n\n```mermaid\ngraph TD\n    Sun[Sun]\n    Sun --> Mercury\n    Sun --> Venus\n    Sun --> Earth\n    Sun --> Mars\n    Sun --> AsteroidBelt[Asteroid Belt]\n    Sun --> Jupiter\n    Sun --> Saturn\n    Sun --> Uranus\n    Sun --> Neptune\n    Sun --> Comets[Comets with Highly Elliptical Orbits]\n```\n\n### Orbits and Gravity\nPlanets, moons, and comets are kept in their orbits by gravity.\n- **Gravitational Field Strength ($g$):** This is the force per unit mass exerted by a planet. It depends on the mass and radius of the planet.\n  - On Earth, $g \\approx 9.8 \\text{ N/kg}$\n  - Planets with a larger mass have a stronger gravitational field.\n\n**Orbital Speed:**\nFor a nearly circular orbit, the orbital speed $v$ can be calculated using the formula:\n\\[ v = \\frac{2\\pi r}{T} \\]\nwhere:\n- $v$ = orbital velocity (speed)\n- $r$ = radius of the orbit\n- $T$ = orbital period (time taken for one complete orbit)\n\n### The Sun\nThe Sun is our local star. It is a medium-mass, stable star that has been shining for about 4.6 billion years.\n\n**Composition of the Sun:**\n- 75% Hydrogen\n- 24% Helium\n- 1% other elements\n\n**Nuclear Fusion:**\nThe Sun produces its vast amounts of energy through **nuclear fusion** in its core. The immense pressure and temperature cause hydrogen nuclei to fuse together.\n- Specifically, **4 hydrogen nuclei fuse into 1 helium nucleus**.\n- This reaction releases an enormous amount of energy.\n\n**Energy Emissions:**\nThe energy from the Sun travels outwards and is emitted into space. The distribution of this energy is roughly:\n- 50% Infrared (IR)\n- 40% Visible light\n- 10% Ultraviolet (UV) (Most of this is absorbed by Earth's atmosphere)\n",
      "quizzes": [
        {
          "question": "How long does it take for the Earth to complete one full rotation on its axis, and what does this rotation cause?",
          "options": [
            "365 days, causing seasons",
            "28 days, causing lunar phases",
            "24 hours, causing day and night",
            "24 hours, causing the seasons"
          ],
          "correctIndex": 2,
          "explanation": "The Earth rotates on its axis every 24 hours, which causes the cycle of day and night."
        },
        {
          "question": "Which of the following best describes the orbit of a comet in the Solar System?",
          "options": [
            "Perfectly circular orbit around the Earth",
            "Highly elliptical orbit around the Sun",
            "Circular orbit between Mars and Jupiter",
            "Elliptical orbit around a distant star"
          ],
          "correctIndex": 1,
          "explanation": "Comets typically have highly elliptical orbits around the Sun, often coming from the outer edges of the Solar System."
        },
        {
          "question": "A planet has an orbital radius of $r$ and takes time $T$ to complete one orbit. Which formula gives its orbital speed $v$?",
          "options": [
            "$v = \\frac{T}{2\\pi r}$",
            "$v = \\frac{2\\pi r}{T}$",
            "$v = \\pi r^2 T$",
            "$v = \\frac{\\pi r}{T}$"
          ],
          "correctIndex": 1,
          "explanation": "The distance traveled in one circular orbit is the circumference $2\\pi r$. Speed is distance over time, so $v = \\frac{2\\pi r}{T}$."
        },
        {
          "question": "What is the primary process that generates energy in the core of the Sun?",
          "options": [
            "Nuclear fission of uranium",
            "Chemical burning of hydrogen gas",
            "Nuclear fusion of hydrogen into helium",
            "Nuclear fusion of helium into carbon"
          ],
          "correctIndex": 2,
          "explanation": "The Sun generates energy through nuclear fusion, primarily fusing four hydrogen nuclei into one helium nucleus in its core."
        },
        {
          "question": "What is the approximate composition of the Sun by mass?",
          "options": [
            "75% Hydrogen, 24% Helium, 1% others",
            "50% Hydrogen, 50% Helium",
            "75% Helium, 24% Hydrogen, 1% others",
            "90% Oxygen, 10% Hydrogen"
          ],
          "correctIndex": 0,
          "explanation": "The Sun is composed of mostly hydrogen (about 75%) and helium (about 24%), with trace amounts of heavier elements."
        },
        {
          "question": "Which portion of the Sun's emitted radiation makes up the largest percentage?",
          "options": [
            "Visible Light",
            "Ultraviolet (UV)",
            "X-rays",
            "Infrared (IR)"
          ],
          "correctIndex": 3,
          "explanation": "About 50% of the Sun's emitted energy is in the form of Infrared (IR) radiation, followed by 40% visible light."
        },
        {
          "question": "Why do different planets in the solar system have different gravitational field strengths ($g$)?",
          "options": [
            "Because they are at different distances from the Sun",
            "Because they have different masses and radii",
            "Because they travel at different orbital speeds",
            "Because they are made of different states of matter"
          ],
          "correctIndex": 1,
          "explanation": "The gravitational field strength $g$ at the surface of a planet depends directly on the planet's mass and inversely on the square of its radius."
        }
      ]
    },
    {
      "id": "phys_6_2",
      "subtopicId": "6.2",
      "title": "Stars and the Universe",
      "digitizedText": "## 6.2 Stars and the Universe\n\nBeyond our Solar System lies a vast universe filled with stars, galaxies, and mysteries. Let's delve into the life cycle of stars and the origins of the universe itself.\n\n### The Milky Way and Galaxies\n- Our Solar System is located in a galaxy called the **Milky Way**.\n- The Milky Way is a spiral galaxy with a diameter of about **100,000 light-years**.\n- Our Sun is located about **30,000 light-years** from the galactic center.\n- It takes our Solar System about 225 million years to complete one orbit around the center of the Milky Way.\n- The closest major galaxy to ours is the Andromeda Galaxy.\n\n> [!NOTE]\n> A light-year is the distance that light travels in a vacuum in one year. It is a unit of distance, not time.\n\n### The Life Cycle of Stars\n\nStars are born in huge clouds of dust and gas called **molecular clouds** or **nebulae**. Gravity pulls the gas together to form a **protostar**. As it condenses, it heats up until nuclear fusion begins, making it a **main sequence star**.\n\nThe fate of a star depends on its mass:\n\n**For Stars with Mass < 8x Solar Mass (Like our Sun):**\n1. **Red Giant:** As hydrogen runs out in the core, the star expands and its surface cools, becoming a Red Giant.\n2. **White Dwarf:** Eventually, the outer layers drift away as a **planetary nebula**, and the core collapses into a small, dense White Dwarf (radius < 1000 km, max 1.4 solar masses). It is very hot but no longer undergoes fusion.\n3. **Black Dwarf:** Over billions of years, the white dwarf cools down and fades into a cold, dark Black Dwarf.\n\n**For Stars with Mass > 8x Solar Mass:**\n1. **Red Supergiant:** The core gets hot enough to fuse heavier elements (up to Iron). The outer layers expand massively.\n2. **Supernova:** When the fuel runs out, the star collapses rapidly and explodes violently in a Supernova. The energy is so immense that elements heavier than iron are fused and scattered into space.\n3. **Neutron Star or Black Hole:** The core remains. If it is around 3x solar masses, it forms a super-dense **Neutron Star**. If it is even heavier, gravity overwhelms everything, collapsing it into a **Black Hole** from which not even light can escape.\n\n```mermaid\ngraph TD\n    Nebula[Molecular Cloud / Nebula] --> Protostar\n    Protostar --> MainSequence[Main Sequence Star]\n    MainSequence -->|Mass < 8 Solar Masses| LowMass[Red Giant]\n    LowMass --> PlanetaryNebula[Planetary Nebula]\n    PlanetaryNebula --> WhiteDwarf[White Dwarf]\n    WhiteDwarf --> BlackDwarf[Black Dwarf]\n    \n    MainSequence -->|Mass > 8 Solar Masses| HighMass[Red Supergiant]\n    HighMass --> Supernova[Supernova Explosion]\n    Supernova -->|Core < ~3 Solar Masses| NeutronStar[Neutron Star]\n    Supernova -->|Core > ~3 Solar Masses| BlackHole[Black Hole]\n```\n\n### The Expanding Universe\n\nObservations of distant galaxies show that the Universe is expanding. This is understood through several key concepts:\n\n**1. Redshift and the Doppler Effect**\nWhen an object emitting waves moves away from an observer, the waves get stretched. For sound, this means a lower pitch (the Doppler Effect). For light, this means the wavelength increases, shifting towards the red end of the spectrum.\n- By studying the **absorption spectrum** of light from distant galaxies, astronomers see that the dark absorption lines are shifted towards the red end compared to light from our Sun.\n- The further away a galaxy is, the greater the redshift. This means distant galaxies are moving away from us faster.\n\n**2. The Big Bang Theory**\nThe expansion of the universe suggests that if we rewind time, everything was once contained in a single point of infinite density and temperature called a **singularity**. About **13.8 billion years ago**, this point rapidly expanded in an event known as the Big Bang, creating space, time, matter, and energy.\n\n**3. Cosmic Microwave Background Radiation (CMBR)**\n- CMBR is faint microwave radiation coming from all directions in space.\n- It has a very low temperature of about -270 \u00b0C.\n- CMBR is the residual thermal energy from the Big Bang, stretched into microwaves as the universe expanded and cooled. It is strong evidence for the Big Bang.\n\n### Hubble's Law\nHubble's Law states that the speed at which a galaxy is moving away is directly proportional to its distance from us.\n\\[ v = H_0 d \\]\nwhere:\n- $v$ = speed of galaxy moving away\n- $d$ = distance of galaxy from Earth\n- $H_0$ = Hubble constant (currently estimated at $2.2 \\times 10^{-18} \\text{ per second}$)\n\nWe can use the inverse of the Hubble constant ($H_0^{-1}$, known as Hubble time) to estimate the **age of the universe**:\n\\[ t = \\frac{1}{H_0} \\approx \\frac{1}{2.2 \\times 10^{-18}} \\approx 4.5 \\times 10^{17} \\text{ seconds} \\approx 14.4 \\text{ billion years} \\]\n\n### Composition of the Universe\nOur universe is made mostly of things we cannot see directly:\n- **Dark Energy (68%):** A mysterious force causing the expansion of the universe to accelerate.\n- **Dark Matter (27%):** Invisible mass that exerts gravitational pull, causing galaxies to rotate faster than expected.\n- **Normal Matter (5%):** Everything we can see\u2014stars, planets, dust, and people!\n",
      "quizzes": [
        {
          "question": "What will eventually happen to a star with a mass similar to our Sun after it completes its red giant phase?",
          "options": [
            "It will explode in a supernova and become a black hole.",
            "It will shed its outer layers as a planetary nebula and become a white dwarf.",
            "It will directly collapse into a neutron star.",
            "It will fuse heavier elements until it becomes a red supergiant."
          ],
          "correctIndex": 1,
          "explanation": "Stars with a mass less than 8 times the solar mass (like our Sun) become red giants, then shed their outer layers as planetary nebulae, leaving behind a white dwarf."
        },
        {
          "question": "During which stage of a massive star's life are elements heavier than iron formed?",
          "options": [
            "Main Sequence phase",
            "Red Supergiant phase",
            "Supernova explosion",
            "Neutron Star formation"
          ],
          "correctIndex": 2,
          "explanation": "The extreme heat and pressure during a supernova explosion are required to fuse elements heavier than iron."
        },
        {
          "question": "When astronomers observe light from distant galaxies, they notice that the absorption lines in their spectra are shifted towards the red end. What does this indicate?",
          "options": [
            "The galaxies are moving away from Earth.",
            "The galaxies are moving towards Earth.",
            "The galaxies are composed primarily of red giant stars.",
            "The galaxies are shrinking in size."
          ],
          "correctIndex": 0,
          "explanation": "Redshift indicates an increase in wavelength caused by the Doppler effect, meaning the source of light (the galaxy) is moving away from the observer."
        },
        {
          "question": "According to Hubble's Law ($v = H_0 d$), how does the speed of a receding galaxy relate to its distance from Earth?",
          "options": [
            "Speed is inversely proportional to distance.",
            "Speed is proportional to the square of the distance.",
            "Speed is directly proportional to distance.",
            "Speed is constant regardless of distance."
          ],
          "correctIndex": 2,
          "explanation": "Hubble's Law states that the recessional velocity ($v$) of a galaxy is directly proportional to its distance ($d$) from Earth."
        },
        {
          "question": "Which of the following is considered strong evidence for the Big Bang theory?",
          "options": [
            "The presence of dark matter in galaxies",
            "Cosmic Microwave Background Radiation (CMBR) coming from all directions",
            "The formation of black holes from massive stars",
            "The existence of planetary nebulae"
          ],
          "correctIndex": 1,
          "explanation": "CMBR is the leftover thermal energy from the Big Bang, which has cooled and stretched into the microwave region as the universe expanded."
        },
        {
          "question": "What makes up the largest percentage of the Universe's total composition?",
          "options": [
            "Normal Matter (stars, planets, gas)",
            "Dark Matter",
            "Dark Energy",
            "Neutron Stars and Black Holes"
          ],
          "correctIndex": 2,
          "explanation": "Dark energy is estimated to make up about 68% of the universe, driving its accelerating expansion."
        },
        {
          "question": "How can the Hubble constant ($H_0$) be used to estimate the age of the Universe?",
          "options": [
            "By multiplying $H_0$ by the distance to the furthest galaxy",
            "By calculating the inverse of the Hubble constant ($1 / H_0$)",
            "By taking the square root of $H_0$",
            "By dividing $H_0$ by the speed of light"
          ],
          "correctIndex": 1,
          "explanation": "The inverse of the Hubble constant ($1/H_0$) gives an estimate of the time since the universe began expanding, also known as the Hubble time or age of the universe."
        }
      ]
    }
  ]
};
