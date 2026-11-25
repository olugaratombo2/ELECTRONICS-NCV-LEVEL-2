const TOPICS = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    icon: 'F',
    sections: [
      { h: '1. SI Units', lines: [
        '<b>Charge (Q)</b> - Coulombs (C)',
        '<b>Current (I)</b> - Amperes (A)',
        '<b>Voltage (V)</b> - Volts (V)',
        '<b>Resistance (R)</b> - Ohms (Ω)',
        '<b>Power (P)</b> - Watts (W)',
        '<b>Energy (E)</b> - Joules (J)',
        '<b>Capacitance (C)</b> - Farads (F)',
        '<b>Frequency (f)</b> - Hertz (Hz)'
      ] },
      { h: "2. Ohm's Law", lines: ['V = I × R', 'I = V ÷ R', 'R = V ÷ I'] },
      { h: '3. Power and Energy', lines: ['P = V × I', 'P = I² × R', 'P = V² ÷ R', 'E = P × t'] },
      { h: '4. AC and DC', lines: [
        '<b>DC</b> flows in one direction',
        '<b>AC</b> repeatedly changes direction',
        '<b>South Africa</b> uses approximately 230 V AC at 50 Hz'
      ] }
    ]
  },
  {
    id: 'components',
    name: 'Components',
    icon: 'C',
    sections: [
      { h: '1. Resistors', lines: [
        'Resistors limit current flow',
        'Resistance is measured in ohms',
        'Colour bands identify resistance value',
        'A resistor converts electrical energy into heat'
      ] },
      { h: '2. Capacitors', lines: [
        'Capacitors store electrical charge',
        'Capacitance is measured in farads',
        'Q = C × V',
        'Capacitors can block DC and pass changing signals'
      ] },
      { h: '3. Diodes and LEDs', lines: [
        'A diode conducts mainly in one direction',
        'Forward bias allows conduction',
        'Reverse bias prevents normal conduction',
        'An LED produces light when forward biased'
      ] },
      { h: '4. Transistors', lines: [
        'A transistor can switch or amplify',
        'BJT terminals are Base, Collector and Emitter',
        'A small base current controls a larger collector current',
        'Transistors must be correctly biased'
      ] }
    ]
  },
  {
    id: 'circuits',
    name: 'Circuit Analysis',
    icon: 'A',
    sections: [
      { h: '1. Series Circuits', lines: [
        'Current is the same everywhere',
        'Rt = R1 + R2 + R3',
        'Supply voltage is shared between components',
        'One open component can stop the circuit'
      ] },
      { h: '2. Parallel Circuits', lines: [
        'Voltage is the same across each branch',
        'Current divides between branches',
        '1/Rt = 1/R1 + 1/R2',
        'Other branches can continue working if one opens'
      ] },
      { h: "3. Kirchhoff's Laws", lines: [
        'KCL: current entering a junction equals current leaving',
        'KVL: the total voltage around a closed loop is zero'
      ] },
      { h: '4. Measuring Instruments', lines: [
        'An ammeter is connected in series',
        'A voltmeter is connected in parallel',
        'An ohmmeter is used with the power switched off'
      ] }
    ]
  }
];

function makeQuestion(topic, q, options, correct, explanation) {
  return { topic, q, options, correct, explanation };
}

