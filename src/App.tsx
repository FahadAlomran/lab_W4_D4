import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseEfect from './component/UseEfect'
import Routes from './component/Routes'
import Post from './component/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

<Post/>

   </div>
    
  )
}

export default App
