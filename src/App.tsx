import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceAreas from './components/ServiceAreas';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import SubServiceDetailPage from './components/SubServiceDetailPage';
import ContactPage from './components/ContactPage';
import { ThemeProvider } from './contexts/ThemeContext';

// Home component with all the landing page sections
const HomePage = () => (
  <>
    <Hero />
    <ServiceAreas />
    <Pricing />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/services/:serviceId/:subServiceId" element={<SubServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;