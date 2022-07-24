import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getTime } from '../helpers/getTime'

export const Time = () => {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
    }, 1000)
  }, [])

  return <TimeContainer>{time}</TimeContainer>
}

const TimeContainer = styled.span`
  font-weight: 800;
  font-size: 128px;
  line-height: 174px;
  
  margin-bottom: 16px;
`
