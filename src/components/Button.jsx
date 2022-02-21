import { motion } from 'framer-motion'

const Button = ({ text }) => {
  return (
    <motion.button
      className='my-btn'
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
      }}
    >
      {text}
    </motion.button>
  )
}

export default Button
