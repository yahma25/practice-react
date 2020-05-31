import createModalProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from './constants/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';
import RegisterPage from './containers/signup/RegisterPageContainer';

export default createModalProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
  [REGISTER_USER_MODAL]: RegisterPage
});
