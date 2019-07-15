import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import theme from '../../config/theme'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

export default ({ data: { site, allMdx } }) => {
  return (
    <Layout site={site}>
      <Container>
        <h1 css={css(`font-size: 70px; ${bpMaxSM} { font-size: 2em;}`)}>Critical Thinking Podcast</h1>
        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2>Coming soon 😘</h2>

      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
