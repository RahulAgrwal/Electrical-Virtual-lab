// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "What is the phase angle between the capacitor current and the applied voltage in a parallel RC circuit?",
  image: "",
  answer: "90 degree",
  options: [
    "90 degree",
    "0 degree",
    "45 degree",
    "180degree"
  ],
  reason:'<p><img src="/q1i.png" style="width: 181px; height: 140px;"></p>  <p>The phasor diagram is drawn as:</p> <p><img src="/q1ii.png" style="width: 170px; height: 174px;"></p> <p><span style="color: rgb(32, 33, 36);  ">1) There is no&nbsp;</span><b style="color: rgb(32, 33, 36);  ">phase</b><span style="color: rgb(32, 33, 36);  ">&nbsp;difference&nbsp;</span><b style="color: rgb(32, 33, 36);  ">between</b><span style="color: rgb(32, 33, 36);  ">&nbsp;the&nbsp;</span><b style="color: rgb(32, 33, 36);  ">applied voltage</b><span style="color: rgb(32, 33, 36);  ">&nbsp;and the&nbsp;</span><b style="color: rgb(32, 33, 36);  ">voltage</b><span style="color: rgb(32, 33, 36);  ">&nbsp;across R and C in&nbsp;</span><b style="color: rgb(32, 33, 36);  ">parallel</b><span style="color: rgb(32, 33, 36);  ">. </span></p><p><span style="color: rgb(32, 33, 36);  ">2) The&nbsp;</span><b style="color: rgb(32, 33, 36);  ">current</b><span style="color: rgb(32, 33, 36);  ">&nbsp;through the resistive branch is in&nbsp;</span><b style="color: rgb(32, 33, 36);  ">phase</b><span style="color: rgb(32, 33, 36);  ">&nbsp;with the&nbsp;</span><b style="color: rgb(32, 33, 36);  ">applied</b><span style="color: rgb(32, 33, 36);  ">&nbsp;signal. </span></p><p><span style="color: rgb(32, 33, 36);  ">3) But the&nbsp;</span><b style="color: rgb(32, 33, 36);  ">current</b><span style="color: rgb(32, 33, 36);  ">&nbsp;through the capacitive branch leads its&nbsp;</span><b style="color: rgb(32, 33, 36);  ">voltage</b><span style="color: rgb(32, 33, 36);  ">&nbsp;V<sub>c</sub> by 90 degrees.</span></p>'
},
  {
  numb: 2,
  question: "As frequency increases",
  image: '',
  answer: "both series and parallel RC impedance decrease",
  options: [
    "both series and parallel RC impedance decrease",
    "series RC impedance decreases and parallel RC impedance increases",
    "series RC impedance increases and parallel RC impedance decreases",
    "both series and parallel RC impedance increase"
  ],
  reason: ""
},
  {
  numb: 3,
  question: "Calculate the magnitude of the <b>impedance</b> in the given circuit.",
  image: '<img src="https://www.indiabix.com/_files/images/basic-electronics/basics/mcq10_1003_1.gif"/>',
  answer: "26.1 M ohms",
  options: [
    "24.1 M ohms",
    "10 M ohms",
    "26.1 M ohms",
    "0 ohms"
  ],
  reason: ""
},
  {
  numb: 4,
  question: "	What is the phase angle for a parallel circuit consisting of a 500 kHz, 5 Vac source with a 47 pF capacitor, and a 4.7 ohms resistor in parallel?",
  image: '',
  answer: "3.3A, 8.5A, -2.4A",
  options: [
    "55.3 <sup>o</sup?",
    "-55.3 <sup>o</sup?",
    "34.8 <sup>o</sup?",
    "-34.8 <sup>o</sup?"
  ],
  reason: ""
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