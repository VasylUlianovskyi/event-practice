import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import Home from './pages/Home';
import Leyout from './components/Layout';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Leyout />}>
          <Route index element={<Home />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
