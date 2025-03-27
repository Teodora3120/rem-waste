import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './assets/style.css';

function App() {
  return (
    <div id="root">
      <Router>
        <div className="app-container">
          <div className="main-page-container">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
