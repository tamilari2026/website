import { Routes, Route } from 'react-router-dom';
import  English  from './pages/English';
import Tamil  from './pages/Tamil';
import Research from './pages/Research';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tamil />} />
      <Route path="/English" element={<English />} />
      <Route path="/Research" element={<Research />} />
    </Routes>
  );
}

export default App;