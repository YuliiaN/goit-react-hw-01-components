import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.titles}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.row}>
              <td className={css.type}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
