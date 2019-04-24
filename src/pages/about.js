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
        <h1 css={css(`font-size: 70px; ${bpMaxSM} { font-size: 2em;}`)}>Hi! I’m Raquel</h1>
        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2>I’m an experienced full-stack web developer</h2>
        <p>
          Most of my experience is in Ruby on Rails and JavaScript (particularly React). I’ve worked on distributed systems handling large amounts of data, and smaller monoliths with a more traditional Rails architecture.</p>
        <p>I like knitting, writing, travelling, and looking at contemporary art. For best results, combine all of the above.</p>

        <blockquote>Raquel is one of the best developers I’ve had the good fortune of working with. She has a great ability to dissect and translate technical issues into manageable layperson terms. She also consistently shows leadership in the many areas outside of just shipping code (professional development and hiring to name just one aspect in my experience). This makes her an immensely valuable team member to any organisation. </blockquote>
        <cite>- Kah Hoe Chan, Head of Product Design</cite>

        <blockquote>Raquel is a technically-astute, productive developer who understands how to design and build robust solutions. She is pragmatic, smart, capable, and fun to work with.</blockquote>

        <cite>- Michael Dowse, Technical Lead</cite>

        <blockquote>She is extremely talented and creative, but also practical and a masterful problem solver. I was also impressed with the high-quality user manuals and training she provided. I would not hesitate to recommend Raquel. She is exemplary.</blockquote>
        <cite>- Kylie Docherty, Communications Manager</cite>

        <blockquote>She was a standout team member from day one. She is an incredibly efficient problem solver and diligent worker who never hesitates to go the extra mile to deliver quality results. She is equally skilled at pairing with team members on a difficult problem, or clearly explaining complex concepts to non-technical clients. She has a delightful sense of humour and understands the real-world implications of technical decisions, making her a brilliant asset to any team. I cannot recommend her strongly enough!</blockquote>
        <cite>- Jess Ducey, Solutions Delivery Manager</cite>

        <blockquote>Raquel is the type of developer I want to be. She is a critical thinker and is able to design and execute a solution to the problems she's facing. She understands code design and the trade offs that come with different solutions."</blockquote>
        <cite>- Ian Jones, Developer</cite>

        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2 name="community-contrib">My community contributions</h2>

        <p>I’ve served on the <a href="https://ruby.nz">Ruby New Zealand</a> committee as both a general member and as President. In 2017 I co-organised the first <a href="https://kiwi.ruby.nz/">KiwiRuby</a>, a Ruby conference in Wellington, New Zealand.</p>

        <blockquote>Raquel is smart, kind, reliable, honest, and hard working. KiwiRuby wouldn’t have happened without her steadfast, no-nonsense approach.</blockquote>
        <cite>– Merrin MacLeod, KiwiRuby Organiser</cite>
        <blockquote>It was a pleasure to work with Raquel when she was president of Ruby NZ. She had a clear vision for the community and the organisational skills to execute it.</blockquote>
        <cite>- Daniel Fone, Secretary of Ruby New Zealand</cite>

        <p>I’ve spoken at conferences and MeetUps including <a href="https://www.youtube.com/watch?v=wPNIw1A08Vs">React Rally</a>, <a href="https://vimeo.com/216801948">CycleConf</a>, <a href="https://youtu.be/CU8jtb6UBGg?t=2673">nz.js(WLG)</a>, <a href="https://www.meetup.com/wellrailed/">WellRailed</a>, <a href="https://www.meetup.com/WellingtonRailsn00bs/">RailsN00bs</a>, and more. I’ve coached at <a href="http://railsgirls.com/wellington.html">RailsGirls</a> in Wellington and at <a href="https://codebar.io/berlin">CodeBar</a> in Berlin.</p>

        <p>With regard to open source, with the help of others I’ve contributed to Cycle.js and created components for others to use. I would love to contribute more to open source.</p>
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
