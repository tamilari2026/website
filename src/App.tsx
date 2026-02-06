import { Routes, Route } from 'react-router-dom';
import { English } from './pages/english';
import { Tamil } from './pages/tamil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tamil />} />
      <Route path="/English" element={<English />} />
    </Routes>
  );
}

export default App;