import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function App() {
  const [id, setId] = useState<number | null>(null);
  const onModal = (i: number) => {
    setId(i);
  };
  const closeModal = () => {
    setId(null);
  };

  return (
    <Wrapper>
      <Grid>
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} layoutId={`${i}`} onClick={() => onModal(i)} />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <Box layoutId={`${id}`} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e09, #d0e);
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  font-size: 28px;
  color: #000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;

  ${Box} {
    width: 400px;
  }
`;
