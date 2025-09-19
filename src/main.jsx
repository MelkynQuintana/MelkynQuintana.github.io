/**
 * @copyright Melkyn Quintana 2024
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx';

/**
 * CSS link
 */
import './index.css';

/**
 * Translations
 */
import { LanguageProvider } from './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)

