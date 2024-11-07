export const quizQuestions = [
  {
    id: 1,
    phase: "rapport",
    question: "Which of these do you relate to most right now?",
    options: [
      "Scrolling at 2AM feeling behind in life",
      "Constantly comparing myself to successful peers",
      "Feeling stuck while others move forward",
      "Lacking motivation despite watching inspiration"
    ],
    followUps: {
      0: "How often do you find yourself doing this?",
      1: "Who do you compare yourself to most?",
      2: "When did you start feeling this way?",
      3: "What areas of life feel most affected?"
    },
    weight: 1
  },
  // Add more questions...
];

export const resultProfiles = {
  passive: {
    scoreRange: [0, 20],
    title: "You're at a Critical Turning Point",
    description: "Your responses show you're aware of the time you're losing, but haven't found the right solution yet.",
    solution: "Mindset Shift Program",
    price: 97,
    features: [
      "Break the scroll addiction",
      "Daily focus routines",
      "Success mindset training"
    ]
  },
  // Add more profiles...
};
