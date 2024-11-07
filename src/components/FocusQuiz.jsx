import React, { useState, useCallback } from 'react';
import { quizQuestions, resultProfiles } from '../data/quizQuestions';
import Results from './Results';
import {
  ResponsiveQuizContainer,
  ProgressBar,
  Progress,
  Button,
  QuestionText,
  OptionsContainer,
  Option,
  FollowUpContainer,
  QuestionCounter
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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionSelect = useCallback((optionIndex) => {
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
    }
  }, [currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (selectedOption === null) return;

    setIsAnimating(true);
    
    setTimeout(() => {
      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
        setShowFollowUp(false);
      } else {
        calculateFinalScore();
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  }, [currentQuestion, selectedOption]);

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

  const renderQuestion = () => {
    if (showResults) {
      return <Results scores={scores} />;
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
              onClick={() => !isAnimating && handleOptionSelect(index)}
              disabled={isAnimating}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
        {showFollowUp && (
          <FollowUpContainer>
            <QuestionText>
              {question.followUps[selectedOption]}
            </QuestionText>
          </FollowUpContainer>
        )}
        <Button 
          onClick={handleNextQuestion}
          disabled={selectedOption === null || isAnimating}
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
