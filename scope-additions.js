const ADDITIONAL_SCOPE_TOPIC = {
  id: 'additional-scope',
  name: 'Additional Theory and Exam Skills',
  icon: '+',
  sections: [
    {
      h: 'Magnetism and Electromagnetism',
      lines: [
        'A magnetic field surrounds a magnet or a conductor carrying current.',
        'An electromagnet is produced when current flows through a coil.',
        'Increasing current, coil turns or using an iron core strengthens an electromagnet.',
        'Electromagnetic induction produces a voltage when magnetic flux changes.',
        'Motors convert electrical energy into mechanical energy.'
      ]
    },
    {
      h: 'Inductors and Transformers',
      lines: [
        'An inductor stores energy in a magnetic field.',
        'Inductance is measured in henries (H).',
        'Inductors oppose changes in current.',
        'A transformer transfers AC energy between coils using electromagnetic induction.',
        'A step-up transformer increases voltage and a step-down transformer decreases voltage.',
        'Transformers require changing current and do not operate normally from steady DC.'
      ]
    },
    {
      h: 'Additional Components',
      lines: [
        'A Zener diode is designed to operate in reverse breakdown to regulate voltage.',
        'A thermocouple produces a small voltage related to temperature difference.',
        'Thermistors change resistance with temperature.',
        'Integrated circuits contain many electronic components in one package.',
        'A relay uses an electrically operated coil to switch contacts.'
      ]
    },
    {
      h: 'Test Instrument Extensions',
      lines: [
        'Continuity testing checks whether a low-resistance conducting path exists.',
        'An oscilloscope displays voltage against time and can show waveform, frequency and amplitude.',
        'A current clamp measures current without disconnecting the conductor.',
        'A voltage tester checks for the presence of voltage.',
        'Use the correct function, range, terminals and test leads for every measurement.',
        'Instruments must be calibrated, maintained, stored safely and protected from moisture.'
      ]
    },
    {
      h: 'Safety Extensions',
      lines: [
        'Lockout/tagout prevents equipment from being energised while work is in progress.',
        'Identify, isolate, lock and test the supply before working on equipment.',
        'Electrical fires require the supply to be isolated where possible.',
        'Do not use water on an energised electrical fire.',
        'Use a suitable fire extinguisher and follow workplace emergency procedures.',
        'Wear suitable PPE and never work on energised equipment without authorisation.'
      ]
    },
    {
      h: 'Exam Preparation',
      lines: [
        'Prepare for multiple-choice, short-answer, calculation and diagram questions.',
        'Show all calculation working and include the correct units.',
        'Practise Ohm’s Law, power, energy, series and parallel calculations.',
        'Learn component functions, circuit symbols and resistor colour codes.',
        'Practise identifying logic gates from symbols and truth tables.',
        'Be able to explain safety procedures, diode operation and instrument connections.'
      ]
    }
  ]
};

const SOLDERING_TOPIC = {
  id: 'soldering',
  name: 'Soldering',
  icon: 'S',
  sections: [
    {
      h: 'Tools and Materials',
      lines: [
        'Common tools include a soldering iron, iron stand, sponge or brass-wool cleaner and side cutters.',
        'Solder joins components to conductors using heat and a fusible alloy.',
        'Flux removes oxides and helps solder flow onto clean surfaces.',
        'Use the correct solder and flux for the electronic work.'
      ]
    },
    {
      h: 'Soldering Techniques',
      lines: [
        'Tin the soldering iron tip before making a joint.',
        'Tin wires and component leads before joining them.',
        'Heat the pad and lead together, then apply solder to the joint.',
        'Use through-hole techniques for component leads passing through PCB holes.',
        'Surface-mount components require controlled heat and small amounts of solder.',
        'Secure components before soldering and avoid overheating them.'
      ]
    },
    {
      h: 'Desoldering',
      lines: [
        'Solder wick absorbs molten solder from a joint.',
        'A solder sucker removes molten solder using suction.',
        'Avoid lifting PCB tracks when removing components.',
        'Allow the joint to cool before handling the component.'
      ]
    },
    {
      h: 'Safety and Joint Inspection',
      lines: [
        'Place the soldering iron in its stand when it is not being used.',
        'Work in a well-ventilated area and avoid inhaling solder fumes.',
        'Wear suitable eye protection and avoid burns from hot tools.',
        'A good joint is clean, shiny, mechanically secure and properly wetted.',
        'A cold joint is dull or cracked and may cause an intermittent connection.',
        'A solder bridge incorrectly joins two nearby conductors and can cause a short circuit.'
      ]
    }
  ]
};

