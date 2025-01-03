import { Route, Routes } from 'react-router';
import ConfigurablePlanes from './apps/planes/ConfigurablePlanes';
import { useEffect, useState } from 'react';
import Homepage from './Homepage';

function App() {
  
  const [ documentTitle, setDocumentTitle ] = useState("FD Portfolio")
  
  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/planes' element={<ConfigurablePlanes setDocumentTitle={setDocumentTitle}/>} />
    </Routes>
  );
}

export default App;
