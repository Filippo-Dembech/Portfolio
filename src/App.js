import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import ConfigurablePlanes from './apps/transformations/ConfigurablePlanes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi there this is a React App...</h1>}/>
      <Route path='/transformations' element={<ConfigurablePlanes />} />
    </Routes>
  );
}

export default App;
