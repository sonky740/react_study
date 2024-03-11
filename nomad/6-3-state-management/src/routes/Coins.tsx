import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { fetchCoins } from '../api';
import { isDarkAtom } from '../atoms';

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleThemeMode = () => setDarkAtom((prev) => !prev);

  const { isLoading, data: coins } = useQuery<CoinInterface[]>({
    queryKey: ['allCoins'],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
        <button type="button" onClick={toggleThemeMode}>
          Toggle Mode
        </button>
      </Header>
      {isLoading && <Loader>Loading...</Loader>}
      {!isLoading && (
        <CoinsList>
          {coins?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: {
                    name: coin.name,
                  },
                }}
              >
                <CoinTitle>
                  {/* <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt={coin.name}
                  /> */}
                  <h1>{coin.name}</h1>
                </CoinTitle>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.cardBgColor};
  border: 1px solid #fff;
  color: ${({ theme }) => theme.textColor};

  a {
    display: block;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const CoinTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

// const Img = styled.img`
//   width: 35px;
//   height: 35px;
//   margin-right: 10px;
// `;
