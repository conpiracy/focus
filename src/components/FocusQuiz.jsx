import React, { useState } from 'react';
import { quizQuestions, resultProfiles } from '../data/quizQuestions';
import {
  QuizContainer,
  ProgressBar,
  Progress,
  Button,
  QuestionText,
  OptionsContainer,
  Option
} from './styles/QuizStyles';

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

  const renderQuestion = () => {
    const question = quizQuestions[currentQuestion];
    console.log('Current question:', question); // Add this debug line
    return (
      <>
        <QuestionText>{question.question}</QuestionText>
        <OptionsContainer>
          {question.options.map((option, index) => {
            console.log('Rendering option:', option); // Add this debug line
            return (
              <Option
                key={index}
                selected={selectedOption === index}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </Option>
            );
          })}
        </OptionsContainer>
        <Button onClick={handleNextQuestion}>
          {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Continue →'}
        </Button>
      </>
    );
  };

  return (
    <QuizContainer>
      <ProgressBar>
        <Progress progress={(currentQuestion / quizQuestions.length) * 100} />
      </ProgressBar>
      <p>Question {currentQuestion + 1} of {quizQuestions.length}</p>
      {renderQuestion()}
    </QuizContainer>
  );
};

export default FocusQuiz;