import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const rootElement = document.getElementById('root') 

if (rootElement) {
  createRoot(rootElement).render(
      <Provider store={store}>
        <App />
      </Provider>
  )
}
