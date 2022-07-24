import styled from 'styled-components'
import { NAME } from '../constans/contants'
import { getGreeting } from '../helpers/getGreeting'

export const Greeting = () => {
  const greeting = getGreeting()

  return (
    <GreetingContainer>{`${greeting}, ${NAME}`}</GreetingContainer>
  )
}

const GreetingContainer = styled.span`
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
`
