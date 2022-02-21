import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1,
      delay: 0.5,
    },
  },
}

const Toppings = ({ addTopping, pizza }) => {
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2>Step 2: Choose Toppings</h2>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: '#f8e112',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>
      {pizza.toppings.length > 0 && (
        <Link to={'/order'}>
          <Button text={'Order'} />
        </Link>
      )}
    </motion.div>
  )
}

export default Toppings