const BASIC_CIRCUITS_TOPIC = {
  id: 'basic-circuits',
  name: 'Basic Electronic Circuits',
  icon: 'B',
  sections: [
    {
      h: 'Circuit Connections',
      lines: [
        'In a series circuit, current is the same and voltage is divided.',
        'In a parallel circuit, voltage is the same across branches and current divides.',
        'Series-parallel circuits combine both types of connection.',
        'Calculate equivalent resistance before calculating circuit current or voltage.'
      ]
    },
    {
      h: 'Breadboards and Construction',
      lines: [
        'Breadboards allow circuits to be built without permanent soldering.',
        'The connected holes in each breadboard row form electrical nodes.',
        'Power rails must be connected with the correct polarity.',
        'Check the circuit against the schematic before applying power.'
      ]
    },
    {
      h: 'Input and Output Transducers',
      lines: [
        'Input transducers convert physical quantities into electrical signals.',
        'Examples include thermistors, LDRs, photodiodes and thermocouples.',
        'Output transducers convert electrical signals into another form of energy.',
        'Examples include LEDs, buzzers, motors and relays.'
      ]
    },
    {
      h: 'PLC Basics',
      lines: [
        'A PLC is a programmable logic controller used to control industrial processes.',
        'Main PLC parts include the CPU, power supply, input modules and output modules.',
        'Discrete inputs include switches and sensors with ON or OFF states.',
        'Discrete outputs control devices such as lamps, relays, solenoids and motors.',
        'A PLC scans inputs, executes its program and updates outputs.'
      ]
    },
    {
      h: 'Troubleshooting',
      lines: [
        'Switch off power before changing circuit connections.',
        'Check the supply, polarity, wiring, component values and connections.',
        'Look for open circuits, short circuits, loose wires and damaged components.',
        'Use a multimeter to test voltage, continuity and resistance systematically.'
      ]
    }
  ]
};

const DIGITAL_LOGIC_TOPIC = {
  id: 'digital-logic',
  name: 'Principles of Digital Logic',
  icon: 'D',
  sections: [
    {
      h: 'Analog and Digital Signals',
      lines: [
        'An analog signal changes continuously over a range of values.',
        'A digital signal uses discrete levels, commonly 0 and 1.',
        'Digital systems process information using binary values.'
      ]
    },
    {
      h: 'Binary Number System',
      lines: [
        'Binary uses only the digits 0 and 1.',
        'Binary place values are powers of two: 1, 2, 4, 8, 16 and so on.',
        'Convert decimal to binary by selecting the required powers of two.',
        'Convert binary to decimal by adding the place values represented by 1s.'
      ]
    },
    {
      h: 'Logic Gates',
      lines: [
        'An AND gate outputs 1 only when all inputs are 1.',
        'An OR gate outputs 1 when at least one input is 1.',
        'A NOT gate inverts its input.',
        'A NAND gate is an AND gate followed by NOT.',
        'A NOR gate is an OR gate followed by NOT.',
        'An XOR gate outputs 1 when the inputs are different.'
      ]
    },
    {
      h: 'Truth Tables and Boolean Logic',
      lines: [
        'A truth table lists every possible input combination and its output.',
        'Boolean variables are commonly represented by letters such as A and B.',
        'The AND operation is represented by multiplication or a dot.',
        'The OR operation is represented by addition.',
        'A bar or NOT symbol indicates inversion.',
        'Combinational circuits produce outputs based on present input states.'
      ]
    },
    {
      h: 'Digital Systems and PLCs',
      lines: [
        'A computer system includes a CPU, memory and input/output devices.',
        'The CPU processes instructions and data.',
        'Memory stores programs and information.',
        'Digital PLC logic uses input states, Boolean operations and output states.',
        'Logic circuits can be combined to perform control and decision-making functions.'
      ]
    }
  ]
};

