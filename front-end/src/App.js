import './ui/styles/App.css';
import './ui/styles/quiz.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizPage from './pages/QuizPage';
import Result from './components/Result';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/login';
function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/quiz_list" element={<QuizList />} />
      <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    </Provider>

);
}

export default App;
