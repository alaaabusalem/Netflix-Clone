import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     
    </Routes>
    </>
  );
}

export default App;
