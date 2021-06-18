import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    ::-webkit-scrollbar{
      width: 5px;
      height: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.scrollbar.thumb};
      border-radius: 5px;
      height: 5px;
    }
  }
  body{
    font-family: Montserrat;
    background: rgb(246, 246, 246);
    color: ${({ theme }) => theme.color.primary};
    font-size: 15px;
    line-height: 1.2;
  }
  * > img{
    max-width: 100%;
  }
`
