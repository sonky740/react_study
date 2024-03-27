import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const boxVariants: Variants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  leaving: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev + 1) % 10);
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev - 1 + 10) % 10);
  };

  return (
    <Wrapper>
      <AnimatePresence mode="popLayout" custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="visible"
          exit="leaving"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button type="button" onClick={nextPlease}>
        Next
      </button>
      <button type="button" onClick={prevPlease}>
        Prev
      </button>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e09, #d0e);
  overflow: hidden;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  font-size: 28px;
  color: #000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
