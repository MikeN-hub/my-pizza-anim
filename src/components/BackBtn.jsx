import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TiArrowBack } from 'react-icons/ti'

const buttonVariant = {
  grow: {
    scale: 1.1,
    boxShadow: '0px 0px 8px rgb(171,39,79)',
    transition: {
      duration: 0.3,
    },
  },
}

const BackBtn = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <motion.button
      className='back-btn'
      onClick={goBack}
      variants={buttonVariant}
      whileHover='grow'
    >
      <TiArrowBack />
      Go back
    </motion.button>
  )
}

export default BackBtn
