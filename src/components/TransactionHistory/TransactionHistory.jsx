import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.trHead}>
          <th className={css.thHead}>Type</th>
          <th className={css.thHead}>Amount</th>
          <th className={css.thHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.trBody} key={id}>
              <td className={css.tdType}>{type}</td>
              <td className={css.tdBody}>{amount}</td>
              <td className={css.tdBody}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
