import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getInitialWallpaper, getNextWallpaper } from '../helpers/wallpaper'

type Props = {
  children: React.ReactNode
}

export const Background: React.FC<Props> = ({ children }) => {
  const [wallpaper, setWallpaper] = useState(getInitialWallpaper())

  useEffect(() => {
    const interval = setInterval(() => {
      setWallpaper(getNextWallpaper())
    }, 15000)

    return function() {
      clearInterval(interval)
    }
  }, [])

  return <BackgroundContainer wallpaper={wallpaper}>{children}</BackgroundContainer>
}

type ContainerProps = {
  wallpaper: string
}

export const BackgroundContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  background-image: url("${({ wallpaper }) => wallpaper}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: background-image 1s linear;
  transition: background-image 1s linear;
`
