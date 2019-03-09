---
slug: "/review-scalable-and-modular-architecture-for-css-by-jonathan-snook"
date: "2015-10-20T12:32:56+00:00"
title: "Review: Scalable and Modular Architecture for CSS by Jonathan Snook"
description: ""
categories: ["css", "book-review"]
keywords: ["css"]
banner: "./images/css.jpg"
---

Over the last year I’ve become increasingly frustrated with CSS. I used to be its champion; when people moaned about how touchy and picky CSS is, I told them “It’s really not that hard! You probably have a specificity problem, let’s take a look”

Since increasing my knowledge of basic programming principles, though, and diving into Ruby and Javascript, I’ve been loath to spend time on CSS. Every time I touch it I feel frustrated, and this joke hits far too close to home:

> “Two CSS properties walk into a bar. A barstool in a completely different bar falls over”

Ugh.

I’m annoyed at my frustration, and I want to get back my love of CSS — this time, by increasing my knowledge of CSS and related tools like Sass. I want to dive deeper and take as much pride and joy in my CSS as I do in my Ruby.

To that end, I finally picked up [_Scalable and Modular Architecture for CSS_](https://smacss.com/) by Jonathan Snook (known as SMACSS, and pronounced ‘smacks’) and read it through. SMACSS is a great primer on organising your CSS. It’s particularly useful for CSS beginners, as following SMACSS style will get you into some good habits and leave you feeling less overwhelmed by the hodgepodge of rules, selectors, and properties that can build up the first few times you seriously try to style something. It’s also great for people like me, whose knowledge of CSS built haphazardly over the years — I know how to do some cool things with CSS, but my organisational style left a lot to be desired.

Snook suggests categorising your CSS into a few different groups:

*   Base, which contains all the default rules. There should be no use of class or ID selectors here, only single element selectors
*   Layout, which as the name suggests, specifies how the elements should be laid out on the page.
*   Modules, where the meat of our styling lives. In here you will mostly be using class selectors to apply rules.
*   State, which contains rules that describe how our modules look in different states — selected, active, hidden, highlighted, featured, what-have-you.
*   Themes, for when multiple different ‘skins’ may need to be employed (e.g. a ‘light’ theme and a ‘dark’ theme).

The rationale here is that by categorising CSS this way, you can avoid repetition and keep your CSS DRY.

SMACSS contains lots of relevant examples that show exactly how such organisation can result in more sensible CSS. Unfortunately, if you’re reading on an e-reader, the code examples can look a bit out-of-whack (I’ve found this for all programming books, though).

My read-thorough of SMACSS was pretty gratifying. As it turns out, the way I’ve been writing CSS, particularly over the last six months, has been pretty close to SMACSS style anyway. You may find this too, particularly if you’re familiar with CSS libraries such as Bootstrap and Pure, which mostly encourage SMACSS style. Reading the book gave me a bit more context as to the _why_ of doing it the SMACSS way, rather than just the how.

My understanding of the organisational structure is much better, and I’ve identified lots of areas where I can improve. In particular, my state rules have mostly been contained in my modules. From now on I’ll start separating them out. I’ll also admit that my organisation of CSS properties is very spotty. Though I’ve been aware of the suggested structure of _box, border, background, text, other_, my adherence to it has been on a _when I remember and can be bothered looking up the order_ basis, which hardly leads to consistent code. Here’s an example that follows the property order suggested by Snook:

```css
p.featured-text {
  position: relative;
  top: 20px;
  display: block;
  width: 80%;
  padding: 10px 20px;
  border: 2px solid #efefef;
  border-raidus: 6px;
  background: #fff;
  font-family: Gotham, Arial, Helvetica, sans-serif;
  line-height: 2;
}
```

Some of the examples in the book are, of course, out-of-date. The author takes care to mention IE6 support, but only a really sadistic client would force a developer to support IE6 these days. There’s also a lot of guff about vendor prefixes which we are privileged enough to ignore now thanks to tools such as Bourbon.

If you’re into LESS, you’re out of luck when it comes to the pre-processors section of the book. Snook gives examples exclusively in Sass. It’s not hard to translate to LESS, but let’s face it — Sass seems to be winning the pre-processor game. Notably, Bootstrap 4 will support Sass rather than LESS, and if you’re a Rails developer, you’re probably using Sass exclusively too.

SMACSS is a quick and painless read. There’s no crazy jargon and if you have a passing familiarity with HTML and CSS, you’ll keep up with no trouble. I recommend reading it if you’re just getting into CSS, or you’re looking to optimise and improve your CSS organisation.
