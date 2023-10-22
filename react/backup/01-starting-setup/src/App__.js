import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // useCallback을 사용하여 Button의 React.memo 활성화
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  // Button의 React.memo를 활성화하지 못함...
  // javascript는 원시값(배열, 객체)에 대해서는 통용되지 않기 때문.
  // ex) [1, 2, 3] !== [1, 2, 3]
  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
