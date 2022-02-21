import React from 'react'
import { motion } from 'framer-motion'

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
      duration: 2,
      mass: 0.5,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: .5,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='order container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2 variants={containerVariants}>
        <span>Thank you for your Order!</span>
      </h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with
      </motion.p>
      <motion.ul variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default Order
