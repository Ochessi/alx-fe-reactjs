import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {
  const [count, setCount] = useState(0)

  // Sample user data to provide through context
  const userData = {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <>
      <WelcomeMessage />
      <Header />
      <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
      />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <MainContent />
      <Footer />
    </>
  )
}

export default App
