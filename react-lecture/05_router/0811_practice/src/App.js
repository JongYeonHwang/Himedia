import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './pages/About';
import Main from './pages/Main';
import Home from './pages/Home';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Home/>}/>
            <Route path="about" element={ <About/>}/>
            <Route path="main" element={ <Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
