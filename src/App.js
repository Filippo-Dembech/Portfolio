import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi there this is a React App...</h1>}/>
      <Route path='/sample' element={<h1>Sample page for testing</h1>} />
    </Routes>
  );
}

export default App;
