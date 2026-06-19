import json
import os

data = [
    {
        "subtopicId": "4.7",
        "title": "Automatic Switch & Potential Divider",
        "digitizedText": """## 4.7 Automatic Switch & Potential Divider

> [!NOTE]
> Potential divider circuits split the voltage from a power source across two or more components in series. Automatic switches use environment-dependent resistors (like LDRs or thermistors) within a potential divider to turn circuits on or off.

### Environment-Dependent Resistors
- **Light Dependent Resistor (LDR):** Resistance decreases as light intensity increases ($R \\propto \\frac{1}{\\text{Light}}$).
- **Thermistor:** Resistance decreases as temperature increases ($R \\propto \\frac{1}{\\text{Temp}}$).

<div align="center">
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" width="300">
  <rect x="20" y="40" width="60" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="0" y1="50" x2="20" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="2"/>
  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 30 20 L 45 35 M 40 15 L 55 30" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="35" y="90" fill="currentColor" font-family="sans-serif">LDR</text>
  <rect x="120" y="40" width="60" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="50" x2="120" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="50" x2="200" y2="50" stroke="currentColor" stroke-width="2"/>
  <path d="M 120 70 L 140 70 L 180 30" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="125" y="90" fill="currentColor" font-family="sans-serif">Thermistor</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
</svg>
</div>

### Potential Divider Circuit
In a potential divider, the total voltage $V_T$ is shared between resistors $X$ and $Y$. The voltage across each resistor is proportional to its resistance.

<div align="center">
<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" width="300">
  <!-- Voltage Source -->
  <line x1="50" y1="100" x2="50" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="130" x2="70" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="140" x2="60" y2="140" stroke="currentColor" stroke-width="4"/>
  <line x1="30" y1="160" x2="70" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="170" x2="60" y2="170" stroke="currentColor" stroke-width="4"/>
  <text x="10" y="155" font-family="sans-serif" font-size="14" fill="currentColor">V_T</text>
  <line x1="50" y1="100" x2="150" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="200" x2="150" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="100" x2="150" y2="120" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="120" width="20" height="40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="170" y="145" font-family="sans-serif" font-size="14" fill="currentColor">X</text>
  <line x1="150" y1="160" x2="150" y2="180" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="180" width="20" height="40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="170" y="205" font-family="sans-serif" font-size="14" fill="currentColor">Y</text>
  <line x1="150" y1="220" x2="150" y2="240" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="240" x2="50" y2="240" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="240" x2="50" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="110" x2="220" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="110" x2="220" y2="125" stroke="currentColor" stroke-width="2"/>
  <circle cx="220" cy="140" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="212" y="145" font-family="sans-serif" font-size="14" fill="currentColor">V1</text>
  <line x1="220" y1="155" x2="220" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="170" x2="220" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="170" x2="220" y2="185" stroke="currentColor" stroke-width="2"/>
  <circle cx="220" cy="200" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="212" y="205" font-family="sans-serif" font-size="14" fill="currentColor">V2</text>
  <line x1="220" y1="215" x2="220" y2="230" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="230" x2="150" y2="230" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

**Equations:**
$$V_1 = \\frac{X}{X+Y} \\times V_T$$
$$V_2 = \\frac{Y}{X+Y} \\times V_T$$
$$V_1 + V_2 = V_T$$

**Example Calculation:**
Given a 24V supply, with $X = 200\\,\\Omega$ and $Y = 600\\,\\Omega$:
$$V_1 = \\frac{200}{200+600} \\times 24 = 6\\text{ V}$$
$$V_2 = \\frac{600}{200+600} \\times 24 = 18\\text{ V}$$

> [!TIP]
> If resistance ($R$) increases, the voltage ($V$) across that resistor also increases. In an automatic switch, a bulb is placed in parallel with an LDR. When light increases, LDR resistance drops, causing the voltage across the bulb to decrease, effectively turning it off.
""",
        "quizzes": [
            {
                "question": "What happens to the resistance of a Light Dependent Resistor (LDR) when the light intensity increases?",
                "options": ["Resistance increases", "Resistance decreases", "Resistance stays the same", "Resistance fluctuates randomly"],
                "answer": "Resistance decreases",
                "explanation": "An LDR's resistance is inversely proportional to light intensity. As light increases, resistance decreases."
            },
            {
                "question": "In a potential divider circuit with two resistors in series, how is the total voltage $V_T$ distributed?",
                "options": ["Equally across both resistors regardless of resistance", "Proportional to their resistance", "Inversely proportional to their resistance", "All voltage drops across the first resistor"],
                "answer": "Proportional to their resistance",
                "explanation": "Voltage in a potential divider is shared proportionally. The larger the resistance, the larger the voltage drop across it ($V=IR$ with constant series $I$)."
            },
            {
                "question": "A potential divider has a total voltage of $12\\text{V}$. Resistor $X$ is $100\\,\\Omega$ and resistor $Y$ is $300\\,\\Omega$. What is the voltage across $X$?",
                "options": ["3V", "4V", "6V", "9V"],
                "answer": "3V",
                "explanation": "$V_X = (X / (X+Y)) \\times V_T = (100 / 400) \\times 12 = 3\\text{V}$."
            },
            {
                "question": "A thermistor is connected in series with a fixed resistor. If the temperature increases, what happens to the voltage across the thermistor?",
                "options": ["It increases", "It decreases", "It remains constant", "It becomes zero"],
                "answer": "It decreases",
                "explanation": "When temperature increases, a thermistor's resistance decreases. Consequently, its share of the total voltage also decreases."
            },
            {
                "question": "In a dark sensing automatic switch, a lamp is connected in parallel with an LDR. What causes the lamp to turn on in the dark?",
                "options": ["LDR resistance increases, increasing voltage across the lamp", "LDR resistance decreases, increasing voltage across the lamp", "LDR resistance increases, decreasing voltage across the lamp", "LDR resistance decreases, decreasing voltage across the lamp"],
                "answer": "LDR resistance increases, increasing voltage across the lamp",
                "explanation": "In the dark, LDR resistance is high. Since the lamp is in parallel with the LDR, the high resistance causes a high voltage drop across the LDR and lamp, turning the lamp on."
            },
            {
                "question": "Which formula correctly represents the voltage $V_2$ across resistor $Y$ in a potential divider containing resistors $X$ and $Y$?",
                "options": ["$V_2 = \\frac{X}{X+Y} \\times V_T$", "$V_2 = \\frac{Y}{X+Y} \\times V_T$", "$V_2 = \\frac{X+Y}{Y} \\times V_T$", "$V_2 = \\frac{Y}{X} \\times V_T$"],
                "answer": "$V_2 = \\frac{Y}{X+Y} \\times V_T$",
                "explanation": "The voltage across $Y$ ($V_2$) is the ratio of $Y$ to the total resistance $(X+Y)$, multiplied by the total voltage $V_T$."
            },
            {
                "question": "What happens to the total resistance of a potential divider circuit if a thermistor is used and the temperature rises?",
                "options": ["Total resistance increases", "Total resistance decreases", "Total resistance remains the same", "Total voltage increases"],
                "answer": "Total resistance decreases",
                "explanation": "Since the thermistor's resistance drops as temperature rises, the total series resistance of the circuit decreases."
            }
        ]
    },
    {
        "subtopicId": "4.8",
        "title": "House Wiring System",
        "digitizedText": """## 4.8 House Wiring System

> [!NOTE]
> Household circuits are connected in parallel to ensure all appliances receive the same mains voltage and can be operated independently. The wiring system includes safety features to prevent electrical hazards.

### The Wiring System
- **Live Wire:** Carries the high alternating voltage from the power supply to the appliance.
- **Neutral Wire:** Completes the circuit by returning the current to the power supply, usually at zero volts.

### Safety Components
Safety devices are placed on the **Live Wire** to cut off the circuit if the current ($I$) becomes dangerously high.
1. **Fuse:** Contains a thin wire that melts and breaks the circuit if the current exceeds its rating (e.g., 4A, 13A).
2. **Circuit Breaker:** An automatic electromagnetic switch that trips and breaks the circuit when the current is too high. It can be easily reset, unlike a fuse which must be replaced.

<div align="center">
<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="400">
  <rect x="250" y="50" width="100" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
  <polygon points="250,50 300,20 350,50" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="270" y="110" font-family="sans-serif" font-size="16" fill="currentColor">House</text>
  <line x1="20" y1="60" x2="100" y2="60" stroke="#d97706" stroke-width="2"/>
  <rect x="100" y="50" width="30" height="20" fill="none" stroke="#d97706" stroke-width="2"/>
  <line x1="100" y1="60" x2="130" y2="60" stroke="#d97706" stroke-width="2"/>
  <text x="105" y="45" font-family="sans-serif" font-size="12" fill="#d97706">Fuse</text>
  <line x1="130" y1="60" x2="160" y2="60" stroke="#d97706" stroke-width="2"/>
  <path d="M 160 60 L 175 45 L 190 60" fill="none" stroke="#d97706" stroke-width="2"/>
  <text x="145" y="40" font-family="sans-serif" font-size="12" fill="#d97706">Circuit Breaker</text>
  <line x1="190" y1="60" x2="250" y2="60" stroke="#d97706" stroke-width="2"/>
  <text x="30" y="55" font-family="sans-serif" font-size="14" fill="#d97706">Live Wire</text>
  <line x1="20" y1="130" x2="250" y2="130" stroke="#2563eb" stroke-width="2"/>
  <text x="30" y="125" font-family="sans-serif" font-size="14" fill="#2563eb">Neutral Wire</text>
</svg>
</div>

> [!WARNING]
> Fuses and circuit breakers MUST always be connected to the live wire. If placed on the neutral wire, breaking the circuit would stop current flow, but the appliance would still remain at high voltage, posing a severe electric shock risk.
""",
        "quizzes": [
            {
                "question": "Which wire in a household circuit carries the high alternating voltage from the supply?",
                "options": ["Neutral wire", "Earth wire", "Live wire", "Ground wire"],
                "answer": "Live wire",
                "explanation": "The live wire carries the alternating high voltage from the power supply, while the neutral wire completes the circuit at approximately zero volts."
            },
            {
                "question": "Where must a fuse be placed in a house wiring system to ensure safety?",
                "options": ["On the neutral wire", "On the live wire", "On the earth wire", "In parallel with the appliance"],
                "answer": "On the live wire",
                "explanation": "A fuse must be placed on the live wire so that if it blows, it immediately disconnects the high voltage from the appliance."
            },
            {
                "question": "What is the primary function of a circuit breaker?",
                "options": ["To step up the voltage", "To convert AC to DC", "To cut the circuit when the current is too high", "To reduce the resistance of the circuit"],
                "answer": "To cut the circuit when the current is too high",
                "explanation": "A circuit breaker is an automatic switch that protects the circuit by tripping and stopping the current flow when it exceeds a safe limit."
            },
            {
                "question": "What is the primary difference between a fuse and a circuit breaker?",
                "options": ["Fuses can be reset, circuit breakers melt", "Fuses melt and must be replaced, circuit breakers can be reset", "Fuses are placed on the neutral wire, circuit breakers on the live wire", "Fuses protect against voltage spikes, circuit breakers against low voltage"],
                "answer": "Fuses melt and must be replaced, circuit breakers can be reset",
                "explanation": "A fuse contains a wire that physically melts to break the circuit, requiring replacement. A circuit breaker simply trips and can be manually reset."
            },
            {
                "question": "Why are household appliances connected in parallel rather than series?",
                "options": ["To reduce the total current from the mains", "So that they all share the same voltage and can operate independently", "So that breaking one circuit cuts off all appliances for safety", "To increase the total resistance of the house"],
                "answer": "So that they all share the same voltage and can operate independently",
                "explanation": "In a parallel circuit, each appliance gets the full mains voltage and switching one off doesn't affect the others."
            },
            {
                "question": "If a fuse is incorrectly placed on the neutral wire, what is the danger when it blows?",
                "options": ["The appliance will continue to work normally", "The appliance will still be connected to the high voltage live wire", "The current will increase drastically", "The neutral wire will melt"],
                "answer": "The appliance will still be connected to the high voltage live wire",
                "explanation": "If the neutral fuse blows, the current stops, but the appliance is still directly connected to the live wire, posing a lethal shock risk if touched."
            },
            {
                "question": "What happens if a house uses a series wiring system and one bulb blows?",
                "options": ["Other bulbs shine brighter", "Other bulbs remain unaffected", "The fuse blows immediately", "All other bulbs turn off"],
                "answer": "All other bulbs turn off",
                "explanation": "In a series circuit, any break in the path stops the flow of current entirely."
            }
        ]
    },
    {
        "subtopicId": "4.9",
        "title": "Logic Gates",
        "digitizedText": """## 4.9 Logic Gates

> [!NOTE]
> Logic gates are digital circuits that take one or more inputs and produce a single output based on specific logical rules. They operate on binary states: 
> - **0:** No signal, Off, Open switch
> - **1:** Signal, On, Closed switch

### Common Logic Gates

<div align="center">
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" width="600">
  <g transform="translate(20, 20)">
    <path d="M 0 10 L 20 10 M 0 30 L 20 30" stroke="currentColor" stroke-width="2"/>
    <path d="M 20 0 L 40 0 A 20 20 0 0 1 40 40 L 20 40 Z" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="2"/>
    <text x="25" y="60" font-family="sans-serif" font-size="14" fill="currentColor">AND</text>
  </g>
  <g transform="translate(150, 20)">
    <path d="M 0 10 L 20 10 M 0 30 L 20 30" stroke="currentColor" stroke-width="2"/>
    <path d="M 20 0 Q 30 20 20 40 Q 50 40 60 20 Q 50 0 20 0 Z" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="2"/>
    <text x="35" y="60" font-family="sans-serif" font-size="14" fill="currentColor">OR</text>
  </g>
  <g transform="translate(280, 20)">
    <line x1="0" y1="20" x2="20" y2="20" stroke="currentColor" stroke-width="2"/>
    <polygon points="20,5 50,20 20,35" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="55" cy="20" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="2"/>
    <text x="30" y="60" font-family="sans-serif" font-size="14" fill="currentColor">NOT</text>
  </g>
  <g transform="translate(410, 20)">
    <path d="M 0 10 L 20 10 M 0 30 L 20 30" stroke="currentColor" stroke-width="2"/>
    <path d="M 20 0 L 40 0 A 20 20 0 0 1 40 40 L 20 40 Z" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="65" cy="20" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="20" x2="90" y2="20" stroke="currentColor" stroke-width="2"/>
    <text x="30" y="60" font-family="sans-serif" font-size="14" fill="currentColor">NAND</text>
  </g>
  <g transform="translate(20, 100)">
    <path d="M 0 10 L 20 10 M 0 30 L 20 30" stroke="currentColor" stroke-width="2"/>
    <path d="M 20 0 Q 30 20 20 40 Q 50 40 60 20 Q 50 0 20 0 Z" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="65" cy="20" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="20" x2="90" y2="20" stroke="currentColor" stroke-width="2"/>
    <text x="30" y="60" font-family="sans-serif" font-size="14" fill="currentColor">NOR</text>
  </g>
</svg>
</div>

1. **NOT Gate:** Inverts the signal. (Boolean: $C = \\bar{A}$)
   - Output is 1 if input is 0. Output is 0 if input is 1.
2. **OR Gate:** Outputs 1 if *any* input is 1. (Boolean: $C = A + B$)
3. **AND Gate:** Outputs 1 only if *both* inputs are 1. (Boolean: $C = A \\cdot B$)
4. **NOR Gate:** Inverse of OR. Outputs 1 only if *both* inputs are 0. (Boolean: $C = \\overline{A + B}$)
5. **NAND Gate:** Inverse of AND. Outputs 0 only if *both* inputs are 1. (Boolean: $C = \\overline{A \\cdot B}$)

### Truth Tables

| A | B | AND | OR | NAND | NOR |
|:-:|:-:|:---:|:--:|:----:|:---:|
| 0 | 0 |  0  |  0 |   1  |  1  |
| 0 | 1 |  0  |  1 |   1  |  0  |
| 1 | 0 |  0  |  1 |   1  |  0  |
| 1 | 1 |  1  |  1 |   0  |  0  |

> [!TIP]
> When combining logic gates, trace the binary signals step-by-step. Write down the intermediate output of the first gate to use as the input for the next gate.
""",
        "quizzes": [
            {
                "question": "What is the output of an AND gate if its inputs are 1 and 0?",
                "options": ["0", "1", "Depends on the temperature", "Undefined"],
                "answer": "0",
                "explanation": "An AND gate outputs 1 only if BOTH inputs are 1. Since one input is 0, the output is 0."
            },
            {
                "question": "Which logic gate outputs 0 only when both of its inputs are 1?",
                "options": ["OR", "NOR", "AND", "NAND"],
                "answer": "NAND",
                "explanation": "A NAND gate is the inverse of an AND gate. It outputs 0 only when both inputs are 1; otherwise, it outputs 1."
            },
            {
                "question": "What is the Boolean expression for an OR gate?",
                "options": ["$C = A \\cdot B$", "$C = A + B$", "$C = \\bar{A}$", "$C = \\overline{A \\cdot B}$"],
                "answer": "$C = A + B$",
                "explanation": "The Boolean expression for an OR gate is represented by addition, $C = A + B$."
            },
            {
                "question": "If the input to a NOT gate is 1, what is the output?",
                "options": ["0", "1", "0.5", "-1"],
                "answer": "0",
                "explanation": "A NOT gate simply inverts its input. If the input is 1, the output becomes 0."
            },
            {
                "question": "What inputs are required for a NOR gate to output 1?",
                "options": ["Both inputs must be 1", "At least one input must be 1", "Both inputs must be 0", "One input must be 1 and the other 0"],
                "answer": "Both inputs must be 0",
                "explanation": "A NOR gate is the inverse of an OR gate. It outputs 1 only when both inputs are 0."
            },
            {
                "question": "In a combined logic circuit, the inputs A=1 and B=1 are fed into an AND gate. The output of this AND gate is then fed into a NOT gate. What is the final output?",
                "options": ["0", "1", "Depends on a third input", "Undefined"],
                "answer": "0",
                "explanation": "The AND gate with inputs 1 and 1 outputs 1. This 1 is fed into the NOT gate, which inverts it to 0. (This combination acts as a NAND gate)."
            },
            {
                "question": "Which statement correctly describes the operation of a logic gate?",
                "options": ["It converts analog signals to higher voltages.", "It produces a single output based on one or two binary inputs.", "It increases the resistance in a circuit.", "It strictly converts AC to DC."],
                "answer": "It produces a single output based on one or two binary inputs.",
                "explanation": "Logic gates process binary inputs (1s and 0s) and produce a single binary output according to a logical rule."
            }
        ]
    },
    {
        "subtopicId": "4.10",
        "title": "Diodes & Components",
        "digitizedText": """## 4.10 Diodes & Components

> [!NOTE]
> Electronic circuits rely on fundamental components to control current, measure values, and protect circuits. A diode is a specialized component that allows current to flow in only one direction.

### The Diode
A diode acts as a one-way valve for electric current. It is primarily used to convert Alternating Current (A.C) to Direct Current (D.C), a process known as rectification.

<div align="center">
<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="400">
  <g transform="translate(20, 20)">
    <line x1="50" y1="20" x2="50" y2="40" stroke="currentColor" stroke-width="4"/>
    <line x1="60" y1="10" x2="60" y2="50" stroke="currentColor" stroke-width="2"/>
    <text x="40" y="15" font-family="sans-serif" font-size="14" fill="currentColor">+</text>
    <text x="65" y="15" font-family="sans-serif" font-size="14" fill="currentColor">-</text>
    <line x1="50" y1="30" x2="10" y2="30" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="30" x2="10" y2="100" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="100" x2="50" y2="100" stroke="currentColor" stroke-width="2"/>
    <polygon points="50,90 70,100 50,110" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="90" x2="70" y2="110" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="100" x2="130" y2="100" stroke="currentColor" stroke-width="2"/>
    <circle cx="130" cy="65" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="120" y1="55" x2="140" y2="75" stroke="currentColor" stroke-width="2"/>
    <line x1="140" y1="55" x2="120" y2="75" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="100" x2="130" y2="80" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="50" x2="130" y2="30" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="30" x2="60" y2="30" stroke="currentColor" stroke-width="2"/>
    <path d="M 30 100 L 40 95 L 40 105 Z" fill="#10b981"/>
    <text x="15" y="140" font-family="sans-serif" font-size="14" fill="currentColor">Forward Bias (I flows)</text>
  </g>
  <g transform="translate(220, 20)">
    <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" stroke-width="2"/>
    <line x1="60" y1="20" x2="60" y2="40" stroke="currentColor" stroke-width="4"/>
    <text x="40" y="15" font-family="sans-serif" font-size="14" fill="currentColor">-</text>
    <text x="65" y="15" font-family="sans-serif" font-size="14" fill="currentColor">+</text>
    <line x1="50" y1="30" x2="10" y2="30" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="30" x2="10" y2="100" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="100" x2="50" y2="100" stroke="currentColor" stroke-width="2"/>
    <polygon points="50,90 70,100 50,110" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="90" x2="70" y2="110" stroke="currentColor" stroke-width="2"/>
    <line x1="70" y1="100" x2="130" y2="100" stroke="currentColor" stroke-width="2"/>
    <circle cx="130" cy="65" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="120" y1="55" x2="140" y2="75" stroke="currentColor" stroke-width="2"/>
    <line x1="140" y1="55" x2="120" y2="75" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="100" x2="130" y2="80" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="50" x2="130" y2="30" stroke="currentColor" stroke-width="2"/>
    <line x1="130" y1="30" x2="60" y2="30" stroke="currentColor" stroke-width="2"/>
    <line x1="30" y1="90" x2="45" y2="110" stroke="#ef4444" stroke-width="3"/>
    <line x1="45" y1="90" x2="30" y2="110" stroke="#ef4444" stroke-width="3"/>
    <text x="10" y="140" font-family="sans-serif" font-size="14" fill="currentColor">Reverse Bias (No I flows)</text>
  </g>
</svg>
</div>

- **Forward-bias:** When the positive terminal of the battery connects to the anode (triangle side), current flows.
- **Reverse-bias:** When the negative terminal connects to the cathode, the diode blocks the current.

### Electronic Components Overview
* **Bulb:** Converts electrical energy to light.
* **Cell / Battery:** Provides the electromotive force (voltage).
* **Ammeter / Voltmeter:** Measures current (in series) and voltage (in parallel).
* **Resistor / Variable Resistor:** Controls the amount of current in the circuit.
* **Relay:** Uses a low voltage circuit to switch a high voltage circuit.
* **Capacitor:** Stores electrical charge.
* **LED (Light Emitting Diode):** A diode that emits light when current flows in the forward direction.
""",
        "quizzes": [
            {
                "question": "What is the primary function of a diode?",
                "options": ["To amplify the current", "To allow current to flow in only one direction", "To store electrical charge", "To step up the voltage"],
                "answer": "To allow current to flow in only one direction",
                "explanation": "A diode acts as a one-way valve, permitting current to flow only when it is forward-biased."
            },
            {
                "question": "What happens when a diode is connected in reverse-bias?",
                "options": ["Current flows freely", "The diode acts as an open switch and blocks the current", "The diode converts DC to AC", "The voltage across the diode increases indefinitely"],
                "answer": "The diode acts as an open switch and blocks the current",
                "explanation": "In reverse-bias (positive terminal connected to the cathode), the diode has very high resistance and stops current flow."
            },
            {
                "question": "Which electronic component is used to convert Alternating Current (A.C) to Direct Current (D.C)?",
                "options": ["Capacitor", "Resistor", "Diode", "Relay"],
                "answer": "Diode",
                "explanation": "Diodes are used in rectifier circuits to convert A.C to D.C by blocking the reverse phase of the alternating current."
            },
            {
                "question": "What is the purpose of a capacitor in a circuit?",
                "options": ["To measure current", "To act as a one-way valve", "To store electrical charge", "To provide a constant voltage source"],
                "answer": "To store electrical charge",
                "explanation": "A capacitor stores electrical energy and can release it rapidly, making it useful in smoothing circuits and timing applications."
            },
            {
                "question": "What distinguishes an LED from a standard diode?",
                "options": ["An LED allows current in both directions", "An LED emits light when current flows through it in forward-bias", "An LED is used to step down voltage", "An LED stores charge"],
                "answer": "An LED emits light when current flows through it in forward-bias",
                "explanation": "LED stands for Light Emitting Diode. It behaves like a standard diode but releases energy in the form of photons (light) when conducting."
            },
            {
                "question": "What does a relay do in an electronic circuit?",
                "options": ["It converts AC to DC", "It uses a low voltage circuit to switch a high voltage circuit", "It measures voltage across a component", "It restricts current to a fixed value"],
                "answer": "It uses a low voltage circuit to switch a high voltage circuit",
                "explanation": "A relay is an electrically operated switch where a small current in an electromagnet closes or opens contacts for a larger current circuit."
            },
            {
                "question": "How should an ammeter and a voltmeter be connected in a circuit to take measurements?",
                "options": ["Both in series", "Both in parallel", "Ammeter in series, voltmeter in parallel", "Ammeter in parallel, voltmeter in series"],
                "answer": "Ammeter in series, voltmeter in parallel",
                "explanation": "Ammeters must be in series to measure the current flowing through the component, while voltmeters must be in parallel to measure the potential difference across it."
            }
        ]
    }
]

output_dir = r"C:\Users\Saifudin Sajadi\.gemini\antigravity\brain\8cf8b829-726e-4949-b821-88c3a617b369\scratch"
os.makedirs(output_dir, exist_ok=True)
with open(os.path.join(output_dir, "ch4_maker.json"), "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)
