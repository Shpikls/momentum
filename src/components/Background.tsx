import styled from 'styled-components'
import wallpaper from '../assets/Wallpaper_01.png'

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${wallpaper}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
