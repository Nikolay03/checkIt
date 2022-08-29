import { mediaQueries } from 'constants/mediaQueries'
import React, { FC } from 'react'
import styled from 'styled-components'
import { is, prop } from 'ramda'
import Right from 'media/icons/Right'
import mapIndexed from 'utils/mapIndexed'
import { BreadcrumbsTypes } from 'types'
import { Link } from 'react-router-dom'

interface BreadcrumbsWrap {
  style?: any
}

interface LaptopBreadcrumbs {
  styles?: any
}
const LaptopBreadcrumbs = styled('div')<LaptopBreadcrumbs>`
  padding-top: 15px;
  ${({ styles }) => styles}
  @media ${mediaQueries.tabletL} {
    margin-bottom: 0px;
    border-bottom: 1px solid transparent;
  }
`

const BreadcrumbsWrap = styled('nav')<BreadcrumbsWrap>`
  display: flex;
  flex-flow: row;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.micro};
  font-weight: 500;
  line-height: 14px;
  & span {
    text-decoration: underline;
    padding-bottom: 2px;
    cursor: pointer;
  }
  & > *:not(:last-child) {
    margin: 0 15px 0 0;
    @media ${mediaQueries.tabletL} {
      margin: 0 15px 0 0;
    }
    color: ${({ theme }) => theme.color.secondary};
    & span {
      &:hover {
        color: ${({ theme }) => theme.color.warning};
      }
    }
    svg {
      fill: ${({ theme }) => theme.color.secondary};
      margin-left: 15px;
      @media ${mediaQueries.tabletL} {
        margin-left: 15px;
      }
      width: 6px;
      height: 9px;
      font-size: 11px;
      margin-bottom: 2px;
    }
  }
  & > em {
    text-decoration: underline;
    font-style: normal;
    cursor: default;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0 10px 0 0;
  }
  ${({ style }) => style};
`

const LinkWrapper = styled('div')`
  display: flex;
  align-items: center;
`

const Title = styled('h1')`
  text-align: left;
  font-weight: 400;
  padding: 15px 0 24px 0;
  margin: 0px;
  font-size: ${({ theme }) => theme.fontSize.big};
  @media ${mediaQueries.tabletL} {
    padding: 25px 0 24px 0;
  }
  @media ${mediaQueries.tabletS} {
    text-align: left;
  }
`

type BreadcrumbsObject = {
  url: string
  title: string
}
const Breadcrumbs: FC<BreadcrumbsTypes> = props => {
  const { way = [], currentWay, titleBlock, style, styles } = props
  if (currentWay) {
    const isTitle = is(String, titleBlock)
    return (
      <LaptopBreadcrumbs styles={styles}>
        <BreadcrumbsWrap style={style}>
          {mapIndexed((item: BreadcrumbsObject, index) => {
            const url = prop('url', item)
            const title = prop('title', item)
            return (
              <LinkWrapper key={index}>
                <Link to={url}>
                  <span>{title}</span>
                </Link>
                <Right />
              </LinkWrapper>
            )
          }, way)}
          <em>{currentWay}</em>
        </BreadcrumbsWrap>
        {isTitle && <Title>{titleBlock}</Title>}
      </LaptopBreadcrumbs>
    )
  }
  return null
}

Breadcrumbs.defaultProps = {
  withBorder: true
}

export default Breadcrumbs
