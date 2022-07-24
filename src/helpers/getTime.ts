import { pad } from './pad'

export const getTime = () => {
  const date = new Date()

  return `${date.getHours()}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}
