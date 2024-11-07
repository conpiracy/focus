import React from 'react';
import styled from 'styled-components';
import { resultProfiles } from '../data/quizQuestions';

const ResultsContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ResultTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const SolutionCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
`;

const Results = ({ scores }) => {
  const calculateProfile = () => {
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    // Add profile calculation logic
    return resultProfiles.passive; // Temporary default
  };

  const profile = calculateProfile();

  return (
    <ResultsContainer>
      <ResultTitle>{profile.title}</ResultTitle>
      <p>{profile.description}</p>
      <SolutionCard>
        <h3>{profile.solution}</h3>
        <p>Investment: ${profile.price}</p>
        <ul>
          {profile.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </SolutionCard>
    </ResultsContainer>
  );
};

export default Results;
