import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import HomeView from './views/Home';
import NotFoundView from './views/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomeView /> } />
        <Route path='*' element={ <NotFoundView /> } />
      </Routes>
    </Router>
  );
}

export default App;
