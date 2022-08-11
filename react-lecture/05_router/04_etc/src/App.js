import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Main from './pages/Main';
import Layout from './layouts/Layout';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>}>
          <Route index element={ <Main/>}/>
          <Route path='mypage' element={ <MyPage/>}/>
          <Route path='login' element={ <Login/>}/>
        </Route>
        <Route path="*" element={ <Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
