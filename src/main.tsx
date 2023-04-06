import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './Store';

import 'sanitize.css';
import '@styles/global.scss';

const rootSelectorId = 'root';
const rootElement = document.getElementById(rootSelectorId);

if (rootElement === null) {
  throw new Error(`Could not find element with id ${rootSelectorId}`);
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
