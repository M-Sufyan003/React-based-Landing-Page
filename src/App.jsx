import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import HeroSection from './components/HeroSection/HeroSection'
import ServiceSection from './components/ServiceSection/ServiceSection';

function App() {
  return (
    <>
    <ErrorBoundary>
      <HeroSection></HeroSection>
    </ErrorBoundary>
    <ErrorBoundary>
      <ServiceSection></ServiceSection>
    </ErrorBoundary>
    </>
  )
}

export default App
