import { useState } from 'react'
import './App.css'
import Start from './start/Start'
import Game from './Game/Game'

function App() {
const [ispressed,setispressed]=useState(false)
function toggleplay(){
  setispressed(true)
}

  return (
    <>
    {ispressed?<Game/>:<Start press={toggleplay} />}
    </>
  )
}

export default App
