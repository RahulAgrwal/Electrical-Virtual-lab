// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "Relation between currents according to KCL is:",
  image: '<img src="https://www.sanfoundry.com/wp-content/uploads/2017/06/electric-circuits-questions-answers-kirchhoffs-laws-q2.png"/>',
  answer: "i1+i5=i2+i3+i4",
  options: [
    "i1=i2=i3=i4=i5",
    "i1+i4+i3=i5+i2",
    "i1-i5=i2-i3-i4",
    "i1+i5=i2+i3+i4"
  ],
  reason:"According to KCL, entering currents=leaving currents."
},
  {
  numb: 2,
  question: "Find R-value from the below circuit",
  image: '<img src="https://www.sanfoundry.com/wp-content/uploads/2017/06/electric-circuits-questions-answers-kirchhoffs-laws-q5.png"/>',
  answer: "17.5 ohms",
  options: [
    "17.5 ohms",
    "17.2 ohms",
    "17.4 ohms",
    "17.8 ohms"
  ],
  reason: "KVL: 70 – 5I – 7(I – 2) = 0<br>    I = 7A<br>    KVL to 2nd loop: 7(I – 2) – 2R = 0<br>    R=17.5Ω"
},
  {
  numb: 3,
  question: "The algebraic sum of voltages around any closed path in a network is equal to ____________",
  image: "",
  answer: "Zero",
  options: [
    "Infinity",
    "One",
    "Zero",
    "Negative Polarity"
  ],
  reason: "KVL"
},
  {
  numb: 4,
  question: "Determine currents I1 , I2 and I3.",
  image: '<img src="https://www.sanfoundry.com/wp-content/uploads/2017/06/electric-circuits-questions-answers-kirchhoffs-laws-q6.png"/>',
  answer: "3.3A, 8.5A, -2.4A",
  options: [
    "-3.3A, -8.5A, 2.4A",
    "3A, -8A, 2A",
    "3.3A, 8.5A, -2.4A",
    "3.2A, 8.6A, 2.3A"
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