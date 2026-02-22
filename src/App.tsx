import { Routes, Route } from 'react-router-dom';
import  English  from './pages/english';
import Tamil  from './pages/tamil';
import Research from './pages/research';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tamil />} />
      <Route path="/english" element={<English />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  );
}

export default App;