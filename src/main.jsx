import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserForm from './page/UserForm.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';
import Aplication from './page/Aplication.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<UserForm />} />
              <Route path="/Aplication" element={<Aplication />} />
            </Routes>
          </div>
        </Router>
    </Provider>
  </StrictMode>,
)
