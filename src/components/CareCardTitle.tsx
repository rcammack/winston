import { useLayoutEffect, useRef } from 'react'

type CareCardTitleProps = {
  title: string
}

function CareCardTitle({ title }: CareCardTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const titleElement = titleRef.current
    const bodyElement = titleElement
      ?.closest('.care-card')
      ?.querySelector<HTMLParagraphElement>('p')

    if (!titleElement || !bodyElement) {
      return
    }

    let previousWidth = -1

    const fitTitle = () => {
      const width = titleElement.parentElement?.clientWidth ?? 0

      if (width === previousWidth) {
        return
      }

      previousWidth = width
      titleElement.style.fontSize = ''

      const maximumSize = Number.parseFloat(
        window.getComputedStyle(titleElement).fontSize,
      )
      const minimumSize = Number.parseFloat(
        window.getComputedStyle(bodyElement).fontSize,
      )
      let currentSize = maximumSize

      while (
        titleElement.scrollHeight > titleElement.clientHeight + 1 &&
        currentSize > minimumSize
      ) {
        currentSize = Math.max(minimumSize, currentSize - 0.5)
        titleElement.style.fontSize = `${currentSize}px`
      }
    }

    fitTitle()

    const resizeObserver = new ResizeObserver(fitTitle)
    resizeObserver.observe(titleElement.parentElement ?? titleElement)

    return () => resizeObserver.disconnect()
  }, [title])

  return <h3 ref={titleRef}>{title}</h3>
}

export default CareCardTitle
