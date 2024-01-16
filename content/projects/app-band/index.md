---
title: I'm Writing an App For My Band
draft: false
date: 2020-04-18
hero: ./jesse.jpeg
---

Every garage band deserves an enterprise-level IT infrastructure.

{% image "./jesse.jpeg", "Jesse from Bad Custer at band practice" %}

In the Year Of Our Lord 2020, if you’re attempting to maintain positive cash flow, “I’m in a band” means “I am a cofounder and partner in a content-based ecommerce company, with an aggressive schedule of pop-up stores accompanying exclusive networking events.” There’s a reason the classic rock n’ roll dream starts with an agent discovering the act and signing them to a deal; in this ideal fantasy, other people take care of the business stuff, leaving you to the shredding. Every successful musician has to learn one day that that infrastructure doesn’t really exist anymore, and if you want the job done right, you have to do it yourself.

Day jobs can help bridge this gap. From accounting to marketing to sales, there’s lots of opportunities to take professional experience and apply it to your chosen hobby. In past lifetimes I’ve dabbled in various Business Sciences and thought about how to apply their secrets in the musical sphere, and now that I’m a burgeoning software engineer, even more doors have opened.

## What Does a Band Need?

{% image "./band-photo.jpeg", "The four members of Bad Custer: Jesse, Phil, Kurt and Jake" %}

[Bad Custer](http://badcuster.com) is a long time labor of love, composed of a group of friends who have been playing music together since high school. We’ve been playing various dingy venues in the Pittsburgh area since 2014, and have built up a small but loyal following as we write, remix and mutate our ever-changing catalog of songs. Our second album, [Needs Work](https://misra.bandcamp.com/album/bad-custer-needs-work), is out in June (release show pending, per plague) and the rest of our catalog gets regular plays on [Spotify](https://open.spotify.com/artist/4DZ8fKIQM5cpAVAQy3zs9L).

What a band like Bad Custer needs out of technology is a way to engage fans. Expose people to the music (ostensibly the reason for all of this bother), drive attendence to shows, and if you’re savvy, sell merch online.

If there was a Golden Age of Bands Online, it would definitely be the era of MySpace. Completely customizable pages, free music hosting, very little restrictions on messaging, and a Top 8 you could try to get a spot on. Since we’re not in 2006 anymore, there’s a new environment. Facebook is necessary because no one does event invites better. Music is best hosted on BandCamp or SoundCloud, and Instagram and Twitter are good for reminding people you exist. Mailchimp is a great tool for cultivating an email list, and a website is imperative for SEO.

{% image "./hacker.png", "Stylized image of a hacker and computer code" %}

badcuster.com first took form as a Squarespace page. It was very easy to get set up with a professional-looking site, but you pay out the nose for it. Up to $18 a month just to keep the lights on was not feasible for an act that had yet to up its merch game. Once I learned that you can host a website for $0 if you host it yourself, I created a raw HTML/CSS page for our online presence, and then moved to Angular to make changes easier. Now, an AirTable list of shows that can be edited on my phone now shows up on the website, automatically removing shows that have passed so I don’t have to edit them out. Magic!

But I think we can do better. A year ago I made a first pass at what would be a unique and compelling tool for us to accomplish our goals. Something that we could hawk in between songs instead of just our social media. “Hey, we’re Bad Custer, and we have an app. Install it from your device’s app store or whatever.”

What would the ideal app have? I’ve thought a lot about the creative possibilities that having an embedded phone presence would make possible, but at its simplest form, in order to drive user engagement, we need 3 things:

- Play our music. Free at first to drive downloads, but maybe some exclusive content for sale down the road.

- Deep links to our other web presences. Website, Spotify, Instagram, anywhere that our fans might want us to be for them.

- Push notifications for shows and other important events. Far superior to an email or facebook notification, this would be a way to occasionally remind people about upcoming events in a very direct way.

## Mk I

There’s a small wrinkle: iOS programming sucks. You have to pay to do it, you’re locked into Apple’s tools, which change basically on a whim and break in fun new ways, and there’s a lot of trial and error in getting something to work. Especially when learning how to program, it’s a dangerous mire to get stuck in.

A year ago I made a first pass at a Bad Custer app. While eventually it reached a more mature form, I’ll never be prouder of myself than when I successfully wrote The Horse Button.

At its core the app should be a music player, so getting it to play sounds in response to button touching was sort of the whole deal. In order to learn Apple’s arcane audio API, I started with a picture of a horse that, when tapped, would emit a laptop microphone recording of me shouting “I’m a horse!” Sadly, no recording of The Horse Button exists, its legend lost to time.

I did manage to build out the first two features, with the music player being the most fun. All those touches you take for granted on a phone — seeing album art on the lock screen, controlling output in the control center, using headphones — had to be written in one at a time.

{% image "./app-screen.png", "The main screen of the Bad Custer app" %}

I got this app running on my personal device, but never deployed it to the app store. It wasn’t ready, I was fighting an uphill battle with Apple’s tools, and I was sidetracked by other projects. But now is the time to return!

## Mk II

Since putting down the app project, I accomplished a few other tasks. Namely, attending a coding boot camp and getting hired as a professional software developer. I’m now somewhat competent in Angular, a JavaScript library made by Google, because I am paid to be. At my new workplace, I learned that there are ways to make an Angular project work on mobile devices with less fuss than developing 100% natively. The technologies, called Ionic and Cordova, would allow me to transmit my new skills toward my old goal, and develop for Android simultaneously to boot!

I want to build the core app quickly, because what REALLY excites me about this project is the creative possibilities. Now that I’m writing enterprise code 40 hours a week, for Serious Business Professionals, I want a place to blow off steam. What better place than an app for my band, which is bound by no rules of decorum?

I’ve been brainstorming future features (and would welcome suggestions!): Photo filters, machine-driven song generators, WinAmp style skins and music visualizers. Because why the hell not?

First, though, I have to write the damn thing, and I’m hoping that this post will serve as public motivation. You can follow along on twitter, where I’ll be [updating a thread](https://twitter.com/philgiammattei/status/1251618972870508546) with my progress. Wish me luck, and have a happy quarantine!
