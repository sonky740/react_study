import { useRef } from 'react';
import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import type { Variants } from 'framer-motion';

const boxVariants: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: '100px' },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 2 } },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [0.1, 1, 0.1]);

  useMotionValueEvent(scale, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        style={{ x, scale }}
        drag
        dragSnapToOrigin
        dragConstraints={biggerBoxRef}
        dragElastic={0.5}
        variants={boxVariants}
        whileHover="hover"
        whileDrag="drag"
        whileTap="tap"
      />
    </BiggerBox>
  );
}

export default App;

const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`;
