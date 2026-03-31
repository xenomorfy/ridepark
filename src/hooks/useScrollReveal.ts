import { useEffect } from 'react'

export function useScrollReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            ;(entry.target as HTMLElement).style.willChange = 'auto'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => {
      el.style.willChange = 'opacity, transform'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
