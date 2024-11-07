import styled from 'styled-components';

export const ResponsiveQuizContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 20px auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

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

export const QuestionText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

export const Option = styled.div`
  padding: 1.2rem;
  margin: 0.8rem 0;
  border: 2px solid ${props => props.selected ? '#4CAF50' : '#eee'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.6rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    margin: 0.4rem 0;
    font-size: 0.9rem;
  }
`;
