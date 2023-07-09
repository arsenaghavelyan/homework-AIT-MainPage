import { useState } from 'react'
import './App.css'
import About from './components/About'
import Branches from './components/Branches'
import Courses from './components/Courses'
import FirstMain from './components/FirstMain'
import Header from './components/Header'
import LanguageContext from './contexts/LanguageContext'
import Footer from './components/Footer'

function App() {

  const [language, setLanguage] = useState("Հայերեն")

  const forLanguage = {
    language,
    setLanguage
  }
  return (
    <LanguageContext.Provider value={forLanguage}>
      <div className='bg-[#f8f8f8]'>
        <Header />
        <FirstMain />
        <Courses />
        <Branches />
        <About />
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
