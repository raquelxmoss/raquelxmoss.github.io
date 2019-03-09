import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import theme from '../../config/theme'
import { css } from '@emotion/core'

export default ({ data: { site, allMdx } }) => {
  return (
    <Layout site={site}>
      <Container>
        <h1 css={css(`font-size: 70px`)}>Hi! I’m Raquel</h1>
        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2>I’m an experienced full-stack web developer open to permanent remote positions and contracts.</h2>
        <p>
          Most of my experience is in Ruby on Rails and JavaScript (particularly React). I’ve worked on distributed systems handling large amounts of data, and smaller monoliths with a more traditional Rails architecture. I can get stuck into your fat React client, or tinker with your APIs. I enjoy optimising database queries and working on front-end performance.</p>

        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2 name="bring-to-team">What can I bring to your team?</h2>

        <p>Dry, New Zealand sense of humour, excellent written skills, and a willingness to ask hard questions. Aside from that, here’s what some ex-colleagues have to say:</p>

        <blockquote>Raquel is one of the best developers I’ve had the good fortune of working with. She has a great ability to dissect and translate technical issues into manageable layperson terms. She also consistently shows leadership in the many areas outside of just shipping code (professional development and hiring to name just one aspect in my experience). This makes her an immensely valuable team member to any organisation. </blockquote>
        <cite>- Kah Hoe Chan, Head of Product Design</cite>

        <blockquote>Raquel is a technically-astute, productive developer who understands how to design and build robust solutions. She is pragmatic, smart, capable, and fun to work with.</blockquote>

        <cite>- Michael Dowse, Technical Lead</cite>

        <blockquote>She is extremely talented and creative, but also practical and a masterful problem solver. I was also impressed with the high-quality user manuals and training she provided. I would not hesitate to recommend Raquel. She is exemplary.</blockquote>
        <cite>- Kylie Docherty, Communications Manager</cite>

        <blockquote>She was a standout team member from day one. She is an incredibly efficient problem solver and diligent worker who never hesitates to go the extra mile to deliver quality results. She is equally skilled at pairing with team members on a difficult problem, or clearly explaining complex concepts to non-technical clients. She has a delightful sense of humour and understands the real-world implications of technical decisions, making her a brilliant asset to any team. I cannot recommend her strongly enough!</blockquote>
        <cite>- Jess Ducey, Solutions Delivery Manager</cite>

        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2 name="looking-for">What am I looking for in a workplace?</h2>

        <p>I’m looking for a remote-first company to work with. In 2019 I’ll be based mostly in Europe (Krakow), but I do travel around a bit. I usually do a yearly run home to New Zealand due to boring visa issues. I’m looking for a company where the focus is on the quality and quantity of output, rather than bum-at-desk time.</p>

        <p>That said, nothing is set in stone. For the right offer (and perhaps visa assistance) I’m willing to relocate. We can discuss it!</p>
        <h4>I want to solve hard and interesting problems.</h4>

        <p>This might involve handling lots of data, working at a large scale, or doing stuff that’s never been done before.</p>

        <h4>I’d love to jump into a new stack!</h4>

        <p>With the support of your team, I’d be interested in trying something different. I’ve experimented a lot with functional programming in JavaScript, so it would be great to work with a language like Haskell or Scala. I haven’t done anything in Windows programming land before, so taking that on would be a new and interesting challenge. I’ve also worked primarily with dynamically-typed languages, so working with a statically-typed language would also interest me. Basically, with your support and encouragement, I’m up for anything.</p>

        <h4>I’m also keen to explore areas outside the web.</h4>

        <p>Mobile development and VR/AR are high on my wish list. I promise no expertise in those areas, but I’m a solid programmer and a quick learner, so I’m sure we can figure it out.</p>


        <p>I’m looking for a team that is empowered, and where the individuals are trusted to make good decisions. Code quality is important to me, but so is pragmatism. I don't build ivory towers, but nor do I build houses of cards. I like pairing to get unstuck, and regular check ins to make sure I’m on track.</p>

        <p>I like the freedom to put time towards learning, even if it’s not directly related to our work code. For example, at the moment I’m doing a <a href="https://www.coursera.org/learn/build-a-computer">Nand2Tetris</a> course on Coursera. Not directly related to web programming, but it’s stuff I want to learn! Ideally, you’ll be supportive of this and provide me with resources when I ask for them.</p>

        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2 name="community-contrib">My community contributions</h2>

        <p>I’m active in my community! I’ve served on the <a href="https://ruby.nz">Ruby New Zealand</a> committee as both a general member and as President. In 2016 I co-organised the first <a href="https://kiwi.ruby.nz/">KiwiRuby</a>, a Ruby conference in Wellington, New Zealand.</p>

        <blockquote>Raquel is smart, kind, reliable, honest, and hard working. KiwiRuby wouldn’t have happened without her steadfast, no-nonsense approach.</blockquote>
        <cite>– Merrin MacLeod, KiwiRuby Organiser</cite>
        <blockquote>It was a pleasure to work with Raquel when she was president of Ruby NZ. She had a clear vision for the community and the organisational skills to execute it.</blockquote>
        <cite>- Daniel Fone, Secretary of Ruby New Zealand</cite>

        <p>I’ve spoken at conferences and MeetUps including <a href="https://www.youtube.com/watch?v=wPNIw1A08Vs">React Rally</a>, <a href="https://vimeo.com/216801948">CycleConf</a>, <a href="https://youtu.be/CU8jtb6UBGg?t=2673">nz.js(WLG)</a>, <a href="https://www.meetup.com/wellrailed/">WellRailed</a>, <a href="https://www.meetup.com/WellingtonRailsn00bs/">RailsN00bs</a>, and more. I’ve coached at <a href="http://railsgirls.com/wellington.html">RailsGirls</a> in Wellington and at <a href="https://codebar.io/berlin">CodeBar</a> in Berlin.</p>

        <p>With regard to open source, with the help of others I’ve contributed to Cycle.js and created components for others to use. I would love to contribute more to open source.</p>

        <hr css={css(`border-width: 7px; border-color: ${theme.colors.body_color}`)}/>
        <h2 name="hacker">So you want to be a hacker, huh?</h2>

        <p>Yeah, I do! I don’t have much experience in this area, but I would love mentorship and training. I’d like to learn to be a great penetration tester. To give you an idea of my skill level, I’ve worked my way through some of OWASP’s Juice Shop. Aside from that, I bring my skills as a web developer—I know the type of mistakes that I’m likely to make, I know what’s easy to forget or overlook as you write code while pressed for time.</p>

        <p>I love computers, I love the hit of adrenaline when you crack something. Even more importantly, I’m great at writing reports and explaining technical concepts to people whose expertise lies elsewhere—check out my recommendations for proof of that.</p>

        <p>With some training and encouragement, I think I could be a great asset to your pen testing team, so I’d love to talk to you more about that.</p>
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
