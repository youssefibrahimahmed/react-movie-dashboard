import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx'
import { Provider } from 'react-redux'
// import { Store } from './redux/Store.jsx'
import{Store} from './StoreApi.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
    <App />
    </Provider>
  </StrictMode>,
)
