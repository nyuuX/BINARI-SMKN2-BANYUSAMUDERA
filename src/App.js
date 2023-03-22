import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Tentang from './page/tentang';
import Layanan from './page/layanan';
import Startup from './page/artikel/artikel-startup';
import Acara from './page/acara';
import Kontak from './page/kontak';
import Formstartup from './page/form/form-startup';
import Formws from './page/form/form-ws';
import Workshop from './page/artikel/artikel-ws';
import Startupdata from './page/admin/startupdata';
import Test from './page/test';
import Wsdata from './page/admin/wsdata';
import Admin from './page/admin/admin';
import Pkl from './page/artikel/artikel-pkl';
import Formpkl from './page/form/form-pkl';
import Training from './page/artikel/artikel-training';
import Formtraining from './page/form/form-training';
import Pkldata from './page/admin/pkldata';
import Trainingdata from './page/admin/trainingdata';
import Kontakdata from './page/admin/kontakdata';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tentang' element={<Tentang />}/>
      <Route path='/layanan' element={<Layanan />}/>
      <Route path='/startup' element={<Startup />}/>
      <Route path='/workshop' element={<Workshop />}/>
      <Route path='/praktek-kerja-lapangan' element={<Pkl />}/>
      <Route path='/training' element={<Training />}/>
      <Route path='/form-startup' element={<Formstartup />}/>
      <Route path='/form-workshop' element={<Formws />}/>
      <Route path='/form-pkl' element={<Formpkl />}/>
      <Route path='/form-training' element={<Formtraining />}/>
      <Route path='/startup-data' element={<Startupdata />}/>
      <Route path='/workshop-data' element={<Wsdata />}/>
      <Route path='/pkl-data' element={<Pkldata />}/>
      <Route path='/training-data' element={<Trainingdata />}/>
      <Route path='/kontak-data' element={<Kontakdata />}/>
      <Route path='/acara' element={<Acara />}/>
      <Route path='/kontak' element={<Kontak />}/>
      <Route path='/test' element={<Test />}/>
      <Route path='/admin' element={<Admin />}/>
    </Routes>
  );
}

export default App;
