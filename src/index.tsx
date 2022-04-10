import { createRoot } from 'react-dom/client';

import { App } from 'containers';
import reportWebVitals from './reportWebVitals';

import 'assets/styles/base.scss';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
