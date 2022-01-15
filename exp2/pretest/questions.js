// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Consider the following statements:<p >i. Power factor will be unity.<br>ii. Current in circuit will be maximum.<br>iii. Current in circuit will be minimum.<br>Which of these statements are correct with respect to resonance in R-L-C parallel circuit?</p>",
    answer: "i and iii only",
    options: [
      "i, ii and iii",
      "i and ii only",
      "ii and iii only",
      "i and iii only"
    ],
    reason:"i. Power Factor will be unity.<br>iii. Current in circuit will be minimum."
  },
  {
    numb: 2,
    question: "AC measuring instrument measures",
    answer: "rms value",
    options: [
      "rms value",
      "average value",
      "peak value",
      "none"
    ]
  },
  {
    numb: 3,
    question: "Alternating voltage",
    answer: "varies sinusoidally",
    options: [
      "is independent of time	",
    "varies sinusoidally",
    "varies inversely with time	",
    "varies directly with time"
    ]
  },
  {
    numb: 4,
    question: "The Q-factor of the resistance coil is _________________",
    answer: "Infinitely High",
    options: [
      "Zero",
      "Low",
      "High",
      "Infinitely High"
    ]
  },
  {
    numb: 5,
    question: "What will happen if parallel RL connected to a DC power source?",
    answer: "Maximum current will flow through circuit.",
    options: [
      "No current will flow through circuit",
      "Minimum current will flow through circuit.",
      "Resistor will damage.",
      "Maximum current will flow through circuit."
    ]
  },
  {
    numb: 6,
    question: "Without tuning circuit no _______________ would be possible",
    answer: "Communication",
    options: [
      "Oscillation",
      "Filtering",
      "Communication",
      "Amplification"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];