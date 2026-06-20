window.subjectNotes = [
    {
        "id": "subtopic_1_1",
        "subtopicId": "1.1",
        "title": "Arithmetics",
        "digitizedText": "> [!NOTE]\n> \n> **1. Arithmetics**\n>\n> \n> **Number System:**\n> \n> - Real numbers\n> \n> -\n> \n> i) Rational: can be expressed as fraction. e.g. 2/3, 4/6, 9/2, 1/7, 2 5/9.\n> \n> - ii) Irrational: cannot be expressed as fraction. e.g. $\\pi$, $e = 2.718...$ (natural exponent)\n> \n> - Imaginary numbers: $\\dots, -2i, -i, 0, i, 2i$ (Foundation or A-level)\n>\n> \n> **Number logics:**\n> \n>\n> \n> i) Prime number: Number with only 2 factors\n> \n> ii) Factors & Multiples\n> \n> Composite number\n> \n> Product of prime factors\n> \n> iii) BEDMAS\n\n```mermaid\ngraph TD\n    A[Number System] --> B[Real numbers]\n    A --> C[Imaginary numbers]\n    B --> D[Rational]\n    B --> E[Irrational]\n```\n\n> \n> [!NOTE]\n> \n> **Example:**\n> \n> a) Write 42 as a product of its prime factor\n> \n> $42 = 2 \\times 3 \\times 7$\n> \n>\n> \n> b) Find the product of prime factor for:\n> \n> i) 12, ii) 48, iii) 54, iv) 72,\n> \n> v) 142\n\n> \n> [!NOTE]\n> \n> **Extended Mathematics (0580)**\n> \n>\n> \n> c) Find the HCF of 12 and 18\n> \n> 12, 18 divided by 2 $\\rightarrow$ 6, 9\n> \n> 6, 9 divided by 3 $\\rightarrow$ 2, 3\n> \n> $2 \\times 3 = 6$ is the HCF\n>\n> \n>\n> \n> d) Find the HCF of the following:\n> \n>\n> \n> i) 24 and 32 (HCF: 8)\n> \n> ii) 14 and 35 (HCF: 7)\n> \n> iii) 100 and 200 (HCF: 100)\n\n> \n> [!NOTE]\n> \n> **BEDMAS**\n> \n> B: Bracket\n> \n> E: Exponent / Indices\n> \n> D: Division (L1 operation)\n> \n> M: Multiplication (L1 operation)\n> \n> A: Addition (L2 operation)\n> \n> S: Subtraction (L2 operation)\n> \n> Same priority operation, $L \\rightarrow R$\n\n> \n> [!NOTE]\n> \n> **Example (Solve):**\n> \n> a) $5 \\times 3 + 2 \\times 6 = 15 + 12 = 27$\n> \n>\n> \n> b) $9 \\div 3 + 15 \\times 2 = 3 + 30 = 33$\n> \n>\n> \n> c) $8 + (5 - 1) \\times 3 = 8 + 4 \\times 3 = 8 + 12 = 20$\n> \n>\n> \n> d) $8^2 + 2 \\times 3^2 = 64 + 2 \\times 9 = 64 + 18 = 82$\n> \n>\n> \n> e) $8 \\div 2(2+2) = 8 \\div 2(4) = 4 \\times 4 = 16$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Highest Common Factor and Least Common Multiple**\n> \n> Find the HCF and LCM of 48 and 72.\n> \n> **Solution:**\n> \n> Prime factorization of $48 = 2^4 \\times 3$\n> \n> Prime factorization of $72 = 2^3 \\times 3^2$\n> \n> HCF = product of lowest powers of common prime factors = $2^3 \\times 3 = 8 \\times 3 = 24$.\n> \n> LCM = product of highest powers of all prime factors = $2^4 \\times 3^2 = 16 \\times 9 = 144$.\n> \n> > **2. Order of Operations (BEDMAS)**\n> \n> Evaluate the following expression: $15 - 3 \\times (8 \\div 2) + 4^2$.\n> \n> **Solution:**\n> \n>\n> \n> Step 1: Bracket $\\rightarrow$ $(8 \\div 2) = 4$\n> \n> Expression becomes: $15 - 3 \\times 4 + 4^2$\n> \n>\n> \n> Step 2: Exponent $\\rightarrow$ $4^2 = 16$\n> \n> Expression becomes: $15 - 3 \\times 4 + 16$\n> \n>\n> \n> Step 3: Multiplication $\\rightarrow$ $3 \\times 4 = 12$\n> \n> Expression becomes: $15 - 12 + 16$\n> \n>\n> \n> Step 4: Addition and Subtraction from left to right\n> \n> $15 - 12 = 3$\n> \n> $3 + 16 = 19$.\n> \n> > **3. Word Problem Involving LCM**\n> \n> Two buses leave the station at the same time. Bus A departs every 15 minutes, and Bus B departs every 25 minutes. How many minutes will it take for both buses to leave the station together again?\n> \n> **Solution:**\n> \n> We need to find the LCM of 15 and 25.\n> \n> $15 = 3 \\times 5$\n> \n> $25 = 5^2$\n> \n> LCM = $3 \\times 5^2 = 3 \\times 25 = 75$.\n> \n> The buses will leave together again in 75 minutes.",
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
        "digitizedText": "> [!NOTE]\n> \n> **2. Fractions, Decimals, & Percentages (FDP)**\n>\n> \n> a) Fractions\n> \n> - Operation\n> \n> - Recurring decimal\n>\n> \n> **Operation of fraction (Revision)**\n> \n> $+$ or $-$\n> \n> 1. Equalize denominator\n> \n> 2. Add or subtract numerator only\n> \n> 3. Simplify\n>\n> \n> $\\times$ or $\\div$\n> \n> 1. Cross simplify (if possible)\n> \n> 2. Multiply numerators and denominators\n> \n> 3. Simplify\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> a) $1 \\frac{2}{3} + \\frac{3}{5} = 1 \\frac{10}{15} + \\frac{9}{15} = 1 \\frac{19}{15} = 2 \\frac{4}{15}$ or $\\frac{34}{15}$\n> \n>\n> \n> b) $2 - \\frac{3}{7} = \\frac{14}{7} - \\frac{3}{7} = \\frac{11}{7}$\n> \n>\n> \n> c) $7 \\frac{1}{4} - 4 \\frac{1}{2} = 6 \\frac{5}{4} - 4 \\frac{2}{4} = 2 \\frac{3}{4}$ or $\\frac{11}{4}$\n> \n>\n> \n> d) $\\frac{2}{5} - \\frac{3}{4} = \\frac{8}{20} - \\frac{15}{20} = -\\frac{7}{20}$\n> \n> a) $\\frac{2}{7} \\times \\frac{35}{7} = \\frac{10}{7}$\n> \n>\n> \n> b) $2 \\frac{7}{9} \\div \\frac{10}{27} = \\frac{25}{9} \\times \\frac{27}{10} = \\frac{15}{2}$\n> \n>\n> \n> c) $3 \\frac{1}{2} \\div 2 \\frac{3}{5} = \\frac{7}{2} \\times \\frac{5}{13} = \\frac{35}{26}$\n\n> \n> [!NOTE]\n> \n> ### Visualizing Fractions & Percentages\n<div align=\"center\">\n<svg width=\"240\" height=\"240\" viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Outer circle -->\n<circle cx=\"120\" cy=\"120\" r=\"80\" class=\"sme-axis\"/>\n<!-- Shaded sectors (3/8 = 135 degrees) -->\n<path d=\"M 120,120 L 120,40 A 80,80 0 0,1 200,120 L 120,120 Z\" class=\"sme-fill-primary\"/>\n<path d=\"M 120,120 L 200,120 A 80,80 0 0,1 176.57,176.57 L 120,120 Z\" class=\"sme-fill-primary\"/>\n<!-- Sector dividing lines -->\n<line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"200\" class=\"sme-line-construction\"/>\n<line x1=\"40\" y1=\"120\" x2=\"200\" y2=\"120\" class=\"sme-line-construction\"/>\n<line x1=\"63.43\" y1=\"63.43\" x2=\"176.57\" y2=\"176.57\" class=\"sme-line-construction\"/>\n<line x1=\"63.43\" y1=\"176.57\" x2=\"176.57\" y2=\"63.43\" class=\"sme-line-construction\"/>\n<!-- Highlight boundary for shaded part -->\n<path d=\"M 120,40 A 80,80 0 0,1 176.57,176.57\" fill=\"none\" class=\"sme-line-primary\"/>\n<!-- Text annotations -->\n<text x=\"120\" y=\"30\" class=\"sme-text\" text-anchor=\"middle\">12.5% per sector</text>\n<text x=\"160\" y=\"90\" class=\"sme-text\" font-weight=\"bold\">Shaded: 3/8 (37.5%)</text>\n<text x=\"70\" y=\"160\" class=\"sme-text-muted\">Unshaded: 5/8 (62.5%)</text>\n</svg>\n</div>\n\n**Fraction $\\rightarrow$ Recurring decimal**\n> \n> $\\frac{1}{3} = 0.\\dot{3}$\n> \n> $\\frac{2}{3} = 0.\\dot{6}$\n> \n> $\\frac{1}{9} = 0.\\dot{1}$\n> \n> $\\frac{2}{9} = 0.\\dot{2}$\n>\n> \n> **Recurring decimal $\\rightarrow$ Fraction**\n> \n> $0.\\dot{2}\\dot{1} = 0.212121\\dots$\n> \n> $0.\\dot{3}\\dot{5} = \\frac{35}{99}$\n> \n> $0.\\dot{1}\\dot{6} = \\frac{16}{99}$ (2 digits recurring $\\rightarrow$ always over 99)\n> \n> $0.\\dot{2}\\dot{3}\\dot{4} = 0.234234234\\dots = \\frac{234}{999}$ (3 digits recurring $\\rightarrow$ always over 999)\n> \n> $0.\\dot{1}\\dot{5}\\dot{9} = \\frac{159}{999}$\n>\n> \n> **Convert $0.2\\dot{1}$ to fraction [2]**\n> \n> $x = 0.21111\\dots$ (goal $\\rightarrow$ to eliminate recurring no.)\n> \n> $10x = 2.1111\\dots$\n> \n> $100x = 21.111\\dots$\n> \n> $90x = 19 \\Rightarrow x = \\frac{19}{90}$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Fraction Operations**\n> \n> Calculate $3 \\frac{1}{4} \\div \\left( 1 \\frac{1}{2} + \\frac{3}{8} \\right)$. Give your answer as a mixed number in its simplest form.\n> \n> **Solution:**\n> \n>\n> \n> Step 1: Solve the bracket first.\n> \n> $1 \\frac{1}{2} + \\frac{3}{8} = \\frac{3}{2} + \\frac{3}{8} = \\frac{12}{8} + \\frac{3}{8} = \\frac{15}{8}$\n> \n>\n> \n> Step 2: Perform the division.\n> \n> $3 \\frac{1}{4} \\div \\frac{15}{8} = \\frac{13}{4} \\times \\frac{8}{15}$\n> \n>\n> \n> Step 3: Cross simplify and multiply.\n> \n> $\\frac{13}{1} \\times \\frac{2}{15} = \\frac{26}{15}$\n> \n>\n> \n> Step 4: Convert to mixed number.\n> \n> $\\frac{26}{15} = 1 \\frac{11}{15}$.\n> \n> > **2. Recurring Decimal to Fraction**\n> \n> Convert the recurring decimal $0.\\dot{4}\\dot{5}$ to a fraction in its simplest form.\n> \n> **Solution:**\n> \n> Let $x = 0.454545\\dots$\n> \n> Multiply by 100 since two digits are repeating:\n> \n> $100x = 45.454545\\dots$\n> \n> Subtract the original equation:\n> \n> $100x - x = 45.454545\\dots - 0.454545\\dots$\n> \n> $99x = 45$\n> \n> $x = \\frac{45}{99}$\n> \n> Divide both numerator and denominator by 9:\n> \n> $x = \\frac{5}{11}$.",
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
        "digitizedText": "> [!NOTE]\n> \n> **3. Approximation & Estimation**\n>\n> \n> **Finding boundaries $\\rightarrow$ Range of estimation**\n> \n>\n> \n> i) Place value (nearest 10, nearest 0.1, nearest 10,000)\n> \n> ii) Significant figures (nearest 1sf, nearest 2sf)\n>\n> \n> **Example:**\n> \n> The mass, $m$ kg, of a horse is 429 kg correct to the nearest kg.\n> \n> What is its upper boundary and lower boundary?\n> \n> 1 kg $\\rightarrow$ estimation\n> \n> $1/2 = 0.5$ kg\n> \n> $UB = 429 + 0.5 = 429.5$ kg\n> \n> $LB = 429 - 0.5 = 428.5$ kg\n>\n> \n> correct to the nearest 10kg\n> \n> $10/2 = 5$ kg\n> \n> $UB = 429 + 5 = 434$ kg\n> \n> $LB = 429 - 5 = 424$ kg\n> \n> Difference between UB and LB is always = estimation\n\n> \n> [!NOTE]\n> \n> **Finding boundaries (dp or sf)**\n> \n> Example:\n> \n> a) 3.8 cm measured to nearest 0.1 cm\n> \n> $0.1 / 2 = 0.05$\n> \n> $UB = 3.8 + 0.05 = 3.85$ cm\n> \n> $LB = 3.8 - 0.05 = 3.75$ cm\n> \n>\n> \n> b) 0.07 to the nearest 2 dp $\\rightarrow 0.01 / 2 = 0.005$\n> \n> $UB = 0.075$, $LB = 0.065$\n> \n>\n> \n> c) 900 ml to the nearest 1 sf\n> \n> Determine the place value at said sf to get the estimation: 100\n> \n> $100 / 2 = 50$ ml\n> \n> $UB = 950$ ml, $LB = 850$ ml\n> \n>\n> \n> d) 8200 kg to the nearest 2 sf\n> \n> hundred $\\rightarrow 100/2 = 50$\n> \n> $UB = 8250$ kg, $LB = 8150$ kg\n\n> \n> [!NOTE]\n> \n> **Operations with UB & LB**\n> \n> $\\oplus UB = UB + UB$\n> \n> $\\oplus LB = LB + LB$\n> \n> $\\ominus UB = UB - LB$\n> \n> $\\ominus LB = LB - UB$\n> \n> $\\otimes UB = UB \\times UB$\n> \n> $\\otimes LB = LB \\times LB$\n> \n> $\\oslash UB = UB \\div LB$\n> \n> $\\oslash LB = LB \\div UB$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> 1. An equilateral triangle has sides length of 15 cm, correct to the nearest cm. Calculate UB perimeter of the shape.\n> \n> $1/2 = 0.5$\n> \n> $UB = 15 + 0.5 = 15.5$ cm\n> \n> $Peri = 15.5 + 15.5 + 15.5 = 46.5$ cm\n>\n> \n> 2. Given $P = 2(w + h)$\n> \n> $w = 12$ to the nearest whole number (w.n.) $\\rightarrow 12.5$\n> \n> $h = 4$ to the nearest w.n. $\\rightarrow 4.5$\n> \n> Find UB of P.\n> \n> $P = 2(12.5 + 4.5) = 2(17) = 34$\n>\n> \n> 3. $A = (b \\times\n> \n> h) / 2$, $A = 10$ to the nearest w.n. ($10.5$), $h = 4$ to the nearest w.n. ($3.5$)\n> \n> Find UB of b.\n> \n> $b = 2A / h \\rightarrow UB_{b} = 2(UB_A) / LB_h = 2(10.5) / 3.5 = 21 / 3.5 = 6$\n>\n> \n> 4. The space allowed for each tent is a rectangle measuring 8 m by 6 m, each correct to the nearest m. Calculate the UB of area of each tent.\n> \n> $UB_{area} = 8.5 \\times 6.5 = 55.25$ m$^2$\n>\n> \n> 5. The length of a roll of ribbon is 30 metres, correct to the nearest half-metre. A piece of length 5.8 m, correct to the nearest 10 cm, is cut from the roll.\n> \n> Work out the maximum possible length of ribbon left on the roll.\n> \n> 30 m (nearest 0.5\n> \n> m) $\\rightarrow 0.5/2 = 0.25$\n> \n> $UB = 30.25$, $LB = 29.75$\n> \n> 5.8 m (nearest 0.1\n> \n> m) $\\rightarrow 0.1/2 = 0.05$\n> \n> $UB = 5.85$, $LB = 5.75$\n> \n> Max left $= UB_{total} - LB_{cut} = 30.25 - 5.75 = 24.5$ m\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Upper and Lower Bounds of Area**\n> \n> A rectangular garden has a length of 12.5 m and a width of 8.2 m. Both measurements are correct to 1 decimal place. Calculate the upper and lower bounds of the area of the garden.\n> \n> **Solution:**\n> \n> Find bounds for length ($L$) and width ($W$):\n> \n> Place value is 0.1 m, so $0.1 \\div 2 = 0.05$ m.\n> \n> $UB_L = 12.5 + 0.05 = 12.55$ m, $LB_L = 12.5 - 0.05 = 12.45$ m.\n> \n> $UB_W = 8.2 + 0.05 = 8.25$ m, $LB_W = 8.2 - 0.05 = 8.15$ m.\n> \n> Area bounds:\n> \n> $UB_{\\text{Area}} = UB_L \\times UB_W = 12.55 \\times 8.25 = 103.5375$ m$^2$.\n> \n> $LB_{\\text{Area}} = LB_L \\times LB_W = 12.45 \\times 8.15 = 101.4675$ m$^2$.\n> \n> > **2. Upper Bound of Speed**\n> \n> A car travels a distance of 150 km, correct to the nearest 10 km, in a time of 2.4 hours, correct to 1 decimal place. Calculate the upper bound for the speed of the car.\n> \n> **Solution:**\n> \n> Speed = $\\frac{\\text{Distance}}{\\text{Time}}$. To maximize the speed, use $UB_{\\text{Distance}} \\div LB_{\\text{Time}}$.\n> \n> Distance bounds (nearest 10 km $\\rightarrow 10 \\div 2 = 5$ km):\n> \n> $UB_{\\text{Distance}} = 150 + 5 = 155$ km.\n> \n> Time bounds (nearest 0.1 hr $\\rightarrow 0.1 \\div 2 = 0.05$ hr):\n> \n> $LB_{\\text{Time}} = 2.4 - 0.05 = 2.35$ hours.\n> \n> $UB_{\\text{Speed}} = \\frac{155}{2.35} = 65.957\\dots \\approx 66.0$ km/h (to 1 d.p.).",
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
        "digitizedText": "## Significant Figures & Standard Form\n\n> \n> [!NOTE]\n> \n> **What are significant figures (sf)?**\n> \n> Significant figures are non-zero digits with a few exceptions on zeros. Zeros in-between non-zero digits and trailing zeros after a decimal point are significant.\n\n### Rules for Significant Figures\n- **Whole Numbers:** Trailing zeros in a whole number are usually *not* significant.\n  - $3,461,000$ to 2 sf is $3,500,000$\n  - $3,461,000$ to 3 sf is $3,460,000$\n- **Decimals:** Leading zeros are *not* significant. In-between zeros and trailing zeros in decimals are significant.\n  - $0.0570900$ has 6 significant figures.\n  - $0.0570900$ to 2 sf is $0.057$\n  - $0.0570900$ to 3 sf is $0.0571$\n\n## Standard Form\n\n> \n> [!NOTE]\n> \n> **What is standard form?**\n> \n> It is a method of writing a very large or very small number in a shorter way, in the form $A \\times 10^n$, where $1 \\le A < 10$ and $n$ is an integer. The decimal point must be placed to the right of the first significant figure.\n\n### Writing Numbers in Standard Form\n- Large numbers have a positive index: $15,000,000 = 1.5 \\times 10^7$\n- Small numbers have a negative index: $0.000000123 = 1.23 \\times 10^{-7}$\n\nIf a number is not in standard form, you must adjust the multiplier and the power of 10:\n- $235 \\times 10^3 = 2.35 \\times 10^5$\n- $0.257 \\times 10^{-2} = 2.57 \\times 10^{-3}$\n- $22.9 \\times 10^4 = 2.29 \\times 10^5$\n- $78.3 \\times 10^5 = 7.83 \\times 10^6$\n\n### Operations in Standard Form\n\n#### 1. Addition & Subtraction\nTo add or subtract, you must equalize the multiplier first. Always follow the bigger multiplier.\n- $5 \\times 10^4 + 3 \\times 10^4 = 8 \\times 10^4$\n- $2.5 \\times 10^5 + 3.3 \\times 10^4 = 2.5 \\times 10^5 + 0.33 \\times 10^5 = 2.83 \\times 10^5$\n- $6 \\times 10^3 + 8 \\times 10^2 = 6 \\times 10^3 + 0.8 \\times 10^3 = 6.8 \\times 10^3$\n\n#### 2. Multiplication & Division\nUse the rules of indices: $a^m \\times a^n = a^{m+n}$ and $a^m \\div a^n = a^{m-n}$.\n\n```mermaid\ngraph LR\n    A[Multiplication] --> B(2 x 10^3 * 3 x 10^4)\n    B --> C(2 * 3 x 10^{3+4})\n    C --> D(6 x 10^7)\n    E[Division] --> F(8 x 10^5 / 4 x 10^3)\n    F --> G(8/4 x 10^{5-3})\n    G --> H(2 x 10^2)\n```\n\n**Multiplication Examples:**\n- $(1.2 \\times 10^4) \\times (6 \\times 10^4) = 7.2 \\times 10^8$\n- $(0.8 \\times 10^{-7}) \\times (1.1 \\times 10^3) = 0.88 \\times 10^{-4} = 8.8 \\times 10^{-5}$\n\n**Division Examples:**\n- $(9 \\times 10^9) \\div (4 \\times 10^9) = 2.25 \\times 10^0 = 2.25$\n- $(1.2 \\times 10^9) \\div (3 \\times 10^5) = 0.4 \\times 10^4 = 4 \\times 10^3$\n\n#### 3. Indices\nUse the rule $(a^m)^n = a^{m \\times n}$.\n- $(2 \\times 10^3)^2 = 2^2 \\times 10^6 = 4 \\times 10^6$\n- $(1.2 \\times 10^4)^2 = 1.44 \\times 10^8$\n\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Operations in Standard Form**\n> \n> Calculate $(4.5 \\times 10^6) + (3.2 \\times 10^5)$. Give your answer in standard form.\n> \n> **Solution:**\n> \n>\n> \n> Step 1: Equalize the powers of 10. Change the smaller power to match the larger power.\n> \n> $3.2 \\times 10^5 = 0.32 \\times 10^6$\n> \n>\n> \n> Step 2: Add the multipliers.\n> \n> $4.5 \\times 10^6 + 0.32 \\times 10^6 = (4.5 + 0.32) \\times 10^6 = 4.82 \\times 10^6$.\n> \n> > **2. Multiplication in Standard Form**\n> \n> Calculate $(8.4 \\times 10^5) \\times (5 \\times 10^{-2})$. Give your answer in standard form.\n> \n> **Solution:**\n> \n>\n> \n> Step 1: Multiply the multipliers.\n> \n> $8.4 \\times 5 = 42$\n> \n>\n> \n> Step 2: Add the indices of 10.\n> \n> $10^{5 + (-2)} = 10^3$\n> \n>\n> \n> Step 3: Combine and adjust to standard form.\n> \n> $42 \\times 10^3 = 4.2 \\times 10^1 \\times 10^3 = 4.2 \\times 10^4$.\n> \n> > **3. Significant Figures**\n> \n> Write 0.073096 correct to:\n> \n> a) 3 significant figures\n> \n>\n> \n> b) 2 decimal places\n> \n> **Solution:**\n> \n> a) The first non-zero digit is 7. The third significant figure is 0. The next digit is 9, which rounds the 0 up to 1.\n> \n> Answer: $0.0731$\n> \n>\n> \n> b) The second decimal place is 7. The next digit is 3, so we do not round up.\n> \n> Answer: $0.07$",
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
        "digitizedText": "## Ratio & Proportion\n\n> \n> [!NOTE]\n> \n> **What is ratio?**\n> \n> A ratio is a way of comparing two or more similar quantities.\n\n### Types of Ratio Problems\n\n```mermaid\ngraph TD\n    A[Ratio Problems] --> B(Sharing Ratio)\n    A --> C(Given One Value)\n    A --> D(Ratio Difference)\n```\n\n#### 1. Sharing Ratio\nThis involves dividing a total amount into a given ratio.\n- **Example:** Abu and Sam want to share \u00a3\u00a3250 in the ratio of $2:3$.\n  - Total ratio parts = $2 + 3 = 5$\n  - Actual / Ratio (A/R) = $\u00a3250 \\div 5 = 50$\n  - Abu gets $2 \\times 50 = \u00a3\u00a3100$\n  - Sam gets $3 \\times 50 = \u00a3\u00a3150$\n\n#### Visualizing Ratios with the Bar Model\nThe **Singapore Bar Model** is a powerful visual method for solving sharing ratio problems. Each part is represented by a box of equal size.\n<div align=\"center\">\n<svg width=\"420\" height=\"150\" viewBox=\"0 0 420 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Alice: 3 boxes -->\n<text x=\"20\" y=\"40\" class=\"sme-text\" font-weight=\"bold\">Alice (3 parts):</text>\n<rect x=\"140\" y=\"20\" width=\"60\" height=\"30\" class=\"sme-axis\"/>\n<rect x=\"200\" y=\"20\" width=\"60\" height=\"30\" class=\"sme-axis\"/>\n<rect x=\"260\" y=\"20\" width=\"60\" height=\"30\" class=\"sme-axis\"/>\n<text x=\"170\" y=\"40\" class=\"sme-text\" text-anchor=\"middle\">$20</text>\n<text x=\"230\" y=\"40\" class=\"sme-text\" text-anchor=\"middle\">$20</text>\n<text x=\"290\" y=\"40\" class=\"sme-text\" text-anchor=\"middle\">$20</text>\n\n<!-- Bob: 2 boxes -->\n<text x=\"20\" y=\"90\" class=\"sme-text\" font-weight=\"bold\">Bob (2 parts):</text>\n<rect x=\"140\" y=\"70\" width=\"60\" height=\"30\" class=\"sme-axis\"/>\n<rect x=\"200\" y=\"70\" width=\"60\" height=\"30\" class=\"sme-axis\"/>\n<text x=\"170\" y=\"90\" class=\"sme-text\" text-anchor=\"middle\">$20</text>\n<text x=\"230\" y=\"90\" class=\"sme-text\" text-anchor=\"middle\">$20</text>\n\n<!-- Total Bracket/Line indicator -->\n<line x1=\"140\" y1=\"115\" x2=\"320\" y2=\"115\" class=\"sme-line-construction\"/>\n<circle cx=\"140\" cy=\"115\" r=\"3\" class=\"sme-marker\"/>\n<circle cx=\"320\" cy=\"115\" r=\"3\" class=\"sme-marker\"/>\n<text x=\"230\" y=\"135\" class=\"sme-text\" text-anchor=\"middle\" font-weight=\"bold\">Total: 5 parts = $100</text>\n\n<!-- Part calculation label -->\n<text x=\"330\" y=\"60\" class=\"sme-text-muted\" text-anchor=\"start\">1 part = $100 / 5 = $20</text>\n<text x=\"330\" y=\"80\" class=\"sme-text\" fill=\"#3b82f6\" font-weight=\"bold\">Ratio 3 : 2</text>\n</svg>\n</div>\n\n#### 2. Given One Value\nIn this type, you are given the ratio and the actual amount for one part.\n- **Example:** James has apples and oranges in the ratio $2:5$. He has $15$ oranges.\n  - $5 \\text{ parts} = 15 \\text{ oranges}$\n  - $1 \\text{ part} = 15 \\div 5 = 3$\n  - James has $2 \\times 3 = 6 \\text{ apples}$\n\n#### 3. Ratio Difference\nYou are given the ratio and the difference between two quantities.\n- **Example:** A bag contains yellow and blue blocks in the ratio $1:3$. There are $8$ more blue blocks than yellow blocks.\n  - Ratio difference = $3 - 1 = 2 \\text{ parts}$\n  - $2 \\text{ parts} = 8 \\text{ blocks}$\n  - $1 \\text{ part} = 4 \\text{ blocks}$\n  - Yellow blocks = $1 \\times 4 = 4$\n  - Blue blocks = $3 \\times 4 = 12$\n\n#### 4. Ratio in 3 Quantities\n- **Example:** Concrete is made by mixing cement, sand, and gravel in the ratio $1:2:3$. Mark needs $300\\text{kg}$ of concrete.\n  - Total ratio = $1 + 2 + 3 = 6 \\text{ parts}$\n  - $1 \\text{ part} = 300 \\div 6 = 50\\text{kg}$\n  - Cement needed = $1 \\times 50 = 50\\text{kg}$\n  - Gravel needed = $3 \\times 50 = \u00a3150\\text{kg}$\n\n## Currency Exchange\n\n> \n> [!TIP]\n> \n> **Rounding Rule for Money:** Money must always be rounded to 2 decimal places (2 d.p.) unless stated otherwise in the question.\n\n**Example 1: Converting to another currency**\nGregor changes \\$700 into euros (\u00a3). The exchange rate is \u00a31 = \\$1.4131.$.\n- Amount he receives = $700 \\div 1.4131 = \u20ac495.36$ (rounded to 2 d.p.)\n\n**Example 2: Converting back**\nMartina changed \\$200 Swiss Francs (CHF) into euros (\u00a3). The exchange rate is \u00a31 = 1.14\text{ CHF}.$.\n- Amount she receives = $200 \\div 1.14 = \u20ac175.44$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Ratio and Proportion**\n> \n> A sum of $1200$ dollars is divided between Alice, Bob, and Charlie in the ratio $2:3:5$. How much does Charlie receive?\n> \n> **Solution:**\n> \n> Total parts = $2 + 3 + 5 = 10$.\n> \n> Value of 1 part = $1200 / 10 = 120$.\n> \n> Charlie receives 5 parts: $5 \\times 120 = 600$ dollars.\n> \n> > **2. Currency Exchange**\n> \n> The exchange rate between US Dollars and Euros is $1 \\text{ USD} = 0.85 \\text{ EUR}$. If you have $400 \\text{ USD}$, how many Euros will you receive?\n> \n> **Solution:**\n> \n> Amount in Euros = $400 \\times 0.85 = 340 \\text{ EUR}$.",
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
        "notes": "No explicit handwritten notes found for this topic. However, essential rules to memorize:\n\n> [!NOTE]\n> **Powers (Indices) Rules:**\n> - $a^m \\times a^n = a^{m+n}$\n> - $a^m \\div a^n = a^{m-n}$\n> - $(a^m)^n = a^{mn}$\n> - $a^0 = 1$\n> - $a^{-n} = \\frac{1}{a^n}$\n> - $a^{\\frac{1}{n}} = \\sqrt[n]{a}$\n> - $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$\n\n> [!NOTE]\n> **Examples:**\n> **1. Evaluating Powers**\n> Evaluate $4^3 \\times 4^{-1}$.\n> **Solution:**\n> Using index laws, $a^m \\times a^n = a^{m+n}$.\n> $4^3 \\times 4^{-1} = 4^{3 + (-1)} = 4^2 = 16$.\n> \n> **2. Fractional Powers**\n> Calculate the value of $27^{\\frac{2}{3}}$.\n> **Solution:**\n> $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2$.\n> Since $\\sqrt[3]{27} = 3$, we have $3^2 = 9$.",
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
        ],
        "subtopicId": "1.6",
        "digitizedText": "No explicit handwritten notes found for this topic. However, essential rules to memorize:\n\n> \n> [!NOTE]\n> \n> **Powers (Indices) Rules:**\n> \n> - $a^m \\times a^n = a^{m+n}$\n> \n> - $a^m \\div a^n = a^{m-n}$\n> \n> - $(a^m)^n = a^{mn}$\n> \n> - $a^0 = 1$\n> \n> - $a^{-n} = \\frac{1}{a^n}$\n> \n> - $a^{\\frac{1}{n}} = \\sqrt[n]{a}$\n> \n> - $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Evaluating Powers**\n> \n> Evaluate $4^3 \\times 4^{-1}$.\n> \n> **Solution:**\n> \n> Using index laws, $a^m \\times a^n = a^{m+n}$.\n> \n> $4^3 \\times 4^{-1} = 4^{3 + (-1)} = 4^2 = 16$.\n> \n> > **2. Fractional Powers**\n> \n> Calculate the value of $27^{\\frac{2}{3}}$.\n> \n> **Solution:**\n> \n> $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2$.\n> \n> Since $\\sqrt[3]{27} = 3$, we have $3^2 = 9$."
    },
    {
        "id": "1.7",
        "title": "Percentages, simple interest, compound interest",
        "notes": "## 1.7 Simple Interest & Compound Interest\n\n> [!NOTE]\n> **Simple Interest, $I$**\n> $$ I = \\frac{P \\times r \\times t}{100} $$\n>\n> - **$P$** = Principal\n> - **$r$** = rate (%)\n> - **$t$** = time in years\n\n### Example\nRiza saves RM 600 in Bank A.\nBank A gives $2.5\\%$ simple interest.\n**a) How much is the interest after 4 years?**\n$I = 600 \\times \\frac{2.5}{100} \\times 4$\n$I = \\text{RM } 60$\n\n**b) How much is the total saving after 4 years?**\n$\\text{Total} = P + I$\n$= 600 + 60$\n$= \\text{RM } 660$\n\n---\n\n> [!NOTE]\n> **Compound Interest**\n> $$ A = P \\left(1 + \\frac{r}{100}\\right)^t $$\n>\n> - **$P$** = Principal\n> - **$r$** = rate (%) $\\rightarrow \\frac{r}{100}$\n> - **$t$** = time in years\n> - **$A$** = Amount after $t$ years\n>\n> ```mermaid\n> graph LR\n>   A[Principal] -->|Add Interest| B[Year 1 Amount]\n>   B -->|Add Interest on New Amount| C[Year 2 Amount]\n>   C -->|...| D[Year t Amount]\n> ```\n\n### Example\nRiza saves RM 600 in Bank B.\nBank B gives $2.5\\%$ compound interest. How much is his saving after 4 years?\n\n**Year by year breakdown:**\n- 2020: $600 \\times 2.5\\% = 15$\n- 2021: $615 \\times 2.5\\% = 15.375$\n- 2022: $630.375 \\times 102.5\\% = 646.13$\n- 2023: $646.13 \\times 102.5\\% = 662.29$\n\n**Using formula:**\n$A = 600 \\left(1 + \\frac{2.5}{100}\\right)^4$\n$A = \\text{RM } 662.29$\n\n**To find the interest:**\n$I = A - P$\n$I = 662.29 - 600$\n$I = \\text{RM } 62.29$\n\n> [!NOTE]\n> **Examples:**\n> **1. Percentage Increase**\n> The price of a bicycle increases from $250$ to $280$. Calculate the percentage increase.\n> **Solution:**\n> Increase = $280 - 250 = 30$.\n> Percentage Increase = $\\frac{30}{250} \\times 100\\% = 12\\%$.\n> \n> **2. Compound Interest**\n> Find the total amount if $500$ is invested for $3$ years at a compound interest rate of $4\\%$ per year.\n> **Solution:**\n> Formula: $A = P(1 + \\frac{r}{100})^n$.\n> $A = 500(1 + \\frac{4}{100})^3 = 500(1.04)^3$.\n> $A = 500 \\times 1.124864 = 562.43$.",
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
        ],
        "subtopicId": "1.7",
        "digitizedText": "## 1.7 Simple Interest & Compound Interest\n\n> \n> [!NOTE]\n> \n> **Simple Interest, $I$**\n> \n> $$ I = \\frac{P \\times r \\times t}{100} $$\n>\n> \n> - **$P$** = Principal\n> \n> - **$r$** = rate (%)\n> \n> - **$t$** = time in years\n\n### Simple vs. Compound Growth Curve\nWhen graphed, Simple Interest grows linearly (constant rate), whereas Compound Interest grows exponentially (growing rate). Over time, the advantage of compound interest becomes significant.\n<div align=\"center\">\n<svg width=\"360\" height=\"240\" viewBox=\"-40 -20 360 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Grids -->\n<line x1=\"0\" y1=\"50\" x2=\"300\" y2=\"50\" class=\"sme-grid\"/>\n<line x1=\"0\" y1=\"100\" x2=\"300\" y2=\"100\" class=\"sme-grid\"/>\n<line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" class=\"sme-grid\"/>\n<line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"200\" class=\"sme-grid\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"200\" class=\"sme-grid\"/>\n\n<!-- Axes -->\n<line x1=\"0\" y1=\"200\" x2=\"310\" y2=\"200\" class=\"sme-axis\"/>\n<line x1=\"0\" y1=\"200\" x2=\"0\" y2=\"-10\" class=\"sme-axis\"/>\n<polygon points=\"310,200 304,196 304,204\" class=\"sme-marker\"/>\n<polygon points=\"0,-10 -4,-4 4,-4\" class=\"sme-marker\"/>\n\n<!-- Shaded region between simple and compound interest (advantage) -->\n<path d=\"M 0,160 L 260,60 L 260,30 Q 150,110 0,160 Z\" class=\"sme-fill-primary\"/>\n\n<!-- Simple Interest (Linear Line) -->\n<line x1=\"0\" y1=\"160\" x2=\"260\" y2=\"60\" class=\"sme-line-secondary\"/>\n<!-- Compound Interest (Exponential Curve) -->\n<path d=\"M 0,160 Q 150,110 260,30\" class=\"sme-line-primary\"/>\n\n<!-- Labels -->\n<text x=\"290\" y=\"215\" class=\"sme-text\" text-anchor=\"middle\">Time (t)</text>\n<text x=\"-10\" y=\"-10\" class=\"sme-text\" text-anchor=\"start\">Value ($)</text>\n\n<circle cx=\"0\" cy=\"160\" r=\"3\" class=\"sme-marker\"/>\n<text x=\"-8\" y=\"164\" class=\"sme-text\" text-anchor=\"end\">P</text>\n\n<text x=\"180\" y=\"100\" class=\"sme-text\" fill=\"#ef4444\" font-weight=\"bold\">Simple Interest</text>\n<text x=\"120\" y=\"60\" class=\"sme-text\" fill=\"#3b82f6\" font-weight=\"bold\">Compound Interest</text>\n<text x=\"240\" y=\"110\" class=\"sme-text-muted\" text-anchor=\"middle\">Advantage</text>\n</svg>\n</div>\n\n### Example\nRiza saves RM 600 in Bank A.\nBank A gives $2.5\\%$ simple interest.\n**a) How much is the interest after 4 years?**\n$I = 600 \\times \\frac{2.5}{100} \\times 4$\n$I = \\text{RM } 60$\n\n**b) How much is the total saving after 4 years?**\n$\\text{Total} = P + I$\n$= 600 + 60$\n$= \\text{RM } 660$\n\n---\n\n> \n> [!NOTE]\n> \n> **Compound Interest**\n> \n> $$ A = P \\left(1 + \\frac{r}{100}\\right)^t $$\n>\n> \n> - **$P$** = Principal\n> \n> - **$r$** = rate (%) $\\rightarrow \\frac{r}{100}$\n> \n> - **$t$** = time in years\n> \n> - **$A$** = Amount after $t$ years\n>\n> \n> ```mermaid\n> \n> graph LR\n> \n> A[Principal] -->|Add Interest| B[Year 1 Amount]\n> \n> B -->|Add Interest on New Amount| C[Year 2 Amount]\n> \n> C -->|...| D[Year t Amount]\n> \n> ```\n\n### Simple vs. Compound Growth Curve\nWhen graphed, Simple Interest grows linearly (constant rate), whereas Compound Interest grows exponentially (growing rate). Over time, the advantage of compound interest becomes significant.\n<div align=\"center\">\n<svg width=\"360\" height=\"240\" viewBox=\"-40 -20 360 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Grids -->\n<line x1=\"0\" y1=\"50\" x2=\"300\" y2=\"50\" class=\"sme-grid\"/>\n<line x1=\"0\" y1=\"100\" x2=\"300\" y2=\"100\" class=\"sme-grid\"/>\n<line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" class=\"sme-grid\"/>\n<line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"200\" class=\"sme-grid\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"200\" class=\"sme-grid\"/>\n\n<!-- Axes -->\n<line x1=\"0\" y1=\"200\" x2=\"310\" y2=\"200\" class=\"sme-axis\"/>\n<line x1=\"0\" y1=\"200\" x2=\"0\" y2=\"-10\" class=\"sme-axis\"/>\n<polygon points=\"310,200 304,196 304,204\" class=\"sme-marker\"/>\n<polygon points=\"0,-10 -4,-4 4,-4\" class=\"sme-marker\"/>\n\n<!-- Shaded region between simple and compound interest (advantage) -->\n<path d=\"M 0,160 L 260,60 L 260,30 Q 150,110 0,160 Z\" class=\"sme-fill-primary\"/>\n\n<!-- Simple Interest (Linear Line) -->\n<line x1=\"0\" y1=\"160\" x2=\"260\" y2=\"60\" class=\"sme-line-secondary\"/>\n<!-- Compound Interest (Exponential Curve) -->\n<path d=\"M 0,160 Q 150,110 260,30\" class=\"sme-line-primary\"/>\n\n<!-- Labels -->\n<text x=\"290\" y=\"215\" class=\"sme-text\" text-anchor=\"middle\">Time (t)</text>\n<text x=\"-10\" y=\"-10\" class=\"sme-text\" text-anchor=\"start\">Value ($)</text>\n\n<circle cx=\"0\" cy=\"160\" r=\"3\" class=\"sme-marker\"/>\n<text x=\"-8\" y=\"164\" class=\"sme-text\" text-anchor=\"end\">P</text>\n\n<text x=\"180\" y=\"100\" class=\"sme-text\" fill=\"#ef4444\" font-weight=\"bold\">Simple Interest</text>\n<text x=\"120\" y=\"60\" class=\"sme-text\" fill=\"#3b82f6\" font-weight=\"bold\">Compound Interest</text>\n<text x=\"240\" y=\"110\" class=\"sme-text-muted\" text-anchor=\"middle\">Advantage</text>\n</svg>\n</div>\n\n### Example\nRiza saves RM 600 in Bank B.\nBank B gives $2.5\\%$ compound interest. How much is his saving after 4 years?\n\n**Year by year breakdown:**\n- 2020: $600 \\times 2.5\\% = 15$\n- 2021: $615 \\times 2.5\\% = 15.375$\n- 2022: $630.375 \\times 102.5\\% = 646.13$\n- 2023: $646.13 \\times 102.5\\% = 662.29$\n\n**Using formula:**\n$A = 600 \\left(1 + \\frac{2.5}{100}\\right)^4$\n$A = \\text{RM } 662.29$\n\n**To find the interest:**\n$I = A - P$\n$I = 662.29 - 600$\n$I = \\text{RM } 62.29$\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Percentage Increase**\n> \n> The price of a bicycle increases from $250$ to $280$. Calculate the percentage increase.\n> \n> **Solution:**\n> \n> Increase = $280 - 250 = 30$.\n> \n> Percentage Increase = $\\frac{30}{250} \\times 100\\% = 12\\%$.\n> \n> > **2. Compound Interest**\n> \n> Find the total amount if $500$ is invested for $3$ years at a compound interest rate of $4\\%$ per year.\n> \n> **Solution:**\n> \n> Formula: $A = P(1 + \\frac{r}{100})^n$.\n> \n> $A = 500(1 + \\frac{4}{100})^3 = 500(1.04)^3$.\n> \n> $A = 500 \\times 1.124864 = 562.43$."
    },
    {
        "id": "1.8",
        "title": "Speed, distance, time",
        "notes": "# 1.8 Speed, Distance, and Time\n\n> [!NOTE]\n> **Basic Formulas**\n> - **Speed** = $\\frac{\\text{Distance}}{\\text{Time}}$ (Rate of distance over time)\n> - **Average Speed** = $\\frac{\\text{Total Distance}}{\\text{Total Time}}$\n> \n> You can also rearrange to find distance or time:\n> - $\\text{Distance} = \\text{Speed} \\times \\text{Time}$\n> - $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$\n\n### Time Calculation\n\n> [!TIP]\n> **Calculating Duration**\n> - **Same day:** $\\text{Duration} = \\text{Final Time} - \\text{Initial Time}$ (use 24-hour system)\n> - **Different day:** Calculate the time until midnight on the first day, then add the time of the next day.\n> - **Different timezone:**\n>   - Destination is ahead: Subtract timezone difference from arrival time to find local departure time.\n>   - Destination is behind: Add timezone difference.\n\n### Unit Conversions\n\n> [!IMPORTANT]\n> To convert from **km/h to m/s**, multiply by $\\frac{1000}{3600}$.\n> Example: $45 \\text{ km/h} = 45 \\times \\frac{1000}{3600} \\text{ m/s} = 12.5 \\text{ m/s}$\n\n### Graph of Motion\n\n#### Distance vs Time Graph\n- **Gradient** = Speed ($m = \\frac{\\text{height}}{\\text{base}}$)\n- A horizontal line means the object is stationary (no movement).\n\n```mermaid\nxychart-beta\n    title \"Distance vs Time Graph Example\"\n    x-axis \"Time (s)\" [0, 3, 6, 8, 10]\n    y-axis \"Distance (m)\" 0 --> 10\n    line [0, 6, 6, 10, 0]\n```\n\n#### Speed vs Time Graph\n- **Gradient** = Acceleration / Deceleration\n- **Area under graph** = Distance travelled\n\n```mermaid\nxychart-beta\n    title \"Speed vs Time Graph Example\"\n    x-axis \"Time (s)\" [0, 4, 10, 12]\n    y-axis \"Speed (m/s)\" 0 --> 10\n    line [0, 8, 8, 0]\n```\n\n> [!NOTE]\n> **Examples:**\n> **1. Average Speed**\n> A car travels $150 \\text{ km}$ in $2.5 \\text{ hours}$. What is its average speed in $\\text{km/h}$?\n> **Solution:**\n> Speed = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{150}{2.5} = 60 \\text{ km/h}$.\n> \n> **2. Changing Units**\n> A train travels at a constant speed of $72 \\text{ km/h}$. Convert this speed to $\\text{m/s}$.\n> **Solution:**\n> Speed in $\\text{m/s}$ = Speed in $\\text{km/h} \\times \\frac{1000}{3600}$.\n> $72 \\times \\frac{1000}{3600} = 20 \\text{ m/s}$.",
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
        ],
        "subtopicId": "1.8",
        "digitizedText": "# 1.8 Speed, Distance, and Time\n\n> \n> [!NOTE]\n> \n> **Basic Formulas**\n> \n> - **Speed** = $\\frac{\\text{Distance}}{\\text{Time}}$ (Rate of distance over time)\n> \n> - **Average Speed** = $\\frac{\\text{Total Distance}}{\\text{Total Time}}$\n> \n> > You can also rearrange to find distance or time:\n> \n> - $\\text{Distance} = \\text{Speed} \\times \\text{Time}$\n> \n> - $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$\n\n### Time Calculation\n\n> \n> [!TIP]\n> \n> **Calculating Duration**\n> \n> - **Same day:** $\\text{Duration} = \\text{Final Time} - \\text{Initial Time}$ (use 24-hour system)\n> \n> - **Different day:** Calculate the time until midnight on the first day, then add the time of the next day.\n> \n> - **Different timezone:**\n> \n> - Destination is ahead: Subtract timezone difference from arrival time to find local departure time.\n> \n> - Destination is behind: Add timezone difference.\n\n### Unit Conversions\n\n> \n> [!IMPORTANT]\n> \n> To convert from **km/h to m/s**, multiply by $\\frac{1000}{3600}$.\n> \n> Example: $45 \\text{ km/h} = 45 \\times \\frac{1000}{3600} \\text{ m/s} = 12.5 \\text{ m/s}$\n\n### Graph of Motion\n\n#### Distance vs Time Graph\n- **Gradient** = Speed ($m = \\frac{\\text{height}}{\\text{base}}$)\n- A horizontal line means the object is stationary (no movement).\n<div align=\"center\">\n<svg width=\"340\" height=\"260\" viewBox=\"-40 -20 340 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<path d=\"M 0,200 L 80,40 L 200,40 L 240,200 Z\" class=\"sme-fill-primary\"/>\n\n<line x1=\"0\" y1=\"40\" x2=\"250\" y2=\"40\" class=\"sme-grid\"/>\n<line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"200\" class=\"sme-grid\"/>\n<line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"200\" class=\"sme-grid\"/>\n<line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"200\" class=\"sme-grid\"/>\n\n<line x1=\"0\" y1=\"200\" x2=\"280\" y2=\"200\" class=\"sme-axis\"/>\n<line x1=\"0\" y1=\"200\" x2=\"0\" y2=\"-10\" class=\"sme-axis\"/>\n<polygon points=\"280,200 274,196 274,204\" class=\"sme-marker\"/>\n<polygon points=\"0,-10 -4,-4 4,-4\" class=\"sme-marker\"/>\n\n<text x=\"260\" y=\"225\" class=\"sme-text\" text-anchor=\"middle\">Time (s)</text>\n<text x=\"-15\" y=\"-15\" class=\"sme-text\" text-anchor=\"start\">Speed (m/s)</text>\n\n<text x=\"-8\" y=\"204\" class=\"sme-text-muted\" text-anchor=\"end\">0</text>\n<text x=\"-8\" y=\"44\" class=\"sme-text-muted\" text-anchor=\"end\">8</text>\n\n<text x=\"80\" y=\"215\" class=\"sme-text-muted\" text-anchor=\"middle\">4</text>\n<text x=\"200\" y=\"215\" class=\"sme-text-muted\" text-anchor=\"middle\">10</text>\n<text x=\"240\" y=\"215\" class=\"sme-text-muted\" text-anchor=\"middle\">12</text>\n\n<path d=\"M 0,200 L 80,40 L 200,40 L 240,200\" class=\"sme-line-primary\"/>\n<text x=\"130\" y=\"120\" class=\"sme-text\" font-weight=\"bold\" text-anchor=\"middle\">Distance = Area = 64m</text>\n</svg>\n</div>\n\n#### Speed vs Time Graph\n- **Gradient** = Acceleration / Deceleration\n- **Area under graph** = Distance travelled\n<div align=\"center\">\n<svg width=\"340\" height=\"260\" viewBox=\"-40 -20 340 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M 0,200 L 80,40 L 200,40 L 240,200 Z\" fill=\"currentColor\" fill-opacity=\"0.12\"/>\n\n<line x1=\"0\" y1=\"40\" x2=\"250\" y2=\"40\" stroke=\"currentColor\" stroke-dasharray=\"2,2\" opacity=\"0.2\"/>\n<line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"200\" stroke=\"currentColor\" stroke-dasharray=\"2,2\" opacity=\"0.2\"/>\n<line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"200\" stroke=\"currentColor\" stroke-dasharray=\"2,2\" opacity=\"0.2\"/>\n<line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"200\" stroke=\"currentColor\" stroke-dasharray=\"2,2\" opacity=\"0.2\"/>\n\n<line x1=\"0\" y1=\"200\" x2=\"280\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.8\"/>\n<line x1=\"0\" y1=\"200\" x2=\"0\" y2=\"-10\" stroke=\"currentColor\" stroke-width=\"1.8\"/>\n<polygon points=\"280,200 274,196 274,204\" fill=\"currentColor\"/>\n<polygon points=\"0,-10 -4,-4 4,-4\" fill=\"currentColor\"/>\n\n<text x=\"260\" y=\"225\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"12\" text-anchor=\"middle\">Time (s)</text>\n<text x=\"-15\" y=\"-15\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"12\" text-anchor=\"start\">Speed (m/s)</text>\n\n<text x=\"-8\" y=\"204\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"end\">0</text>\n<text x=\"-8\" y=\"44\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"end\">8</text>\n\n<text x=\"80\" y=\"215\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"middle\">4</text>\n<text x=\"200\" y=\"215\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"middle\">10</text>\n<text x=\"240\" y=\"215\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"middle\">12</text>\n\n<path d=\"M 0,200 L 80,40 L 200,40 L 240,200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n\n<text x=\"130\" y=\"120\" fill=\"currentColor\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Distance = Area = 64m</text>\n</svg>\n</div>\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Average Speed**\n> \n> A car travels $150 \\text{ km}$ in $2.5 \\text{ hours}$. What is its average speed in $\\text{km/h}$?\n> \n> **Solution:**\n> \n> Speed = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{150}{2.5} = 60 \\text{ km/h}$.\n> \n> > **2. Changing Units**\n> \n> A train travels at a constant speed of $72 \\text{ km/h}$. Convert this speed to $\\text{m/s}$.\n> \n> **Solution:**\n> \n> Speed in $\\text{m/s}$ = Speed in $\\text{km/h} \\times \\frac{1000}{3600}$.\n> \n> $72 \\times \\frac{1000}{3600} = 20 \\text{ m/s}$."
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
        ],
        "digitizedText": "## 1.9 Map Scales\nMap scales represent the ratio between a distance on the map and the actual distance on the ground. A key IGCSE rule is that the **Area Scale is the square of the Linear Scale**.\n<div align=\"center\">\n<svg width=\"440\" height=\"180\" viewBox=\"0 0 440 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Map Square -->\n<rect x=\"30\" y=\"40\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<text x=\"60\" y=\"30\" class=\"sme-text\" text-anchor=\"middle\" font-weight=\"bold\">Map</text>\n<text x=\"60\" y=\"70\" class=\"sme-text\" text-anchor=\"middle\">1 cm</text>\n<text x=\"100\" y=\"75\" class=\"sme-text\" text-anchor=\"start\">1 cm</text>\n<text x=\"60\" y=\"130\" class=\"sme-text\" text-anchor=\"middle\">Area = 1 cm\u00b2</text>\n\n<!-- Conversion arrow -->\n<g transform=\"translate(130, 70)\">\n<line x1=\"0\" y1=\"0\" x2=\"80\" y2=\"0\" class=\"sme-line-primary\"/>\n<polygon points=\"80,0 72,-5 72,5\" class=\"sme-marker-primary\"/>\n<text x=\"40\" y=\"-10\" class=\"sme-text\" fill=\"#3b82f6\" text-anchor=\"middle\">Scale 1 : 50,000</text>\n<text x=\"40\" y=\"15\" class=\"sme-text-muted\" text-anchor=\"middle\">(1 cm = 500 m)</text>\n</g>\n\n<!-- Ground Square -->\n<rect x=\"250\" y=\"40\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<text x=\"280\" y=\"30\" class=\"sme-text\" text-anchor=\"middle\" font-weight=\"bold\">Ground</text>\n<text x=\"280\" y=\"70\" class=\"sme-text\" text-anchor=\"middle\">500 m</text>\n<text x=\"320\" y=\"75\" class=\"sme-text\" text-anchor=\"start\">500 m</text>\n<text x=\"280\" y=\"130\" class=\"sme-text\" text-anchor=\"middle\">Area = 250,000 m\u00b2</text>\n<text x=\"280\" y=\"150\" class=\"sme-text-muted\" text-anchor=\"middle\">(0.25 km\u00b2)</text>\n\n<!-- Relation explanation -->\n<text x=\"350\" y=\"100\" class=\"sme-text\" fill=\"#ef4444\" font-weight=\"bold\">Area Scale = (Linear Scale)\u00b2</text>\n<text x=\"350\" y=\"120\" class=\"sme-text-muted\">1 : 50,000\u00b2</text>\n</svg>\n</div>\n\n\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Map Distance Calculation**\n> \n> A map has a scale of $1 : 50,000$. The distance between two towns on the map is $8 \\text{ cm}$. Calculate the actual distance between the towns in kilometres.\n> \n> **Solution:**\n> \n> Map distance $= 8 \\text{ cm}$\n> \n> Actual distance $= 8 \\times 50,000 \\text{ cm} = 400,000 \\text{ cm}$\n> \n> Convert to km: $400,000 \\div 100,000 = 4 \\text{ km}$\n> \n> > **2. Area Scale**\n> \n> The scale of a map is $1 : 20,000$. A lake has an area of $5 \\text{ cm}^2$ on the map. Find the actual area of the lake in square kilometres.\n> \n> **Solution:**\n> \n> Linear scale is $1 : 20,000$.\n> \n> Area scale is $1^2 : 20,000^2 = 1 : 400,000,000$.\n> \n> Actual area in $\\text{cm}^2 = 5 \\times 400,000,000 = 2,000,000,000 \\text{ cm}^2$.\n> \n> Convert to $\\text{km}^2$ by dividing by $10,000,000,000$ (since $1 \\text{ km}^2 = 10^{10} \\text{ cm}^2$):\n> \n> $2,000,000,000 \\div 10,000,000,000 = 0.2 \\text{ km}^2$.",
        "subtopicId": "1.9"
    },
    {
        "id": "c1_set_notation",
        "title": "1.10 Set notation & Venn diagram",
        "image": "0580-ext-math/images/77_IMG_20260330_094853.jpg",
        "digitizedText": "# Chapter 1: Numbers\n\n## (10) Set notation & Venn Diagram\n\n> \n> [!NOTE]\n> \n> **What is a set?**\n> \n> A set is a collection of objects, defined by certain rules.\n\n### Set Notations\n*   **$\\xi$** : Universal set\n*   **$\\in$** : is an element of\n*   **$\\notin$** : is not an element of\n*   **$n(A)$** : number of elements in set $A$\n*   **$\\cap$** : intersect (common elements)\n*   **$\\cup$** : union (all elements)\n*   **$A'$** : complementary of $A$ (all elements except $A$)\n*   **$\\emptyset$ or $\\{\\}$** : null set\n\n### Examples\nGiven the universal set $\\xi$ = Whole numbers from 1 to 10 inclusive:\n*   $A = \\{\\text{Even numbers}\\}=\\{2,4,6,8,10\\}$\n*   $B = \\{\\text{Odd numbers}\\}=\\{1,3,5,7,9\\}$\n*   $C = \\{\\text{Prime numbers}\\}=\\{2,3,5,7\\}$\n\nWe can apply the notations as follows:\n*   $3 \\in \\text{set } B$\n*   $5 \\notin \\text{set } A$\n*   $A \\cap B = \\emptyset \\text{ or } \\{\\}$\n*   $A \\cap C = \\{2\\}$\n*   $B \\cup C = \\{1, 2, 3, 5, 7, 9\\}$\n\n---\n\n### Venn Diagrams\nVisual representation of sets.\n<div align=\"center\">\n<svg width=\"400\" height=\"260\" viewBox=\"0 0 400 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<rect x=\"10\" y=\"10\" width=\"380\" height=\"240\" rx=\"10\" fill=\"none\" class=\"sme-axis\" stroke-width=\"1.8\"/>\n<text x=\"30\" y=\"35\" class=\"sme-text\" font-family=\"serif\" font-size=\"16\" font-style=\"italic\">\\xi</text>\n<circle cx=\"150\" cy=\"130\" r=\"80\" class=\"sme-fill-primary\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<circle cx=\"250\" cy=\"130\" r=\"80\" class=\"sme-fill-secondary\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<!-- Intersect highlighting -->\n<path d=\"M 200,66.1 A 80,80 0 0,1 250,130 A 80,80 0 0,1 200,193.9 A 80,80 0 0,1 150,130 A 80,80 0 0,1 200,66.1\" fill=\"currentColor\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<text x=\"105\" y=\"135\" class=\"sme-text\" font-weight=\"bold\">Set A</text>\n<text x=\"270\" y=\"135\" class=\"sme-text\" font-weight=\"bold\">Set B</text>\n<text x=\"200\" y=\"135\" class=\"sme-text\" font-family=\"serif\" font-style=\"italic\" text-anchor=\"middle\">A \\cap B</text>\n</svg>\n</div>\n\n**Example 3:**\n$\\xi = \\{\\text{Pupils in } Y7\\}$\n$P = \\text{Piano players}$\n$V = \\text{Violin players}$\n$C = \\text{Cello players}$\n\n> \n> [!TIP]\n> \n> Fred says 'Everyone in Y7 who plays the cello also plays the violin'.\n> \n> Fred is right because set $C$ is a subset of set $V$.\n\n```mermaid\nflowchart LR\n    subgraph Universal[Y7 Pupils: 85 total]\n        direction LR\n        P((Piano: 15 only))\n        V((Violin: 12 only))\n        P_V((Piano & Violin: 4))\n        C((Cello: 7 only))\n        P_C((Piano & Cello: 3))\n        None[Neither: 44]\n        \n        P --- P_V\n        V --- P_V\n        C -. Subset of .- V\n        P --- P_C\n        C --- P_C\n    end\n```\n\n**Example 4:**\n30 people took part in a survey. 16 of them said they owned cars, and 12 said they owned bicycles. 6 said they owned neither a car nor a bicycle.\n\n*   $16 - x + x + 12 - x + 6 = 30$\n*   $34 - x = 30$\n*   $x = 4$\n\nSo, 4 people owned both a car and a bicycle.\n\n```mermaid\nflowchart TD\n    subgraph Survey [30 People Surveyed]\n        Car((Car Only: 12))\n        Both((Both: 4))\n        Bike((Bicycle Only: 8))\n        Car --- Both --- Bike\n        Neither[Neither: 6]\n    end\n```\n\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Elements of Sets**\n> \n> Given the universal set $\\mathcal{E} = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{\\text{even numbers}\\}$ and $B = \\{\\text{multiples of 3}\\}$. List the elements of $A \\cap B$ and $A \\cup B$.\n> \n> **Solution:**\n> \n> $A = \\{2, 4, 6, 8, 10\\}$\n> \n> $B = \\{3, 6, 9\\}$\n> \n> $A \\cap B$ (elements in both $A$ and $B$) $= \\{6\\}$\n> \n> $A \\cup B$ (elements in $A$ or $B$) $= \\{2, 3, 4, 6, 8, 9, 10\\}$\n> \n> > **2. Venn Diagram Regions**\n> \n> In a class of $30$ students, $18$ study History ($H$), $15$ study Geography ($G$), and $4$ study neither. Find the number of students who study both subjects.\n> \n> **Solution:**\n> \n> Total students $= 30$. Students studying at least one subject $= 30 - 4 = 26$.\n> \n> Let $x$ be the number of students studying both: $n(H \\cap G) = x$.\n> \n> $n(H \\cup G) = n(H) + n(G) - n(H \\cap G)$\n> \n> $26 = 18 + 15 - x$\n> \n> $26 = 33 - x$\n> \n> $x = 7$. Thus, $7$ students study both subjects.",
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
        ],
        "subtopicId": "1.10"
    },
    {
        "id": "c1_surds",
        "title": "1.11 Surds",
        "image": "0580-ext-math/images/89_IMG_20260406_094642.jpg",
        "digitizedText": "# Chapter 1: Numbers\n\n## (11) Surds\n\n> \n> [!NOTE]\n> \n> **What is a surd?**\n> \n> A surd is an irrational number (it cannot be expressed as a simple fraction). \n> \n> For example: $\\sqrt{3}, \\sqrt{5}, \\sqrt{10}, \\sqrt{12}$ are surds. $\\sqrt{25}$ and $\\sqrt{100}$ are NOT surds because they evaluate to whole numbers.\n<div align=\"center\">\n<svg width=\"260\" height=\"200\" viewBox=\"-20 -20 260 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<path d=\"M 0,150 L 150,150 L 150,0 Z\" class=\"sme-fill-primary\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<rect x=\"135\" y=\"135\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<path d=\"M 30,150 A 30,30 0 0,0 26,124\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/>\n<text x=\"35\" y=\"142\" class=\"sme-text\">\\theta</text>\n<text x=\"75\" y=\"170\" class=\"sme-text\" text-anchor=\"middle\">1</text>\n<text x=\"170\" y=\"75\" class=\"sme-text\" dominant-baseline=\"middle\">1</text>\n<text x=\"60\" y=\"65\" class=\"sme-text\" font-style=\"italic\" fill=\"#3b82f6\" font-weight=\"bold\">\\sqrt{2}</text>\n<text x=\"5\" y=\"-5\" class=\"sme-text-muted\">\\sqrt{1^2 + 1^2} = \\sqrt{2}</text>\n</svg>\n</div>\n\n### Simplifying Surds\nSome surds can be simplified. Only surds with perfect square factors can be simplified.\n\nTake $\\sqrt{12}$ for example:\nThe factors of 12 are (1, 12), (2, 6), and (3, **4**). Since 4 is a perfect square:\n$$\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4} \\times \\sqrt{3} = 2\\sqrt{3}$$\n\n**More Examples:**\n*   $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$\n*   $\\sqrt{2} \\times \\sqrt{6} = \\sqrt{12} = 2\\sqrt{3}$\n*   $\\sqrt{7} \\times \\sqrt{8} = \\sqrt{56} = 2\\sqrt{14}$\n*   $\\sqrt{9} \\times \\sqrt{3} = 3\\sqrt{3}$\n*   $\\sqrt{8} \\times \\sqrt{4} = \\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}$\n\n> \n> [!TIP]\n> \n> Always look for the largest perfect square factor to simplify completely. For instance, $\\sqrt{32}$ could be $\\sqrt{4} \\times \\sqrt{8} = 2\\sqrt{8}$, but this is not the simplest form because 8 still has a perfect square factor. The simplest form is $\\sqrt{16} \\times \\sqrt{2} = 4\\sqrt{2}$.\n\n### Multiplying Surds\nMultiply the numbers outside the root together, and the numbers inside the root together.\n*   $2\\sqrt{3} \\times 3\\sqrt{5} = 6\\sqrt{15}$\n*   $7\\sqrt{2} \\times 4\\sqrt{11} = 28\\sqrt{22}$\n*   $2\\sqrt{13} \\times 2\\sqrt{2} = 4\\sqrt{26}$\n*   $10\\sqrt{2} \\times 5\\sqrt{3} = 50\\sqrt{6}$\n*   $2\\sqrt{2} \\times 3\\sqrt{8} = 6\\sqrt{16} = 6(4) = 24$\n\n### Rationalising Surds\nRationalising surds only happens for the denominator. A surd as a denominator is considered to be an unsimplified fraction. To rationalize the denominator, multiply the whole fraction by a 'conjugate'.\n\n**Examples:**\n*   $\\frac{1}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$\n*   $\\frac{2}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$\n*   $\\frac{5\\sqrt{5}}{\\sqrt{20}} = \\frac{5\\sqrt{5}}{2\\sqrt{5}} = \\frac{5}{2}$\n*   $\\frac{\\sqrt{2} + 1}{\\sqrt{5}} = \\frac{(\\sqrt{2} + 1) \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{\\sqrt{10} + \\sqrt{5}}{5}$\n*   $\\frac{2 - \\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3} - 3}{3}$\n\n### Operations Involving Surds (Addition & Subtraction)\nConsider the surd to be an unknown variable (like $7x - x = 6x$).\n\n**Examples:**\n*   $2\\sqrt{2} + 5\\sqrt{2} = 7\\sqrt{2}$\n*   $7\\sqrt{3} - \\sqrt{3} = 6\\sqrt{3}$\n*   $\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$\n*   $\\sqrt{50} - \\sqrt{8} = 5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$\n*   $4\\sqrt{80} + 3\\sqrt{45} = 4(4\\sqrt{5}) + 3(3\\sqrt{5}) = 16\\sqrt{5} + 9\\sqrt{5} = 25\\sqrt{5}$\n\n\n> \n> [!NOTE]\n> \n> **Examples:**\n> \n> **1. Simplifying Surds**\n> \n> Expand and simplify $\\sqrt{12} + 2\\sqrt{27} - \\sqrt{75}$.\n> \n> **Solution:**\n> \n> $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$\n> \n> $2\\sqrt{27} = 2\\sqrt{9 \\times 3} = 2 \\times 3\\sqrt{3} = 6\\sqrt{3}$\n> \n> $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$\n> \n> Combining them: $2\\sqrt{3} + 6\\sqrt{3} - 5\\sqrt{3} = 3\\sqrt{3}$\n> \n> > **2. Rationalising the Denominator**\n> \n> Rationalise the denominator of $\\frac{3 + \\sqrt{2}}{\\sqrt{2}}$.\n> \n> **Solution:**\n> \n> Multiply both numerator and denominator by $\\sqrt{2}$:\n> \n> $\\frac{(3 + \\sqrt{2}) \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}$\n> \n> $= \\frac{3\\sqrt{2} + 2}{2}$\n> \n> > **3. Expanding Brackets**\n> \n> Expand and simplify $(2\\sqrt{5} - 1)(\\sqrt{5} + 3)$.\n> \n> **Solution:**\n> \n> Multiply out the brackets:\n> \n> $= (2\\sqrt{5})(\\sqrt{5}) + (2\\sqrt{5})(3) - (1)(\\sqrt{5}) - (1)(3)$\n> \n> $= 2(5) + 6\\sqrt{5} - \\sqrt{5} - 3$\n> \n> $= 10 + 5\\sqrt{5} - 3$\n> \n> $= 7 + 5\\sqrt{5}$",
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
        ],
        "subtopicId": "1.11"
    },
    {
        "subtopicId": "9.1",
        "title": "Statistics Introduction",
        "digitizedText": "## 9.1 Statistics Introduction\n\nStatistics is the science of collecting, organizing, analyzing, and interpreting data. In IGCSE Mathematics, you must master summaries of central tendency (mean, median, mode), measures of spread (range, quartiles, interquartile range), and graphical representations.\n\n### 1. Measures of Central Tendency & Spread\n*   **Mean:** The sum of all values divided by the total number of values.\n    $$\\text{Mean} = \\frac{\\sum x}{n}$$\n*   **Median:** The middle value when the data is sorted in ascending order. If there is an even number of values, it is the average of the two middle values.\n*   **Mode:** The value that occurs most frequently. (A set can be bimodal or have no mode).\n*   **Range:** The difference between the maximum and minimum values.\n    $$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$\n*   **Interquartile Range (IQR):** The difference between the Upper Quartile ($Q_3$) and the Lower Quartile ($Q_1$). It represents the spread of the middle 50% of the data.\n    $$\\text{IQR} = Q_3 - Q_1$$\n\n### 2. Box-and-Whisker Plots\nA **box plot** visually summarizes a dataset using a five-number summary: the Minimum, Lower Quartile ($Q_1$), Median ($Q_2$), Upper Quartile ($Q_3$), and Maximum.\n<div align=\"center\">\n<svg width=\"460\" height=\"180\" viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"sme-diagram\">\n<!-- Axis scale at the bottom -->\n<line x1=\"40\" y1=\"140\" x2=\"420\" y2=\"140\" class=\"sme-axis\"/>\n<!-- Ticks on scale -->\n<line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"145\" class=\"sme-axis\"/>\n<line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"145\" class=\"sme-axis\"/>\n<line x1=\"200\" y1=\"140\" x2=\"200\" y2=\"145\" class=\"sme-axis\"/>\n<line x1=\"300\" y1=\"140\" x2=\"300\" y2=\"145\" class=\"sme-axis\"/>\n<line x1=\"420\" y1=\"140\" x2=\"420\" y2=\"145\" class=\"sme-axis\"/>\n<!-- Numbers on scale -->\n<text x=\"40\" y=\"160\" class=\"sme-text-muted\" text-anchor=\"middle\">10</text>\n<text x=\"120\" y=\"160\" class=\"sme-text-muted\" text-anchor=\"middle\">20</text>\n<text x=\"200\" y=\"160\" class=\"sme-text-muted\" text-anchor=\"middle\">30</text>\n<text x=\"300\" y=\"160\" class=\"sme-text-muted\" text-anchor=\"middle\">40</text>\n<text x=\"420\" y=\"160\" class=\"sme-text-muted\" text-anchor=\"middle\">50</text>\n\n<!-- Whiskers (dashed) -->\n<line x1=\"80\" y1=\"70\" x2=\"160\" y2=\"70\" class=\"sme-line-construction\"/>\n<line x1=\"320\" y1=\"70\" x2=\"400\" y2=\"70\" class=\"sme-line-construction\"/>\n\n<!-- Box (Q1 to Q3) -->\n<rect x=\"160\" y=\"40\" width=\"160\" height=\"60\" class=\"sme-fill-primary\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<!-- Median line -->\n<line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"100\" class=\"sme-line-primary\" stroke-width=\"2\"/>\n\n<!-- End Ticks (Whiskers) -->\n<line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"85\" class=\"sme-axis\"/>\n<line x1=\"400\" y1=\"55\" x2=\"400\" y2=\"85\" class=\"sme-axis\"/>\n\n<!-- Labels and Pointer Lines -->\n<!-- Median -->\n<line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"40\" class=\"sme-line-construction\"/>\n<circle cx=\"220\" cy=\"40\" r=\"2.5\" class=\"sme-marker\"/>\n<text x=\"220\" y=\"15\" class=\"sme-text\" fill=\"#3b82f6\" text-anchor=\"middle\">Median (Q2 = 32.5)</text>\n\n<!-- Lower Quartile -->\n<line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"40\" class=\"sme-line-construction\"/>\n<circle cx=\"160\" cy=\"40\" r=\"2.5\" class=\"sme-marker\"/>\n<text x=\"160\" y=\"15\" class=\"sme-text\" text-anchor=\"end\">Lower Quartile (Q1 = 25)</text>\n\n<!-- Upper Quartile -->\n<line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"40\" class=\"sme-line-construction\"/>\n<circle cx=\"320\" cy=\"40\" r=\"2.5\" class=\"sme-marker\"/>\n<text x=\"320\" y=\"15\" class=\"sme-text\" text-anchor=\"start\">Upper Quartile (Q3 = 45)</text>\n\n<!-- Minimum Value -->\n<line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"90\" class=\"sme-line-construction\"/>\n<circle cx=\"80\" cy=\"85\" r=\"2.5\" class=\"sme-marker\"/>\n<text x=\"80\" y=\"125\" class=\"sme-text\" text-anchor=\"middle\">Min = 15</text>\n\n<!-- Maximum Value -->\n<line x1=\"400\" y1=\"110\" x2=\"400\" y2=\"90\" class=\"sme-line-construction\"/>\n<circle cx=\"400\" cy=\"85\" r=\"2.5\" class=\"sme-marker\"/>\n<text x=\"400\" y=\"125\" class=\"sme-text\" text-anchor=\"middle\">Max = 47.5</text>\n</svg>\n</div>\n\n> [!NOTE]\n> **Example 1: Finding Quartiles and Box Plot Values**\n> A group of 11 students scored the following marks in a test:\n> $$15, 18, 20, 22, 25, 29, 32, 35, 40, 45, 48$$\n> Find the Median, Range, and Interquartile Range.\n>\n> **Solution:**\n> 1. The data is already sorted: $n = 11$.\n> 2. **Median ($Q_2$):** The middle position is $\\frac{n+1}{2} = \\frac{12}{2} = 6^{\\text{th}}$ value.\n>    $$Q_2 = 29$$\n> 3. **Lower Quartile ($Q_1$):** The median of the lower half (values before 29: $15, 18, 20, 22, 25$). The middle is the $3^{\\text{rd}}$ value:\n>    $$Q_1 = 20$$\n> 4. **Upper Quartile ($Q_3$):** The median of the upper half (values after 29: $32, 35, 40, 45, 48$). The middle is the $3^{\\text{rd}}$ value:\n>    $$Q_3 = 40$$\n> 5. **Range:** $48 - 15 = 33$.\n> 6. **Interquartile Range (IQR):** $Q_3 - Q_1 = 40 - 20 = 20$.\n\n### 3. Cumulative Frequency\nA cumulative frequency curve is a running total of frequencies. You plot cumulative frequency on the $y$-axis against the upper boundary of each class interval on the $x$-axis.\n*   Read at $\\frac{n}{4}$ to find the **Lower Quartile ($Q_1$)**.\n*   Read at $\\frac{n}{2}$ to find the **Median ($Q_2$)**.\n*   Read at $\\frac{3n}{4}$ to find the **Upper Quartile ($Q_3$)**.",
        "quizzes": [
            {
                "question": "In a box-and-whisker plot, what does the box represent?",
                "options": [
                    "The range of the entire data set",
                    "The interquartile range (IQR)",
                    "The difference between the median and the mean",
                    "The standard deviation"
                ],
                "correctIndex": 1,
                "explanation": "The box is drawn from the Lower Quartile ($Q_1$) to the Upper Quartile ($Q_3$). The width of the box is therefore $Q_3 - Q_1$, which represents the Interquartile Range (IQR)."
            },
            {
                "question": "A set of data is: $3, 6, 7, 8, 11, 14, 15$. Find the median of this data.",
                "options": [
                    "8",
                    "7.5",
                    "11",
                    "14"
                ],
                "correctIndex": 0,
                "explanation": "There are 7 data points, which are already sorted. The middle value is the $4^{\\text{th}}$ value, which is 8."
            },
            {
                "question": "For a cumulative frequency curve of 80 students, at what cumulative frequency value on the y-axis do you read to find the upper quartile?",
                "options": [
                    "20",
                    "40",
                    "60",
                    "75"
                ],
                "correctIndex": 2,
                "explanation": "The upper quartile corresponds to $75\\%$ of the total frequency. $75\\%$ of 80 is $0.75 \\times 80 = 60$."
            }
        ]
    }
];
