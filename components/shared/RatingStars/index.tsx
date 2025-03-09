import React, { useMemo } from 'react'
import { RatingStarsProps } from './index.interface'
import Image from 'next/image'

export const RatingStars = ({ rating }: RatingStarsProps) => {
  const increaseValue = useMemo(() => ((rating % 1) * 10 > 5 ? 1 : 0), [rating])

  return (
    <ul className="flex gap-1">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          if (index < Math.floor(rating + increaseValue))
            return (
              <li className="relative size-4" key={index}>
                <Image fill alt="yellow start" src="/icons/yellow-star.svg" />
              </li>
            )
          return (
            <li className="relative size-4" key={index}>
              <Image fill alt="gray start" src="/icons/gray-star.svg" />
            </li>
          )
        })}
    </ul>
  )
}
