import { useEffect, useState } from 'react'

export interface WindowSizes {
  width: undefined | number
}
const useWindowSize = (): WindowSizes => {
  const [windowSize, setWindowSize] = useState<WindowSizes>({
    width: undefined
  })

  useEffect(() => {
    function handleResize () {
      const width = window.innerWidth ? window.innerWidth : document.body.clientWidth
      setWindowSize({
        width: width
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
