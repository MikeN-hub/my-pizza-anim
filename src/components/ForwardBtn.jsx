import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const buttonVariant = {
  grow: {
    scale: 1.1,
    boxShadow: '0px 0px 8px rgb(171,39,79)',
    transition: {
      duration: 0.3,
    },
  },
}

const ForwardBtn = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(1)
  return (
    <motion.button
      className='forward-btn'
      onClick={goBack}
      variants={buttonVariant}
      whileHover='grow'
    >
      <TiArrowForward />
      Go forward
    </motion.button>
  )
}

export default ForwardBtn
