import { connect } from 'react-redux';
import ActionComponent1 from '../ActionComponent1';

import { setAge } from '../action/collectionActions02';

// const mapDispatchToProps = dispatch => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age))
//   };
// };

const mapDispatchToProps = { setAge };

export default connect(null, mapDispatchToProps)(ActionComponent1);