TOPICS.push(
  ADDITIONAL_SCOPE_TOPIC,
  SOLDERING_TOPIC,
  BASIC_CIRCUITS_TOPIC,
  DIGITAL_LOGIC_TOPIC
);

QUESTIONS.push(
  makeQuestion(
    'additional-scope',
    'A transformer normally requires:',
    ['Steady DC only', 'Changing current such as AC', 'No magnetic field', 'A disconnected primary coil'],
    1,
    'Transformers use changing magnetic flux and therefore operate normally with AC.'
  ),
  makeQuestion(
    'additional-scope',
    'A Zener diode is commonly used for:',
    ['Voltage regulation', 'Storing mechanical energy', 'Measuring resistance only', 'Producing sound'],
    0,
    'A Zener diode can regulate voltage when operated in reverse breakdown.'
  ),
  makeQuestion(
    'additional-scope',
    'A continuity test checks for:',
    ['A conducting path', 'Temperature only', 'Frequency only', 'Capacitance only'],
    0,
    'Continuity testing checks whether a low-resistance electrical path exists.'
  ),
  makeQuestion(
    'additional-scope',
    'Lockout/tagout is used to:',
    ['Prevent unexpected energisation', 'Increase circuit voltage', 'Improve solder flow', 'Measure current'],
    0,
    'Lockout/tagout isolates equipment while work is being performed.'
  ),
  makeQuestion(
    'soldering',
    'The purpose of flux is to:',
    ['Remove oxides and improve solder flow', 'Increase circuit voltage', 'Cool the soldering iron', 'Replace the PCB'],
    0,
    'Flux cleans oxide from surfaces and helps solder form a good joint.'
  ),
  makeQuestion(
    'soldering',
    'A cold solder joint is usually:',
    ['Dull or cracked', 'Bright and properly wetted', 'A correct short circuit', 'A type of fuse'],
    0,
    'Cold joints are commonly dull, cracked or mechanically weak.'
  ),
  makeQuestion(
    'soldering',
    'A solder bridge can cause:',
    ['A short circuit', 'Better insulation', 'Lower temperature only', 'Correct earthing automatically'],
    0,
    'A solder bridge incorrectly connects adjacent conductors.'
  ),
  makeQuestion(
    'basic-circuits',
    'An LDR changes its resistance according to:',
    ['Light level', 'Fuse size', 'Wire colour only', 'Battery weight'],
    0,
    'A light-dependent resistor responds to changes in light.'
  ),
  makeQuestion(
    'basic-circuits',
    'A PLC output can control a:',
    ['Motor or relay', 'Neutron', 'Resistor colour band only', 'Circuit diagram'],
    0,
    'PLC outputs can operate devices such as motors, relays, lamps and solenoids.'
  ),
  makeQuestion(
    'basic-circuits',
    'Before powering a breadboard circuit, you should:',
    ['Check wiring and polarity', 'Short the supply rails', 'Remove all connections', 'Connect the meter in current mode across the supply'],
    0,
    'Checking wiring and polarity helps prevent component damage and short circuits.'
  ),
  makeQuestion(
    'digital-logic',
    'An AND gate outputs 1 when:',
    ['All inputs are 1', 'Any input is 1', 'All inputs are 0', 'Inputs are different'],
    0,
    'An AND gate requires every input to be high.'
  ),
  makeQuestion(
    'digital-logic',
    'An XOR gate outputs 1 when:',
    ['Inputs are different', 'All inputs are 1', 'All inputs are 0', 'There is no input'],
    0,
    'XOR produces a high output when its inputs are different.'
  ),
  makeQuestion(
    'digital-logic',
    'The binary number system uses:',
    ['0 and 1', '1 and 2', '0 to 9 only', 'A to F only'],
    0,
    'Binary is a base-two number system using only 0 and 1.'
  ),
  makeQuestion(
    'digital-logic',
    'A NOT gate:',
    ['Inverts its input', 'Adds two inputs', 'Stores electrical charge', 'Measures current'],
    0,
    'A NOT gate changes 0 to 1 and 1 to 0.'
  )
);