import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { requestTransactionList } from '../../actions/transactionPackActions';
import {
  transactionListLoadingStateSelector,
  transactionListSelector
} from '../../selector/transactionSelectors';

const mapStateToProps = state => {
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state)
  };
};

const mapDispatchToProps = {
  requestTransactionList
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
