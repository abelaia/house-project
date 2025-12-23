import './styles/fonts.scss'; 
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;