---
slug: "/better-code-review"
date: "2018-01-10T14:43:20+00:00"
title: "Better Code Review"
description: ""
categories: ["learning", "programming", "code review"]
keywords: ["learn to code", "programming", "code review"]
banner: ""
---

I recently read an article by Max Bittker called ["How to Review Code
You Don't
Understand"](https://maxbittker.com/code-review/), and it got me to thinking about times when I've been
tasked with doing just that.

One of the troubles I have with code review is understanding the context
around a change. Given a diff, I can work through it line-by-line and
understand most of what's going on there, probably. At least, I can
understand the *mechanics* of it. But is that the same as understanding
what the code is trying to achieve? In my opinion, no.

Since becoming a developer, one of the struggles I've had with reading
code is that whatever I'm looking at, I'm seeing the *solution*, not the
problem. And in fact, I'm only seeing one particular solution, the one
I'm tasked with reviewing.

When reviewing code, I want to give thoughtful suggestions, learn
something new, and pick up bugs that I am able to see. (In Ruby, 90% of
the time I'm asking "Hey, do you want to do a nil check
here?").

So, how can I do that when I am only seeing the output of (usually) one
developer's understanding, problem-solving process, and personal style?
It's hard --- arguably one of the harder parts of my job. Lacking
copious code comments, or some sort narration available to me while I
read the code (imagine that --- like director's commentary for code),
all of that important context gets lost.

Assuming that we're not going to overhaul our team's processes entirely,
or build better code-reviewing tools from the ground up, what are some
things we could go ahead and do tomorrow at work to improve our code
review experience?

### Ask the submitter to review the code

If your colleague hasn't already self-reviewed their diff and left
in-line comments, ask them to do so. This will provide some valuable
insight --- why they made a particular choice, what they struggled with,
why something might seem overly complex. They might point out particular
areas they'd like reviewers to focus on, or point to areas where they
might be unsure about their decision-making. This will go a small part
of the way towards capturing the developer's thought process as they
wrote the code.

### Seek to understand what the developer was trying to achieve

If your workplace is like mine, you might start a code review with a
pull request, a user story, some mock-ups, and a general idea of the
larger context surrounding the piece of work.

We don't live in a perfect world, though. Perhaps the user story will be
vague (I'm yet to find a team that writes impeccable stories). Maybe
there's no mock-ups, and maybe you're not too familiar around the
context.

So before proceeding, seek to understand.

The gotcha here getting to the point where you have the right amount of
understanding. Sometimes, a story or PR's description might be too
broad.

For example, you might know that the overarching goal is **Display a
user's address on their invoice PDF**. Great, that's what this code is
going to do, right?

What you might not know, is that a user's address is owned by another
service, and the app that you're looking at has to request that
information. So, the developer has had to think about distributed
transactions, data integrity, and gracefully handling HTTP request
failures. Perhaps they've thought about where this code should sit, and
chosen one option of several.

You need to ask some questions to get enough context.

**What sort of approach did you take?** is a good question to ask your
colleague. **Did you explore any other approaches and decide against
them?** is another good one.

Follow-on questions might explore the trade-offs that they made. If
you're newer to being a developer, that might sound intimidating, but it
doesn't have to be. **Why?** is good follow-up question. It might even
be a good idea to do a [5
Whys](https://en.wikipedia.org/wiki/5_Whys) exercise.

Whatever you do, get into the habit of asking questions before reviewing
the pull request.

### Go through the code on your own\*

Armed with the submitter's self-review, and your understanding of the
approach they took, read through the code, and leave in-line comments.
They could be questions, or notes to yourself, or feedback for the
submitter.

I particularly like Github's feature where you're able to 'stage' all of
your review notes and then submit them all at once. This leaves me free
to write notes to myself, delete any questions that are answered further
down the diff ([RAFO](https://coppermind.net/wiki/RAFO)!), and edit my notes without flooding the submitter
with emails.

### Go through the code with them, if possible

In person, ideally. Get answers to your questions and discuss any
changes to the work.

This is also an opportunity to talk about alternate approaches, which
actually leads me back to my previous [conundrum] with code reviews.

When you're reading code that's been submitted for review, you're seeing
one solution to the problem at hand. **One** solution. When you're
looking at the solution, it's hard to consider other possible solutions.

I've found that it's easier with more experience, but for newer
developers, or for developers reviewing code that's very different from
their usual wheelhouse, it can be very tricky to think outside what has
already been presented to you. It's like the [Einstellung
Effect](https://en.wikipedia.org/wiki/Einstellung_effect).

If you're reviewing a pull request, and you're finding it hard to
consider other approaches, talk to the submitter. Ask them: **Did you
consider other ways to do this? What were they?**

If it turns out they hadn't considered any other ways to approach the
problem, and you haven't thought of any either, that's okay. It's good
to get into the habit of asking those questions anyway.

### Follow up on any discussed changes, then give it the tick!

Hopefully by taking this approach, you've both learned something.
Perhaps you've gained more understanding of your domain, and the
code-base. You and the submitter might have talked about different
approaches to solving the problem, or at least spent two minutes trying
to think of a different approach. Ka pai 😄.

This isn't the approach that I would take with every pull request. Some,
blessedly, are more straightforward than others! But if you find
yourself tasked with reviewing something that's quite chunky, consider
taking some of these ideas and giving them a try.

*\*If it's a large changeset, ask the submitter if they can break it
down for you any more --- not necessarily into separate PRs (though that
might be desirable if it's doable), but perhaps they could take you
through a slice of the work, in whatever way makes sense. What we really
need is a better tool for reasoning about code diffs, but that's a blog
post for another day.*