const QUESTIONS = [
  makeQuestion('fundamentals', 'The SI unit of current is:', ['Volt', 'Ampere', 'Ohm', 'Watt'], 1, 'Current is measured in amperes (A).'),
  makeQuestion('fundamentals', 'The SI unit of voltage is:', ['Volt', 'Ampere', 'Ohm', 'Watt'], 0, 'Voltage is measured in volts (V).'),
  makeQuestion('fundamentals', 'The SI unit of resistance is:', ['Farad', 'Ohm', 'Watt', 'Coulomb'], 1, 'Resistance is measured in ohms (Ω).'),
  makeQuestion('fundamentals', 'The SI unit of power is:', ['Joule', 'Watt', 'Volt', 'Ampere'], 1, 'Power is measured in watts (W).'),
  makeQuestion('fundamentals', 'Electrical charge is measured in:', ['Amperes', 'Volts', 'Coulombs', 'Ohms'], 2, 'Charge is measured in coulombs (C).'),
  makeQuestion('fundamentals', 'Capacitance is measured in:', ['Farads', 'Ohms', 'Watts', 'Hertz'], 0, 'Capacitance is measured in farads (F).'),
  makeQuestion('fundamentals', 'Frequency is measured in:', ['Joules', 'Hertz', 'Coulombs', 'Volts'], 1, 'Frequency is measured in hertz (Hz).'),
  makeQuestion('fundamentals', "Ohm's Law is:", ['P = VI', 'V = IR', 'E = mc²', 'Q = It'], 1, "Ohm's Law is V = I × R."),
  makeQuestion('fundamentals', 'If V = 10 V and R = 5 Ω, current equals:', ['2 A', '50 A', '0.5 A', '15 A'], 0, 'I = V ÷ R = 10 ÷ 5 = 2 A.'),
  makeQuestion('fundamentals', 'If I = 3 A and R = 4 Ω, voltage equals:', ['0.75 V', '7 V', '12 V', '1 V'], 2, 'V = I × R = 3 × 4 = 12 V.'),
  makeQuestion('fundamentals', 'If V = 24 V and I = 6 A, resistance equals:', ['4 Ω', '30 Ω', '18 Ω', '0.25 Ω'], 0, 'R = V ÷ I = 24 ÷ 6 = 4 Ω.'),
  makeQuestion('fundamentals', 'The formula for electrical power is:', ['P = V × I', 'P = V ÷ I', 'P = R ÷ I', 'P = Q × R'], 0, 'Power is calculated using P = V × I.'),
  makeQuestion('fundamentals', 'A 12 V device drawing 2 A uses:', ['6 W', '10 W', '24 W', '14 W'], 2, 'P = V × I = 12 × 2 = 24 W.'),
  makeQuestion('fundamentals', 'Electrical energy is calculated using:', ['E = P × t', 'E = V ÷ I', 'E = R × I', 'E = Q ÷ t'], 0, 'Energy equals power multiplied by time.'),
  makeQuestion('fundamentals', 'Direct current normally flows:', ['In changing directions', 'In one direction', 'Only through capacitors', 'Without voltage'], 1, 'DC flows in one direction.'),
  makeQuestion('fundamentals', 'Alternating current:', ['Never changes direction', 'Changes direction periodically', 'Has no frequency', 'Cannot carry power'], 1, 'AC changes direction periodically.'),
  makeQuestion('fundamentals', 'The mains frequency in South Africa is approximately:', ['5 Hz', '25 Hz', '50 Hz', '500 Hz'], 2, 'South African mains supply is approximately 50 Hz.'),
  makeQuestion('fundamentals', 'One kilowatt is equal to:', ['10 W', '100 W', '1 000 W', '10 000 W'], 2, '1 kW = 1 000 W.'),

  makeQuestion('components', 'A resistor is used to:', ['Store charge', 'Limit current', 'Produce frequency', 'Allow only one direction'], 1, 'A resistor limits current flow.'),
  makeQuestion('components', 'Resistance is measured in:', ['Farads', 'Ohms', 'Watts', 'Hertz'], 1, 'Resistance is measured in ohms.'),
  makeQuestion('components', 'A resistor colour code is used to identify its:', ['Temperature only', 'Resistance value', 'Frequency', 'Power supply type'], 1, 'Colour bands identify resistance value and tolerance.'),
  makeQuestion('components', 'A resistor connected to a circuit can protect an LED by:', ['Increasing voltage', 'Limiting current', 'Storing charge', 'Reversing AC'], 1, 'The resistor limits current through the LED.'),
  makeQuestion('components', 'A capacitor stores:', ['Magnetic current', 'Electrical charge', 'Only heat', 'Resistance'], 1, 'A capacitor stores electrical charge.'),
  makeQuestion('components', 'The unit of capacitance is the:', ['Farad', 'Ohm', 'Ampere', 'Watt'], 0, 'Capacitance is measured in farads.'),
  makeQuestion('components', 'A capacitor can be used to:', ['Store charge', 'Measure current only', 'Act as a fuse only', 'Produce resistance only'], 0, 'Capacitors store charge and can smooth or couple signals.'),
  makeQuestion('components', 'An electrolytic capacitor is usually:', ['Non-polarised', 'Polarised', 'A mechanical switch', 'An AC source'], 1, 'Electrolytic capacitors normally have positive and negative terminals.'),
  makeQuestion('components', 'A diode normally allows current in:', ['One direction', 'Both directions equally', 'No direction', 'Three directions'], 0, 'A diode conducts mainly in one direction.'),
  makeQuestion('components', 'A diode is forward biased when:', ['The anode is positive relative to the cathode', 'The cathode is always positive', 'Both terminals are grounded', 'No supply is connected'], 0, 'Forward bias makes the anode more positive than the cathode.'),
  makeQuestion('components', 'An LED produces:', ['Light', 'Sound only', 'Resistance only', 'Magnetism only'], 0, 'An LED emits light when forward biased.'),
  makeQuestion('components', 'A rectifier changes:', ['DC to resistance', 'AC to DC', 'Heat to voltage', 'Power to frequency'], 1, 'A rectifier converts AC into pulsating DC.'),
  makeQuestion('components', 'A transistor can be used as a:', ['Switch', 'Battery', 'Fuse', 'Wire'], 0, 'A transistor can operate as an electronic switch.'),
  makeQuestion('components', 'The three terminals of a BJT are:', ['Gate, Drain, Source', 'Base, Collector, Emitter', 'Anode, Cathode, Gate', 'Live, Neutral, Earth'], 1, 'A BJT has a base, collector and emitter.'),
  makeQuestion('components', 'A transistor used to increase signal strength is acting as an:', ['Insulator', 'Amplifier', 'Ammeter', 'Fuse'], 1, 'Amplification increases the strength of a signal.'),
  makeQuestion('components', 'A fuse protects a circuit from:', ['Excessive current', 'Low light', 'Low frequency', 'Normal voltage'], 0, 'A fuse opens when current becomes dangerously high.'),

  makeQuestion('circuits', 'In a series circuit, current is:', ['Different everywhere', 'The same everywhere', 'Always zero', 'Divided between branches'], 1, 'Current is the same throughout a series circuit.'),
  makeQuestion('circuits', 'In a parallel circuit, voltage is:', ['The same across branches', 'Always zero', 'Different by definition', 'Only across the first resistor'], 0, 'Parallel branches connect across the same two points.'),
  makeQuestion('circuits', 'Total series resistance is:', ['R1 + R2 + R3', 'R1 ÷ R2', 'R1 × R2 only', 'Zero'], 0, 'Series resistances add together.'),
  makeQuestion('circuits', 'Two 5 Ω resistors in series equal:', ['2.5 Ω', '5 Ω', '10 Ω', '25 Ω'], 2, 'Rt = 5 Ω + 5 Ω = 10 Ω.'),
  makeQuestion('circuits', 'Two 10 Ω resistors in parallel equal:', ['5 Ω', '10 Ω', '20 Ω', '100 Ω'], 0, 'Equal parallel resistors have half the value: 10 ÷ 2 = 5 Ω.'),
  makeQuestion('circuits', 'In a parallel circuit, total current is:', ['The sum of branch currents', 'Always zero', 'Less than every branch current', 'The same as voltage'], 0, 'KCL states that branch currents add to total current.'),
  makeQuestion('circuits', 'An open circuit has:', ['A complete path', 'A broken path', 'Infinite current', 'Zero resistance'], 1, 'An open circuit has a break and cannot carry normal current.'),
  makeQuestion('circuits', 'A short circuit has:', ['Very high resistance', 'Very low resistance', 'No conducting path', 'Only AC current'], 1, 'A short circuit provides a very low resistance path.'),
  makeQuestion('circuits', 'KCL states that:', ['Voltage is always zero', 'Current entering a junction equals current leaving', 'Resistance always increases', 'Power equals resistance'], 1, 'Kirchhoff’s Current Law applies at circuit junctions.'),
  makeQuestion('circuits', 'KVL states that:', ['Current is the same in parallel', 'Voltage around a closed loop adds to zero', 'Resistance is measured in volts', 'A diode stores charge'], 1, 'Kirchhoff’s Voltage Law applies around closed loops.'),
  makeQuestion('circuits', 'An ammeter is connected:', ['In parallel', 'In series', 'Across the supply only', 'Without wires'], 1, 'An ammeter must be placed in series with the current being measured.'),
  makeQuestion('circuits', 'A voltmeter is connected:', ['In parallel', 'In series', 'Across a fuse only', 'Without wires'], 0, 'A voltmeter measures voltage across a component.'),
  makeQuestion('circuits', 'An ohmmeter should be used when the circuit is:', ['Powered on', 'Switched off', 'Connected to mains', 'Short-circuited'], 1, 'Power must be removed before measuring resistance.'),
  makeQuestion('circuits', 'If one lamp opens in a series circuit:', ['All current stops', 'The other lamps get brighter', 'Voltage becomes zero everywhere', 'The battery doubles'], 0, 'An open lamp breaks the only current path.'),
  makeQuestion('circuits', 'If one branch opens in a parallel circuit:', ['All branches must stop', 'Other branches may continue working', 'The supply disappears', 'Resistance becomes zero'], 1, 'Other parallel branches still have their own paths.'),
  makeQuestion('circuits', 'A circuit diagram symbol is used to represent a:', ['Component or connection', 'Sound wave only', 'Colour code only', 'Battery chemical'], 0, 'Circuit symbols represent components and electrical connections.')
];

