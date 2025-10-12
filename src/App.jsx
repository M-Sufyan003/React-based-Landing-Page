import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <>
    <ErrorBoundary>
      <HeroSection></HeroSection>
    </ErrorBoundary>
    </>
  )
}

export default App
