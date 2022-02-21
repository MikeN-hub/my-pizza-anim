import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Base from './pages/Base'
import Toppings from './pages/Toppings'
import Order from './pages/Order'
import Layout from './components/Layout'

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] })
  const addBase = (base) => {
    if (base) {
      setPizza({ ...pizza, base })
    }
  }

  const addTopping = (topping) => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [topping, ...pizza.toppings]
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='base' element={<Base addBase={addBase} pizza={pizza}/>} />
          <Route path='toppings' element={<Toppings addTopping={addTopping} pizza={pizza}/>} />
          <Route path='order' element={<Order pizza={pizza} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