const PASS_MARK = 10;
const PROGRESS_KEY = 'quizProgress';

let main;
let quizQ = [];
let qIndex = 0;
let answers = [];
let currentQuizName = '';

document.addEventListener('DOMContentLoaded', () => {
  main = document.getElementById('main-content');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      if (item.dataset.page === 'home') renderHome();
      if (item.dataset.page === 'quiz') renderQuiz();
      if (item.dataset.page === 'papers') renderPapers();
      if (item.dataset.page === 'progress') renderProgress();
    });
  });

  renderHome();
});

function renderHome() {
  main.innerHTML =
    '<div class="hero"><h2>Master electronics</h2><p>Quizzes and notes for NCV L2</p>' +
    '<button class="btn-primary" onclick="renderQuiz()">Take Quiz</button></div>' +
    '<h3>Topics</h3><div id="tl"></div>';

  const list = document.getElementById('tl');

  TOPICS.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML =
      '<div class="badge">' + topic.icon + '</div>' +
      '<div class="name">' + topic.name + '</div>';
    card.onclick = () => showNotes(topic.id);
    list.appendChild(card);
  });
}

function showNotes(id) {
  const topic = TOPICS.find(item => item.id === id);
  let html = '<h3>' + topic.name + '</h3><div class="notes-box">';

  topic.sections.forEach(section => {
    html += '<h4>' + section.h + '</h4>';
    section.lines.forEach(line => {
      html += '<div>' + line + '</div>';
    });
  });

  html += '</div><br><button class="btn-primary" onclick="renderHome()">Back</button>';
  main.innerHTML = html;
}

