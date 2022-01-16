// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "DC shunt generator has terminal voltage versus load current characteristic which is",
    answer: "Slightly drooping",
    options: [
      "Constant",
      "Slightly drooping",
      "Slightly rising",
      "Highly drooping"
    ],
    reason:"Slightly drooping"
  },
  {
    numb: 2,
    question: "Copper losses in armature of dc generator amount to which of the following percentage of full load losses ?",
    answer: "30 to 40%",
    options: [
      "5 to 10%",
      "10 to 20%",
      "20 to 30%",
      "30 to 40%"
    ],
    reason:"30 to 40%"
  },
  {
    numb: 3,
    question: "In a DC shunt motor for zero armature current we get speed ______",
    answer: "Non-zero and maximum",
    options: [
      "Non-zero and minimum",
    "Zero",
    "Non-zero and maximum",
    "Doesn’t depend on armature current"
    ],
    reason:" For zero armature current we get some non-zero value, indicated by positive intercept on speed characteristics. As armature current is increased speed of DC shunt motor starts decreasing due to increase in voltage drop at armature resistance."
  },
  {
    numb: 4,
    question: "How speed of the DC shunt motor can be increased?",
    answer: "Increasing the field current",
    options: [
      "Decreasing the field current",
      "Increasing the field current",
      "Decreasing the load current",
      "Increasing the armature current"
    ],
    reason:"For a constant load, load current will remain constant. Decreasing armature current will help in increasing speed for DC shunt motor. Since load current is addition of armature current and field current we’ll get less armature current for more field current."
  },
  {
    numb: 5,
    question: "In which of the following motor, ratio of starting torque to full-load torque will be least?",
    answer: "DC shunt motors",
    options: [
      "DC series motors",
      "DC shunt motors",
      "DC compound motors",
      "Synchronous motors"
    ],
    reason:"From torque current characteristic, we get that torque at no load or starting torque is equal to zero. As load increases, speed decreases and armature current increases so as torque also increases linearly, if effect of armature reaction is neglected."
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
