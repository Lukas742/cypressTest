import '@ui5/webcomponents-react/dist/Assets.js';
import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
setCustomElementsScopingSuffix("demo");
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
