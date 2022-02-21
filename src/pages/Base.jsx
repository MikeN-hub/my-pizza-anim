import { Link } from 'react-router-dom'
import Button from '../components/Button'
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
      delay: 0.5,
    },
  },
}

const buttonVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffnessL: 120,
    },
  },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Chin & Crispy', 'Thick Crust']

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='title'>
        <h2>Step 1: Choose Your base</h2>
      </div>
      <ul className='bases-list'>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
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
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>
      {pizza.base && (
        <motion.div variants={buttonVariants}>
          <Link to={'/toppings'}>
            <Button text={'Next'} />
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
