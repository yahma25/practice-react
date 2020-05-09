import { connect } from 'react-redux';
import TransactionList from '../components/main/TransactionList';
import { setTransactionList } from '../actions/transactionActions';

export default connect(null, { setTransactionList })(TransactionList);
