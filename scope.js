const OFFICIAL_SCOPE_TOPIC = {
  id: 'official-scope',
  name: 'Official Exam Scope',
  icon: 'S',
  sections: [
    {
      h: 'Topic 1: Fundamentals of Electricity',
      lines: [
        '<b>Atomic structure:</b> Protons are positive, neutrons have no charge, and electrons are negative.',
        'Electron movement creates electric current.',
        'Valence electrons are found in the outer shell of an atom.',
        'Free electrons can move through a conductor.',
        'Conductors allow electron flow; insulators resist electron flow; semiconductors have controlled conductivity.',
        'Series and parallel circuits must be understood.',
        'Voltage, current and resistance are related by Ohm’s Law: V = I × R.',
        'Power formulas: P = V × I, P = I² × R, and P = V² ÷ R.',
        'Energy formula: E = P × t.',
        'Know the SI units: ampere, volt, ohm, watt, coulomb and farad.',
        'Know the symbols for resistors, capacitors, diodes, batteries and switches.',
        'Practise converting units such as mA to A, kΩ to Ω and kW to W.'
      ]
    },
    {
      h: 'Topic 2: Basic Electronic Theory and Concepts',
      lines: [
        'Resistors limit current and are identified using colour codes.',
        'Capacitors store electrical charge. The formula is Q = C × V.',
        'Know capacitor types, including ceramic and electrolytic capacitors.',
        'A diode is a P-N junction that mainly conducts in one direction.',
        'Forward bias allows diode conduction; reverse bias normally prevents conduction.',
        'A transistor has Base, Collector and Emitter terminals.',
        'Transistors are used for switching and amplification.',
        'LEDs are Light Emitting Diodes that produce light when forward biased.',
        'Integrated circuits contain many electronic components in one package.',
        'Transducers convert one form of energy into another.',
        'Examples include photovoltaic cells, thermistors and LDRs.'
      ]
    },
    {
      h: 'Semiconductor Theory',
      lines: [
        'Silicon and germanium are common semiconductor materials.',
        'Doping adds impurities to change the conductivity of a semiconductor.',
        'N-type material has additional free electrons.',
        'P-type material has holes that act as positive charge carriers.',
        'A P-N junction forms a depletion layer.',
        'The depletion layer creates a barrier to the movement of charge carriers.',
        'The operation of diodes and transistors is based on semiconductor behaviour.'
      ]
    },
    {
      h: 'Topic 3: Electrical Safety Standards',
      lines: [
        'Earthing provides a low-resistance path for fault current and helps prevent electric shock.',
        'A fuse melts and opens the circuit when excessive current flows.',
        'Fuse ratings must be selected correctly for the circuit.',
        'Circuit breakers trip during overloads or short circuits and can normally be reset.',
        'Overload protection prevents excessive current caused by too many loads.',
        'Short-circuit protection prevents dangerous current through an unintended low-resistance path.',
        'Follow safe working practices when handling electrical equipment.',
        'Know the basics of the Occupational Health and Safety Act.',
        'Follow South African electrical safety regulations.',
        'Use tools and equipment correctly and wear suitable PPE.',
        'For electric shock, isolate the supply first, do not touch the victim while live, call for help and provide first aid when safe.'
      ]
    },
    {
      h: 'Topic 4: Hand-Held Electrical Test Instruments',
      lines: [
        'A multimeter can measure voltage, current and resistance.',
        'An ammeter is connected in series and measures current.',
        'A voltmeter is connected in parallel and measures voltage.',
        'An ohmmeter measures resistance with the circuit switched off.',
        'Select the correct function, range, terminals and connection before measuring.',
        'Store instruments in a dry, protected place.',
        'Instruments should be calibrated and maintained regularly.',
        'Check instrument accuracy before relying on a measurement.',
        'Inspect test leads for damage.',
        'Handle and transport instruments carefully.'
      ]
    },
    {
      h: 'Frequently Tested Exam Areas',
      lines: [
        'Ohm’s Law calculations',
        'Series and parallel resistance calculations',
        'Component identification and functions',
        'Circuit symbols',
        'Diode forward and reverse bias',
        'Transistor terminals and functions',
        'Earthing, fuses and circuit breakers',
        'Ammeter and voltmeter connections',
        'Doping and P-N junctions',
        'Atomic structure and electron theory'
      ]
    },
    {
      h: 'Exam Question Types',
      lines: [
        'Multiple-choice questions',
        'Short-answer definitions',
        'Calculations showing all working and units',
        'Circuit diagrams with labelled components',
        'Explain or describe questions',
        'Tables involving units, symbols and values'
      ]
    },
    {
      h: 'Final Revision Checklist',
      lines: [
        'Ohm’s Law in all three forms: V = IR, I = V ÷ R and R = V ÷ I',
        'Series and parallel circuit rules',
        'Component functions and circuit symbols',
        'Diode and transistor basics',
        'Earthing, fuses and circuit breakers',
        'Ammeter in series and voltmeter in parallel'
      ]
    }
  ]
};

const SAFETY_TOPIC = {
  id: 'safety',
  name: 'Electrical Safety',
  icon: '!',
  sections: [
    {
      h: 'Protection Devices',
      lines: [
        'Earthing directs dangerous fault current safely to ground.',
        'A fuse must be replaced with the correct rating.',
        'A circuit breaker trips and disconnects the supply during a fault.',
        'Never bypass a fuse or circuit breaker.',
        'Switch off and isolate equipment before working on it.'
      ]
    },
    {
      h: 'Safe Working Practices',
      lines: [
        'Keep hands and work areas dry.',
        'Inspect leads, plugs and tools before use.',
        'Use insulated tools and suitable PPE.',
        'Do not work on energised circuits unless authorised and properly protected.',
        'Keep tools organised and report damaged equipment.',
        'In an electric shock emergency, disconnect the supply before assisting the victim.'
      ]
    }
  ]
};

