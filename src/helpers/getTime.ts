import { pad } from './pad'

export const getTime = () => {
  const date = new Date()

  return `${date.getHours()}:${date.getMinutes()}:${pad(date.getSeconds())}`
}
