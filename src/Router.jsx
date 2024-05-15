import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;