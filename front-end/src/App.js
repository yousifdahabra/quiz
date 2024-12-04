import './ui/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizPage from './pages/QuizPage';
import Result from './components/Result';
import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>

);
}

export default App;
