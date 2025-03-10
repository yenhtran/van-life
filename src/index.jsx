import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetail';
import HostLayout from './components/HostLayout';
import AuthRequired from './components/AuthRequired';
import "./server"
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />}/>
          <Route path="login" element={<Login />}/>

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />}/>
                <Route path="pricing" element={<HostVanPricing />}/>
                <Route path="photos" element={<HostVanPhotos />}/>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);