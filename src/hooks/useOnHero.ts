import { useEffect, useRef, useState } from 'react'

export function useOnHero(heroId = 'home'): boolean {
  const [isOnHero, setIsOnHero] = useState(true)
  const heroHeightRef = useRef(0)

  useEffect(() => {
    const updateHeight = () => {
      const hero = document.getElementById(heroId)
      heroHeightRef.current = hero ? hero.offsetHeight : window.innerHeight
    }

    const onScroll = () => {
      setIsOnHero(window.scrollY < heroHeightRef.current - 1)
    }

    updateHeight()
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateHeight, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateHeight)
    }
  }, [heroId])

  return isOnHero
}
