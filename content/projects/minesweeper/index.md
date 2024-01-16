---
title: Minesweeper
draft: false
favorite: true
date: 2019-09-28
---

# [Play Minesweeper](https://mine-craft-sweeper.netlify.app/)

{% image "./minesweeper-cover.png", "A screenshot of a Minecraft-flavored Minesweeper project written in JavaScript" %}

Long ago, I made a version of Minesweeper in Java for a school project. It was ugly, but it had all the functionality that you would expect if you have played the Windows-bundled game at any point in the 1990s.

As a project for my developer portfolio, I wanted to revisit this concept, with some additional requirements:

-I wanted it to look good. No more simple paint commands, there needed to be a distinct visual style and a high amount of polish.

-I wanted it to be mobile friendly. Too many minesweeper clones mindlessly clone the left click/right click interface of the original, which makes it impossible to use on a touchscreen device.

-I wanted it to be HTML-based. My previous attempt at the game used a Java drawing canvas, and refreshed the entire screen after each click. To practice DOM manipulation, I wanted each cell to be an HTML element that would keep track of its state, react to input, and show the correct content.

This would be a huge challenge, but many design pieces fell into place when an idea hit me: could I mash up Minesweeper and Minecraft?

Minecraft is a game that uses a variety of square image elements. Its gameplay also centers on digging down and avoiding randomly generated danger. And the mechanic of holding a click or tap to break through a block over time solved my input problem. Plus, all the assets I would need (including sound effects) were easy to obtain directly from the game! (My thanks to Mojang and Microsoft for my unauthorized use of their intellectual property.)

I began by learning how to use JavaScript to create a grid of `<div>` elements, using for loops to assign each of them an ID that contained their x and y coordinates. A two dimensional array of objects called `state` held all the information I needed for each block: whether it had been revealed, if it was a bomb(creeper!), how many bombs were nearby, and so on.

Using regular expressions and the getElementById command, I was able to use several specialized functions to keep the visual state of each block and its logical state in sync, and some tricky timeout and event listener logic gave me the pointer interface I was looking for: tap once to "flag" a block, hold to reveal.

I used timeouts in other places to improve the tactile feel of the game. The collapsing that occurs when a "zero-nearby" square is discovered (a process that makes clever use of recursive functions) is time-delayed to proceed in steps. A game over screen coincides with the creeper's explosion, along with an interval-based transparency fade. I really enjoyed adding these touches to the game, since they added up to create a polished experience.

In future versions, I'd like to add a difficulty selector, make use of animation methods to keep the block breaking animation fluid, and find a way to frontload assets so they do not take time to load upon the first playthrough (this is most noticeable on mobile). If you have feedback on how to make this better, I would love to hear it!
