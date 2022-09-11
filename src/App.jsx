import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import { RulingProvider } from './contexts/RulingsContext';

import HomeView from './views/Home';
import NotFoundView from './views/NotFound';

function App() {
  return (
    <RulingProvider>
      <Router>
        <Routes>
          <Route path='/' element={ <HomeView /> } />
          <Route path='*' element={ <NotFoundView /> } />
        </Routes>
      </Router>
    </RulingProvider>
  );
}

export default App;
