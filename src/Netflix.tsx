import { Provider } from 'react-redux';
import { store } from './store/store';

import AppRouter from './routers/AppRouter';

const ClonNetflix = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default ClonNetflix;
