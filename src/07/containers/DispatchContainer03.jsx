import { connect } from 'react-redux';

import { setLoading, resetLoading } from '../action/loadingAction';
import { setUser } from '../action/userAction';
import { setCollection, setAge } from '../action/collectionActions02';
import ActionComponent02 from '../ActionComponent02';

const mapDispatchToProps = { setLoading, resetLoading, setUser, setCollection, setAge };

export default connect(null, mapDispatchToProps)(ActionComponent02);
