import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data"

function App() {
  //const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  )
}

export default App
