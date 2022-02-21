import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='home container'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
    >
      <h1 animate={{ color: 'teal', fontWeight: 700, y: -100 }}>
        Welcome to Pizza Joint
      </h1>
      <Link to={'/base'}>
        <Button text={'Create Your Pizza'} />
      </Link>
    </motion.div>
  )
}

export default Home
