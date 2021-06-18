import { mediaQueries } from 'constants/mediaQueries'
import Button from 'components/ui/Button'
import { Check } from 'media/icons'
import { prop } from 'ramda'
import React from 'react'
import styled from 'styled-components'

interface withActive {
  isActive: boolean
}
const data = [
  {
    isActive: true,
    answer: 'Да!',
    answers: [
      {
        text: 'Мне необходима помощь специалистов, чтобы сделать индивидуальный проект дома и посчитать по нему смету на строительство.'
      },
      {
        text: 'Мне нужен комплексный подход по решению моих задач.'
      },
      {
        text: 'Я согласен, что эффективней сотрудничать с профессионалами, чем просматривать десятки сайтов в поисках нужного и стоящего.'
      },
      {
        text: 'Довериться специалистам Золотого сечения.'
      },
      {
        text: 'Эту услугу мы окажем трём семьям бесплатно.*'
      }
    ]
  },
  {
    isActive: false,
    answer: 'Нет.',
    answers: [
      {
        text: 'Мне некогда общаться по телефону и тем более встречаться.'
      },
      {
        text: 'Но у меня много свободного времени на поиски готового проекта в интернете.'
      },
      {
        text: 'Я сам готов разобраться в технологиях строительства и в способах архитектурно-планировочных решениях.'
      },
      {
        text: 'Фундамент закажу как у соседа.'
      },
      {
        text: 'У меня есть знакомые строители, которые по картинкам из интернета считают сметы на строительство.'
      },
      {
        text: 'И я не выбираю себе подрядчика по качеству строительства, а только по стоимости, потому что качество у всех одинаковое.'
      },
      {
        text: 'Продолжить изучать сайт.'
      }
    ]
  }
]
const QuestionsGrid = styled('div')`
  margin-top: 41px;
  display: grid;
  grid-gap: 26px;
`

const WrapperAnswer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BlockAnswer = styled('div')`
  display: grid;
  grid-gap: 26px;
  grid-template: 1fr / 1fr 1fr;
`

const Answers = styled('div')`
  display: grid;
  grid-gap: 41px;
`

const TextAnswer = styled('div')<withActive>`
  align-items: center;
  display: grid;
  grid-gap: 35px;
  grid-template: 1fr / min-content 1fr;
  & svg {
    color: ${({ theme, isActive }) => isActive ? theme.color.warning : theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`

const TextAll = styled('div')`
  display: grid;
  grid-gap: 35px;
  grid-template: 1fr / min-content 1fr;
`

const All = styled('span')<withActive>`
  width: 43px;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme, isActive }) => isActive ? theme.color.warning : theme.color.primary};
`

const Text = styled('p')`
  font-size: ${({ theme }) => theme.fontSize.capital};
`

const FreeText = styled('p')`
  font-size: ${({ theme }) => theme.fontSize.standart};
`

const Answer = styled('div')<withActive>`
  text-align: center;
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.fontSize.big};
  background: ${({ theme, isActive }) => isActive ? theme.background.warning : theme.background.dark};
  color: ${({ theme, isActive }) => isActive ? theme.color.primary : theme.color.warning};
`

const WithBorder = styled('div')`
  padding: 3vw 3.2vw;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  border-right: 1px solid ${({ theme }) => theme.border.primary};
  @media ${mediaQueries.minLaptopL} {
    padding: 41px 46px;
  }
`

const ButtonWrapper = styled('div')`
  margin: 41px 0 38px 0;
  display: flex;
  justify-content: center;
`

const Questions = () => {
  return (
    <QuestionsGrid>
      <BlockAnswer>
        {data.map((item, index) => {
          const answer = prop('answer', item)
          const isActive = prop('isActive', item)
          const answers = prop('answers', item)
          return (
            <WrapperAnswer key={index}>
              <Answer isActive={isActive}>
                {answer}
              </Answer>
              <WithBorder>
                <Answers>
                  {answers.map((obj, key) => {
                    const text = prop('text', obj)
                    return (
                      <TextAnswer key={key} isActive={isActive}>
                        <Check/>
                        <Text>
                          {text}
                        </Text>
                      </TextAnswer>
                    )
                  })}
                </Answers>
                {isActive && (
                  <>
                    <ButtonWrapper>
                      <Button themeType={'warning'}>Получить проект дома бесплатно</Button>
                    </ButtonWrapper>
                    <TextAll>
                      <All isActive={isActive}>*</All>
                      <FreeText>
                        Проектируем бесплатно только тем, у кого есть намерение начать строить дом из газобетона в этом сезоне и в Московской области.
                      </FreeText>
                    </TextAll>
                  </>
                )}
              </WithBorder>
            </WrapperAnswer>
          )
        })}
      </BlockAnswer>
    </QuestionsGrid>
  )
}

export default Questions
