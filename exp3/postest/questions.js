// creating an array and passing the number, questions, options, and answers

let questions = [
  {
  numb: 1,
  question: "DC Shunt Motor has a disadvantage __________",
  image: "",
  answer: "Not suitable for rapidly changing loads",
  options: [
    "Constant speed",
    "Less expensive",
    "Not suitable for rapidly changing loads",
    "Cannot be determined"
  ],
  reason:"In DC shunt motor, due to shunt characteristics speed variation depends not only upon the controlling resistance but on the load current also. This double dependence makes it impossible to keep the speed sensibly constant on rapidly changing load, which is in contrast with characteristic."
},
  {
  numb: 2,
  question: "For some percentage increase in the torque, which DC motor will have the least percentage increase of input current?",
  image: '',
  answer: "Series motor",
  options: [
    "Series motor",
    "Shunt motor",
    "Cumulative compound motor",
    "Separately exited motor"
  ],
  reason: "The mechanical torque T is directly proportional to the product of flux per pole φ and armature current. In case of DC series motor, up to saturation point flux is proportional to field current because Ia = If. Now if small percentage increase in armature current (before saturation) will occur the same percentage of torque will increase. Whereas in DC series motor the torque is proportional to square of the armature current (before saturation)."
},
  {
  numb: 3,
  question: "Which part will surely tell that given motor is DC motor and not an AC type?",
  image: '',
  answer: "Commutator",
  options: [
    "Winding",
    "Shaft",
    "Commutator",
    "Stator"
  ],
  reason: "All other parts except brushes and commutator are same in AC machine when outer looks are only taken in consideration. Commutator is used only in DC machine for providing mechanical rectification and not in AC machine.  "
},
  {
  numb: 4,
  question: "What will happen, with the increase in speed of a DC motor?",
  image: '',
  answer: "Back emf increase but line current falls.",
  options: [
    "Back emf increase but line current falls.",
    "Back emf falls and line current increase.",
    "Both back emf as well as line current increase.",
    "Both back emf as well as line current fall."
  ],
  reason: "In case of DC motor, the speed is proportional to the back emf (Ea ∝ N). So, with the increase in speed, the back emf also increases. Therefore, armature current is also decreased, in case of series motor, armature current is equal to the line or load current."
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