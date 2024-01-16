---
title: giammattei.co, Part 3
subtitle: The Next chapter begins
draft: false
favorite: true
date: 2023-06-16
---

It's been four years since I started developing, and almost four years since [this site](../giammattei) first saw the light of day.  A lot has changed since then!  We had a kid and survived a plague, but more importantly, I went through a coding bootcamp and got a job developing full-time.  A wild career has ensued, full of adventure, layoffs, and more standups than I could ever count.

{% image "./giammattei-3.png", "A screenshot of giammattei.co built with Next.js" %}

I have kept this site up through all of it--even giving it a [facelift](../giammattei-2) at one point--but I haven't done much writing. giammattei.co was originally designed and laser focused for getting me an entry level job in software, and it definitely helped me across the finish line.  In 2019 I wasn't blogging so much as I was doing writeups of things I had coded, and the intent was to present a tidy portfolio of things that I had figured out how to make.  I need that less, now; most of my resume and inteview time is spent talking about things I made on the clock, and it's hard to find the time to work on side  projects when there's a toddler living in your house.

When I'm not tinkering, though, I feel the call.  There's a joy to working on a project by yourself that I fear many developers never experience. Agile methodology and its attendant baggage are useful tools to coordinating the work of dozens of engineers over years, but freed of those constraints, you can FLY. I've been thinking about the early days, when I had no idea what I was doing, and anything was possible because of that. I made a pretty cool [Minesweeper](../minesweeper) at a time before I would have talked myself out of it for being too hard.  Having gotten a solid grasp of what it means to be a Software Professional, I want to use some of my precious spare time exploring being a hacker, a tinkerer, and an enthusiastic student again.

And for that I'll need a new site, with new architecture.  It's funny that I have inadverdently traced the history of web development with this site, starting with [hardcoded HTML](../giammattei) and moving though [Single-Page Apps](../giammattei-2) to arrive at the new hotness.  (Notice I skipped the dark ages of server-side rendering, I think we can all be grateful for that.)  My Angular site did the job well but I kept getting bothered by the performance.

Single-Page Applications work best for heavy sites with lots of data and fuctionality to effectively download an entire JavaScript app onto your browser at page load and then do a lot of amazing stuff, but you have to get that bundle at the front, and it can take a while sometimes.  It became the industry norm last decade to use Angular and Vue and React for all UIs, and it was very often the wrong tool for the job.  Why? Well, personally I used it because it greatly improved the developer experience. Rather than having to manually and repetitively adjust countlesss HTML pages, I could automate and encapsulate redundant code and use it modularly.  But raw HTML is so fast to load!!!  If only there was a way to get the performace of static documents, with the ease and flexibility of single page applications!

Enter Next.js.  Using React syntax but with an opinionated approach similar to Angular, Next is designed to be used easily out of the box and to render static sites on the server.  I get the best of both worlds, being able to write modern code and knowing that I'm making a site that's just as complex and performant as it needs to be.  I'm using an altered version of [devii](devii.dev), a wonderful blog template that includes markdown rendering and RSS out of the box.

I have some projects to write about, but I'm envisioning this space more as a place where I can write about things more broadly.  I've been thinking a lot about what this profession looks like with the advent of AI tools, and the importance of owning space on the web in the face of large platforms melting down.  I also want to dive into the Apple developer ecosystem, and thought it might be fun to write about that experience.  So stay tuned, and subscribe to the RSS feed at the bottom of the page if that's your thing!