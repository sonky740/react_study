import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import type { Variants } from 'framer-motion';

const boxVariants: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1 },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 2 } },
};

function App() {
  const { scrollYProgress } = useScroll();
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, scale }}
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        variants={boxVariants}
        whileHover="hover"
        whileDrag="drag"
        whileTap="tap"
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
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
