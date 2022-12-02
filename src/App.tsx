import { HashRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/topbar';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
