import styled from 'styled-components';

export const QuizContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 20px auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem 0;
`;

export const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #81C784);
  transition: width 0.5s ease;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #45a049;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

export const Option = styled.div`
  padding: 1.2rem;
  border: 2px solid ${props => props.selected ? '#4CAF50' : '#eee'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.selected ? '#E8F5E9' : '#ffffff'};

  &:hover {
    border-color: #4CAF50;
    transform: translateY(-2px);
  }
`;

export const QuestionText = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const ResponsiveQuizContainer = styled(QuizContainer)`
  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    margin: 10px auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 0.5rem;
    border-radius: 10px;
  }
`;
