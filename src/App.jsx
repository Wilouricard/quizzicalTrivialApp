import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from './components/Start'
import Quizz from './components/Quizz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="backg" className="bg-background-main flex items-center justify-center min-h-screen">
      {/* <Start /> */}
      <Quizz />
    </div>
  )
}

export default App
