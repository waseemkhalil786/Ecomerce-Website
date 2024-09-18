import { useState } from 'react'

import './App.css'
import Prodcuts from '../Ecomerce-Website/src/components/Product'
import ProdcutDetail from '../Ecomerce-Website/src/components/ProductDetail'
import FormUpdate from '../Ecomerce-Website/src/NavigationBar/Form'
import AboutSection from '../Ecomerce-Website/src/NavigationBar/About'
import HomeTab from '../Ecomerce-Website/src/NavigationBar/Home'
import ProjectOn from '../Ecomerce-Website/src/NavigationBar/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="navigation-bar"> 
      <HomeTab/>
      <AboutSection/>
      <ProjectOn/>
      <FormUpdate/>
      <div style={{ display:'flex', justifyContent: "end", alignItems:"end" }}>
        <button>Register</button>
        <button>Your profile</button>
        <button>Light</button>
        <button>Dark</button>
      </div>
      </div>
      <h1>New Products</h1>
      <Prodcuts/>
    </div>
  )
}

export default App
