import React from 'react';
import FocusQuiz from './components/FocusQuiz';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #333;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <FocusQuiz />
      </div>
    </>
  );
}

export default App;
