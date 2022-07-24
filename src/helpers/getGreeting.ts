import { GOOD_AFTERNOON, GOOD_EVENING, GOOD_MORNING, GOOD_NIGHT } from '../constans/contants'

export const getGreeting = () => {
  const date = new Date()

  if (date.getHours() > 4 && date.getHours() < 12) {
    return GOOD_MORNING
  }

  if (date.getHours() > 11 && date.getHours() < 18) {
    return GOOD_AFTERNOON
  }

  if (date.getHours() > 17 && date.getHours() < 22) {
    return GOOD_EVENING
  }

  return GOOD_NIGHT
}