function renderQuiz() {
  let html =
    '<h3>Choose a Quiz</h3>' +
    '<div class="topic-card" onclick="startQuiz(\'all\')">' +
    '<div class="badge">E</div><div class="name">All Topics Quiz</div></div>';

  TOPICS.forEach(topic => {
    html +=
      '<div class="topic-card" onclick="startQuiz(\'' + topic.id + '\')">' +
      '<div class="badge">' + topic.icon + '</div>' +
      '<div class="name">' + topic.name + ' Quiz (' +
      QUESTIONS.filter(q => q.topic === topic.id).length +
      ' questions)</div></div>';
  });

  main.innerHTML = html;
}

function startQuiz(id) {
  quizQ = id === 'all'
    ? QUESTIONS.slice()
    : QUESTIONS.filter(question => question.topic === id);

  currentQuizName = id === 'all'
    ? 'All Topics Quiz'
    : TOPICS.find(topic => topic.id === id).name;

  qIndex = 0;
  answers = [];
  showQuestion();
}

function quitQuiz() {
  quizQ = [];
  qIndex = 0;
  answers = [];
  currentQuizName = '';
  renderQuiz();
}

function showQuestion() {
  const question = quizQ[qIndex];

  main.innerHTML =
    '<p>Question ' + (qIndex + 1) + ' of ' + quizQ.length + '</p>' +
    '<div class="topic-card"><div class="name">' + question.q + '</div></div>' +
    '<div id="opts"></div><div id="feedback"></div><br>' +
    '<button class="btn-primary" onclick="quitQuiz()">Quit Quiz</button>';

  const options = document.getElementById('opts');

  question.options.forEach((option, index) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML =
      '<span class="letter">' + String.fromCharCode(65 + index) +
      '</span>' + option;
    div.onclick = () => answerQuestion(index);
    options.appendChild(div);
  });
}

function answerQuestion(selectedIndex) {
  const question = quizQ[qIndex];
  const correct = selectedIndex === question.correct;
  const options = document.querySelectorAll('.option');

  options.forEach((option, index) => {
    option.onclick = null;
    if (index === question.correct) option.classList.add('correct');
    if (index === selectedIndex && !correct) option.classList.add('wrong');
  });

  answers.push(correct);

  document.getElementById('feedback').innerHTML =
    '<div class="notes-box" style="margin-top:14px;">' +
    '<h4>' + (correct ? 'Correct!' : 'Incorrect') + '</h4>' +
    '<p><b>Correct answer:</b> ' + question.options[question.correct] + '</p>' +
    '<p><b>Explanation:</b> ' + question.explanation + '</p>' +
    '<br><button class="btn-primary" onclick="nextQuestion()">Next Question</button></div>';
}

