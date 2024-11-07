import React, { useState } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  margin: 1rem 0;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: #4CAF50;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const Button = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1976D2;
  }
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Option = styled.div`
  padding: 1rem;
  border: 2px solid ${props => props.selected ? '#2196F3' : '#eee'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const quizQuestions = [
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
  },
  {
    id: 4,
    type: 'logic',
    question: 'What is the main reason for your focus challenges?',
    options: [
      'My environment makes it impossible to focus',
      'I never learned proper focus techniques',
      'Modern technology is designed to distract',
      'I lack a proper system or structure'
    ]
  },
  {
    id: 5,
    type: 'symbols',
    question: 'What does improving your focus represent to you?',
    options: [
      'Freedom from constant distraction',
      'Finally achieving my true potential',
      'Taking control of my future',
      'Becoming who I am meant to be'
    ]
  },
  {
    id: 6,
    type: 'experience',
    question: 'If you do not improve your focus in the next 6 months, what is at risk?',
    options: [
      'Missing crucial career opportunities',
      'Watching others succeed while I stay stuck',
      'Continuing to waste my potential',
      'Falling further behind in life'
    ]
  }
];

const FocusQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const newAnswers = {
      ...answers,
      [currentQuestion]: selectedOption
    };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (answers) => {
    // The scoring is less about numbers and more about creating a compelling narrative
    const severity = Object.values(answers).reduce((acc, val) => acc + val, 0);
    
    // Create different result profiles based on answer patterns
    const profiles = {
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

    // Select profile based on severity
    const profile = severity > 15 ? profiles.overwhelmed : 
                   severity > 10 ? profiles.stuck : 
                   profiles.scattered;

    return {
      profile,
      severity,
      total: Math.max(100 - (severity * 5), 31) // Ensures score isn't too low
    };
  };

  const renderResults = () => {
    const result = calculateScore(answers);
    
    return (
      <div style={{ textAlign: 'left' }}>
        <h2>{result.profile.title}</h2>
        <h3>Your Current Focus Score: {result.total}/100</h3>
        
        <div style={{ margin: '2rem 0' }}>
          <h4>Your Focus Score reveals:</h4>
          <ul>
            <li>You're losing {result.profile.loss} to scattered attention</li>
            <li>You're operating at {result.profile.potential}</li>
            <li>You're missing {result.profile.risk}</li>
          </ul>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h4>If nothing changes:</h4>
          <ul>
            <li>Your productivity will continue to decline</li>
            <li>Your potential will remain locked</li>
            <li>Your progress will stay limited</li>
          </ul>
        </div>

        <Button 
          onClick={() => window.location.href = '/focus-reset-plan'}
          style={{ marginTop: '2rem' }}
        >
          Get Your Personalized Focus Reset Plan →
        </Button>
      </div>
    );
  };

  const renderQuestion = () => {
    const question = quizQuestions[currentQuestion];
    console.log('Current question:', question); // Add this to debug
    
    return (
      <>
        <QuestionText>{question.question}</QuestionText>
        <OptionsContainer>
          {question.options && question.options.map((option, index) => (
            <Option
              key={index}
              selected={selectedOption === index}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
        <Button 
          onClick={handleNextQuestion}
          style={{ marginTop: '2rem' }}
          disabled={selectedOption === null}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Continue →'}
        </Button>
      </>
    );
  };
  return (
    <QuizContainer>
      {!showResults && (
        <>
          <ProgressBar>
            <Progress progress={(currentQuestion / quizQuestions.length) * 100} />
          </ProgressBar>
          <p>Question {currentQuestion + 1} of {quizQuestions.length}</p>
        </>
      )}
      {showResults ? renderResults() : renderQuestion()}
    </QuizContainer>
  );
};

export default FocusQuiz;
