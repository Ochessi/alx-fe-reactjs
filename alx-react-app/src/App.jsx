import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <UserProfile 
          name="Alice Johnson" 
          age={25} 
          bio="Frontend developer who loves React and UI design." 
      />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
