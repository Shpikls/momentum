import React, { useEffect, useState } from 'react'
import { getTime } from '../helpers/getTime'

export const Time = () => {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
    }, 1000)
  }, [])

  return <span>{time}</span>
}
