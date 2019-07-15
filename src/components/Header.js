import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

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
      ${bpMaxSM} {
        font-size: 0.7em
      }
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
        <Link to="/about" aria-label="About Raquel" activeClassName="active">
          About Raquel
        </Link>
        <Link to="/critical-thinking-podcast" aria-label="Critical Thinking Podcast" activeClassName="active">
          Critical Thinking Podcast
        </Link>
        <a href="mailto:raquelxmoss@gmail.com?subject=via website" aria-label="Email Raquel">
          Contact
        </a>
      </nav>
  </header>
)

export default Header
