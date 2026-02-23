import { HashRouter, Routes, Route } from 'react-router-dom';
import  English  from './pages/English';
import Tamil  from './pages/Tamil';
import Research from './pages/Research';

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