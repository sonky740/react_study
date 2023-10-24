import ChartBar from './ChartBar';
import styles from './Chart.module.css';

export default function Chart({ dataPoints }) {
  const maxValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
