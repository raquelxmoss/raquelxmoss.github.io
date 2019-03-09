import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import Container from './Container'

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerColor = 'black',
}) => (
  <header
    css={css`
      background: none;
      padding: 30px 0 0 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
      <nav
        css={css`
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          text-transform: uppercase;
          font-size: 0.9em;
          justify-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color: white;
            padding: 0.5em 0.8em;
          }
          a:focus {
            color: white;
          }
          a:hover {
            color: #d19fd5;
            background: white;
          }
        `}
      >
        <Link to="/blog" aria-label="Blog" activeClassName="active">
          Blog
        </Link>
        <Link to="/hire-me" aria-label="Hire Raquel" activeClassName="active">
          Hire Raquel
        </Link>
        <a href="https://www.dropbox.com/s/j936phjp5do12jx/raquel_moss_cv.pdf?dl=0" aria-label="Raquel's CV">
          CV
        </a>

        <a href="mailto:raquelxmoss@gmail.com?subject=via website" aria-label="Email Raquel">
          Contact
        </a>
      </nav>
  </header>
)

export default Header

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
