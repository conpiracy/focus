import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ResponsiveQuizContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 20px auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin-bottom: 2rem;
`;

export const FollowUpInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;
export const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export const QuestionText = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.4;
  animation: ${fadeIn} 0.5s ease;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Option = styled.button`
  padding: 1.2rem;
  background: ${props => props.selected ? '#e3f2fd' : '#fff'};
  border: 2px solid ${props => props.selected ? '#2196f3' : '#e0e0e0'};
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #2196f3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;

  &:hover {
    background: #1976d2;
  }

  &:disabled {
    background: #bdbdbd;
    cursor: not-allowed;
  }
`;

export const FollowUpContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 12px;
  animation: ${fadeIn} 0.3s ease;
`;

export const ResultsContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

export const ResultTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const ResultDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const SolutionCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    padding: 0.8rem 0;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const PriceTag = styled.div`
  font-size: 2.5rem;
  color: #2196f3;
  font-weight: bold;
  margin: 1.5rem 0;
`;

export const QuestionCounter = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  animation: ${fadeIn} 0.3s ease;
`;
