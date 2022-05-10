import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './routers/AppRouter';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
