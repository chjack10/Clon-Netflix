import ReactDOM from 'react-dom'
import './index.css'
import Netflix from './Netflix'

import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <Netflix />
  </Provider>,
  document.getElementById('root')
)