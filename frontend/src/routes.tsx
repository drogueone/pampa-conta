import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        {/* <Route path="*" element={<NotFound />} /> Criar o componenten not found */}
      </Routes>
    </Router>
  );
}

export default App;
