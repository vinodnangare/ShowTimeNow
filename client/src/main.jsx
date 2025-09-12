import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import MovieDetail from './views/MovieDetail.jsx';  
import Home from './views/Home.jsx';
import Notfound from './views/Notfound.jsx';
import {Route,Routes,BrowserRouter} from 'react-router';
import NewMovie from './views/NewMovie.jsx';
createRoot(document.getElementById('root')).render(
<>

<div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/movie/:id' element={<MovieDetail />}></Route>
  <Route path='/new' element={<NewMovie />} ></Route>
  <Route path='/*' element={<Notfound />}></Route>
  
</Routes>
</BrowserRouter>

</div>
</>
)
