
import PropTypes from 'prop-types';

import css from './Transaction.module.css'

const TransactionHistory = (props) => {
  const { items } = props;

  return (
    <div>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(data => (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;