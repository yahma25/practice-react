import createModalProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPage from './components/main/TradeCoinPage01';

export default createModalProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage
});
