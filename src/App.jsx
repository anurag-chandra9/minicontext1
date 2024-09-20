import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './Context/Usercontextprovider'
import Login from './components/Login1'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
<h1>anurag chandra</h1>
<Login/>
<Profile/>

  </Usercontextprovider>
  )
}

export default App
