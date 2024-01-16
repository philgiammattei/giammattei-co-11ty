---
title: Dicematch
draft: false
date: 2020-02-06
---

### View code [here.](https://github.com/philgiammattei/dicematch)

An Angular SPA to generate a random game of [Dice Throne](https://www.facebook.com/DiceThrone/). Users can name their players, configure teams, and set the pool of playable classes.

{% image "./dicematch.png", "A screenshot of the DiceMatch App" %}

## Under the hood

I made this to solve a problem my wife and I had while playing [Dice Throne](https://www.facebook.com/DiceThrone/), which is that there are (at present time) 14 different classes to choose from, creating hundreds of possible matchups. For a while I ran some JavaScript code in a console to generate random matchups, but when I was looking for a project to enhance my experience with Angular, this seemed like a perfect fit.

The structure of this app is simple: an app component handles the state and business logic, passing data to and receiving events from its children. Above the Match button, components allow the player to configure the match with names, player number and team size, and which heroes to choose from. All of these changes fire events to alter the state of the app component.

When the match button is clicked, this state generates random class assignments that are then displayed below. A fun thing to configure was the random team names, taken from an open-source JSON file containing many English words.

## Future work

If I revisit this app, my main goal is to give the player/class matchup cards more personality. Incorporating official assets and custom color schemes to differentiate the classes would be in the spirit of the game, and make the experience more engaging. I'll be monitoring feedback from the Dice Throne community for more enhancement ideas.