function nextQuestion() {
  qIndex++;
  qIndex < quizQ.length ? showQuestion() : showResult();
}

function saveQuizResult(correctAnswers, totalQuestions, percentage) {
  const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]');

  progress.push({
    topic: currentQuizName,
    mark: correctAnswers,
    total: totalQuestions,
    percentage,
    passed: correctAnswers >= PASS_MARK,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function getProgress() {
  return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]');
}

function clearProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  renderProgress();
}

function showResult() {
  const correctAnswers = answers.filter(Boolean).length;
  const totalQuestions = quizQ.length;
  const percentage = Math.round(correctAnswers / totalQuestions * 100);

  saveQuizResult(correctAnswers, totalQuestions, percentage);

  main.innerHTML =
    '<div class="hero"><h2>Quiz Complete!</h2>' +
    '<p style="font-size:36px;color:#3b82f6;">' + correctAnswers + '/' + totalQuestions + '</p>' +
    '<p>' + percentage + '%</p>' +
    '<p><b>' + (correctAnswers >= PASS_MARK ? 'Passed' : 'Not passed') + '</b></p>' +
    '<p>Pass mark: ' + PASS_MARK + ' marks</p>' +
    '<button class="btn-primary" onclick="renderQuiz()">Retry</button><br><br>' +
    '<button class="btn-primary" onclick="renderProgress()">View Progress</button><br><br>' +
    '<button class="btn-primary" onclick="renderHome()">Home</button></div>';
}

function renderProgress() {
  const progress = getProgress();

  let html =
    '<h3>Progress</h3><div class="notes-box">' +
    '<p><b>Pass mark:</b> ' + PASS_MARK + ' marks</p>' +
    '<p>Your quiz marks are recorded automatically after completing a quiz.</p>';

  if (!progress.length) {
    html += '<br><p><i>No quiz attempts recorded yet.</i></p>';
  } else {
    html += '<br><h4>Quiz Results</h4>';

    progress.slice().reverse().forEach(result => {
      html +=
        '<div style="border-bottom:1px solid #334155;padding:12px 0;">' +
        '<b>' + result.topic + '</b><br>Mark: <b>' +
        result.mark + '/' + result.total + '</b><br>Percentage: ' +
        result.percentage + '%<br>Status: <b style="color:' +
        (result.passed ? '#4ade80' : '#f87171') + ';">' +
        (result.passed ? 'Passed' : 'Not passed') + '</b><br>' +
        '<small>' + result.date + '</small></div>';
    });

    html += '<br><button class="btn-primary" onclick="clearProgress()">Clear Progress</button>';
  }

  main.innerHTML = html + '</div>';
}

function renderGeneratedPaper(paper) {
  let html = '<h4>Practice Questions</h4>';

  paper.forEach((question, index) => {
    html += '<p><b>' + (index + 1) + '.</b> ' + question.q + '<br>';

    question.options.forEach((option, optionIndex) => {
      html += String.fromCharCode(65 + optionIndex) + '. ' + option + '<br>';
    });

    html += '</p>';
  });

  html += '<h4>Practice Memo</h4>';

  paper.forEach((question, index) => {
    html +=
      '<p><b>' + (index + 1) + '.</b> ' +
      String.fromCharCode(65 + question.correct) + ' - ' +
      question.options[question.correct] + '<br>' +
      question.explanation + '</p>';
  });

  return html;
}

function renderPapers() {
  const paper = QUESTIONS;

  let html =
    '<h3>Electronic L2 Past Questions</h3>' +
    '<div class="notes-box"><p><b>Practice Question Paper</b></p>';

  paper.forEach((question, index) => {
    html += '<p><b>' + (index + 1) + '.</b> ' + question.q + '</p>';

    question.options.forEach((option, optionIndex) => {
      html += '<p style="margin-left:16px;">' +
        String.fromCharCode(65 + optionIndex) + '. ' + option + '</p>';
    });

    if (index < paper.length - 1) {
      html += '<hr style="margin:16px 0;border-color:#334155;">';
    }
  });

  html += '</div><br><h3>Practice Memo</h3><div class="notes-box">';

  paper.forEach((question, index) => {
    html += '<p><b>' + (index + 1) + '.</b> ' +
      String.fromCharCode(65 + question.correct) + ' - ' +
      question.options[question.correct] + '<br><small>' +
      question.explanation + '</small></p>';

    if (index < paper.length - 1) {
      html += '<hr style="margin:16px 0;border-color:#334155;">';
    }
  });

  main.innerHTML = html + '</div>';
}