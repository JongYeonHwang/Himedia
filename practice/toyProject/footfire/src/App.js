import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layouts/Layout";
import ContentPage from './pages/ContentPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout/>}>
              <Route index element={ <ContentPage/> }/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;