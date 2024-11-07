import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem 0;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #81C784);
  transition: width 0.5s ease;
`;

const StepIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Step = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.active ? '#4CAF50' : props.completed ? '#81C784' : '#eee'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  transition: all 0.3s ease;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ProgressTracker = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / (totalQuestions - 1)) * 100;

  return (
    <ProgressContainer>
      <ProgressText>
        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </ProgressText>
      
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>

      <StepIndicators>
        {[...Array(totalQuestions)].map((_, index) => (
          <Step 
            key={index}
            completed={index < currentQuestion}
            active={index === currentQuestion}
          >
            {index + 1}
          </Step>
        ))}
      </StepIndicators>
    </ProgressContainer>
  );
};

export default ProgressTracker;
