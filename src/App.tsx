import { useState } from 'react'
import './App.css'

const App = () => {
   const [state, setState] = useState(0)

   return (
      <div className="App">
         <button type="button" onClick={() => setState((prev) => prev + 1)}>
            Change state
         </button>
         {state}
      </div>
   )
}

export default App
