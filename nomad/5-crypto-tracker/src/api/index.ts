const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  return await response.json();
}

export async function fetchCoinInfo(coinId: string) {
  const coinInfoResponse = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await coinInfoResponse.json();
}

export async function fetchCoinTickers(coinId: string) {
  const coinTickersResponse = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await coinTickersResponse.json();
}
