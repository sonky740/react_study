import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { getMovies, type IGetMoviesResult } from '../api/api';
import { makeImagePath } from '@/utils/utils';

const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'tween',
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'tween',
    },
  },
};

const offset = 6;

export default function Main() {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch('/movies/:id');
  const { scrollY } = useScroll();
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: getMovies,
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    navigate('/');
  };
  const clickedMovie =
    bigMovieMatch?.params.id &&
    data?.results.find((movie) => `${movie.id}` === bigMovieMatch.params.id);

  return (
    <Wrapper>
      {isLoading && <Loader>Loading...</Loader>}
      {!isLoading && data && (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path)}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                transition={{ type: 'tween', duration: 0.5 }}
                exit="exit"
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      layoutId={`${movie.id}`}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch && (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={`${bigMovieMatch.params.id}`}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #000;
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    ${({ bgPhoto }) => `url(${bgPhoto})`};
  background-size: cover;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 68px;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 30px;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  position: absolute;
  width: 100%;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  position: relative;
  background-color: #fff;
  height: 200px;
  background: #fff ${({ bgPhoto }) => `url(${bgPhoto})`} center center;
  background-size: cover;
  font-size: 24px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.black.lighter};
  opacity: 0;

  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.black.lighter};
`;

const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;

const BigTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 36px;
  text-align: center;
`;

const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  color: ${({ theme }) => theme.white.lighter};
`;
