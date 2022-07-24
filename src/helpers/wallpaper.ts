import wallpaper01 from '../assets/Wallpaper_01.png'
import wallpaper02 from '../assets/Wallpaper_02.png'
import wallpaper03 from '../assets/Wallpaper_03.png'
import wallpaper04 from '../assets/Wallpaper_04.png'
import wallpaper05 from '../assets/Wallpaper_05.png'

let currentWallpaper = 0

const wallpapers = [wallpaper01, wallpaper02, wallpaper03, wallpaper04, wallpaper05]

export const getInitialWallpaper = () => {
  return wallpapers[currentWallpaper]
}

export const getNextWallpaper = () => {
  if (currentWallpaper < wallpapers.length - 1) {
    currentWallpaper++
  } else {
    currentWallpaper = 0
  }

  return wallpapers[currentWallpaper]
}
