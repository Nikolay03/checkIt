import { CONTAINER } from 'constants/const'
import styled from 'styled-components'

const Container = styled('div')`
  max-width: ${CONTAINER}px;
  margin: 0 auto;
  padding: 0px ${({ theme }) => theme.layoutPadding.XPadding};
`

export default Container