const INSTRUMENTS_TOPIC = {
  id: 'instruments',
  name: 'Test Instruments',
  icon: 'M',
  sections: [
    {
      h: 'Instrument Connections',
      lines: [
        'A voltmeter is connected in parallel across the component.',
        'An ammeter is connected in series with the circuit.',
        'An ohmmeter is connected to an isolated, unpowered component.',
        'A multimeter combines voltage, current and resistance functions.'
      ]
    },
    {
      h: 'Care and Accuracy',
      lines: [
        'Select the correct range and measurement function.',
        'Use the correct input terminals.',
        'Start with a high range when the value is unknown.',
        'Check test leads and fuses inside the meter.',
        'Store the instrument safely and keep it dry.',
        'Calibration and regular maintenance help ensure accurate readings.'
      ]
    }
  ]
};

TOPICS.push(OFFICIAL_SCOPE_TOPIC, SAFETY_TOPIC, INSTRUMENTS_TOPIC);

QUESTIONS.push(
  makeQuestion(
    'official-scope',
    'A proton has which charge?',
    ['Negative', 'Positive', 'No charge', 'Variable'],
    1,
    'Protons have a positive electrical charge.'
  ),
  makeQuestion(
    'official-scope',
    'Which particles normally move through a conductor to produce current?',
    ['Neutrons', 'Protons', 'Free electrons', 'Nuclei'],
    2,
    'Electric current in metallic conductors is caused by moving free electrons.'
  ),
  makeQuestion(
    'official-scope',
    'Valence electrons are found in the:',
    ['Nucleus', 'Outer electron shell', 'Depletion layer only', 'Battery terminal'],
    1,
    'Valence electrons occupy the outer shell of an atom.'
  ),
  makeQuestion(
    'official-scope',
    'An N-type semiconductor has mainly additional:',
    ['Protons', 'Free electrons', 'Neutrons', 'Positive terminals'],
    1,
    'Doping creates N-type material with extra free electrons.'
  ),
  makeQuestion(
    'official-scope',
    'A P-type semiconductor has mainly:',
    ['Holes', 'Free neutrons', 'Extra protons in the nucleus', 'Insulating oil'],
    0,
    'P-type material contains holes that act as positive charge carriers.'
  ),
  makeQuestion(
    'official-scope',
    'The depletion layer is formed at a:',
    ['Resistor body', 'P-N junction', 'Battery case', 'Switch handle'],
    1,
    'A depletion layer forms where P-type and N-type materials meet.'
  ),
  makeQuestion(
    'official-scope',
    'Which formula calculates electrical energy?',
    ['E = P × t', 'E = V ÷ R', 'E = I ÷ t', 'E = Q ÷ R'],
    0,
    'Electrical energy equals power multiplied by time.'
  ),
  makeQuestion(
    'official-scope',
    'One milliampere is equal to:',
    ['0.001 A', '0.01 A', '10 A', '1 000 A'],
    0,
    'The prefix milli means one-thousandth.'
  ),
  makeQuestion(
    'official-scope',
    'A photovoltaic cell converts:',
    ['Light into electrical energy', 'Heat into resistance', 'Current into sound only', 'Voltage into mass'],
    0,
    'A photovoltaic cell converts light energy into electrical energy.'
  ),
  makeQuestion(
    'official-scope',
    'An LDR changes its resistance according to:',
    ['Light level', 'Fuse rating', 'Wire length only', 'Battery mass'],
    0,
    'A light-dependent resistor changes resistance when the light level changes.'
  ),
  makeQuestion(
    'safety',
    'The main purpose of earthing is to:',
    ['Increase normal current', 'Provide a safe path for fault current', 'Store electrical charge', 'Increase resistance in every circuit'],
    1,
    'Earthing provides a low-resistance path for dangerous fault current.'
  ),
  makeQuestion(
    'safety',
    'A fuse operates by:',
    ['Increasing voltage', 'Melting when excessive current flows', 'Storing current', 'Measuring resistance'],
    1,
    'The fuse element melts and opens the circuit when current is too high.'
  ),
  makeQuestion(
    'safety',
    'A circuit breaker normally trips during:',
    ['An overload or short circuit', 'Normal operation only', 'Low light', 'Correct meter readings'],
    0,
    'Circuit breakers disconnect the circuit during overloads and short circuits.'
  ),
  makeQuestion(
    'safety',
    'Before helping a person receiving an electric shock, you should first:',
    ['Touch the person immediately', 'Disconnect or isolate the electrical supply', 'Pour water on the person', 'Increase the supply voltage'],
    1,
    'The supply must be isolated before touching the victim.'
  ),
  makeQuestion(
    'instruments',
    'A voltmeter is connected:',
    ['In series', 'In parallel', 'Instead of a fuse', 'Across an open switch only'],
    1,
    'A voltmeter measures potential difference across a component.'
  ),
  makeQuestion(
    'instruments',
    'An ammeter is connected:',
    ['In parallel', 'In series', 'Across the battery without a load', 'To earth only'],
    1,
    'An ammeter must be connected in series so circuit current flows through it.'
  ),
  makeQuestion(
    'instruments',
    'Resistance should be measured with the circuit:',
    ['Powered on', 'Switched off and isolated', 'Connected directly to mains', 'Short-circuited'],
    1,
    'An ohmmeter must not be connected to a powered circuit.'
  ),
  makeQuestion(
    'instruments',
    'When the value being measured is unknown, the safest starting range is usually:',
    ['The lowest range', 'A higher range', 'The current range only', 'The continuity buzzer only'],
    1,
    'Starting on a higher range helps protect the instrument from excessive input.'
  )
);