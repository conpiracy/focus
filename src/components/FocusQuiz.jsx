import React, { useState, useCallback } from 'react';
import {
  ResponsiveQuizContainer,
  ProgressBar,
  Progress,
  Button,
  QuestionText,
  OptionsContainer,
  Option,
  FollowUpContainer,
  QuestionCounter,
  FollowUpInput
} from './styles/QuizStyles';

const quizData = {
  questions: [
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
    {
      id: 2,
      phase: "problem",
      question: "What's holding you back the most right now?",
      options: [
        "Can't stop scrolling social media",
        "Not making enough money",
        "Unhappy with my physical appearance",
        "Struggling with relationships/dating"
      ],
      followUps: {
        0: "How many hours do you spend on social media daily?",
        1: "What's your current monthly income?",
        2: "What aspects of your appearance bother you most?",
        3: "How long has this been affecting you?"
      },
      weight: 2
    }
  ]
};

const FocusQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [answers, setAnswers] = useState({});
  const [followUpAnswers, setFollowUpAnswers] = useState({});
  const [scores, setScores] = useState({
    trust: 0,
    pain: 0,
    readiness: 0,
    conviction: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [followUpAnswer, setFollowUpAnswer] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionSelect = useCallback((optionIndex) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSelectedOption(optionIndex);
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));

    if (quizData.questions[currentQuestion].followUps?.[optionIndex]) {
      setTimeout(() => {
        setShowFollowUp(true);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsAnimating(false);
    }
  }, [currentQuestion, isAnimating]);

  const handleFollowUpChange = (e) => {
    setFollowUpAnswer(e.target.value);
  };

  const handleNextQuestion = useCallback(() => {
    if (selectedOption === null) return;
    if (showFollowUp && !followUpAnswer.trim()) return;

    setIsAnimating(true);
    
    if (followUpAnswer) {
      setFollowUpAnswers(prev => ({
        ...prev,
        [`${currentQuestion}-${selectedOption}`]: followUpAnswer
      }));
    }

    setTimeout(() => {
      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
        setShowFollowUp(false);
        setFollowUpAnswer('');
      } else {
        calculateFinalScore();
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  }, [currentQuestion, selectedOption, followUpAnswer, showFollowUp]);

  const calculateFinalScore = useCallback(() => {
    const newScores = Object.entries(answers).reduce((acc, [questionIndex, answerIndex]) => {
      const question = quizData.questions[questionIndex];
      const weight = question.weight || 1;
      
      switch(question.phase) {
        case 'rapport':
          acc.trust += (answerIndex + 1) * weight;
          break;
        case 'problem':
          acc.pain += (answerIndex + 1) * weight;
          break;
        default:
          break;
      }
      return acc;
    }, {
      trust: 0,
      pain: 0,
      readiness: 0,
      conviction: 0
    });

    setScores(newScores);
  }, [answers]);

  const renderFollowUp = () => {
    if (!showFollowUp) return null;

    return (
      <FollowUpContainer>
        <QuestionText>
          {quizData.questions[currentQuestion].followUps[selectedOption]}
        </QuestionText>
        <FollowUpInput
          type="text"
          value={followUpAnswer}
          onChange={handleFollowUpChange}
          placeholder="Type your answer here..."
        />
      </FollowUpContainer>
    );
  };

  const renderQuestion = () => {
    if (showResults) {
      return (
        <div>
          <h2>Your Results</h2>
          <pre>{JSON.stringify(scores, null, 2)}</pre>
        </div>
      );
    }

    const question = quizData.questions[currentQuestion];
    return (
      <>
        <QuestionCounter>
          Question {currentQuestion + 1} of {quizData.questions.length}
        </QuestionCounter>
        <QuestionText>{question.question}</QuestionText>
        <OptionsContainer>
          {question.options.map((option, index) => (
            <Option
              key={index}
              selected={selectedOption === index}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnimating}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
        {renderFollowUp()}
        <Button 
          onClick={handleNextQuestion}
          disabled={selectedOption === null || isAnimating || (showFollowUp && !followUpAnswer.trim())}
        >
          {currentQuestion === quizData.questions.length - 1 ? 'See Results' : 'Continue →'}
        </Button>
      </>
    );
  };

  return (
    <ResponsiveQuizContainer>
      <ProgressBar>
        <Progress progress={(currentQuestion / quizData.questions.length) * 100} />
      </ProgressBar>
      {renderQuestion()}
    </ResponsiveQuizContainer>
  );
};

export default FocusQuiz;
