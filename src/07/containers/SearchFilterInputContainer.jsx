import { connect } from 'react-redux';
import { setFilter } from '../action/searchFilterActions';
import Input from '../../04/InputWithStyles';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || '';
  return {
    value
  };
};

const mapDispatchToProps = {
  onChange: setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
