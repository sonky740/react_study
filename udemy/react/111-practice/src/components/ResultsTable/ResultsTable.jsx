import styles from './ResultsTable.module.css';

const formatter = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultsTable({ data, initialInvestment }) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ year, savingsEndOfYear, yearlyContribution, yearlyInterest }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyInterest)}</td>
              <td>
                {formatter.format(savingsEndOfYear -
                  initialInvestment -
                  yearlyContribution * year)}
              </td>
              <td>{formatter.format(initialInvestment + yearlyContribution * year)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
