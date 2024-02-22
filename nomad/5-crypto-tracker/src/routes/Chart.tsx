import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface ChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>({
    queryKey: ['ohlcv', coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 10000,
  });

  return (
    <div>
      {isLoading && 'Loading Chart...'}
      {!isLoading && data && (
        <ApexChart
          type="line"
          series={[
            {
              name: 'Price',
              data: data.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
              zoom: {
                enabled: false,
              },
            },
            stroke: {
              curve: 'smooth',
              width: 3,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              type: 'datetime',
              categories: data.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              ),
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#0be881'],
                stops: [0, 100],
              },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
