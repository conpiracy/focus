export const quizQuestions = [
  {
    id: 1,
    type: 'words',
    question: 'When you think about your current focus level, which word resonates most?',
    options: [
      'Scattered',
      'Overwhelmed',
      'Distracted',
      'Unfocused'
    ]
  },
  {
    id: 2,
    type: 'images',
    question: 'Visualize your typical workday. Which scene best describes it?',
    options: [
      'Constantly jumping between tabs and notifications',
      'Staring at the screen but mind wandering elsewhere',
      'Starting many things but finishing few',
      'Watching time slip away while feeling stuck'
    ]
  },
  {
    id: 3,
    type: 'feelings',
    question: 'How does your current productivity make you feel?',
    options: [
      'Frustrated that I\'m capable of more',
      'Anxious about falling behind',
      'Disappointed in my progress',
      'Worried about my future'
    ]
  }
];

export const resultProfiles = {
  scattered: {
    title: "The Scattered Mind Pattern",
    loss: "2.3 hours daily",
    potential: "47% of your capability",
    risk: "71% of opportunities"
  },
  overwhelmed: {
    title: "The Overwhelm Cycle",
    loss: "3.1 hours daily",
    potential: "39% of your capability",
    risk: "82% of opportunities"
  },
  stuck: {
    title: "The Progress Paralysis",
    loss: "2.7 hours daily",
    potential: "43% of your capability",
    risk: "76% of opportunities"
  }
};