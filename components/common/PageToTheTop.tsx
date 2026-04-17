'use client'

import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const PageToTheTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset
      const isAtBottom = scrollTop > 100
      setVisible(isAtBottom)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      position={"fixed"}
      bottom={20}
      zIndex={100}
      left={20}
      opacity={`${visible ? 100 :0 }`}
      pointerEvents={`${visible ? '' :"none" }`}
      aria-label="Scroll to top"
    >
      <FaArrowAltCircleUp />
    </Button>

  )
}

export default PageToTheTop